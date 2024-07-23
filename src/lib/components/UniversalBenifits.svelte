
<script>
    import 'animate.css';
    import CardComponent from "./CardComponent.svelte";
    const benefits = [
      { id: 1, title: "Enhances Visibility Across Operations", description: "GANAK's integrated system provides a clear, transparent view of all compliance-related activities.", imgSrc: "/benifit1.svg" },
      { id: 2, title: "Minimizes Compliance-Related Expenses", description: "By automating many of the manual processes involved in compliance, GANAK significantly reduces the manpower and time required", imgSrc: "/benifit2.svg" },
      { id: 3, title: "Robust Protection of Sensitive Information", description: "GANAK employs advanced security measures, including blockchain technology, to ensure the integrity and confidentiality of sensitive data.", imgSrc: "/benifit3.svg" },
      { id: 4, title: "Facilitates Consistent Compliance", description: "With real-time monitoring and automated updates to regulatory changes, GANAK ensures that organizations are always in line.", imgSrc: "/benifit4.svg" },
      { id: 5, title: "Grows and Adapts With Your Business", description: "GANAK's modular design allows for scalability to suit the size and needs of any organization.", imgSrc: "/benifit5.svg" },
      { id: 6, title: "Streamlines Reporting Processes", description: "GANAK simplifies the process of generating compliance reports, making it easier to provide necessary documentation to regulators and stakeholders.", imgSrc: "/benifit6.svg" },
    ];
  
    let selectedBenefit = benefits[0];
    let shouldAnimate = false;
    
    function trasitionElment() {
    shouldAnimate === false ? shouldAnimate = true : shouldAnimate = false; 
    }

    function selectBenefit(benefit) {
    selectedBenefit = benefit;
    }
</script>

<style>
  @import'../../styles/universal-benifits.scss';
</style>


<section class="universal--benifits--container">
    <div class="heading">
      <p>Universal Benefits</p>
    </div>
    <div class="universal--benifits--details--container">
      <div class="left">
        {#each benefits as benefit}
          <div class="benefit--item {selectedBenefit.id === benefit.id ? 'selected' : ''}">
            <p class="benefit--title" on:click={() => {selectBenefit(benefit); trasitionElment()}}>{benefit.title}</p>
            {#if selectedBenefit.id === benefit.id}
              <p class="benefit--description animate__animated animate__fadeInDown">{benefit.description}</p>
            {/if}
          </div>
        {/each}
      </div>
      {#if selectedBenefit}
      <div class="right">
        <div class="img-wrapper {shouldAnimate ? 'animate__animated animate__zoomIn' : 'animate__animated animate__fadeIn'}">
          <img src={selectedBenefit.imgSrc} alt={selectedBenefit.title} />
        </div>
      </div>
      {/if}
    </div>
</section>

<section class="universal--benifits--details--container--for--mobile">
    <div class="heading">
        <p>Universal Benefits</p>
    </div>
    <div class="card--container">
        <CardComponent image="/benifit-mobile1.svg" flag="true" title="Enhances Visibility Across Operations" content="GANAK's integrated system provides a clear, transparent view of all compliance-related activities." />
        <CardComponent image="/benifit-mobile2.svg" flag="true" title="Minimizes Compliance-Related Expenses" content="By automating many of the manual processes involved in compliance, GANAK significantly reduces the manpower and time required" />
        <CardComponent image="/benifit-mobile3.svg" flag="true" title="Protection of Sensitive Information" content="GANAK employs advanced security measures, including blockchain technology, to ensure the integrity and confidentiality of sensitive data." />
        <CardComponent image="/benifit-mobile4.svg" flag="true" title="Facilitates Consistent Compliance" content="With real-time monitoring and automated updates to regulatory changes, GANAK ensures that organizations are always in line." />
        <CardComponent image="/benifit-mobile5.svg" flag="true" title="Grows and Adapts With Your Business" content="GANAK's modular design allows for scalability to suit the size and needs of any organization." />
        <CardComponent image="/benifit-mobile6.svg" flag="true" title="Streamlines Reporting Processes" content="GANAK simplifies the process of generating compliance reports, making it easier to provide documentation to regulators and stakeholders." />
    </div>
</section>
