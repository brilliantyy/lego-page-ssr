const component = {
    name: 'cmp-div',
    template: '<div class="cmp-div" :style="css" @click="console.log(1)"></div>',
    data() {
        return {}
    },
    props: {
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


export default {
    install: (Vue) => {
        Vue.component(component.name, component)
    }
}