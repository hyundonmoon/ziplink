import SignOutButton from '@/app/components/SignOutButton';
import Link from 'next/link';

export default function Navigation() {
	return (
		<nav>
			<ul className="flex justify-between items-center gap-4">
				<li>
					<button>
						<Link href="/my-links" className="hover:border-b-2">
							My Links
						</Link>
					</button>
				</li>
				<li>
					<SignOutButton />
				</li>
			</ul>
		</nav>
	);
}
