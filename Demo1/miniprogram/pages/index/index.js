//index.js
const app = getApp()
var proList = new Array()
proList.push({
  logo: "../../images/index/show1.jpg",
  title: "花卉小镇",
  desc: "这里全都是花啊"
})
proList.push({
  logo: "../../images/index/show2.jpeg",
  title: "世界之窗",
  desc: "这里全都是建筑物啊"
})
proList.push({
  logo: "../../images/index/show3.jpeg",
  title: "深南花园",
  desc: "这里全都是房子和人啊"
})
Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    imgUrls: [
      '../../images/index/show1.jpg',
      '../../images/index/show2.jpeg',
      '../../images/index/show3.jpeg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    proList:proList,
  },
  onLoad: function() {
  },
  toDetail:function(){
    console.log("我进来了")
    wx.navigateTo({
      url: '../detail/detail',
    })
  },
  onScrollLower:function(){
    console.log("加载更多数据");
    var that = this;
    proList.push({
      logo: "../../images/index/show1.jpg",
      title: "花卉小镇",
      desc: "这里全都是花啊"
    })
    proList.push({
      logo: "../../images/index/show2.jpeg",
      title: "世界之窗",
      desc: "这里全都是建筑物啊"
    })
    proList.push({
      logo: "../../images/index/show3.jpeg",
      title: "深南花园",
      desc: "这里全都是房子和人啊"
    })
    wx.showToast({
      title: '加载更多...',
      mask:true,
      image:'../../images/index/loading.gif',
      
    })
    that.setData({
      proList:proList,
    })
  },
})
