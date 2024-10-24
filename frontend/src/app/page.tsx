import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div>
			<Button variant={"outline"} asChild>
				<Link href="/register">register</Link>
			</Button>
			<Link href="/home/423432">Chatpage</Link>
		</div>
	);
}
