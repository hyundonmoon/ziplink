'use client';

import HamburgerMenuIcon from '@/app/(main)/components/HamburgerMenuIcon';
import NavPopUp from '@/app/(main)/components/NavPopUp';
import { useState } from 'react';

export default function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="relative">
			<button
				onClick={() => {
					setIsMenuOpen(true);
				}}
			>
				<HamburgerMenuIcon />
			</button>

			{isMenuOpen && <NavPopUp setIsMenuOpen={setIsMenuOpen} />}
		</div>
	);
}
