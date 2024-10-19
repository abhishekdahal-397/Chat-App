import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ChatBox = () => {
	const [messages, setMessages] = useState([
		{ sender: "user", text: "Hello!" },
		{ sender: "other", text: "Hi there!" },
	]);

	const [messageInput, setMessageInput] = useState("");
	const messagesEndRef = useRef<HTMLDivElement>(null);

	// Scroll to the bottom whenever messages change
	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	const sendMessage = () => {
		if (messageInput.trim() !== "") {
			setMessages([...messages, { sender: "user", text: messageInput }]); // Corrected sender for outgoing messages
			setMessageInput(""); // Clear input field
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			sendMessage(); // Call sendMessage when Enter is pressed
		}
	};

	return (
		<div className="max-w-md mx-auto overflow-hidden rounded-lg border border-black shadow-lg p-4">
			<div className="h-64 bg-blue-50 overflow-y-auto mb-4 p-2">
				{messages.map((msg, index) => (
					<div
						key={index}
						className={`mb-2 flex ${
							msg.sender === "user" ? "justify-end" : "justify-start"
						}`}
					>
						<div
							className={`max-w-xs p-3 rounded-lg ${
								msg.sender === "user"
									? "bg-blue-500 text-white"
									: "bg-gray-300 text-black"
							}`}
						>
							{msg.text}
						</div>
					</div>
				))}
				{/* Ref to ensure scrolling stays at the bottom */}
				<div ref={messagesEndRef} />
			</div>
			<div className="flex gap-2">
				<Input
					value={messageInput}
					onChange={(e) => setMessageInput(e.target.value)}
					placeholder="Type a message"
					className="flex-grow"
					onKeyDown={handleKeyDown}
				/>
				<Button onClick={sendMessage}>Send</Button>
			</div>
		</div>
	);
};

export default ChatBox;
