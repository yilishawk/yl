var rule = {
  title: '',
  host: 'https://kan.kanav.site/',
  url: '/index.php/vod/show/id/fyclass/page/fypage.html',
  searchUrl: '/index.php/vod/search/page/fypage/wd/**.html',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'UC_UA',
  },
  class_parse: '.header-item li;a&&Text;a&&href;.*/(.*?).html',
  cate_exclude:'加速狗|标签|热门',
  play_parse: true,
  lazy: "js:\n  let html = request(input);\n  let hconf = html.match(/r player_.*?=(.*?)</)[1];\n  let json = JSON5.parse(hconf);\n  let url = json.url;\n  if (json.encrypt == '1') {\n    url = unescape(url);\n  } else if (json.encrypt == '2') {\n    url = unescape(base64Decode(url));\n  }\n  if (/\\.(m3u8|mp4|m4a|mp3)/.test(url)) {\n    input = {\n      parse: 0,\n      jx: 0,\n      url: url,\n    };\n  } else {\n    input;\n  }",
  limit: 6,
  double: true,
  推荐: 'body .post-list;.col-md-3;img&&alt;img&&data-original;.fed-list-remarks&&Text;a&&href',
  一级: '.col-sm-6.col-xs-6;img&&alt;img&&data-original;.fed-list-remarks&&Text;a&&href',
  二级:'*',
  搜索: '*',
}