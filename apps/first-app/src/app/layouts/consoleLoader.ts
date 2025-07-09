import { isLoggedIn } from '../../utils/auth';

export async function consoleLoader() {
  if (!isLoggedIn()) {
    throw new Response('Unauthorized', { status: 401 });
  }
  return null;
}
