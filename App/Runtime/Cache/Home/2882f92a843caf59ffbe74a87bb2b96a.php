<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!-- saved from url=(0037)http://www.kaisenbuy.com/topic-2.html -->
<html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<meta name="Keywords" content="">
<meta name="Description" content="">
<title></title>
<link href="/tongmeng/Public/Home/Css/m_base.css" rel="stylesheet" type="text/css">
<link href="/tongmeng/Public/Home/Css/m_style.css" rel="stylesheet" type="text/css">
<link href="/tongmeng/Public/Home/Css/m_slider.css" rel="stylesheet" type="text/css">
<link href="/tongmeng/Public/Home/Css/m_flex.css" rel="stylesheet" type="text/css">
<link href="/tongmeng/Public/Home/Css/topic_cihong.css" rel="stylesheet" type="text/css">
<link href="/tongmeng/Public/Home/Css/style.css" rel="stylesheet" type="text/css">
<script charset="utf-8" src="/tongmeng/Public/Home/Js/v.js"></script><script src="/tongmeng/Public/Home/Js/hm.js"></script><script type="text/javascript" src="/tongmeng/Public/Home/Js/common.js"></script><script type="text/javascript" src="/tongmeng/Public/Home/Js/jquery-1.5.1.min.js" charset="gb2312"></script>
</head>
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
<script type="text/javascript">
$('.discovery').hover(function(){
 $(this).find('.sub_layer').show();
},function(){
 $(this).find('.sub_layer').hide();
})
var codeL = $('.w').offset().left+20;
$('#weixin').hover(function(){
 $('#code').css({'right':codeL}).show();
},function(){
 $('#code').hide();
})
$("#AddFavorite").on("click", function () { 
 var sURL = "http://www.kaisenbuy.com/"; 
 sTitle = "开森商城"; 
 try {window.external.addFavorite(sURL, sTitle);} 
 catch (e) { 
 try {window.sidebar.addPanel(sTitle, sURL, "slice");} 
 catch (e) {alert("您可以尝试通过快捷键 Ctrl + D 加入到收藏夹~")} 
 } 
}); 
function formsubmit()
{
 document.searchForm.submit()
}
</script><div class="topic_cihong1"></div>
<div class="topic_cihong2" id="cihong"></div>
<div class="topic_cihong3"></div>
<div class="topic_cihong4"></div>
<div class="topic_cihong5"></div>
<div class="topic_cihong6"></div>
<div class="topic_cihong7"></div>
<div class="topic_cihong8"></div>
<div class="topic_cihong9"></div>
<div class="topic_cihong10"></div>
<div class="topic_ch_bg">
 
<div class="block">
 
   
		    
    <div class="box_liuyi">
    <div class="nbox clearfix">
     <div class="nbox_title_ch" id="遥控传递爱">爱心传递</div>
    <div class="centerPadd">
      
    </div> 
            
</div>


<div style="border:3px dashed pink; width:300px; height:120px;">
    <table style="margin:24px;">
      <form action="/tongmeng/index.php/Love/check" method="post">
          <tr>
          <td><input type="text" name="lovemoney"></td>
          </tr>

          <tr>
          <input type="hidden" name="lovetime" value="<?php echo time(); ?>">
          <td><center><input type="submit" value="提交爱心"></center></td>
          </tr>
      </form>
    </table>  
</div>



  <br/>
  <br/>

 <div class="nbox_title_ch" id="遥控传递爱">爱心榜</div>
       <div style="border:5px dashed pink; width:300px; ">
             <table >
                  <form>
                   <?php if(is_array($love)): foreach($love as $key=>$data): ?><tr>
                         
                           <td style="font-size:15px;">姓名：<?php echo ($data['name']); ?></td>
                           <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                           <td>爱心捐款：<?php echo ($data['lovemoney']); ?>元</td>
                           
                       </tr><?php endforeach; endif; ?>
                 </form>
             </table>  
        </div>
</div>


  <div class="left_nav" id="left_nav" style="top: 99px; display: block;">
    	<a href="http://www.kaisenbuy.com/topic-2.html#cihong" style="height:238px"></a>
        <a href="http://www.kaisenbuy.com/topic-2.html#早教启蒙爱" style="height:43px"></a>
        <a href="http://www.kaisenbuy.com/topic-2.html#积木分享爱" style="height:43px"></a>
        <a href="http://www.kaisenbuy.com/topic-2.html#遥控传递爱" style="height:43px"></a>
        <a href="http://www.kaisenbuy.com/topic-2.html#音乐歌颂爱" style="height:43px"></a>
        <a href="http://www.kaisenbuy.com/topic-2.html#卡通同享爱" style="height:43px"></a>
  
    </div>
<?php echo W('Skins/bottom');?>
</body></html>