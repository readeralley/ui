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
	class="flex w-full p-4 space-x-4 overflow-x-auto"
	bind:this={slider}
	on:mousedown={startScroll}
	on:mouseup={stopScroll}
	on:mousemove={scroll}
>
	{#each amount as _, i}
		<div
			class="h-40 w-32 bg-green-200 rounded-md select-none cursor-pointer flex-shrink-0 text-slate-700 flex items-center justify-center"
			transition:slide
		>
			{i}
		</div>
	{/each}
</div>

<svelte:window on:mouseup={stopScroll} on:mousemove={scroll} />

snap

<div class="flex w-full p-4 space-x-4 overflow-x-auto snap-x">
	{#each amount as _, i}
		<div
			class="h-40 w-32 bg-green-200 rounded-md select-none cursor-pointer flex-shrink-0 text-slate-700 flex items-center justify-center snap-start scroll-ml-4"
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
