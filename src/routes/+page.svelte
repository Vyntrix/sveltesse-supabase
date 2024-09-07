<script lang="ts">
  import { LL } from "$lib/i18n/i18n-svelte"
  import * as config from "$lib/config"
	import { enhance } from "$app/forms"
	import { invalidate } from "$app/navigation"

  const { data } = $props()
  const { userProfile } = data

  let firstName = $state("")
  let lastName = $state("")
  let email = $state("")

  $effect(() => {
    if (userProfile) {
      firstName = userProfile.firstName
      lastName = userProfile.lastName
      email = userProfile.email
    }
  })
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<div>
  <div class="text-4xl">
    <div class="i-carbon-buoy inline-block"></div>
  </div>
  <p>
    <a rel="noreferrer" href="https://github.com/vyntrix/vitesse-svelte" target="_blank">
      {config.title}
    </a>
  </p>
  <p>
    <em class="text-sm opacity-75">{$LL.intro.desc()}</em>
  </p>

  <div class="py-4"></div>

  {#if userProfile}
    <div class="card">
      <hgroup class="card-header">
        {$LL.intro.manage_profile()}
      </hgroup>
      <div class="card-body mb5">
        <form method="post" use:enhance={({ formData }) => {
          formData.set('firstName', firstName)
          formData.set('lastName', lastName)
          formData.set('email', email)
          return ({ result }) => {
            if (result.type === 'success') {
              invalidate("/")
              alert("UPDATED!")
            } else {
              alert("ERROR!")
            }
          }
        }}>
          <div class="input-group">
            <label for="email">{$LL.inputs.email()}</label>
            <input type="email" id="email" name="email" bind:value={email} />
          </div>
          <div class="input-group">
            <label for="firstName">{$LL.inputs.firstName()}</label>
            <input type="text" id="firstName" name="firstName" bind:value={firstName} />
          </div>
          <div class="input-group">
            <label for="lastName">{$LL.inputs.lastName()}</label>
            <input type="test" id="lastName" name="lastName" bind:value={lastName} />
          </div>
          <div class="input-group">
            <button type="submit" class="btn w-full">
              {$LL.button.update()}
            </button>
          </div>
        </form>
      </div>
    </div>
    <a href="/auth/logout" class="btn">{$LL.button.logout()}</a>
  {:else}
  <a class="btn" href="/auth/login">
    {$LL.button.login()}
  </a>
  {/if}
</div>

<style>
  .card-header {
    @apply mb-4 text-lg font-medium text-gray-900 dark:text-gray-300;
  }

  .card-body {
    @apply flex flex-col items-center justify-center;
  }

  form {
    @apply flex flex-col gap-4;
  }

  input {
    @apply border border-rounded border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-300 bg-transparent px-4 py-2 outline-none focus:outline-none;
  }

  label {
    @apply block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left;
  }
</style>
