import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const response = await fetch(`${process.env.API_BASE_URL}/Users/Register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });

    if (response.ok) {
      return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
    } else {
      // Handle different error status codes
      const errorData = await response.json();
      return NextResponse.json({ error: errorData.message }, { status: response.status });
    }
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}