<template>
    <div class="cmp-div" :style="css" @click="handleClick"></div>
</template>
<script>
export default {
    name: 'cmp-div',
    inheritAttrs: false,
    data() {
        return {}
    },
    props: {
        id: {
            type: String,
            default: ''
        },
        css: {
            type: Object,
            default: () => {}
        },
        options: {
            type: Object,
            default: () => {}
        }
    },
    methods: {
        handleClick() {
            console.log(1)
        }
    }
}
</script>