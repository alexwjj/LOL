document.write("<div id=\"footer_ied\"><div class=\"wrap_ied\"><p><a href=\"\" target=\"_blank\">腾讯互动娱乐<\/a> | <a href=\"\" target=\"_blank\">服务条款<\/a> | <a href=\"/\" target=\"_blank\">广告服务<\/a> | <a href=\"\" target=\"_blank\">腾讯游戏招聘<\/a> | <a href=\"\" target=\"_blank\">腾讯游戏客服<\/a> | <a href=\"http:\/\/game.qq.com\/gnav\" target=\"_blank\">游戏地图<\/a> | <a href=\"/\" target=\"_blank\">游戏活动<\/a> | <a href=\"\" target=\"_blank\">商务合作<\/a> | <a href=\"\" target=\"_blank\">网站导航<\/a><\/p><p class=\"e\">COPYRIGHT &copy; 1998 – 2016 TENCENT. ALL RIGHTS RESERVED.<\/p><p><a href=\"\" target=\"_blank\">腾讯公司 版权所有<\/a><\/p><\/div><\/div>");
function delay_script(url){var obj=document.createElement("script"),lnk="src",tp="text/javascript";obj.setAttribute(lnk,url);obj.setAttribute("type",tp);document.body.appendChild(obj);return obj;};delay_script("http://ossweb-img.qq.com/images/js/dr/dr.js");var oldtonewArray = [["http://xinyue.qq.com/act/a20150318xydnf/index.shtml","http://xinyue.qq.com/act/a20150817dnf/index.shtml","?ADTAG=old.act.gamezone.dnf"],
    ["http://xinyue.qq.com/gamezone/yl/","http://xinyue.qq.com/act/a20150721ylzt/index.shtml","?ADTAG=old.gamezone.yl"],
    ["http://xinyue.qq.com/gamezone/dnf/","http://xinyue.qq.com/act/a20150817dnf/index.shtml","?ADTAG=old.gamezone.dnf"],
    ["http://xinyue.qq.com/gamezone/cf/","http://xinyue.qq.com/act/a20150924cfzq/index.shtml","?ADTAG=old.gamezone.cf"],
    ["http://xinyue.qq.com/gamezone/age/index.shtml","http://xinyue.qq.com/act/a20150825sgtq/index.shtml","?ADTAG=old.gamezone.age"],
    ["http://xinyue.qq.com/gamezone/codol/","http://xinyue.qq.com/act/a20150728smzh/index.shtml","?ADTAG=old.gamezone.cod"],
    ["http://xinyue.qq.com/gamezone/ava/","http://xinyue.qq.com/index.shtml","?ADTAG=old.gamezone.ava"],
    ["http://xinyue.qq.com/gamezone/xy/","http://xinyue.qq.com/act/a20150712xycqzq/index.shtml","?ADTAG=old.gamezone.xy"],
    ["http://xinyue.qq.com/gamezone/lol/","http://xinyue.qq.com/index.shtml","?ADTAG=old.gamezone.lol"],
    ["http://xinyue.qq.com/gamezone/speed/","http://xinyue.qq.com/act/a20150526yxtqzqfc/index.shtml","?ADTAG=old.gamezone.speed"],
    ["http://xinyue.qq.com/act/a20130910qqxw/index.htm","http://xinyue.qq.com/act/a20150316xwzq/act.shtml","?ADTAG=old.act.a20130910qqxw"],
    ["http://xinyue.qq.com/act/a20121112new/index.htm","http://xinyue.qq.com/index.shtml","?ADTAG=old.act.a20121112new"],
    ["http://xinyue.qq.com/act/a20130507jhzt/index.htm","http://xinyue.qq.com/index.shtml","?ADTAG=old.act.a20130507jhzt"],
    ["http://xinyue.qq.com/act/a20140902tqzq/index.shtml","http://xinyue.qq.com/web201410/recommend.shtml","?ADTAG=old.act.a20140902tqzq"],
    ["http://xinyue.qq.com/act/a20150327welcome/index.htm","http://xinyue.qq.com/index.shtml","?ADTAG=old.act.a20150327welcome"],
    ["http://xinyue.qq.com/act/a20150202tyzq/index.shtml","http://xinyue.qq.com/web201410/newgame.shtml","?ADTAG=old.gw.newgame"],
    ["http://xinyue.qq.com/web201206/sv_vip.shtml","http://xinyue.qq.com/web201410/service.shtml","?ADTAG=old.gw.service"],
    ["http://xinyue.qq.com/web201206/sv_steward.shtml","http://xinyue.qq.com/web201410/sv_steward.shtml","?ADTAG=old.gw.guanjia"],
    ["http://xinyue.qq.com/web201206/sv_dispose.shtml","http://xinyue.qq.com/web201410/xscl.shtml","?ADTAG=old.gw.xscl"]]


var newUrl = oldtonew(window.location.href.split('?')[0]);

if(newUrl!=undefined){
    window.location.href=newUrl;
}

function oldtonew(v){

    if(v.length>21){
        for(var i=0;i<oldtonewArray.length;i++){


            if(oldtonewArray[i][0].indexOf(v)!=-1){
                return (oldtonewArray[i][1]+oldtonewArray[i][2]);
            }
        }
    }


}

/*  |xGv00|0302a8cece947bca2762f6b2a5b7026d */
