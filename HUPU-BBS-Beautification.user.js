// ==UserScript==
// @name         虎扑网页端优化
// @namespace    http://tampermonkey.net/
// @homepage     https://github.com/Trrrrw/UserScript
// @version      0.1.1
// @description  优化虎扑网页端
// @author       Trrrrw
// @match        https://bbs.hupu.com/*
// @grant        GM_addStyle
// @grant        GM_addElement
// @grant        window.onload
// @grant        window.history
// @icon         https://w1.hoopchina.com.cn/images/pc/old/favicon.ico
// @downloadURL  https://greasyfork.org/scripts/459013-%E8%99%8E%E6%89%91%E7%BD%91%E9%A1%B5%E7%AB%AF%E4%BC%98%E5%8C%96/code/%E8%99%8E%E6%89%91%E7%BD%91%E9%A1%B5%E7%AB%AF%E4%BC%98%E5%8C%96.user.js
// @updateURL    https://greasyfork.org/scripts/459013-%E8%99%8E%E6%89%91%E7%BD%91%E9%A1%B5%E7%AB%AF%E4%BC%98%E5%8C%96/code/%E8%99%8E%E6%89%91%E7%BD%91%E9%A1%B5%E7%AB%AF%E4%BC%98%E5%8C%96.user.js
// @license      GPL-3.0
// ==/UserScript==

function set_title() {
    for (var k = 0; k < document.getElementsByClassName('p-title').length; k++) {
        document.getElementsByClassName('p-title')[k].target = '_self';
    }
}

(function () {
    //删除元素
    GM_addStyle('.hu-pc-navigation-type{display:none !important;}')//话题广场
    GM_addStyle('.hu-pc-navigation-topic-type-item{display:none !important;}')
    GM_addStyle('.backToTop_2mZa6{bottom:10px;right:8px;}')//右下按钮
    GM_addStyle('.index_backToTop__rx3__{bottom:10px;right:8px;}')//帖子内右下按钮
    GM_addStyle('.index_game-center-sidebar__xz6S_{display:none !important;}')//虎扑游戏悬浮窗
    GM_addStyle('.index_game-center-entrance-container-title__BNope{display:none !important;}'); GM_addStyle('#game-center-entrance-container{display:none !important;}')//虎扑游戏中心
    GM_addStyle('.index_right-post__Yuzlv:nth-of-type(2){display:none !important;}')//热门游戏
    GM_addStyle('.index_download-app__ui5ia{display:none !important;}')//下载虎扑侧栏
    GM_addStyle('.index_qrcodeBox__zLFSV{display:none !important;}')//下载虎扑二维码
    GM_addStyle('.index_right-post__Yuzlv{display:none !important;}')//崩坏3最热帖

    //调整元素
    GM_addStyle('.index_bbs-post-web-body-left-wrapper__O14II{flex: auto;width: auto;}')//调整帖子样式
    //删除顶部红条
    GM_addStyle('.hp-pc-rc-TopMenu{height: 24px !important;}')
    GM_addStyle('.hp-pc-rc-TopMenu-banner{display:none !important;}')
    // //最上方一栏 #c60100
    GM_addStyle('.hp-pc-rc-TopMenu-top-container{background-color: #fff;box-shadow: 0px 0.1px 0px black;}'); GM_addStyle('.hp-pc-rc-TopMenu-top{background-color: #fff;}')
    // //字体颜色
    // GM_addStyle('.hp-pc-rc-TopMenu-top .hp-topLogin-info .hasLogin li a {color: #fff;}')
    // GM_addStyle('.hp-pc-rc-TopMenu-top .hp-topLogin-info .hasLogin li a:hover {color: #dedede;}')
    // GM_addStyle('.hp-pc-rc-TopMenu-top .hp-topLogin-info {color: #fff;}')
    // GM_addStyle('.hp-pc-rc-TopMenu-top .hp-topLogin-info .hasLogin .hp-topNotificat:hover {color: #dedede;}')
    // GM_addStyle('.hp-pc-rc-TopMenu-top .hp-quickNav a {color: #fff;}')
    // GM_addStyle('.hp-pc-rc-TopMenu-top .hp-quickNav a:hover {color: #dedede;}')
    //帖子在当前页面打开
    set_title()
    document.onmouseup = function () {
        set_title()
    }

    window.onload = function () {
        //添加返回按钮
        GM_addStyle('.iconxiazaihupu{display:none !important}')
        GM_addElement('link', {
            rel: 'stylesheet',
            href: 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css'
        });
        GM_addElement(document.getElementsByClassName('index_link__U4H39')[0], 'i', {
            class: 'fa fa-arrow-left index_icon__lUGzK',
            'aria-hidden': 'true'
        })
        document.getElementsByClassName('index_text__XBhts')[0].innerText = '返回'; document.getElementsByClassName('index_text__XBhts')[1].innerText = '上级'
        document.getElementsByClassName('index_box__x5WWh')[0].onclick = function () {
            window.history.back();
        }
    }
})();