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

let showAnswer = false;


function toggleAnswer(){
    showAnswer = !showAnswer;
}



</script>


<div class="blanket">
    <div class="blanket-container">
    <h2 class="faq-question">{question}</h2>
    <span class="arrow" on:click={toggleAnswer}><img src="/arrow-icon-down.svg" alt="arrow-icon"></span>
    <!-- <span class="arrow" on:click={toggleAnswer}><img src="/arrow-icon-up.svg" alt="arrow-icon"></span> -->
    </div>
    <p class:show={showAnswer} class="faq-answer">{answer}</p>
</div>
