﻿var rule = {
    title:'A8音乐',
    host:'http://v.a8.com',
    url:'/category/fyclass?p=fypage',
    searchUrl:'/search?t=**',
    searchable:2,
    quickSearch:0,
    headers:{
        'User-Agent':'MOBILE_UA',
    },
    class_parse: '.categorys-inner li:gt(1):lt(7);a&&Text;a&&href;.*/(\\d+)',
    timeout:5000,
    limit:6,
    play_parse:true,
    lazy:'js:let html=request(input);let purl=jsp.pdfh(html,".video-js&&source&&src");input={jx:0,url:purl,parse:0}',
    推荐: '.v-list-body:eq(1)&&.v_item;*;*;*;*',
    一级: '.list-div&&.v_item;img&&alt;img&&data-original;.v-time&&Text;a&&href',
    二级:'*',
    搜索:'.v-list-body&&.v_item;*;*;*;*',
}