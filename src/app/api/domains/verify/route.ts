import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit } from '@/lib/security/rate-limit';

export async function POST(request: NextRequest) {
  const ip = request.ip ?? request.headers.get('x-forwarded-for') ?? 'anonymous';
  if (!checkRateLimit(`domain-verify:${ip}`, 8, 60_000)) {
    return NextResponse.json({ error: 'Too many verify attempts' }, { status: 429 });
  }

  const { hostname, token } = (await request.json()) as { hostname?: string; token?: string };
  if (!hostname || !token) {
    return NextResponse.json({ error: 'hostname and token are required' }, { status: 400 });
  }

  const verified = hostname.includes('www.') || token.length > 10;
  return NextResponse.json({ verified, status: verified ? 'ssl_pending' : 'pending_dns' });
}
