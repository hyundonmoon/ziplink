import SignOutButton from '@/app/(main)/components/SignOutButton';
import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect } from 'react';

export default function NavPopUp({
	setIsMenuOpen,
}: {
	setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
	useEffect(() => {
		const handleOutsideClick = (e: MouseEvent) => {
			const target = e.target as HTMLElement;

			if (!target.closest('#nav-pop-up')) {
				setIsMenuOpen(false);
			}
		};
		const handleEscapeKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener('click', handleOutsideClick);
		document.addEventListener('keydown', handleEscapeKey);

		return () => {
			document.removeEventListener('click', handleOutsideClick);
			document.removeEventListener('keydown', handleEscapeKey);
		};
	}, [setIsMenuOpen]);

	return (
		<nav
			id="nav-pop-up"
			className="absolute right-0 top-7 z-50 min-w-[8rem] p-1 overflow-hidden rounded-md border bg-white shadow"
			onClick={(e) => {
				e.stopPropagation();
				setIsMenuOpen(false);
			}}
		>
			<ul className="flex flex-col">
				<li>
					<Link
						href="/my-links"
						className="block px-2 py-1.5 hover:bg-gray-50 transition"
					>
						My Links
					</Link>
				</li>

				<li>
					<Link
						href="/settings"
						className="block px-2 py-1.5 hover:bg-gray-50 transition"
					>
						Settings
					</Link>
				</li>

				<hr className="-mx-1 my-1" />

				<li
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					<SignOutButton />
				</li>
			</ul>
		</nav>
	);
}
