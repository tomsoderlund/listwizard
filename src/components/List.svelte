<script>
  const defaultFormat = value => value.toString()

  export let values = []
  export let ordered = false
  export let customFormat = defaultFormat
</script>

{#if ordered}
  <ol>
    {#each values as value}
      <li>{customFormat(value)}</li>
    {/each}
  </ol>
{:else}
  <ul>
    {#each values as value}
      <li>{customFormat(value)}</li>
    {/each}
  </ul>
{/if}
