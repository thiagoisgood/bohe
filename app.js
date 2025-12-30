// app.js
App({
  onLaunch() {
    // 小程序启动时执行
    console.log('薄荷健康小程序启动');
    
    // 获取系统信息
    this.getSystemInfo();
  },

  getSystemInfo() {
    wx.getSystemInfo({
      success: (res) => {
        this.globalData.systemInfo = res;
        this.globalData.statusBarHeight = res.statusBarHeight;
        this.globalData.screenWidth = res.screenWidth;
        this.globalData.screenHeight = res.screenHeight;
      }
    });
  },

  globalData: {
    userInfo: null,
    systemInfo: null,
    statusBarHeight: 0,
    screenWidth: 0,
    screenHeight: 0
  }
});
