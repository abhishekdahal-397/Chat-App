"use client";
import React, { useState, useEffect } from "react";
import { BsChatSquareFill } from "react-icons/bs";
import { GrStatusGood } from "react-icons/gr";
import { GrChannel } from "react-icons/gr";
import { MdPeopleAlt } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import { RiChatNewFill } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
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
			{ id: 3, username: "ane Doe" },
			{ id: 4, username: "Jne Doe" },
			{ id: 5, username: "dafane Doe" },
			{ id: 6, username: "Janasdfe Doe" },
			{ id: 7, username: "Jane Dodafse" },
			{ id: 8, username: "Janeasdf Doe" },
			{ id: 9, username: "Janes Doe" },
		];
		setFriends(fetchedFriends);
	}, []);

	return (
		<div className="h-[100vh] w-[100vw] rounded  bg-blue-200 grid  grid-cols-[5%_30%_65%]">
			<div
				style={{ backgroundColor: "#202c33" }}
				className="flex flex-col justify-between"
			>
				<div className="h-[40vh] w-full ">
					<BsChatSquareFill className="cursor-pointer h-[4vh] w-[4vh] text-white  m-auto mt-6" />
					<GrStatusGood className="cursor-pointer h-[4vh] w-[4vh] text-white  m-auto mt-6" />
					<GrChannel className="cursor-pointer h-[4vh] w-[4vh] text-white  m-auto mt-6" />
					<MdPeopleAlt className="cursor-pointer h-[4vh] w-[4vh] text-white  m-auto mt-6" />
				</div>
				<div className=" h-[20vh] w-full">
					<IoSettings className="cursor-pointer h-[4vh] w-[4vh] text-white  m-auto mt-6" />
					<CgProfile className="cursor-pointer h-[4vh] w-[4vh] text-white  m-auto mt-6" />
				</div>
			</div>
			<div style={{ backgroundColor: "#111b21" }} className="text-white p-4">
				<div className="flex justify-between">
					<p className="text-3xl h-6 font-bold ">Chats</p>{" "}
					<div className="flex space-x-4">
						{" "}
						<div>
							<RiChatNewFill className="h-[4vh] cursor-pointer w-[4vh] text-white  m-auto " />
						</div>
						<div>
							{" "}
							<CiMenuKebab className="cursor-pointer h-[4vh] w-[4vh] text-white  m-auto " />
						</div>
					</div>
				</div>
				<div>Abhishek Dahal</div>

				{friends.length > 0 ? (
					friends.map((friend) => <div key={friend.id}>{friend.username}</div>)
				) : (
					<p>No friends found</p>
				)}
			</div>
			<div className="bg-[#0b141a]"></div>
		</div>
	);
};

export default Page;
