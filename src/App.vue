<template>
    <div id="lego-app">
        <component v-for="cmp in cmps"
            :is="cmp.name"
            :key="cmp.id"
            :id="cmp.id"
            :css="cmp.css"
            :options="cmp.options"></component>
    </div>
</template>
<script>
export default {
    name: 'lego-app',
    data() {
        return {}
    },
    props: {
        cmps: {
            type: Array,
            default: () => []
        }
    }
}
</script>