<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Hero from '$lib/components/Hero.svelte'
	import Innovation from '$lib/components/Innovation.svelte';
  import Limitation from '$lib/components/Limitation.svelte';
  import UniversalBenifits from '$lib/components/UniversalBenifits.svelte';
</script>
<style lang="scss">
  @import'../styles/global.scss';
</style>
<div class="parent--layout">
  <Header />
  <div class="first--child--layout">
     <Hero/>
  </div>
  <div class="second--child--layout">
    <Limitation/>
    <UniversalBenifits/>
  </div>
  <div>
    <Innovation/>
  </div>
</div>

  