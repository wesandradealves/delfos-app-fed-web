'use client'
import { useRouter, redirect } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';
import Template from '@/app/dashboard/template';
const Dashboard = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (!session) redirect('/');
  return <Template>Dashboard</Template>;
};

export default Dashboard;