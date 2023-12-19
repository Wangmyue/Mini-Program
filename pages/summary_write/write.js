Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    today_date: getDate(),
    today_week: getWeek(),
    length: 0,
    content: '',
  },
  inputSummary: function (e) {
    this.setData({
      content: e.detail.value
    });
  },
  getInput: function (e) {
    this.setData({
      content: e.detail.value
    })
    // console.log(e.detail.value.length);
    var num = e.detail.value.length;
    this.setData({
      length: num,
    });
    // console.log(this.data.content);
  },
  saveSummary: function (options) {
    const content = this.data.content;
    if (content != '') {
      wx.switchTab({
        url: '/pages/summary/summary',
        success: function () {
          wx.reLaunch({
            url: '/pages/summary/summary',
          });
        }
      });
      const app = getApp();
      app.globalData.summaries.push(content);
      // console.log(getApp().globalData.summaries);
      // wx.navigateTo({
      //   url: '/pages/summary/summary?summaries=' + encodeURIComponent(JSON.stringify([summary])),
      // });
      wx.showToast({
        title: '保存成功',
        icon: 'success',
        duration: 1000,
      });
      // wx.setStorage({
      //   key: 'summary',
      //   data: {
      //     summary,
      //   }
      // })
    } else {
      wx.showToast({
        title: '请输入总结',
        icon: 'none',
        duration: 2000
      });
    }
  }
})

// 获得年月日
function getDate() {
  var myDate = new Date();
  var year = myDate.getFullYear();
  var month = myDate.getMonth() + 1;
  var day = myDate.getDate();
  return year + "年" + month + "月" + day + "日";
}

// 获得星期
function getWeek() {
  var weeks = ["天","一","二","三","四","五","六"];
  return "星期"+weeks[new Date().getDay()];
}