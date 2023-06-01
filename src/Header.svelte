<script>
  export let value
  export let endpoints
</script>

<header>
  <h1>FlipCards</h1>
  <select bind:value>
    {#each endpoints as endpoint}
      <option value={endpoint.url}>{endpoint.name}</option>
    {/each}
  </select>
</header>

<style>
  header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: var(--size);
    padding-inline: var(--size);
  }
</style>
