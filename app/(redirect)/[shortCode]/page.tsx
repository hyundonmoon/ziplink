'use client';

import NotFound from '@/app/components/NotFound';
import { queryShortUrl } from '@/app/lib/actions';
import { useEffect, useState } from 'react';

export default function Redirect({
	params: { shortCode },
}: {
	params: { shortCode: string };
}) {
	const [notFound, setNotFound] = useState(false);

	useEffect(() => {
		const handleRedirect = async () => {
			try {
				await queryShortUrl(null, shortCode);
			} catch (_) {
				setNotFound(true);
			}
		};

		handleRedirect();
	}, [shortCode]);

	if (notFound) {
		return <NotFound />;
	}

	return (
		<div className="h-full flex flex-col justify-center text-center">
			Redirecting...
		</div>
	);
}
