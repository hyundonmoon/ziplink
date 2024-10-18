import { signOut } from '@/app/lib/actions';

export default function SignOutButton() {
	return (
		<form action={signOut}>
			<button
				className="px-2 py-1.5 block hover:bg-gray-50 transition w-full h-full text-left"
				type="submit"
			>
				Sign Out
			</button>
		</form>
	);
}
