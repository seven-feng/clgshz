<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<jsp:include page="../main/header-meta.jsp"/>

<link rel="stylesheet" type="text/css" href="<%=basePath%>resources/css/crud.css"/>
<link rel="stylesheet" type="text/css" href="<%=basePath%>resources/css/detail.css"/>
<link rel="stylesheet" type="text/css" href="<%=basePath%>resources/zTree/css/zTreeStyle.css"/>


<script type="text/javascript" src="<%=basePath%>resources/zTree/js/jquery.ztree.core.min.js"></script>
<script type="text/javascript" src="<%=basePath%>resources/zTree/js/jquery.ztree.excheck.min.js"></script>
<script type="text/javascript" src="<%=basePath%>js/external/jszip.js"></script>
<script type="text/javascript" src="<%=basePath%>js/event/treeUsed.js"></script>
<script type="text/javascript" src="<%=basePath%>js/common/basicInfo.js"></script>
<script type="text/javascript" src="<%=basePath%>js/common/crud.js"></script>


<script type="text/javascript" src="http://api.tianditu.com/api?v=4.0"></script>

<title></title>
</head>
<body>
<div class="wapper">
    <div class="rightContent" style="margin-top: 50px;">
    <form id="basicInfo-form" enctype="multipart/form-data">
        <div class="mainTitle">基本信息</div>
        <table class="info-table table">
            <tbody>
            <tr>
                <td class="right subtitle">反映编号：</td>
                <td><input type="text" name="eventNo"/>
                    <input type="text" name="eventId" style="display:none"/>
                    <input type="text" name="id" style="display:none"/>
                </td>
                <td class="red right subtitle">反映时间：</td>
                <td><input type="text" name="issueTime" style="width: 205px;"/></td>
                <td class="red right subtitle">发生网格：</td>
                <td colspan="2">
                    <input name="occurOrgId" type="text" style="display:none"/>
                    <input name="occurOrg" type="text" style="width: 160px;" readonly/>
                </td>
            </tr>
            <tr>
                <td class="red right">反映渠道：</td>
                <td>
                    <select name="eventChannel" style="width: 157px; height: 26px; margin-right: 10px;">
                        <option></option>
                    </select>
                </td>
                <td colspan="2">
                    <div id="petitionCodeDiv" style="display: inline-block;"></div>
                </td>
                <td class="right">反映类型：</td>
                <td colspan="2">
                    <div id="eventTypeDiv" style="display: inline-block;"></div>
                </td>
            </tr>
            <tr>
                <td class="red right">事件类型：</td>
                <td colspan="3">
                    <input name="eventTypeStr" type="text" readonly="readonly" style="width: 300px;"/>
                    <input name="issueBigType" type="text" style="display: none;"/>
                    <input name="issueType" type="text" style="display: none;"/>
                </td>
                <td class="right">初重标识：</td>
                <td colspan="2">
                    <select name="firstStatus" style="width: 157px; height: 26px;">
                        <option value=""></option>
                        <option value="0">初</option>
                        <option value="1">重</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td class="red right">紧急程度：</td>
                <td colspan="3">
                    <input type="radio" name="emDegree" value="0" />平急
                    <input type="radio" name="emDegree" value="1" />紧急
                    <input type="radio" name="emDegree" value="2" />特急
                </td>
                <td class="right">催办次数：</td>
                <td colspan="2">
                    <input type="text" name="reminderCount"/>&nbsp;次
                </td>
            </tr>          
            <tr>
                <td class="right">归属类型：</td>
                <td colspan="6">
                    <select name="attrType" style="width: 157px; height: 26px;">
                        <option></option>
                    </select>
                </td>
            </tr>
            </tbody>
        </table>
        <table class="info-table table" style="margin-top: 30px;">
            <tbody>  
            <tr>
                <td rowspan="5" class="center subtitle">反映人信息</td>
                <td class="red right subtitle">姓名：</td>
                <td><input type="text" name="name"/></td>
                <td class="right subtitle">性别：</td>
                <td>
                    <select name="gender" style="width: 157px; height: 26px;">
                        <option value=""></option>
                        <option value="1">男</option>
                        <option value="0">女</option>
                    </select>
                </td>
                <td class="right subtitle">民族：</td>
                <td><input type="text" name="nation"/></td>
            </tr>
            <tr>
                <td class="right">身份证号：</td>
                <td><input type="text" name="certificateNo"/></td>
                <td class="right">年龄：</td>
                <td><input type="text" name="age"/></td>
                <td class="right">从事职业：</td>
                <td>
                    <select name="job" style="width: 157px; height: 26px;">
                        <option></option>
                    </select>
                </td>
            </tr>
            <tr>
                <td  class="right">电子邮箱：</td>
                <td><input type="text" name="email"/></td>
                <td  class="right">来电号码：</td>
                <td><input type="text" name="phone"/></td>
                <td  class="right">其他联系方式：</td>
                <td><input type="text" name="mobile"/></td>
            </tr>
            <tr>
                <td class="red right">住址：</td>
                <td colspan="3"><input type="text" name="address" style="width: 400px; height: 30px;"/></td>
                <td class="right">是否保密：</td>
                <td colspan="3">
                    <input type="radio" name="isSecret" value="0"/>是
                    <input type="radio" name="isSecret" value="1"/>否
                </td>
            </tr>
            <tr>
                <td class="red right">问题发生地：</td>
                <td colspan="5">
                    <input type="text" name="occurPlace" style="width: 400px; height: 30px;" />
                    <button type="button" id="mapLocation" class="btn btn-primary btn-sm" style="vertical-align: top;">地图定位</button>
                </td>
            </tr>
            </tbody>
        </table>
        <table class="info-table table" style="margin-top: 30px;">
            <tbody> 
            <tr>
                <td class="red center subtitle">反映主题</td>
                <td colspan="6"><input type="text" name="subject" style="width: 800px; height: 30px;"/></td>
            </tr>
            <tr>
                <td rowspan="2" class="red center">反映内容</td>
                <td colspan="6"><textarea name="issueContent" style="resize: none; height: 80px; width: 800px;"></textarea></td>
            </tr>
            <tr>
                <td class="right subtitle">是否排查：</td>
                <td>
                    <input type="radio" name="isCheck" value="0"/>是
                    <input type="radio" name="isCheck" value="1"/>否
                </td>
                <td class="right subtitle">是否效能件：</td>
                <td>
                    <input type="radio" name="isEffective" value="0"/>是
                    <input type="radio" name="isEffective" value="1"/>否
                </td>
                <td class="right subtitle">是否二次交办：</td>
                <td>
                    <input type="radio" name="isSecondAssignEvent" value="0"/>是
                    <input type="radio" name="isSecondAssignEvent" value="1"/>否
                </td>
            </tr>
            <tr>
                <td class="center">附件上传</td>
                <td colspan="6">
                      <input type="text" id="fileName" style="height: 30px; width: 65%;"/><input type="button" class="btn btn-primary btn-sm" style="vertical-align: top;" id="upLoadBtn" value="选择文件"/>
                      <input type="file" name="file" id="file" multiple="multiple" class="change" style="display: none;"/>
                </td>
            </tr>
            </tbody>
        </table>
        
        <div id="workorder-reply" style="display: none;">
        <div class="mainTitle">直接回复</div>
        <table class="info-table table">
            <tbody>
            <tr>
                <td class="red right subtitle">回复人：</td>
                <td><input name="replyPerson" type="text"/></td>
                <td class="red right subtitle">回复时间：</td>
                <td><input name="replyTime" type="text" style="width: 205px;"/></td>
                <td class="red right subtitle">回复单位：</td>
                <td colspan="2">
                    <input name="replyDeptId" type="text" style="display:none"/>
                    <input name="replyDept" type="text" style="width: 160px;" readonly/>
                </td>
            </tr> 
            <tr>
                <td class="red right">回复内容</td>
                <td colspan="6"><textarea name="replyContent" style="resize: none; height: 80px; width: 800px;"></textarea></td>
            </tr>
            <tr>
                <td class="right">短信内容</td>
                <td colspan="6"><textarea name="messageContent" style="resize: none; height: 80px; width: 800px;"></textarea></td>
            </tr>
            <tr>
                <td class="right">附件上传</td>
                <td colspan="6">
                      <input type="text" id="reply-fileName" style="height: 30px; width: 65%;"/><input type="button" class="btn btn-primary btn-sm" style="vertical-align: top;" id="reply-upLoadBtn" value="选择文件"/>
                      <input type="file" id="replyFile" name="replyFile" multiple="multiple" class="change" style="display: none;"/>
                </td>
            </tr>
            </tbody>
        </table>
        </div>
        
        <div style="height: 80px; text-align: center; line-height: 80px;">
            <button type="submit" id="save" class="btn btn-primary" style="margin-right: 20px;">保存</button>
            <button type="submit" id="directReply" class="btn btn-info" style="margin-right: 20px;">直接回复</button>
            <button type="button" class="btn btn-default" onclick="closeWin()">返回</button> 
        </div>
    </form>
    </div>
    
    <!-- 事件类型 -->
    <div id="modal" class="modal fade">
    <div class="modal-dialog modal-content" style="margin-top: 10%; width: 832px;">
        <div class="modal-header modal-header-adjust">
            <button type="button" class="close" data-dismiss="modal" style="width: 14px; margin-top: 11px;"/>
            <span>事件类型</span>
        </div>
        <div class="modal-body" style="height: 540px; background: #f1f1f1; text-align: center;">
            <div class="zone">
                <div class="zone_left">
                    <ul id="firstType"><li></li></ul>
                </div>
                <div class="zone_right">
                    <div class="zone_right_title" id="rightTitle"><span></span></div>
                    <div class="zone_right_content1"></div>
                    <div class="zone_right_title"><span>所选择内容分类：</span></div>
                    <div class="zone_right_content2"></div>
                </div>
            </div>
        </div>
        <div class="modal-footer" style="padding: 5px 10px 5px 0px; border: 1px solid #d6d6d6; background: #f1f1f1;">
            <button id="zone-btn" type="button" class="btn btn-primary btn-sm">确定</button>
            <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">取消</button>
        </div>
    </div>
    </div><!-- modal -->
    
    <!-- 其他类型 -->
    <div id="modal1" class="modal fade">
    <div class="modal-dialog modal-content" style="margin-top: 20%; width: 350px;">
        <div class="modal-header modal-header-adjust">
            <button type="button" class="close" data-dismiss="modal" style="width: 14px; margin-top: 11px;"/>
            <span>事件类型</span>
        </div>
        <div class="modal-body" style="height: 70px; background: #f1f1f1; text-align: center;">
            <div style="margin: 20px 0px; vertical-align: middle; font-size: 14px;">
                <span style="color: red">*</span>事件类型&nbsp;&nbsp;<input type="text" id="otherTypeInput" />
            </div>
        </div>
        <div class="modal-footer" style="padding: 5px 10px 5px 0px; border: 1px solid #d6d6d6; background: #f1f1f1;">
            <button type="button" class="btn btn-primary btn-sm" id="otherTypeBtn">确定</button>
        </div>
    </div>
    </div><!-- modal1 -->
    
    <!-- 问题发生地 -->
    <div id="mapModal" class="modal fade">
    <div class="modal-dialog modal-content" style="margin-top: 10%; width: 520px;">
        <div class="modal-header modal-header-adjust">
            <button type="button" class="close" data-dismiss="modal" style="width: 14px; margin-top: 11px;"/>
            <span>事件定位</span>
        </div>
        <div class="modal-body" style="height: 420px; background: #f1f1f1; text-align: center; padding: 10px;">
            <div id="mapDiv" style="width: 500px; height: 400px;"></div> 
        </div>
        <div class="modal-footer" style="padding: 5px 10px 5px 0px; border: 1px solid #d6d6d6; background: #f1f1f1;">
            <button type="button" class="btn btn-primary btn-sm" id="mapModalBtn">确定</button>
            <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">取消</button>
        </div>
    </div>
    </div><!-- mapModal -->
