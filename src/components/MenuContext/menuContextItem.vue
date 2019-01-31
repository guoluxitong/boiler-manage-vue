<template>
  <li v-on:click='handleClick' :style="{width:width+'px','font-size':fontSize+'px'}"><slot></slot></li>
</template>
<script>
    export default {
        name: 'menuContextItem',
        props:{
            width:{
                type:Number,
                default:80
            },
            fontSize:{
                type:Number,
                default:12
            }
        },
        data() {
            return{
                row:{}
            }
        },
        created:function(){
            this.$root.$on("table-row",row=>{
                this.row=row
            })
        },
        methods: {
            handleClick() {
                this.$emit('click',this.row)
            }
        }
    }
</script>
