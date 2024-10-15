import { signIn } from '../../lib/actions';

export default function SignInButton() {
	return (
		<form action={signIn}>
			<button type="submit" className="hover:border-b border-current">
				Sign In
			</button>
		</form>
	);
}
