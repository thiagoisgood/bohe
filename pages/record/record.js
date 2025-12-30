// pages/record/record.js
import { dietRecord, weightRecords, firstVisitTip, healthMetrics, foodDatabase } from '../../utils/mock-data';

Page({
    data: {
        showFirstVisitTip: true,
        dietRecord: {},
        weightRecords: [],
        currentWeight: 0,
        healthMetrics: {},
        showFoodSearch: false,
        filteredFoods: [],
        searchKeyword: '',
        currentMealType: ''  // 当前选择的餐次类型
    },

    onLoad() {
        this.loadData();
        this.drawWeightChart();
    },

    /**
     * 加载数据
     */
    loadData() {
        this.setData({
            showFirstVisitTip: firstVisitTip.show,
            dietRecord: dietRecord,
            weightRecords: weightRecords,
            currentWeight: this.getCurrentWeight(),
            healthMetrics: healthMetrics,
            filteredFoods: foodDatabase
        });
    },

    /**
     * 获取当前体重
     */
    getCurrentWeight() {
        const latestRecord = weightRecords.find(r => r.weight > 0 && r.date !== '12-30');
        return latestRecord ? latestRecord.weight : 0;
    },

    /**
     * 绘制体重趋势图
     */
    drawWeightChart() {
        // 延迟执行，确保页面渲染完成
        setTimeout(() => {
            const ctx = wx.createCanvasContext('weightChart', this);

            // 使用查询获取实际的canvas尺寸
            const query = wx.createSelectorQuery().in(this);
            query.select('.chart-canvas').boundingClientRect();
            query.exec((res) => {
                if (!res || !res[0]) {
                    console.error('Canvas未找到');
                    return;
                }

                const canvasWidth = res[0].width;
                const canvasHeight = res[0].height;
                const padding = 30;

                // 过滤有效数据
                const validRecords = weightRecords.filter(r => r.weight > 0);

                if (validRecords.length === 0) {
                    ctx.draw();
                    return;
                }

                // 计算数据范围
                const weights = validRecords.map(r => r.weight);
                const minWeight = Math.min.apply(null, weights);
                const maxWeight = Math.max.apply(null, weights);
                const weightRange = maxWeight - minWeight || 1;

                // 计算每个数据点的位置
                const points = validRecords.map((record, index) => {
                    const totalRecords = weightRecords.length;
                    const recordIndex = weightRecords.findIndex(r => r.date === record.date);
                    const x = padding + (canvasWidth - 2 * padding) * recordIndex / (totalRecords - 1);
                    const y = canvasHeight - padding - ((record.weight - minWeight) / weightRange) * (canvasHeight - 2 * padding);
                    return { x, y, weight: record.weight };
                });

                // 绘制背景网格线（可选）
                ctx.setStrokeStyle('#E0E0E0');
                ctx.setLineWidth(0.5);
                for (let i = 0; i <= 4; i++) {
                    const y = padding + (canvasHeight - 2 * padding) * i / 4;
                    ctx.beginPath();
                    ctx.moveTo(padding, y);
                    ctx.lineTo(canvasWidth - padding, y);
                    ctx.stroke();
                }

                // 绘制折线
                ctx.beginPath();
                ctx.setLineWidth(3);
                ctx.setStrokeStyle('#4CAF50');
                ctx.setLineCap('round');
                ctx.setLineJoin('round');

                points.forEach((point, index) => {
                    if (index === 0) {
                        ctx.moveTo(point.x, point.y);
                    } else {
                        ctx.lineTo(point.x, point.y);
                    }
                });

                ctx.stroke();

                // 绘制数据点
                points.forEach((point) => {
                    ctx.beginPath();
                    ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI);
                    ctx.setFillStyle('#FFFFFF');
                    ctx.fill();

                    ctx.beginPath();
                    ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI);
                    ctx.setStrokeStyle('#4CAF50');
                    ctx.setLineWidth(2);
                    ctx.stroke();
                });

                ctx.draw();
            });
        }, 300);
    },

    /**
     * 添加记录
     */
    onAddRecord() {
        wx.showToast({
            title: '拍照记录功能',
            icon: 'none'
        });
    },

    /**
     * 点击餐次
     */
    onMealTap(e) {
        const mealType = e.currentTarget.dataset.type;
        this.setData({
            currentMealType: mealType,
            showFoodSearch: true,
            searchKeyword: '',
            filteredFoods: foodDatabase
        });
    },

    /**
     * 获取餐次名称
     */
    getMealName(type) {
        const names = {
            breakfast: '早餐',
            lunch: '午餐',
            dinner: '晚餐',
            snack: '加餐'
        };
        return names[type] || '';
    },

    /**
     * 点击运动
     */
    onExerciseTap() {
        wx.showToast({
            title: '记录运动',
            icon: 'none'
        });
    },

    /**
     * 记录体重
     */
    onRecordWeight() {
        wx.showModal({
            title: '记录体重',
            editable: true,
            placeholderText: '请输入体重(kg)',
            success: (res) => {
                if (res.confirm && res.content) {
                    const weight = parseFloat(res.content);
                    if (!isNaN(weight) && weight > 0) {
                        this.setData({
                            currentWeight: weight
                        });
                        wx.showToast({
                            title: '记录成功',
                            icon: 'success'
                        });
                    }
                }
            }
        });
    },

    /**
     * 记录步数
     */
    onRecordSteps() {
        wx.showModal({
            title: '记录步数',
            editable: true,
            placeholderText: '请输入步数',
            success: (res) => {
                if (res.confirm && res.content) {
                    const steps = parseInt(res.content);
                    if (!isNaN(steps) && steps > 0) {
                        this.setData({
                            'healthMetrics.steps.value': steps,
                            'healthMetrics.steps.tip': ''
                        });
                        wx.showToast({ title: '记录成功', icon: 'success' });
                    }
                }
            }
        });
    },

    /**
     * 记录腰围
     */
    onRecordWaistline() {
        wx.showModal({
            title: '记录腰围',
            editable: true,
            placeholderText: '请输入腰围(厘米)',
            success: (res) => {
                if (res.confirm && res.content) {
                    const waistline = parseFloat(res.content);
                    if (!isNaN(waistline) && waistline > 0) {
                        this.setData({
                            'healthMetrics.waistline.value': waistline,
                            'healthMetrics.waistline.tip': ''
                        });
                        wx.showToast({ title: '记录成功', icon: 'success' });
                    }
                }
            }
        });
    },

    /**
     * 记录血糖
     */
    onRecordBloodSugar() {
        wx.showModal({
            title: '记录血糖',
            editable: true,
            placeholderText: '请输入血糖值(mmol/L)',
            success: (res) => {
                if (res.confirm && res.content) {
                    const bloodSugar = parseFloat(res.content);
                    if (!isNaN(bloodSugar) && bloodSugar > 0) {
                        this.setData({
                            'healthMetrics.bloodSugar.value': bloodSugar,
                            'healthMetrics.bloodSugar.tip': ''
                        });
                        wx.showToast({ title: '记录成功', icon: 'success' });
                    }
                }
            }
        });
    },

    /**
     * 记录血压
     */
    onRecordBloodPressure() {
        wx.showModal({
            title: '记录血压',
            editable: true,
            placeholderText: '请输入收缩压(mmHg)',
            success: (res) => {
                if (res.confirm && res.content) {
                    const systolic = parseInt(res.content);
                    if (!isNaN(systolic) && systolic > 0) {
                        this.setData({
                            'healthMetrics.bloodPressure.systolic': systolic,
                            'healthMetrics.bloodPressure.tip': ''
                        });
                        wx.showToast({ title: '记录成功', icon: 'success' });
                    }
                }
            }
        });
    },

    /**
     * 关闭食物搜索弹窗
     */
    onCloseFoodSearch() {
        this.setData({
            showFoodSearch: false,
            searchKeyword: '',
            filteredFoods: foodDatabase
        });
    },

    /**
     * 搜索输入
     */
    onSearchInput(e) {
        const keyword = e.detail.value.toLowerCase();
        this.setData({
            searchKeyword: keyword
        });

        if (keyword === '') {
            this.setData({
                filteredFoods: foodDatabase
            });
        } else {
            const filtered = foodDatabase.filter(food =>
                food.name.toLowerCase().includes(keyword)
            );
            this.setData({
                filteredFoods: filtered
            });
        }
    },

    /**
     * 选择食物
     */
    onSelectFood(e) {
        const food = e.currentTarget.dataset.food;
        const mealName = this.getMealName(this.data.currentMealType);

        wx.showToast({
            title: `已添加${food.name}到${mealName}`,
            icon: 'success'
        });

        // 关闭弹窗
        setTimeout(() => {
            this.onCloseFoodSearch();
        }, 1000);
    }
});

