<template>
    <p class="cmp-text" :style="css">{{options.text}}</p>
</template>
<script>
export default {
    name: 'cmp-text',
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
    }
}
</script>