import { NextResponse } from 'next/server';
import { sanitizeText } from '@/lib/security/sanitize';

export async function POST(request: Request) {
  const payload = (await request.json()) as { title?: string; slug?: string };

  if (!payload.title || !payload.slug) {
    return NextResponse.json({ error: 'title and slug required' }, { status: 400 });
  }

  return NextResponse.json({
    id: crypto.randomUUID(),
    title: sanitizeText(payload.title),
    slug: sanitizeText(payload.slug),
    status: 'draft',
  });
}
