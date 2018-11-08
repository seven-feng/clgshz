<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<div id="radio-choice">
    <label id="oper-label">办理操作</label>
    <label style="display: none;"><input id="inform-radio" type="radio" name="oper-radio"/>转告</label>
    <label style="display: none;"><input id="remark-radio" type="radio" name="oper-radio"/>备注</label>
    <label style="display: none;"><input id="report-radio" type="radio" name="oper-radio"/>上报</label>
    <label style="display: none;"><input id="back-radio" type="radio" name="oper-radio"/>回退</label>
    <label style="display: none;"><input id="reply-radio" type="radio" name="oper-radio"/>直接回复</label>
    <label style="display: none;"><input id="assign-radio" type="radio" name="oper-radio"/>交办</label>
    <label style="display: none;"><input id="instruct-radio" type="radio" name="oper-radio"/>批示</label>
    <label style="display: none;"><input id="submitInstruct-radio" type="radio" name="oper-radio"/>提交领导批示</label>    
    <label style="display: none;"><input id="endCheck-radio" type="radio" name="oper-radio"/>结案审核</label>
    <label style="display: none;"><input id="countryBack-radio" type="radio" name="oper-radio"/>县级退办</label>
    <label style="display: none;"><input id="deptBack-radio" type="radio" name="oper-radio"/>单位申请退办</label>
    <label style="display: none;"><input id="handle-radio" type="radio" name="oper-radio"/>办理</label>
    <label style="display: none;"><input id="endCase-radio" type="radio" name="oper-radio"/>结案申请</label>
    <label style="display: none;"><input id="delayCase-radio" type="radio" name="oper-radio"/>延期审核</label>
    <label style="display: none;"><input id="applyDelay-radio" type="radio" name="oper-radio"/>延期申请</label>
</div>
<div id="inform" style="display: none;">
    <input type="text" name="eventId" style="display: none"/>
    <div>
        <label>转告人</label>
        <input type="text"/>
        <label>转告单位</label>
        <input type="text"/>
        <label>转告时间</label>
        <input type="text"/>
    </div>
    <div>
        <label><span style="color: red;">*</span>告知单位</label>
        <select style="width: 83%;">
            <option value =""></option>
        </select>
    </div>
    <div style="margin-top: 5px; margin-bottom: -5px;">
        <label style="vertical-align: top;"><span style="color: red;">*</span>告知内容</label>
        <textarea style="width: 83%;"></textarea>
    </div>
    <div style="text-align: right;  ">
        <input type="reset" class="btn btn-default btn-sm" value="重置">
        <input type="button" class="btn btn-default btn-sm" value="保存">
        <input type="submit" class="btn btn-primary btn-sm" value="确定">
    </div>
</div><!-- inform -->
<div id="remark" style="display: none;"><!-- 备注 -->
<form id="remark-form" method="post" enctype="multipart/form-data" >
    <input type="text" name="eventId" style="display: none"/>
    <div>
        <label>备注人</label>
        <input type="text" name="remarkPerson" readonly />
        <label>备注单位</label>
        <input type="text" name="remarkDept" readonly />
        <label>备注时间</label>
        <input type="text" name="remarkTime" readonly />
    </div>
    <div style="margin-top: 5px;">
        <label style="vertical-align: top;"><span style="color: red;">*</span>备注内容</label>
        <textarea name="remarkContent" style="width: 75%;"></textarea>
    </div>
    <div style="text-align: right;  ">
        <input type="button" id="remark-resetBtn" class="btn btn-default btn-sm" value="重置">
        <button type="submit" id="remark-submitBtn" class="btn btn-primary btn-sm">确定</button>
    </div>
</form>
</div><!-- remark -->
<div id="report" style="display: none;"><!-- 上报 -->
<form id="report-form" method="post" enctype="multipart/form-data" >
    <input type="text" name="eventReport.eventId" style="display: none"/>
    <div>
        <label>上报人</label>
        <input type="text" name="eventReport.reportPerson" readonly />
        <label>联系电话</label>
        <input type="text" name="eventReport.reportPhone" readonly />
    </div>
    <div>
        <label><span style="color: red;">*</span>上报单位</label>
        <input type="text" name="eventReport.reportUnit" readonly />
        <input type="text" name="eventReport.reportUnitId" style="display: none;"/>
        <label>上报时间</label>
        <input type="text" name="eventReport.reportTime" readonly />
    </div>
    <div style="margin-top: 5px; margin-bottom: -5px;">
        <label style="vertical-align: top;"><span style="color: red;">*</span>上报意见</label>
        <textarea name="eventReport.reportOpinion" style="width: 75%;"></textarea>
    </div>
    <div>
        <label>附件上传</label>
        <input type="text" id="report-fileName" style="height: 30px; width: 65%;"/><input type="button" class="btn btn-primary btn-sm" style="vertical-align: baseline;" id="report-upLoadBtn" value="选择文件"/>
        <input type="file" id="reportFile" name="reportFile" multiple="multiple" class="change" style="display: none;"/>
    </div>
    <div style="text-align: right;  ">
        <input type="button" id="report-resetBtn" class="btn btn-default btn-sm" value="重置">
        <button type="button" id="report-saveBtn"  class="btn btn-default btn-sm">保存</button>
        <button type="submit" id="report-submitBtn" class="btn btn-primary btn-sm">确定</button>
    </div>
