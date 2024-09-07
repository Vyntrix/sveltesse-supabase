<script>

	import LL from "$lib/i18n/i18n-svelte"

</script>
<div>
  <hgroup>
    <h1>{$LL.button.login()}</h1>
  </hgroup>
  <div>
      <a type="submit" class="btn" href="/auth/login/github">
        {$LL.button.github_login()}
      </a>
  </div>
</div>
