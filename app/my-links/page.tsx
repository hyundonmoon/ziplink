'use client';

import { getUserLinks as getUserLinksServerAction } from '@/app/lib/actions';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Link {
	originalUrl: string;
	shortCode: string;
	id: number;
}

export default function MyLinks() {
	const [links, setLinks] = useState<Link[]>([]);
	const router = useRouter();

	useEffect(() => {
		const getUserLinks = async () => {
			try {
				const links = await getUserLinksServerAction();
				setLinks(links);
			} catch {
				// TODO: Handle sign in page redirection
				router.push('/');
			}
		};

		getUserLinks();
	}, [router]);

	return (
		<div>
			<ul>
				{links.map(({ id, shortCode, originalUrl }) => (
					<li key={id.toString()}>
						<span>{shortCode}</span>
						<span> - </span>
						<a
							href={originalUrl}
							target="_blank"
							rel="noreferrer noopener"
						>
							Visit
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
