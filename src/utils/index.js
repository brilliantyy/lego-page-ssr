export function transformCss(css) {
    const attrs = [
        'width', 'height', 'left', 'top', 'bottom', 'right', 'borderWidth', 'borderRadius', 'fontSize', 'lineHeight', 'letterSpacing',
        'paddingTop', 'paddingLeft', 'paddingBottom', 'paddingRight', 'marginTop', 'margiLeft', 'marginBottom', 'marginRight', 'slideWidth'
    ]
    const copyCss = Object.assign({}, css)

    Object.keys(copyCss).forEach(key => {
        if (attrs.includes(key)) {
            copyCss[key] = `${parseFloat(copyCss[key]/37.5).toFixed(2)}rem`
        }
    })
    copyCss.position = 'absolute'
    return copyCss
}

export function importAll(context) {
	let components = []

	context.keys().forEach(key => {
        components.push(context(key))
	})
	return components
}