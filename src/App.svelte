<script>
  import { fly } from 'svelte/transition'
  import endpoints from './endpoints'
  import Spinner from './Spinner.svelte'
  import Header from './Header.svelte'
  import Card from './Card.svelte'

  let items
  let value = endpoints[0].url
  let isLoading = true

  const flyInOptions = { x: 1200, delay: 200, duration: 200, opacity: 1 }
  const flyOutOptions = { x: -1200, duration: 200, opacity: 1 }

  const parseResponseToJS = arg => arg.json()
  const setItems = arg => (items = arg)
  const setIsLoading = () => (isLoading = false)

  $: fetch(value)
    .then(parseResponseToJS)
    .then(setItems)
    .catch(console.error)
    .finally(setIsLoading)
</script>

<main>
  <Header bind:value {endpoints} />

  {#if isLoading}
    <Spinner />
  {:else}
    {#key value}
      <section in:fly={flyInOptions} out:fly={flyOutOptions}>
        {#each items.posts ?? [] as item}
          <Card {item} />
        {:else}
          <p>No cards found</p>
        {/each}
      </section>
    {/key}
  {/if}
</main>

<style>
  main {
    min-height: 100vh;
    text-align: center;
    padding: var(--size);
  }
  section {
    --min: 14em;
    --max: 1fr;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(var(--min), var(--max)));
    gap: calc(var(--size) * 2);
    padding: var(--size);
    perspective: 10000px;
  }
</style>
