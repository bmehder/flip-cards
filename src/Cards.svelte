<script>
	import { items } from './store'
	
	import Card from './Card.svelte'	
</script>

<section>
	{#each $items.posts ?? [] as item}
		<Card {item} />
	{:else}
		<p>No cards found</p>
	{/each}
</section>

<style>
	section {
    --min: 14em;
    --max: 1fr;

    display: grid;
    grid-template-columns:
			repeat(auto-fit, minmax(var(--min), var(--max)));
    gap: var(--double-size);
    perspective: 2000px;
  }
</style>