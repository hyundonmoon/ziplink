'use client';

import { deleteUser, signOut } from '@/features/auth/actions';
import { ACTION_SUCCESS } from '@/features/shared/constants';

export default function DeleteAccountButton() {
	const handleClick = async () => {
		if (confirm('Are you sure you want to delete your account?')) {
			const result = await deleteUser();

			if (result.status === ACTION_SUCCESS) {
				alert('Account deleted. Goodbye!');
				await signOut();
			} else {
				alert(result.message);
			}
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
