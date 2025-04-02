export function formatAuthorList(authors: string[]): string {
  if (authors.length === 1) return authors[0];
  return `${authors[0]} 외 ${authors.length - 1}명`;
}
