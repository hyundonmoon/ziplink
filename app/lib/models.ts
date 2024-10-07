export type ShortUrlFailure = {
	status: 'failed';
	reason: string;
};

export type ShortUrlSuccess = {
	status: 'success';
	data: {
		shortCode: string;
		originalUrl: string;
	};
};

export type ShortUrlResponse = ShortUrlFailure | ShortUrlSuccess;
