import Navigation from '@/app/components/Navigation';
import SignInButton from '@/app/components/SignInButton';
import { auth } from '@/auth';
import Link from 'next/link';

export default async function Header() {
	const session = await auth();
	const loggedIn = !!session?.userId;

	return (
		<header className="flex justify-between items-center">
			<h1 className="text-2xl font-bold">
				<Link href="/">hdm.lt</Link>
			</h1>
			{loggedIn ? <Navigation /> : <SignInButton />}
		</header>
	);
}
