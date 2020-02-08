<script>
  import { description as defaultDescription } from '../../package.json'

  export let title = undefined
  export let description = defaultDescription
</script>

<svelte:head>
  <title>{title ? title + ' – ' : ''}Listwizard – {description}</title>
  <meta name="description" content={description} />
</svelte:head>
