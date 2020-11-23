<template>
    <div>
        <div v-pin="{ test: true, test2: true }">home</div>
        <div v-pin-global="{ test: true, test2: true }">
            {{ 5 | currency }}
        </div>
        <div>home</div>
    </div>
</template>

<script>
import pinDirective from '../shared/pin-directive';
import currencyFilter from '../shared/currency-filter';

export default {
    name: 'HomePage',
    filters: {
        currency: currencyFilter
    },
    directives: { pin: pinDirective },
    created: function() {
        this.$store.dispatch('tasks/getTasks');

        setTimeout(() => {
            this.$store.dispatch('tasks/addNewTask', {
                name: 'Test 2',
                description: 'description 2',
                completed: false
            });
        }, 2000);

        this.$store.commit('tasks/addNewTask', {
            name: 'Test',
            description: 'description',
            completed: true
        });
        // this.$store.commit('tasks/addNewTask', {
        //     name: 'Test 2',
        //     description: 'description 2',
        //     completed: false
        // });

        //console.log(this.$store.state.tasks.tasks);
        console.log(this.$store.getters['tasks/completedTasks']);
    }
};
</script>

<style scoped>
.home {
    text-align: center;
}
</style>
