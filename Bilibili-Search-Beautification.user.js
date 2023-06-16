// ==UserScript==
// @name         B站搜索页美化
// @namespace    http://tampermonkey.net/
// @homepage     https://github.com/Trrrrw/UserScript
// @version      0.1.1
// @description  美化search.bilibili.com页面
// @author       Trrrrw
// @match        https://search.bilibili.com/*
// @grant        GM_addStyle
// @grant        GM_addElement
// @grant        window.onload
// @grant        window.onurlchange
// @icon         https://www.bilibili.com/favicon.ico?v=1
// @downloadURL  https://greasyfork.org/scripts/458903-b%E7%AB%99%E6%90%9C%E7%B4%A2%E9%A1%B5%E7%BE%8E%E5%8C%96/code/B%E7%AB%99%E6%90%9C%E7%B4%A2%E9%A1%B5%E7%BE%8E%E5%8C%96.user.js
// @updateURL    https://greasyfork.org/scripts/458903-b%E7%AB%99%E6%90%9C%E7%B4%A2%E9%A1%B5%E7%BE%8E%E5%8C%96/code/B%E7%AB%99%E6%90%9C%E7%B4%A2%E9%A1%B5%E7%BE%8E%E5%8C%96.user.js
// @license      GPL-3.0
// ==/UserScript==


