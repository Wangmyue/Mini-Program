Page({

  /**
   * 页面的初始数据
   */
  data: {
    summaries: [] // 保存历史总结列表，从write页传过来
  },
  onRefresh: function () {
    console.log(getApp().globalData.summaries);
    this.onLoad();
    wx.showNavigationBarLoading()
    wx.showLoading({
      title: 'Loading...',
    })
    console.log("下拉刷新");
    setTimeout(function () {
      wx.hideLoading();
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    }, 1000)
  },
  onPullDownRefresh: function () {
    this.onRefresh();
  },
  onLoad: function (options) {
    // 从页面跳转中获取历史总结列表数据并赋值给data中的summaries数组
    // wx.getStorage({
    //   key: 'summary',
    //   success: (summary) => {
    //     console.log(summary.data);
    //     this.data.summaries.push(summary.data);
    //   }
    // })
    
    const summaries = getApp().globalData.summaries;
    this.setData({
      summaries: summaries,
    });
    console.log(this.data.summaries);
  },
  goToWrite: function() {
    wx.navigateTo({
      url: '/pages/summary_write/write'
    })
  },
  upper(e) {
    console.log(e)
  },
  lower(e) {
    console.log(e)
  },

})