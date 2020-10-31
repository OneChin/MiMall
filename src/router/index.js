import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home.vue'
import Index from '../pages/index.vue'
import Product from '../pages/product.vue'
import Detail from '../pages/detail.vue'
import Cart from '../pages/cart.vue'
import Order from '../pages/order.vue'
import OrderConfirm from '../pages/orderConfirm.vue'
import OrderList from '../pages/orderList.vue'
import OrderPay from '../pages/orderPay.vue'
import AliPay from '../pages/alipay.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    // 重定向到index
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: Index
      }, {
        // 动态路由
        path: '/product/:id',
        name: 'product',
        component: Product
      }, {
        path: '/detail/:id',
        name: 'detail',
        component: Detail
      }
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
    children: [
      {
        // 注意前面不能有斜杠 /
        path: 'list',
        name: 'order-list',
        component: OrderList
      },
      {
        path: 'confirm',
        name: 'order-confirm',
        component: OrderConfirm
      },
      {
        path: 'pay',
        name: 'order-pay',
        component: OrderPay
      },
      {
        path: 'alipay',
        name: 'ali-pay',
        component: AliPay
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
