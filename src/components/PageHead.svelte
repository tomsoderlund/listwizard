<script>
  import { page } from '$app/stores'
  import { description as defaultDescription } from '../../package.json'

  const { host, path } = $page // host, path, params, query

  export let title = undefined
  export let description = defaultDescription
</script>

<svelte:head>
  <title>{title ? title + ' – ' : ''}Listwizard – {description}</title>
  <meta name="description" content={description} />
  <meta property="og:image" content={`https://screens.tomorroworld.com/?url=https://${host + path}`} />
</svelte:head>
