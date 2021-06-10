<template>
    <div class="wrapper">
        <Quote class="center" :quote="quote"/>
        <div class="controls">
            <Controls @new-quote="openNewQuoteModal" @refresh-quote="refreshQuote" />
        </div>
        <NewQuoteModal @added="addNewQuote" @close-modal="closeNewQuoteModal" v-if="isModal"/>
    </div>
</template>

<script>
import Quote from './Quote'
import Controls from './Controls'
import NewQuoteModal from './NewQuoteModal'

import { getRandomQuote, addQuoute} from './storage'

export default {
    components: {
        Quote,
        Controls,
        NewQuoteModal
    },
    data() {
        return {
            quote: {},
            isModal: false,
        }
    },
    created() {
        this.quote = getRandomQuote();
    },
    methods: {
        addNewQuote(text, author) {
            addQuoute(text, author);
        },
        refreshQuote() {
            this.quote = getRandomQuote();
        },
        openNewQuoteModal() {
            this.isModal = true;
        },
        closeNewQuoteModal() {
            this.isModal = false;
        }
    }
}
</script>

<style scoped>
    .controls {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
    .center{
        position:absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
</style>