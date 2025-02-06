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
    currentMonthFruits: [],
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
          image: "/images/fruits/default-fruit.svg",
          origin: "北京/河北温室",
          variety: "早熟品种",
          description: "甜度一般但新鲜，建议搭配小苏打清洗",
          tag: "新鲜上市"
        },
        {
          name: "车厘子",
          price: "98",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "智利/澳洲进口",
          variety: "JJ级",
          description: "果肉厚实，反季节高价但品质稳定",
          tag: "进口精选"
        },
        {
          name: "砂糖橘",
          price: "8",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "广西",
          variety: "柑橘类",
          description: "南方运输为主，甜度高",
          tag: "当季推荐"
        },
        {
          name: "甘蔗",
          price: "5",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "广西",
          variety: "甘蔗",
          description: "清甜解渴，可榨汁或炖汤",
          tag: "应季水果"
        }
      ],
      2: [
        {
          name: "草莓",
          price: "12",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "北京大棚",
          variety: "优质草莓",
          description: "甜度提升，价格回落，适合制作奶昔或果酱",
          tag: "特惠"
        },
        {
          name: "菠萝",
          price: "10",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "海南/广东",
          variety: "早熟品种",
          description: "早熟酸甜，削皮后需盐水浸泡去涩",
          tag: "新鲜到货"
        },
        {
          name: "圣女果",
          price: "12",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "山东温室",
          variety: "小番茄",
          description: "初上市，适合沙拉",
          tag: "人气推荐"
        }
      ],
      3: [
        {
          name: "芒果",
          price: "15",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "海南",
          variety: "贵妃芒/台农芒",
          description: "甜度高，果香浓郁，注意挑选表皮无黑斑的",
          tag: "当季精选"
        },
        {
          name: "枇杷",
          price: "20",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "福建/四川",
          variety: "金黄枇杷",
          description: "金黄多汁，润肺佳品，但果期短需及时购买",
          tag: "限时特供"
        },
        {
          name: "草莓",
          price: "10",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "露天尾季",
          variety: "露天草莓",
          description: "最后一波鲜果，口感略逊于大棚",
          tag: "特惠"
        }
      ],
      4: [
        {
          name: "樱桃",
          price: "88",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "大连温室",
          variety: "美早、红灯",
          description: "初上市，价高但新鲜",
          tag: "新品上市"
        },
        {
          name: "桑葚",
          price: "25",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "北京郊区",
          variety: "野生桑葚",
          description: "紫黑色小果，采摘期短，可泡酒或制酱",
          tag: "限时供应"
        },
        {
          name: "凤梨",
          price: "12",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "台湾/海南",
          variety: "金钻凤梨",
          description: "削皮即食，甜度高，无需盐水浸泡",
          tag: "推荐"
        }
      ],
      5: [
        {
          name: "樱桃",
          price: "58",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "山东/大连露天",
          variety: "红灯、美早",
          description: "价格回落，露天种植更甜",
          tag: "特惠"
        },
        {
          name: "荔枝",
          price: "35",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "广东",
          variety: "妃子笑",
          description: "早熟品种，清甜多汁，注意冷藏保鲜",
          tag: "新鲜到货"
        },
        {
          name: "西瓜",
          price: "3",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "北京庞各庄",
          variety: "早熟小瓜",
          description: "沙瓤甜美，本地西瓜初上市",
          tag: "当季水果"
        }
      ],
      6: [
        {
          name: "水蜜桃",
          price: "15",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "平谷/河北",
          variety: "水蜜桃",
          description: "汁多味浓，手撕剥皮，夏季必选",
          tag: "当季推荐"
        },
        {
          name: "杨梅",
          price: "30",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "浙江",
          variety: "东魁杨梅",
          description: "个大味甜，酸味轻，可冷冻保存",
          tag: "限时特供"
        },
        {
          name: "哈密瓜",
          price: "8",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "新疆",
          variety: "西州蜜",
          description: "糖心明显，甜度高，解暑佳品",
          tag: "特惠"
        }
      ],
      7: [
        {
          name: "葡萄",
          price: "20",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "北京延庆",
          variety: "玫瑰香",
          description: "带花香，甜度高，适合鲜食",
          tag: "当季精选"
        },
        {
          name: "榴莲",
          price: "38",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "泰国",
          variety: "金枕榴莲",
          description: "旺季，果肉饱满软糯，价格全年最低",
          tag: "特惠"
        },
        {
          name: "龙眼",
          price: "15",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "广东/广西",
          variety: "桂圆",
          description: "补气血，果肉透明，注意剥壳后尽快食用",
          tag: "新鲜到货"
        }
      ],
      8: [
        {
          name: "梨",
          price: "6",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "河北赵县",
          variety: "皇冠梨",
          description: "解秋燥，清脆多汁，可炖冰糖雪梨",
          tag: "应季水果"
        },
        {
          name: "猕猴桃",
          price: "15",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "陕西",
          variety: "翠香",
          description: "需催熟后食用，酸甜平衡",
          tag: "推荐"
        },
        {
          name: "石榴",
          price: "12",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "云南",
          variety: "软籽石榴",
          description: "籽软可嚼，富含花青素",
          tag: "特色水果"
        }
      ],
      9: [
        {
          name: "冬枣",
          price: "15",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "山东沾化",
          variety: "冬枣",
          description: "脆甜无渣，冷藏后口感更佳",
          tag: "当季推荐"
        },
        {
          name: "柿子",
          price: "8",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "北京房山",
          variety: "磨盘柿",
          description: "霜降后更甜，软糯无涩味",
          tag: "特色水果"
        },
        {
          name: "柚子",
          price: "6",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "福建琯溪",
          variety: "红心柚",
          description: "耐存放，红心柚甜度更高",
          tag: "应季水果"
        }
      ],
      10: [
        {
          name: "苹果",
          price: "8",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "烟台/新疆",
          variety: "红富士/冰糖心",
          description: "脆甜多汁，耐储存",
          tag: "当季精选"
        },
        {
          name: "蜜桔",
          price: "5",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "浙江",
          variety: "蜜桔",
          description: "皮薄汁多，甜酸适中",
          tag: "特惠"
        },
        {
          name: "甘蔗",
          price: "4",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "广西",
          variety: "甘蔗",
          description: "秋冬限定，润肺止咳",
          tag: "应季"
        }
      ],
      11: [
        {
          name: "草莓",
          price: "35",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "辽宁丹东温室",
          variety: "红颜、章姬",
          description: "高价上市，适合送礼",
          tag: "新品上市"
        },
        {
          name: "金桔",
          price: "8",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "广西融安",
          variety: "金桔",
          description: "连皮吃，止咳化痰",
          tag: "特色水果"
        },
        {
          name: "橙子",
          price: "6",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "江西",
          variety: "脐橙",
          description: "初上市，汁水充沛",
          tag: "当季推荐"
        }
      ],
      12: [
        {
          name: "车厘子",
          price: "128",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "智利/澳洲",
          variety: "JJJ级",
          description: "果肉厚实，节日送礼首选",
          tag: "进口精选"
        },
        {
          name: "草莓",
          price: "25",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "全国温室",
          variety: "奶油草莓",
          description: "圣诞礼盒装热销",
          tag: "节日特供"
        },
        {
          name: "冻梨",
          price: "10",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "东北",
          variety: "冻梨",
          description: "黑皮爆汁",
          tag: "特色水果"
        }
      ]
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
          image: "/images/fruits/default-fruit.svg",
          origin: "北京/河北温室",
          variety: "早熟品种",
          description: "甜度一般但新鲜，建议搭配小苏打清洗",
          tag: "新鲜上市"
        },
        {
          name: "车厘子",
          price: "98",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "智利/澳洲进口",
          variety: "JJ级",
          description: "果肉厚实，反季节高价但品质稳定",
          tag: "进口精选"
        },
        {
          name: "砂糖橘",
          price: "8",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "广西",
          variety: "柑橘类",
          description: "南方运输为主，甜度高",
          tag: "当季推荐"
        },
        {
          name: "甘蔗",
          price: "5",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "广西",
          variety: "甘蔗",
          description: "清甜解渴，可榨汁或炖汤",
          tag: "应季水果"
        }
      ],
      2: [
        {
          name: "草莓",
          price: "12",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "北京大棚",
          variety: "优质草莓",
          description: "甜度提升，价格回落，适合制作奶昔或果酱",
          tag: "特惠"
        },
        {
          name: "菠萝",
          price: "10",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "海南/广东",
          variety: "早熟品种",
          description: "早熟酸甜，削皮后需盐水浸泡去涩",
          tag: "新鲜到货"
        },
        {
          name: "圣女果",
          price: "12",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "山东温室",
          variety: "小番茄",
          description: "初上市，适合沙拉",
          tag: "人气推荐"
        }
      ],
      3: [
        {
          name: "芒果",
          price: "15",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "海南",
          variety: "贵妃芒/台农芒",
          description: "甜度高，果香浓郁，注意挑选表皮无黑斑的",
          tag: "当季精选"
        },
        {
          name: "枇杷",
          price: "20",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "福建/四川",
          variety: "金黄枇杷",
          description: "金黄多汁，润肺佳品，但果期短需及时购买",
          tag: "限时特供"
        },
        {
          name: "草莓",
          price: "10",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "露天尾季",
          variety: "露天草莓",
          description: "最后一波鲜果，口感略逊于大棚",
          tag: "特惠"
        }
      ],
      4: [
        {
          name: "樱桃",
          price: "88",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "大连温室",
          variety: "美早、红灯",
          description: "初上市，价高但新鲜",
          tag: "新品上市"
        },
        {
          name: "桑葚",
          price: "25",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "北京郊区",
          variety: "野生桑葚",
          description: "紫黑色小果，采摘期短，可泡酒或制酱",
          tag: "限时供应"
        },
        {
          name: "凤梨",
          price: "12",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "台湾/海南",
          variety: "金钻凤梨",
          description: "削皮即食，甜度高，无需盐水浸泡",
          tag: "推荐"
        }
      ],
      5: [
        {
          name: "樱桃",
          price: "58",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "山东/大连露天",
          variety: "红灯、美早",
          description: "价格回落，露天种植更甜",
          tag: "特惠"
        },
        {
          name: "荔枝",
          price: "35",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "广东",
          variety: "妃子笑",
          description: "早熟品种，清甜多汁，注意冷藏保鲜",
          tag: "新鲜到货"
        },
        {
          name: "西瓜",
          price: "3",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "北京庞各庄",
          variety: "早熟小瓜",
          description: "沙瓤甜美，本地西瓜初上市",
          tag: "当季水果"
        }
      ],
      6: [
        {
          name: "水蜜桃",
          price: "15",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "平谷/河北",
          variety: "水蜜桃",
          description: "汁多味浓，手撕剥皮，夏季必选",
          tag: "当季推荐"
        },
        {
          name: "杨梅",
          price: "30",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "浙江",
          variety: "东魁杨梅",
          description: "个大味甜，酸味轻，可冷冻保存",
          tag: "限时特供"
        },
        {
          name: "哈密瓜",
          price: "8",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "新疆",
          variety: "西州蜜",
          description: "糖心明显，甜度高，解暑佳品",
          tag: "特惠"
        }
      ],
      7: [
        {
          name: "葡萄",
          price: "20",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "北京延庆",
          variety: "玫瑰香",
          description: "带花香，甜度高，适合鲜食",
          tag: "当季精选"
        },
        {
          name: "榴莲",
          price: "38",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "泰国",
          variety: "金枕榴莲",
          description: "旺季，果肉饱满软糯，价格全年最低",
          tag: "特惠"
        },
        {
          name: "龙眼",
          price: "15",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "广东/广西",
          variety: "桂圆",
          description: "补气血，果肉透明，注意剥壳后尽快食用",
          tag: "新鲜到货"
        }
      ],
      8: [
        {
          name: "梨",
          price: "6",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "河北赵县",
          variety: "皇冠梨",
          description: "解秋燥，清脆多汁，可炖冰糖雪梨",
          tag: "应季水果"
        },
        {
          name: "猕猴桃",
          price: "15",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "陕西",
          variety: "翠香",
          description: "需催熟后食用，酸甜平衡",
          tag: "推荐"
        },
        {
          name: "石榴",
          price: "12",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "云南",
          variety: "软籽石榴",
          description: "籽软可嚼，富含花青素",
          tag: "特色水果"
        }
      ],
      9: [
        {
          name: "冬枣",
          price: "15",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "山东沾化",
          variety: "冬枣",
          description: "脆甜无渣，冷藏后口感更佳",
          tag: "当季推荐"
        },
        {
          name: "柿子",
          price: "8",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "北京房山",
          variety: "磨盘柿",
          description: "霜降后更甜，软糯无涩味",
          tag: "特色水果"
        },
        {
          name: "柚子",
          price: "6",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "福建琯溪",
          variety: "红心柚",
          description: "耐存放，红心柚甜度更高",
          tag: "应季水果"
        }
      ],
      10: [
        {
          name: "苹果",
          price: "8",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "烟台/新疆",
          variety: "红富士/冰糖心",
          description: "脆甜多汁，耐储存",
          tag: "当季精选"
        },
        {
          name: "蜜桔",
          price: "5",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "浙江",
          variety: "蜜桔",
          description: "皮薄汁多，甜酸适中",
          tag: "特惠"
        },
        {
          name: "甘蔗",
          price: "4",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "广西",
          variety: "甘蔗",
          description: "秋冬限定，润肺止咳",
          tag: "应季"
        }
      ],
      11: [
        {
          name: "草莓",
          price: "35",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "辽宁丹东温室",
          variety: "红颜、章姬",
          description: "高价上市，适合送礼",
          tag: "新品上市"
        },
        {
          name: "金桔",
          price: "8",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "广西融安",
          variety: "金桔",
          description: "连皮吃，止咳化痰",
          tag: "特色水果"
        },
        {
          name: "橙子",
          price: "6",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "江西",
          variety: "脐橙",
          description: "初上市，汁水充沛",
          tag: "当季推荐"
        }
      ],
      12: [
        {
          name: "车厘子",
          price: "128",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "智利/澳洲",
          variety: "JJJ级",
          description: "果肉厚实，节日送礼首选",
          tag: "进口精选"
        },
        {
          name: "草莓",
          price: "25",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "全国温室",
          variety: "奶油草莓",
          description: "圣诞礼盒装热销",
          tag: "节日特供"
        },
        {
          name: "冻梨",
          price: "10",
          unit: "元/斤",
          image: "/images/fruits/default-fruit.svg",
          origin: "东北",
          variety: "冻梨",
          description: "黑皮爆汁",
          tag: "特色水果"
        }
      ]
    };

    this.setData({
      currentMonthFruits: fruitsData[month] || []
    });
  },
});
