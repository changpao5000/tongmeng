/* SVN.committedRevision=1222949 */
var lazyLoadDelay=50;(function(a){a.YHD={imgLoad:{objArray:[],timeout:null,timeoutLoad:function(c){var b=a.YHD.imgLoad;if(a.YHD.imgLoad.timeout){return}b.timeout=setTimeout(function(){b.timeout=null;b.load()},c)},loadImg:function(d){if(d&&d.length>0){for(var c=0,b=d.length;c<b;c++){if(a.inArray(d[c],a.YHD.imgLoad.objArray)==-1){a.YHD.imgLoad.objArray.push(d[c])}}}},pageTop:function(){return document.documentElement.clientHeight+Math.max(document.documentElement.scrollTop,document.body.scrollTop)},load:function(){var c=a.YHD.imgLoad;if(c.timeout){return}var d=c.objArray;while(d.length){var f=d.shift();if(!f){continue}var e=a("#"+f);if(!e.length){continue}var b=0;$(e[0].getElementsByTagName("img")).each(function(){var g=this.getAttribute("original");if(g){$(this).attr("src",g).removeAttr("original");
b++}});if(b>0){return c.timeoutLoad(b*5)}}}}}})(jQuery);(function(b){var a=function(c){var e=c,d={activeLoadTime:2000,activeLoad:false,ele:"div",lazyAttr:"lazyLoadDom",hfix:620,callback:null,scrollLoad:true};b.extend(d,e);this.param=d};a.prototype={constructor:a,areaArray:[],doc:document,lazyDom:function(d,h){var g=this,c=g.param,f=c.ele,e=c.lazyAttr,i;if(d){g.param=b.extend(c,d)}if(h){i=g.getJqueryDom(h).find(f+"["+e+"]").get()}else{i=b(g.doc).find(f+"["+e+"]").get()}if(i&&i.length>0){b.merge(g.areaArray,i)}g.scrollLoadInit();g.activeLoadInit()},activeLoadInit:function(){var g=this,h=g.param,e=h.activeLoad,f=h.activeLoadTime,c,d=g.areaArray;if(!e){return}c=setInterval(function(){var i=g.areaArray;if(i.length==0){clearInterval(c);return}g.dealSomeDom(1)},f)},scrollLoadInit:function(){var c=this,e=c.param;if(e.scrollLoad){loli.scroll(function d(){c.dealAllDom();
if(c.areaArray.length==0){b(window).unbind("scroll",d)}},200)}},dealAllDom:function(){var f=this,e=f.param,c=e.callback,d=[];jQuery.each(f.areaArray,function(h,g){if(f.isInCurrScreen(g)){f.loadDom(g);if(c){e.callback.call(b(g))}}else{d.push(g)}});f.areaArray=d},dealSomeDom:function(j){var g=this,d=g.param,l=d.callback,f=g.areaArray,k=[],e,h=Math.min(f.length,j),c;for(var e=0;e<h;e++){c=f.shift();g.loadDom(c);if(l){l.call(b(c))}}},loadDom:function(c){var g=this,e=g.getJqueryDom(c),h="",d=e.find("textarea")[0],f=g.getJqueryDom(d);if(f&&f.length>0){h=f.val()}e.html(h)},isInCurrScreen:function(f){var h=this,i=h.getJqueryDom(f),c=h.doc,j=c.documentElement,g=h.param,d=g.hfix,e=Math.max(j.scrollTop,c.body.scrollTop),k=j.clientHeight+e;if(i){return(i.offset().top<k+d)&&(i.offset().top>e-d)}return false
},getJqueryDom:function(c){if(!c){return c}if(c instanceof b){return c}return b(c)}};b.fn.extend({channelLazyDom:function(d){var c=new a();return c.lazyDom(d,this)}})})(jQuery);var busystcok=URLPrefix.busystock?URLPrefix.busystock:"http://gps.yhd.com";var yhdChannelV2={};(function(a){yhdChannelV2=yhdChannelV2||{};var b=false;var d=500;var c=200;yhdChannelV2.loadPriceDom=yhdChannelV2.loadPriceDom||[];yhdChannelV2.pageTop=function(){return document.documentElement.clientHeight+Math.max(document.documentElement.scrollTop,document.body.scrollTop)};yhdChannelV2.getPriceName=function(g){var f=g,e="";if(f==1){e="1号店价："}else{if(f==2){e="促销价："}}if(globalShowMarketPrice&&globalShowMarketPrice==1){e="价格："}return e};yhdChannelV2.getPriceDomHtml=function(e){var f=e.html,g=e.price,h=e.priceType;if(!f){return"请期待"}if(f!="y"){if(f.indexOf("#price#")>-1){f=f.replace("#price#",g)}if(f.indexOf("#name#")>-1){f=f.replace("#name#",yhdChannelV2.getPriceName(h))}}else{f="&yen;"+g}return f
};yhdChannelV2.loadPrice=function(){if(b){return}b=true;var f=0;try{if(!a.cookie("provinceId")){return}var h=yhdChannelV2.pageTop();if(!yhdChannelV2.lazyLoadPrice){yhdChannelV2.lazyLoadPrice=a("[priceDomId]")}if(yhdChannelV2.loadPriceDom&&yhdChannelV2.loadPriceDom.length>0){$.merge(yhdChannelV2.lazyLoadPrice,yhdChannelV2.loadPriceDom);yhdChannelV2.loadPriceDom=[]}var i="?mcsite="+currSiteId+"&provinceId="+a.cookie("provinceId");var k=[];if(yhdChannelV2.lazyLoadPrice&&yhdChannelV2.lazyLoadPrice.length>0){var e={};yhdChannelV2.lazyLoadPrice.each(function(l){if(c>f&&a(this).offset().top<=h+100){var m=a(this).attr("priceDomId");if(!e[m]){e[m]=[];e[m].push({elem:a(this)});i+="&pmIds="+m;f++}else{e[m].push({elem:a(this)})}}else{k.push(this)}});yhdChannelV2.lazyLoadPrice=a(k);if(f>0){var g=busystcok+"/busystock/restful/truestock";
a.getJSON(g+i+"&callback=?",function(l){if(!l||l.ERROR){return}a.each(l,function(r,p){var n=p.pmId,o=p.productPrice,m=p.curPriceType,s=p.marketPrice,q=e[n];a.each(q,function(y,t){var u=t.elem.find("[realprice]");var x=t.elem.find("[highprice]");if(!globalShowMarketPrice||globalShowMarketPrice!=1){if(x&&x.length>0){if(o==s){x.css("visibility","hidden")}else{x.html("&yen;"+s)}}}else{x.html("&yen;"+s)}if(u&&u.length>0){var w={html:u.attr("realprice"),price:o,priceType:m};var v=yhdChannelV2.getPriceDomHtml(w);u.html(v);u.removeAttr("realprice")}t.elem.removeAttr("priceDomId")})})})}}}catch(j){setTimeout("yhdChannelV2.loadPrice()",d)}if(f>=c){setTimeout("yhdChannelV2.loadPrice()",d)}b=false};a(window).bind("scroll",yhdChannelV2.loadPrice);setTimeout("yhdChannelV2.loadPrice()",d)})(jQuery);var yhdF2E={};yhdF2E.tabSwitch=function(a,b,c,j){var d=$(c);d.find(a).each(function(){$(this).children("li").eq(j).addClass("on")});d.each(function(){$(this).find(b).eq(j).show()});d.each(function(e){var f=d.eq(e).find(a).children("li");f.mouseover(function(){var i=f.index(this),h=$(this);var g=d.eq(e).find(b);h.siblings("li").removeClass("on");h.addClass("on");g.hide();g.eq(i).stop().show()})})};yhdF2E.clSlider=function(a,b,c,d,h){var A=$(c),D=A.find(a),B=A.find(b),w=B.children("li");var z=parseFloat(A.height()),F=parseFloat(A.width());var E=D.children("li").length,G=d;var I;H();function H(){J();e();C()}function e(){I=setInterval(J,h)}function C(){w.mouseover(function(){G=w.index($(this));$(this).siblings().removeClass("on").end().addClass("on");clearInterval(I);J()}).mouseout(function(){e()
})}function J(){if(G<E){var f=z*G;w.eq(G).siblings().removeClass("on").end().addClass("on");D.stop().animate({top:-f},300);G++;if(G==E){G=0}}}};yhdF2E.showTag=function(){$(".flagshipList a").hover(function(){$(this).children(".extra").show()},function(){$(this).children(".extra").hide()})};yhdF2E.bindTracker=function(b){$("#"+b).delegate("a[tk]","click",function(){var d=$(this),a=d.attr("tk");if(a){addTrackPositionToCookie("1",a)}})};function setAddressCityback(k){if(currSiteId==2){addTrackPositionToCookie("1","YW_Province")}var h=window.location.href,l=$.cookie("provinceId");if(h.indexOf("provinceId=")!=-1){var n=/provinceId=[0-9]+/;h=h.replace(n,"provinceId="+l);window.location.href=h;return}var m=/^(http:\/\/){0,1}([^/]+\/)[0-9]+[/]{0,1}([^/]+){0,1}$/;if(h.match(m)){h=h.replace(m,"$1$2"+l+"/$3");
window.location.href=h;return}var i=/^(http:\/\/){0,1}([^\/]+\/channel\/[0-9]+_)[0-9]+[\/]{0,1}([^/]+){0,1}$/;if(h.match(i)){h=h.replace(i,"$1$2"+l+"/$3");window.location.href=h;return}var j=/^(http:\/\/){0,1}(channel|channel-home)(\.[a-zA-Z0-9]+\.com\/[a-zA-Z0-9]+\/)(baobao_[0-9]+\/){0,1}[0-9]+\/{0,1}(\?[^\/]+){0,1}(#[^\/]+)*$/;if(h.match(j)){h=h.replace(j,"$1$2$3$4"+l+"/$5");window.location.href=h;return}window.location.reload()}(function(p){var j=1,k=window.location.href,i=p.cookie("provinceId");var m=/^http:\/\/channel\.[^\/]+\.com\/[a-zA-Z]+\/([0-9]+)/;o(m);var l=/^http:\/\/[^\/]+\.com\/([0-9]+)[\/]{0,1}/;o(l);var n=/^http:\/\/[^\/]+\/channel\/[0-9]+_([0-9]+)/;o(n);function o(a){var b=k.match(a);if(b&&b.length>1){j=b[1];if(i&&i>0&&j!=i){setAddressCityback()}}}})(jQuery);(function(){var Switchable=function(){};Switchable.prototype={main:function(elem){var st=this;var data=eval("("+$(elem).attr("st-config")+")")||null;if(data==null){return false}st.markeds={contentBox:"st-contentBox",triggerBox:"st-triggerBox",btnPrev:"st-btnPrev",btnNext:"st-btnNext"};st.effect=data.effect||"scrollx";st.autoPlay=data.autoPlay||false;st.interval=data.interval||3000;st.activeClass=data.activeClass||"on";st.space=data.space||0;st.speed=data.speed||300;st.eventType=data.eventType||"mouseover";st.delay=data.delay||0;st.onChange=data.onChange||null;st.currentIndex=0;st.timer=0;st.container=$(elem);st.sprite=st.container.find("."+st.markeds.contentBox);st.liArr=st.sprite.children();st.len=st.liArr.length;st.btnArr=st.container.find("."+st.markeds.triggerBox).children();st.btnPrev=st.container.find("."+st.markeds.btnPrev);
st.btnNext=st.container.find("."+st.markeds.btnNext);st.initStyle();st.addEvent();st.autoCutover()},initStyle:function(){var st=this;var ef=st.effect;st.container.css({overflow:"hidden",position:"relative"});switch(ef){default:case"scrollx":st.sprite.css({width:st.len*st.space,position:"absolute"});st.liArr.css({"float":"left"});break;case"scrolly":st.sprite.css({position:"absolute"});break;case"fade":st.liArr.css({opacity:0,"z-index":0,position:"absolute"});$(st.liArr[0]).css({opacity:1,"z-index":1});break;case"visible":st.liArr.css({display:"none"});$(st.liArr[0]).css({display:"block"});break}},addEvent:function(){var st=this;var delayed=0;st.btnArr.each(function(i,e){$(e).bind(st.eventType,function(){clearInterval(delayed);delayed=setInterval(function(){st.currentIndex=i;st.cutover();clearInterval(delayed)
},st.delay)})});st.container.mouseenter(function(){clearInterval(st.timer)});st.container.mouseleave(function(){st.autoCutover()});st.btnPrev.click(function(){st.currentIndex--;if(st.currentIndex<0){st.currentIndex=st.len-1}st.cutover()});st.btnNext.click(function(){st.currentIndex++;if(st.currentIndex>st.len-1){st.currentIndex=0}st.cutover()})},cutover:function(){var st=this;var ef=st.effect;st.btnArr.removeClass(st.activeClass);$(st.btnArr[st.currentIndex]).addClass(st.activeClass);switch(ef){default:case"scrollx":st.sprite.stop().animate({left:-st.space*st.currentIndex},st.speed);break;case"scrolly":st.sprite.stop().animate({top:-st.space*st.currentIndex},st.speed);break;case"fade":st.liArr.stop().animate({opacity:0});st.liArr.css("z-index",0);$(st.liArr[st.currentIndex]).stop().animate({opacity:1},st.speed);
$(st.liArr[st.currentIndex]).css("z-index",1);break;case"visible":st.liArr.css({display:"none"});$(st.liArr[st.currentIndex]).css({display:"block"});break}if(st.onChange!=null){st.onChange(st.currentIndex)}},autoCutover:function(){var st=this;if(!st.autoPlay){return false}st.timer=setInterval(function(){st.currentIndex++;if(st.currentIndex>st.len-1){st.currentIndex=0}st.cutover()},st.interval)}};var Exchange=function(){};Exchange.prototype={main:function(elem){var ex=this;var data=$.parseJSON($(elem).attr("ex-config"))||null;if(data==null){return false}ex.markeds={contentBox:"ex-contentBox",triggerBox:"ex-triggerBox",btnPrev:"ex-btnPrev",btnNext:"ex-btnNext"};ex.container=$(elem);ex.sprite=ex.container.find("."+ex.markeds.contentBox);ex.template=ex.sprite.html();ex.json=data.json||{};ex.num=data.num||0;
ex.space=data.space||0;ex.speed=data.speed||300;ex.effect=data.effect||"default";ex.eventType=data.eventType||"mouseover";ex.delay=data.delay||0;ex.onChange=data.onChange||null;ex.activeClass=data.activeClass||"on";ex.btnPrev=ex.container.find("."+ex.markeds.btnPrev);ex.btnNext=ex.container.find("."+ex.markeds.btnNext);ex.btnArr=ex.container.find("."+ex.markeds.triggerBox).children();ex.init=data.init||null;if(ex.init!=null){ex.init()}ex.currentIndex=0;ex.page=Math.ceil(ex.json.length/ex.num);ex.initData();ex.addEvent()},isfirst:false,initData:function(){var ex=this;var htmlText="";var currHtml=ex.sprite.html();var arg0=arguments[0];for(var i=0;i<ex.num;i++){if(ex.json[i]){htmlText+=ex.substitute(ex.template,ex.json[i])}}if(!ex.isfirst){ex.isfirst=true;ex.sprite.html(htmlText);ex.sprite.css({position:"absolute"})
}else{switch(ex.effect){default:case"default":ex.sprite.html(htmlText);break;case"scrollx":moveto("left");break;case"scrolly":moveto("top");break;case"lined":replaceDom("defalut");break;case"linedFade":replaceDom("fade");break}if(ex.onChange!=null){ex.onChange(ex.currentIndex)}}function moveto(fx){ex.sprite.html("");var str,dest;if(arg0){ex.sprite.css({width:ex.space*3});str=currHtml+htmlText;dest=ex.space}else{str=htmlText+currHtml;ex.sprite.css(fx,-ex.space);dest=0}ex.sprite.html(str);var o={};o[fx]=-dest;ex.sprite.stop().animate(o,ex.speed,function(){ex.sprite.css(fx,0);ex.sprite.html(htmlText)})}function replaceDom(){var m=0;var childArr=ex.sprite.children();var m=arg0?ex.num-1:0;var aStr=arguments[0];run();var loop=setInterval(function(){if(arg0){m--;if(m<0){clearInterval(loop)}}else{m++;
if(m>ex.num-1){clearInterval(loop)}}run()},100);function run(){var newE=ex.json[m]?ex.substitute(ex.template,ex.json[m]):"";$(childArr[m]).replaceWith(newE);if(aStr=="fade"){var currElem=$(ex.sprite.children()[m]);currElem.css("opacity",0.5);currElem.animate({opacity:1})}}}},addEvent:function(){var ex=this;var delayed=0;ex.btnArr.each(function(i,e){$(e).bind(ex.eventType,function(){clearInterval(delayed);delayed=setInterval(function(){var diff=Math.abs(ex.currentIndex-i);if(diff!=0){ex.currentIndex<i?next(diff):prev(diff)}ex.currentIndex=i;clearInterval(delayed)},ex.delay)})});ex.btnPrev.click(function(){prev(1)});ex.btnNext.click(function(){next(1)});function prev(m){for(var o=0;o<m;o++){for(var n=0;n<ex.num;n++){var e=ex.json.pop();ex.json.unshift(e)}ex.currentIndex--;if(ex.currentIndex<0){ex.currentIndex=ex.page-1
}cutover()}ex.initData(false)}function next(m){for(var o=0;o<m;o++){for(var n=0;n<ex.num;n++){var e=ex.json.shift();ex.json.push(e)}ex.currentIndex++;if(ex.currentIndex>ex.page-1){ex.currentIndex=0}cutover()}ex.initData(true)}function cutover(){ex.btnArr.removeClass(ex.activeClass);$(ex.btnArr[ex.currentIndex]).addClass(ex.activeClass)}},substitute:function(str,object){return str.replace(/\\?\{([^}]+)\}/g,function(match,name){if(match.charAt(0)=="\\"){return match.slice(1)}return(object[name]!=undefined)?object[name]:""})}};$(function(){var stArr=$(".yhdui-plug-switchable");if(stArr.length>0){stArr.each(function(i,e){new Switchable().main(e)})}var exArr=$(".yhdui-plug-exchange");if(exArr.length>0){exArr.each(function(i,e){new Exchange().main(e)})}})})();var yhdLib=yhdLib||{};yhdLib.switchable=function(e){var i={container:"",content:"",trigger:"",pageButton:[],steps:1,effect:"fade",autoPlay:false,interval:3000,activeClass:"on",speed:300,eventType:"mouseover",delay:0,init:null,onChange:null};var b=0;var k=0;var l={};var q,o,a,s,h,n,c,d;var g,m;l=$.extend(i,e);q=$(l.container);o=q.find(l.content);if(q.length<=0||o.length<=0){return false}a=o.children();s=a.length;h=Math.ceil(s/l.steps);n=q.find(l.trigger).children();c=q.find(l.pageButton[0]);d=q.find(l.pageButton[1]);if(l.init!=null){l.init()}j();p();f();function j(){g=a.eq(0).outerWidth();m=a.eq(0).outerHeight();switch(l.effect){default:case"scrollx":o.css({width:99999,position:"absolute"});a.css({"float":"left"});var t=g*l.steps;for(var u=0;u<l.steps;u++){$(a).eq(s-u-1).clone().prependTo(o);
o.css("left",-t)}break;case"scrolly":o.css({position:"absolute"});var v=m*l.steps;for(var u=0;u<l.steps;u++){$(a).eq(s-u-1).clone().prependTo(o);o.css("top",-v)}break;case"fade":a.css({opacity:0,"z-index":0,position:"absolute"});a.eq(0).css({opacity:1,"z-index":1});break;case"visible":a.css({display:"none"});a.eq(0).css({display:"block"});break}}function r(){if(l.onChange!=null){l.onChange(b,h)}n.eq(b).addClass(l.activeClass).siblings().removeClass(l.activeClass);switch(l.effect){default:case"scrollx":var t=g*l.steps;o.stop().animate({left:-t*b-t},l.speed);break;case"scrolly":var u=m*l.steps;o.stop().animate({top:-u*b-u},l.speed);break;case"fade":a.eq(b).stop().animate({opacity:1}).siblings().stop().animate({opacity:0});a.eq(b).css("z-index",1).siblings().css("z-index",0);break;case"visible":a.eq(b).css("display","block").siblings().css("display","none");
break}}function p(){var t=0;n.each(function(u,v){$(v).bind(l.eventType,function(){clearInterval(t);t=setInterval(function(){b=u;r();clearInterval(t)},l.delay)})});q.bind({mouseenter:function(){clearInterval(k)},mouseleave:function(){f()}});c.click(function(){b--;if(b==-2){b=h-2;if(l.effect=="scrollx"){o.css("left",-g*l.steps*h)}if(l.effect=="scrolly"){o.css("top",-m*l.steps*h)}}r()});d.click(function(){b++;if(b==h){b=0;if(l.effect=="scrollx"){o.css("left",0)}if(l.effect=="scrolly"){o.css("top",0)}}r()})}function f(){if(h<=1){return false}if(!l.autoPlay){return false}k=setInterval(function(){b++;if(b==h){b=0;o.css("left",0)}r()},l.interval)}};var femaleClothes={hoverButton:function(){$(".mod_banner").delegate(".left_arrow","hover",function(){$(this).toggleClass("left_arrow_hover")});$(".mod_banner").delegate(".right_arrow","hover",function(){$(this).toggleClass("right_arrow_hover")})},cImgplayer:function(){$(".mod_banner").hover(function(){$(".left_arrow").show();$(".right_arrow").show()},function(){$(".left_arrow").hide();$(".right_arrow").hide()});yhdLib.switchable({container:"#switchable3",content:".contentBox",trigger:".triggerBox",effect:"fade",pageButton:[".btnPrev",".btnNext"],autoPlay:true})},imgPlayer:function(){var b=$(".img_player .img_box").find("img").length;$(".img_player .img_box").find("li").eq(0).clone(true).appendTo($(".img_player .img_box"));$(".img_player .img_box").find("li").eq(b-1).clone(true).prependTo($(".img_player .img_box"));
for(var d=0;d<b;d++){$(".btn_container ul .real_box").append("<a href='javascript:;'></a>")}$(".btn_container ul .real_box").find("a").eq(0).addClass("a_hover");$(".img_player").hover(function(){$(this).find(".left_arrow").show();$(this).find(".right_arrow").show()},function(){$(this).find(".left_arrow").hide();$(this).find(".right_arrow").hide()});var e=$(".img_player .img_box").find("img").width();var f=$(".img_player .img_box").find("img").length-2;var g=1;var h=null;clearInterval(h);h=setInterval(function(){$(".right_arrow").click()},3000);$(".img_player").mouseenter(function(){clearInterval(h)});$(".img_player").mouseleave(function(){h=setInterval(function(){$(".right_arrow").click()},3000)});$(".right_arrow").click(function(){if($(".img_box").is(":animated")){return}else{g++;c(-1)}});
$(".left_arrow").click(function(){if($(".img_box").is(":animated")){return}else{g--;c(1)}});$(".btn_container").delegate("a","hover",function(){if($(".img_box").is(":animated")){return}else{var j=$(this).index()+1;var k=j-g;if(k>0){g=j;c(1)}else{if(k==0){return}else{g=j;c(-1)}}}});function c(j){var i=-g*e;if(j<0){if(i<-f*e){g=1;$(".img_box").animate({left:i},function(){$(".img_box").css("left",-e)})}else{$(".img_box").animate({left:i})}}else{if(i>-e){g=f;$(".img_box").animate({left:i},function(){$(".img_box").css("left",-f*e)})}else{$(".img_box").animate({left:i})}}a()}function a(){$(".btn_container .real_box").find("a").removeClass("a_hover");$(".btn_container .real_box").find("a").eq(g-1).addClass("a_hover")}},imgSlide:function(){$(".opacity_div").mouseenter(function(){if($(this).siblings(".container_animate").find(".box_notice").hasClass("box_notice2")==true){$(this).siblings(".container_animate").find(".box_notice").removeClass("box_notice2");
$(".img2").stop().animate({top:268,left:133,width:80,height:80});$(".img2 img").stop().animate({width:80,height:80});$(".price2").stop().animate({left:13,top:317});$(".goods_name2").stop().animate({left:8,top:302,width:106});$(".notice").stop().animate({top:280,left:5});$(".img1").stop().animate({width:160,height:160,left:"50%",top:40,"margin-left":"-80px"});$(".img1 img").stop().animate({width:160,height:160});$(".goods_name1").stop().animate({top:213,width:"136px",left:45});$(".price1").stop().animate({top:"230px",left:"50%","margin-left":"-50px"});$(".price2 .old_price").stop().animate({opacity:0});$(".price1 .old_price").stop().animate({opacity:1});$(".border2").stop().animate({opacity:0});$(".color_change").stop().animate({height:88});$(".opacity_div").hide()}});$(".box_notice").mouseenter(function(){$(".opacity_div").show();
$(this).addClass("box_notice2");$(".notice").stop().animate({top:103,left:80});$(".img2").stop().animate({top:125,left:25,width:170,height:170});$(".img2 img").stop().animate({width:170,height:170});$(".goods_name2").stop().animate({left:0,width:"136px",left:45});$(".price2").stop().animate({left:68});$(".img1").stop().animate({width:75,height:75,top:10,left:126,"margin-left":0});$(".img1 img").stop().animate({width:75,height:75});$(".goods_name1").stop().animate({left:8,top:37,"margin-left":0,width:106});$(".price1").stop().animate({left:14,top:52,"margin-left":0});$(".price2 .old_price").stop().animate({opacity:1});$(".price1 .old_price").stop().animate({opacity:0});$(".border2").stop().animate({opacity:1});$(".color_change").stop().animate({height:258})});$(".buy_notice").mouseleave(function(){if($(this).find(".box_notice").hasClass("box_notice2")==true){$(this).find(".box_notice").removeClass("box_notice2");
$(".img2").stop().animate({top:268,left:133,width:80,height:80});$(".img2 img").stop().animate({width:80,height:80});$(".price2").stop().animate({left:13,top:317});$(".goods_name2").stop().animate({left:8,top:302,width:106});$(".notice").stop().animate({top:280,left:5});$(".img1").stop().animate({width:160,height:160,left:"50%",top:40,"margin-left":"-80px"});$(".img1 img").stop().animate({width:160,height:160});$(".goods_name1").stop().animate({top:213,width:"136px",left:45});$(".price1").stop().animate({top:"230px",left:"50%","margin-left":"-50px"});$(".price2 .old_price").stop().animate({opacity:0});$(".price1 .old_price").stop().animate({opacity:1});$(".border2").stop().animate({opacity:0});$(".color_change").stop().animate({height:88});$(".opacity_div").hide()}})},hoverButton2:function(){$(".shop_title").find("a").hover(function(){$(this).siblings("a").removeClass("a_hover");
$(this).addClass("a_hover")})},hoverImg:function(){$(".img_player_box").delegate("li","mouseenter",function(){$(this).siblings("li").removeClass("show_box");$(this).addClass("show_box")});$(".img_player_box").delegate("li","mouseleave",function(){$(this).removeClass("show_box")})},imgPlay2:function(){$(".img_player_box").hover(function(){$(this).find(".left_arrow1").show();$(this).find(".right_arrow1").show()},function(){$(this).find(".left_arrow1").hide();$(this).find(".right_arrow1").hide()});$(".right_arrow1").hover(function(){$(this).toggleClass("right_arrow1_hover")});$(".left_arrow1").hover(function(){$(this).toggleClass("left_arrow1_hover")});$(".mod_shop").each(function(){var h=this;var g=1;var c=$(this).find(".img_player_box").find(".container").find("ul").length;var e=$(this).find(".img_player_box").find(".container").find("ul").eq(0).width();
$(this).find(".img_player_box").find(".container").find("ul").eq(0).clone(true).appendTo($(this).find(".img_player_box").find(".container"));$(this).find(".img_player_box").find(".container").find("ul").eq(c-1).clone(true).prependTo($(this).find(".img_player_box").find(".container"));for(var d=0;d<c;d++){var a='<a href="javascript:;"></a>';$(this).find(".shop_title").find("ul").append(a)}$(this).find(".shop_title").find("ul").find("a").eq(0).addClass("a_hover");$(this).find(".right_arrow1").click(function(){if($(h).find(".container").is(":animated")){return}else{g++;f(-1);b()}});$(this).find(".left_arrow1").click(function(){if($(h).find(".container").is(":animated")){return}else{g--;f(1);b()}});$(this).find(".shop_title ul a").hover(function(){$(this).siblings("a").removeClass("a_hover");$(this).addClass("a_hover");
if($(h).find(".container").is(":animated")){return}else{var j=$(this).index()+1;var k=j-g;if(k>0){g=j;f(-1)}else{if(k==0){return}else{g=j;f(1)}}}});function f(j){var i=-g*e;if(j<0){if(i<-c*e){g=1;$(h).find(".container").animate({left:i},function(){$(this).css("left",-e)})}else{$(h).find(".container").animate({left:i})}}else{if(i>-e){g=c;$(h).find(".container").animate({left:i},function(){$(this).css("left",-c*e)})}else{$(h).find(".container").animate({left:i})}}}function b(){$(h).find(".shop_title").find("ul").find("a").removeClass("a_hover");$(h).find(".shop_title").find("ul").find("a").eq(g-1).addClass("a_hover")}})},hoverDress:function(){$("body").delegate(".hover_content","mouseenter",function(){$(this).addClass("hover_opacity")});$("body").delegate(".hover_content","mouseleave",function(){$(this).removeClass("hover_opacity")
})},imgPlay3:function(){$(".tab_logo").each(function(){var f=this;var b=$(this).find(".tab_logo_box").find("ul").length;$(this).find(".tab_logo_box").find("ul").eq(0).clone(true).appendTo($(this).find(".tab_logo_box"));$(this).find(".tab_logo_box").find("ul").eq(b-1).clone(true).prependTo($(this).find(".tab_logo_box"));var d=1;if($(this).find(".tab_logo_box").find("ul").length<=1){$(this).find(".arrow").hide();return}else{var a=$(this).find(".tab_logo_box").find("ul").width();var e=$(this).find(".tab_logo_box").find("ul").length-2;$(f).find(".right_arrow2").click(function(){if($(this).parents(".arrow").siblings(".tab_logo_box").is(":animated")){return}else{d++;c(-1)}});$(f).find(".left_arrow2").click(function(){if($(this).parents(".arrow").siblings(".tab_logo_box").is(":animated")){return}else{d--;
c(1)}});function c(h){var g=-d*a;if(h<0){if(g<-a*e){d=1;$(f).find(".tab_logo_box").animate({left:g},function(){$(this).css("left",-a)})}else{$(f).find(".tab_logo_box").animate({left:g})}}else{if(g>-a){d=e;$(f).find(".tab_logo_box").animate({left:g},function(){$(this).css("left",-a*e)})}else{$(f).find(".tab_logo_box").animate({left:g})}}}}})},btnhover:function(){$(".left_arrow2").hover(function(){$(this).toggleClass("left_arrow2_hover")});$(".right_arrow2").hover(function(){$(this).toggleClass("right_arrow2_hover")})},hoverImg2:function(){$(".hover_list").mouseenter(function(){var a=this;$(this).find("img").css("opacity",0.9);this.timer=null;clearInterval(this.timer);this.timer=setTimeout(function(){$(a).find("img").css("opacity",1)},300)})},hoverOtherChannel:function(){$(".other_channel a").each(function(){$(this).find("img").eq(1).hide();
$(".other_channel").delegate("a","mouseenter",function(){$(this).siblings("a").removeClass("hover_channel");$(this).addClass("hover_channel");$(this).find("img").eq(0).hide();$(this).find("img").eq(1).show()});$(".other_channel").delegate("a","mouseleave",function(){$(this).find("img").eq(1).hide();$(this).find("img").eq(0).show();$(this).removeClass("hover_channel")})})},main:function(){this.hoverButton();this.imgSlide();this.hoverButton2();this.hoverImg();this.hoverDress();this.btnhover();this.imgPlay2();this.hoverImg2();this.hoverOtherChannel();this.cImgplayer()}};$(function(){femaleClothes.main()});(function(a){a(document).ready(function(){if(isWidescreen){a("#mainContainer").lazyImg({wideAttr:"data-wi",indexLoad:true})}else{a("#mainContainer").lazyImg({indexLoad:true})}yhdF2E.bindTracker("mainContainer");a("#mainContainer").channelLazyDom({callback:function(){femaleClothes.imgPlay3();yhdChannelV2.loadPriceDom=yhdChannelV2.loadPriceDom||[];var b=a(this).find("[priceDomId]");a.merge(yhdChannelV2.loadPriceDom,b)}})})})(jQuery);