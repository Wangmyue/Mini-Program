Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    today_date: getDate(),
    today_week: getWeek(),
    length: 0,
    content: "",
    time: "",
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
    var num = e.detail.value.length;
    this.setData({
      length: num,
    });
    // console.log(this.data.content);
  },
  addSummary: function () {
    this.getTime();
    let that = this;
    const newSummary = [{
      summary: this.data.content,
      time: this.data.time,
    }];
    const app = getApp();
    app.globalData.summaries = newSummary.concat(app.globalData.summaries);
  },
  getTime: function () {
    const currentTime = new Date();
    const formattedTime = this.formattTime(new Date(currentTime));
    console.log(formattedTime);
    this.setData({
      time: formattedTime,
    }, function() {
      // 在数据更新后执行的操作
      console.log('TimeData updated successfully!');
    });
  },
  formattTime: function (date) {
    const year = date.getFullYear();
    const month = this.padZero(date.getMonth() + 1);
    const day = this.padZero(date.getDate());
    const hours = this.padZero(date.getHours());
    const minutes = this.padZero(date.getMinutes());
    const seconds = this.padZero(date.getSeconds());

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  },
  padZero: function (num) {
    return num < 10 ? '0' + num : num;
  },
  saveSummary: function (options) {
    const content = this.data.content;
    let that = this;
    if (content != '') {
      that.setData({
        content: content,
        time: that.formattTime(new Date()),
      });
      this.addSummary();
      wx.switchTab({
        url: '/pages/summary/summary',
        success: function () {
          wx.reLaunch({
            url: '/pages/summary/summary',
          });
        }
      });
      wx.showToast({
        title: '保存成功',
        icon: 'success',
        duration: 1000,
      });
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