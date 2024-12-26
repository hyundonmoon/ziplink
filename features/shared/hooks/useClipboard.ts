import { useCallback, useState } from 'react';

export default function useClipboard() {
	const [copied, setCopied] = useState('');

	const copy = useCallback(async (text: string) => {
		await navigator.clipboard.writeText(text);
		setCopied(text);
	}, []);

	return [copied, copy] as const;
}
