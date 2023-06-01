<script>
  export let value
  export let endpoints
</script>

<header>
  <h1>FlipCards</h1>
  <select bind:value>
    {#each endpoints as { url, name }}
      <option value={url}>{name}</option>
    {/each}
  </select>
</header>

<style>
  header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: var(--size);
    padding-block: var(--size);
    padding-inline: var(--double-size);
  }
  select:focus {
    outline: 2px solid var(--accent);
  }
</style>