</form>
</div><!-- report -->
<div id="back" style="display: none;"><!-- 回退 -->
<form id="back-form" method="post" enctype="multipart/form-data">
    <input type="text" name="postponeBack.eventId" style="display: none"/>
    <input type="text" name="postponeBack.id" style="display: none"/>
    <div style="margin-top: 5px; margin-bottom: -5px;">
        <label style="vertical-align: top;"><span style="color: red;">*</span>回退理由</label>
        <textarea name="postponeBack.backReason" style="width: 75%;"></textarea>
    </div>
    <div style="text-align: right;  ">
        <input type="reset" class="btn btn-default btn-sm" value="重置">
        <button type="submit" id="back-submitBtn" class="btn btn-primary btn-sm">确定</button>
    </div>
</form>
</div><!-- back -->
<div id="reply" style="display: none;"><!-- 直接回复 -->
<form id="reply-form" method="post" enctype="multipart/form-data">
    <input type="text" name="eventBasicInfo.id" style="display: none"/>
    <div>
        <label><span style="color: red;">*</span>回复人</label>
        <input type="text" name="eventDerictReply.replyPerson" readonly />
        <label><span style="color: red;">*</span>回复时间</label>
        <input type="text" name="eventDerictReply.replyTime" readonly />
        <label><span id="haha" style="color: red;">*</span>回复单位</label>
        <input name="eventDerictReply.departmentId" type="text" style="display: none"/>
        <input name="eventDerictReply.replyDept" type="text" style="width: 160px;" readonly />
    </div>
    <div style="margin-top: 5px; margin-bottom: -5px;">
        <label style="vertical-align: top;"><span style="color: red;">*</span>回复内容</label>
        <textarea name="eventDerictReply.replyContent" style="width: 75%;"></textarea>
    </div>
    <div style="margin-top: 5px; margin-bottom: -5px;">
        <label style="vertical-align: top;">短信内容</label>
        <textarea name="eventDerictReply.messageContent" style="width: 75%;"></textarea>
    </div>
    <div>
        <label>附件上传</label>
        <input type="text" id="reply-fileName" style="height: 30px; width: 65%;"/><input type="button" class="btn btn-primary btn-sm" style="vertical-align: baseline;" id="reply-upLoadBtn" value="选择文件"/>
        <input type="file" id="replyFile" name="replyFile" multiple="multiple" class="change" style="display: none;"/>
    </div>
    <div style="text-align: right;  ">
        <input type="button" id="reply-resetBtn" class="btn btn-default btn-sm" value="重置">
        <button type="button" id="reply-saveBtn" class="btn btn-default btn-sm">保存</button>
        <button type="submit" id="reply-submitBtn" class="btn btn-primary btn-sm">确定</button>
    </div>
