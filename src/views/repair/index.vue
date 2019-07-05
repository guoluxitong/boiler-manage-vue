<template>
  <div>
  <div>
  <el-tabs  v-model="activeName" @tab-click="handleClick"
            v-if="!productRepairDialogVisibleuser">
    <el-tab-pane label="设备维保信息" name="repairdevice">
      <div>
      <el-table
        :data="productList"
        element-loading-text="给我一点时间"
        border
        @open="handleClick"
        style="width: 120%"
        @row-contextmenu="openTableMenu"
      >
        <el-table-column :show-overflow-tooltip="true" align="left" label="锅炉编号">
          <template slot-scope="scope">
            <span>{{scope.row.boilerNo}}</span>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" align="left" label="锅炉型号">
          <template slot-scope="scope">
            <span>{{scope.row.boilerModelNumber }}</span>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" align="left" label="控制器编号">
          <template slot-scope="scope">
            <span>{{scope.row.controllerNo}}</span>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" align="left" label="吨位（T）">
          <template slot-scope="scope">
            <span>{{scope.row.tonnageNum}}</span>
          </template>
        </el-table-column>
        <el-table-column  align='center' label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="success" @click="repairinfo(scope.$index, scope.row)">查看维保信息</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div>
        <el-pagination
          background
          @size-change="handleSizeChange2"
          @current-change="handleCurrentChange2"
          :current-page="listQuery.pageNum"
          :page-sizes="[5]"
          :page-size="listQuery.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listQuery.total"
        ></el-pagination>
      </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="用户维保信息" name="repairuser">
      <div >
      <el-table
        :data="userlist"
        element-loading-text="给我一点时间"
        border
        fit
        highlight-current-row
        style="width: 120%"
      >
        <el-table-column align="left" :show-overflow-tooltip="true" label="真实姓名">
          <template slot-scope="scope">
            <span>{{scope.row.userName}}</span>
          </template>
        </el-table-column>
        <el-table-column align="left" :show-overflow-tooltip="true" label="权限">
          <template slot-scope="scope">
            <span>{{scope.row.roleName}}</span>
          </template>
        </el-table-column>
        <el-table-column  align='center' label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="success" @click="repairinfouser(scope.$index, scope.row)">查看维保信息</el-button>
          </template>
        </el-table-column>
      </el-table>
        <div>
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="userlistQuery.pageNum"
            :page-sizes="[5]"
            :page-size="userlistQuery.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="userlistQuery.total"
          ></el-pagination>
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
  </div>
  <div v-if="productRepairDialogVisibleuser">
    <el-form>
      <div style="width:100%">
        <el-col :span="6">
          <el-date-picker   type="date" placeholder="选择查询起始日期" v-model="starttime" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col style="margin-left:20px" :span="6">
          <el-date-picker   type="date" placeholder="选择查询结束日期" v-model="endtime" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-button style="margin-left:20px" type="success"  @click="queryByTimeuser"  >查询</el-button>
        <el-button style="margin-left:25%" type="primary"   @click="repairAdduser">添加</el-button>
        <el-button type="warning" style="margin-left: 20px" @click="canceluser">取消</el-button>
      </div>
      <el-row>
        <el-table
          :data="repairuserList.slice((currentPage1-1)*pageSize1,currentPage1*pageSize1)"
          align='center' style="width: 100%" max-height="600"  @selection-change="getDetails">
          <el-table-column  align='center' label="序号" width="150" v-if="false">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.id }}</span>
            </template>
          </el-table-column>
          <el-table-column  align='center' label="设备编号" width="130">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.controllerNo }}</span>
            </template>
          </el-table-column>
          <el-table-column  align='center' label="日期" width="170">
            <template   slot-scope="scope">
              <span style="margin-left: 10px">{{ dateFormat(scope.row.repairDatetime) }}</span>
            </template>
          </el-table-column>
          <el-table-column  align='center' label="录入人" width="130">
            <template slot-scope="scope">
              <span size="medium">{{ scope.row.createUserName }}</span>
            </template>
          </el-table-column>
          <el-table-column  align='center' label="维保人员" width="130">
            <template slot-scope="scope">
              <span size="medium">{{ scope.row.userName }}</span>
            </template>
          </el-table-column>
          <el-table-column  align='center' label="录入时间" width="170">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ dateFormat(scope.row.createDatetime) }}</span>
            </template>
          </el-table-column>
          <el-table-column  align='center' label="维保内容" width="450">
            <template slot-scope="scope">
              <span size="medium">{{ scope.row.repairContent }}</span>
            </template>
          </el-table-column>
          <el-table-column  align='center' label="操作">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="repairdeleteuser(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
      <div class="pagination-container">
        <el-pagination
          background
          @size-change="handleSizeChange1"
          @current-change="handleCurrentChange1" :current-page="currentPage1"
          :page-sizes="[5]"
          :page-size="pageSize1"
          layout="total, sizes, prev, pager, next, jumper"
          :total="repairuserList.length"
        ></el-pagination>
      </div>
      <el-dialog :append-to-body="true" :title="titleName" :visible.sync="newRepairDialogFlaguser">
        <el-form ref="repairform" v-model="repairform" label-width="80px">
          <el-form-item label="序号" v-show="false">
            <el-input v-model="repairform.repairId"></el-input>
          </el-form-item>
          <el-form-item  v-if="inputno" label="产品编号">
            <el-autocomplete
              v-model="repairform.boilerNo"
              :fetch-suggestions="querySearchAsyncuser"
              placeholder="请输入内容"
              @select="((item)=>{handleSelectuser(item)})"
            ></el-autocomplete>
          </el-form-item>
          <el-form-item    v-if="inputname" label="维保人员">
            <el-autocomplete
              v-model="repairform.realName"
              :fetch-suggestions="querySearchAsync"
              placeholder="请输入内容"
              @select="((item)=>{handleSelect1(item)})"
            ></el-autocomplete>
          </el-form-item>
          <el-form-item label="录入时间">
            <el-col :span="24">
              <el-date-picker  value-format="yyyy-MM-dd hh:mm" type="datetime" placeholder="选择日期" v-model="repairform.createDatetime" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="维保时间">
            <el-col :span="24">
              <el-date-picker  value-format="yyyy-MM-dd hh:mm" type="datetime" placeholder="选择日期" v-model="repairform.repairDatetime" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="维保内容">
            <el-input type="textarea" v-model="repairform.repairContent"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitRepairuser">立即添加</el-button>
            <el-button type="warning" @click="cancelbuuser">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </el-form>
  </div>
  </div>
