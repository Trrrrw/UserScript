// ==UserScript==
// @name         B站搜索页美化
// @namespace    http://tampermonkey.net/
// @homepage     https://github.com/Trrrrw/UserScript
// @version      0.0.5
// @description  美化search.bilibili.com页面
// @author       Trrrrw
// @match        https://search.bilibili.com/*
// @icon         https://www.bilibili.com/favicon.ico?v=1
// @downloadURL  https://greasyfork.org/scripts/458903-b%E7%AB%99%E6%90%9C%E7%B4%A2%E9%A1%B5%E7%BE%8E%E5%8C%96/code/B%E7%AB%99%E6%90%9C%E7%B4%A2%E9%A1%B5%E7%BE%8E%E5%8C%96.user.js
// @updateURL    https://greasyfork.org/scripts/458903-b%E7%AB%99%E6%90%9C%E7%B4%A2%E9%A1%B5%E7%BE%8E%E5%8C%96/code/B%E7%AB%99%E6%90%9C%E7%B4%A2%E9%A1%B5%E7%BE%8E%E5%8C%96.user.js
// @license      GPL-3.0
// ==/UserScript==
(function () {
    //参数
    var bgimg = 'https://i0.hdslb.com/bfs/new_dyn/2e762660113a84fe20affb3ec16eba386823116.jpg',//背景图片链接，可将此处链接修改
        upBtnSwitch = 0;//投稿按钮是否显示，1-显示；0-删除
    setTimeout(() => {//延迟400毫秒等待加载完成

        //主体；网页body；header-bar；footer
        var bg = document.getElementById('i_cecream'),
            body = document.body,
            header = document.getElementById('bili-header-container'),
            footer = document.getElementById('biliMainFooter'),

            //右下角按钮；中间搜索栏；搜索栏上方文字“搜索”
            sideBtn = document.getElementsByClassName('side-buttons')[0],
            searchCenter = document.getElementsByClassName('search-center')[0],
            centerTitleText = document.getElementsByClassName('center-title-text')[0],

            //header有三层
            biliHeaderContainer = document.getElementById('bili-header-container'),
            biliHeader = document.getElementsByClassName('bili-header')[0],
            biliHeaderBar = document.getElementsByClassName('bili-header__bar')[0],

            //header中的元素；左上bilibili图标右侧“首页”；左上bilibili图标，左上图标悬浮弹窗
            headerItem = document.getElementsByClassName('v-popover-wrap'),
            miniHeaderTitle = document.getElementsByClassName('mini-header__title')[0],
            leftEntryTitle = document.getElementsByClassName('left-entry__title')[0],

            //最右侧两个元素
            rightEntryItem = document.getElementsByClassName('right-entry-item'),

            //搜索栏；搜索栏输入框
            searchBar = document.getElementsByClassName('search-input-wrap')[0],
            searchInput = document.getElementsByClassName('search-input-el')[0],

            //搜索结果；热搜
            videoCard = document.getElementsByClassName('__scale-wrap'),
            searchPanel = document.getElementsByClassName('search-panel')[1],
            url = window.location.href;

        //将搜索结果中的部分项删除，添加圆角
        // var scriptElem = document.createElement('script');
        // scriptElem.innerHTML = `window.onhashchange = function () {console.log('URL发生变化了');};`;
        // document.body.appendChild(scriptElem);
        // for (var cards = 0; cards < videoCard.length; cards++) {
        //     videoCard[cards].setAttribute('style', 'border-radius: 7px;');
        //     if (videoCard[cards].childNodes[0].getAttribute('data-target-url')) {
        //         videoCard[cards].parentNode.parentNode.remove();
        //     }
        // }
        //删除部分元素
        footer.remove(); sideBtn.remove(); centerTitleText.remove();
        //将header中左侧部分元素删除
        for (var i = 1; i <= 7; i++) {
            headerItem[i].style.display = 'none';
        }
        //删除左上bilibili图标右侧“首页”
        miniHeaderTitle.style.display = 'none';
        //删除最右侧投稿
        if (upBtnSwitch == 0) {
            rightEntryItem[1].remove();
        }
        //删除搜索结果
        searchPanel.remove();

        //将左上图标链接改为搜索页，并将首页添加至悬浮弹窗中
        leftEntryTitle.href = 'https://search.bilibili.com/all';
        leftEntryTitle.onmouseenter = function () {
            var channelPanelColumn = document.getElementsByClassName('channel-panel__column')[0];
            if (channelPanelColumn.children[0].innerText != '首页') {
                var honePage = `<a href="//www.bilibili.com" target="_blank" class="channel-panel__item" data-v-5983d515="">
                <svg id="channel-icon-activit" fill="#333" viewBox="0 0 1024 1024" class="navigation-channel-icon" data-v-5983d515=""><path d="M518.656 475.904a223.488 223.488 0 0 1-23.296-75.52 366.08 366.08 0 0 1 81.408 14.592 623.104 623.104 0 0 1-58.112 60.928m-69.888-119.04c-11.52-58.112-8.704-55.296-25.6-156.928a265.984 265.984 0 0 0-78.336 46.592c51.2 104.448 60.928 165.376 92.928 290.304 51.2-5.632 211.968-40.704 226.56-130.56 8.704-64-142.336-64-215.04-49.408m37.12 267.264a263.424 263.424 0 0 0-107.52 69.632l43.52 153.6a47.872 47.872 0 0 1-92.928 23.296L216.576 473.088l-72.704-204.8c2.816-5.632 5.888-8.704 8.704-14.336l-14.592-51.2a46.08 46.08 0 0 1 32-57.856 47.616 47.616 0 0 1 58.112 34.304v2.816a334.848 334.848 0 0 1 98.816-43.52c177.152-46.592 203.264 55.04 429.824 23.296L890.368 588.8c-171.52 90.112-232.448-11.52-403.712 35.072" fill="#F39800"></path></svg>
                <span class="name" data-v-5983d515="">首页</span>
                </a>`;
                channelPanelColumn.insertAdjacentHTML('afterbegin', honePage);
            }
        }

        //将主体设为透明
        bg.style.background = 'transparent';
        //将整个网页body添加背景
        body.style.background = 'url( ' + bgimg + ')'; body.style.backgroundSize = 'cover';
        //header和搜索框设为半透明模糊
        biliHeaderContainer.style.background = '#f8f6f65c'; biliHeader.style.background = 'transparent';
        biliHeaderBar.style.background = 'transparent'; biliHeaderBar.style.backdropFilter = 'blur(10px)';
        searchBar.style.background = '#f8f6f65c'; searchBar.style.backdropFilter = 'blur(10px)'; searchInput.placeholder = '';
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