</form>
</div><!-- reply -->
<div id="assign" style="display: none;"><!-- 交办 -->
<form id="assign-form" method="post" enctype="multipart/form-data" >
    <input type="text" name="eventAssign.eventId" style="display: none"/>
    
    <div>
        <label>受理时间</label>
        <input type="text" name="eventAssign.acceptTime" readonly />
        <label>反馈时间</label>
        <input type="text" name="eventAssign.feedbackTime" readonly />
        <label>联系电话</label>
        <input type="text" name="eventAssign.phone" readonly />
    </div>
    <div>
        <label>交办人</label>
        <input type="text" name="eventAssign.assignPerson" readonly />
        <label>交办时间</label>
        <input type="text" name="eventAssign.assignTime" readonly />
        <div id="isJointDiv" style="display: none;">
            <label>联合执法</label>
            <input type="checkbox" name="isJoint" style="vertical-align: text-bottom;"/>
        </div>
    </div>                     
    <div>
        <label><span style="color: red;">*</span>办理期限</label>
        <input type="text" name="eventAssign.feedbackTime" readonly />
        <input type="text" name="eventAssign.period" style="width: 40px; margin-left: -5px;"/>&nbsp;天
    </div>
    <div>
        <label>是否要件</label>
        <input type="radio" name="eventAssign.isImportant" value="0"/>是
        <input type="radio" name="eventAssign.isImportant" value="1" checked/>否
        <label>外网公开</label>
        <input type="radio" name="eventAssign.isPublic" value="0" checked />公开
        <input type="radio" name="eventAssign.isPublic" value="1"/>匿名
        <label>特事特办</label>
        <input type="radio" name="eventAssign.isSpecial" value="0"/>是
        <input type="radio" name="eventAssign.isSpecial" value="1" checked />否
    </div>
    <div>
        <label><span style="color: red;">*</span>主办单位</label>
        <input type="text" name="eventAssign.department" style="display: none;"/>
        <div id="hostChoose" class="choose" style="display: inline-block;">
            <ul class="holder">
                <li class="bit-input">
                    <input type="text" id="hostChoice" readonly/>
                </li>
            </ul>
        </div>
        <span class="btn btn-primary btn-sm" id="hostSelect">请选择</span>
        <div id="hostDept" class="dept hide">
            <ul style="margin-left: 88px;">
            </ul>
        </div>
    </div>
    <div id="jointDeptDiv" style="display: none;">
        <label><span style="color: red;">*</span>协办单位</label>
        <input type="text" name="assistDepartments" style="display: none;"/>
        <div id="jointChoose" class="choose" style="display: inline-block;">
            <ul class="holder">
                <li class="bit-input">
                    <input type="text" id="jointChoice" readonly/>
                </li>
            </ul>
        </div>
        <span class="btn btn-primary btn-sm" id="jointSelect">请选择</span>
        <div id="jointDept" class="dept hide">
            <ul style="margin-left: 88px;">
            </ul>
        </div>
    </div>
    <div id="leaderInstruct" style="margin-top: 5px; margin-bottom: -5px; display: none;">
        <label style="vertical-align: top;">领导批示</label>
        <textarea name="eventAssign.leaderInstruction" style="width: 75%;"></textarea>
    </div>
    <div style="margin-top: 5px; margin-bottom: -5px;">
        <label style="vertical-align: top;"><span style="color: red;">*</span>交办意见</label>
        <textarea name="eventAssign.assignContent" style="width: 75%;"></textarea>
    </div>
    <div>
        <label>附件上传</label>
        <input type="text" id="assign-fileName" style="height: 30px; width: 65%;"/><input type="button" class="btn btn-primary btn-sm" style="vertical-align: baseline;" id="assign-upLoadBtn" value="选择文件"/>
        <input type="file" id="assignFile" name="assignFile" multiple="multiple" class="change" style="display: none;"/>
    </div>
    <div style="text-align: right;  ">
        <input type="button" id="assign-resetBtn" class="btn btn-default btn-sm" value="重置">
        <button type="button" id="assign-saveBtn" class="btn btn-default btn-sm">保存</button>
        <button type="submit" id="assign-submitBtn" class="btn btn-primary btn-sm">确定</button>
    </div>
</form>
</div><!-- assign -->
<div id="instruct" style="display: none;"><!-- 批示 -->
<form id="instruct-form" method="post" enctype="multipart/form-data" >
    <input type="text" name="eventInstruction.eventId" style="display: none"/>
    <div>
        <label>批示人</label>
        <input type="text" name="eventInstruction.assignPerson" readonly />
        <label>联系电话</label>
        <input type="text" name="eventInstruction.phone" readonly />
    </div>
    <div style="margin-top: 5px; margin-bottom: -5px;">
        <label style="vertical-align: top;"><span style="color: red;">*</span>批示内容</label>
        <textarea name="eventInstruction.instructContent" style="width: 75%;"></textarea>
    </div>
    <div>
        <label>附件上传</label>
        <input type="text" id="instruct-fileName" style="height: 30px; width: 65%;"/><input type="button" class="btn btn-primary btn-sm" style="vertical-align: baseline;" id="instruct-upLoadBtn" value="选择文件"/>
        <input type="file" id="instructFile" name="instructFile" multiple="multiple" class="change" style="display: none;"/>
    </div>
    <div style="text-align: right;">
        <input type="button" id="instruct-resetBtn" class="btn btn-default btn-sm" value="重置">
        <button type="button" id="instruct-saveBtn" class="btn btn-default btn-sm">保存</button>
        <button type="submit" id="instruct-submitBtn" class="btn btn-primary btn-sm">确定</button>
    </div>
