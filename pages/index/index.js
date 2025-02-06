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
    currentDate: {
      day: "",
      month: "",
      solarTerm: "",
      motto: "",
      tips: "",
      recommendFruits: "",
    },
  },

  onLoad() {
    this.setCurrentDate();
    this.updateSeasonalFruits();
  },

  setCurrentDate() {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;

    const monthInfo = {
      1: {
        term: "岁初祈祥",
        motto: "寒冬腊月藏暖意，岁初祈愿岁末安",
        tips: "冬季草莓营养丰富，补充维C好选择；柑橘助消化，猕猴桃富含维生素，适合冬季食用。",
      },
      2: {
        term: "春醒万物",
        motto: "春风拂面解冻土，万物萌动待新安",
        tips: "春季草莓最甜美，菠萝开胃解腻，圣女果补充维生素，春日养生好搭配。",
      },
      3: {
        term: "桃花盈春",
        motto: "桃花笑春风，人间处处是小满",
        tips: "春末草莓正当季，芒果补充维生素A，枇杷润肺止咳，春季养生好时节。",
      },
      4: {
        term: "雨润岁宁",
        motto: "清明雨绵绵，思念悠悠岁长安",
        tips: "应季樱桃补铁养血，桑葚滋阴养颜，凤梨消食开胃，春末养生正当时。",
      },
      5: {
        term: "榴火燃夏",
        motto: "榴花照眼明，日子红火乐未央",
        tips: "初夏樱桃鲜甜可口，荔枝补气养血，西瓜解暑消渴，夏季消暑好选择。",
      },
      6: {
        term: "荷香夏安",
        motto: "荷风送香气，夏日常安岁月长",
        tips: "仲夏水蜜桃清热解暑，杨梅生津开胃，哈密瓜清热利尿，夏季消暑正当时。",
      },
      7: {
        term: "流火静夏",
        motto: "流火七月天，静享清凉心自安",
        tips: "盛夏葡萄清热润肺，榴莲补气强身，龙眼养血安神，夏季养生好时机。",
      },
      8: {
        term: "桂秋盈香",
        motto: "桂香满园秋意浓，岁月静好愿常逢",
        tips: "立秋梨子润肺生津，猕猴桃营养丰富，石榴补血养颜，秋季养生好时节。",
      },
      9: {
        term: "菊黄秋丰",
        motto: "菊黄蟹肥秋意满，人间烟火皆成安",
        tips: "秋分冬枣补气养血，柿子润肺止咳，柚子化痰止咳，秋季养生正当时。",
      },
      10: {
        term: "霜降岁安",
        motto: "露凝霜降寒意起，心怀暖阳岁又安",
        tips: "深秋苹果润肺止咳，蜜桔温补脾胃，甘蔗润肺止咳，秋季养生好选择。",
      },
      11: {
        term: "冬阳暖心",
        motto: "初冬暖阳照人心，静待岁月赐新安",
        tips: "初冬草莓补充维C，金桔化痰止咳，橙子增强免疫，冬季养生好时节。",
      },
      12: {
        term: "冬至迎春",
        motto: "冬至阳生春可期，温暖相伴岁月安",
        tips: "冬至车厘子补铁养血，草莓营养丰富，冻梨清热润肺，冬季养生正当时。",
      },
    };

    const currentMonthInfo = monthInfo[month];
    const fruitsData = {
      1: [
        {
          name: "草莓",
          price: "15",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "柑橘",
          price: "8",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "猕猴桃",
          price: "12",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
      ],
      2: [
        {
          name: "草莓",
          price: "15",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "菠萝",
          price: "10",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "圣女果",
          price: "12",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
      ],
      3: [
        {
          name: "草莓",
          price: "15",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "芒果",
          price: "20",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "枇杷",
          price: "18",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
      ],
      4: [
        {
          name: "樱桃",
          price: "25",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "桑葚",
          price: "15",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "凤梨",
          price: "12",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
      ],
      5: [
        {
          name: "樱桃",
          price: "25",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "荔枝",
          price: "20",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "西瓜",
          price: "10",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
      ],
      6: [
        {
          name: "水蜜桃",
          price: "18",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "杨梅",
          price: "15",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "哈密瓜",
          price: "12",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
      ],
      7: [
        {
          name: "葡萄",
          price: "15",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "榴莲",
          price: "20",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "龙眼",
          price: "18",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
      ],
      8: [
        {
          name: "梨",
          price: "10",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "猕猴桃",
          price: "12",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "石榴",
          price: "15",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
      ],
      9: [
        {
          name: "冬枣",
          price: "10",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "柿子",
          price: "12",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "柚子",
          price: "15",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
      ],
      10: [
        {
          name: "苹果",
          price: "15",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "蜜桔",
          price: "10",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "甘蔗",
          price: "8",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
      ],
      11: [
        {
          name: "草莓",
          price: "15",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "金桔",
          price: "10",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "橙子",
          price: "12",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
      ],
      12: [
        {
          name: "车厘子",
          price: "20",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "草莓",
          price: "15",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "冻梨",
          price: "18",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
      ],
    };

    const fruits = fruitsData[month] || [];
    const fruitNames = fruits.map((fruit) => fruit.name).join("、");

    this.setData({
      currentMonth: month,
      currentDate: {
        day: day,
        month: month,
        solarTerm: currentMonthInfo.term,
        motto: currentMonthInfo.motto,
        tips: currentMonthInfo.tips,
        recommendFruits: fruitNames,
      },
    });
  },

  onMonthTap(e) {
    const month = e.currentTarget.dataset.month;
    this.setData({
      currentMonth: month,
    });
    this.updateSeasonalFruits();
  },

  updateSeasonalFruits() {
    const month = this.data.currentMonth;
    const fruitsData = {
      1: [
        {
          name: "草莓",
          price: "15",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "柑橘",
          price: "8",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "猕猴桃",
          price: "12",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
      ],
      2: [
        {
          name: "草莓",
          price: "15",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "菠萝",
          price: "10",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "圣女果",
          price: "12",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
      ],
      3: [
        {
          name: "草莓",
          price: "15",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "芒果",
          price: "20",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "枇杷",
          price: "18",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
      ],
      4: [
        {
          name: "樱桃",
          price: "25",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "桑葚",
          price: "15",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "凤梨",
          price: "12",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
      ],
      5: [
        {
          name: "樱桃",
          price: "25",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "荔枝",
          price: "20",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "西瓜",
          price: "10",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
      ],
      6: [
        {
          name: "水蜜桃",
          price: "18",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "杨梅",
          price: "15",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "哈密瓜",
          price: "12",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
      ],
      7: [
        {
          name: "葡萄",
          price: "15",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "榴莲",
          price: "20",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "龙眼",
          price: "18",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
      ],
      8: [
        {
          name: "梨",
          price: "10",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "猕猴桃",
          price: "12",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "石榴",
          price: "15",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
      ],
      9: [
        {
          name: "冬枣",
          price: "10",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "柿子",
          price: "12",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "柚子",
          price: "15",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
      ],
      10: [
        {
          name: "苹果",
          price: "15",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "蜜桔",
          price: "10",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "甘蔗",
          price: "8",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
      ],
      11: [
        {
          name: "草莓",
          price: "15",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "金桔",
          price: "10",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "橙子",
          price: "12",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
      ],
      12: [
        {
          name: "车厘子",
          price: "20",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "草莓",
          price: "15",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
        {
          name: "冻梨",
          price: "18",
          unit: "元/斤",
          image: "https://img.zcool.cn/community/01f9ea5d145703a8012187f447cfef.jpg",
        },
      ],
    };

    const fruits = fruitsData[month] || [];
    const fruitNames = fruits.map((fruit) => fruit.name).join("、");

    this.setData({
      seasonalFruits: fruits,
      recommendFruits: fruitNames,
    });
  },
});
