<script>
  import { fly } from 'svelte/transition'
  import Spinner from './Spinner.svelte'
  import Header from './Header.svelte'
  import Card from './Card.svelte'
  import Error from './Error.svelte'

  export let endpoints = []

  let items
  let value = endpoints[0]?.url
  let isLoading = true
  let error

  const flyInOptions = { x: 2000, delay: 500, duration: 300, opacity: 1 }
  const flyOutOptions = { y: 1000, delay: 0, duration: 300, opacity: 1 }

  const parseToJS = response => response.ok && response.json()
  const setItems = arg => (items = arg)
  const setError = arg => (error = arg)
  const setIsLoading = () => (isLoading = false)

  $: fetch(value)
    .then(parseToJS)
    .then(setItems)
    .catch(setError)
    .finally(setIsLoading)
</script>

<div class="wrapper">
  <Header bind:value {endpoints} />

  <main>
    {#if isLoading}
      <Spinner />
    {:else if error}
      <Error {error} />
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
