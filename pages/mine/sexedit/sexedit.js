// pages/mine/sexedit/sexedit.js

var app = getApp()
Page({
  data: {
    inputValue:'',
    nameValue: '',
    sexValue:'',
  },
  bindKeyInput:function(e){
    this.setData({
      inputValue: e.detail.value
    })
  },
  addbtn:function(){
     if(this.data.inputValue){
        wx.redirectTo({
          url: '/pages/mine/person-info/person-info'
        })
        wx.setStorage({
          key:"addTel_sex",
          data:this.data.inputValue
        })
     }else{
       wx.showModal({
          title: '性别为空',
          content: '请输入性别',
          success: function(res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
     }
  },
  onLoad(options) {
    const { sex } = options;
    this.setData({
      sexValue: sex,
    });
  },
  onSubmit() {
    wx.navigateBack({ backRefresh: true });
  },
  clearContent() {
    this.setData({
      sexValue: '',
    });
  },
});



