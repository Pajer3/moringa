import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const token = localStorage.getItem('token');

    if (!token) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const response = await fetch('http://localhost:5000/user', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorMessage = await response.json();
      console.error('Error from backend:', errorMessage);
      throw new Error(errorMessage.message || 'Failed to fetch user data');
    }

    const userData = await response.json();
    return NextResponse.json(userData);
  } catch (error) {
    console.error('Error fetching user data:', error);
    return NextResponse.json({ message: 'Error fetching user data' }, { status: 500 });
  }
}
