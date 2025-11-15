<script setup>
    // Importa Header
    import header_vue from './components/shared/header.vue';
</script>

<template>
    <header_vue />
    <section id="content">
        <router-view />
    </section>
</template>

<style scoped>
    #content {
        padding-top: 70px;
        padding-left: 160px;
        padding-right: 160px;
    }
</style>