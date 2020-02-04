<section>
  <h2>{title}</h2>
  <slot></slot>
</section>

<script>
  export let title
</script>

<style>
  section {
    flex: 1;
    width: 100%;
    border-radius: 0.3em;
    padding: 1em;
    background-color: white;
    box-shadow: 0 0.125em 0.125em rgba(0, 0, 0, 0.3);
    margin-bottom: 1em;
    margin-right: 1em;
  }
  section:last-child {
    margin-bottom: 0;
    margin-right: 0;
  }

  section > :global(textarea) {
    width: 100%;
  }
</style>