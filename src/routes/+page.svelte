<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
  import Hero from '$lib/components/Hero.svelte'
	import Innovation from '$lib/components/Innovation.svelte';
  import Limitation from '$lib/components/Limitation.svelte';
  import UniversalBenifits from '$lib/components/UniversalBenifits.svelte';
  import Architecture from '$lib/components/Architecture.svelte';
  import ModularDesign from '$lib/components/ModularDesign.svelte';
	import FaqComponent from '$lib/components/FaqComponent.svelte';
	import FaqSection from '$lib/components/FaqSection.svelte';
  import GotoTopbutton from '$lib/components/GotoTopbutton.svelte';
</script>
<style lang="scss">
  @import'../styles/global.scss';
</style>
<div class="parent--layout">
  <GotoTopbutton/>
  <Header />
  <div class="first--child--layout">
     <Hero/>
  </div>
  <div class="second--child--layout">
    <Limitation/>
    <UniversalBenifits/>
  </div>
  <div>
    <Architecture/>
  </div>
  <div>
    <ModularDesign/>
  </div>
</div>
<div>
  <Innovation/>
</div>
<div>
  <FaqSection />
</div>
<div>
  <Footer />
</div>

  