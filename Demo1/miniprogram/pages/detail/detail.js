//index.js
const app = getApp()

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    longitude: 117.3245211,
    latitude: 29.10229,
    scale: 10,
    markers: [{
      iconPath: "../../images/detail/location.png",
      longitude: 117.3245211,
      latitude: 29.10229,
      width: 30,
      height: 30,
      callout: {
        bgColor: '#ffffff',
        fontSize: 11,
        display: 'ALWAYS',
        textAlign: 'left',
        padding: 8,
        content: "好丑啊这是什么玩意"
      },
    }],
    picList: [
      { pic: "../../images/detail/imge1.jpg" },
      { pic: "../../images/detail/image2.jpg" },
      { pic: "../../images/detail/image3.jpg" },
      { pic: "../../images/detail/image4.jpg" },
    ],
  },
  onLoad: function () {
    var that = this;
    that.setData({

    });
  },
  toMyLocation: function () {
    var that = this;
    wx.getLocation({
      success: function (res) {
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      },
    })
  },
  onReady: function () {

  },
  toUpLocation: function () {
    var that = this;
    var scale = this.data.scale;
    if (scale < 18)
      that.setData({
        scale: ++scale
      })
  },
  toDownLocation: function () {
    var that = this;
    var scale = this.data.scale;
    if (scale > 0)
      that.setData({
        scale: --scale
      })
  },
})