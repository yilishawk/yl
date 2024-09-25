var rule = {
    title:'Missav',
    host:'https://missav.ws',
    searchUrl:'/cn/search/**?filters=uncensored-leak&page=fypage',
    url:'cn/search/fyclass?fyfilter',
filter_url:'filters={{fl.class}}&page=fypage',
    headers:{
        'User-Agent':'Mozilla/5.0 (Linux; Android 13; SM-A536E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36 uacq'
    },
	filter: {
		"高清":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"高清"},{"n":"女同性恋","v":"女同性恋"},{"n":"按摩棒","v":"按摩棒"},{"n":"SM","v":"SM"},{"n":"肛门","v":"肛门"},{"n":"乱交","v":"乱交"},{"n":"玩具","v":"玩具"},{"n":"母亲","v":"母亲"},{"n":"野外露出","v":"野外露出"},{"n":"全高清 (FHD)","v":"全高清 (FHD)"}]},{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"单人作品","v":"individual"},{"n":"无码流出","v":"uncensored-leak"},{"n":"无码影片","v":"uncensored"},{"n":"日本AV","v":"jav"},{"n":"中文字幕","v":"chinese-subtitle"}]}],
		"ACZD":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"高清"},{"n":"拷问","v":"拷问"},{"n":"3P、4P","v":"3P、4P"},{"n":"灌肠","v":"灌肠"},{"n":"异物插入","v":"异物插入"},{"n":"假阳具","v":"假阳具"},{"n":"拳头","v":"拳头"},{"n":"五十","v":"五十"},{"n":"黑人","v":"黑人"},{"n":"全高清 (FHD)","v":"全高清 (FHD)"}]},{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"单人作品","v":"individual"},{"n":"无码流出","v":"uncensored-leak"},{"n":"无码影片","v":"uncensored"},{"n":"日本AV","v":"jav"},{"n":"中文字幕","v":"chinese-subtitle"}]}],
		"肛交":[{"key":"cateId","name":"剧情","value":[{"n":"全部","v":""},{"n":"屁股偏好","v":"屁股偏好"},{"n":"肛门","v":"肛门"},{"n":"大屁股","v":"大屁股"},{"n":"中出","v":"中出"},{"n":"人妻","v":"人妻"},{"n":"熟女","v":"熟女"},{"n":"素人","v":"素人"},{"n":"多人运动","v":"多人运动"},{"n":"4小时以上","v":"4小时以上"},{"n":"偷拍","v":"偷拍"},{"n":"自慰","v":"自慰"},{"n":"已婚女人","v":"已婚女人"}]},{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"单人作品","v":"individual"},{"n":"无码流出","v":"uncensored-leak"},{"n":"无码影片","v":"uncensored"},{"n":"日本AV","v":"jav"},{"n":"中文字幕","v":"chinese-subtitle"}]}]
	},
	filter_def:{
		高清:{cateId:'高清'},
		肛交:{cateId:'肛交'},
        ACZD:{cateId:'ACZD'}
	},
    timeout:5000,
    class_name:'亨利&麻豆&高清&五十&肛交&ACZD&肛交&纪录片',//静态分类名称拼接
    class_url:'亨利&麻豆&高清&五十&肛交&ACZD&肛交&纪录片',//静态分类标识拼接
    limit:5,
    play_parse:true,
    lazy:'',
    一级:'.overflow-hidden.shadow-lg;img&&alt;img&&data-src;.absolute.bottom-1&&Text;a&&href',
    二级:'*',
	搜索:'.overflow-hidden.shadow-lg;img&&alt;img&&data-src;.absolute.bottom-1&&Text;a&&href',
	searchable:1,//是否启用全局搜索,
    quickSearch:1,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
}
