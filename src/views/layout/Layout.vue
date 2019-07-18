<template>
    <div>
        <template v-if="!fullMap">
        <navbar></navbar>
        <breadcrumb class="breadcrumb-container"></breadcrumb>
        </template>
        <app-main :style="{'height':appMainHeight+'px'}"></app-main>
    </div>
</template>

<script>
    import breadcrumb from '@/components/Breadcrumb'
    import { navbar,appMain} from './components'

    export default {
        name: 'layout',
        components: {
            navbar,
            appMain,
            breadcrumb
        },
        data() {
            return {
                appMainHeight:document.body.clientHeight-90
            }
        },
        computed:{
            fullMap(){
                return this.$store.state.app.fullMap
            }
        },
        created () {
            this.listenerChangeAppMainHeight()
        },
        methods:{
            listenerChangeAppMainHeight(){
                this.$root.$on('changeAppMainHeight',(o) => {
                    this.appMainHeight=document.body.clientHeight-o;
                })
            }
        }
    }
</script>
<style lang="scss">
.app-query{
margin: auto auto 10px auto
}
</style>

