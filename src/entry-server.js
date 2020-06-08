import createApp from './main'
import registerComponents from './register'

export default context => {
    return new Promise((resolve, reject) => {
        const { app, router, store, Vue } = createApp()
        registerComponents(Vue)

        router.push(context.url)
        router.onReady(() => {
            context.rendered = () => {
                context.state = store.state
            }
            resolve(app)
        }, reject)
    })
}