<script>
  import { onMount } from 'svelte';

  let time = '';
  let networkStatus = false;
  let batteryLevel = 100;
 
  onMount(() => {
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
      const updateTime = () => {
        const now = new Date();
        time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      };
      updateTime();
      const timeInterval = setInterval(updateTime, 60000);
      const updateNetworkStatus = () => {
        networkStatus = navigator.onLine;
      };
      updateNetworkStatus();
      window.addEventListener('online', updateNetworkStatus);
      window.addEventListener('offline', updateNetworkStatus);

      if (navigator.getBattery) {
        navigator.getBattery().then(battery => {
          const updateBatteryLevel = () => {
            batteryLevel = Math.floor(battery.level * 100);
            updateBatteryIcon(batteryLevel);
          };
          updateBatteryLevel();
          battery.addEventListener('levelchange', updateBatteryLevel);
        });
      }

      return () => {
        clearInterval(timeInterval);
        window.removeEventListener('online', updateNetworkStatus);
        window.removeEventListener('offline', updateNetworkStatus);
      };
    }
  });

  function updateBatteryIcon(level) {
    const batteryLevelRect = document.getElementById('battery-level');
    if (batteryLevelRect) {
      batteryLevelRect.setAttribute('width', (level * 0.14));
      batteryLevelRect.setAttribute('fill', level > 20 ? '#000000' : '#FF0000');
    }
  }

  let signalStrength = 4;
</script>

<style>
  @import '../../styles/header.scss';
</style>

<header class="main--header--container">
  <div class="status--bar">
    <div class="left">
      <div>{time}</div>
    </div>
    <div class="right">
      <div class="network-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="10" width="4" height="10" rx="1.5" fill={signalStrength >= 1 ? "#000000" : "#e0e0e0"} />
            <rect x="10" y="8" width="4" height="12" rx="1.5" fill={signalStrength >= 2 ? "#000000" : "#e0e0e0"} />
            <rect x="16" y="6" width="4" height="14" rx="1.5" fill={signalStrength >= 3 ? "#000000" : "#e0e0e0"} />
            <rect x="22" y="4" width="4" height="16" rx="1.5" fill={signalStrength >= 4 ? "#000000" : "#e0e0e0"} />
        </svg>
      </div>
      <div>
        {#if networkStatus}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 17 12" fill="none">
          <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M8.50047 2.58753C10.967 2.58764 13.3393 3.55505 15.1269 5.28982C15.2615 5.42375 15.4766 5.42206 15.6092 5.28603L16.896 3.96045C16.9631 3.89146 17.0006 3.798 17 3.70076C16.9994 3.60353 16.9609 3.51052 16.893 3.44234C12.2011 -1.14745 4.79908 -1.14745 0.107163 3.44234C0.0391973 3.51047 0.000634479 3.60345 7.75932e-06 3.70069C-0.00061896 3.79792 0.0367421 3.89141 0.103824 3.96045L1.39096 5.28603C1.52346 5.42226 1.73878 5.42396 1.87331 5.28982C3.66116 3.55494 6.03367 2.58752 8.50047 2.58753ZM8.53591 6.67235C9.89112 6.67227 11.198 7.18644 12.2025 8.11497C12.3384 8.24674 12.5524 8.24389 12.6849 8.10853L13.9702 6.78295C14.0379 6.71342 14.0754 6.61909 14.0744 6.52108C14.0735 6.42306 14.034 6.32954 13.965 6.26142C10.9059 3.35683 6.16853 3.35683 3.10945 6.26142C3.04035 6.32953 3.00092 6.42311 3.00002 6.52115C2.99911 6.6192 3.0368 6.71352 3.10462 6.78295L4.38954 8.10853C4.52199 8.24389 4.73602 8.24674 4.87189 8.11497C5.87578 7.18706 7.18159 6.67293 8.53591 6.67235ZM11.1496 9.34267C11.1515 9.44096 11.1137 9.53573 11.0449 9.60459L8.82165 11.8948C8.75648 11.9621 8.66762 12 8.57491 12C8.4822 12 8.39334 11.9621 8.32817 11.8948L6.10452 9.60459C6.03583 9.53568 5.99804 9.44088 6.00008 9.34259C6.00212 9.2443 6.0438 9.15123 6.11528 9.08534C7.53515 7.8595 9.61467 7.8595 11.0345 9.08534C11.106 9.15128 11.1476 9.24438 11.1496 9.34267Z" fill="black"/>   
          <line x1="0" y1="0" x2="17" y2="12" stroke="balck" stroke-width="1.5"/>
        </svg>
          {:else}
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.50047 2.58753C10.967 2.58764 13.3393 3.55505 15.1269 5.28982C15.2615 5.42375 15.4766 5.42206 15.6092 5.28603L16.896 3.96045C16.9631 3.89146 17.0006 3.798 17 3.70076C16.9994 3.60353 16.9609 3.51052 16.893 3.44234C12.2011 -1.14745 4.79908 -1.14745 0.107163 3.44234C0.0391973 3.51047 0.000634479 3.60345 7.75932e-06 3.70069C-0.00061896 3.79792 0.0367421 3.89141 0.103824 3.96045L1.39096 5.28603C1.52346 5.42226 1.73878 5.42396 1.87331 5.28982C3.66116 3.55494 6.03367 2.58752 8.50047 2.58753ZM8.53591 6.67235C9.89112 6.67227 11.198 7.18644 12.2025 8.11497C12.3384 8.24674 12.5524 8.24389 12.6849 8.10853L13.9702 6.78295C14.0379 6.71342 14.0754 6.61909 14.0744 6.52108C14.0735 6.42306 14.034 6.32954 13.965 6.26142C10.9059 3.35683 6.16853 3.35683 3.10945 6.26142C3.04035 6.32953 3.00092 6.42311 3.00002 6.52115C2.99911 6.6192 3.0368 6.71352 3.10462 6.78295L4.38954 8.10853C4.52199 8.24389 4.73602 8.24674 4.87189 8.11497C5.87578 7.18706 7.18159 6.67293 8.53591 6.67235ZM11.1496 9.34267C11.1515 9.44096 11.1137 9.53573 11.0449 9.60459L8.82165 11.8948C8.75648 11.9621 8.66762 12 8.57491 12C8.4822 12 8.39334 11.9621 8.32817 11.8948L6.10452 9.60459C6.03583 9.53568 5.99804 9.44088 6.00008 9.34259C6.00212 9.2443 6.0438 9.15123 6.11528 9.08534C7.53515 7.8595 9.61467 7.8595 11.0345 9.08534C11.106 9.15128 11.1476 9.24438 11.1496 9.34267Z" fill="black"/>   
          <line x1="0" y1="0" x2="17" y2="12" stroke="balck" stroke-width="2"/>
        </svg>
        
        {/if}
      </div>
      <div id="battery-icon">
        <svg width="30" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="6" width="18" height="12" ry="5" rx="2" fill="#ffffff" stroke="#d2d2d2" stroke-width="1"/>
          <rect x="20" y="10" width="2" height="4" ry="5" rx="2" fill="#d2d2d2"/>
          <rect id="battery-level" x="3" y="8" ry="5" rx="2" width="18" height="8" fill="rgba(5, 169, 135, 1)"/>
        </svg>
    </div>
  </div>
</div>
  <nav class="header--container">
    <div class="logo--container">
      <img src="/logo.svg" alt="Logo" />
      <p class="title"> GANAK</p>
    </div>
    <div class="buttons--container">
      <button class="contact--us">Contact us</button>
      <button class="book--demo">Book a demo</button>
    </div>
  </nav>
</header>
