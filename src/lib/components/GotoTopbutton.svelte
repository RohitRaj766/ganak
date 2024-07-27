
<script>
    import 'animate.css'
    if (typeof window !== 'undefined') {
        const handleScroll = () => {
            const button = document.querySelector('.goto--top--button');
            if (button) {
                if (window.scrollY > 700) {
                    button.style.display = 'flex';
                } else {
                    button.style.display = 'none';
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
            const button = document.querySelector('.goto--top--button');
            if (button) {
                button.addEventListener('click', () => {
                    console.log("Button clicked");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
                handleScroll();
            }
    }
</script>
<style>
    @import'../../styles/goto-top.scss';
</style>
<div class="goto--top--button animate__animated animate__fadeIn">
    <i class="arrow-up"></i>
</div>