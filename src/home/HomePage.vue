<template>
    <div>home</div>
</template>

<script>
export default {
    name: 'HomePage',
    created: function() {
        this.$store.commit('addNewTask', {
            name: 'Test',
            description: 'description',
            completed: true
        });
        this.$store.commit('addNewTask', {
            name: 'Test 2',
            description: 'description 2',
            completed: false
        });

        console.log(this.$store.state.tasks);
        console.log(this.$store.getters.completedTasks);
    }
};
</script>

<style scoped>
.home {
    text-align: center;
}
</style>