</form>
</div><!-- instruct -->
<div id="submitInstruct" style="display: none;">
    <div>
        <label><span style="color: red;">*</span>操作人</label>
        <input type="text"/>
        <input type="text" name="eventId" style="display: none"/>
        <label><span style="color: red;">*</span>联系电话</label>
        <input type="text"/>
    </div>
    <div>
        <label><span style="color: red;">*</span>报送领导</label>
        <input type="text"/>
    </div>
    <div style="margin-top: 5px; margin-bottom: -5px;">
        <label style="vertical-align: top;"><span style="color: red;">*</span>报送内容</label>
        <textarea style="width: 83%;"></textarea>
    </div>
    <div style="text-align: right;  ">
        <input type="reset" class="btn btn-default btn-sm" value="重置">
        <input type="button" class="btn btn-default btn-sm" value="保存">
        <input type="submit" class="btn btn-primary btn-sm" value="确定">
    </div>
</div><!-- submitInstruct -->
<div id="endCheck" style="display: none;"><!-- 结案审核 -->
<form id="endCheck-form" method="post" enctype="multipart/form-data" >
    <input type="text" name="eventDealComfirm.eventId" style="display: none"/>
    <!-- <input type="text" name="isAgree" value="0" style="display: none"/> -->  <!-- isAgree是为了区分结案审核还是县级退办 -->
    
    <div style="margin-top: 5px; margin-bottom: -5px;">
        <label style="vertical-align: top;"><span style="color: red;">*</span>评价</label>
        <textarea name="eventDealComfirm.serviceOpinion" style="width: 75%;"></textarea>
    </div>
    <div>
        <label>工作态度意见</label>
        <input type="radio" name="eventDealComfirm.personOpinion" value="满意" checked />满意
        <input type="radio" name="eventDealComfirm.personOpinion" value="基本满意"/>基本满意
        <input type="radio" name="eventDealComfirm.personOpinion" value="不满意"/>不满意
        <input type="radio" name="eventDealComfirm.personOpinion" value="其他"/>其他
        <input type="text" name="eventDealComfirm.otherPersonOpinion" style="display: none;"/>
    </div>
    <div>
        <label><span style="color: red;">*</span>反馈人</label>
        <input type="text" name="eventDealComfirm.feedbackPerosn"/>
    </div>
    <div>
        <label>办理结果意见</label>
        <input type="radio" name="eventDealComfirm.resultOpnion" value="满意" checked />满意
        <input type="radio" name="eventDealComfirm.resultOpnion" value="基本满意"/>基本满意
        <input type="radio" name="eventDealComfirm.resultOpnion" value="不满意"/>不满意
        <input type="radio" name="eventDealComfirm.resultOpnion" value="其他"/>其他
        <input type="text" name="eventDealComfirm.otherResultOpinion" style="display: none;"/>
    </div>
    <div>
        <label>是否热点</label>
        <input type="radio" name="eventDealComfirm.isHotSpot" value="0"/>是
        <input type="radio" name="eventDealComfirm.isHotSpot" value="1" checked />否
        <label>进入样本库</label>
        <input type="radio" name="eventDealComfirm.enterSampleLibrary" value="0"/>是
        <input type="radio" name="eventDealComfirm.enterSampleLibrary" value="1" checked />否
        <label>外网公开</label>
        <input type="radio" name="eventDealComfirm.openNetwork" value="0"/>是
        <input type="radio" name="eventDealComfirm.openNetwork" value="1" checked />否 
    </div>
    <div>
        <label>是否排查</label>
        <input type="radio" name="eventDealComfirm.isCheck" value="0"/>是
        <input type="radio" name="eventDealComfirm.isCheck" value="1" checked />否
        <label>是否效能件</label>
        <input type="radio" name="eventDealComfirm.isEffective" value="0"/>是
        <input type="radio" name="eventDealComfirm.isEffective" value="1" checked />否
        <label>是否已回访</label>
        <input type="radio" name="eventDealComfirm.isVisit" value="0" checked />是
        <input type="radio" name="eventDealComfirm.isVisit" value="1" />否
    </div>
    <div>
        <label><span style="color: red;">*</span>告知单位</label>
        <input name="eventDealComfirm.informUnit" type="text"/>
        <label><span style="color: red;">*</span>告知时间</label>
        <input name="eventDealComfirm.informTime" type="text" class="datepicker"/>
    </div>                     
    <div>
        <label><span style="color: red;">*</span>告知人</label>
        <input name="eventDealComfirm.informPerson" type="text"/>
        <label><span style="color: red;">*</span>告知电话</label>
        <input name="eventDealComfirm.informPhone" type="text"/>
    </div> 
    <div style="text-align: right;  ">
        <input type="button" id="endCheck-resetBtn" class="btn btn-default btn-sm" value="重置">
        <button type="button" id="endCheck-saveBtn" class="btn btn-default btn-sm">保存</button>
        <button type="submit" id="endCheck-submitBtn" class="btn btn-primary btn-sm">确定</button>
    </div>
