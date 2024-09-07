import type { BaseTranslation } from '../i18n-types'

const en = {
	button: {
    about: 'About',
    back: 'Back',
    go: 'GO',
    home: 'Home',
    toggle_dark: 'Toggle dark mode',
    toggle_langs: 'Change languages',
    login: 'Login',
    github_login: 'Login with GitHub',
    update: 'Update',
    logout: 'Logout',
  },
  intro: {
    desc: 'Opinionated Svelte Starter Template',
    dynamic_route: 'Demo of dynamic route',
    hi: 'Hi, {name}!',
    whats_you_name: 'What\'s your name?',
    logged_in: 'You are logged in!',
    manage_profile: 'Manage your profile',
  },
  inputs: {
    email: 'Email',
    firstName: 'First name',
    lastName: 'Last name',
  },
  not_found: 'Not found'
} satisfies BaseTranslation

export default en
