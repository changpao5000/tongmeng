<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!-- saved from url=(0046)http://www.kaisenbuy.com/article_cat.php?id=11 -->
<html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<meta name="Keywords" content="">
<meta name="Description" content="">
<title>童梦网帮助中心</title>
<link rel="shortcut icon" href="http://www.kaisenbuy.com/favicon.ico">
<link rel="icon" href="http://www.kaisenbuy.com/animated_favicon.gif" type="image/gif">
<link href="/tongmeng/Public/Home/Css/m_base.css" rel="stylesheet" type="text/css">
<link href="/tongmeng/Public/Home/Css/m_style.css" rel="stylesheet" type="text/css">
<link href="/tongmeng/Public/Home/Css/m_slider.css" rel="stylesheet" type="text/css">
<link href="/tongmeng/Public/Home/Css/m_flex.css" rel="stylesheet" type="text/css">
<link href="/tongmeng/Public/Home/Css/style.css" rel="stylesheet" type="text/css">
<script charset="utf-8" src="/tongmeng/Public/Home/Js/v.js"></script><script src="/tongmeng/Public/Home/Js/hm.js"></script><script type="text/javascript" src="/tongmeng/Public/Home/Js/common.js"></script></head>
<body class="w1200">
<script type="text/javascript">
var isWidescreen=screen.width>=1280;
if (isWidescreen){document.getElementsByTagName("body")[0].className="w1200";}
</script>
<script type="text/javascript">
var process_request = "正在处理您的请求...";
</script>
<script type="text/javascript" src="/tongmeng/Public/Home/Js/jquery-1.7.2.min.js"></script>
<?php echo W('Skins/head');?>
<script type="text/javascript" src="/tongmeng/Public/Home/Js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="/tongmeng/Public/Home/Js/jquery.scrollLoading.js"></script>
<script type="text/javascript" src="/tongmeng/Public/Home/Js/jquery-migrate-1.1.0.js"></script>
<script type="text/javascript" src="/tongmeng/Public/Home/Js/jquery.hoverdelay.js"></script>
<div class="block clearfix">
 <div class="">
 <div id="ur_here">
LOCATIONG : <a href="">首页</a> <code>&gt;</code> <a href=""></a> 
</div>
</div>
<div class="blank5"></div>  
  <div class="AreaL">
<img class="f_l" src="/tongmeng/Public/Home/Img/help_center_t.gif">
<div id="help_center" class="cat_m">
<dl>
  <dt><a href="" title="关于我们">关于我们</a></dt>
    <dd><a href="" title="公司简介">公司简介</a></dd>
    <dd><a href="" title="诚聘英才">诚聘英才</a></dd>
    <dd><a href="" title="网站地图">网站地图</a></dd>
  </dl>
<dl>
  <dt><a href="" title="购物指南">购物指南</a></dt>
    <dd><a href="" title="注册新用户">注册新用户</a></dd>
    <dd><a href="" title="订购流程">订购流程</a></dd>
    <dd><a href="" title="常见问题">常见问题</a></dd>
  </dl>
<dl>
  <dt><a href="" title="配送方式">配送方式</a></dt>
    <dd><a href="" title="收货指南">收货指南</a></dd>
    <dd><a href="" title="物流费用">物流费用</a></dd>
    <dd><a href="" title="物流配送">物流配送</a></dd>
  </dl>
<dl>
  <dt><a href="" title="售后服务">售后服务</a></dt>
    <dd><a href="" title="7天无理由退换货">7天无理由退换货</a></dd>
    <dd><a href="" title="如何申请退款">如何申请退款</a></dd>
  </dl>
<dl>
  <dt><a href="" title="购物保障">购物保障</a></dt>
    <dd><a href="" title="正品保证">正品保证</a></dd>
    <dd><a href="" title="注册协议">注册协议</a></dd>
    <dd><a href="" title="隐私保护">隐私保护</a></dd>
  </dl>
</div>
<img class="f_l" src="/tongmeng/Public/Home/Img/cat_b.gif">
<div class="blank"></div><div class="blank"></div>
    
  </div>
  
  
  <div class="AreaR">
   <div class="box">
   <div class="box_1">
    <h3><span>帮助中心</span></h3>
    <div class="boxCenterList">
    <!--模糊搜索
      <form action="/tongmeng/index.php/Help/index" name="search_form" method="post" class="article_search">
            <input name="title" type="text" id="requirement" value="" class="inputBg">
           
            <input type="submit" value="立即搜索" class="bnt_blue_1">
      </form>
       -->
      <table width="100%" border="0" cellpadding="0" cellspacing="1" bgcolor="#ffffff">
     
        <tbody>
       <?php if(is_array($help)): foreach($help as $key=>$data): ?><tr>
        <td bgcolor="#ffffff">
            <div style="border-bottom:1px dotted #ccc; padding:5px 0; background:">
       			 <a target="_blank" style="text-decoration:none" href="/tongmeng/index.php/Help/content/id/<?php echo ($data['id']); ?>" title="" class="f6">          <?php echo ($data['title']); ?>
             </a>
       		 </div>
        </td>

          <td bgcolor="#ffffff">
         	 <div style="border-bottom:1px dotted #ccc;padding:5px 0">
          			<?php echo (date("Y-m-d H:m:s",$data['time'])); ?>          
         	 </div>
          </td>
        </tr><?php endforeach; endif; ?>


    
          </tbody>
        </table>
    </div>
   </div>
  </div>
  <div class="blank5"></div>
  
<form name="selectPageForm" action="http://www.kaisenbuy.com/article_cat.php" method="get">
			<!-- <div class="paixu">
        <span class="paixu_page">
        总计 <b>16</b>  个记录&nbsp;&nbsp;
               <a href="javascript:void(0);">上一页</a>         
                  <a class="page00">1</a>
                  <a href="">2</a>                                                                                          
                  <a href=""><?php echo ($Page); ?></a></span>
      </div> -->
 
</form>
<script type="Text/Javascript" language="JavaScript">
<!--
function selectPage(sel)
{
  sel.form.submit();
}
//-->
</script>
  </div>  
  
</div>
<?php echo W('Skins/bottom');?>
</body></html>