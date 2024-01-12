<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: `SpinnerComp`,
        data() {
            return {
                isloading: true,
            };
        },
        mounted() {
            setTimeout(() => {
                this.isloading = false;
            }, 500);
        }
    }
</script>

<style scoped>

</style>