</template>
<script>
  import {getProductListByCondition} from '@/api/product';
  import {getRepairInfoListByDate,
    insertRepairInfo,
    getRepairInfoListByProductId,
    getRepairInfoListBydate,
    getRepairInfoListByUserId,
    deleteRepairInfoByProductId} from '@/api/RepairInfo';
  import {getUserListByConditionAndPage} from "@/api/user";
  export default {
    name: 'repair',
    data() {
      return {
        activeName: 'repairdevice',
        tabType:'',
        productList:[],
        productRepairDialogVisible: false,
        productRepairDialogVisibleuser: false,
        newRepairDialogFlag: false,
        newRepairDialogFlaguser: false,
        repairform: [{
          userName: "",
          repairDatetime: "",
          repairContent: "",
          realName: "",
          createDatetime: '',
          createUserName: '',
          userId: '',
          controllerNo: '',
          id: '',
          boilerNo: "",
          userList: [],
        }],
        repairUserName:'',
        productId:'',
        repairUserId:'',
        inputname: true,
        inputno: false,
        userFormData: '',
        userlist: [],
        selectlistRow: [],
        starttime:'',
        endtime:'',
        titleName: "",
        deindex:'',
        restaurants: [],
        repairList: [
        ],
        repairuserList: [
        ],
        currentPage1:1,
        pageNum1: 1,
        pageSize1: 5,
        deleteId: -1,
        productFormData: {},
        listQuery: {
          total: 50,
          pageNum: 1,
          pageSize: 5,
          realName: "",
          mobile: null,
          orgType: this.$store.state.user.orgType,
          orgId: this.$store.state.user.orgId
        },
        product: {
          boilerNo: "",
          saleDate: null,
          controllerNo: "",
          customerName: null,
          productCategoryId: 530,
          tonnageNum: null,
          media: null,
          power: null,
          userId: null,
          isSell: null,
        },
        listQuery2: {
          total: 500,
          pageNum: 1,
          pageSize: 50,
          realName: "",
          mobile: null,
          orgId: this.$store.state.user.orgId
        },
        userlistQuery2: {
          total: 500,
          pageNum: 1,
          pageSize: 50,
          orgId: this.$store.state.user.orgId
        },
        userlistQuery: {
          total: 50,
          pageNum: 1,
          pageSize: 5,
          orgId: this.$store.state.user.orgId
        },
      };
    },
    filters: {
      statusFilter(status) {
        const statusMap = {
          1: "success",
          0: "danger"
        };
        return statusMap[status];
      },
      statusFilterLabel(status, isAvailableArray) {
        return isAvailableArray.filter(item => {
          return item.value == status;
        });
      }
    },
    created() {
        this.getWaterDetails(0);
    },
    methods: {
      dateFormat: function (time) {
        var date = new Date(time);
        var year = date.getFullYear();
        /* 在日期格式中，月份是从0开始的，因此要加0
         * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
         * */
        var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        // 拼接
        return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
      },
      handleClick(tab, event) {
        this.tabType = tab.index;
        var val = tab.index;//
        this.getWaterDetails(val);
      },
      repairinfo(index, row) {
        this.productRepairDialogVisibleuser = true;
        this.productFormData = row;
        this.titleName = "维保信息";
        this.inputname = true;
        this.inputno = false;
        this.getrepairList();
      },
      repairinfouser(index, row) {
        this.productRepairDialogVisibleuser = true;
        this.userFormData = row;
        this.titleName = "维保信息";
        this.inputname = false;
        this.inputno = true;
        this.getrepairListuser();
      },
      cancelbu() {
        this.newRepairDialogFlag = false;
        this.titleName = "维保信息";
      },
      cancel() {
        this.productRepairDialogVisible = false;
        this.titleName = "维保信息";
      },
      cancelbuuser() {
        this.newRepairDialogFlaguser = false;
        this.titleName = "维保信息";
      },
      canceluser() {
        this.productRepairDialogVisibleuser = false;
        this.titleName = "维保信息";
      },
      repairAdd() {
        this.newRepairDialogFlag = true;
        this.titleName = "添加维保信息";
      },
      repairAdduser() {
        this.newRepairDialogFlaguser = true;
        this.titleName = "添加维保信息";
      },
      repairdeleteuser(index, row) {
        var id = row.id;
        this.$confirm("确认删除?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            deleteRepairInfoByProductId(id).then(response => {
              if (response.data.code == 200) {
                this.repairList.splice(index, 1)
                this.$message({
                  message: "删除成功",
                  type: "success"
                });
              }
              if (this.inputname) {
                this.getrepairList();
              } else {
                this.getrepairListuser();
              }

            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
      },
      repairOpen() {
        this.getrepairList();
      },
      openTableMenu(row, event) {
        this.$refs.menuContext.openTableMenu(
          row,
          event,
          window.event.clientX,
          window.event.clientY
        );
      },
      handleFilter() {
        this.listQuery.pageNum = 1;
        this.getrepairListuser();
      },
      getrepairList() {
        getRepairInfoListByProductId({
          productId: this.productFormData.id
        }).then(response => {
          let repairInfoList = response.data.data;
          this.repairuserList = repairInfoList;
        });
      },
      repairOpenuser() {
        this.getrepairListuser();
      },
      getrepairListuser() {
        getRepairInfoListByUserId(this.userFormData.id).then(response => {
          let repairInfoList = response.data.data;
          this.repairuserList = repairInfoList;
        });
      },
      querySearchAsync(queryString, callback) {
        getUserListByConditionAndPage(this.userlistQuery2).then(response => {
          this.repairform.userList = [];
          var results = [];
          for (let i = 0, len = response.data.data.list.length; i < len; i++) {
            response.data.data.list[i].value = response.data.data.list[i].userName;
          }
          this.repairform.userList = response.data.data.list;
          results = queryString ? this.repairform.userList.filter(this.createFilter(queryString)) : this.repairform.userList;
          callback(results);
        });
      },
      createFilter(queryString, queryArr) {
        return (queryArr) => {
          return (queryArr.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect1(item) {
        this.repairform.userId = item.id;
      },
      querySearchAsyncuser(queryString, callback) {
        getProductListByCondition(this.listQuery2).then(response => {
          this.repairform.boilerNoList = [];
          var results = [];
          for (let i = 0, len = response.data.data.list.length; i < len; i++) {
            response.data.data.list[i].value = response.data.data.list[i].boilerNo;
          }
          this.repairform.boilerNoList = response.data.data.list;
          results = queryString ? this.repairform.boilerNoList.filter(this.createFilteruser(queryString)) : this.repairform.boilerNoList;
          callback(results);
        });
      },

      createFilteruser(queryString, queryArr) {
        return (queryArr) => {
          return (queryArr.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelectuser(item) {
        this.repairform.productId = item;
      },
      submitRepairuser() {
        if (this.inputname) {
          insertRepairInfo({
            repairUserName: this.repairform.realName,
            repairDatetime: this.repairform.repairDate,
            inputDatetime: this.repairform.inputDate,
            inputName: this.$store.getters.realName,
            repairContent: this.repairform.repairContent,
            productId: this.productFormData.id,
            repairUserId: this.repairform.userId.id
          }).then(data => {
            this.newRepairDialogFlaguser = false;
            this.titleName = "维保信息";
            this.$message({
              message: "添加成功",
              type: "success"
            });
            this.getrepairList();
          });
        } else {
          insertRepairInfo({
            repairUserName: this.userFormData.realName,
            repairDatetime: this.repairform.repairDate,
            inputDatetime: this.repairform.inputDate,
            inputName: this.$store.getters.realName,
            repairContent: this.repairform.repairContent,
            productId: this.repairform.productId.id,
            repairUserId: this.userFormData.id
          }).then(data => {
            this.newRepairDialogFlaguser = false;
            this.titleName = "维保信息";
            this.$message({
              message: "添加成功",
              type: "success"
            });
            this.getrepairListuser();
          });
        }
      },
      //分页
      handleSizeChange1: function (pageSize) {
        this.pageSize1 = pageSize;
        this.handleCurrentChange1(this.currentPage);
      },
      handleCurrentChange1: function (currentPage) {//页码切换
        this.currentPage1 = currentPage;
      },
      getrepairListBydate() {
        getRepairInfoListByDate({
          productId: this.productFormData.id,
          startTime: this.starttime,
          endTime: this.endtime
        }).then(response => {
          let repairInfoList = response.data.data;
          this.repairuserList = repairInfoList;
        });
      },
      getrepairListBydateuser() {
        getRepairInfoListBydate({
          userId: this.userFormData.id,
          startTime: this.starttime,
          endTime: this.endtime
        }).then(response => {
          let repairInfoList = response.data.data;
          this.repairuserList = repairInfoList;
        });
      },
      queryByTimeuser() {
        if (this.starttime.getTime() > this.endtime.getTime()) {
          alert('起始时间必须小于结束时间');
        } else {
          if (this.inputname) {
            this.getrepairListBydate();
          } else {
            this.getrepairListBydateuser();
          }

        }
        ;
      },
      getDetails(row) {
        this.deleteId = row.id;
      },
      handleSizeChange(val) {
        this.userlistQuery.pageSize = val;
        getUserListByConditionAndPage(this.userlistQuery).then(response => {
          let userInfoList = response.data.data;
          this.userlist = userInfoList.list;
          this.userlistQuery.total = userInfoList.total;
          this.userlistQuery.pageNum = userInfoList.pageNum;
          this.userlistQuery.pageSize = userInfoList.pageSize;
        });
      },
      handleCurrentChange(val) {
        this.userlistQuery.pageNum = val;
        getUserListByConditionAndPage(this.userlistQuery).then(response => {
          let userInfoList = response.data.data;
          this.userlist = userInfoList.list;
          this.userlistQuery.total = userInfoList.total;
          this.userlistQuery.pageNum = userInfoList.pageNum;
          this.userlistQuery.pageSize = userInfoList.pageSize;
        });
      },
      handleSizeChange2(val) {
        this.listQuery.pageSize = val;
        getProductListByCondition(this.listQuery).then(response => {
          let productInfoList = response.data.data;
          this.productList = productInfoList.list;
          this.listQuery.total = productInfoList.total;
          this.listQuery.pageNum = productInfoList.pageNum;
          this.listQuery.pageSize = productInfoList.pageSize;
        })
      },
      handleCurrentChange2(val) {
        this.listQuery.pageNum = val;
        getProductListByCondition(this.listQuery).then(response => {
          let productInfoList = response.data.data;
          this.productList = productInfoList.list;
          this.listQuery.total = productInfoList.total;
          this.listQuery.pageNum = productInfoList.pageNum;
          this.listQuery.pageSize = productInfoList.pageSize;
        })
      },
      getWaterDetails(val) {
        if (val == 0) {
          getProductListByCondition(this.listQuery).then(response => {
            let productInfoList = response.data.data;
            this.productList = productInfoList.list;
            this.listQuery.total = productInfoList.total;
            this.listQuery.pageNum = productInfoList.pageNum;
            this.listQuery.pageSize = productInfoList.pageSize;
          })
        }
        ;
        if (val == 1) {
          getUserListByConditionAndPage(this.userlistQuery).then(response => {
            let userInfoList = response.data.data;
            this.userlist = userInfoList.list;
            this.userlistQuery.total = userInfoList.total;
            this.userlistQuery.pageNum = userInfoList.pageNum;
            this.userlistQuery.pageSize = userInfoList.pageSize;
          });
        }
      },
    }
  };
</script>
