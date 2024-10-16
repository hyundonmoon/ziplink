import DeleteAccountButton from '@/app/(main)/settings/_components/DeleteAccountButton';
import MyAccountInfo from '@/app/(main)/settings/_components/MyAccountInfo';
import { auth } from '@/auth';
import Link from 'next/link';

export default async function SettingsPage() {
	const authInfo = await auth();
	const signInLink = `/auth/signin?callbackUrl=${encodeURIComponent(
		'/settings'
	)}`;

	if (!authInfo?.user) {
		return (
			<div className="text-center py-16">
				<p>
					<Link
						href={signInLink}
						className="hover:border-b border-current"
					>
						Sign in
					</Link>{' '}
					to view your links
				</p>
			</div>
		);
	}

	return (
		<div className="space-y-8">
			<h1 className="text-2xl font-bold">Settings</h1>

			<hr />

			<MyAccountInfo
				name={authInfo.user?.name || 'Unknown'}
				email={authInfo.user.email || 'Unknown'}
			/>

			<hr />

			<DeleteAccountButton />
		</div>
	);
}
