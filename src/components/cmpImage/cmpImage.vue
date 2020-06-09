<template>
    <img class="cmp-image" :src="options.url" :style="css">
</template>
<script>
export default {
    name: 'cmp-image',
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