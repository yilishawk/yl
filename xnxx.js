var rule = {
  title: '',
  host: 'https://www.xnxx-ru.com',
  url: '/search/hd-only/fyclass/fypage',
  searchUrl: '/search/hd-only/fyclass/fypage',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; ) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.6478.61 Chrome/126.0.6478.61 Not/A)Brand/8 Safari/537.36',
  },
      class_name:'国产&中国&javanal&综艺',//静态分类名称拼接
    class_url:'国产&中国&jav+anal&4',//静态分类标识拼接
  //class_parse: '.navbar-items li:gt(0):lt(10);a&&Text;a&&href;/(\\d+)',
  play_parse: true,
  //lazy: "js:\n  let html = request(input);\n  let hconf = html.match(/r player_.*?=(.*?)</)[1];\n  let json = JSON5.parse(hconf);\n  let url = json.url;\n  if (json.encrypt == '1') {\n    url = unescape(url);\n  } else if (json.encrypt == '2') {\n    url = unescape(base64Decode(url));\n  }\n  if (/\\.(m3u8|mp4|m4a|mp3)/.test(url)) {\n    input = {\n      parse: 0,\n      jx: 0,\n      url: url,\n    };\n  } else {\n    input;\n  }",
  limit: 6,
  double: true,
  推荐: '.tab-list.active;a.module-poster-item.module-item;.module-poster-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href',
  一级: '.mozaique.cust-nb-cols;a:eq(2)&&title;img&&data-src;.module-item-note&&Text;a&&href',
  二级: '*',
  搜索: 'body .module-item;.module-card-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href;.module-info-item-content&&Text',
}
