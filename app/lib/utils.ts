import {
	ACTION_FAILED,
	ACTION_SUCCESS,
	TOKEN_ERROR_MESSAGES,
} from './constants';
import { TokenCheckResult } from './models';

export const validateUrl = (url: string) => {
	const trimmedUrl = url.trim();
	const urlPattern = new RegExp(
		'^(https?:\\/\\/)?' + // Optional http or https
			'([a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6})' + // Domain name with a valid TLD
			'(\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)?)?$' // Optional path or query string
	);

	if (trimmedUrl === '' || urlPattern.test(trimmedUrl)) {
		return { isValid: true };
	} else {
		return { isValid: false, errorMessage: 'Invalid URL' };
	}
};

export const normalizeUrl = (url: string) => {
	try {
		return new URL(url);
	} catch (_) {
		return new URL(`https://${url}`);
	}
};

export const checkToken = async (token: string): Promise<TokenCheckResult> => {
	try {
		const res = await fetch(
			'https://challenges.cloudflare.com/turnstile/v0/siteverify',
			{
				method: 'POST',
				body: new URLSearchParams({
					secret: process.env.TURNSTILE_SECRET_KEY || '',
					response: token,
				}),
			}
		);
		const data = (await res.json()) as {
			success: boolean;
			'error-codes': (keyof typeof TOKEN_ERROR_MESSAGES)[];
		};

		if (!data.success) {
			return {
				status: ACTION_FAILED,
				reason: data['error-codes'][0],
			};
		}

		return {
			status: ACTION_SUCCESS,
		} as const;
	} catch (_) {
		return {
			status: ACTION_FAILED,
			reason: 'unknown-error',
		} as const;
	}
};
