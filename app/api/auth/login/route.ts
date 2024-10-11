import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode';

export async function POST(request: Request) {
  try {
    console.log('request triggered')
    const body = await request.json();

    if (!process.env.API_BASE_URL) {
      console.log('API_BASE_URL is not defined');
      throw new Error('API_BASE_URL is not defined');

    }

    const response = await fetch(`${process.env.API_BASE_URL}/Users/Login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });
    const data = await response.json();

    if (response.ok) {
      cookies().set('token', data.token);
      const decodedToken = jwtDecode(data.token);
      const userId = decodedToken.sub as string;
      const userEmail = decodedToken.email as string;
      cookies().set('userId', userId);
      cookies().set('userEmail', userEmail);
      return NextResponse.json({ token: data.token }, { status: 200 });
    } else {
      return NextResponse.json({ error: data.message || 'Login failed' }, { status: response.status });
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}