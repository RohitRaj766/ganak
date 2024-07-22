<script>
    export let image;
    export let title;
    export let content;
    export let flag;
</script>

<style>
    @import'../../styles/card.scss';
</style>

<article class="{flag === "true" ? "benifit--card" : "card"}">
    <div class="img--container">
        <img class="card--image " src={image} alt={title} />
    </div>
    <div class="card--content">
        <h3 class="card--title">{title}</h3>
        <p class=" {flag ? "benifits--discription" : "card--text"}">{content}</p>
    </div>
</article>
