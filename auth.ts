import prisma from '@/app/lib/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import { Provider } from 'next-auth/providers';
import GitHub from 'next-auth/providers/github';

const providers: Provider[] = [
	GitHub({
		clientId: process.env.AUTH_GITHUB_ID,
		clientSecret: process.env.AUTH_GITHUB_SECRET,
	}),
];

export const { handlers, signIn, signOut, auth } = NextAuth({
	adapter: PrismaAdapter(prisma),
	providers,
	pages: {
		signIn: '/auth/signin',
	},
});

export const providerMap = providers
	.map((provider) => {
		if (typeof provider === 'function') {
			const providerData = provider();
			return { id: providerData.id, name: providerData.name };
		} else {
			return { id: provider.id, name: provider.name };
		}
	})
	.filter((provider) => provider.id !== 'credentials');
