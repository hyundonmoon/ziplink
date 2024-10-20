import { ACTION_FAILED, ACTION_SUCCESS } from '@/features/shared/constants';

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
