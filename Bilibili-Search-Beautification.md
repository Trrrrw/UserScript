# B站搜索页美化<sub>0.1.2</sub>
[![GitHub license](https://img.shields.io/github/license/Trrrrw/UserScript?style=flat-square&color=4285dd&logo=github)](https://github.com/Trrrrw/UserScript)[![GitHub stars](https://img.shields.io/github/stars/Trrrrw/UserScript?style=flat-square&color=4285dd&logo=github)](https://github.com/Trrrrw/UserScript)[![GitHub forks](https://img.shields.io/github/forks/Trrrrw/UserScript?style=flat-square&color=4285dd&logo=github)](https://github.com/Trrrrw/UserScript)[![](https://img.shields.io/static/v1?label=%20&message=GreasyFork&style=flat-square&labelColor=7B0000&color=960000&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3ggEBCQHM3fXsAAAAVdJREFUOMudkz2qwkAUhc/goBaGJBgUtBCZyj0ILkpwAW7Bws4yO3AHLiCtEFD8KVREkoiFxZzX5A2KGfN4F04zMN+ce+5c4LMUgDmANYBnrnV+plBSi+FwyHq9TgA2LQpvCiEiABwMBtzv95RSfoNEHy8DYBzHrNVqVEr9BWKcqNFoxF6vx3a7zc1mYyC73a4MogBg7vs+z+czO50OW60Wt9stK5UKp9Mpj8cjq9WqDTBHnjAdxzGQZrPJw+HA31oulzbAWgLoA0CWZVBKIY5jzGYzdLtdE9DlcrFNrY98zobqOA6TJKHW2jg4nU5sNBpFDp6mhVe5rsvVasUwDHm9Xqm15u12o+/7Hy0gD8KatOd5vN/v1FozTVN6nkchxFuI6hsAAIMg4OPxMJCXdtTbR7JJCMEgCJhlGUlyPB4XfumozInrupxMJpRSRtZlKoNYl+m/6/wDuWAjtPfsQuwAAAAASUVORK5CYII=)](https://greasyfork.org/zh-CN/users/1016978-trrrrw)

## 安装
👉👉[点击此处安装](https://greasyfork.org/zh-CN/scripts/458903-b%E7%AB%99%E6%90%9C%E7%B4%A2%E9%A1%B5%E7%BE%8E%E5%8C%96)👈👈  
> 确保您的浏览器安装有 **Tampermonkey  脚本管理器扩展（[Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=zh)** / **[Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/tampermonkey/)** / **[Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)）。**  

## 功能
- 美化页面
- 左上角图标点击链接替换为`https://search.bilibili.com/all`，首页移至悬浮窗内
- 背景图片是`bgimg`，修改其链接即可修改背景图片。
- 效果图：
![homepage](https://cdn.staticaly.com/gh/Trrrrw/UserScript/main/docs/src/.vuepress/public/assets/image/bili-homepage.webp)
![searching](https://cdn.staticaly.com/gh/Trrrrw/UserScript/main/docs/src/.vuepress/public/assets/image/bili-searching.webp)
![searchresult](https://cdn.staticaly.com/gh/Trrrrw/UserScript/main/docs/src/.vuepress/public/assets/image/bili-searchresult.webp)

## 适配网站
|                                               | 网站链接                | PC  | Phone |
| --------------------------------------------- | ----------------------- | --- | ----- |
| ![icon](https://www.bilibili.com/favicon.ico?v=1) | search.bilibili.com/all | ✔️   | ✖️     |

## To Do
- [ ] 使用本地图片
- [ ] 背景模糊动画
- [x] 搜索结果页面
- [x] 搜索结果页返回

## 更新
### 0.1.2
- 新增设置界面，可点击浏览器菜单栏中油猴插件图标查看
- 缩减代码

### 0.1.1
- 更新左上下拉栏中首页的图标
- 坏消息，现在改了顶栏样式，没有左上图标了，第一条没用了
- 搜索结果页可以点击图标返回（不要刷新网页哦◑﹏◐）

### 0.1.0
- 重新写了一遍，功能和之前一样
- 搜索结果页面把背景改回白色
- <img src="https://cdn.staticaly.com/gh/Trrrrw/image-hosting@master/images/%E5%A4%A7%E4%BD%AC%E9%82%A6%E9%82%A6-%E4%BB%A3%E7%A0%81.webp" referrerPolicy="no-referrer" style="width:20%;">

### 0.0.6
- 删除右侧图标下文字

### 0.0.5
- 搜索框模糊效果
- 左上角图标点击链接替换为`https://search.bilibili.com/all`，首页移至悬浮窗内
- 删除搜索历史和热搜

### 0.0.4
- 修复了顶栏动态等无法使用的bug

### 0.0.3
- 顶栏添加模糊效果
- 点击搜索框后背景会变模糊
- 投稿按钮添加是否删除选项，代码开头的参数
> [issues #1](https://github.com/Trrrrw/UserScript/issues/1)

### 0.0.2
将搜索结果添加圆角，删除部分无用的结果。
> 但是第二页或者翻页再翻回来就恢复了
> <img src="https://i11.hoopchina.com.cn/hupuapp/bbs/443/98254443/thread_98254443_20230128191726_s_132911_o_w_512_h_512_56000.gif" referrerPolicy="no-referrer" style="width:6%;">
> ，先这样吧，又不是不能用。






## Artwork Copyright
<a href="https://t.bilibili.com/755900500405125154" target="_blank"><img src="https://i0.hdslb.com/bfs/face/93bba0fb2fc3c1ad1ead9a5e4db031ef36f532d5.jpg" referrerPolicy="no-referrer" alt="bilibili@壁纸喵"></a>

## License

The GPL-3.0 License.
