<script lang="ts">
	import '../app.css';
	import { company } from '../fake';
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
				<a href="/">Home</a>
				<a href="/Shop">Shop</a>
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
		<div>
			<button on:click={closeCart}>
				<span class="material-symbols-outlined"> close </span>
			</button>
			<div />
		</div>
	</dialog>
</main>
<slot />
