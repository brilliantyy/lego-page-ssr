<template>
    <div :style="wrapperStyle">
        <div class="swiper-container" :id="id" :style="contentStyle">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(url, index) in initialData.slides" :key="index">
                    <img :src="url" :style="{ objectFit: css.objectFit }">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'carousel-normal',
    data() {
        return {
            instance: null,
            slides: []
        }
    },
    props: {
        id: {
            type: String,
            default: ''
        },
        css: {
            type: Object,
            default: () => {}
        },
        options: {
            type: Object,
            default: () => {}
        },
        initialData: {
            type: Object,
            default: () => {}
        }
    },
    computed: {
        wrapperStyle() {
            const { left, top, right, width, height, paddingLeft, paddingTop, paddingBottom,
            paddingRight, marginTop, marginLeft, marginBottom, marginRight, zIndex, borderColor, borderStyle, borderWidth, boxSizing } = this.css
            return { position: 'absolute', left, top, right, width, height, paddingLeft, paddingTop, paddingBottom, paddingRight,
                marginTop, marginLeft, marginBottom, marginRight, zIndex, borderColor, borderStyle, borderWidth, boxSizing }
        },
        contentStyle() {
            const { borderRadius, backgroundColor } = this.css
            return { height: '100%', borderRadius, backgroundColor }
        }
    },
    mounted() {
        this.initSwiper()
    },
    beforeDestroy() {
        this.instance.destroy()
    },
    methods: {
        getInitialState(config) {
            return new Promise(async (resolve, reject) => {
                const slides = await this.fetch(config)
                resolve({ slides })
            })
        },
        initSwiper() {
            const swiperOptions = {
                loop: true,
                autoplay: this.options.autoplay,
                speed: this.options.speed,
                delay: this.options.delay,
                effect: this.options.effect,
                pagination: {
                    el: '.swiper-pagination'
                }
            }
            setTimeout(() => {
                this.instance = new Swiper(`#${this.id}`, swiperOptions)
            }, 20)
        },
        async fetch(config) {
            const result = await this.$dataService.fetch({ source: 'bannerSource' })
            if (result.code === 0 && !!result.data.length) {
                return result.data.slice(0, config.options.nums)
            } 
            return []
        }
    }
}
</script>
