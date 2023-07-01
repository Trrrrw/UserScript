<template><div><h1 id="b站搜索页美化0-1-1" tabindex="-1"><a class="header-anchor" href="#b站搜索页美化0-1-1" aria-hidden="true">#</a> B站搜索页美化<sub>0.1.1</sub></h1>
<p><a href="https://github.com/Trrrrw/UserScript" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/license/Trrrrw/UserScript?style=flat-square&amp;color=4285dd&amp;logo=github" alt="GitHub license"><ExternalLinkIcon/></a>
<a href="https://github.com/Trrrrw/UserScript" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/stars/Trrrrw/UserScript?style=flat-square&amp;color=4285dd&amp;logo=github" alt="GitHub stars"><ExternalLinkIcon/></a>
<a href="https://github.com/Trrrrw/UserScript" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/forks/Trrrrw/UserScript?style=flat-square&amp;color=4285dd&amp;logo=github" alt="GitHub forks"><ExternalLinkIcon/></a>
<a href="https://greasyfork.org/zh-CN/users/1016978-trrrrw" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label= &amp;message=GreasyFork&amp;style=flat-square&amp;labelColor=7B0000&amp;color=960000&amp;logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3ggEBCQHM3fXsAAAAVdJREFUOMudkz2qwkAUhc/goBaGJBgUtBCZyj0ILkpwAW7Bws4yO3AHLiCtEFD8KVREkoiFxZzX5A2KGfN4F04zMN+ce+5c4LMUgDmANYBnrnV+plBSi+FwyHq9TgA2LQpvCiEiABwMBtzv95RSfoNEHy8DYBzHrNVqVEr9BWKcqNFoxF6vx3a7zc1mYyC73a4MogBg7vs+z+czO50OW60Wt9stK5UKp9Mpj8cjq9WqDTBHnjAdxzGQZrPJw+HA31oulzbAWgLoA0CWZVBKIY5jzGYzdLtdE9DlcrFNrY98zobqOA6TJKHW2jg4nU5sNBpFDp6mhVe5rsvVasUwDHm9Xqm15u12o+/7Hy0gD8KatOd5vN/v1FozTVN6nkchxFuI6hsAAIMg4OPxMJCXdtTbR7JJCMEgCJhlGUlyPB4XfumozInrupxMJpRSRtZlKoNYl+m/6/wDuWAjtPfsQuwAAAAASUVORK5CYII=" alt=""><ExternalLinkIcon/></a></p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<p>👉👉<a href="https://greasyfork.org/zh-CN/scripts/458903-b%E7%AB%99%E6%90%9C%E7%B4%A2%E9%A1%B5%E7%BE%8E%E5%8C%96" target="_blank" rel="noopener noreferrer">点击此处安装<ExternalLinkIcon/></a>👈👈</p>
<blockquote>
<p>确保您的浏览器安装有 <strong>Tampermonkey  脚本管理器扩展（<a href="https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=zh" target="_blank" rel="noopener noreferrer">Chrome<ExternalLinkIcon/></a></strong> / <strong><a href="https://addons.mozilla.org/zh-CN/firefox/addon/tampermonkey/" target="_blank" rel="noopener noreferrer">Firefox<ExternalLinkIcon/></a></strong> / <strong><a href="https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd" target="_blank" rel="noopener noreferrer">Edge<ExternalLinkIcon/></a>）。</strong></p>
</blockquote>
<h2 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h2>
<ul>
<li>美化页面</li>
<li>左上角图标点击链接替换为<code v-pre>https://search.bilibili.com/all</code>，首页移至悬浮窗内</li>
<li>背景图片是<code v-pre>bgimg</code>，修改其链接即可修改背景图片。</li>
<li>效果图：
<img src="@source/img/homepage.webp" alt="homepage">
<img src="@source/img/searching.webp" alt="searching">
<img src="@source/img/searchresult.webp" alt="searchresult"></li>
</ul>
<h2 id="适配网站" tabindex="-1"><a class="header-anchor" href="#适配网站" aria-hidden="true">#</a> 适配网站</h2>
<table>
<thead>
<tr>
<th></th>
<th>网站链接</th>
<th>PC</th>
<th>Phone</th>
</tr>
</thead>
<tbody>
<tr>
<td><img src="https://www.bilibili.com/favicon.ico?v=1" alt="icon"></td>
<td>search.bilibili.com/all</td>
<td>✔️</td>
<td>✖️</td>
</tr>
</tbody>
</table>
<h2 id="to-do" tabindex="-1"><a class="header-anchor" href="#to-do" aria-hidden="true">#</a> To Do</h2>
<ul>
<li>[x] 搜索结果页面</li>
<li>[x] 搜索结果页返回</li>
<li>[ ] 背景模糊动画</li>
</ul>
<h2 id="更新" tabindex="-1"><a class="header-anchor" href="#更新" aria-hidden="true">#</a> 更新</h2>
<h3 id="_0-1-1" tabindex="-1"><a class="header-anchor" href="#_0-1-1" aria-hidden="true">#</a> 0.1.1</h3>
<ul>
<li>更新左上下拉栏中首页的图标</li>
<li>坏消息，现在改了顶栏样式，没有左上图标了，第一条没用了</li>
<li>搜索结果页可以点击图标返回（不要刷新网页哦◑﹏◐）</li>
</ul>
<h3 id="_0-1-0" tabindex="-1"><a class="header-anchor" href="#_0-1-0" aria-hidden="true">#</a> 0.1.0</h3>
<ul>
<li>重新写了一遍，功能和之前一样</li>
<li>搜索结果页面把背景改回白色</li>
<li>
<img src="https://cdn.staticaly.com/gh/Trrrrw/image-hosting@master/images/大佬邦邦-代码.webp" referrerPolicy="no-referrer" style="width:20%;">
</li>
</ul>
<h3 id="_0-0-6" tabindex="-1"><a class="header-anchor" href="#_0-0-6" aria-hidden="true">#</a> 0.0.6</h3>
<ul>
<li>删除右侧图标下文字</li>
</ul>
<h3 id="_0-0-5" tabindex="-1"><a class="header-anchor" href="#_0-0-5" aria-hidden="true">#</a> 0.0.5</h3>
<ul>
<li>搜索框模糊效果</li>
<li>左上角图标点击链接替换为<code v-pre>https://search.bilibili.com/all</code>，首页移至悬浮窗内</li>
<li>删除搜索历史和热搜</li>
</ul>
<h3 id="_0-0-4" tabindex="-1"><a class="header-anchor" href="#_0-0-4" aria-hidden="true">#</a> 0.0.4</h3>
<ul>
<li>修复了顶栏动态等无法使用的bug</li>
</ul>
<h3 id="_0-0-3" tabindex="-1"><a class="header-anchor" href="#_0-0-3" aria-hidden="true">#</a> 0.0.3</h3>
<ul>
<li>顶栏添加模糊效果</li>
<li>点击搜索框后背景会变模糊</li>
<li>投稿按钮添加是否删除选项，代码开头的参数</li>
</ul>
<blockquote>
<p><a href="https://github.com/Trrrrw/UserScript/issues/1" target="_blank" rel="noopener noreferrer">issues #1<ExternalLinkIcon/></a></p>
</blockquote>
<h3 id="_0-0-2" tabindex="-1"><a class="header-anchor" href="#_0-0-2" aria-hidden="true">#</a> 0.0.2</h3>
<p>将搜索结果添加圆角，删除部分无用的结果。</p>
<blockquote>
<p>但是第二页或者翻页再翻回来就恢复了
<img src="https://i11.hoopchina.com.cn/hupuapp/bbs/443/98254443/thread_98254443_20230128191726_s_132911_o_w_512_h_512_56000.gif" referrerPolicy="no-referrer" style="width:6%;">
，先这样吧，又不是不能用。</p>
</blockquote>
<h2 id="artwork-copyright" tabindex="-1"><a class="header-anchor" href="#artwork-copyright" aria-hidden="true">#</a> Artwork Copyright</h2>
<p><a href="https://t.bilibili.com/755900500405125154" target="_blank"><img src="https://i0.hdslb.com/bfs/face/93bba0fb2fc3c1ad1ead9a5e4db031ef36f532d5.jpg" referrerPolicy="no-referrer" alt="bilibili@壁纸喵"></a></p>
<h2 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h2>
<p>The GPL-3.0 License.</p>
</div></template>


