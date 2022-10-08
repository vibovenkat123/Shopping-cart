<script lang='ts'>
  import {products} from '../../stores/cart'
  import {cart} from '../../stores/cart'
  function addToCart(id:number){
    cart.update(n => {
      n.push(id)
      return n
    })
    console.log($cart)
  }
</script>
<main>
  <div class="grid grid-cols-2 gap-12 p-4 ml-0 mt-4 md:grid-cols-3 lg:grid-cols-4 sxl:grid-cols-5">
    {#each products as product}
      <div class="border-4 border-black h-80 w-58 rounded-md flex flex-col items-center overflow-auto text-center sm:h-96">
        <img src={product.src} alt={product.name} class="h-56 w-full">
        <div>
          <h1 class="text-3xl text-slate-800 font-bold">{product.name}</h1>
          {#if product.description}
            <p class="text-md text-slate-500">{product.description}</p>
          {/if}
          <p class="text-slate-900 text-lg">Price: {product.price}</p>
        </div>
        <button class="text-2xl text-white bg-slate-500 rounded-md p-1 mb-1 sm:mt-8 thicc:mt-5 hover:bg-white hover:text-slate-500 hover:border-slate-500 hover:border-2" on:click={() => {
          addToCart(product.id)
        }}>Add To Cart</button>
      </div>
    {/each}
  </div>
</main>
