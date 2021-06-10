<template>
    <Modal @submit-modal="submit">
        <template v-slot:header>
            Add New Quote
        </template>
        <template v-slot:body>
                <div class="new-quote-form">
                    <label for="text">Quote</label>
                    <textarea v-model="text" type="text" id="text" rows="5" placeholder="Text of the quote here..."/>
                
                    <label for="author">Author</label>
                    <input v-model="author" type="text" id="author" placeholder="Author here...">
                </div>
                <p v-if="!isOk" class="error">* Please provide both Quote and Author</p>
        </template>
        <template v-slot:footer>
            <!-- <button @click="submit" class="btn-ok">OK</button> -->
        </template>
    </Modal>
</template>

<script>
import Modal from './Modal'

export default {
    components: {
        Modal
    },
    data() {
        return {
            text: '',
            author: '',
            isOk: true,
        }
    },
    methods: {
        submit() {
            this.validateSubmit();
            if (this.isOk) {
                this.$emit("added", this.text, this.author);
                this.$emit("closeModal");
            }

        },
        validateSubmit() {
            this.isOk = !(this.text === '' || this.author === '');
        }
    }
}
</script>

<style scoped>

textarea {
    margin-top: 5px;
    width: 100%;
}
input {
    margin-top: 5px;
    width: 100%;
}
.error {
    color: red;
}
</style>