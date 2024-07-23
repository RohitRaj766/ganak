<script> import 'animate.css';</script>
<style>@import'../../styles/architecture.scss';</style>

<section class="architecture--container">
    <div class="heading">
        <p>Architecture</p>
    </div>
    <div class="content">
        <div class="flowchart">
            <div class="user--interface flowchart-item animate__animated animate__fadeIn animate__delay-.5s">
                <p class="heading">USER INTERFACE (UI)</p>
                <p class="content">TRANSACTION DATA INPUT / API</p>
            </div>
            <div class="content--for--grid flowchart-item">
                <p>GANAK uses a streamlined UI or API for transaction data input, generates compliance proofs without revealing sensitive data, records transactions on the blockchain, and allows auditors and regulators to validate compliance.</p>
            </div>
            <div class="arrow1 flowchart-item animate__animated animate__fadeIn animate__delay-1s">
                <img src="/arrow1.svg" alt="Arrow 1">
            </div>
            <div class="transaction--processor flowchart-item animate__animated animate__fadeIn animate__delay-1.5s">
                <p class="heading">TRANSACTION PROCESSOR</p>
                <p class="content">PREPARE TRANSACTION DATA</p>
              <p>
                  <img class="animate__animated animate__fadeIn animate__delay-4s" src="/small-arrow.svg" alt="small-arrow">
              </p>
                <p class="content">GENERATE ZKP</p>
            </div>
            <div class="arrow2 flowchart-item animate__animated animate__fadeIn animate__delay-2s">
                <img src="/arrow2.svg" alt="Arrow 2">
            </div>
            <div class="blockchain--interaction--module flowchart-item animate__animated animate__fadeIn animate__delay-2.5s">
                <p class="heading">BLOCKCHAIN INTERACTION MODULE</p>
                <div class="content">
                    <p>BLOCKCHAIN ENTRY CREATOR</p>
                    <p>BLOCKCHAIN QUERY INTERFACE</p>
                </div>
            </div>
            <div class="arrow3 flowchart-item animate__animated animate__fadeIn animate__delay-3s">
                <img src="/arrow3.svg" alt="Arrow 3">
            </div>
            <div class="blockchain flowchart-item animate__animated animate__fadeIn animate__delay-3.5s">
                <p class="heading">BLOCKCHAIN</p>
                <div class="content">
                <img src="/containerdb.svg" alt="containerdb">    
                    <p>BLOCKCHAIN DATA</p>
                </div>
            </div>
            <div class="arrow4 flowchart-item animate__animated animate__fadeIn animate__delay-4s">
                <img src="/arrow4.svg" alt="Arrow 4">
            </div>
            <div class="compliance--verification--module flowchart-item animate__animated animate__fadeIn animate__delay-4.5s">
                <p class="heading">COMPLIANCE VERIFICATION MODULE</p>
                <div class="content">
                <p>COMPLIANCE CHECKER</p>
                <p>DECRYPT ZKP</p>
                </div>
            </div>
        </div>
    </div>
</section>