'use client';

import { useFormState } from 'react-dom';
import { createShortUrl } from '../lib/actions';
import { ACTION_SUCCESS } from '../lib/constants';
import ShortUrlResult from './ShortUrlResult';
import UrlForm from './UrlForm';

interface UrlShortenerProps {
	handleReset: () => void;
}

export default function UrlShortener({ handleReset }: UrlShortenerProps) {
	const [formActionState, formAction] = useFormState(createShortUrl, null);

	const isShortUrlCreated =
		formActionState && formActionState.status === ACTION_SUCCESS;

	if (isShortUrlCreated) {
		return (
			<ShortUrlResult
				originalUrl={formActionState.data.originalUrl}
				shortCode={formActionState.data.shortCode}
				handleReset={handleReset}
			/>
		);
	}

	return (
		<UrlForm formAction={formAction} formActionState={formActionState} />
	);
}
