import { TOKEN_ERROR_MESSAGES } from '@/features/link/constants';
import { ACTION_FAILED, ACTION_SUCCESS } from '@/features/shared/constants';
import { ActionResult } from '@/features/shared/models';

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
