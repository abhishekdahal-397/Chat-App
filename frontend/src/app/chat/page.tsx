"use client";
import ChatBox from "@/ui/chatSection";
import React from "react";

export default function ChatPage() {
	return (
		<div className="bg-blue-800">
			Authenticated user
			<ChatBox />
		</div>
	);
}
