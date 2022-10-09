<script lang="ts">
	import '../app.css';
	import { company } from '../fake';
	import { cart } from '../stores/cart';
	import { products } from '../stores/cart';
	import { formatter } from '../stores/cart';
	import { total } from '../stores/cart';
	
	let homeActive = 'underline';
	let productsActive = 'none';
	function addItem(id: number, price: number) {
		for (const i in $cart) {
			if ($cart[i].id == id) {
				cart.update((n) => {
					n[i].quantity++;
					return n;
				});
			}
		}
		total.update((n) => n + price);
	}
	function removeItem(id: number, price: number) {
		for (const i in $cart) {
			if ($cart[i].id == id) {
				if ($cart[i].quantity <= 1){
					console.log(i)
					cart.update(n => {
						n.splice(parseInt(i), 1)
						return n
					})
				} else {
					cart.update((n) => {
					n[i].quantity--;
					return n;
				})
				total.update((n) => n - price);
				break;
				}
			}
		}
	}
	let companyName = company.name;
	let modal: HTMLDialogElement;
	function showCart() {
		modal.showModal();
	}
	function closeCart() {
		modal.close();
	}
</script>

<main>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,500;0,700;1,400&display=swap"
		rel="stylesheet"
	/>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
	/>
	<header class="bg-black flex justify-center h-24">
		<div class="flex justify-center items-center p-4 w-3/4 text-white flex-col">
			<div>
				<a href="/" class="w-full">
					<h1 class="text-5xl font-RobotoM font-normal" aria-label="xoringer">
						{companyName}
					</h1>
				</a>
			</div>
			<nav class="w-full flex justify-between items-center gap-7 text-2xl">
				<a href="/"  style="text-decoration: {homeActive}; text-underline-offset: 8px;" on:click={() => {
					homeActive = 'underline'
					productsActive = 'none'
				}}>Home</a>
				<a href="/Shop"  on:click={() => {
					productsActive = 'underline'
					homeActive = 'none'
				}} style="text-decoration: {productsActive}; text-underline-offset: 8px;">Shop</a>
				<div>
					<button aria-label="cart" on:click={showCart}>
						<span class="material-symbols-outlined" style="font-size: 32px;" aria-hidden="true">
							shopping_cart
						</span>
					</button>
				</div>
			</nav>
		</div>
	</header>
	<dialog class="bg-black text-white" bind:this={modal}>
		<div class="overflow-auto">
			<button on:click={closeCart}> <span class="material-symbols-outlined"> close </span></button>
			<h1 class="text-3xl">Cart:</h1>
			{#if $cart.length > 0}
				<div class="h-96 overflow-auto">
					{#each $cart as index}
						<div
							class="border-4 border-black h-80 w-58 rounded-md flex flex-col items-center overflow-auto text-center sm:h-96"
						>
							<img src={products[index.id].src} alt={products[index.id].name} class="h-48 w-full" />
							<div>
								<h1 class="text-3xl font-bold text-slate-100">{products[index.id].name}</h1>
								<p class="text-slate-50 text-lg">Price: {products[index.id].price}</p>
							</div>
							<button class="text-2xl text-white">
								<div class="flex items-center  mt-3">
									<div class="mr-3">
										<button
											class="bg-gray-300 w-8 h-8 text-center hover:bg-gray-400"
											on:click={() => {
												removeItem(products[index.id].id, products[index.id].rawPrice);
											}}><p class="text-2xl text-black">-</p></button
										>
									</div>
									<div class="text-3xl mr-3">{index.quantity}</div>
									<div>
										<button class="bg-gray-300 w-8 h-8 text-center hover:bg-gray-400"
											><p
												class="text-2xl text-black"
												on:click={() => {
													addItem(products[index.id].id, products[index.id].rawPrice);
												}}
											>
												+
											</p></button
										>
									</div>
								</div>
							</button>
						</div>
					{/each}
				</div>
				<div class="mb-5">
					<h1>Final:</h1>
					<h1 class="fixed">{formatter.format($total)}</h1>
				</div>
			{/if}
		</div>
	</dialog>
</main>
<slot />
