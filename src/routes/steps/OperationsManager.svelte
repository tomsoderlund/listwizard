<script>
  import List from '../../components/List.svelte'

  export let operations = []
</script>

<style>
</style>

<div>
  <List
    values={operations}
    ordered={true}
    customFormat={operation => {
      const { operation: operationName, ...otherProps } = operation
      return `${operation.operation} (${JSON.stringify(otherProps)})`
    }}
  />
  <form on:submit|preventDefault={event => console.log(event)}>
    Add step: <input />
    <button type='submit'>Add</button>
  </form>
</div>
