"use client";
// components/Register.tsx
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { User } from "@/types/user";

const Register = () => {
	const router = useRouter();
	const [username, setUsername] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [error, setError] = useState<string>("");
	const [success, setSuccess] = useState<string>("");

	const [registeredUser, setRegisteredUser] = useState<User | null>(null);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError("");
		setSuccess("");

		// Basic validation
		if (!username) {
			setError("All fields are required");
			return;
		}

		try {
			const res = await axios.post(
				"http://localhost:5000/api/users/register",
				{ username }, // Payload to send in the POST request
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			setRegisteredUser(res.data.user);
			if (!res) {
				throw new Error("Registration failed");
			}
			router.push(`/home/${res.data.user._id}`);

			setSuccess("registration success");
		} catch (err: any) {
			setError(err.message);
		}
	};

	return (
		<div className="max-w-md mx-auto mt-10">
			<h2 className="text-2xl font-bold">Register</h2>
			<form onSubmit={handleSubmit} className="space-y-4">
				{error && <p className="text-red-500">{error}</p>}
				{success && <p className="text-green-500">{success}</p>}
				<input
					type="text"
					placeholder="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					className="w-full p-2 border border-gray-300 rounded"
				/>

				<button
					type="submit"
					className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
				>
					Register
				</button>
			</form>
		</div>
	);
};

export default Register;
