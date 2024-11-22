import { SignIn } from "@clerk/nextjs";

export default function Page() {
	return (
		<div className="h-screen  w-screen flex items-cneter justify-center ">
			<SignIn />
		</div>
	);
}
