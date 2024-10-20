'use client';

import ShortUrlResult from '@/app/(main)/components/ShortUrlResult';
import UrlForm from '@/app/(main)/components/UrlForm';
import { shortenUrl } from '@/features/link/actions';
import { UrlShortenActionResult } from '@/features/link/models';
import { ACTION_SUCCESS } from '@/features/shared/constants';
import { useFormState } from 'react-dom';

interface UrlShortenerProps {
	handleReset: () => void;
}

export default function UrlShortener({ handleReset }: UrlShortenerProps) {
	const [formActionState, formAction] = useFormState<
		UrlShortenActionResult | null,
		FormData
	>(shortenUrl, null);

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
