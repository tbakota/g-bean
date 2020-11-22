<template>
    <main class="container">
        <router-view />
        <RegisterUser />
    </main>
</template>

<script>
import RegisterUser from './components/RegisterUser';

export default {
    name: 'App',

    components: {
        RegisterUser
    }
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
