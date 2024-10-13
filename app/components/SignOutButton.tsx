import { signOut } from '@/app/lib/actions';

export default function SignOutButton() {
	return (
		<form action={signOut}>
			<button className="hover:border-b border-current" type="submit">
				Sign Out
			</button>
		</form>
	);
}
