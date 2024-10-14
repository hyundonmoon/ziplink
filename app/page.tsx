'use client';

import { useState } from 'react';
import UrlShortener from './components/UrlShortener';

export default function Home() {
	const [key, setKey] = useState(0);

	const handleReset = () => {
		setKey((prev) => prev + 1);
	};

	return (
		<div className="w-full h-full flex flex-col justify-center items-center">
			<div className="w-full max-w-lg">
				<UrlShortener key={key} handleReset={handleReset} />
			</div>
		</div>
	);
}
