import Link from 'next/link';

export default function SignInButton() {
	return (
		<Link href="/auth/signin" className="hover:border-b border-current">
			Sign In
		</Link>
	);
}
