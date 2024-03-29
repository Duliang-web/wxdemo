import f from '../../data/f.js'
import b from '../../data/b.js'

Page({
  data: {
    navList: [],
    categoryList: [],
    currentCategory: {},
    scrollLeft: 0,
    scrollTop: 0,
    goodsCount: 0,
    scrollHeight: 0
  },
  onLoad: function(options) {
    this.getCatalog();
  },
  getCatalog: function() {
    //CatalogList
    let that = this;
    let resCatalogList = f
    that.setData({
      navList: resCatalogList.data.categoryList,
      currentCategory: resCatalogList.data.categoryList[0]
    });
    let resGoodsCount = b
    that.setData({
      goodsCount: resGoodsCount.data.goodsCount
    });
  },
  getCurrentCategory: function(id) {
    let that = this;
    let currentCategory = {}
    this.data.navList.forEach((item) => {
      if(item.id == id) {
        currentCategory = item
      }
    })
    that.setData({
      currentCategory: currentCategory
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
  getList: function() {
    var that = this;
    util.request(api.ApiRootUrl + 'api/catalog/' + that.data.currentCategory.cat_id)
      .then(function(res) {
        that.setData({
          categoryList: res.data,
        });
      });
  },
  switchCate: function(event) {
    var that = this;
    var currentTarget = event.currentTarget;
    if (this.data.currentCategory.id == event.currentTarget.dataset.id) {
      return false;
    }

    this.getCurrentCategory(event.currentTarget.dataset.id);
  }
})