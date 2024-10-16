'use client';

import { deleteUser } from '@/app/lib/actions';

export default function DeleteAccountButton() {
	const handleClick = async () => {
		if (confirm('Are you sure you want to delete your account?')) {
			deleteUser();
		}
	};
	return (
		<button
			className="px-4 py-2 bg-black text-white rounded hover:bg-gray-700"
			onClick={handleClick}
		>
			Delete account
		</button>
	);
}
