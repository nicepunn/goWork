import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function SignInOut() {

    const session = await getServerSession(authOptions);
    return (
        <div className="items-center">
            {
				session?
				<Link href="api/auth/signout">
					<div className='items-center px-3 py-3 text-white font-bold'>
						Sign-out of {session.user?.name}
                    </div>
				</Link>
				:
				<Link href="api/auth/signin">
					<div className='items-center px-4 py-3 text-white font-bold'>
						Sign-in
                    </div>
				</Link>
			}
        </div>
    )
}