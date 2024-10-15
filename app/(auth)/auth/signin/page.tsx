import { providerMap, signIn } from '@/auth';

export default function SignInPage({
	searchParams,
}: {
	searchParams: { callbackUrl: string | undefined };
}) {
	return (
		<div>
			{providerMap.map((provider) => {
				return (
					<form
						key={provider.id}
						action={async () => {
							'use server';
							try {
								await signIn(provider.id, {
									redirectTo: searchParams?.callbackUrl ?? '',
								});
							} catch (error) {
								throw error;
							}
						}}
					>
						<button className="px-4 py-2 sm:px-6 sm:py-3 bg-black text-white rounded hover:bg-gray-700">
							Sign in with {provider.name}
						</button>
					</form>
				);
			})}
		</div>
	);
}
