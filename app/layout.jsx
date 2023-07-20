import { Navbar } from '@components';
import { images } from '@constants';
import '@styles/base/globals.scss';

import { Poppins, Lobster } from 'next/font/google';

export const poppins = Poppins({
	weight: ['400', '700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-secondary',
});

export const lobster = Lobster({
	weight: ['400'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-primary',
});

export const metadata = {
	title: 'Gericht | Restaurant',
	description: 'Amazing classy restaurant website made with Next.js',
	openGraph: {
		title: 'Restaurant website',
		description: 'Amazing classy restaurant website made with Next.js',
		url: 'https://nextjs.org',
		siteName: 'Gericht',
		images: [
			{
				url: '/assets/laurels.png',
				width: 800,
				height: 600,
			},
		],
		locale: 'en_US',
		type: 'website',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={`${lobster.variable} ${poppins.variable}`}
				style={{
					backgroundImage: `url(${images.wave.src})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'repeat',
					backgroundAttachment: 'fixed',
				}}
				suppressHydrationWarning={true}>
				<main>
					<Navbar />
					{children}
				</main>
			</body>
		</html>
	);
}
