export function removeAuthToken(): void {
  localStorage.removeItem('token');
}

export function isLoggedIn(): boolean {
  return !!localStorage.getItem('token');
}
