//获取应用实例
const app = getApp()

import a from '../../data/a.js'
import b from '../../data/b.js'

Page({
  data: {
    x: "600rpx",
    y: "900rpx",
    goodsCount: 0,
    newGoods: [],
    hotGoods: [],
    topics: [],
    brands: [],
    floorGoods: [],
    banner: [],
    channel: []
  },
  onShareAppMessage: function() {
    return {
      title: 'NideShop',
      desc: '仿网易严选微信小程序商城',
      path: '/pages/index/index'
    }
  },

  getIndexData: function() {
    let that = this;
    let res = a
    that.setData({
      newGoods: res.data.newGoodsList,
      hotGoods: res.data.hotGoodsList,
      topics: res.data.topicList,
      brand: res.data.brandList,
      floorGoods: res.data.categoryList,
      banner: res.data.banner,
      channel: res.data.channel
    });
  },
  onLoad: function(options) {
    this.getIndexData();
    let res = b
    this.setData({
      goodsCount: res.data.goodsCount
    });
  },
  onReady: function() {
    // 页面渲染完成
  },
  onShow: function() {
    // 页面显示
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  },
})