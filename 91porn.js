var rule = {
	title:'南柯电影网',
	模板:'mxpro',
    host:'https://gitlab.com/dizhi8',
    hostJs:'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});HOST = jsp.pdfh(html,".file-content p:eq(1)&&a&&href");log(HOST);',
	 url: '/fyfilter',
      headers: {
      'User-Agent': 'Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36',
    },
  filterable: 1, //是否启用分类筛选
  filter_url: '{{fl.cateId}}&page=fypage',
  filter: {
    "comic/av/cate?type=update": [{
      "key": "cateId",
      "name": "分类",
      "value": [
       {"n": "全部", "v": ""},
      {"n": "少女", "v": "comic/av/relvideo?model=1&type=tag&order=week"},
  {"n": "巨乳", "v": "comic/av/relvideo?model=2&type=tag&order=week"},
  {"n": "絲襪", "v": "comic/av/relvideo?model=4&type=tag&order=week"},
  {"n": "乳交", "v": "comic/av/relvideo?model=5&type=tag&order=week"},
  {"n": "美腿", "v": "comic/av/relvideo?model=14&type=tag&order=week"},
  {"n": "黑絲", "v": "comic/av/relvideo?model=19&type=tag&order=week"},
  {"n": "顏射", "v": "comic/av/relvideo?model=27&type=tag&order=week"},
  {"n": "潮吹", "v": "comic/av/relvideo?model=36&type=tag&order=week"},
  {"n": "人妻", "v": "comic/av/relvideo?model=37&type=tag&order=week"},
  {"n": "調教", "v": "comic/av/relvideo?model=38&type=tag&order=week"},
  {"n": "OL", "v": "comic/av/relvideo?model=39&type=tag&order=week"},
  {"n": "凌辱", "v": "comic/av/relvideo?model=42&type=tag&order=week"},
  {"n": "強●", "v": "comic/av/relvideo?model=119&type=tag&order=week"},
  {"n": "ＯＬ", "v": "comic/av/relvideo?model=2286&type=tag&order=week"},
  {"n": "中出", "v": "comic/av/relvideo?model=3&type=tag&order=week"},
  {"n": "多P", "v": "comic/av/relvideo?model=6&type=tag&order=week"},
  {"n": "學校", "v": "comic/av/relvideo?model=15&type=tag&order=week"},
  {"n": "眼鏡娘", "v": "comic/av/relvideo?model=20&type=tag&order=week"},
  {"n": "校服", "v": "comic/av/relvideo?model=28&type=tag&order=week"},
  {"n": "深喉", "v": "comic/av/relvideo?model=40&type=tag&order=week"},
  {"n": "老師", "v": "comic/av/relvideo?model=47&type=tag&order=week"},
  {"n": "肛交", "v": "comic/av/relvideo?model=85&type=tag&order=week"},
  {"n": "口交", "v": "comic/av/relvideo?model=57&type=tag&order=week"},
  {"n": "自拍", "v": "comic/av/relvideo?model=123&type=tag&order=week"},
  {"n": "高清", "v": "comic/av/relvideo?model=124&type=tag&order=week"},
  {"n": "企划", "v": "comic/av/relvideo?model=126&type=tag&order=week"},
  {"n": "素人", "v": "comic/av/relvideo?model=127&type=tag&order=week"},
  {"n": "单体作品", "v": "comic/av/relvideo?model=122&type=tag&order=week"},
  {"n": "羞辱", "v": "comic/av/relvideo?model=145&type=tag&order=week"},
  {"n": "按摩棒", "v": "comic/av/relvideo?model=161&type=tag&order=week"},
  {"n": "强制口交", "v": "comic/av/relvideo?model=174&type=tag&order=week"},
  {"n": "美少女", "v": "comic/av/relvideo?model=137&type=tag&order=week"},
  {"n": "自慰", "v": "comic/av/relvideo?model=162&type=tag&order=week"},
  {"n": "捆绑", "v": "comic/av/relvideo?model=253&type=tag&order=week"},
  {"n": "多人运动", "v": "comic/av/relvideo?model=132&type=tag&order=week"},
  {"n": "骑乘", "v": "comic/av/relvideo?model=154&type=tag&order=week"},
  {"n": "淫乱", "v": "comic/av/relvideo?model=167&type=tag&order=week"},
  {"n": "剧情", "v": "comic/av/relvideo?model=190&type=tag&order=week"}
      ]
    }],
 "黑料吃瓜?": [{
      "key": "cateId",
      "name": "分类",
      "value": [
       {"n": "全部", "v": ""},
  {"n": "今日吃瓜", "v": "/黑料吃瓜/今日吃瓜/最新"},
  {"n": "学生校园", "v": "/黑料吃瓜/学生校园/推荐"},
  {"n": "必看大瓜", "v": "/黑料吃瓜/必看大瓜/推荐"},
  {"n": "明星黑料", "v": "/黑料吃瓜/明星黑料/推荐"},
  {"n": "网红黑料", "v": "/黑料吃瓜/网红黑料/推荐"},
  {"n": "吃瓜新闻", "v": "/黑料吃瓜/吃瓜新闻/推荐"}
      ]
    }]},
  filter_def: {
    'comic/av/cate?type=update': {cateId: 'comic/av/cate?type=update'},
    '黑料吃瓜?': {cateId: '黑料吃瓜?'},
    'eu': {cateId: 'eu'}
  },
     searchUrl: '/comic/index/search?keyword=**&page=fypage',
  class_name:'视频&黑料吃瓜&日本AV&综艺',
  tab_remove:'失效',
   class_url:'comic/index/video?category=play&黑料吃瓜?&comic/av/cate?type=update&3',
      推荐: 'body&&.module-items;a.module-poster-item.module-item;.module-poster-item-title&&Text;img&&data-original;.module-item-note&&Text;a.overflow-hidden&&href',
       一级: 'ul.grid[class*="grid-cols-"] li;img&&alt;img&&data-src;.text-white&&Text;a&&href',
      二级:'*',
lazy: "js:\n  let html = request(input);\n  let hconf = html.match(/r player_.*?=(.*?)</)[1];\n  let json = JSON5.parse(hconf);\n  let url = json.url;\n  if (json.encrypt == '1') {\n    url = unescape(url);\n  } else if (json.encrypt == '2') {\n    url = unescape(base64Decode(url));\n  }\n  if (/\\.(mp4?|m3u8|mp4|m4a|mp3)/.test(url)) {\n    input = {\n      parse: 0,\n      jx: 0,\n      url: url,\n    };\n  } else {\n    input = url && url.startsWith('http') && tellIsJx(url) ? {parse:0,jx:1,url:url}:input;\n  }",
	    sniffer:1,
    // 辅助嗅探规则
    isVideo:"http((?!http).){26,}\\.(media-ynkm-fy-home|sg.storage.bunnycdn.com|m3u8|mp4|flv|avi|mkv|wmv|mpg|mpeg|mov|ts|3gp|rm|rmvb|asf|m4a|mp3|wma)",
  		搜索:'*'
}
