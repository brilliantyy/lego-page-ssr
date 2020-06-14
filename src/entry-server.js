import createApp from './main'

export default context => {
    return new Promise(async (resolve, reject) => {
        const { app, router, store } = await createApp(context, true )
        router.push(context.url)
        router.onReady(() => {
            context.rendered = () => {
                context.state = store.state
            }
            resolve(app)
        }, reject)
    })
}
