const requests = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(key: string, max = 15, windowMs = 60_000): boolean {
  const now = Date.now();
  const entry = requests.get(key);

  if (!entry || entry.resetAt < now) {
    requests.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (entry.count >= max) return false;
  entry.count += 1;
  requests.set(key, entry);
  return true;
}
