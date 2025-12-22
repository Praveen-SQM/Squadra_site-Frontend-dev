const PERSONAL_EMAIL_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "icloud.com",
  "proton.me",
  "protonmail.com",
  "aol.com",
  "zoho.com",
  "gmx.com",
  "yandex.com",
];

export function isPersonalEmail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase();
  if (!domain) return true;
  return PERSONAL_EMAIL_DOMAINS.includes(domain);
}
