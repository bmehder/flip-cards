<script>
  import { fly } from 'svelte/transition'
  import Spinner from './Spinner.svelte'
  import Header from './Header.svelte'
  import Card from './Card.svelte'

	export let endpoints = []

  let items
  let value = endpoints[0]?.url
  let isLoading = true

  const flyInOptions = { x: 2000, delay: 500, duration: 300, opacity: 1 }
  const flyOutOptions = { x: -2000, delay: 0, duration: 300, opacity: 1 }

  const parseResponseToJS = arg => arg.ok && arg.json()
  const setItems = arg => (items = arg)
  const setIsLoading = () => (isLoading = false)

  $: fetch(value)
    .then(parseResponseToJS)
    .then(setItems)
    .catch(console.error)
    .finally(setIsLoading)
</script>

<div class="wrapper">
  <Header bind:value {endpoints} />

  <main>
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
</div>

<style>
  main {
    min-height: 100vh;
    text-align: center;
    padding-block: var(--size);
    padding-inline: var(--double-size);
  }
  section {
    --min: 14em;
    --max: 1fr;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(var(--min), var(--max)));
    gap: var(--double-size);
    perspective: 10000px;
  }
</style>
