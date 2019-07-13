<template>
    <el-dialog
      id="dlog"
      title="售出"
      :visible.sync="visible"
      @close="productMapClose"
      :show="show"
      @open="productMapOpen"
      class="product-map-container">
      <el-form :rules="rules" ref="productMap" :model="formData" label-position="right" label-width="100px">
        <el-row >
          <el-col :span="12">
            <el-form-item label="客户" prop="customerId">
              <el-select clearable class="filter-item" v-model="formData.customerId" style="width: 100%" @change="changeBoilerCustomerGetLabel">
                <el-option v-for="item in boilerCustomerArray" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item clearable label="售出时间" prop="saleDate">
              <el-date-picker v-model="formData.saleDate" type="date" value-format="yyyy-MM-dd" style="width: 100%"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="售出地址" prop="saleAddress">
          <el-input id="suggestId" v-model="formData.saleAddress" ></el-input>
        </el-form-item>
        <el-row>
          <el-col :span="5">
            &nbsp;
          </el-col>
            <el-col :span="6">
            <el-button type="primary" @click="confirmSubmit" >确定</el-button>
          </el-col>
          <el-col :span="2">
            &nbsp;
          </el-col>
          <el-col :span="5">
            &nbsp;
          </el-col>
            <el-col :span="6">
            <el-button  icon="el-icon-search"  type="primary" @click="productMapOpen">查询</el-button>
          </el-col>
        </el-row>
        
        
      </el-form>
      <el-row style=" overflow-x: hidden;">
        <div id="product_map" style="width:100%;min-height:300px;mix-heigth:400px"></div>
      </el-row>
    </el-dialog>
</template>

<script>
  import {formatDateTime} from '@/utils/date'
  import {getList} from '@/api/boilerCustomer'
  export default {
    name: 'product-map',
    data(){
      const validateCustomerId = (rule, value, callback) => {
        if(value==null){
          callback(new Error('请选择客户'))
        }else {
          callback()
        }
      }
      return{
        visible: this.show,
        boilerCustomerArray:[],
        address: '',
        formData:{
          id:'',
          controllerNo:'',
          isSell:1,//售出的状态
         customerId:null,
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
        listQuery: {
          pageNum: 1,
          pageSize: 5,
        },
        rules:{
          customerId: [{ required: true,trigger: 'blur', validator: validateCustomerId }],
          saleDate: [{ required: true,trigger: 'blur', message: '售出时间不能为空' }],
          saleAddress: [{ required: true,trigger: 'blur', message: '售出地址不能为空' }]
        }
      }
    },
    props:{
      show: {
        type: Boolean,
        default: false
      },
      productFormData:{
        type: Object,
        default: ()=>{}
      },
    },
    watch: {
      show () {
        this.visible = this.show;
      },
    },
    mounted(){
      this.initBoilerCustomerSelect()
    },
    methods:{
      productMapOpen(){
        this.formData.id = this.productFormData.id
        if (this.visible === true) {
          this.$nextTick(function () {
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
            var obj = document.getElementById("suggestId");
            var local = new BMap.LocalSearch(map, {
              renderOptions: { map: map }
            });
            local.search(obj.value);
           /* if(this.address != ""){
              map.centerAndZoom(this.address,11);
            }*/
            this.loadMap(map)
            this.selectPoint(map)
          })

        }
      },
      productMapClose(){
        this.$emit('productMapDialogClose',{productMapDialogVisible:false})
      },
      initBoilerCustomerSelect(){
        getList(this.listQuery).then(data=>{
          data.data.data.list.forEach(item=>{
            let optionItem={}
            optionItem.value=item.id
            optionItem.label=item.name
            this.boilerCustomerArray.push(optionItem)
          })
        })

      },
      loadMap(map){
        let selectPoint = new BMap.Point(this.formData.longitude, this.formData.latitude);
        let marker = new BMap.Marker(selectPoint);
        marker.addEventListener("click",()=>{
        })
        map.addOverlay(marker);
      },
      changeBoilerCustomerGetLabel(value){
        let boilerCustomerItem=this.boilerCustomerArray.find(item=>{
          return item.value == value;
        });
        this.formData.customerName=boilerCustomerItem.label
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
              self.formData.longitude=longitude
              self.formData.latitude=latitude
              let selectPoint = new BMap.Point(self.formData.longitude, self.formData.latitude);
              let marker = new BMap.Marker(selectPoint);
              map.addOverlay(marker);
              let geoc = new BMap.Geocoder();
              geoc.getLocation(selectPoint, function (rs) {
                let addComp = rs.addressComponents;
                if(addComp.province&&addComp.city&&addComp.district){
                  self.formData.province=addComp.province;
                  self.formData.city=addComp.city;
                  self.formData.district=addComp.district;
                  self.formData.saleAddress=addComp.province+addComp.city+addComp.district
                }
                if(addComp.street){
                  self.formData.street=addComp.street;
                  self.formData.saleAddress+=addComp.street
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
          self.formData.longitude=''
          self.formData.latitude=''
          self.formData.province=''
          self.formData.city=''
          self.formData.district=''
          self.formData.street=''
          self.formData.saleAddress=''
        }
        for(let i=0; i < txtMenuItem.length; i++){
          menu.addItem(new BMap.MenuItem(txtMenuItem[i].text,txtMenuItem[i].callback,100));
        }
        map.addContextMenu(menu);
      },
      confirmSubmit(){
        this.$refs.productMap.validate(valid => {
          if (valid) {
            this.$emit('confirmSellDialog',{productMapDialogVisible:false,flag:true,productFormData:this.formData})
          } else {
            this.$emit('confirmSellDialog',{productMapDialogVisible:true,flag:false})
          }
        })
      }
    }
  }
</script>
