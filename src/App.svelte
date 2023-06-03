<script>
	import { fly } from 'svelte/transition'
  import { items, error, isLoading } from './store'
 
	import Header from './Header.svelte'
	import Main from './Main.svelte'
	
	export let endpoints
	
	let value = endpoints[0].url
	
	const flyOptions = {
		in: { x: 2000, delay: 500, duration: 300, opacity: 1 },
		out: { y: 1000, delay: 0, duration: 300, opacity: 1 }
	}

	const jsonToJS = response => response.json()
  
  const setItems = arg => $items = arg
  const setError = arg => $error = arg
  const setIsLoading = () => $isLoading = false

  $: fetch(value)
		.then(jsonToJS)
		.then(setItems)
		.catch(setError)
		.finally(setIsLoading)
</script>

<div>
	<Header bind:value {endpoints} />
	{#key value}
		<div in:fly={flyOptions.in} out:fly={flyOptions.out}>
			<Main {value} />
		</div>
	{/key}
</div>
