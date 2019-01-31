<template>
    <div v-title data-title="地图分布">
        <map-show :map-height="mapHeight"></map-show>
    </div>
</template>
<script>
    import mapshow from './components'
    export default {
        name:'completePageMap',
        components:{
            'mapShow':mapshow
        },
        data(){
            return {
                mapHeight:document.body.clientHeight
            }
        },
        mounted (){
            let self=this
            window.onresize = function(){
                self.mapHeight=document.body.clientHeight
            }
        }
    }
</script>