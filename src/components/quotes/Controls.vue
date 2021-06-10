<template>
    <div class="controls-wrapper">
        <div @click="newQuote" class="ctrl new-quote">
            <i class="fas fa-plus fa-2x"></i>
        </div>
        <div @click="refreshQuote" class="ctrl refresh-quote">
            <i class="fas fa-redo-alt fa-2x"></i>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['newQuote', 'refreshQuote'],
    methods: {
        newQuote() {
            this.$emit('newQuote');
        },
        refreshQuote() {
            this.$emit('refreshQuote');
        }
    }
}
</script>

<style scoped>
    .ctrl {
        background-color: DodgerBlue;
        border: none;
        color: white;
        padding: 25px;
        font-size: 1rem;
        cursor: pointer; 
        display: inline-block;
        margin: 5px;
        border-radius: 100px;
        box-shadow: 3px 2px 5px rgba(0, 0, 0, 0.5);
    }
    .ctrl:hover {
        transform: scale(1.1);
        box-shadow: 4px 3px 6px rgba(0, 0, 0, 0.5);
    }
    .ctrl:active {
        transform: scale(1.0);
        box-shadow: 3px 2px 5px rgba(0, 0, 0, 0.5);
    }

</style>