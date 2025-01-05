"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/context";
export default function Home() {
	const { name, setName } = useAppContext();

	return (
		<div>
			<Button variant={"outline"} asChild>
				<Link href="/register">register</Link>
			</Button>
			<Link href="/home/423432">Chatpage</Link>
		</div>
	);
}
