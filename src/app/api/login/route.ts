import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Placeholder logic for authenticating a user
  if (email === 'user@example.com' && password === 'password123') {
    // Normally, you'd create a session or issue a token here
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
}