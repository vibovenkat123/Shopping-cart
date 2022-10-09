<script lang="ts">
	import { products } from '../../stores/cart';
	import { cart } from '../../stores/cart';
	import { total } from '../../stores/cart';
	function addToCart(id: number, price: number) {
		if ($cart.some((e) => e.id === id)) {
			for (const i in $cart) {
				if ($cart[i].id == id) {
					cart.update((n) => {
						n[i].quantity++;
						return n;
					});
				}
			}
		} else {
			cart.update((n) => {
				n.push({ id, quantity: 1 });
				return n;
			});
		}
		total.update((n) => n + price);
	}
</script>

<main>
	<div class="w-screen h-screen bg-black">
		<div
			class="grid grid-cols-2 gap-12 p-4 ml-0 md:grid-cols-3 lg:grid-cols-4 sxl:grid-cols-5"
		>
			{#each products as product}
				<div
					class="border-4 border-black h-80 w-58 rounded-md flex flex-col items-center overflow-auto text-center sm:h-96"
				>
					<img src={product.src} alt={product.name} class="h-56 w-full" />
					<div>
						<h1 class="text-3xl text-slate-200 font-bold">{product.name}</h1>
						{#if product.description}
							<p class="text-md text-slate-400">{product.description}</p>
						{/if}
						<p class="text-slate-100 text-lg">Price: {product.price}</p>
					</div>
					<button
						class="text-2xl text-white bg-slate-500 rounded-md p-1 sm:mt-7 thicc:mt-4 hover:bg-black hover:text-slate-500 border-2 border-slate-500"
						on:click={() => {
							addToCart(product.id, product.rawPrice);
						}}>Add To Cart</button
					>
				</div>
			{/each}
		</div>
	</div>
</main>
