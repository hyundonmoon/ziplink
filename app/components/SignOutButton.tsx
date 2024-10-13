import { signOut } from '@/app/lib/actions';

export default function SignOutButton() {
	return (
		<form action={signOut}>
			<button className="hover:border-b-2" type="submit">
				Sign Out
			</button>
		</form>
	);
}
