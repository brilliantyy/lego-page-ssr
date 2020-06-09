
import { importAll } from './utils/index'

function registerComponents(Vue) {
    const components = importAll(require.context('./components', true, /\.vue$/))
    components.forEach(component => {
        Vue.component(component.default.name, component.default)
    })
}

export default registerComponents