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
