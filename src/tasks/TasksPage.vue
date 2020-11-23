<template>
    <!-- <div>
        <div v-pin="{ test: true, test2: true }">Tasks</div>
        <div v-pin-global="{ test: true, test2: true }">
            {{ 5 | currency }}
        </div>
        <div>Tasks</div>
    </div> -->
    <div class="wrapper d-flex">
        <div class="w-100 p-sm-5">
            <TaskEntry
                class="mb-1"
                v-for="(task, index) in listOfTasks"
                :key="index"
                :task="task"
            />

            <NewTask class="mb-1" />
        </div>
    </div>
</template>

<script>
import pinDirective from '../shared/pin-directive';
import currencyFilter from '../shared/currency-filter';
import TaskEntry from './TaskEntry.vue';
import NewTask from './NewTask.vue';

export default {
    name: 'TasksPage',
    filters: {
        currency: currencyFilter
    },
    directives: { pin: pinDirective },
    components: { TaskEntry, NewTask },
    created: function() {
        // this.$store.dispatch('tasks/getTasks');
        // setTimeout(() => {
        //     this.$store.dispatch('tasks/addNewTask', {
        //         name: 'Test 2',
        //         description: 'description 2',
        //         completed: false
        //     });
        // }, 2000);
        // this.$store.commit('tasks/addNewTask', {
        //     name: 'Test',
        //     description: 'description',
        //     completed: true
        // });
        // this.$store.commit('tasks/addNewTask', {
        //     name: 'Test 2',
        //     description: 'description 2',
        //     completed: false
        // });
        //console.log(this.$store.state.tasks.tasks);
        //console.log(this.$store.getters['tasks/completedTasks']);
    },
    computed: {
        listOfTasks() {
            // console.log(this.$store.state.tasks.tasks);
            return this.$store.state.tasks.tasks;
        }
    }
};
</script>

<style scoped></style>