</div>

<div id="menuContent" class="menuContent" style="display:none; position: absolute; z-index:100">
    <ul id="treeMainOfficePredoing" class="ztree" style="margin-top:0; width:160px;"></ul>
</div>
</body>
<script>
var map;
var zoom = 12;

$(function(){
	//模态框-事件类型
	$.ajax({
		type: 'post',
		url: '<%=basePath%>eventBasicInfo/getIssueFirstType',
		dataType: 'json',
		success: function(data){
			for(var i in data.data){
				$('#firstType').append("<li value='" + data.data[i].code + "'>" + data.data[i].name + "</li>");
			}
			$('#firstType > li').click(function(){
		        $('#rightTitle > span').html($(this).text());
		        $('.zone_right_content2').empty();
		        $('input[name="issueBigType"]').val($(this).val());
		        $('input[name="issueType"]').val("");
		        //请求二级事件类型
		        $.ajax({
		        	type: 'post',
		        	url: '<%=basePath%>eventBasicInfo/getIssueSecondType',
		        	data: {
		        		'pid': $(this).val()
		        	},
		        	dataType: 'json',
		        	success: function(data){
		        		$('.zone_right_content1').empty();
		        		for(var i in data.data){
		                    $('.zone_right_content1').append("<div style='display: inline-block;'><span>" + data.data[i].name + "</span><span style='display: none;'>" + data.data[i].code + "</span></div>");
		                }
		        		//所选择内容分类
		        		$('.zone_right_content1 span').click(function(){
		        			$('.zone_right_content2').empty();
		        			$('input[name="issueType"]').val("");
		        			if($(this).text() == "其他"){
		        				$('#modal1').modal('show');
		        				$('#otherTypeInput').val('');
		        				$('#otherTypeBtn').click(function(){
		        					$('.zone_right_content2').empty();
		        			        $('.zone_right_content2').append("<span>" + "其他-" + $('#otherTypeInput').val() + "</span>");
		        			        $('#modal1').modal('hide');
		        			    });
		        			}else{
		        				$('.zone_right_content2').append("<span>" + $(this).text() + "</span>");
		        				$('input[name="issueType"]').val($(this).next().text());
		        			}
		        		});
		        	},
		        	error: function(){}
		        });
		    });
			
			$('#zone-btn').click(function(){  //事件类型确定按钮
				if($('#rightTitle > span').text() != "" && $('.zone_right_content2 > span').text() != ""){
                    $('input[name="eventTypeStr"]').val("[" + $('#rightTitle > span').text() + "]：" + $('.zone_right_content2 > span').text());
                    $('#modal').modal('hide');
                    $('input[name="eventTypeStr"]').blur();
                }else{
                    $.globalMessenger().post({
                        message : '请选择事件类型！',
                        type : 'error',
                        hideAfter : 2,
                        showCloseButton : true
                    });
                }
           });
		},
		error: function(){
			
		}
	});
	
	//日期控件绑定
    $('.datepicker').datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth: true,
        changeYear: true,
        timeFormat: 'hh:mm:ss',
        showSecond: true,
        yearRange: "c-100:c+100"
    });
    
    //退格键清除日期
    $('.datepicker').keydown(function (e) {
        e.keyCode == 8 ? $(e.target).val("") : e.preventDefault();
    });
    
    //事件类型
    $('input[name="eventTypeStr"]').click(function(){
    	$('#modal').modal('show');
    });
    
    //问题发生地
    $('#mapLocation').click(function(){
    	$('#mapModal').modal('show');
    	setTimeout(function() {//添加延时加载。解决问题
            map = new T.Map('mapDiv');
            map.centerAndZoom(new T.LngLat(104.73343,27.129031), zoom);
            //禁止拖拽
            //map.disableDrag();
            //禁止拖拽惯性
            map.disableInertia();
            //禁止双击放大
            map.disableDoubleClickZoom();
            map.addEventListener("click", function(e){
                var position = {};
                var arrayLngLat = [];
                
                arrayLngLat[0] = e.lnglat.getLng();
                arrayLngLat[1] = e.lnglat.getLat();
                map.clearOverLays();              
                //创建标注对象
                var marker = new T.Marker(new T.LngLat(arrayLngLat[0], arrayLngLat[1]));
                //向地图上添加标注
                map.addOverLay(marker);
                
                position.type = "Point";
                position.coordinates = arrayLngLat;
                
                $('#mapModalBtn').click(function(){
                    //位置存储
                	//$('').val(JSON.stringify(position));
                    //返回地址信息
                    $.getScript("http://api.tianditu.com/api?v=4.0", function() {
                    // 你的业务逻辑
                        geocode = new T.Geocoder();
                        geocode.getLocation(e.lnglat,searchResult);
                    });
                });
                
            });   
        },300);
    });
    
    //解析得到坐标地址
    function searchResult(result){
        if(result.getStatus() == 0){
            $('input[name="occurPlace"]').val(result.getAddress());
            $('#mapModal').modal('hide');
            $('input[name="occurPlace"]').blur();
        }
    }
    
    //上传附件
    $('#upLoadBtn').click(function(){
        $('#file').click();
    });
   
    $('#file').change(function(){
    	var files = $(this).prop('files');
        var fileNames = "";
        for(var i = 0; i < files.length; i++)
            fileNames += files[i].name + " ";
        $('#fileName').val(fileNames);
    });
    
    //退格键清除文件
    $('#fileName').keydown(function (e) {
        e.keyCode == 8 ? $(e.target).val("") : e.preventDefault();
    });
    
    //上传附件-直接回复
    $('#reply-upLoadBtn').click(function(){
        $('#replyFile').click();
    });
   
    $('#replyFile').change(function(){
        var files = $(this).prop('files');
        var fileNames = "";
        for(var i = 0; i < files.length; i++)
            fileNames += files[i].name + " ";
        $('#reply-fileName').val(fileNames);
    });
    
    //退格键清除文件
    $('#reply-fileName').keydown(function (e) {
        e.keyCode == 8 ? $(e.target).val("") : e.preventDefault();
    });
    
    //加载树
    $.fn.zTree.init($("#treeMainOfficePredoing"), settingMainOffice);
    
    //发生网格
    $("input[name='occurOrg']").click(function(){
        var cityObj = $("input[name='occurOrg']");
        var cityOffset = $("input[name='occurOrg']").offset();
        if($("#menuContent").css("display") == 'none'){
            showMenu(cityObj,cityOffset);
        }else{
            hideMenu();
        }
        
    });
})
</script>
</html>