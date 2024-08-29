'use client'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
const Dashboard = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === 'loading') router.push('/'); 

  if (!session) {
    return <div>Voce nao está autorizado a acessar este conteúdo. Redirecionando...</div>; // Replace with actual redirection logic if needed
  }

  return <div>Welcome to your dashboard, {session.user?.name}!</div>;
};

export default Dashboard;