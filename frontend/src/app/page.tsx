import Link from "next/link";
import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
	const user = await currentUser();
	const username = user?.username;
	console.log("username is ", username);

	return (
		<div>
			<p>{username}</p>
			<Button variant={"outline"} asChild>
				<Link href="/register">register</Link>
			</Button>
		</div>
	);
}
