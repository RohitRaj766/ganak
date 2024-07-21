<script>
    import CardComponent from "./CardComponent.svelte";
</script>
<style>
    @import'../../styles/limitation.scss';
</style>

<section class="current--limitation">
    <header class="limitation--heading">
        <p>Current Limitations</p>
    </header>
    <div class="limitation--card--container">
        <CardComponent image="/high-cost.png" title="High Cost of Compliance" content="Significant expenses associated with maintaining compliance" />
        <CardComponent image="/scalability.png" title="Scalability" content="Challenges in scaling compliance processes efficiently" />
        <CardComponent image="/data-management.png" title="Data Management & Quality" content="Challenges in maintaining the integrity and quality of compliance-related data" />
        <CardComponent image="/cyber-security-concerns.png" title="Cybersecurity Concerns" content="Increased risk of cyber threats to sensitive compliance data in a digitized environment" />
    </div>
</section>
