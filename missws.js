var rule = {
    title:'Missav',
    host:'https://missav.ws',
    searchUrl:'/cn/search/**?filters=uncensored-leak&page=fypage',
    url:'cn/search/fyclass?page=fypage',
    headers:{
        'User-Agent':'Mozilla/5.0 (Linux; Android 13; SM-A536E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36 uacq'
    },
    timeout:5000,
    class_name:'高清&50路&ACZD&肛交&纪录片',//静态分类名称拼接
    class_url:'高清&50路&ACZD&肛交&纪录片',//静态分类标识拼接
    limit:5,
    play_parse:true,
    lazy:'',
    一级:.overflow-hidden.shadow-lg;img&&alt;img&&data-src;.absolute.bottom-1&&Text;a&&href',
    二级:'*',
	搜索:'.overflow-hidden.shadow-lg;img&&alt;img&&data-src;.absolute.bottom-1&&Text;a&&href',
	searchable:1,//是否启用全局搜索,
    quickSearch:1,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
}
