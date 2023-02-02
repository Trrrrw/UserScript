// ==UserScript==
// @name         B站搜索页美化
// @namespace    http://tampermonkey.net/
// @homepage     https://github.com/Trrrrw/UserScript
// @version      0.0.3
// @description  美化search.bilibili.com页面
// @author       Trrrrw
// @match        https://search.bilibili.com/*
// @icon         https://www.bilibili.com/favicon.ico?v=1
// @downloadURL  https://github.com/Trrrrw/UserScript/raw/main/Bilibili-Search-Beautification.user.js
// @updateURL    https://github.com/Trrrrw/UserScript/raw/main/Bilibili-Search-Beautification.user.js
// @license      GPL-3.0
// ==/UserScript==
(function () {
    //参数
    var bgimg = 'https://i0.hdslb.com/bfs/new_dyn/2e762660113a84fe20affb3ec16eba386823116.jpg',//背景图片链接，可将此处链接修改
        upBtnSwitch = 0;//投稿按钮是否显示，1-显示；0-删除
    setTimeout(() => {//延迟400毫秒等待加载完成

        //主体；网页body；header-bar；footer
        var bg = document.getElementById('i_cecream'), body = document.body, header = document.getElementById('bili-header-container'), footer = document.getElementById('biliMainFooter');

        //右下角按钮；中间搜索栏；搜索栏上方文字“搜索”
        var sideBtn = document.getElementsByClassName('side-buttons')[0], searchCenter = document.getElementsByClassName('search-center')[0], centerTitleText = document.getElementsByClassName('center-title-text')[0];

        //header有三层
        var biliHeaderContainer = document.getElementById('bili-header-container'), biliHeader = document.getElementsByClassName('bili-header')[0], biliHeaderBar = document.getElementsByClassName('bili-header__bar')[0];

        //header中的元素；左上bilibili图标右侧“首页”
        var headerItem = document.getElementsByClassName('v-popover-wrap'), miniHeaderTitle = document.getElementsByClassName('mini-header__title')[0];

        //最右侧两个元素；搜索栏输入框
        var rightEntryItem = document.getElementsByClassName('right-entry-item'), searchInput = document.getElementsByClassName('search-input-el')[0];

        //搜索结果
        var videoCard = document.getElementsByClassName('__scale-wrap');

        //将搜索结果中的部分项删除，添加圆角
        for (var cards = 0; cards < videoCard.length; cards++) {
            videoCard[cards].setAttribute('style', 'border-radius: 7px;');
            if (videoCard[cards].childNodes[0].getAttribute('data-target-url')) {
                videoCard[cards].parentNode.parentNode.remove();
            }
        }
        //将主体设为透明
        bg.style.background = 'transparent';
        //将整个网页body添加背景
        body.setAttribute('style', 'background: url( ' + bgimg + ');background-size: cover;');
        //删除部分元素
        footer.remove(); sideBtn.remove(); centerTitleText.remove();
        //header设为半透明模糊
        biliHeaderContainer.style.background = '#f8f6f65c'; biliHeaderContainer.style.backdropFilter = 'blur(10px)';
        biliHeader.style.background = 'transparent'; biliHeaderBar.style.background = 'transparent';
        //将header中左侧部分元素删除
        for (var i = 1; i <= 7; i++) {
            headerItem[i].style.display = 'none';
        }
        //删除左上bilibili图标右侧“首页”
        miniHeaderTitle.style.display = 'none';
        //删除最右侧投稿
        if (upBtnSwitch==0) {
            rightEntryItem[1].remove();
        }
        //搜索栏选中模糊
        document.onmouseup = function (e) {
            if (e.button == 0) {
                if (e.srcElement.className == 'search-input-el') {
                    document.body.style.backdropFilter = 'blur(10px)';
                } else {
                    document.body.style.backdropFilter = '';
                }
            }
        }
    }, 400)
})();

