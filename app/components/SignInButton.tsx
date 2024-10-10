import { signIn } from '../lib/actions';

export default function SignInButton() {
	return (
		<form action={signIn}>
			<button type="submit">Sign In</button>
		</form>
	);
}
