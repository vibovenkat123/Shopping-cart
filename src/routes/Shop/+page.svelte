<script lang="ts">
	import { products } from '../../stores/cart';
	import { cart, total } from '../../stores/cart';
	import { user, db } from '../../firebase';
	import { collection, addDoc, query, where, getDocs, deleteDoc } from 'firebase/firestore';
	async function getTheUid() {
		const q = query(collection(db, 'carts'), where('uid', '==', $user!.uid));
		const querySnapshot = await getDocs(q);
		let temp: { id: number; quantity: number }[] = [];
		let totalTemp = 0;
		querySnapshot.forEach((doc) => {
			temp.push(doc.data().data);
			if (doc.data().total > totalTemp) {
				totalTemp = doc.data().total;
			}
		});
		total.set(totalTemp);
		return temp;
	}

	async function addToCart(id: number, price: number) {
		let res = await getTheUid();
		cart.set(res);
		if ($cart.some((e) => e.id === id)) {
			for (const i in $cart) {
				if ($cart[i].id == id) {
					cart.update((n) => {
						n[i].quantity++;
						return n;
					});
					total.update((n) => n + price);
					const q = query(collection(db, 'carts'), where('data.id', '==', id));
					const querySnapshot = await getDocs(q);
					querySnapshot.forEach((doc) => {
						deleteDoc(doc.ref);
					});
					addDoc(collection(db, 'carts'), {
						data: $cart[parseInt(i)],
						uid: $user!.uid,
						total: $total
					});
				}
			}
		} else {
			cart.update((n) => {
				n.push({ id, quantity: 1 });
				return n;
			});
			total.update((n) => n + price);
			addDoc(collection(db, 'carts'), { data: $cart.at(-1), uid: $user!.uid, total: $total });
		}
	}
</script>

<main>
	<div class="w-full h-full bg-norddarkest">
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-12 p-4 ml-0 lg:grid-cols-3 sxl:grid-cols-5">
			{#each products as product}
				<div
					class="border-4 border-nord0 h-fit w-auto rounded-md flex flex-col items-center overflow-auto text-center bg-norddarkest p-1"
				>
					<img src={product.src} alt={product.name} class="h-56 w-full" />
					<div>
						<h1 class="text-3xl text-slate-200 font-bold">{product.name}</h1>
						{#if product.description}
							<p class="text-sm sm:text-md text-slate-400">{product.description}</p>
						{/if}
						<p class="text-slate-100 text-md sm:text-lg">Price: {product.price}</p>
					</div>
					<button
						class="text-2xl text-nord6 bg-nord1 rounded-md p-1 sm:mt-3 thicc:mt-3 border-2 border-nord1 hover:scale-110"
						style="transition:transform .2s"
						on:click={() => {
							addToCart(product.id, product.rawPrice);
						}}>Add To Cart</button
					>
				</div>
			{/each}
		</div>
	</div>
</main>
