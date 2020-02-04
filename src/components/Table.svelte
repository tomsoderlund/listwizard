<script>
  export let values
  export let customFormat = undefined

  $: firstRow = values[0]
</script>

<table>
  <thead>
    <tr>
      {#if typeof firstRow === 'string'}
        <th>Text</th>
      {:else}
        {#each Object.keys(firstRow) as header}
          <th>{header}</th>
        {/each}
      {/if}
    </tr>
  </thead>
  <tbody>
    {#each values as row}
      <tr>
        {#if typeof row === 'string'}
          <td>
            {row}
          </td>
        {:else}
          {#each Object.values(row) as column, columnIndex}
            <td>
              {customFormat ? customFormat(Object.keys(row)[columnIndex], column) : column}
            </td>
          {/each}
        {/if}
      </tr>
    {/each}
  </tbody>
</table>

<style>
  /* ----- #NiceAndSimple: Table - https://codepen.io/tomsoderlund/pen/mmZrRR ----- */
  table {
    border-collapse: collapse;
  }

  td, th {
    border: 1px solid #ddd;
    padding: 0.5em;
    vertical-align: top;
  }

  thead tr {
    background-color: #ccc;
  }

  tr:nth-child(2n+0) {
    background-color: #eee;
  }
</style>