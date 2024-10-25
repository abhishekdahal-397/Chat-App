"use client";
import React, { useState, useEffect } from "react";
import { BsChatSquareFill } from "react-icons/bs";
import { GrStatusGood } from "react-icons/gr";
import { GrChannel } from "react-icons/gr";
import { MdPeopleAlt } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoMdSend } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { RiChatNewFill } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
// Define the type for a friend object
interface Friend {
	id: number;
	username: string;
}
interface Message {
	sender: string;
	receiver: string;
	date: Date;
}

const Page: React.FC = () => {
	// Use the Friend type for the state

	const [friends, setFriends] = useState<Friend[]>([]);
	const [outgoingMessages, setOutgoingMessages] = useState<Message[]>([]);
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
		<div className="h-[100vh] rounded  bg-blue-200 grid  grid-cols-[5%_30%_65%]">
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
			<div
				style={{ backgroundColor: "#111b21" }}
				className="text-white p-4 overflow-y-scroll"
			>
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
				<input
					placeholder="search"
					autoComplete="off"
					className="h-[6vh] focus:outline-none  w-[25vw] rounded px-3  bg-[#202c33] mt-[5vh] flex items-center"
				></input>

				{friends.length > 0 ? (
					friends.map((friend) => (
						<div
							key={friend.id}
							className="h-[13vh] p-2 cursor-pointer my-auto w-full mt-3 rounded hover:bg-slate-600 "
						>
							<div className="flex ">
								<div className="h-[10vh]  w-[10vh] rounded-full bg-white"></div>
								<div className="flex flex-col mt-2 mx-2">
									<div className="">{friend.username}</div>
									<p className=" mx-3 text-[#7a8a94] ">latest message</p>
								</div>
							</div>
							<div className="h-0 border mt-2 border-gray-600 border-1 w-full"></div>
						</div>
					))
				) : (
					<p>No friends found</p>
				)}
			</div>
			<div className="bg-[#0b141a] text-white h-full  w-[65vw]  grid grid-rows-[10%_80%_10%]">
				<div className="px-3 w-[65vw] flex items-center gap-2  bg-[#202c33]">
					<div className=" rounded-full  h-[7vh] w-[7vh]"></div>
					<div className="mx-2 w-[20vw]">
						<p>Name</p>{" "}
						<p className="text-sm text-gray-300"> Last seen Today 8:40 A.M</p>
					</div>
					<div className="flex items-center h-full  w-[20vw] ml-[28vw]">
						<FaSearch className="cursor-pointer h-[4vh] w-[4vh] text-white  mr-4 " />
						<CiMenuKebab className="cursor-pointer h-[4vh] w-[4vh] text-white ml-8 " />
					</div>
				</div>
				<div className="flex flex-col h-[80vh] overflow-y-scroll p-4 space-y-2">
					{/* Incoming message (aligned to the left) */}
					<div className="flex items-center justify-start ">
						<p className="w-[25vw]  bg-white text-black rounded p-4">
							Hey, how are you?
						</p>
					</div>

					{/* Outgoing message (aligned to the right) */}
					<div className="flex h-[7vh]   items-center  justify-end">
						<p className="w-[25vw] bg-pink-700 text-white rounded p-2">
							I am good! What about you?
						</p>
					</div>
					<div className="flex h-[7vh]   items-center  justify-end">
						<p className="w-[25vw] bg-pink-700 text-white rounded p-2">
							I am good! What about you?
						</p>
					</div>
					<div className="flex h-[7vh]   items-center  justify-end">
						<p className="w-[25vw] bg-pink-700 text-white rounded p-2">
							I am good! What about you?
						</p>
					</div>
					<div className="flex items-center justify-start ">
						<p className="w-[25vw]  bg-white text-black rounded p-4">
							Hey, how are you?
						</p>
					</div>
					<div className="flex items-center justify-start ">
						<p className="w-[25vw]  bg-white text-black rounded p-4">
							Hey, how are you?
						</p>
					</div>
					<div className="flex items-center justify-start ">
						<p className="w-[25vw]  bg-white text-black rounded p-4">
							Hey, how are you?
						</p>
					</div>
					<div className="flex items-center justify-start ">
						<p className="w-[25vw]  bg-white text-black rounded p-4">
							Hey, how are you?
						</p>
					</div>
					<div className="flex items-center justify-start ">
						<p className="w-[25vw]  bg-white text-black rounded p-4">
							Hey, how are you?
						</p>
					</div>
					<div className="flex items-center justify-start ">
						<p className="w-[25vw]  bg-white text-black rounded p-4">
							Hey, how are you?
						</p>
					</div>
					<div className="flex items-center justify-start ">
						<p className="w-[25vw]  bg-white text-black rounded p-4">
							Hey, how are you?
						</p>
					</div>
				</div>

				<div className="bg-[#202c33] w-[full] items-center flex">
					<HiOutlineEmojiHappy className="cursor-pointer h-[5vh] w-[5vh] text-white ml-4" />
					<FaPlus className="cursor-pointer h-[4vh] w-[4vh] text-white ml-4" />
					<input
						className=" h-[7vh] rounded w-[50vw] ml-4 px-5 text-slate-900 focus:outline-none"
						placeholder="type a message ....."
					/>
					<div>
						<IoMdSend className="cursor-pointer p-2 pl-3 h-[8vh] rounded tramsition-transform duration-500 hover:scale-110  w-[8vh] text-white hover:bg-gray-600 ml-4" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