(function () {
    //设置
    var bgimg = 'https://i0.hdslb.com/bfs/new_dyn/2e762660113a84fe20affb3ec16eba386823116.jpg',     //背景图片链接，可将此处链接修改
        upBtnSwitch = 1;                              //投稿按钮是否显示，1-显示；0-删除

    //删除元素
    GM_addStyle('#biliMainFooter{display:none !important}')                                 //footer
    GM_addStyle('.side-buttons{display:none !important}')                                   //右下客服按钮
    GM_addStyle('.right-entry-text{display:none !important}')                               //右上按钮文字
    GM_addStyle('.vip-wrap{display:none !important}')                                       //右上大会员
    GM_addStyle('.center-title-text{display:none !important}')                              //搜索栏上方文字“搜索”
    GM_addStyle('.left-entry > .v-popover-wrap:nth-of-type(n+2){display:none !important}')  //左上元素
    GM_addStyle('.mini-header__title{display:none !important}')                             //左上bilibili图标右侧“首页”
    GM_addStyle('.search-panel:last-child{display:none !important}')
    if (!upBtnSwitch) {
        GM_addStyle('.right-entry-item--upload{display:none !important}')                   //投稿按钮
    } else {
        GM_addStyle('.bili-header .header-upload-entry{background: #00aeec !important;border-radius: 30px;}')//投稿按钮颜色圆角
    }

    //更改样式
    // //左上bilibili图标样式
    // GM_addStyle('.left-entry__title{margin-right: 0px !important}')
    //添加背景
    GM_addStyle('#i_cecream{background: transparent;}')
    GM_addStyle('body{background: url(' + bgimg + ');}')
    GM_addStyle('body{background-size: cover;}')
    //header模糊效果
    GM_addStyle('#bili-header-container{background: transparent !important}')
    GM_addStyle('.bili-header{background: transparent !important;}')
    GM_addStyle('.bili-header__bar{background: transparent !important;backdrop-filter: blur(10px) !important;}')
    //header样式
    GM_addStyle('.left-entry{display: none !important}')
    GM_addStyle('.bili-header .bili-header__bar{width: auto;right: 60px;top: 20px;border-radius: 30px;}')
    GM_addStyle('.bili-header .right-entry{margin-left: 5px !important}')
    GM_addStyle('.mini-header{box-shadow: 0px 3px 5px 1px #00000038 !important;}')
    //搜索框模糊效果
    GM_addStyle('.search-input-wrap{background: transparent !important;backdrop-filter:blur(10px) !important;}')
    //搜索框圆角、阴影
    GM_addStyle('.search-input-wrap{border-radius: 30px !important;box-shadow: 0px 3px 5px 1px #00000038 !important;}')
    GM_addStyle('.vui_button{border-radius: 30px !important}')
    //动态等下拉框位置
    GM_addStyle('.v-popover{padding-top: 25px !important;}')
    //右上图标颜色
    GM_addStyle('.right-entry-icon{color: #00aeec !important;}')
    // //模糊动画
    // GM_addElement('style', {
    //     textContent: '@keyframes dim {from {backdrop-filter: blur(0px);} to {backdrop-filter: blur(10px);}}'
    // });
    window.onload = function () {
        //搜索框预览文字
        document.getElementsByClassName('search-input-el')[0].placeholder = ''
        //将左上图标链接改为搜索页
        document.getElementsByClassName('left-entry__title')[0].href = '//search.bilibili.com/all';
        //将首页添加至悬浮弹窗中
        document.getElementsByClassName('v-popover-wrap')[0].onmouseenter = function () {
            if (document.getElementsByClassName('channel-panel__column')[0].children[0].innerText != '首页') {
                GM_addStyle('.v-popover:nth-of-type(1){display: none !important}')//左上按钮下拉窗
                // var honePage = `<a href="//www.bilibili.com" target="_blank" class="channel-panel__item" data-v-5983d515="">
                // <svg id="channel-icon-activit" fill="#333" viewBox="0 0 1024 1024" class="navigation-channel-icon" data-v-5983d515=""><path stroke="null" d="m292.3511,200.00617c-16.7652,-16.92238 -16.7652,-45.0216 0,-61.94355c15.93412,-16.08349 41.17678,-16.08349 57.1109,0l88.85974,89.69126c2.52422,2.54865 4.66894,5.35021 6.4333,8.32926l134.38332,0c1.76772,-2.97905 3.91242,-5.78061 6.43414,-8.32926l88.8589,-89.69126c15.93454,-16.08349 41.17678,-16.08349 57.11132,0c16.76812,16.92195 16.76812,45.02116 0,61.94355l-35.7396,36.07698l26.64134,0c92.53674,0 167.55556,78.49163 167.55556,175.31606l0,241.30195c0,96.82267 -75.01882,175.31606 -167.55556,175.31606l-418.88889,0c-92.53842,0 -167.55556,-78.49339 -167.55556,-175.31606l0,-241.30239c0,-96.82443 75.01714,-175.31562 167.55556,-175.31562l24.5381,0l-35.74254,-36.07698l-0.00001,0zm11.20444,120.63892c-46.26922,0 -83.77778,39.24582 -83.77778,87.65802l0,247.49237c0,48.41354 37.50856,87.65802 83.77778,87.65802l418.88889,0c46.27046,0 83.77778,-39.2445 83.77778,-87.65802l0,-247.49237c0,-48.41222 -37.50732,-87.65802 -83.77778,-87.65802l-418.88889,0zm41.88888,170.67194c0,-24.20588 18.7545,-43.82902 41.88888,-43.82902c23.1344,0 41.88888,19.62312 41.88888,43.82902l0,39.18446c0,24.20676 -18.7545,43.82902 -41.88888,43.82902c-23.1344,0 -41.88888,-19.62224 -41.88888,-43.82902l0,-39.18446zm293.22222,-43.82902c-23.13524,0 -41.88888,19.62312 -41.88888,43.82902l0,39.18446c0,24.20676 18.75366,43.82902 41.88888,43.82902c23.13524,0 41.88888,-19.62224 41.88888,-43.82902l0,-39.18446c0,-24.20588 -18.75366,-43.82902 -41.88888,-43.82902z" fill="#00aeec"/></svg>
                // <span class="name" data-v-5983d515="">首页</span>
                // </a>`;
                // document.getElementsByClassName('channel-panel__column')[0].insertAdjacentHTML('afterbegin', honePage);
            }
        }
        //搜索结果
        window.addEventListener('urlchange', function (event) {
            const newUrl = event.state ? event.state.url : window.location.href;
            if (newUrl.includes('keyword')) {
                GM_addStyle('.left-entry{display:block !important}')
                GM_addStyle('#i_cecream{background: #ffffff !important;}')//移除背景模糊
            } else {
                //背景模糊
                GM_addStyle('#i_cecream{background: transparent !important;}')
            }
        });
        //搜索栏选中模糊
        document.onmouseup = function (e) {
            if (e.button == 0) {
                if (e.srcElement.className == 'search-input-el' && document.body.style.backdropFilter == '') {
                    // document.body.style.animation = 'dim 1s forwards';
                    document.body.style.backdropFilter = 'blur(10px)';
                } else if (e.srcElement.className != 'search-input-el' && document.body.style.backdropFilter == 'blur(10px)') {
                    // document.body.style.animation = 'dim 1s reverse';
                    document.body.style.backdropFilter = '';
                }
            }
        };
    }
})();

