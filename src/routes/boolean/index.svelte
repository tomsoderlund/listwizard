<svelte:head>
  <title>Boolean List Manipulation</title>
</svelte:head>

<h1>Boolean List Manipulation</h1>

<form name="ListForm">

  <div class="data-form">
    <div class="data-cell">
      List A:<br>
      <textarea name="textListA" id="textListA">Apple
Banana
Citrus</textarea>
    </div>
    <div class="data-cell">
      Operator:<br>
      <select name="listOperands" size="1" id="listOperands">
        <option value="Subtraction" selected>Subtract</option>
        <option value="Intersection">Intersection</option>
        <option value="Aggregation">Aggregation</option>
        <option value="Multiply">Multiply</option>
        <option value="RemoveDuplicates">Remove duplicates</option>
      </select>
    </div>
    <div class="data-cell">
      List B:<br>
      <textarea name="textListB" id="textListB">Banana</textarea>
    </div>
    <div class="data-cell">
      =
    </div>
    <div class="data-cell">
      Results:<br>
      <textarea readonly name="textListResult" id="textListResult"></textarea>
    </div>
  </div>

  <div>
    <button type="button" name="buttonRun" on:click={doRunScript}>Generate</button>
  </div>

  <h2>Options</h2>
  <div>
    <input name="checkCaseless" type="checkbox" id="checkCaseInsensitive" value="checkbox" checked>Ignore lowercase/uppercase<br>
    <input name="checkIgnoreSpaces" type="checkbox" id="checkIgnoreSpaces" value="checkbox" checked>Ignore spaces<br>
    <input name="checkRemoveEmpty" type="checkbox" id="checkRemoveEmpty" value="checkbox" checked>Remove empty lines
  </div>

</form>

<script>
  import { doRunScript } from './_booleanManipulation'
</script>

<style>

  .data-form {
    display: inline-flex; /* inline-flex */
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .data-cell {
    min-width: 1em;
    text-align: center;
  }

  .data-cell textarea {
    font-size: 0.8em;
    width: 15em; /* 12/0.8 */
    min-height: 20em; /* 16/0.8 */
  }

  select {
    box-shadow: none;
    background-color: greenyellow;
    width: 8em;
    height: 2.5em;
  }

  @media only screen and (max-width: 600px) {
    body {
      text-align: center;
    }

    .data-cell {
      width: 100%;
      text-align: center;
    }

    .data-cell textarea {
      width: 80%;
    }
  }

</style>