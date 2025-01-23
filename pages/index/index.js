// index.js
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
    solarTerm: "人间小满",
    recommendFruits: "苹果、沃柑、菠萝",
    warmTips: "苹果虽然好吃也不要多吃哟，记得适量，爱惜你的身体~",
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

  updateSeasonalFruits() {
    const fruitsData = {
      1: [
        {
          name: "苹果",
          image:
            "https://cdn.pixabay.com/photo/2017/09/26/13/21/apple-2788599_1280.jpg",
          price: "8.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素C和钾元素，有助于维持心血管健康。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "香蕉",
          image:
            "https://cdn.pixabay.com/photo/2016/01/03/17/59/bananas-1119790_1280.jpg",
          price: "5.5",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素B6和钾元素，有助于维持神经系统健康。",
          tips: "选购时应挑选表皮无斑点、无损伤的果实，手感结实、有分量感。",
        },
        {
          name: "沃柑",
          image:
            "https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_1280.jpg",
          price: "6.5",
          unit: "斤",
          season: "冬季",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "菠萝",
          image:
            "https://cdn.pixabay.com/photo/2017/03/11/18/13/pineapple-2135636_1280.jpg",
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
            "https://cdn.pixabay.com/photo/2017/09/26/13/21/apple-2788599_1280.jpg",
          price: "8.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素C和钾元素，有助于维持心血管健康。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "香蕉",
          image:
            "https://cdn.pixabay.com/photo/2016/01/03/17/59/bananas-1119790_1280.jpg",
          price: "5.5",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素B6和钾元素，有助于维持神经系统健康。",
          tips: "选购时应挑选表皮无斑点、无损伤的果实，手感结实、有分量感。",
        },
        {
          name: "沃柑",
          image:
            "https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_1280.jpg",
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
            "https://cdn.pixabay.com/photo/2017/09/26/13/21/apple-2788599_1280.jpg",
          price: "8.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素C和钾元素，有助于维持心血管健康。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "香蕉",
          image:
            "https://cdn.pixabay.com/photo/2016/01/03/17/59/bananas-1119790_1280.jpg",
          price: "5.5",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素B6和钾元素，有助于维持神经系统健康。",
          tips: "选购时应挑选表皮无斑点、无损伤的果实，手感结实、有分量感。",
        },
        {
          name: "沃柑",
          image:
            "https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_1280.jpg",
          price: "6.5",
          unit: "斤",
          season: "冬季",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "嘉宝果",
          image:
            "https://cdn.pixabay.com/photo/2018/05/08/20/19/pomegranate-3383814_1280.jpg",
          price: "25.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "琵琶",
          image:
            "https://cdn.pixabay.com/photo/2016/04/15/08/04/fruit-1330459_1280.jpg",
          price: "8.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和膳食纤维，有助于促进消化和排毒。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "青枣",
          image:
            "https://cdn.pixabay.com/photo/2018/05/26/18/40/dates-3431859_1280.jpg",
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
            "https://cdn.pixabay.com/photo/2017/09/26/13/21/apple-2788599_1280.jpg",
          price: "8.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素C和钾元素，有助于维持心血管健康。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "香蕉",
          image:
            "https://cdn.pixabay.com/photo/2016/01/03/17/59/bananas-1119790_1280.jpg",
          price: "5.5",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素B6和钾元素，有助于维持神经系统健康。",
          tips: "选购时应挑选表皮无斑点、无损伤的果实，手感结实、有分量感。",
        },
        {
          name: "沃柑",
          image:
            "https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_1280.jpg",
          price: "6.5",
          unit: "斤",
          season: "冬季",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "菠萝",
          image:
            "https://cdn.pixabay.com/photo/2017/03/11/18/13/pineapple-2135636_1280.jpg",
          price: "12.8",
          unit: "个",
          season: "全年",
          nutrition: "富含维生素C和膳食纤维，有助于促进消化和排毒。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "嘉宝果",
          image:
            "https://cdn.pixabay.com/photo/2018/05/08/20/19/pomegranate-3383814_1280.jpg",
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
            "https://cdn.pixabay.com/photo/2017/09/26/13/21/apple-2788599_1280.jpg",
          price: "8.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素C和钾元素，有助于维持心血管健康。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "香蕉",
          image:
            "https://cdn.pixabay.com/photo/2016/01/03/17/59/bananas-1119790_1280.jpg",
          price: "5.5",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素B6和钾元素，有助于维持神经系统健康。",
          tips: "选购时应挑选表皮无斑点、无损伤的果实，手感结实、有分量感。",
        },
        {
          name: "菠萝",
          image:
            "https://cdn.pixabay.com/photo/2017/03/11/18/13/pineapple-2135636_1280.jpg",
          price: "12.8",
          unit: "个",
          season: "全年",
          nutrition: "富含维生素C和膳食纤维，有助于促进消化和排毒。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "嘉宝果",
          image:
            "https://cdn.pixabay.com/photo/2018/05/08/20/19/pomegranate-3383814_1280.jpg",
          price: "25.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "荔枝",
          image:
            "https://cdn.pixabay.com/photo/2017/07/06/10/01/lychee-2477534_1280.jpg",
          price: "15.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "桑葚",
          image:
            "https://cdn.pixabay.com/photo/2018/06/04/13/36/mulberry-3453071_1280.jpg",
          price: "15.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "青梅",
          image:
            "https://cdn.pixabay.com/photo/2016/07/22/09/59/fruits-1534494_1280.jpg",
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
            "https://cdn.pixabay.com/photo/2017/09/26/13/21/apple-2788599_1280.jpg",
          price: "8.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素C和钾元素，有助于维持心血管健康。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "香蕉",
          image:
            "https://cdn.pixabay.com/photo/2016/01/03/17/59/bananas-1119790_1280.jpg",
          price: "5.5",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素B6和钾元素，有助于维持神经系统健康。",
          tips: "选购时应挑选表皮无斑点、无损伤的果实，手感结实、有分量感。",
        },
        {
          name: "红毛丹",
          image: "https://example.com/placeholder.jpg",
          price: "12.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "圣女果",
          image: "https://example.com/placeholder.jpg",
          price: "6.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "菠萝蜜",
          image: "https://example.com/placeholder.jpg",
          price: "15.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和膳食纤维，有助于促进消化和排毒。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "椰子",
          image: "https://example.com/placeholder.jpg",
          price: "12.8",
          unit: "个",
          season: "全年",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "杨梅",
          image: "https://example.com/placeholder.jpg",
          price: "18.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "释迦果",
          image: "https://example.com/placeholder.jpg",
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
            "https://cdn.pixabay.com/photo/2017/09/26/13/21/apple-2788599_1280.jpg",
          price: "8.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素C和钾元素，有助于维持心血管健康。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "香蕉",
          image:
            "https://cdn.pixabay.com/photo/2016/01/03/17/59/bananas-1119790_1280.jpg",
          price: "5.5",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素B6和钾元素，有助于维持神经系统健康。",
          tips: "选购时应挑选表皮无斑点、无损伤的果实，手感结实、有分量感。",
        },
        {
          name: "百香果",
          image: "https://example.com/placeholder.jpg",
          price: "12.8",
          unit: "个",
          season: "全年",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "哈密瓜",
          image: "https://example.com/placeholder.jpg",
          price: "15.8",
          unit: "个",
          season: "全年",
          nutrition: "富含维生素C和膳食纤维，有助于促进消化和排毒。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "蓝莓",
          image: "https://example.com/placeholder.jpg",
          price: "25.8",
          unit: "盒",
          season: "全年",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "黄皮果",
          image: "https://example.com/placeholder.jpg",
          price: "8.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和抗氧化剂，有助于增强免疫力和抗衰老。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "雪梨",
          image: "https://example.com/placeholder.jpg",
          price: "6.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和膳食纤维，有助于促进消化和排毒。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "无花果",
          image: "https://example.com/placeholder.jpg",
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
            "https://cdn.pixabay.com/photo/2017/09/26/13/21/apple-2788599_1280.jpg",
          price: "8.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素C和钾元素，有助于维持心血管健康。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "香蕉",
          image:
            "https://cdn.pixabay.com/photo/2016/01/03/17/59/bananas-1119790_1280.jpg",
          price: "5.5",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素B6和钾元素，有助于维持神经系统健康。",
          tips: "选购时应挑选表皮无斑点、无损伤的果实，手感结实、有分量感。",
        },
        {
          name: "牛油果",
          image: "https://example.com/placeholder.jpg",
          price: "12.8",
          unit: "个",
          season: "全年",
          nutrition: "富含维生素C和膳食纤维，有助于促进消化和排毒。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "香梨",
          image: "https://example.com/placeholder.jpg",
          price: "6.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和膳食纤维，有助于促进消化和排毒。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "沙棘",
          image: "https://example.com/placeholder.jpg",
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
            "https://cdn.pixabay.com/photo/2017/09/26/13/21/apple-2788599_1280.jpg",
          price: "8.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素C和钾元素，有助于维持心血管健康。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "香蕉",
          image:
            "https://cdn.pixabay.com/photo/2016/01/03/17/59/bananas-1119790_1280.jpg",
          price: "5.5",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素B6和钾元素，有助于维持神经系统健康。",
          tips: "选购时应挑选表皮无斑点、无损伤的果实，手感结实、有分量感。",
        },
        {
          name: "猕猴桃",
          image: "https://example.com/placeholder.jpg",
          price: "3.5",
          unit: "个",
          season: "全年",
          nutrition: "富含维生素C和膳食纤维，有助于促进消化和排毒。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "柚子",
          image: "https://example.com/placeholder.jpg",
          price: "8.8",
          unit: "个",
          season: "全年",
          nutrition: "富含维生素C和膳食纤维，有助于促进消化和排毒。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "蒙越莓",
          image: "https://example.com/placeholder.jpg",
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
            "https://cdn.pixabay.com/photo/2017/09/26/13/21/apple-2788599_1280.jpg",
          price: "8.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素C和钾元素，有助于维持心血管健康。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "香蕉",
          image:
            "https://cdn.pixabay.com/photo/2016/01/03/17/59/bananas-1119790_1280.jpg",
          price: "5.5",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素B6和钾元素，有助于维持神经系统健康。",
          tips: "选购时应挑选表皮无斑点、无损伤的果实，手感结实、有分量感。",
        },
        {
          name: "猕猴桃",
          image: "https://example.com/placeholder.jpg",
          price: "3.5",
          unit: "个",
          season: "全年",
          nutrition: "富含维生素C和膳食纤维，有助于促进消化和排毒。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "柚子",
          image: "https://example.com/placeholder.jpg",
          price: "8.8",
          unit: "个",
          season: "全年",
          nutrition: "富含维生素C和膳食纤维，有助于促进消化和排毒。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "柿子",
          image: "https://example.com/placeholder.jpg",
          price: "6.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含维生素C和膳食纤维，有助于促进消化和排毒。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "金桔",
          image: "https://example.com/placeholder.jpg",
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
            "https://cdn.pixabay.com/photo/2017/09/26/13/21/apple-2788599_1280.jpg",
          price: "8.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素C和钾元素，有助于维持心血管健康。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "香蕉",
          image:
            "https://cdn.pixabay.com/photo/2016/01/03/17/59/bananas-1119790_1280.jpg",
          price: "5.5",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素B6和钾元素，有助于维持神经系统健康。",
          tips: "选购时应挑选表皮无斑点、无损伤的果实，手感结实、有分量感。",
        },
        {
          name: "柚子",
          image: "https://example.com/placeholder.jpg",
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
            "https://cdn.pixabay.com/photo/2017/09/26/13/21/apple-2788599_1280.jpg",
          price: "8.8",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素C和钾元素，有助于维持心血管健康。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
        {
          name: "香蕉",
          image:
            "https://cdn.pixabay.com/photo/2016/01/03/17/59/bananas-1119790_1280.jpg",
          price: "5.5",
          unit: "斤",
          season: "全年",
          nutrition: "富含膳食纤维、维生素B6和钾元素，有助于维持神经系统健康。",
          tips: "选购时应挑选表皮无斑点、无损伤的果实，手感结实、有分量感。",
        },
        {
          name: "柚子",
          image: "https://example.com/placeholder.jpg",
          price: "8.8",
          unit: "个",
          season: "全年",
          nutrition: "富含维生素C和膳食纤维，有助于促进消化和排毒。",
          tips: "选购时应挑选表皮光滑、有光泽、颜色鲜艳的果实，手感结实、有分量感。",
        },
      ],
    };

    const monthFruits = fruitsData[this.data.currentMonth] || [];
    this.setData({
      seasonalFruits: monthFruits,
    });
  },
});
