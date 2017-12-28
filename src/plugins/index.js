import intercepter from './intercepter'
export default {
    install(Vue, opts) {
        intercepter(Vue, opts);

        Vue.mixin({
            created() {
                // console.log(this.$options.name + 'created')
            },
            mounted() {
                //console.log(this.$options.name + 'mounted')
            }
        })
    }

}