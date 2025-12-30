// Mock数据模块

/**
 * 用户信息
 */
export const userInfo = {
    id: 1,
    nickname: 'vita_czivrL',
    avatar: 'https://via.placeholder.com/200x200/4CAF50/FFFFFF?text=V',
    gender: 'female',
    age: 28,
    height: 165,
    targetWeight: 55,
    currentWeight: 62
};

/**
 * 饮食&运动记录数据
 */
export const dietRecord = {
    date: '2024-12-30',
    updateTime: '17:50',
    caloriesBurned: 168,  // 已超出（千卡）
    caloriesBudget: 0,     // 预算
    caloriesIntake: 168,   // 饮食
    caloriesExercise: 0,   // 运动
    meals: {
        breakfast: [],
        lunch: [],
        dinner: [],
        snack: []
    }
};

/**
 * 体重记录数据（最近7天）
 */
export const weightRecords = [
    { date: '12-24', weight: 63.2 },
    { date: '12-25', weight: 62.8 },
    { date: '12-26', weight: 62.5 },
    { date: '12-27', weight: 62.3 },
    { date: '12-28', weight: 62.0 },
    { date: '12-29', weight: 62.2 },
    { date: '12-30', weight: 0 }  // 今日未记录
];

/**
 * 知识宝典分类
 */
export const wikiCategories = [
    {
        id: 1,
        name: '新减肥法',
        icon: '💉',
        color: '#4CAF50'
    },
    {
        id: 2,
        name: '减前必看',
        icon: '🔥',
        color: '#FF9800'
    },
    {
        id: 3,
        name: '会吃会瘦',
        icon: '🏃',
        color: '#2196F3'
    },
    {
        id: 4,
        name: '动吃建议',
        icon: '🍊',
        color: '#FF5722'
    },
    {
        id: 5,
        name: '减不下去',
        icon: '🔔',
        color: '#9C27B0'
    }
];

/**
 * 知识宝典文章列表
 */
export const wikiArticles = [
    {
        id: 1,
        title: 'GLP1-3分钟速懂小美真',
        category: '药物减肥',
        tags: ['新减肥法', '判断用药'],
        categoryId: 1
    },
    {
        id: 2,
        title: '近期获批减肥适应症的「司美格鲁肽」用在国人身上会怎样？',
        category: '适合用药',
        tags: ['司美'],
        categoryId: 1
    },
    {
        id: 3,
        title: '减肥瓶颈期不妨试试这些办法！',
        category: '减肥卡路缓怎么办',
        tags: [],
        categoryId: 5
    },
    {
        id: 4,
        title: '司美格鲁肽获批减肥适应症，被称为「减肥神药」的它真能一针瘦吗',
        category: '',
        tags: ['司美'],
        categoryId: 1
    },
    {
        id: 5,
        title: '膳食纤维与火出圈的「减肥神药」有关系吗？',
        category: '',
        tags: [],
        categoryId: 3
    },
    {
        id: 6,
        title: '减肥药只能减肥医生开吗？',
        category: '减肥医生',
        tags: ['减肥医生', '肥胖症'],
        categoryId: 2
    }
];

/**
 * 我的页面菜单列表
 */
export const profileMenus = [
    {
        id: 1,
        title: '首诊信息',
        icon: '📋',
        iconColor: '#4CAF50',
        path: '/pages/profile/first-visit'
    },
    {
        id: 2,
        title: '体重方案',
        icon: '💡',
        iconColor: '#4CAF50',
        path: '/pages/profile/weight-plan'
    },
    {
        id: 3,
        title: '本周食谱',
        icon: '🍱',
        iconColor: '#4CAF50',
        path: '/pages/profile/weekly-menu'
    },
    {
        id: 4,
        title: '我的医生',
        icon: '👨‍⚕️',
        iconColor: '#4CAF50',
        path: '/pages/profile/my-doctor'
    },
    {
        id: 5,
        title: '复诊开方购药',
        icon: '💊',
        iconColor: '#4CAF50',
        path: '/pages/profile/prescription'
    },
    {
        id: 6,
        title: '智能评',
        icon: '🎯',
        iconColor: '#4CAF50',
        path: '/pages/profile/smart-eval'
    },
    {
        id: 7,
        title: '设置',
        icon: '⚙️',
        iconColor: '#757575',
        path: '/pages/profile/settings'
    }
];

/**
 * 首诊信息提示
 */
export const firstVisitTip = {
    show: true,
    title: '请完善首诊信息',
    subtitle: '以便医生提供更好的专业方案',
    bgGradient: 'linear-gradient(135deg, #81C784 0%, #4DD0E1 100%)'
};

/**
 * 健康指标数据
 */
export const healthMetrics = {
    steps: {
        value: 0,
        unit: '步',
        label: '步数',
        tip: '暂无记录'
    },
    waistline: {
        value: 0,
        unit: '厘米',
        label: '腰围',
        tip: '暂无记录'
    },
    bloodSugar: {
        value: 0,
        unit: 'mmol/L',
        label: '血糖',
        tip: '暂无记录'
    },
    bloodPressure: {
        systolic: 0,
        diastolic: 0,
        unit: 'mmHg',
        label: '血压',
        tip: '暂无记录'
    }
};

/**
 * 食物数据库
 */
export const foodDatabase = [
    {
        id: 1,
        name: '煮玉米',
        icon: '🌽',
        portion: '200 克',
        calories: 168
    },
    {
        id: 2,
        name: '米饭',
        icon: '🍚',
        portion: '1 碗',
        calories: 209
    },
    {
        id: 3,
        name: '煮鸡蛋',
        icon: '🥚',
        portion: '1 个(中)带壳',
        calories: 74
    },
    {
        id: 4,
        name: '馒头',
        icon: '🍞',
        portion: '1 个',
        calories: 114
    },
    {
        id: 5,
        name: '蒸红薯',
        icon: '🍠',
        portion: '1 个(小)',
        calories: 84
    },
    {
        id: 6,
        name: '煎蛋',
        icon: '🍳',
        portion: '1 个',
        calories: 117
    },
    {
        id: 7,
        name: '苹果',
        icon: '🍎',
        portion: '1 个(中)',
        calories: 95
    },
    {
        id: 8,
        name: '香蕉',
        icon: '🍌',
        portion: '1 根',
        calories: 82
    },
    {
        id: 9,
        name: '葡萄',
        icon: '🍇',
        portion: '100 克',
        calories: 69
    },
    {
        id: 10,
        name: '鸡胸肉',
        icon: '🍗',
        portion: '100 克',
        calories: 165
    },
    {
        id: 11,
        name: '西兰花',
        icon: '🥦',
        portion: '100 克',
        calories: 34
    },
    {
        id: 12,
        name: '牛奶',
        icon: '🥛',
        portion: '250 ml',
        calories: 122
    }
];