</form>
</div><!-- endCheck -->
<div id="countryBack" style="display: none;"><!-- 县级退办 -->
<form id="countryBack-form" method="post" enctype="multipart/form-data" >
    <input type="text" name="eventDealComfirm.eventId" style="display: none"/>
    <!-- <input type="text" name="isAgree" value="1" style="display: none"/> -->  <!-- isAgree是为了区分结案审核还是县级退办 --> 
    <div style="display: inline;">
        <label><span style="color: red;">*</span>延期时间</label>
        <input type="radio" name="eventDealComfirm.delayDay" value="1"/>一天
        <input type="radio" name="eventDealComfirm.delayDay" value="3"/>三天
        <input type="radio" name="eventDealComfirm.delayDay" value="5" checked />五天
    </div>
    <div style="margin-top: 5px; margin-bottom: -5px;">
        <label style="vertical-align: top;"><span style="color: red;">*</span>退办理由</label>
        <textarea name="eventDealComfirm.rejectReason" style="width: 75%;"></textarea>
    </div>
    <div style="text-align: right;  ">
        <input type="button" id="countryBack-resetBtn" class="btn btn-default btn-sm" value="重置">
        <button type="submit" id="countryBack-submitBtn" class="btn btn-primary btn-sm">确定</button>
    </div>
</form>
</div><!-- countryBack -->
<div id="deptBack" style="display: none;"><!-- 单位申请退办 -->    
    <div style="margin-top: 5px; margin-bottom: -5px;">
        <label style="vertical-align: top;"><span style="color: red;">*</span>退办理由</label>
        <textarea style="width: 83%;"></textarea>
    </div>
    <div style="text-align: right;  ">
        <input type="reset" class="btn btn-default btn-sm" value="重置">
        <input type="submit" class="btn btn-primary btn-sm" value="确定">
    </div>
</div><!-- deptBack -->
<div id="handle" style="display: none;"><!-- 办理 -->
<form id="handle-form" method="post" enctype="multipart/form-data" >
    <input type="text" name="eventDealInfo.eventId" style="display: none"/>
    <div> 
        <label>承办单位</label>
        <input type="text" name="eventDealInfo.replyUnit" readonly />
        <label><span style="color: red;">*</span>承办科室</label>
        <input type="text" name="eventDealInfo.departmentOffice"/>
        <label>签发领导</label>
        <input type="text" name="eventDealInfo.signLeader"/>
    </div>
    <div>
        <label>承办人</label>
        <input type="text" name="eventDealInfo.replyPerson" readonly />
        <label>联系电话</label>
        <input type="text" name="eventDealInfo.phone" readonly />
    </div>
    <div style="margin-top: 5px;">
        <label style="vertical-align: top;"><span style="color: red;">*</span>承办单位<br>领导意见</label>
        <textarea name="eventDealInfo.departmentLeaderComment" style="width: 75%;"></textarea>
    </div>
    <div style="margin-top: 5px;">
        <label style="vertical-align: top;"><span style="color: red;">*</span>办理结果</label>
        <textarea name="eventDealInfo.result" style="width: 75%;"></textarea>
    </div>
    <div style="text-align: right;">
        <input type="button" id="handle-resetBtn" class="btn btn-default btn-sm" value="重置">
        <button type="submit" id="handle-submitBtn" class="btn btn-primary btn-sm">确定</button>
    </div>
