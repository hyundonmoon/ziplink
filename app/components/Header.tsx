import SignInButton from '@/app/components/SignInButton';
import { auth } from '@/auth';
import SignOutButton from './SignOutButton';

export default async function Header() {
	const session = await auth();
	const loggedIn = !!session?.userId;

	return (
		<header className="flex justify-between items-center p-4">
			<h1 className="text-2xl font-bold">URL Shortener</h1>
			{loggedIn ? <SignOutButton /> : <SignInButton />}
		</header>
	);
}
