import { detectLocale } from '$lib/i18n/i18n-util.js';
import { redirect } from '@sveltejs/kit';

const langParam = 'lang'

import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ locals: { safeGetSession }, cookies, url }) => {
  const { session } = await safeGetSession()

  const newLocale = url.searchParams.get(langParam);
  if (newLocale) {
    cookies.set(langParam, newLocale, { path: '/' })
    url.searchParams.delete(langParam);

    throw redirect(303, url.toString());
  }

  const locale = detectLocale(() => [cookies.get(langParam) ?? ''])

  return {
    session,
    cookies: cookies.getAll(),
    locale
  }
}
