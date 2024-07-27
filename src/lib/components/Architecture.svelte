<script context="module"></script>

  <script>
    import { onMount, onDestroy } from 'svelte';
    let isAnimating = false;
  
    const startAnimation = () => {
        if (typeof window !== 'undefined') {
        const flowchartItems = document.querySelectorAll('.flowchart-item');
        let delay = 0;
        flowchartItems.forEach((item, index) => {
          if (index !== 1) {
            setTimeout(() => {
              item.classList.add('animate');
            }, delay);
            delay += 1000;
          }
        });
      }
    };
  
    const stopAnimation = () => {
      if (typeof window !== 'undefined') {
        const flowchartItems = document.querySelectorAll('.flowchart-item');
        flowchartItems.forEach((item, index) => {
          if (index !== 1) {
            item.classList.remove('animate');
          }
        });
      }
    };
  
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY >= 1600 && window.scrollY <= 2400 && !isAnimating) {
          startAnimation();
          isAnimating = true;
        } else if ((window.scrollY < 1600 || window.scrollY > 2400) && isAnimating) {
          stopAnimation();
          isAnimating = false;
        }
      }
    };
    onMount(() => {
      if (!import.meta.env.SSR) {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
      }
    });
    onDestroy(() => {
      if (!import.meta.env.SSR) {
        window.removeEventListener('scroll', handleScroll);
        stopAnimation();
      }
    });
  </script>
  
<style>@import'../../styles/architecture.scss';</style>

<section class="architecture--container--desktop">
    <div class="heading">
        <p>Architecture</p>
    </div>
    <div class="content">
        <div class="flowchart">
            <div class="user--interface flowchart-item ">
                <p class="heading">USER INTERFACE (UI)</p>
                <p class="content">TRANSACTION DATA INPUT / API</p>
            </div>
            <div class="content--for--grid flowchart-item">
                <p>GANAK uses a streamlined UI or API for transaction data input, generates compliance proofs without revealing sensitive data, records transactions on the blockchain, and allows auditors and regulators to validate compliance.</p>
            </div>
            <div class="arrow1 flowchart-item ">
                <img src="/arrow1.svg" alt="Arrow 1">
            </div>
            <div class="transaction--processor flowchart-item ">
                <p class="heading">TRANSACTION PROCESSOR</p>
                <p class="content">PREPARE TRANSACTION DATA</p>
              <p>
                  <img  src="/small-arrow.svg" alt="small-arrow">
              </p>
                <p class="content">GENERATE ZKP</p>
            </div>
            <div class="arrow2 flowchart-item">
                <img src="/arrow2.svg" alt="Arrow 2">
            </div>
            <div class="blockchain--interaction--module flowchart-item ">
                <p class="heading">BLOCKCHAIN INTERACTION MODULE</p>
                <div class="content">
                    <p>BLOCKCHAIN ENTRY CREATOR</p>
                    <p>BLOCKCHAIN QUERY INTERFACE</p>
                </div>
            </div>
            <div class="arrow3 flowchart-item">
                <img src="/arrow3.svg" alt="Arrow 3">
            </div>
            <div class="blockchain flowchart-item ">
                <p class="heading">BLOCKCHAIN</p>
                <div class="content">
                <img src="/containerdb.svg" alt="containerdb">    
                    <p>BLOCKCHAIN DATA</p>
                </div>
            </div>
            <div class="arrow4 flowchart-item">
                <img src="/arrow4.svg" alt="Arrow 4">
            </div>
            <div class="compliance--verification--module flowchart-item ">
                <p class="heading">COMPLIANCE VERIFICATION MODULE</p>
                <div class="content">
                <p>COMPLIANCE CHECKER</p>
                <p>DECRYPT ZKP</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="architecture--container--mobile">
    <div class="heading">
        <p>Architecture</p>
    </div>
    <div class="content">
        <div class="flowchart">
            <div class="user--interface flowchart-item ">
                <p class="heading">USER INTERFACE (UI)</p>
                <p class="content">TRANSACTION DATA INPUT / API</p>
            </div>
            <div class="content--for--grid flowchart-item">
                <p>GANAK uses a streamlined UI or API for transaction data input, generates compliance proofs without revealing sensitive data, records transactions on the blockchain, and allows auditors and regulators to validate compliance.</p>
            </div>
            <div class="arrow1 flowchart-item ">
                <img src="/arrow1.svg" alt="Arrow 1">
            </div>
            <div class="transaction--processor flowchart-item ">
                <p class="heading">TRANSACTION PROCESSOR</p>
                <p class="content">PREPARE TRANSACTION DATA</p>
              <p>
                  <img  src="/small-arrow.svg" alt="small-arrow">
              </p>
                <p class="content">GENERATE ZKP</p>
            </div>
            <div class="arrow2 flowchart-item">
                <img src="/arrow2.svg" alt="Arrow 2">
            </div>
            <div class="blockchain--interaction--module flowchart-item ">
                <p class="heading">BLOCKCHAIN INTERACTION MODULE</p>
                <div class="content">
                    <p>BLOCKCHAIN ENTRY CREATOR</p>
                    <p>BLOCKCHAIN QUERY INTERFACE</p>
                </div>
            </div>
            <div class="arrow3 flowchart-item">
                <img src="/arrow3.svg" alt="Arrow 3">
            </div>
            <div class="blockchain flowchart-item ">
                <p class="heading">BLOCKCHAIN</p>
                <div class="content">
                <img src="/containerdb.svg" alt="containerdb">    
                    <p>BLOCKCHAIN DATA</p>
                </div>
            </div>
            <div class="arrow4 flowchart-item">
                <img src="/arrow4.svg" alt="Arrow 4">
            </div>
            <div class="compliance--verification--module flowchart-item ">
                <p class="heading">COMPLIANCE VERIFICATION MODULE</p>
                <div class="content">
                <p>COMPLIANCE CHECKER</p>
                <p>DECRYPT ZKP</p>
                </div>
            </div>
        </div>
    </div>
</section>