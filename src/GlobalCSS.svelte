<style>
	:global(*) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	
	:global(body) {
		--size: 1.5rem;
		--half-size: calc(var(--size) / 2);
		--dark: #232323;
		--gradient-1: #8e2de2;
		--gradient-2: #4a00e0;
		--accent: hsl(92, 76%, 53%);
		--light: white;
		--rotate: 0 1 0 180deg;
		--shadow: 0 0.5rem 1rem rgba(0,0,0,0.2);
		
		background-image:
			linear-gradient(
				to right,
				var(--gradient-1),
				var(--gradient-2)
			);
		color: var(--light);
		line-height: 1.5;
	}
	:global(button) {
		background-color: transparent;
		border: none;
	}
</style>