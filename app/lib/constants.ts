export const INVALID_URL = 'invalid url';
export const UNKNOWN_ERROR = 'unknown';
export const ACTION_FAILED = 'failed';
export const ACTION_SUCCESS = 'success';
export const NANO_ID_ALPHABET =
	'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz-';
export const INVALID_TOKEN = 'invalid token';
export const TOKEN_ERROR = 'token error';

export const TOKEN_ERROR_MESSAGES = {
	'invalid-input-response':
		'Token is invalid or has expired. Refresh the page and try again.',
	'missing-input-secret': 'Missing input secret. Please contact support.',
	'invalid-input-secret': 'Invalid input secret. Please contact support.',
	'missing-input-response':
		'Token is missing. Refresh the page and try again.',
	'bad-request': 'Bad request. Refresh the page and try again.',
	'timeout-or-duplicate':
		'Token has either been used or has expired. Refresh the page and try again.',
	'internal-error': 'Internal error.',
	'unknown-error': 'An unknown error occurred. Please try again later.',
} as const;
