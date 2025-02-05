// index.js
Page({
  data: {
    months: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
    currentMonth: 1,
    seasonalFruits: [],
    day: "",
    chineseMonth: "",
    solarTerm: "人间小满",
    recommendFruits: "苹果、香蕉、沃柑、菠萝",
    warmTips: "应季水果味美，适量品尝更健康 ：）",
  },

  // 获取中文月份
  getChineseMonth() {
    const chineseMonths = [
      "一",
      "二",
      "三",
      "四",
      "五",
      "六",
      "七",
      "八",
      "九",
      "十",
      "十一",
      "十二",
    ];
    const currentMonth = new Date().getMonth();
    return chineseMonths[currentMonth];
  },

  onLoad() {
    const now = new Date();
    this.setData(
      {
        currentMonth: now.getMonth() + 1,
        day: now.getDate().toString(),
        chineseMonth: this.getChineseMonth(),
      },
      () => {
        this.updateSeasonalFruits();
      }
    );
  },

  onMonthChange(e) {
    this.setData({
      currentMonth: Number(e.detail.value) + 1,
    });
    this.updateSeasonalFruits();
  },

  onMonthTap(e) {
    const month = e.currentTarget.dataset.month;
    this.setData({
      currentMonth: month,
    });
    this.updateSeasonalFruits();
  },

  updateSeasonalFruits() {
    const fruitsData = {
      1: [
        {name: "草莓",image:"../images/strawberry.png"},
        {name: "车厘子",image:"../images/strawberry.png"},
        {name: "砂糖橘",image:"../images/strawberry.png"},
        {name: "柚子",image:"../images/strawberry.png"},
        {name: "甘蔗",image:"../images/strawberry.png"},
      ],
      2: [
        {name: "草莓",image:"../images/strawberry.png"},
        {name: "菠萝",image:"../images/strawberry.png"},
        {name: "圣女果",image:"../images/strawberry.png"},
      ],
      3: [
        {name: "草莓",image:"../images/strawberry.png"},
        {name: "芒果",image:"../images/strawberry.png"},
        {name: "枇杷",image:"../images/strawberry.png"},
      ],
      4: [
        {name: "樱桃",image:"../images/strawberry.png"},
        {name: "桑葚",image:"../images/strawberry.png"},
        {name: "凤梨",image:"../images/strawberry.png"},
      ],
      5: [
        {name: "樱桃",image:"../images/strawberry.png"},
        {name: "荔枝",image:"../images/strawberry.png"},
        {name: "西瓜",image:"../images/strawberry.png"},
      ],
      6: [
        {name: "水蜜桃",image:"../images/strawberry.png"},
        {name: "杨梅",image:"../images/strawberry.png"},
        {name: "哈密瓜",image:"../images/strawberry.png"},
      ],
      7: [
        {name: "葡萄",image:"../images/strawberry.png"},
        {name: "榴莲",image:"../images/strawberry.png"},
        {name: "龙眼",image:"../images/strawberry.png"},
      ],
      8: [
        {name: "梨",image:"../images/strawberry.png"},
        {name: "猕猴桃",image:"../images/strawberry.png"},
        {name: "石榴",image:"../images/strawberry.png"},
      ],
      9: [
        {name: "冬枣",image:"../images/strawberry.png"},
        {name: "柿子",image:"../images/strawberry.png"},
        {name: "柚子",image:"../images/strawberry.png"},
      ],
      10: [
        {name: "苹果",image:"../images/strawberry.png"},
        {name: "蜜桔",image:"../images/strawberry.png"},
        {name: "甘蔗",image:"../images/strawberry.png"},
      ],
      11: [
        {name: "草莓",image:"../images/strawberry.png"},
        {name: "金桔",image:"../images/strawberry.png"},
        {name: "橙子",image:"../images/strawberry.png"},
      ],
      12: [
        {name: "车厘子",image:"../images/strawberry.png"},
        {name: "草莓",image:"../images/strawberry.png"},
        {name: "冻梨",image:"../images/strawberry.png"},
      ],
    };

    const monthFruits = fruitsData[this.data.currentMonth] || [];
    // 确保每个水果都有图片，如果没有则使用默认图片
    const fruitsWithImages = monthFruits.map((fruit) => ({
      ...fruit,
      image: fruit.image || fruitsData.defaultImage,
    }));
    this.setData({
      seasonalFruits: fruitsWithImages,
    });
  },
});
