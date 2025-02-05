Page({
  data: {
    months: [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ],
    currentMonth: 1,
    seasonalFruits: [],
    day: "",
    chineseMonth: "",
    solarTerm: "",
    motto: "",
    recommendFruits: "",
    warmTips: "",
  },

  onLoad() {
    this.setCurrentDate();
    this.updateSeasonalFruits();
  },

  setCurrentDate() {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;

    this.setData({
      day: day,
      currentMonth: month,
      chineseMonth: month,
    });

    this.updateMonthInfo(month);
  },

  onMonthTap(e) {
    const month = e.currentTarget.dataset.month;
    this.setData({
      currentMonth: month,
      chineseMonth: month,
    });
    this.updateMonthInfo(month);
    this.updateSeasonalFruits();
  },

  updateMonthInfo(month) {
    const monthInfo = {
      1: { term: "岁初祈祥", motto: "寒冬腊月藏暖意，岁初祈愿岁末安" },
      2: { term: "春醒万物", motto: "春风拂面解冻土，万物萌动待新安" },
      3: { term: "桃花盈春", motto: "桃花笑春风，人间处处是小满" },
      4: { term: "雨润岁宁", motto: "清明雨绵绵，思念悠悠岁长安" },
      5: { term: "榴火燃夏", motto: "榴花照眼明，日子红火乐未央" },
      6: { term: "荷香夏安", motto: "荷风送香气，夏日常安岁月长" },
      7: { term: "流火静夏", motto: "流火七月天，静享清凉心自安" },
      8: { term: "桂秋盈香", motto: "桂香满园秋意浓，岁月静好愿常逢" },
      9: { term: "菊黄秋丰", motto: "菊黄蟹肥秋意满，人间烟火皆成安" },
      10: { term: "霜降岁安", motto: "露凝霜降寒意起，心怀暖阳岁又安" },
      11: { term: "冬阳暖心", motto: "初冬暖阳照人心，静待岁月赐新安" },
      12: { term: "冬至迎春", motto: "冬至阳生春可期，温暖相伴岁月安" },
    };

    this.setData({
      solarTerm: monthInfo[month].term,
      motto: monthInfo[month].motto,
    });
  },

  updateSeasonalFruits() {
    const fruitsData = {
      1: [
        {
          name: "草莓",
          price: "15",
          unit: "元/斤",
          image: "/images/fruits/strawberry.jpg",
        },
        {
          name: "柑橘",
          price: "8",
          unit: "元/斤",
          image: "/images/fruits/orange.jpg",
        },
        {
          name: "猕猴桃",
          price: "12",
          unit: "元/斤",
          image: "/images/fruits/kiwi.jpg",
        },
      ],
      2: [
        {
          name: "草莓",
          price: "15",
          unit: "元/斤",
          image: "/images/fruits/strawberry.jpg",
        },
        {
          name: "菠萝",
          price: "10",
          unit: "元/斤",
          image: "/images/fruits/pineapple.jpg",
        },
        {
          name: "圣女果",
          price: "12",
          unit: "元/斤",
          image: "/images/fruits/pomegranate.jpg",
        },
      ],
      3: [
        {
          name: "草莓",
          price: "15",
          unit: "元/斤",
          image: "/images/fruits/strawberry.jpg",
        },
        {
          name: "芒果",
          price: "20",
          unit: "元/斤",
          image: "/images/fruits/mango.jpg",
        },
        {
          name: "枇杷",
          price: "18",
          unit: "元/斤",
          image: "/images/fruits/loquat.jpg",
        },
      ],
      4: [
        {
          name: "樱桃",
          price: "25",
          unit: "元/斤",
          image: "/images/fruits/cherry.jpg",
        },
        {
          name: "桑葚",
          price: "15",
          unit: "元/斤",
          image: "/images/fruits/mulberry.jpg",
        },
        {
          name: "凤梨",
          price: "12",
          unit: "元/斤",
          image: "/images/fruits/pineapple.jpg",
        },
      ],
      5: [
        {
          name: "樱桃",
          price: "25",
          unit: "元/斤",
          image: "/images/fruits/cherry.jpg",
        },
        {
          name: "荔枝",
          price: "20",
          unit: "元/斤",
          image: "/images/fruits/lychee.jpg",
        },
        {
          name: "西瓜",
          price: "10",
          unit: "元/斤",
          image: "/images/fruits/watermelon.jpg",
        },
      ],
      6: [
        {
          name: "水蜜桃",
          price: "18",
          unit: "元/斤",
          image: "/images/fruits/peach.jpg",
        },
        {
          name: "杨梅",
          price: "15",
          unit: "元/斤",
          image: "/images/fruits/waxberry.jpg",
        },
        {
          name: "哈密瓜",
          price: "12",
          unit: "元/斤",
          image: "/images/fruits/honeydew.jpg",
        },
      ],
      7: [
        {
          name: "葡萄",
          price: "15",
          unit: "元/斤",
          image: "/images/fruits/grape.jpg",
        },
        {
          name: "榴莲",
          price: "20",
          unit: "元/斤",
          image: "/images/fruits/durian.jpg",
        },
        {
          name: "龙眼",
          price: "18",
          unit: "元/斤",
          image: "/images/fruits/longan.jpg",
        },
      ],
      8: [
        {
          name: "梨",
          price: "10",
          unit: "元/斤",
          image: "/images/fruits/pear.jpg",
        },
        {
          name: "猕猴桃",
          price: "12",
          unit: "元/斤",
          image: "/images/fruits/kiwi.jpg",
        },
        {
          name: "石榴",
          price: "15",
          unit: "元/斤",
          image: "/images/fruits/pomegranate.jpg",
        },
      ],
      9: [
        {
          name: "冬枣",
          price: "10",
          unit: "元/斤",
          image: "/images/fruits/date.jpg",
        },
        {
          name: "柿子",
          price: "12",
          unit: "元/斤",
          image: "/images/fruits/persimmon.jpg",
        },
        {
          name: "柚子",
          price: "15",
          unit: "元/斤",
          image: "/images/fruits/pomelo.jpg",
        },
      ],
      10: [
        {
          name: "苹果",
          price: "15",
          unit: "元/斤",
          image: "/images/fruits/apple.jpg",
        },
        {
          name: "蜜桔",
          price: "10",
          unit: "元/斤",
          image: "/images/fruits/tangerine.jpg",
        },
        {
          name: "甘蔗",
          price: "8",
          unit: "元/斤",
          image: "/images/fruits/sugarcane.jpg",
        },
      ],
      11: [
        {
          name: "草莓",
          price: "15",
          unit: "元/斤",
          image: "/images/fruits/strawberry.jpg",
        },
        {
          name: "金桔",
          price: "10",
          unit: "元/斤",
          image: "/images/fruits/kumquat.jpg",
        },
        {
          name: "橙子",
          price: "12",
          unit: "元/斤",
          image: "/images/fruits/orange.jpg",
        },
      ],
      12: [
        {
          name: "车厘子",
          price: "20",
          unit: "元/斤",
          image: "/images/fruits/cherry.jpg",
        },
        {
          name: "草莓",
          price: "15",
          unit: "元/斤",
          image: "/images/fruits/strawberry.jpg",
        },
        {
          name: "冻梨",
          price: "18",
          unit: "元/斤",
          image: "/images/fruits/pear.jpg",
        },
      ],
    };

    const monthFruits = fruitsData[this.data.currentMonth] || [];
    const fruitNames = monthFruits.map((fruit) => fruit.name).join("、");

    this.setData({
      seasonalFruits: monthFruits,
      recommendFruits: fruitNames,
    });
  },
});
