// ==UserScript==
// @name         虎扑网页端优化
// @namespace    http://tampermonkey.net/
// @homepage     https://github.com/Trrrrw/UserScript
// @version      0.0.1
// @description  虎扑网页端优化
// @author       Trrrrw
// @match        https://bbs.hupu.com/*
// @icon         https://w1.hoopchina.com.cn/images/pc/old/favicon.ico
// @license      GPL-3.0
// ==/UserScript==

(function () {
    setTimeout(() => {
        //是否将已看文章标题颜色恢复。1：是；0：否
        var postTitleSwitch = 1;
        var url = window.location.href,
            btnBox = document.getElementsByClassName('backToTop_2mZa6')[0];
        btnBox.style.bottom = '10px'; btnBox.style.right = '8px';
        if (url.search('html') == 30) {
            var pImg = document.getElementsByClassName('image-wrapper'),
                dlApp = document.getElementsByClassName('download-app')[0],
                rightPost = document.getElementsByClassName('right-post'),
                QRCodeBtn = document.getElementsByClassName('link_2iELG qrcodeLink_3wVdw')[0];
            dlApp.remove(); rightPost[2].remove(); QRCodeBtn.remove();
            for (var i = 0; i < pImg.length; i++) {
                pImg[i].style.width = '50%';
            }
        }
        else {
            var pTitle = document.getElementsByClassName('p-title'),
                HuaTi = document.getElementsByClassName('hu-pc-navigation-type')[1],
                postTitleVisited = document.querySelectorAll('.bbs-sl-web-post-body .post-title .p-title');
            for (var j = 0; j < postTitleVisited.length && postTitleSwitch == 1; j++) {
                postTitleVisited[j].style.color = '#2d3137';
            }
            console.log(HuaTi)
            HuaTi.remove();
            for (var k = 0; k < pTitle.length; k++) {
                pTitle[k].target = '_self';
            }
        }
    }, 400)
})();