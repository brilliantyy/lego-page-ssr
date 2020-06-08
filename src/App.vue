<template>
    <div id="lego-app">
        <!-- <component :is="child.name" v-for="child in children"
            :key="child.id"
            :id="child.id"
            :css="child.css"
            :options="child.options"></component> -->
            aaaaaa
    </div>
</template>
<script>
export default {
    name: 'lego-app',
    data() {
        return {
            
        }
    },
    props: {
        children: {
            type: Array,
            default: () => []
        }
    }
}
</script>