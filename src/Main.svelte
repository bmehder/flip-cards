<script>
	import { isLoading, error } from './store'
	
	import Spinner from './Spinner.svelte'
  import Error from './Error.svelte'
	import Cards from './Cards.svelte'
</script>

<main>
	{#if $isLoading}
		<Spinner />
	{:else if $error}
		<Error />
	{:else}
		<Cards />
	{/if}
</main>

<style>
	main {
		padding-block: var(--half-size);
    padding-inline: var(--double-size);
		text-align: center;
	}
</style>