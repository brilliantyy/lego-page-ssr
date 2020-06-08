<template>
    <div id="lego-app">
        <component v-for="child in children"
            :is="child.name"
            :key="child.id"
            :id="child.id"
            :css="child.css"
            :options="child.options"></component>
    </div>
</template>
<script>
export default {
    name: 'lego-app',
    data() {
        return {}
    },
    props: {
        children: {
            type: Array,
            default: () => []
        }
    }
}
</script>