<style>
    @import '../../styles/faq-component.scss';
</style>

<script>
    export let question;
    export let answer;

//     document.querySelectorAll('.blanket-container').forEach(container => {
//     container.addEventListener('click', function() {
//         const answers = container.querySelectorAll('.faq-answer');
//         answers.forEach(answer => {
//             if (answer.style.display === 'block' || answer.style.display === '') {
//                 answer.style.display = 'none';
//             } else {
//                 answer.style.display = 'block';
//             }
//         });
//     });
// });

function arrClick(){
    document.getElementsByClassName("faq-answer").
}

    
</script>


<div class="blanket">
    <div class="blanket-container">
    <h2 class="faq-question">{question}</h2>
    <span class="arrow" on:click={arrClick()}><img src="/arrow-icon.svg" alt="arrow-icon"></span>
    </div>
    <p class="faq-answer">{answer}</p>
</div>
