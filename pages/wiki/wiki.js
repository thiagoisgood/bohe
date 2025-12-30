// pages/wiki/wiki.js
import { wikiCategories, wikiArticles } from '../../utils/mock-data';

Page({
    data: {
        categories: [],
        articles: [],
        selectedCategoryId: 0
    },

    onLoad() {
        this.loadData();
    },

    /**
     * 加载数据
     */
    loadData() {
        this.setData({
            categories: wikiCategories,
            articles: wikiArticles
        });
    },

    /**
     * 点击分类
     */
    onCategoryTap(e) {
        const categoryId = e.currentTarget.dataset.id;
        this.setData({
            selectedCategoryId: categoryId
        });

        // 根据分类过滤文章（这里使用所有文章作为演示）
        const filteredArticles = categoryId === 0
            ? wikiArticles
            : wikiArticles.filter(a => a.categoryId === categoryId);

        if (filteredArticles.length > 0) {
            this.setData({
                articles: filteredArticles
            });
        } else {
            wx.showToast({
                title: '暂无相关文章',
                icon: 'none'
            });
        }
    },

    /**
     * 点击文章
     */
    onArticleTap(e) {
        const articleId = e.currentTarget.dataset.id;
        wx.showToast({
            title: `查看文章 ${articleId}`,
            icon: 'none'
        });
    },

    /**
     * 搜索功能
     */
    onSearch(e) {
        const keyword = e.detail.value;
        if (!keyword) {
            this.loadData();
            return;
        }

        const results = wikiArticles.filter(article =>
            article.title.includes(keyword) ||
            article.tags.some(tag => tag.includes(keyword))
        );

        this.setData({
            articles: results
        });

        if (results.length === 0) {
            wx.showToast({
                title: '未找到相关文章',
                icon: 'none'
            });
        }
    }
});
