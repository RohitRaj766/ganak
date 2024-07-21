<script>
    export let image;
    export let title;
    export let content;
</script>

<style>
    @import'../../styles/card.scss';
</style>

<article class="card">
    <img src={image} alt={title} class="card--image" />
    <div class="card--content">
        <h3 class="card--title">{title}</h3>
        <p class="card--text">{content}</p>
    </div>
</article>
