// ==UserScript==
// @name         B站搜索页美化
// @version      0.0.1
// @namespace    https://github.com/Trrrrw/UserScript
// @homepage     https://github.com/Trrrrw/UserScript
// @author       Trrrrw
// @description  美化search.bilibili.com页面
// @match        https://search.bilibili.com/*
// @license      GPL-3.0
// ==/UserScript==
(function () {
    setTimeout(() => {//延迟400毫秒等待加载完成
        //背景图片链接
        var bgimg='https://i0.hdslb.com/bfs/new_dyn/4cc6ab9f2cd059255fe1e031f9fd0ad36823116.jpg';

        //主体；网页body；header-bar；footer
        var bg=document.getElementById('i_cecream'),body=document.body,header=document.getElementById('bili-header-container'),footer=document.getElementById('biliMainFooter');

        //右下角按钮；中间搜索栏；搜索栏上方文字“搜索”
        var sideBtn=document.getElementsByClassName('side-buttons')[0],searchCenter=document.getElementsByClassName('search-center')[0],centerTitleText=document.getElementsByClassName('center-title-text')[0];

        //header有三层
        var biliHeaderContainer=document.getElementById('bili-header-container'),biliHeader=document.getElementsByClassName('bili-header')[0],biliHeaderBar=document.getElementsByClassName('bili-header__bar')[0];

        //header中的元素；左上bilibili图标右侧“首页”
        var headerItem=document.getElementsByClassName('v-popover-wrap'),miniHeaderTitle=document.getElementsByClassName('mini-header__title')[0];

        //最右侧两个元素
        var rightEntryItem=document.getElementsByClassName('right-entry-item');

        //将主体设为透明
        bg.style.background='transparent';
        //将整个网页body添加背景
        body.setAttribute('style', 'background: url( '+bgimg+');background-size: cover;');
        //删除部分元素
        footer.remove();sideBtn.remove();centerTitleText.remove();
        //header设为半透明
        biliHeaderContainer.style.background='#f8f6f65c';biliHeader.style.background='transparent';biliHeaderBar.style.background='transparent';
        //将header中左侧部分元素删除
        for (var i=1;i<=7;i++){
            headerItem[i].style.display='none';
        }
        //删除左上bilibili图标右侧“首页”
        miniHeaderTitle.style.display='none';
        //删除最右侧投稿
        for (var j=1;j>0;j--){
            rightEntryItem[j].style.display='none';
        }
    },400)
})();

