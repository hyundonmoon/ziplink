import { TOKEN_ERROR_MESSAGES } from '@/features/link/constants';
import { ACTION_FAILED, ACTION_SUCCESS } from '@/features/shared/constants';
import { ActionResult } from '@/features/shared/models';
import { z } from 'zod';

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

const LinkResponse = z.object({
	id: z.number(),
	originalUrl: z.string(),
	shortCode: z.string(),
});
export type LinkResponse = z.infer<typeof LinkResponse>;

export const LinkResponseData = z.array(LinkResponse);
