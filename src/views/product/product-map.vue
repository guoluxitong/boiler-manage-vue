<template>
  <div class="product-map-container" v-title data-title="售出">
    <el-form :rules="rules" ref="productMap" :model="productMapData" label-position="right" label-width="100px">
      <el-row style="margin-top: 10px">
        <el-col :span="7">
          <el-form-item label="客户" prop="boilerCustomerId">
            <el-select clearable class="filter-item" v-model="productMapData.boilerCustomerId" style="width: 100%" @change="changeBoilerCustomerGetLabel">
              <el-option v-for="item in boilerCustomerArray" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item clearable label="售出时间" prop="saleDate">
            <el-date-picker v-model="productMapData.saleDate" type="date" value-format="yyyy-MM-dd" style="width: 100%"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="售出地址" prop="saleAddress">
            <el-input v-model="productMapData.saleAddress" readonly></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-button type="primary" @click="confirmSubmit" style="margin-left: 10px">确定</el-button>
        </el-col>
      </el-row>
    </el-form>
    <el-row style=" overflow-x: hidden;">
      <div id="product_map":style="{width:mapWidth+'px',height:mapHeight+'px'}" class="product_map"></div>
    </el-row>
  </div>
</template>

<script>
    import {formatDateTime} from '@/utils/date'
    //import {openElectronWindow} from '@/utils/windowsOperate'
    import {getBoilerCustomerListByCondition} from '@/api/boilerCustomer'
    import {updateProductSellAbout} from '@/api/product'
    export default {
        name: 'product_map',
        data() {
            const validateBoilerCustomerId = (rule, value, callback) => {
                if(value==null){
                    callback(new Error('请选择客户'))
                }else {
                    callback()
                }
            }
            return {
                mapWidth:document.body.clientWidth,
                mapHeight:document.body.clientHeight-88,
                boilerCustomerArray:[],
                productMapData:{
                    controllerNo:'',
                    isSell:1,//售出的状态
                    boilerCustomerId:null,
                    boilerCustomerName:null,
                    saleDate:'',
                    longitude:'',
                    latitude:'',
                    province:'',
                    city:'',
                    district:'',
                    street:'',
                    saleAddress:'',
                    editDateTime:formatDateTime(new Date(),"yyyy-MM-dd hh:mm:ss")
                },
                rules:{
                    boilerCustomerId: [{ required: true,trigger: 'blur', validator: validateBoilerCustomerId }],
                    saleDate: [{ required: true,trigger: 'blur', message: '售出时间不能为空' }],
                    saleAddress: [{ required: true,trigger: 'blur', message: '售出地址不能为空' }]
                }
            }
        },
        mounted() {
            let self=this
            window.onresize = function(){
                self.mapHeight=document.body.clientHeight-88
                self.mapWidth=document.body.clientWidth
            }
            // 百度地图API功能
            let map = new BMap.Map("product_map");
            let centerPoint = new BMap.Point(110, 38);
            map.centerAndZoom(centerPoint,4.5);
            map.enableScrollWheelZoom(true);
            map.enableInertialDragging();
            map.enableContinuousZoom();
            let size = new BMap.Size(10, 20);
            map.addControl(new BMap.CityListControl({
                anchor: BMAP_ANCHOR_TOP_LEFT,
                offset: size,
            }));
            //map.setMapStyle({style:'midnight'});
            this.initBoilerCustomerSelect()
            this.loadMap(map)
            this.selectPoint(map)
        },
        methods:{
            initBoilerCustomerSelect(){
                getBoilerCustomerListByCondition({orgId:this.$store.state.user.orgId,orgType:this.$store.state.user.orgType}).then(data=>{
                    data.data.data.forEach(item=>{
                        let optionItem={}
                        optionItem.value=item.id
                        optionItem.label=item.name
                        this.boilerCustomerArray.push(optionItem)
                    })
                })
            },
            loadMap(map){
                let productMapData=JSON.parse(this.$route.query.productMapData)
                this.productMapData.id=productMapData.id
                this.productMapData.controllerNo=productMapData.controllerNo
                this.productMapData.saleDate=productMapData.saleDate
                this.productMapData.boilerCustomerId=productMapData.boilerCustomerId
                this.productMapData.boilerCustomerName=productMapData.boilerCustomerName
                this.productMapData.longitude=productMapData.longitude
                this.productMapData.latitude=productMapData.latitude
                this.productMapData.province=productMapData.province
                this.productMapData.city=productMapData.city
                this.productMapData.district=productMapData.district
                this.productMapData.street=productMapData.street
                let province=productMapData.province||"";
                let city=productMapData.city||"";
                let district=productMapData.district||"";
                let street=productMapData.street||"";
                let saleAddrss=province+city+district+street
                this.productMapData.saleAddress=saleAddrss==0?"":saleAddrss
                let selectPoint = new BMap.Point(this.productMapData.longitude, this.productMapData.latitude);
                let marker = new BMap.Marker(selectPoint);
                marker.addEventListener("click",()=>{
                    // let newWindow=openElectronWindow("/controller-run-info?controllerNo="+this.productMapData.controllerNo,{width: 600, height: 500})
                    // newWindow.on('closed', () => {
                    //     newWindow = null
                    // })
                })
                map.addOverlay(marker);
            },
            changeBoilerCustomerGetLabel(value){
                let boilerCustomerItem=this.boilerCustomerArray.find(item=>{
                    return item.value == value;
                });
                this.productMapData.boilerCustomerName=boilerCustomerItem.label
            },
            selectPoint(map){
                let menu = new BMap.ContextMenu();
                let self=this;
                let longitude;
                let latitude;
                map.addEventListener("rightclick", function(e){
                    longitude=e.point.lng
                    latitude=e.point.lat
                });
                let txtMenuItem = [
                    {
                        text:'标注',
                        callback:function(e){
                            clearMapData()
                            self.productMapData.longitude=longitude
                            self.productMapData.latitude=latitude
                            let selectPoint = new BMap.Point(self.productMapData.longitude, self.productMapData.latitude);
                            let marker = new BMap.Marker(selectPoint);
                            map.addOverlay(marker);
                            let geoc = new BMap.Geocoder();
                            geoc.getLocation(selectPoint, function (rs) {
                                let addComp = rs.addressComponents;
                                if(addComp.province&&addComp.city&&addComp.district){
                                    self.productMapData.province=addComp.province;
                                    self.productMapData.city=addComp.city;
                                    self.productMapData.district=addComp.district;
                                    self.productMapData.saleAddress=addComp.province+addComp.city+addComp.district
                                }
                                if(addComp.street){
                                    self.productMapData.street=addComp.street;
                                    self.productMapData.saleAddress+=addComp.street
                                }
                            });
                        }
                    },
                    {
                        text:'清除',
                        callback:function(){
                            clearMapData()
                        }
                    }
                ]
                function clearMapData() {
                    map.clearOverlays();
                    self.productMapData.longitude=''
                    self.productMapData.latitude=''
                    self.productMapData.province=''
                    self.productMapData.city=''
                    self.productMapData.district=''
                    self.productMapData.street=''
                    self.productMapData.saleAddress=''
                }
                for(let i=0; i < txtMenuItem.length; i++){
                    menu.addItem(new BMap.MenuItem(txtMenuItem[i].text,txtMenuItem[i].callback,100));
                }
                map.addContextMenu(menu);
            },
            confirmSubmit(){
                this.$refs.productMap.validate(valid => {
                    if (valid) {
                        updateProductSellAbout(this.productMapData).then(() => {
                            this.$message({
                                message: "成功",
                                type: 'success'
                            });
                            window.close()
                        })

                    } else {
                        return false
                    }
                })
            }
        }
    }
</script>
<style  rel="stylesheet/scss" lang="scss">
  .product-map-container {
    padding-top:20px;
  }
</style>
