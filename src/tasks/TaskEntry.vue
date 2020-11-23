<template>
    <b-card
        bg-variant="secondary"
        text-variant="white"
        :header="task.name"
        class="text-center"
    >
        <b-card-text>{{ task.description }}</b-card-text>
        <b-form-checkbox
            value="true"
            unchecked-value="false"
            v-model="task.completed"
        >
            Finished
        </b-form-checkbox>
    </b-card>
</template>

<script>
export default {
    name: 'TaskEntry',
    props: {
        task: {
            type: Object,
            required: true
        }
    }
};
</script>
