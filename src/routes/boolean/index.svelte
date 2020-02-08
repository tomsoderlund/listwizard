<PageHead
  title={pageTitle}
  description='Manipulate text lists with subtraction, intersection, aggregation, etc'
/>

<h1>{pageTitle}</h1>

<form name="ListForm">

  <SectionContainer>
    <Section title='List A'>
      <textarea name="textListA" id="textListA">Apple
Banana
Citrus</textarea>
    </Section>

    <Section title='Operator'>
      <select name="listOperands" size="1" id="listOperands">
        <option value="Subtraction" selected>Subtract</option>
        <option value="Intersection">Intersection</option>
        <option value="Aggregation">Aggregation</option>
        <option value="Multiply">Multiply</option>
        <option value="RemoveDuplicates">Remove duplicates</option>
      </select>
    </Section>

    <Section title='List B'>
      <textarea name="textListB" id="textListB">Banana</textarea>
    </Section>

    <Section title='Results'>
      <textarea readonly name="textListResult" id="textListResult"></textarea>
    </Section>
  </SectionContainer>

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

  import PageHead from '../../components/PageHead.svelte'
  import SectionContainer from '../../components/SectionContainer.svelte'
  import Section from '../../components/Section.svelte'

  const pageTitle = 'Boolean List Manipulation'
</script>

<style>

  textarea {
    font-size: 0.8em;
    width: 15em; /* 12/0.8 */
    min-height: 20em; /* 16/0.8 */
  }

  select {
    box-shadow: none;
    width: 8em;
    height: 2.5em;
    background-color: darkturquoise;
    color: white;
  }

</style>