import { jwtDecode } from "jwt-decode";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
    try {
      console.log('request triggered')
      let userId : string = '';
      const body = await request.json();
      console.log(JSON.stringify(body));
      
      const cookieStore = cookies();
      const token = cookieStore.get('token')?.value;
      if(token) {
        const decodedToken = jwtDecode(token);
        userId = decodedToken.sub as string;
      }
 
      console.log('Token:  ' + {})
      if (!process.env.API_BASE_URL) {
        console.log('API_BASE_URL is not defined');
        throw new Error('API_BASE_URL is not defined');
      }
      console.log(`Fetching ${process.env.API_BASE_URL}/${userId}/Dog`);
      const response = await fetch(`${process.env.API_BASE_URL}/${userId}/Dog`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body)
      });
      const data = await response.json();
      console.log(data);
  
      if (response.ok) {
        return NextResponse.json({ response },{ status: 200 });
      } else {
        return NextResponse.json({ error: data.message || 'Request failed' }, { status: response.status });
      }
    } catch (error) {
      console.error('Dog error:', error);
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
  }