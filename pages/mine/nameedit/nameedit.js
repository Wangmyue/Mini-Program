// // pages/mine/nameedit/nameedit.js
var app = getApp()
Page({
  data: {
    inputValue:'',
    nameValue: '',
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
          key:"addTel",
          data:this.data.inputValue
        })
     }else{
       wx.showModal({
          title: '昵称为空',
          content: '请输入昵称',
          success: function(res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
     }
  },
  onLoad(options) {
    const { name } = options;
    this.setData({
      nameValue: name,
    });
  },
  onSubmit() {
    wx.navigateBack({ backRefresh: true });
  },
  clearContent() {
    this.setData({
      nameValue: '',
    });
  },
});



