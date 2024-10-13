import Navigation from '@/app/components/Navigation';
import SignInButton from '@/app/components/SignInButton';
import { auth } from '@/auth';
import Link from 'next/link';

export default async function Header() {
	const session = await auth();
	const loggedIn = !!session?.userId;

	return (
		<header className="flex justify-between items-center p-4">
			<h1 className="text-2xl font-bold">
				<Link href="/">URL Shortener</Link>
			</h1>
			{loggedIn ? <Navigation /> : <SignInButton />}
		</header>
	);
}
