import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Stub — in production, integrate with Mailchimp, ConvertKit, etc.
    console.log('Newsletter signup:', email);

    return NextResponse.json({ success: true, message: 'Subscribed successfully' });
  } catch {
    return NextResponse.json({ success: false, message: 'Failed to subscribe' }, { status: 400 });
  }
}
