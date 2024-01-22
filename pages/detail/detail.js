Page({

  data: {
    subject: {
      sub: "",
      add: "",
      tec: "",
      color: "",
      start: 1,
      step: 1,
      day: 1,
    },
  },

  inputSubject: function (e) {
    this.setData({
      ['subject.sub']: e.detail.value
    });
  },

  inputAddress: function (e) {
    this.setData({
      ['subject.add']: e.detail.value
    });
  },

  inputTeacher: function (e) {
    this.setData({
      ['subject.tec']: e.detail.value
    });
  },

  inputTimeStart: function (e) {
    this.setData({
      ['subject.start']: e.detail.value
    });
  },

  inputDuration: function (e) {
    this.setData({
      ['subject.step']: e.detail.value
    });
  },

  inputDay: function (e) {
    this.setData({
      ['subject.day']: e.detail.value
    });
  },

  inputColor: function (e) {
    this.setData({
      ['subject.color']: e.detail.value
    });
  },

  saveSubject: function (options) {

    const subject = this.data.subject;

    const app = getApp();
    if (subject.start == 1 || subject.start == 2 || subject.start == 3 || subject.start == 4) {
      app.globalData.schedule.one.push(subject);
    } else {
      app.globalData.schedule.two.push(subject);
    }

    wx.switchTab({
      url: '/pages/timetable/timetable',
      success: function () {
        wx.reLaunch({
          url: '/pages/timetable/timetable',
        });
      }
    });

  }











})