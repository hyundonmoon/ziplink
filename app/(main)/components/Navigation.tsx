import SignOutButton from '@/app/(main)/components/SignOutButton';
import Link from 'next/link';

export default function Navigation() {
	return (
		<nav>
			<ul className="flex justify-between items-center gap-4">
				<li>
					<Link
						href="/my-links"
						className="hover:border-b border-current"
					>
						My Links
					</Link>
				</li>

				<li>
					<Link
						href="/settings"
						className="hover:border-b border-current"
					>
						Settings
					</Link>
				</li>

				<li>
					<SignOutButton />
				</li>
			</ul>
		</nav>
	);
}
