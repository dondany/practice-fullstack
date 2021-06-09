<template>
<div class="wrapper">
    <div class="to-do">
        <div @click="toggle" class="checked">
            <div v-if="checked" class="checked-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"/>
                </svg>
            </div>
        </div>

        <span class="text" v-bind:class="{striked: checked}">{{ text }}</span>
    </div>
        <div @click="deleteTodo" class="delete">
            <div class="delete-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
            </div>
        </div>
        
    
</div>
</template>

<script>
export default {
    emits: ['deleteTodo'],
    props: {
        text: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            checked: false
        }
    },
    methods: {
        toggle() {
            this.checked = !this.checked;
        },
        deleteTodo() {
            this.$emit('deleteTodo', this.text)
        }
    }
}
</script>

<style scoped>
    .to-do {
        margin: .5rem;
        padding: .3rem;
        display: inline-block;
        width: 80%;
        height: 2rem;
        text-align: left;
    }
    .text {
        margin-left: 1rem;
        font-size: 1rem;
        display: inline-block;
    }
    .checked {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        border: 1px solid black;
        cursor: pointer;
        user-select: none;
    }
    .bi-check-lg {
        color: rgb(3, 194, 3);
    }
    .delete {
        padding: 2px;
        width: 8%;
        text-align: center;
        display: inline-block;
        cursor: pointer;
        color: red;
        user-select: none;
    }
    .striked {
        text-decoration: line-through;
    }
</style>