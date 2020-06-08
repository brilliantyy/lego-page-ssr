const fs = require('fs')
const path = require('path')

const getAllComponents = (dir, components=[]) => {
    const files = fs.readdirSync(dir)
    files.forEach((file) => {
        const filePath = path.join(dir, file)
        const stat = fs.statSync(filePath)
        if (stat.isDirectory()) {
            getAllComponents(filePath, components)
        } else {
            components.push(require(`${filePath}`))
        }
    })
    return components
}

function importAll(context) {
	let components = []

	context.keys().forEach(key => {
        // modules = { ...modules, ...context(key) }
        components.push(context(key))
	})
	return components
}

const registerComponents = (Vue) => {
    const components = importAll(require.context('./components', true, /\.js$/))

    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

export default registerComponents