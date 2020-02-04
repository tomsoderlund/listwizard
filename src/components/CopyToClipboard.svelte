<button on:click={copyToClipboard}>Copy to clipboard</button>

<script>

  export let textToCopy

  const copyToClipboard = async () => {
    if (!navigator.clipboard || !textToCopy) return
    try {
      await navigator.clipboard.writeText(textToCopy)
      window.alert('Copied to clipboard')
    } catch (err) {
      console.error('Failed to copy!', err)
    }
  }
  
</script>