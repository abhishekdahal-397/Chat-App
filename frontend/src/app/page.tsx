import Link from "next/link";
import { Button } from "@/components/ui/button";
//passport-auth branch
export default function Home() {
	return (
		<div>
			<Button variant={"outline"} asChild>
				<Link href="/register">register</Link>
			</Button>
		</div>
	);
}
