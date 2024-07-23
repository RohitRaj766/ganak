<script>
    export let image;
    export let title;
    export let content;
    export let flag;

    function highlightFirstSixWords(text) {
        const words = text.split(' ');
        if (words.length > 6) {
            const firstSixWords = words.slice(0, 6).join(' ');
            const restOfText = words.slice(6).join(' ');
            return `<span class="highlight">${firstSixWords}</span> ${restOfText}`;
        }
        return text;
    }
</script>

<style>
    @import '../../styles/card.scss';
</style>

<article class="{flag === 'true' ? 'benifit--card' : 'card'}">
    <div class="img--container">
        <img class="card--image" src={image} alt={title} />
    </div>
    <div class="card--content">
        <h3 class="card--title">{title}</h3>
        {#if flag === 'true'}
            <p class="benifits--discription">{@html highlightFirstSixWords(content)}</p>
            {:else}
            <p class="card--text">{content}</p>
            {/if}
    </div>
</article>
