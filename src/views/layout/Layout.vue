<template>
    <div>
        <navbar></navbar>
        <breadcrumb class="breadcrumb-container"></breadcrumb>
        <app-main :style="{'height':appMainHeight+'px','overflow-y':'auto'}"></app-main>
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
                appMainHeight:document.body.clientHeight-88
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
