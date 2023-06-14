// ==UserScript==
// @name         B站搜索页美化
// @namespace    http://tampermonkey.net/
// @homepage     https://github.com/Trrrrw/UserScript
// @version      0.1.0
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
        upBtnSwitch = 0;                                                                            //投稿按钮是否显示，1-显示；0-删除

    //删除元素
    GM_addStyle('#biliMainFooter{display:none !important}')                                 //footer
    GM_addStyle('.side-buttons{display:none !important}')                                   //右下客服按钮
    GM_addStyle('.right-entry-text{display:none !important}')                               //右上按钮文字
    GM_addStyle('.center-title-text{display:none !important}')                              //搜索栏上方文字“搜索”
    GM_addStyle('.left-entry > .v-popover-wrap:nth-of-type(n+2){display:none !important}')  //左上元素
    GM_addStyle('.mini-header__title{display:none !important}')                             //左上bilibili图标右侧“首页”
    GM_addStyle('.search-panel:last-child{display:none !important}')
    if (!upBtnSwitch) {
        GM_addStyle('.right-entry-item--upload{display:none !important}')                   //投稿按钮
    }

    //更改样式
    //左上bilibili图标样式
    GM_addStyle('.left-entry__title{margin-right: 0px !important}')
    //添加背景
    GM_addStyle('#i_cecream{background: transparent;}')
    GM_addStyle('body{background: url(' + bgimg + ');}')
    GM_addStyle('body{background-size: cover;}')
    //header模糊效果
    GM_addStyle('#bili-header-container{background: transparent !important}')
    GM_addStyle('.bili-header{background: transparent !important;}')
    GM_addStyle('.bili-header__bar{background: transparent !important;backdrop-filter: blur(10px) !important;}')
    //搜索框模糊效果
    GM_addStyle('.search-input-wrap{background: transparent !important;backdrop-filter:blur(10px) !important;}')
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
                var honePage = `<a href="//www.bilibili.com" target="_blank" class="channel-panel__item" data-v-5983d515="">
                <svg id="channel-icon-activit" fill="#333" viewBox="0 0 1024 1024" class="navigation-channel-icon" data-v-5983d515=""><path d="M518.656 475.904a223.488 223.488 0 0 1-23.296-75.52 366.08 366.08 0 0 1 81.408 14.592 623.104 623.104 0 0 1-58.112 60.928m-69.888-119.04c-11.52-58.112-8.704-55.296-25.6-156.928a265.984 265.984 0 0 0-78.336 46.592c51.2 104.448 60.928 165.376 92.928 290.304 51.2-5.632 211.968-40.704 226.56-130.56 8.704-64-142.336-64-215.04-49.408m37.12 267.264a263.424 263.424 0 0 0-107.52 69.632l43.52 153.6a47.872 47.872 0 0 1-92.928 23.296L216.576 473.088l-72.704-204.8c2.816-5.632 5.888-8.704 8.704-14.336l-14.592-51.2a46.08 46.08 0 0 1 32-57.856 47.616 47.616 0 0 1 58.112 34.304v2.816a334.848 334.848 0 0 1 98.816-43.52c177.152-46.592 203.264 55.04 429.824 23.296L890.368 588.8c-171.52 90.112-232.448-11.52-403.712 35.072" fill="#F39800"></path></svg>
                <span class="name" data-v-5983d515="">首页</span>
                </a>`;
                document.getElementsByClassName('channel-panel__column')[0].insertAdjacentHTML('afterbegin', honePage);
            }
        }
        //搜索结果
        window.addEventListener('urlchange', function (event) {
            const newUrl = event.state ? event.state.url : window.location.href;
            if (newUrl.includes('keyword')) {
                //背景模糊search-layout
                GM_addStyle('#i_cecream{background: #ffffff !important;}')
            } else {
                //移除背景模糊
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

