<script>
  import { stores } from '@sapper/app'
  import { description as defaultDescription } from '../../package.json'

  const { page } = stores() // preloading, page, session
  const { host, path } = $page // host, path, params, query

  export let title = undefined
  export let description = defaultDescription
</script>

<svelte:head>
  <title>{title ? title + ' – ' : ''}Listwizard – {description}</title>
  <meta name="description" content={description} />
  <meta property="og:image" content={`https://d3htstcz5zldi1.cloudfront.net/?url=${host + path}`} />
</svelte:head>
