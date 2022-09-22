<script>
	const amount = Array(6);
</script>

<div class="flex w-full p-4 space-x-4">
	{#each amount as _}
		<div class="h-40 bg-green-200 flex-grow rounded-md cursor-pointer" />
	{/each}
</div>
