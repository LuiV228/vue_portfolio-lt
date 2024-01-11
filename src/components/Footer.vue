<template>
    <div class="container-fluid" id="footer">
        <div class="row">
            <p class="lead">Luqmaan's Portfolio &copy; <span>{{ currYear }}</span></p>
        </div>
        <footer class="socials d-flex justify-content-center">
            <i class="bi bi-facebook" id="icon"></i>
            <i class="bi bi-github" id="icon"></i>
            <i class="bi bi-instagram" id="icon"></i>
            <i class="bi bi-tiktok" id="icon"></i>
            <i class="bi bi-twitter" id="icon"></i>
        </footer>
    </div>
</template>

<script>
    export default {
        name: `FooterComp`,
        data() {
            return{
                currYear: new Date().getFullYear()
            }
        }
    }
</script>

<style scoped>

body {
    font-family:  "Lusitana", serif ;
}

.lead {
    color: #18c8e3;
    margin-top: 1%;
}
.socials {
    color: #18c8e3;
}

#icon {
    margin-left: 1%;
    margin-right: 1%;   
    margin-bottom: 1%;
}

#footer {
    width: 100%;
    background-color: black;
    position: relative;
    bottom: 0;
}
</style>