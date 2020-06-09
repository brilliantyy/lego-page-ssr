import createApp from './main'

export default context => {
    return new Promise((resolve, reject) => {
        const { app, router, store } = createApp(context.__Vue__)

        router.push(context.url)
        router.onReady(() => {
            context.rendered = () => {
                context.state = store.state
            }
            resolve(app)
        }, reject)
    })
}
