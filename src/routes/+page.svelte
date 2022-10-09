<script lang="ts">
	import { company } from '../fake';
</script>

<main>
	<script src="https://cdn.jsdelivr.net/npm/kute.js@2.2.4/dist/kute.min.js"></script>
	<div class="h-screen overflow-hidden w-screen bg-norddarkest p-4">
		<div class="space bg-home rotate-180" />
		<div class="flex items-center flex-col nordBg mt-32 w-full h-full lg:mt-24">
			<h1 class="text-3xl sm:text-5xl md:text-6xl thicc:text-7xl mt-3 font-RobotoM text-nord6 z-10">
				Welcome To {company.name}
			</h1>
			<h2 class="text-2xl sm:text-3xl md:text-4xl thicc:text-5xl mt-5 font-RobotoM text-nord6 z-10">
				We shape the future
			</h2>
			<svg
				id="visual"
				class="blob-anim"
				viewBox="0 0 960 540"
				width="960"
				height="540"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				version="1.1"
				><g transform="translate(448.9161091147367 272.7285404659046)"
					><path
						id="blobStart"
						d="M163.2 -155.2C208 -118.3 238.5 -59.2 224.8 -13.7C211.2 31.8 153.3 63.6 108.5 99.3C63.6 135 31.8 174.5 -15.9 190.4C-63.6 206.3 -127.3 198.6 -151.9 162.9C-176.6 127.3 -162.3 63.6 -156.9 5.4C-151.5 -52.8 -154.9 -105.6 -130.3 -142.4C-105.6 -179.3 -52.8 -200.1 3.2 -203.3C59.2 -206.5 118.3 -192 163.2 -155.2"
						fill="#3b4252"
					/></g
				>
				<g transform="translate(439.0301384315982 312.90237681663217)" style="visibility: hidden;"
					><path
						id="blobEnd"
						d="M117 -109.9C163.4 -70.7 220.7 -35.4 222.1 1.4C223.5 38.2 169 76.4 122.7 114C76.4 151.7 38.2 188.9 -3.8 192.6C-45.7 196.4 -91.5 166.8 -124.6 129.1C-157.8 91.5 -178.4 45.7 -190.9 -12.5C-203.4 -70.7 -207.8 -141.4 -174.6 -180.6C-141.4 -219.8 -70.7 -227.4 -17.7 -209.7C35.4 -192 70.7 -149 117 -109.9"
						fill="#3B4153"
					/></g
				>
			</svg>
		</div>
		<div class="space bg-home" />
	</div>
	<script lang="ts" type="module">
		const animation = KUTE.fromTo(
			'#blobStart',
			{ path: '#blobStart' },
			{ path: '#blobEnd' },
			{ repeat: 999, duration: 3000, yoyo: true }
		);
		animation.start();
	</script>
</main>

<style scoped>
	.blob-anim {
		position: absolute;
		transform: translateY(-30%);
	}
</style>
