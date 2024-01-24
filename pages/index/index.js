

Page({

  schedule: {
    one: [
      // 周一上午1-4
      {
        sub: "大学物理",
        add: "B202",
        tec: "xxx",
        color: "#fad0c4",
        start: 3, //表示第3节开始上课
        step: 2, //2节课
        day: 1, //1:周一 2:周2 3:周三，以此类推，一直到周日
      },
      // 周2上午1-4
      {
        sub: "操作系统",
        add: "N502",
        tec: "xxx",
        color: "#ff9a9e",
        start: 1, //表示第一节开始上课
        step: 2, //2节课
        day: 2, //1:周一 2:周2 3:周三，以此类推，一直到周日
      },
      {
        sub: "编译原理",
        add: "B202",
        tec: "xxx",
        color: "#fda085",
        start: 3, //表示第3节开始上课
        step: 2, //2节课
        day: 2, //1:周一 2:周2 3:周三，以此类推，一直到周日
      },
      // 周3上午1-4
      // 周4上午1-4
      {
        sub: "操作系统",
        add: "N502",
        tec: "xxx",
        color: "#fbc2eb",
        start: 1, //表示第一节开始上课
        step: 2, //2节课
        day: 4, //1:周一 2:周2 3:周三，以此类推，一直到周日
      },
      {
        sub: "编译原理",
        add: "B202",
        tec: "xxx",
        color: "pink",
        start: 3, //表示第3节开始上课
        step: 2, //2节课
        day: 4, //1:周一 2:周2 3:周三，以此类推，一直到周日
      },
      // 周5上午1-4
      {
        sub: "操作系统",
        add: "N502",
        tec: "xxx",
        color: "#a7a6cb",
        start: 1, //表示第一节开始上课
        step: 2, //2节课
        day: 5, //1:周一 2:周2 3:周三，以此类推，一直到周日
      },
    ],
    two: [
      // 周1下午6-11
      {
        sub: "编译原理",
        add: "B202",
        tec: "xxx",
        color: "#6991c7",
        start: 6, //表示1-2节课
        step: 2, //2节课
        day: 1, //1:周一 2:周2 3:周三，以此类推，一直到周日
      },
      {
        sub: "编译原理",
        add: "B202",
        tec: "xxx",
        color: "#ebc0fd",
        start: 10, //表示第九节开始上课
        step: 3, //3节课
        day: 1, //1:周一 2:周2 3:周三，以此类推，一直到周日
      },
      // 周2下午6-11
      {
        sub: "编译原理",
        add: "B202",
        tec: "xxx",
        color: "#fddb92",
        start: 8, //表示1-2节课
        step: 2, //3节课
        day: 2, //1:周一 2:周2 3:周三，以此类推，一直到周日
      },
      {
        sub: "编译原理",
        add: "B202",
        tec: "xxx",
        color: "orange",
        start: 8, //表示1-2节课
        step: 2, //3节课
        day: 2, //1:周一 2:周2 3:周三，以此类推，一直到周日
      },
      // 周3下午6-11
      // 周4下午6-11
      {
        sub: "编译原理",
        add: "B202",
        tec: "xxx",
        color: "skyblue",
        start: 8, //表示1-2节课
        step: 2, //3节课
        day: 4, //1:周一 2:周2 3:周三，以此类推，一直到周日
      },
      // 周5下午6-11
      {
        sub: "编译原理",
        add: "B202",
        tec: "xxx",
        color: "#7e7a7a",
        start: 6, //表示1-2节课
        step: 2, //3节课
        day: 5, //1:周一 2:周2 3:周三，以此类推，一直到周日
      },
    ],
  },

  /**
   * 弹出按钮点击事件
   */
  popup: function (e) {
    // console.log(e.currentTarget.dataset.id)
     this.setData({
       showModal: true
     })
   },
   /**
    * 隐藏
    */
   hidepopup: function () {
     this.setData({
       showModal: false
     });
   },

   toDetail(){
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },


  
  mixins: [require('../../mixin/common')],

  data: {
    list: [
      {

        id: 'form',
        name: "大学物理",
        open: false,
        pages: ["B202",'周一','2'],
      }, {

        id: 'form',
        name: "操作系统",
        open: false,
        pages: ["N502",'周二','2'],
      }, {
        id: 'form',
        name: "编译原理",
        open: false,
        pages: ["N502",'周四','2'],
      }, 
    ],
    
  },
  kindToggle(e) {
    const { id } = e.currentTarget; 
    const { list } = this.data;
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open;
      } else {
        list[i].open = false;
      }
    }
    this.setData({
      list,
    });
  },
  changeTheme() {
    console.log(this.data);
    getApp().themeChanged(this.data.theme === 'light' ? 'dark' : 'light');
  },

  
  
});
