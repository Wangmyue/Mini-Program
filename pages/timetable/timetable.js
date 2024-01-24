import { getCurrWeekList, formateDate } from "../../utils/util.js";
Page({
  data: {
    time: {
      one: [
        {
          index: 1,
          timeStart: "08:00",
          timeEnd: "08:50",
        },
        {
          index: 2,
          timeStart: "09:00",
          timeEnd: "09:50",
        },
        {
          index: 3,
          timeStart: "10:10",
          timeEnd: "11:00",
        },
        {
          index: 4,
          timeStart: "11:10",
          timeEnd: "12:00",
        },
      ], //1-4
      gap: [
        {
          index: 5,
          timeStart: "12:00",
          timeEnd: "14:00",
        },
      ], 
      two: [
        {
          index: 6,
          timeStart: "14:00",
          timeEnd: "14:50",
        },
        {
          index: 7,
          timeStart: "15:00",
          timeEnd: "15:50",
        },
        {
          index: 8,
          timeStart: "16:10",
          timeEnd: "17:00",
        },
        {
          index: 9,
          timeStart: "17:10",
          timeEnd: "18:00",
        },
        {
          index: 10,
          timeStart: "18:30",
          timeEnd: "19:20",
        },
        {
          index: 11,
          timeStart: "19:30",
          timeEnd: "20:20",
        },
      ], //6-11
    },
    schedule:{},// 课表
    weekList: [],
    isShow: false,
    current: {},
  },

  onLoad: function (options) {
    const schedule = getApp().globalData.schedule;
    this.setData({
      schedule: schedule,
    });
    console.log(this.data.schedule);
  },

  onPullDownRefresh: function () {
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

  toDetail(){
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },

  getDetail(e) {
    let { item } = e.currentTarget.dataset;
    console.log(item);
    this.setData({
      current: item,
      isShow: true,
    });
  },

  close() {
    this.setData({
      isShow: false,
    });
  },

  onShow() {
    let time = new Date(),
      list = getCurrWeekList(time),
      weekList = [];
    list.forEach((item) => {
      weekList.push({
        day: [item.split("-")[1], item.split("-")[2]].join("-"),
        week: "星期" + "日一二三四五六".charAt(new Date(item).getDay()),
        isCurr: formateDate(time) == item,
      });
    });
    this.setData({
      weekList,
    });
  },
});