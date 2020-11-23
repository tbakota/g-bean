<template>
    <main class="container">
        <router-view />
    </main>
</template>

<script>
export default {
    name: 'App'
};
</script>

<style>
html,
body {
    min-height: 100vh;
    height: auto;
    margin: 0;
}
.wrapper {
    min-height: 100vh;
}
</style>
