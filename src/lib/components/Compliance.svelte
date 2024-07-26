<style>
    @import '../../styles/compliance.scss';
</style>
<script>
    import Features from "./Features.svelte";

    let but1 = true;
    let but2 = false;

    let showAnswer = false;
    let showAnswer2 = false;

    function toggleAnswer2(){
        if(but2 == true){
        showAnswer = !showAnswer;
        showAnswer2 = !showAnswer2;
        but2 = false;
        but1 = true;
        }
    }
    function toggleAnswer(){
        if(but1 == true){
        showAnswer2 = !showAnswer2;
        showAnswer = !showAnswer;
        but2 = true;
        but1 = false;
        }
    }
</script>

<div class="compliance-section">
    <h2 id="comp">Compliance Transformation: A Dual Perspective</h2>
    <div class="button-container">
        <!-- <button class="button-1" on:click={toggleAnswer2}>Without Ganak</button>
        <button class="button-2" on:click={toggleAnswer}>With Ganak</button> -->
        <p class="button-1" class:show={but1} on:click={toggleAnswer2}>Without Ganak</p>
        <p class="button-2" class:show={but2} on:click={toggleAnswer}>With Ganak</p>
    </div>
    <div class="compliance-image">
        <img src="compliance.svg" alt="compliance-pic">
    </div>
    <div class="features-container">
        <div class="first-module" class:show={showAnswer}>
        <Features pic="/verification-delays.svg" title="Verification Delays" />
        <Features pic="/complex-reporting.svg" title="Complex Reporting" />
        <Features pic="/data-overload.svg" title="Data Overload" />
        <Features pic="/high-operational-costs.svg" title="High Operational Costs" />
        <Features pic="/limited-transparency.svg" title="Limited Transparency" />
        <Features pic="/lag-in-response.svg" title="Lag in Response" />
        <Features pic="/enforcement-challenges.svg" title="Enforcement Challenges" />
        <Features pic="/risk-exposure.svg" title="Risk Exposure" />
        </div>
        <div class="second-module" class:show={showAnswer2}>
        <Features pic="/instant-verification.svg" title="Instant Verification" /> 
        <Features pic="/streamlined-reporting.svg" title="Streamlined Reporting" /> 
        <Features pic="/structured-data-flow.svg" title="Structured Data Flow" /> 
        <Features pic="/cost-efficiency.svg" title="Cost Efficiency" /> 
        <Features pic="/transparent-monitoring.svg" title="Transparent Monitoring" /> 
        <Features pic="/real-time-feeback.svg" title="Real-time Feedback" /> 
        <Features pic="/swift-enforcement.svg" title="Swift Enforcement" /> 
        <Features pic="/enhanced-feedback.svg" title="Enhanced Feedback" /> 
        </div>
    </div>
</div>