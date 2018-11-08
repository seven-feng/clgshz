<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div class="title-one">事件详情</div>
<table class="table-one" style="width:100%">
    <colgroup>
        <col width="15%">
        <col width="35%">
        <col width="15%">
        <col width="35%">
    </colgroup>
    <tbody>
        <tr class="odd">
            <th>反映编号</th>
            <td name="eventNo" >
            <input type="text" name="eventId" style="display: none"/>
            </td>
            <th>反映时间</th>
            <td name="issueTime" ></td>
        </tr>
        <tr class="even">
            <th>事件类型</th>
            <td name="eventTypeStr" ></td>
            <th>反映渠道</th>
            <td name="eventChannelName" ></td>
        </tr>
        <tr class="odd">
            <th>姓名</th>
            <td name="name"></td>
            <th>联系方式</th>
            <td name="phone"></td>
        </tr>
        <tr class="even">
            <th>反映主题</th>
            <td name="subject" ></td>
            <th>归属类别</th>
            <td name="attrType" ></td>
        </tr>
        <tr class="odd">
            <th>紧急程度</th>
            <td name="emDegree" ></td>
            <th>地址</th>
            <td name="address" ></td>
        </tr>
        <tr class="even">
            <th>发生网格</th>
            <td name="occurOrg" ></td>
            <th>是否保密</th>
            <td name="isSecret" ></td>
        </tr>
        <tr class="odd" id="eventContent">
            <th>反映内容</th>
            <td name="issueContent"></td>
            <th>相似事件</th>
            <td><button type="button" id="simBtn" class="btn btn-primary btn-sm">查看</td>
        </tr>
        <tr class="odd hidden" colspan="3" id="workorderContent">
            <th>反映内容</th>
            <td name="issueContent"></td>
        </tr>
    </tbody>
</table>
    
<div id="moreLine" class="hrLine">
    <hr style="right: 55px;"><a id="moreContent" style="width: 55px;">显示更多</a>
</div>

<div id="toggleId" style="display: none;">
    <table class="table-one">
        <colgroup>
            <col width="15%">
            <col width="18%">
            <col width="15%">
            <col width="18%">
            <col width="15%">
            <col width="19%">
        </colgroup>
        <tbody>
            <tr class="even">
                <th>初重标识</th>
                <td><span name="firstStatus"></span></td>
                <th>反映类型</th>
                <td><span name="eventTypeName"></span></td>
                <th>催办次数</th>
                <td><span name="reminderCount"></span></td>
            </tr>
            <tr class="odd">
                <th>是否排查</th>
                <td><span name="isCheck"></span></td>
                <th>是否效能件</th>
                <td><span name="isEffective"></span></td>
                <th>是否二次交办</th>
                <td><span name="isSecondAssignEvent"></span></td>
            </tr>
        </tbody>
    </table>
        
    <div class="title-one">反映人信息</div>
    <table class="table-one">
        <colgroup>
            <col width="15%">
            <col width="18%">
            <col width="15%">
            <col width="18%">
            <col width="15%">
            <col width="19%">
        </colgroup>
        <tbody>
            <tr class="odd">
                <th>姓名</th>
                <td><span name="name"></span></td>
                <th>性别</th>
                <td><span name="gender"></span></td>
                <th>民族</th>
                <td><span name="nation"></span></td>
            </tr>
            <tr class="even">
                <th>身份证号</th>
                <td><span name="certificateNo"></span></td>
                <th>年龄</th>
                <td><span name="age"></span></td>
                <th>从事事业</th>
                <td><span name="job"></span></td>
            </tr>
            <tr class="odd">
                <th>电子邮箱</th>
                <td><span name="email"></span></td>
                <th>移动电话</th>
                <td><span name="mobile"></span></td>
                <th>联系电话</th>
                <td><span name="phone"></span></td>
            </tr>
            <tr class="even">
                <th>住址</th>
                <td colspan="5"><span name="address"></span></td>
            </tr>
            <tr class="odd">
                <th>问题发生地</th>
                <td colspan="5"><span name="occurPlace"></span></td>
            </tr>
        </tbody>
    </table> 
</div><!-- toggleId -->
        
<div id="lessLine" class="hrLine" style="display: none;">
    <hr style="right: 32px;"><a id="lessContent" style="width: 32px;">隐藏</a>
</div>

<script>
$(function(){
	//显示更多
	$('#moreContent').click(function(){
	     var display = $("#toggleId").css("display");
	     if(display == "none"){
	         $("#toggleId").css("display","block");
	         $('#moreLine').css("display","none");
	         $('#lessLine').css("display","block");
	     }
	 });
	 
	 //隐藏
	 $('#lessContent').click(function(){
	     var display = $("#toggleId").css("display");
	     if(display == "block"){
	         $("#toggleId").css("display","none");
	         $('#lessLine').css("display","none");
	         $('#moreLine').css("display","block");
	     }
	 });
});
</script>