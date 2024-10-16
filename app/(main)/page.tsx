'use client';

import UrlShortener from '@/app/(main)/components/UrlShortener';
import { useState } from 'react';

export default function Home() {
	const [key, setKey] = useState(0);

	const handleReset = () => {
		setKey((prev) => prev + 1);
	};

	return (
		<div className="w-full h-full">
			<div className="w-full max-w-lg mx-auto sm:mt-16">
				<UrlShortener key={key} handleReset={handleReset} />
			</div>
		</div>
	);
}
