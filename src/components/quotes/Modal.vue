<template>
        <transition name="modal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-container">
                        <div class="modal-header">
                            <slot name="header"></slot>
                            <div @click="close" class="exit">
                                <i class="fas fa-times"/>
                            </div>
                        </div>

                        <div class="modal-body">
                            <slot name="body"></slot>
                        </div>

                        <div class="modal-footer">
                            <button @click="submit" class="btn-ok">Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
</template>

<script>
export default {
    emits: ['submitModal','closeModal'],
    methods: {
        close() {
            this.$emit('closeModal');
        },
        submit() {
            this.$emit('submitModal')
        }
    }
}
</script>

<style scoped>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: table;
    transition: opacity 0.3s ease;
}
.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}
.modal-container {
    width: 50%;
    height: 50%;
    min-width: 200px;
    max-width: 500px;
    min-height: 350px;
    max-height: 500px;
    margin: 0px auto;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0,0,0, 0.33);
    transition: all 0.3s ease;
    position: relative;
}

.modal-header {
    padding: 20px;
    margin: 0;
    background-color: royalblue;
    text-align: left;
    color: #fff;
    font-size: 2rem;
}

.exit {
    display: inline-block;
    position: absolute;
    right: 1rem;
    cursor: pointer;
}

.exit:hover {
    transform: scale(1.1);
}

.exit:active {
    transform: scale(1.0);
}

.modal-body {
    padding: 20px;
    text-align: left;
}

.modal-footer {
    position: absolute;
    bottom: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    height: 15%;
    width: 100%;
}

.btn-ok {
    position: absolute;
    background-color: royalblue;
    color: #fff;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    width: 3rem;
    height: 2rem;
    top: 25%;
    right: 5%;
}

.btn-ok:hover {
    transform: scale(1.1);
}

.btn-ok:active {
    transform: scale(1.0);
}

.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>