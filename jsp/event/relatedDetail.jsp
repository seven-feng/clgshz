<%@page import="org.apache.velocity.runtime.directive.Include"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%
    request.setCharacterEncoding("UTF-8");
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath()+"/";
%>
<html>
<head>
<jsp:include page="../main/header-meta.jsp"/>

<link rel="stylesheet" type="text/css" href="<%=basePath%>resources/css/crud.css"/>
<link rel="stylesheet" type="text/css" href="<%=basePath%>resources/zTree/css/zTreeStyle.css"/>
<link rel="stylesheet" type="text/css" href="<%=basePath%>resources/css/detail.css"/>
<link rel="stylesheet" type="text/css" href="<%=basePath%>resources/css/select.css"/>

<script type="text/javascript" src="<%=basePath%>resources/zTree/js/jquery.ztree.core.min.js"></script>
<script type="text/javascript" src="<%=basePath%>resources/zTree/js/jquery.ztree.excheck.min.js"></script>
<script type="text/javascript" src="<%=basePath%>js/common/crud.js"></script>
<script type="text/javascript" src="<%=basePath%>js/event/treeUsed.js"></script>
<script type="text/javascript" src="<%=basePath%>js/common/detail.js"></script>
<script type="text/javascript" src="<%=basePath%>js/common/detail-b.js"></script>
<script type="text/javascript" src="<%=basePath%>js/common/timebar.js"></script><!-- 处理记录，需id -->

<title>相似事件</title>
</head>
<body>
<div class="wapper">
    <div class="mainContainer">
    <div id="detail">
        <div class="col-md-10" style="margin-top: 30px;">                  
            <div id="event-form">
            <jsp:include page="../common/detail-a.jsp"/>
            <div class="oper-form">
            </div><!-- oper-form -->
            </div><!-- event-form -->                                                                
 
            <ul class="nav nav-pills">
                <li class="active"><a href="#handleId" data-toggle="tab">办理进度</a></li>
                <li><a href="#processId" data-toggle="tab">处理记录</a></li>
                <!-- <li><a href="#mapId" data-toggle="tab">查看流程图</a></li>  -->
            </ul>
            <div class="tab-content">
                <div id="handleId" class="tab-pane active" >
                    <div id="handle-table" class="table-container"></div>
                </div>
                <div id="processId" class="tab-pane"></div>
               <!--  <div id="mapId" class="tab-pane">
                    <img id="mapSrc" src=""/>
                </div> --> 
            </div>
        </div><!-- col-md-10 -->
        
        <div class="col-md-2" style="margin-top: 30px;">
            <jsp:include page="../common/detail-d.jsp" />
        </div><!-- col-md-2 --> 
    </div><!-- detail -->  
    </div><!-- main-container -->
</div><!-- wapper -->

<div id="menuContent" class="menuContent" style="display:none; position: absolute; z-index:100;">
    <ul id="treeMainOfficePredoing" class="ztree" style="margin-top:0; width:160px;"></ul>
</div>
</body>

<jsp:include page="../common/crud.jsp" flush="true"/>

<script>
var pagePath="event-handle/notBack";
</script>
</html>