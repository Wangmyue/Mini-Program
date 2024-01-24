// pages/mine/teledit/teledit.js
// pages/mine/sexedit/sexedit.js

var app = getApp()
Page({
  data: {
    inputValue:'',
    nameValue: '',
    sexValue:'',
    telValue:'',
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
          key:"addTel_tel",
          data:this.data.inputValue
        })
     }else{
       wx.showModal({
          title: '电话为空',
          content: '请输入联系方式',
          success: function(res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
     }
  },
  onLoad(options) {
    const { tel } = options;
    this.setData({
      telValue: tel,
    });
  },
  onSubmit() {
    wx.navigateBack({ backRefresh: true });
  },
  clearContent() {
    this.setData({
      telValue: '',
    });
  },
});



