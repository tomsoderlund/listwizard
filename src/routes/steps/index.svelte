<script context="module">
  export async function preload({ params, query }) {
    return { params, query }
  }
</script>
<script>
  export let params, query

  import { processText, formatTSV } from './_steps'

  let rawText = `02-0302-03AWS EMEAAWS.AMAZON.COUSD78,00774,13
02-0202-03GOOGLE *CLOUD_01DF0B-DCCÖGOOGLE.COM2 184,07
02-0102-03FASTLY, INC.415-6045348USD250,002 481,19
02-0102-03ADOBE PHOTOGPHY PLANADOBE.COM96,00
02-0102-03GOOGLE*GSUITE WELD.IOINTERNETEUR38,40419,20
02-0102-03DIGITALOCEAN.COM6463978051USD2,3923,73
02-0102-03MLAB4157582748USD78,50779,10
02-0102-03IMGIX4154845964USD104,201 034,16
01-3102-03FACEBK *TFAT3RSMH2FB.ME/ADSUSD5,8958,46
01-3002-03CULTURSTOCKHOLM360,00
01-3001-31FACEBK *DXGH3RSMH2FB.ME/ADSUSD750,007 426,30
01-2901-30GITHUB8774484820USD25,00246,74
01-2801-29INTERCOM.IO8778877815USD131,801 302,60
01-2801-28GOOGLE *ADS7865733355CCÖGOOGLE.COM5 000,00
01-2401-27SCANDINAVIAN PHOTOSTOCKHOLM2 125,00
01-2401-27MSFT *MSFT AZURE3,49
01-2401-27CLOUDBEES, INC.3238424483USD49,00480,84
01-2301-24ADESPRESSO, INC.4156889467USD69,00675,76
01-2201-23NPM, INC.5109073049USD14,00136,80
01-2101-22NETDNA. LLC8776292361USD25,00244,43
01-2101-22GHOSTINSPECTOR.COM2063953635USD79,00772,40`

  // insert, regex, splitColumn, splitRow, sort, reverse
  let operations = [
    { operation: 'splitColumn', position: 5 },
    { operation: 'splitColumn', position: 11 },
    { operation: 'insertAt', position: 0, text: '- [ ]\t2021-' },
    { operation: 'regex', from: '(USD|EUR)', to: '\t$&\t' },
    { operation: 'regex', from: '(.IO|.COM|STOCKHOLM)', to: '$&\t' },
    { operation: 'regex', from: '(CCÖ)', to: ' $& ' },
    { operation: 'regex', from: '(INC.|LLC|EMEA|IMGIX|GITHUB|MLAB)', to: '$& ' },
    { operation: 'regex', from: '(FB.ME|STOCKHOLM)', to: ' $&' },
    { operation: 'regex', from: 'AZURE', to: 'AZURE\t' },
    { operation: 'regex', from: ',[0-9]{2}', to: '$&\t' },
    { operation: 'regex', from: '\t$', to: '' },
  ]

  import PageHead from '../../components/PageHead.svelte'
  import SectionContainer from '../../components/SectionContainer.svelte'
  import Section from '../../components/Section.svelte'
  import Table from '../../components/Table.svelte'
  import CopyToClipboard from '../../components/CopyToClipboard.svelte'
  import OperationsManager from './OperationsManager.svelte'

  const pageTitle = 'Step-by-Step List Manipulation'
</script>

<style>
  textarea {
    font-size: 0.8em;
    min-height: 20em;
  }

  :global(.output table) {
    font-size: 0.8em;
  }
</style>

<PageHead
  title={pageTitle}
  description='Manipulate text lists with step-by-step actions and get a CSV file as output'
/>

<h1>{pageTitle}</h1>

<SectionContainer>
  <Section title='Input'>
    <textarea
      placeholder='Write/paste text rows here'
      bind:value={rawText}
    />
  </Section>

  <Section title='Operations'>
    <OperationsManager
      operations={operations}
    />
  </Section>

  <Section title='Output' class='output'>
    <CopyToClipboard
      textToCopy={formatTSV(processText(rawText, operations))}
    />
    <Table
      values={processText(rawText, operations)}
    />
  </Section>
</SectionContainer>
