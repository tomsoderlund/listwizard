<button
  on:click={copyToClipboard}
  on:mouseover={() => { isDone = false }}
  class={'progress-button' + (inProgress ? ' in-progress' : '') + (isDone ? ' done' : '')}
>Copy to clipboard</button>

<script>

  export let textToCopy
  let isDone = false
  let inProgress = false

  const copyToClipboard = async () => {
    isDone = false
    inProgress = true
    if (!window.navigator.clipboard || !textToCopy) return
    try {
      await window.navigator.clipboard.writeText(textToCopy)
      isDone = true
    } catch (err) {
      console.error('Failed to copy!', err)
    } finally {
      inProgress = false      
    }
  }
  
</script>