</form>
</div><!-- handle -->
<div id="endCase" style="display: none;"><!-- 结案申请 -->
<form id="endCase-form" method="post" enctype="multipart/form-data" >
    <input type="text" name="eventDealInfo.eventId" style="display: none"/>
    <div>
        <label>承办单位</label>
        <input type="text" name="eventDealInfo.replyUnit"/>
        <label><span style="color: red;">*</span>承办科室</label>
        <input type="text" name="eventDealInfo.departmentOffice"/>
    </div>
    <div>
        <label>承办人</label>
        <input type="text" name="eventDealInfo.replyPerson"/>
        <label>联系电话</label>
        <input type="text" name="eventDealInfo.phone"/>
    </div>
    <div style="margin-top: 5px;">
        <label style="vertical-align: top;"><span style="color: red;">*</span>承办单位<br>领导意见</label>
        <textarea name="eventDealInfo.departmentLeaderComment" style="width: 75%;"></textarea>
    </div>
    <div style="margin-top: 5px;">
        <label style="vertical-align: top;"><span style="color: red;">*</span>结案结果</label>
        <textarea name="eventDealInfo.result" style="width: 75%;"></textarea>
    </div>
    <div>
        <label>附件上传</label>
        <input type="text" id="endCase-fileName" style="height: 30px; width: 65%;"/><input type="button" class="btn btn-primary btn-sm" style="vertical-align: baseline;" id="endCase-upLoadBtn" value="选择文件"/>
        <input type="file" id="endCaseFile" name="endCaseFile" multiple="multiple" class="change" style="display: none;"/>
    </div>
    <div style="text-align: right;">
        <input type="reset" class="btn btn-default btn-sm" value="重置">
        <button type="submit" id="endCase-submitBtn" class="btn btn-primary btn-sm">确定</button>
    </div>
</form>
</div><!-- endCase -->
<div id="delayCase" style="display: none;"><!-- 延期审核 -->
<form id="delayCase-form" method="post" enctype="multipart/form-data" >
    <input type="text" name="postponeBack.eventId" style="display: none"/>
    <input type="text" name="postponeBack.id" style="display: none"/>
    <div>
        <label>延期天数</label>
        <input type="text" name="postponeBack.delayDay" readonly />
        <label>经手人</label>
        <input type="text" name="postponeBack.createruser" readonly />
        <label>联系电话</label>
        <input type="text" name="postponeBack.postPhone" readonly />
    </div>
    <div style="margin-top: 5px;">
        <label style="vertical-align: top;">延期理由</label>
        <textarea name="postponeBack.postponeReason" readonly style="width: 75%;"></textarea>
    </div>
    <div>
        <label>审批结果</label>
        <input type="radio" name="postponeBack.examinationResault" value="0" checked />同意
        <input type="radio" name="postponeBack.examinationResault" value="1"/>不同意
    </div>
    <div style="margin-top: 5px;">
        <label style="vertical-align: top;"><span style="color: red;">*</span>审批意见</label>
        <textarea name="postponeBack.examinationOpinion" style="width: 75%;"></textarea>
    </div>
    <div style="text-align: right;">
        <input type="button" id="delayCase-resetBtn" class="btn btn-default btn-sm" value="重置">
        <button type="submit" id="delayCase-submitBtn" class="btn btn-primary btn-sm">确定</button>
    </div>
</form>
</div><!-- delayCase -->
<div id="applyDelay" style="display: none;"><!-- 延期申请 -->
<form id="applyDelay-form" method="post" enctype="multipart/form-data" >
    <input type="text" name="postponeBack.eventId" style="display: none"/>

    <div style="margin-top: 5px; margin-bottom: -5px;">
        <label style="vertical-align: top;"><span style="color: red;">*</span>延期理由</label>
        <textarea name="postponeBack.postponeReason" style="width: 75%;"></textarea>
    </div>
    <div style="display: inline;">
        <label><span style="color: red;">*</span>延期时间</label>
        <input type="radio" name="postponeBack.delayDay" value="1" />一天
        <input type="radio" name="postponeBack.delayDay" value="3" />三天
        <input type="radio" name="postponeBack.delayDay" value="5" checked />五天
    </div>
    <div>
        <label>经手人</label>
        <input type="text" name="postponeBack.createruser" readonly />
        <label>联系电话</label>
        <input type="text" name="postponeBack.postPhone" readonly />
    </div>
    <div style="text-align: right;  ">
        <input type="button" id="applyDelay-resetBtn" class="btn btn-default btn-sm" value="重置">
        <button type="submit" id="applyDelay-submitBtn" class="btn btn-primary btn-sm">确定</button>
    </div>
</form>
</div><!-- applyDelay -->

<div id="menuContent" class="menuContent" style="display: none; position: absolute; z-index:100">
    <ul id="treeMainOfficePredoing" class="ztree" style="margin-top:0; width:160px;"></ul>
</div>