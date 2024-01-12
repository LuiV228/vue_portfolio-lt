<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2">This is the Resume Page</h2>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            resume() {
                return this.$store.state.resume;
            }
        },
        mounted() {
            this.$store.dispatch(`fetchResume`);
        },
        // components: { SpinnerComp }
    };
</script>

<style scoped>

</style>