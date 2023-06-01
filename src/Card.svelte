<script>	
	export let item
	
	let isFlipped = false
	
	const handleClick = () => isFlipped = !isFlipped
</script>

<button class:isFlipped	on:click="{handleClick}">
	<div class="front">
		<div class="front-content">{item.title}</div>
	</div>
	<div class="back">
		<div class="back-content">{@html item.excerpt}</div>
	</div>
</button>

<style>
	button {
		position: relative;
		aspect-ratio: 1;
		transition: rotate 0.5s ease;
		transform-style: preserve-3d;
		border-radius: var(--size);
		outline: 4px solid var(--light);
		color: var(--light);
		line-height: inherit;
	}
	button:focus {
		outline: 4px solid var(--accent);
	}
	.isFlipped {
		rotate: var(--rotate);
	}
	.front, .back {
		position: absolute;
		inset: 0;
		display: grid;
		place-items: center;
		padding-inline: var(--half-size);
		background-color: var(--dark);
		border-radius: var(--size);
		box-shadow: var(--shadow);		
	}
	.front {
		font-size: var(--size);
	}
	.back {
		rotate: var(--rotate);
		backface-visibility: hidden;
	}
</style>