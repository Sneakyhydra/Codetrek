import './globals.css';
import { NextAuthProvider } from './provider';
import ToggleDarkmodeState from '@/context/darkmode/ToggleDarkmodeState';

export const metadata = {
	title: 'Codetrek',
	description: 'Codetrek',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<NextAuthProvider>
					<ToggleDarkmodeState>{children}</ToggleDarkmodeState>
				</NextAuthProvider>
			</body>
		</html>
	);
}
