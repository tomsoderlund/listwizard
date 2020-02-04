<div class='sections'>
  <slot></slot>
</div>

<style>
  .sections {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 600px) {
    .sections {
      flex-direction: column;
    }
  }
</style>