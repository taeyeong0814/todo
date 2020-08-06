<template>
    <div>
        Completed Todo: {{ numberOfCompletedTodo }}
        <!-- {{ todos }} -->
    </div>
</template>

<script>
    export default {
        computed: {
            // todos() {
            //     return this.$store.state.todos;
            // },
            numberOfCompletedTodo() {
                return this.$store.getters.numberOfCompletedTodo;
            }
        }
    }
</script>

<style>

</style>