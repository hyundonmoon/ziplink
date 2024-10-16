'use client';

import { useRouter } from 'next/navigation';

export default function Header() {
	const router = useRouter();

	return (
		<header>
			<button
				className="hover:border-b border-current"
				onClick={() => {
					router.back();
				}}
			>
				Go back
			</button>
		</header>
	);
}
