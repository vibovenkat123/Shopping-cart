<script lang="ts">
	export let name: string | null;
	export let imageURL: string | null;
</script>

<main>
	<div class="flex justify-center items-center">
		<img src={imageURL} class="rounded-full mr-2 w-8 sm:w-9 lg:w-11" alt="Profile" />
		<h3 class="text-sm text-nord6 sm:text-lg lg:text-2xl">{name}</h3>
	</div>
</main>
