import createApp from './main'

export default context => {
    return new Promise((resolve, reject) => {
        const { url, pageData, __Vue__ } = context
        const { app, router, store } = createApp({ pageData, Vue: __Vue__ })

        router.push(url)
        router.onReady(() => {
            context.rendered = () => {
                context.state = store.state
            }
            resolve(app)
        }, reject)
    })
}
