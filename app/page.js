'use client';

import { useSession, signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function IndexPage() {
	const { data, status } = useSession();
	if (status === 'loading') return <h1> loading... please wait</h1>;
	if (status === 'authenticated') {
		return (
			<div>
				<h1> Hi {data.user.name}</h1>
				<img src={data.user.image} alt={data.user.name + ' photo'} />
				<button onClick={signOut}>sign out</button>
			</div>
		);
	}
	return redirect('/api/auth/signin');
}
