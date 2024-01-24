// pages/mine/person-info/person-info.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addtel : '',
    addtel_sex :'',
    addtel_tel:'',

  },
  onShow:function(){
    var that = this;
    wx.getStorage({
      key: 'addTel',
      success: function(res) {
          console.log(res.data)
          that.setData({
            addtel:res.data
          })
      },
      
    })
    wx.getStorage({
      key: 'addTel_sex',
      success: function(res) {
          console.log(res.data)
          that.setData({
            addtel_sex:res.data
          })
      } 
      
    })
    wx.getStorage({
      key: 'addTel_tel',
      success: function(res) {
          console.log(res.data)
          that.setData({
            addtel_tel:res.data
          })
      } 
      
    })
  },
  gotonameedit:function(){
    wx.navigateTo({
      url: '/pages/mine/nameedit/nameedit',
    })

  },
  gotosexedit:function(){
    wx.navigateTo({
      url: '/pages/mine/sexedit/sexedit',
    })

  },
  gototeledit:function(){
    wx.navigateTo({
      url: '/pages/mine/teledit/teledit',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  //获取姓名
  name(e){
    console.log("获取姓名",e)


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  // onShow() {

  // },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})

