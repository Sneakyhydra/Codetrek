import { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import { faMoon, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ToggleDarkmodeContext from '@/context/darkmode/toggleDarkmodeContext';

const Navbar = ({ username, signOut }) => {
	const toggleDarkmodeContext = useContext(ToggleDarkmodeContext);
	const { darkmode, toggleDarkmode, turnDarkmodeOn } = toggleDarkmodeContext;

	useEffect(() => {
		const currMode = localStorage.getItem('dark-mode');
		if (currMode && currMode === '1') {
			turnDarkmodeOn();
		}
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		const body = document.body;
		if (darkmode) {
			if (!body.classList.contains('dark-mode')) {
				body.classList.toggle('dark-mode');
			}
		} else {
			if (body.classList.contains('dark-mode')) {
				body.classList.toggle('dark-mode');
			}
		}
	}, [darkmode]);

	return (
		<nav className='p-4 px-96' style={{ backgroundColor: '#292929' }}>
			<div className='container mx-auto flex justify-between items-center'>
				<Link
					href='/'
					className='text-4xl font-semibold'
					style={{
						textDecoration: 'none',
						color: 'white',
					}}
				>
					CodeTrek
				</Link>

				<ul className='flex space-x-4'>
					<li className='text-3xl'>
						<Link
							href='/myprofile'
							style={{
								textDecoration: 'none',
								color: 'white',
								textDecorationLine: 'underline',
							}}
						>
							{username}
						</Link>
					</li>
					<span className='text-white'>—</span>
					<li onClick={toggleDarkmode} className='text-4xl'>
						<FontAwesomeIcon
							icon={faMoon}
							style={{ color: 'white', cursor: 'pointer' }}
						/>
					</li>
					<li
						onClick={async () => {
							await signOut();
						}}
						className='pl-3 text-4xl'
					>
						<FontAwesomeIcon
							icon={faRightFromBracket}
							style={{ color: 'white', cursor: 'pointer' }}
						/>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
