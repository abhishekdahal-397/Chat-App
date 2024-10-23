"use client";
import React, { useState, useEffect } from "react";

// Define the type for a friend object
interface Friend {
	id: number;
	username: string;
}

const Page: React.FC = () => {
	// Use the Friend type for the state
	const [friends, setFriends] = useState<Friend[]>([]);

	useEffect(() => {
		// Simulating API call with dummy data
		const fetchedFriends: Friend[] = [
			{ id: 1, username: "John Doe" },
			{ id: 2, username: "Jane Doe" },
		];
		setFriends(fetchedFriends);
	}, []);

	return (
		<div>
			<div>Abhishek Dahal</div>
			{friends.length > 0 ? (
				friends.map((friend) => <div key={friend.id}>{friend.username}</div>)
			) : (
				<p>No friends found</p>
			)}
		</div>
	);
};

export default Page;
