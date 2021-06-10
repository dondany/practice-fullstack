<template>
    <div class="quote-card">
        <span class="text">"{{ quote.text }}"</span>
        <span class="author">- {{ quote.author }}</span>
    </div>
</template>

<script>
export default {
    props: ['quote']
}
</script>

<style scoped>
    .quote-card {
        background-color: #fff;
        display: inline-block;
        padding: 40px;
        position: relative;
        width: 50%;
        max-width: 30rem;
    }
    .author {
        position: absolute;
        bottom: 5px;
        right: 5px;
        padding: 10px;
    } 
    .text {
        font-size: 2rem;
        font-style: italic;
    }
</style>