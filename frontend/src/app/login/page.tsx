"use client"; // Required to enable client-side rendering

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface LoginResponse {
	message: string;
	error?: string;
	Token?: string;
}

export default function LoginPage() {
	const router = useRouter();
	const [username, setUsername] = useState<string>("");
	const [message, setMessage] = useState<string>("");
	const [Token, setToken] = useState<string>("");

	const handleLogin = async () => {
		try {
			const response = await axios.post<LoginResponse>(
				"http://localhost:5000/api/users/login",
				{ username }
			);

			// Check for response status
			if (response.data.Token) {
				localStorage.setItem("token", response.data.Token);
				setMessage(response.data.message);
				setUsername(username);
				router.push("/chat");
			} else {
				setMessage(response.data.error || "Token not received. Login failed.");
			}
		} catch (error) {
			// Check if error is an Axios error
			if (axios.isAxiosError(error) && error.response) {
				setMessage(
					error.response.data.error || "An error occurred. Please try again."
				);
			} else {
				setMessage("An error occurred. Please try again.");
			}
		}
	};
	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleLogin();
		}
	};

	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-100">
			<div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
				<h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
				<input
					type="text"
					placeholder="Enter your username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					onKeyDown={handleKeyPress}
					className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
				<button
					onClick={handleLogin}
					className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
				>
					Login
				</button>
				{message && (
					<p
						className={`mt-4 text-center ${
							message.includes("Failed") || message.includes("Invalid")
								? "text-red-500"
								: "text-green-500"
						}`}
					>
						{message}
					</p>
				)}
			</div>
		</div>
	);
}
