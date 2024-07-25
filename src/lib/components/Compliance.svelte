<style>
    @import '../../styles/compliance.scss';
</style>
<script>
    import Features from "./Features.svelte";
</script>

<div class="compliance-section">
    <h2 id="comp">Compliance Transformation: A Dual Perspective</h2>
    <div>
        <button>Without Ganak</button>
        <button>With Ganak</button>
    </div>
    <div class="compliance-image">
        <img src="compliance.svg" alt="compliance-pic">
    </div>
    <div class="features-container">
        <Features pic="/verification-delays.svg" title="Verification Delays" />
        <Features pic="/complex-reporting.svg" title="Complex Reporting" />
        <Features pic="/data-overload.svg" title="Data Overload" />
        <Features pic="/high-operational-costs.svg" title="High Operational Costs" />
        <Features pic="/limited-transparency.svg" title="Limited Transparency" />
        <Features pic="/lag-in-response.svg" title="Lag in Response" />
        <Features pic="/enforcement-challenges.svg" title="Enforcement Challenges" />
        <Features pic="/risk-exposure.svg" title="Risk Exposure" />
    </div>
</div>