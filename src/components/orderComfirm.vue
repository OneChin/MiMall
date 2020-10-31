<template>
  <div>
    header 
    <modal
      title="删除确认"
      btnType="1"
      :showModal="showDelModal"
      @cancel="showDelModal=false"
      @submit="sumbitAddress"
    >
      <template v-solt:body>
        <p>您确认要删除此地址吗？</p>
      </template>
    </modal>
  </div>
</template>

<script>
import Modal from './modal'
export default {
    name: 'order-cofirm',
    components: {
      Modal
    },
    data () {
      return {
        list: [], // 收货地址列表
        cartList: [], // 购物车中需要结算的商品列表
        cartTotalPrice: 0, // 商品总金额
        count: 0, // 商品结算数量
        checkItem: {}, // 选中的商品对象，可以在删除和编辑中复用
        userAction: '', // 用户行为 0：新增 1：编辑 2：删除
        showDelModal: false, // 是否显示删除弹框
        showEditModal: false, // 是否显示编辑弹框
      }
    },
    mounted() {
      this.getCartList()
    },
    methods: {
      // 打开新增地址弹窗
      openAddressModal () {
        this.userAction = 0;
        this.checkItem = {}; // 清空item
        this.showEditModal = true;

      },
      delAddress (item) {
        this.checkItem = item;
        this.userAction = 2;
        this.showDelModal = true;
      },
      // 地址删除、编辑、新增功能
      submitAddress () {
        // 结构语法
        // let item = this.checkItem;
        // let action = userAction;
        let {checkItem, userAction} = this;
        let method, url, params = {};
        if (userAction == 0) {
          method = 'post', url = '/shippings';
        } else if (userAction == 1) {
          method = 'put', url = `/shippings/${checkItem.id}`;
        } else {
          method = 'delete', url = `/shippings/${checkItem.id}`;
        }
        if (userAction == 0 || userAction ==1) {
          let { receiverName, receiverName, receiverProvince, receiverDistrict, receiverAdress, receiverZip} = {}
          // 为空则报错
          if (!receiverName) {
            this.$message.error('请输入收货人名称');
          }
          params = {
            // 数据一样，写一个
            receiverName,
            receiverMobile,
            receiverProvince,
            receiverDistrict,
            receiverAdress,
            receiverZip
          }
        }
        // this.axios.get()
        this.axios[method](url).then(()=>{
          this.closeModal();
          // 重新获取地址列表
          this.getAddressList();
          this.$message.success('操作成功');
        }
        )
      },
      closeModal () {
        // 还原
        this.checkItem = {};
        this.userAction = '';
        this.showDelModal = false;
      },
      getAddressList () {
        // 请求数据
        this.axios.get('/shippings').then((res)=>{
          this.list = res.list; // 获取地址列表
        })
      }, 
      getCartList () {
        this.axios.get('/shippings').then((res)=>{
          this.list = res.cartProductVolist; // 获取购物车中所有的商品 
          this.cartTotalPrice = res.cartTotalPrice; // 商品总金额
          this.cartList = list.filter(item=>item.productSelected); // 已经选中的商品
          this.cartList = map((item)=>{
            this.count += item.quanity;  // 获取件数 
          })
      }
    }
    }
}
</script>