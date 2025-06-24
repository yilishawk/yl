var rule = {
	title:'南柯电影网',
	模板:'mxpro',
    host:'https://gitlab.com/dizhi8',
    hostJs:'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});HOST = jsp.pdfh(html,".file-content p:eq(1)&&a&&href");log(HOST);',
	url:'/fyclass&page=fypage',
     searchUrl: '/comic/index/search?keyword=**&page=fypage',
	filterable:1,//是否启用分类
  class_name:'视频&黑料吃瓜&日本AV&综艺',
  tab_remove:'失效',
图片来源:'@Referer=https://pic.rwywfq.cn/@User-Agent=MOBILE_UA',
   class_url:'comic/index/video?category=play&黑料吃瓜?&comic/av/cate?type=update&3',
      推荐: 'body&&.module-items;a.module-poster-item.module-item;.module-poster-item-title&&Text;img&&data-original;.module-item-note&&Text;a&&href',
       一级: 'ul.grid[class*="grid-cols-"] li;.line-clamp-2,h2.post-item-title&&Text;img,.h-full&&data-src;.post-item-desc,.text-white&&Text;a&&href',
      二级:'*',
lazy: "js:\n  let html = request(input);\n  let hconf = html.match(/r player_.*?=(.*?)</)[1];\n  let json = JSON5.parse(hconf);\n  let url = json.url;\n  if (json.encrypt == '1') {\n    url = unescape(url);\n  } else if (json.encrypt == '2') {\n    url = unescape(base64Decode(url));\n  }\n  if (/\\.(mp4?|m3u8|mp4|m4a|mp3)/.test(url)) {\n    input = {\n      parse: 0,\n      jx: 0,\n      url: url,\n    };\n  } else {\n    input = url && url.startsWith('http') && tellIsJx(url) ? {parse:0,jx:1,url:url}:input;\n  }",
	    sniffer:1,
    // 辅助嗅探规则
    isVideo:"http((?!http).){26,}\\.(media-ynkm-fy-home|sg.storage.bunnycdn.com|m3u8|mp4|flv|avi|mkv|wmv|mpg|mpeg|mov|ts|3gp|rm|rmvb|asf|m4a|mp3|wma)",
  		搜索:'*'
}
