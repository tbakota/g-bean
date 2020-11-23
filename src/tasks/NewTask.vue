<template>
    <b-form-group>
        <b-form-input
            v-model="task.name"
            placeholder="Task name"
        ></b-form-input>

        <b-form-textarea
            v-model="task.description"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
        ></b-form-textarea>
        <b-button variant="success" @click="submitNewTask">Button</b-button>
    </b-form-group>
</template>

<script>
export default {
    name: 'NewTask',
    data() {
        return {
            task: { name: '', description: '', completed: false }
        };
    },
    methods: {
        submitNewTask() {
            this.$store.dispatch('tasks/addNewTask', this.task);

            this.clear();
        },
        clear() {
            this.task = { name: '', description: '', completed: false };
        }
    }
};
</script>
