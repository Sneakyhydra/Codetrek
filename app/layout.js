import './globals.css';
import { NextAuthProvider } from './provider';

export const metadata = {
	title: 'Codetrek',
	description: 'Codetrek',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<NextAuthProvider>{children}</NextAuthProvider>
			</body>
		</html>
	);
}
