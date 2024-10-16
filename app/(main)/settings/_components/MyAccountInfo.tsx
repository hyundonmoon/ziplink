'use client';

import MyAccountInfoRow from '@/app/(main)/settings/_components/MyAccountInfoRow';

export default function MyAccountInfo({
	name,
	email,
}: {
	name: string;
	email: string;
}) {
	return (
		<div>
			<h2 className="mb-2 font-semibold">Account</h2>

			<ul className="space-y-2">
				<MyAccountInfoRow label="Name" value={name} />
				<MyAccountInfoRow label="Email" value={email} />
			</ul>
		</div>
	);
}
