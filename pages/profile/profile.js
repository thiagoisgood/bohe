// pages/profile/profile.js
import { userInfo, profileMenus } from '../../utils/mock-data';

Page({
    data: {
        userInfo: {},
        menus: []
    },

    onLoad() {
        this.loadData();
    },

    /**
     * 加载数据
     */
    loadData() {
        this.setData({
            userInfo: userInfo,
            menus: profileMenus
        });
    },

    /**
     * 点击菜单项
     */
    onMenuTap(e) {
        const path = e.currentTarget.dataset.path;
        wx.showToast({
            title: '功能开发中',
            icon: 'none'
        });

        // 实际项目中应该跳转到对应页面
        // wx.navigateTo({
        //   url: path
        // });
    }
});
