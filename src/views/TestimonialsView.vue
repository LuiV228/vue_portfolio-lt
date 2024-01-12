<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2">Testing my Monials</h2>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            testimonials() {
                return this.$store.state.testimonials;
            }
        },
        mounted() {
            this.$store.dispatch(`fetchTestimonials`);
        },
        // components: { SpinnerComp }
    };
</script>

<style scoped>

</style>