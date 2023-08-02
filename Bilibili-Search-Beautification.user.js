// ==UserScript==
// @name         B站搜索页美化
// @namespace    http://tampermonkey.net/
// @homepage     https://github.com/Trrrrw/UserScript
// @version      0.1.2
// @description  美化search.bilibili.com页面
// @author       Trrrrw
// @match        https://search.bilibili.com/*
// @require      https://unpkg.com/sweetalert2@latest/dist/sweetalert2.min.js
// @resource     swalStyle https://unpkg.com/sweetalert2@latest/dist/sweetalert2.min.css
// @grant        GM_addStyle
// @grant        GM_addElement
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        window.onload
// @grant        window.onurlchange
// @icon         https://www.bilibili.com/favicon.ico?v=1
// @downloadURL  https://greasyfork.org/scripts/458903-b%E7%AB%99%E6%90%9C%E7%B4%A2%E9%A1%B5%E7%BE%8E%E5%8C%96/code/B%E7%AB%99%E6%90%9C%E7%B4%A2%E9%A1%B5%E7%BE%8E%E5%8C%96.user.js
// @updateURL    https://greasyfork.org/scripts/458903-b%E7%AB%99%E6%90%9C%E7%B4%A2%E9%A1%B5%E7%BE%8E%E5%8C%96/code/B%E7%AB%99%E6%90%9C%E7%B4%A2%E9%A1%B5%E7%BE%8E%E5%8C%96.user.js
// @license      GPL-3.0
// ==/UserScript==


(function () {
    'use strict';

    let value = [{
        name: 'bgimg',
        value: 'https://i0.hdslb.com/bfs/new_dyn/2e762660113a84fe20affb3ec16eba386823116.jpg'
    }, {
        name: 'upBtnSwitch',
        value: true
    }];
    value.forEach((v) => {
        GM_getValue(v.name) === undefined && GM_setValue(v.name, v.value);
    });
    GM_registerMenuCommand("⚙️设置",() => {
        Swal.fire({
            title: '⚙️设置',
            html: `<label class="swal2-checkbox" style="display: flex;"><input type="checkbox" id="up-button-checkbox" ${GM_getValue('upBtnSwitch') ? 'checked' : ''}><span class="swal2-label">是否显示投稿按钮</span></label>
                   <input id="bgimg-url-input" class="swal2-input" placeholder="Enter the URL" value="${GM_getValue('bgimg')}" type="url" style="display: flex;">`,
            showCloseButton: true,
            confirmButtonText: '保存',
            customClass: {
                popup: 'instant-popup',
            },
        }).then((res) => {
            if (res.isConfirmed) {
                history.go(0)
            }
        })
        document.getElementById('up-button-checkbox').addEventListener('change', (e) => {
            GM_setValue('upBtnSwitch', e.currentTarget.checked);
        })
        document.getElementById('bgimg-url-input').addEventListener('change', (e) => {
            GM_setValue('bgimg', e.currentTarget.value);
        })
    })

    //删除元素
    let del_dom=[
        '#biliMainFooter',//footer
        '.side-buttons',//右下客服按钮
        '.right-entry-text',//右上按钮文字
        '.vip-wrap',//右上大会员
        '.center-title-text',//搜索栏上方文字“搜索”
        '.left-entry > .v-popover-wrap:nth-of-type(n+2)',//左上元素
        '.mini-header__title',//左上bilibili图标右侧“首页”
        '.search-panel:last-child'
    ];
    if (!GM_getValue('upBtnSwitch')) {
        del_dom.push('.right-entry-item--upload')//投稿按钮
    } else {
        GM_addStyle('.bili-header .header-upload-entry{background: #00aeec !important;border-radius: 30px;}')//投稿按钮颜色圆角
    }
    del_dom.forEach((dom) => {
        GM_addStyle(`${dom}{display:none !important}`)
    });

    //更改样式
    // //左上bilibili图标样式
    // GM_addStyle(''.left-entry__title{margin-right: 0px !important}'')
    //添加背景
    GM_addStyle('#i_cecream{background: transparent;}')
    GM_addStyle(`body{background: url( ${GM_getValue('bgimg')} );}`)
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
    window.onload = function () {
        //搜索框预览文字
        document.getElementsByClassName('search-input-el')[0].placeholder = ''
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
                    document.body.style.backdropFilter = 'blur(10px)';
                } else if (e.srcElement.className != 'search-input-el' && document.body.style.backdropFilter == 'blur(10px)') {
                    document.body.style.backdropFilter = '';
                }
            }
        };
    }
})();

