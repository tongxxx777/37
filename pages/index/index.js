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
        {
          name: "苹果",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "8.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素C和钾元素，有助于维持心血管健康。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "香蕉",
          image:
            "https://bkimg.cdn.bcebos.com/pic/b21c8701a18b87d6277f340e130828381e30fdc2",
          price: "5.5",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素B6和钾元素，有助于维持神经系统健康。",
          tips: "选购时应挑选表皮无斑点、无损伤的果实，手感结实、有分量感。",
        },
        {
          name: "沃柑",
          image:
            "https://bkimg.cdn.bcebos.com/pic/b8014a90f603738da977424fb51bb051f819ec5b",
          price: "6.5",
          unit: "斤",
          season: "冬季",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "菠萝",
          image:
            "https://bkimg.cdn.bcebos.com/pic/b8389b504fc2d562853556f5ef1190ef76c66c83",
          price: "12.8",
          unit: "个",
          season: "全年",
          nutrition: "富含维生素C和膳食纤维，有助于促进消化和排毒。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
      ],
      2: [
        {
          name: "苹果",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "8.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素C和钾元素，有助于维持心血管健康。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "香蕉",
          image:
            "https://bkimg.cdn.bcebos.com/pic/b21c8701a18b87d6277f340e130828381e30fdc2",
          price: "5.5",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素B6和钾元素，有助于维持神经系统健康。",
          tips: "选购时应挑选表皮无斑点、无损伤的果实，手感结实、有分量感。",
        },
        {
          name: "沃柑",
          image:
            "https://bkimg.cdn.bcebos.com/pic/b8014a90f603738da977424fb51bb051f819ec5b",
          price: "6.5",
          unit: "斤",
          season: "冬季",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
      ],
      3: [
        {
          name: "苹果",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "8.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素C和钾元素，有助于维持心血管健康。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "香蕉",
          image:
            "https://bkimg.cdn.bcebos.com/pic/b21c8701a18b87d6277f340e130828381e30fdc2",
          price: "5.5",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素B6和钾元素，有助于维持神经系统健康。",
          tips: "选购时应挑选表皮无斑点、无损伤的果实，手感结实、有分量感。",
        },
        {
          name: "沃柑",
          image:
            "https://bkimg.cdn.bcebos.com/pic/b8014a90f603738da977424fb51bb051f819ec5b",
          price: "6.5",
          unit: "斤",
          season: "冬季",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "嘉宝果",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "25.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "琵琶",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "8.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和膳食纤维，有助于促进消化和排毒。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "青枣",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "15.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和膳食纤维，有助于促进消化和排毒。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
      ],
      4: [
        {
          name: "苹果",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "8.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素C和钾元素，有助于维持心血管健康。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "香蕉",
          image:
            "https://bkimg.cdn.bcebos.com/pic/b21c8701a18b87d6277f340e130828381e30fdc2",
          price: "5.5",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素B6和钾元素，有助于维持神经系统健康。",
          tips: "选购时应挑选表皮无斑点、无损伤的果实，手感结实、有分量感。",
        },
        {
          name: "沃柑",
          image:
            "https://bkimg.cdn.bcebos.com/pic/b8014a90f603738da977424fb51bb051f819ec5b",
          price: "6.5",
          unit: "斤",
          season: "冬季",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "菠萝",
          image:
            "https://bkimg.cdn.bcebos.com/pic/b8389b504fc2d562853556f5ef1190ef76c66c83",
          price: "12.8",
          unit: "个",
          season: "全年",
          nutrition: "富含维生素C和膳食纤维，有助于促进消化和排毒。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "嘉宝果",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "25.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
      ],
      5: [
        {
          name: "苹果",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "8.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素C和钾元素，有助于维持心血管健康。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "香蕉",
          image:
            "https://bkimg.cdn.bcebos.com/pic/b21c8701a18b87d6277f340e130828381e30fdc2",
          price: "5.5",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素B6和钾元素，有助于维持神经系统健康。",
          tips: "选购时应挑选表皮无斑点、无损伤的果实，手感结实、有分量感。",
        },
        {
          name: "菠萝",
          image:
            "https://bkimg.cdn.bcebos.com/pic/b8389b504fc2d562853556f5ef1190ef76c66c83",
          price: "12.8",
          unit: "个",
          season: "全年",
          nutrition: "富含维生素C和膳食纤维，有助于促进消化和排毒。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "嘉宝果",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "25.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "荔枝",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "15.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "桑葚",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "15.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "青梅",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "6.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
      ],
      6: [
        {
          name: "苹果",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "8.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素C和钾元素，有助于维持心血管健康。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "香蕉",
          image:
            "https://bkimg.cdn.bcebos.com/pic/b21c8701a18b87d6277f340e130828381e30fdc2",
          price: "5.5",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素B6和钾元素，有助于维持神经系统健康。",
          tips: "选购时应挑选表皮无斑点、无损伤的果实，手感结实、有分量感。",
        },
        {
          name: "红毛丹",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "12.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "圣女果",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "6.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "菠萝蜜",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "15.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和膳食纤维，有助于促进消化和排毒。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "椰子",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "12.8",
          unit: "个",
          season: "全年",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "杨梅",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "18.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "释迦果",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "22.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和膳食纤维，有助于促进消化和排毒。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
      ],
      7: [
        {
          name: "苹果",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "8.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素C和钾元素，有助于维持心血管健康。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "香蕉",
          image:
            "https://bkimg.cdn.bcebos.com/pic/b21c8701a18b87d6277f340e130828381e30fdc2",
          price: "5.5",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素B6和钾元素，有助于维持神经系统健康。",
          tips: "选购时应挑选表皮无斑点、无损伤的果实，手感结实、有分量感。",
        },
        {
          name: "百香果",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "12.8",
          unit: "个",
          season: "全年",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "哈密瓜",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "15.8",
          unit: "个",
          season: "全年",
          nutrition: "富含维生素C和膳食纤维，有助于促进消化和排毒。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "蓝莓",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "25.8",
          unit: "盒",
          season: "全年",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "黄皮果",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "8.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "雪梨",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "6.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和膳食纤维，有助于促进消化和排毒。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "无花果",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "15.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
      ],
      8: [
        {
          name: "苹果",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "8.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素C和钾元素，有助于维持心血管健康。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "香蕉",
          image:
            "https://bkimg.cdn.bcebos.com/pic/b21c8701a18b87d6277f340e130828381e30fdc2",
          price: "5.5",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素B6和钾元素，有助于维持神经系统健康。",
          tips: "选购时应挑选表皮无斑点、无损伤的果实，手感结实、有分量感。",
        },
        {
          name: "牛油果",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "12.8",
          unit: "个",
          season: "全年",
          nutrition: "富含维生素C和膳食纤维，有助于促进消化和排毒。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "香梨",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "6.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和膳食纤维，有助于促进消化和排毒。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "沙棘",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "15.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
      ],
      9: [
        {
          name: "苹果",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "8.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素C和钾元素，有助于维持心血管健康。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "香蕉",
          image:
            "https://bkimg.cdn.bcebos.com/pic/b21c8701a18b87d6277f340e130828381e30fdc2",
          price: "5.5",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素B6和钾元素，有助于维持神经系统健康。",
          tips: "选购时应挑选表皮无斑点、无损伤的果实，手感结实、有分量感。",
        },
        {
          name: "猕猴桃",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "3.5",
          unit: "个",
          season: "全年",
          nutrition: "富含维生素C和膳食纤维，有助于促进消化和排毒。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "柚子",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "8.8",
          unit: "个",
          season: "全年",
          nutrition: "富含维生素C和膳食纤维，有助于促进消化和排毒。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "蒙越莓",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "12.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
      ],
      10: [
        {
          name: "苹果",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "8.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素C和钾元素，有助于维持心血管健康。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "香蕉",
          image:
            "https://bkimg.cdn.bcebos.com/pic/b21c8701a18b87d6277f340e130828381e30fdc2",
          price: "5.5",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素B6和钾元素，有助于维持神经系统健康。",
          tips: "选购时应挑选表皮无斑点、无损伤的果实，手感结实、有分量感。",
        },
        {
          name: "猕猴桃",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "3.5",
          unit: "个",
          season: "全年",
          nutrition: "富含维生素C和膳食纤维，有助于促进消化和排毒。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "柚子",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "8.8",
          unit: "个",
          season: "全年",
          nutrition: "富含维生素C和膳食纤维，有助于促进消化和排毒。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "柿子",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "6.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和膳食纤维，有助于促进消化和排毒。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "金桔",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "8.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
      ],
      11: [
        {
          name: "苹果",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "8.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素C和钾元素，有助于维持心血管健康。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "香蕉",
          image:
            "https://bkimg.cdn.bcebos.com/pic/b21c8701a18b87d6277f340e130828381e30fdc2",
          price: "5.5",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素B6和钾元素，有助于维持神经系统健康。",
          tips: "选购时应挑选表皮无斑点、无损伤的果实，手感结实、有分量感。",
        },
        {
          name: "柚子",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "8.8",
          unit: "个",
          season: "全年",
          nutrition: "富含维生素C和膳食纤维，有助于促进消化和排毒。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
      ],
      12: [
        {
          name: "苹果",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "8.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素C和钾元素，有助于维持心血管健康。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "香蕉",
          image:
            "https://bkimg.cdn.bcebos.com/pic/b21c8701a18b87d6277f340e130828381e30fdc2",
          price: "5.5",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素B6和钾元素，有助于维持神经系统健康。",
          tips: "选购时应挑选表皮无斑点、无损伤的果实，手感结实、有分量感。",
        },
        {
          name: "柚子",
          image:
            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a8794753f2ac65c1038b61e",
          price: "8.8",
          unit: "个",
          season: "全年",
          nutrition: "富含维生素C和膳食纤维，有助于促进消化和排毒。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
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
