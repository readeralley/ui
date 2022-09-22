<script>
	const amount = Array(6);
</script>

<div class="flex w-full space-x-4 p-4">
	{#each amount as _}
		<div class="h-40 flex-grow cursor-pointer rounded-md bg-green-200" />
	{/each}
</div>
