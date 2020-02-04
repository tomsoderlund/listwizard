<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

<h1>{pageTitle}</h1>

<SectionContainer>
  <Section title='Input'>
    <textarea />
  </Section>

  <Section title='Operations'>
  </Section>

  <Section title='Output'>
  </Section>
</SectionContainer>

<script context="module">
  export async function preload({ params, query }) {
    return { params, query }
  }
</script>
<script>
  export let params, query;

  import SectionContainer from '../../components/SectionContainer.svelte'
  import Section from '../../components/Section.svelte'

  const pageTitle = 'Step-by-Step Manipulation'
</script>

