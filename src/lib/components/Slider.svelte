<script>
	import { slide } from 'svelte/transition';

	const amount = Array(30);
	let scrolling = false;
	let slider;

	const startScroll = () => (scrolling = true);
	const stopScroll = () => (scrolling = false);
	const scroll = (event) => {
		if (!scrolling) return;
		slider.scrollLeft -= event.movementX;
	};
</script>

drag

<div
	class="flex w-full space-x-4 overflow-x-auto p-4"
	bind:this={slider}
	on:mousedown={startScroll}
	on:mouseup={stopScroll}
	on:mousemove={scroll}
>
	{#each amount as _, i}
		<div
			class="flex h-40 w-32 flex-shrink-0 cursor-pointer select-none items-center justify-center rounded-md bg-green-200 text-slate-700"
			transition:slide
		>
			{i}
		</div>
	{/each}
</div>

<svelte:window on:mouseup={stopScroll} on:mousemove={scroll} />

snap

<div class="flex w-full snap-x space-x-4 overflow-x-auto p-4">
	{#each amount as _, i}
		<div
			class="flex h-40 w-32 flex-shrink-0 cursor-pointer select-none snap-start scroll-ml-4 items-center justify-center rounded-md bg-green-200 text-slate-700"
			transition:slide
		>
			{i}
		</div>
	{/each}
</div>

<!-- 
	TODO merge snap and drag
	TODO fig drag speed different from mouse speed
 -->
