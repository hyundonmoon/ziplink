import { signOut } from '@/app/lib/actions';

export default function SignOutButton() {
	return (
		<form action={signOut}>
			<button type="submit">Sign Out</button>
		</form>
	);
}
