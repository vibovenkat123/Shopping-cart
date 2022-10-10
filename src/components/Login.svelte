<script lang="ts">
  import {signInWithPopup, type User} from 'firebase/auth'
  import {auth, provider} from '../firebase'
  import {authState} from 'rxfire/auth'
  import { cart } from '../stores/cart';
  import { products } from '../stores/cart';
  import {formatter} from '../stores/cart'
  import { total } from '../stores/cart';

  export let removeItem:Function;
  export let addItem:Function;
  export let user = authState(auth);
  const login = () => {
    signInWithPopup(auth,provider)
  }
</script>
<main>
  {#if $user}
  <button on:click={() => {auth.signOut()}} class="bg-nord8 p-1 rounded-md text-nord1">Logout</button>
  <h1 class="text-3xl">Cart:</h1>
			{#if $cart.length > 0}
				<div class="h-96 overflow-auto">
					{#each $cart as index}
						<div
							class="border-4 border-nord0 h-80 w-58 rounded-md flex flex-col items-center overflow-auto text-center sm:h-96"
						>
							<img src={products[index.id].src} alt={products[index.id].name} class="h-48 w-full" />
							<div>
								<h1 class="text-3xl font-bold text-nord6">{products[index.id].name}</h1>
								<p class="text-nord6 text-lg">Price: {products[index.id].price}</p>
							</div>
							<button class="text-2xl text-nord6">
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
  {:else}
    <button on:click={login} class="bg-nord8 p-1 rounded-md text-nord1 hover:scale-110" style="transition:transform .2s">Log In</button>
  {/if}
</main>
