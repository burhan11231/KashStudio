const SAFE_URL_PATTERN = /^https:\/\/[a-zA-Z0-9.-]+(?:\/[\w\-.~:/?#[\]@!$&'()*+,;=]*)?$/;

export function sanitizeText(value: string): string {
  return value.replace(/[<>]/g, '').trim();
}

export function isSafeUrl(value: string): boolean {
  return SAFE_URL_PATTERN.test(value);
}

export function assertSafeUrl(value: string): string {
  if (!isSafeUrl(value)) {
    throw new Error('Invalid URL: only HTTPS URLs are allowed.');
  }

  return value;
}
