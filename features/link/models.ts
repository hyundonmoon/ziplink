import {
	ACTION_FAILED,
	ACTION_SUCCESS,
	TOKEN_ERROR_MESSAGES,
} from '@/features/link/constants';

export interface ActionSuccess<T> {
	status: typeof ACTION_SUCCESS;
	data: T;
}

export interface ActionFailure {
	status: typeof ACTION_FAILED;
	reason: string;
	message: string;
}

export type ActionResult<T> = ActionSuccess<T> | ActionFailure;

export interface UrlShortenData {
	shortCode: string;
	originalUrl: string;
}

export type UrlShortenActionResult = ActionResult<UrlShortenData>;

export interface TokenCheckSuccess {
	status: typeof ACTION_SUCCESS;
}

export interface TokenCheckFailure {
	status: typeof ACTION_FAILED;
	reason: keyof typeof TOKEN_ERROR_MESSAGES;
}

export type TokenCheckResult = TokenCheckSuccess | TokenCheckFailure;
