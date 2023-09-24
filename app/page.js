'use client';

import { useSession, signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';

import Navbar from '@/components/Layout/Navbar';

export default function IndexPage() {
	const { data, status } = useSession();
	if (status === 'loading') return <h1> loading... please wait</h1>;
	if (status === 'authenticated') {
		return (
			<div>
				<Navbar username={data.user.name} signOut={signOut} />
			</div>
		);
	}
	return redirect('/api/auth/signin');
}
