<script lang="ts">
	import { invalidate } from '$app/navigation'
	import TheFooter from '$lib/components/TheFooter.svelte'
  import * as config from '$lib/config'

	import '@unocss/reset/tailwind.css'
	import '../styles/main.css'
	import 'uno.css'

  const { data: propsData, children } = $props()

  const { supabase, session, locale } = propsData

  $effect(() => {
    const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
      if (newSession?.expires_at !== session?.expires_at) {
        invalidate('supabase:auth');
      }
    });

    return () => data.subscription.unsubscribe();
  })
</script>



<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
  {@render children()}
  <TheFooter {locale} />
  <div class="mx-auto mt-5 text-center text-sm opacity-50">
    [Default Layout]
  </div>
</main>
