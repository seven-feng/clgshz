var backRoute = getHashRequest().backRoute;
var chooseIds = [];  //用于过滤已选部门id
$(function(){
	//办理操作
    var displayNone = function(){
        $('#inform').css("display","none");
        $('#remark').css("display","none");
        $('#report').css("display","none");
        $('#back').css("display","none");
        $('#reply').css("display","none");
        $('#assign').css("display","none");
        $('#instruct').css("display","none");
        $('#submitInstruct').css("display","none");
        $('#endCheck').css("display","none");
        $('#countryBack').css("display","none");
        $('#deptBack').css("display","none");
        $('#handle').css("display","none");
        $('#endCase').css("display","none");
        $('#delayCase').css("display","none");
        $('#applyDelay').css("display","none");
    }
    
    $('#inform-radio').click(function(){
        displayNone();
        $('#inform').css("display","block");
    });
    
    $('#remark-radio').click(function(){
        displayNone();
        $('#remark').css("display","block");
    });
    
    $('#report-radio').click(function(){
        displayNone();
        $('#report').css("display","block");
    });
    
    $('#back-radio').click(function(){
        displayNone();
        $('#back').css("display","block");
    });
    
    $('#reply-radio').click(function(){
        displayNone();
        $('#reply').css("display","block");
    });
    
    $('#assign-radio').click(function(){
        displayNone();
        $('#assign').css("display","block");
    });
    
    $('#instruct-radio').click(function(){
        displayNone();
        $('#instruct').css('display','block');
    });
    
    $('#submitInstruct-radio').click(function(){
        displayNone();
        $('#submitInstruct').css('display','block');
    });
    
    $('#endCheck-radio').click(function(){
        displayNone();
        $('#endCheck').css('display','block');
    });
    
    $('#countryBack-radio').click(function(){
        displayNone();
        $('#countryBack').css('display','block');
    });
    
   $('#deptBack-radio').click(function(){
        displayNone();
        $('#deptBack').css('display','block');
    });
   
   $('#handle-radio').click(function(){
       displayNone();
       $('#handle').css('display','block');
   });
   
   $('#endCase-radio').click(function(){
       displayNone();
       $('#endCase').css('display','block');
   });
   
   $('#delayCase-radio').click(function(){
       displayNone();
       $('#delayCase').css('display','block');
   });
   
   $('#applyDelay-radio').click(function(){
       displayNone();
       $('#applyDelay').css('display','block');
   });
   
   /**
    * 重置按钮
    */
   //上报
   $('#report-resetBtn').click(function(){
	   $('[name="eventReport.reportOpinion"]').val('');
	   $('#report-fileName').val('');
   });
   
   //直接回复
   $('#reply-resetBtn').click(function(){
	   $('[name="eventDerictReply.replyContent"]').val('');
	   $('[name="eventDerictReply.messageContent"]').val('');
	   $('#reply-fileName').val('');
   });
   
   //交办
   $('#assign-resetBtn').click(function(){
	   $('#hostChoose li.bit-input').prev().remove();
	   $('#jointChoose li.bit-input').prevAll().remove();
	   $('[name="eventAssign.leaderInstruction"]').val('');
	   $('[name="eventAssign.assignContent"]').val('');
	   $('#assign-fileName').val('');
   });
   
   //批示
   $('#instruct-resetBtn').click(function(){
	   $('[name="eventInstruction.instructContent"]').val('');
	   $('#instruct-fileName').val('');
   });
   
   //办理
   $('#handle-resetBtn').click(function(){
	   $('[name="eventDealInfo.departmentOffice"]').val('');
	   $('[name="eventDealInfo.signLeader"]').val('');
	   $('[name="eventDealInfo.departmentLeaderComment"]').val('');
	   $('[name="eventDealInfo.result"]').val('');
   });

   //延期申请
   $('#applyDelay-resetBtn').click(function(){
	   $('[name="postponeBack.postponeReason"]').val('');
   });
   
   //备注
   $('#remark-resetBtn').click(function(){
	   $('[name="remarkContent"]').val('');
   });
   
   //延期审核
   $('#delayCase-resetBtn').click(function(){
	   $('[name="postponeBack.examinationOpinion"]').val('');
   });
   
   //结案审核
   $('#endCheck-resetBtn').click(function(){
	   $('[name="eventDealComfirm.serviceOpinion"]').val('');
	   $('[name="eventDealComfirm.feedbackPerosn"]').val('');
	   $('[name="eventDealComfirm.informUnit"]').val('');
	   $('[name="eventDealComfirm.informPerson"]').val('');
	   $('[name="eventDealComfirm.informPhone"]').val('');
   });
   
   //县级退办
   $('#countryBack-resetBtn').click(function(){
	   $('[name="eventDealComfirm.rejectReason"]').val('');
   }); 
   
   
   	/**
   	 * 附件上传
   	 */
    //上报附件上传
    $('#report-upLoadBtn').click(function(){
        $('#reportFile').click();
    });
   
    $('#reportFile').change(function(){
    	var files = $(this).prop('files');
        var fileNames = "";
        for(var i = 0; i < files.length; i++)
            fileNames += files[i].name + " ";
        $('#report-fileName').val(fileNames);
    });
    
    //直接回复附件上传
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
    
    //交办附件上传
    $('#assign-upLoadBtn').click(function(){
        $('#assignFile').click();
    });
   
    $('#assignFile').change(function(){
    	var files = $(this).prop('files');
        var fileNames = "";
        for(var i = 0; i < files.length; i++)
            fileNames += files[i].name + " ";
        $('#assign-fileName').val(fileNames);
    });
    
    //批示附件上传
    $('#instruct-upLoadBtn').click(function(){
        $('#instructFile').click();
    });
   
    $('#instructFile').change(function(){
    	var files = $(this).prop('files');
        var fileNames = "";
        for(var i = 0; i < files.length; i++)
            fileNames += files[i].name + " ";
        $('#instruct-fileName').val(fileNames);
    });
    
    //结案附件上传
    $('#endCase-upLoadBtn').click(function(){
        $('#endCaseFile').click();
    });
   
    $('#endCaseFile').change(function(){
    	var files = $(this).prop('files');
        var fileNames = "";
        for(var i = 0; i < files.length; i++)
            fileNames += files[i].name + " ";
        $('#endCase-fileName').val(fileNames);
    });

    /**
     * 日期控件
     */
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
    
    //加载树
    /* $.fn.zTree.init($("#treeMainOfficePredoing"), settingMainOffice); */
  
    //发生网格
    /* $("input[name='mainOffice']").click(function(){
        var cityObj = $("input[name='mainOffice']");
        var cityOffset = $("input[name='mainOffice']").offset();
        cityOffset.left = cityOffset.left - 191;  //由于页面嵌套引起的位置偏差，进行手动微调
        cityOffset.top = cityOffset.top - 131;
        if($("#menuContent").css("display") == 'none'){
            showMenu(cityObj,cityOffset);
        }else{
            hideMenu();
        }
    }); */
    
    function searchDeptIds(chooseIds,detpId){
        for(var i = 0; i < chooseIds.length; i++){
        	if(chooseIds[i] == detpId)
        		return 0;
        }
        return -1;
    }
    
    function delDeptIds(chooseIds,detpId){
    	for(var i = 0; i < chooseIds.length; i++){
    		if(chooseIds[i] == detpId){
    			chooseIds.splice(i,1);
    			break;
    		}
        }
        return chooseIds;
    }
    
    $('#hostSelect').click(function(){
    	//可重选主办单位
    	chooseIds = delDeptIds(chooseIds,$('#hostChoose li.bit-input').prev().attr('value'));
    	$('#hostChoose li.bit-input').prev().remove();
    	
    	//动态绑定主办单位
        $.ajax({
            type: 'post',
            url: '../../eventBasicInfo/getDepartmentChildren',
            dataType: 'json',
            success: function(res){
                if(res.retCode == 0){
                    var data = res.data;
                    $('#hostDept.dept ul').empty();
                    for(var i in data){
                    	if(searchDeptIds(chooseIds,data[i].id) == -1){
                    		$('#hostDept.dept ul').append('<li value="' + data[i].id + '">' + data[i].name + '</li>');
                    	}	    
                    }
                    //鼠标悬停事件
                    $('#hostDept.dept ul li').hover(
                        function(){
                            $(this).css({'backgroundColor':'#5D99CD','color':'#fff'});
                            $('#hostChoice').val($(this).text())
                        },function(){
                            $(this).css({'backgroundColor':'#f1f1f1','color':'#0e659c'});
                        }
                    );
                    //添加单位
                    $('#hostDept.dept ul li').unbind('click').click(function(){
                        $('#hostChoose li.bit-input').before('<li class="bit-box" value="' + $(this).attr('value') + '">' + $(this).html() + '<a class="closebutton" href="#"></a></li>');
                        $('input[name="eventAssign.department"]').val($(this).attr('value'));
                        chooseIds.push($(this).attr('value'));  //部门过滤
                        //删除单位
                        $('li.bit-box a').unbind('click').click(function(){
                        	chooseIds = delDeptIds(chooseIds,$(this).parent().attr('value'));
                            $(this).parent().remove();
                            $('#hostDept.dept').addClass('hide');
                            $('#hostChoose li.bit-input input').val("");
                            $('#hostChoice').focus(); 
                        });
                        $('#hostDept.dept').addClass('hide');
                        $('li.bit-input input').val("");
                        $('#hostChoice').focus();
                    });           
                }
            },
            error: function(){}
        });
      
        if($('#hostDept.dept').is('.hide')){
            $('#hostDept.dept').removeClass('hide');
            $('#hostChoice').focus();
        }else{
            $('#hostDept.dept').addClass('hide');
        }
    });
    
    $('#jointSelect').click(function(){
    	if($('input[name="eventAssign.department"]').val() == ""){
    		alert('请先选择主办单位！')
    		return false;
    	}
        //动态绑定协办单位
        $.ajax({
            type: 'post',
            url: '../../eventBasicInfo/getDepartmentChildren',
            dataType: 'json',
            success: function(res){
                if(res.retCode == 0){
                    var data = res.data;
                    $('#jointDept.dept ul').empty();
                    for(var i in data){
                        if(searchDeptIds(chooseIds,data[i].id) == -1){
                            $('#jointDept.dept ul').append('<li value="' + data[i].id + '">' + data[i].name + '</li>');
                        }       
                    }
                    //鼠标悬停事件
                    $('#jointDept.dept ul li').hover(
                        function(){
                            $(this).css({'backgroundColor':'#5D99CD','color':'#fff'});
                            $('#jointChoice').val($(this).text())
                        },function(){
                            $(this).css({'backgroundColor':'#f1f1f1','color':'#0e659c'});
                        }
                    );
                    //添加单位
                    $('#jointDept.dept ul li').unbind('click').click(function(){
                        $('#jointChoose li.bit-input').before('<li class="bit-box" value="' + $(this).attr('value') + '">' + $(this).html() + '<a class="closebutton" href="#"></a></li>');
                        chooseIds.push($(this).attr('value'));  //部门过滤
                        //删除单位
                        $('li.bit-box a').unbind('click').click(function(){
                        	chooseIds = delDeptIds(chooseIds,$(this).parent().attr('value'));
                            $(this).parent().remove();
                            $('#jointDept.dept').addClass('hide');
                            $('#jointChoose li.bit-input input').val("");
                            $('#jointChoice').focus(); 
                        });
                        $('#jointDept.dept').addClass('hide');
                        $('li.bit-input input').val("");
                        $('#jointChoice').focus();
                    });           
                }
            },
            error: function(){}
        });
      
        if($('#jointDept.dept').is('.hide')){
            $('#jointDept.dept').removeClass('hide');
            $('#jointChoice').focus();
        }else{
            $('#jointDept.dept').addClass('hide');
        }
    });

    //退格键取消部门(主办单位)
    $('#hostChoice').keydown(function(e){
        if(e.keyCode == 8){
        	chooseIds = delDeptIds(chooseIds,$('#hostChoose li.bit-input').prev().attr('value'));
            $('#hostChoose li.bit-input').prev().remove();
            $('#hostDept.dept').addClass('hide');
            $('#hostChoose li.bit-input input').val("");
            $('#hostChoice').focus();
        }
    });
    
    //退格键取消部门(协办单位)
    $('#jointChoice').keydown(function(e){
        if(e.keyCode == 8){
        	chooseIds = delDeptIds(chooseIds,$('#jointChoose li.bit-input').prev().attr('value'));
            $('#jointChoose li.bit-input').prev().remove();
            $('#jointDept.dept').addClass('hide');
            $('#jointChoose li.bit-input input').val("");
            $('#jointChoice').focus();
        }
    });
    
    //联合执法
    $('input[name="isJoint"]').click(function(){
        if($(this).prop('checked') == true){
            $('#jointDeptDiv').css('display','block');
            $('#jointContact').css('display','block');
        }else{
            $('#jointDeptDiv').css('display','none');
            $('#jointContact').css('display','none');
        }
    });
    
    //是否要件
    $('input[name="eventAssign.isImportant"]').click(function(){
        if($('input[name="eventAssign.isImportant"][value="0"]').prop('checked')){
            $('#leaderInstruct').css('display','block');
        }else{
            $('#leaderInstruct').css('display','none');
        }
    });
    
    
    //“其他”选项，弹出输入框
    $('input[name="eventDealComfirm.personOpinion"][value!="其他"]').click(function(){
    	$('input[name="eventDealComfirm.otherPersonOpinion"]').css('display','none');
    });
    
    $('input[name="eventDealComfirm.personOpinion"][value="其他"]').click(function(){
    	$('input[name="eventDealComfirm.otherPersonOpinion"]').css('display','inline-block');
    });
    
    $('input[name="eventDealComfirm.resultOpnion"][value!="其他"]').click(function(){
        $('input[name="eventDealComfirm.otherResultOpinion"]').css('display','none');
    });
    
    $('input[name="eventDealComfirm.resultOpnion"][value="其他"]').click(function(){
        $('input[name="eventDealComfirm.otherResultOpinion"]').css('display','inline-block');
    });
    
    //上报保存按钮
    $('#report-saveBtn').click(function(){
    	$('[name="reportFile"]').attr('disabled',true); //阻止文件提交
    	var busId = $('#report-form input[name="eventReport.eventId"]').val(); //业务id
        $('#report-form').ajaxSubmit({
            type: 'post',
            url: '../../eventBasicInfo/tempStorage',
            data: {
            	busId: busId
            },
            dataType: 'json',
            success: function(res){
            	if(res.retCode == 0){
                    $.globalMessenger().post({
                        message : '保存成功!',
                        type : 'success',
                        hideAfter : 2,
                        showCloseButton : true
                    });
                }else{
                    $.globalMessenger().post({
                        message : '保存失败!',
                        type : 'error',
                        hideAfter : 2,
                        showCloseButton : true
                    });
                }
            },
            error: function(){
            }
        });     
    });
    
    //直接回复保存按钮
    $('#reply-saveBtn').click(function(){
    	$('[name="replyFile"]').attr('disabled',true); //阻止文件提交
    	var busId = $('#reply-form input[name="eventBasicInfo.id"]').val(); //业务id
        $('#reply-form').ajaxSubmit({
            type: 'post',
            url: '../../eventBasicInfo/tempStorage',
            data: {
            	busId: busId
            },
            dataType: 'json',
            success: function(res){
            	if(res.retCode == 0){
                    $.globalMessenger().post({
                        message : '保存成功!',
                        type : 'success',
                        hideAfter : 2,
                        showCloseButton : true
                    });
                }else{
                    $.globalMessenger().post({
                        message : '保存失败!',
                        type : 'error',
                        hideAfter : 2,
                        showCloseButton : true
                    });
                }
            },
            error: function(){
            }
        });     
    });
    
    //交办保存按钮
    $('#assign-saveBtn').click(function(){
    	$('[name="assignFile"]').attr('disabled',true); //阻止文件提交
    	var busId = $('#assign-form input[name="eventAssign.eventId"]').val(); //业务id
    	var data;
    	if($('input[name="isJoint"]').prop('checked') == true){
    		data = {busId: busId, isJoint: "0"};
    	}else{
    		data = {busId: busId, isJoint: "1"};
    	}
    	$('input[name="isJoint"]').attr('disabled',true); //阻止checkbox提交
        $('#assign-form').ajaxSubmit({
            type: 'post',
            url: '../../eventBasicInfo/tempStorage',
            data: data,
            dataType: 'json',
            success: function(res){
            	if(res.retCode == 0){
                    $.globalMessenger().post({
                        message : '保存成功!',
                        type : 'success',
                        hideAfter : 2,
                        showCloseButton : true
                    });
                }else{
                    $.globalMessenger().post({
                        message : '保存失败!',
                        type : 'error',
                        hideAfter : 2,
                        showCloseButton : true
                    });
                }
            },
            error: function(){
            }
        });     
    });
    
    //批示保存按钮
    $('#instruct-saveBtn').click(function(){
    	$('[name="instructFile"]').attr('disabled',true); //阻止文件提交
    	var busId = $('#instruct-form input[name="eventInstruction.eventId"]').val(); //业务id
        $('#instruct-form').ajaxSubmit({
            type: 'post',
            url: '../../eventBasicInfo/tempStorage',
            data: {
            	busId: busId
            },
            dataType: 'json',
            success: function(res){
            	if(res.retCode == 0){
                    $.globalMessenger().post({
                        message : '保存成功!',
                        type : 'success',
                        hideAfter : 2,
                        showCloseButton : true
                    });
                }else{
                    $.globalMessenger().post({
                        message : '保存失败!',
                        type : 'error',
                        hideAfter : 2,
                        showCloseButton : true
                    });
                }
            },
            error: function(){
            }
        });     
    });

    //结案审核保存按钮
    $('#endCheck-saveBtn').click(function(){
    	var busId = $('#endCheck-form input[name="eventDealComfirm.eventId"]').val(); //业务id
        $('#endCheck-form').ajaxSubmit({
            type: 'post',
            url: '../../eventBasicInfo/tempDealConfirm',
            data: {
            	busId: busId
            },
            dataType: 'json',
            success: function(res){
            	if(res.retCode == 0){
            		$.globalMessenger().post({
                        message : '保存成功!',
                        type : 'success',
                        hideAfter : 2,
                        showCloseButton : true
                    });
            	}else{
            		$.globalMessenger().post({
                        message : '保存失败!',
                        type : 'error',
                        hideAfter : 2,
                        showCloseButton : true
                    });
            	}
            },
            error: function(){
            }
        });     
    });
    
    //表单验证--上报
    $('#report-form').validate({
        rules: {
        	'eventReport.reportOpinion': "required"
        },
        messages: {
        	'eventReport.reportOpinion': "上报意见不能为空"
        },
        submitHandler: function(form){
        	//业务id
        	var busId = $('#report-form input[name="eventReport.eventId"]').val();
        	formSubmit(form,busId,5); //回退申请：5
        }
    });
    
    //表单验证--结案申请
    $('#endCase-form').validate({
        rules: {
        	'eventDealInfo.departmentOffice': "required",
        	'eventDealInfo.departmentLeaderComment': "required",
        	'eventDealInfo.result': "required"
            
        },
        messages: {
        	'eventDealInfo.departmentOffice': "承办科室不能为空",
        	'eventDealInfo.departmentLeaderComment': "承办单位领导意见不能为空",
        	'eventDealInfo.result': "办理结果不能为空"
        },
        submitHandler: function(form){
        	//业务id
        	var busId = $('#endCase-form input[name="eventDealInfo.eventId"]').val();
        	formSubmit(form,busId,4); //结案申请：4
        }
    });
    
    //表单验证--办理
    $('#handle-form').validate({
        rules: {
        	'eventDealInfo.departmentOffice': "required",
        	'eventDealInfo.departmentLeaderComment': "required",
        	'eventDealInfo.result': "required"
        },
        messages: {
        	'eventDealInfo.departmentOffice': "承办科室不能为空",
        	'eventDealInfo.departmentLeaderComment': "承办单位领导意见不能为空",
        	'eventDealInfo.result': "办理结果不能为空"
        },
        submitHandler: function(form){
        	//业务id
        	var busId = $('#handle-form input[name="eventDealInfo.eventId"]').val();
        	formSubmit(form,busId,7); //办理：7
        }
    });
    
    //表单验证--批示
    $('#instruct-form').validate({
        rules: {
        	'eventInstruction.instructContent': "required"
        },
        messages: {
        	'eventInstruction.instructContent': "批示内容不能为空"
        },
        submitHandler: function(form){
        	//业务id
        	var busId = $('#instruct-form input[name="eventInstruction.eventId"]').val();
        	formSubmit(form,busId,8); //批示：8 
        }
    });
    
    //表单验证--延期审核
    $('#delayCase-form').validate({
        rules: {
        	'postponeBack.examinationOpinion': "required"
        },
        messages: {
        	'postponeBack.examinationOpinion': "审批意见不能为空"
        },
        submitHandler: function(form){
        	//业务id
        	var busId = $('#delayCase-form input[name="postponeBack.eventId"]').val();
        	if($('#delayCase-form input[name="postponeBack.examinationResault"][value="0"]').prop('checked')){
        		formSubmit(form,busId,0); //同意：0 
        	}else{
        		formSubmit(form,busId,1); //不同意：1 
        	}
        }
    });
    
    //表单验证--交办
    $('#assign-form').validate({
        rules: {
        	'eventAssign.feedbackTime': "required",
        	'eventAssign.assignContent': "required"
        },
        messages: {
        	'eventAssign.feedbackTime': "办理期限不能为空",
        	'eventAssign.assignContent': "交办意见不能为空"
        },
        submitHandler: function(form){
        	//返回协助单位,由于数组传值会改变原值，因此放在最后。为了达到部门只选择一次的效果。
            $('#assign-form input[name="assistDepartments"]').val(delDeptIds(chooseIds,$('input[name="eventAssign.department"]').val()));

            if($('#assign-form input[name="eventAssign.department"]').val()==""){
                alert("主办单位不能为空！");
                return false;
            }
            
        	if( $('input[name="isJoint"]').prop('checked')==true && $('#assign-form input[name="assistDepartments"]').val()==""){
        		alert("协办单位不能为空！");
        		return false;
        	}
        	
        	var nextUserIds = $('#assign-form input[name="eventAssign.department"]').val(); //交办主办单位Id
        	var busId = $('#assign-form input[name="eventAssign.eventId"]').val(); //事件Id（业务Id）
        	var data;
        	if($('input[name="isJoint"]').prop('checked') == true){
        		data = {busId: busId,nextUserIds: nextUserIds,varName: "agreeAndOpera",varValue: 2,isJoint: "0"};
        	}else{
        		data = {busId: busId,nextUserIds: nextUserIds,varName: "agreeAndOpera",varValue: 2,isJoint: "1"};
        	}
        	$('input[name="isJoint"]').attr('disabled',true); //阻止checkbox提交

    		if($('[name="assignFile"]').val() == ""){ //如果文件为空，阻止提交
        		$('[name="assignFile"]').attr('disabled',true);
        	}
    		$(form).ajaxSubmit({
                type: 'post',
                url: '../../act/deal/doActTask',
                data: data,
                dataType: 'json',
                success: function(res){
                    if(res.retCode == 0){
                        $.globalMessenger().post({
                            message : '提交成功!',
                            type : 'success',
                            hideAfter : 2,
                            showCloseButton : true
                        });
                        getEventsNewNum();  //更新导航栏tip
                        closeWin(); //退出
                    }else{
                        $.globalMessenger().post({
                            message : '提交失败!',
                            type : 'error',
                            hideAfter : 2,
                            showCloseButton : true
                        });
                    }
                },
                error: function(){}
            });
        }
    });
    
    //表单验证--直接回复
    $('#reply-form').validate({
        rules: {
        	'eventDerictReply.replyContent': "required"
        },
        messages: {
        	'eventDerictReply.replyContent': "回复内容不能为空"
        },
        submitHandler: function(form){
        	//业务id
        	var busId = $('#reply-form input[name="eventBasicInfo.id"]').val();
        	formSubmit(form,busId,3); //直接回复：3
        }
    });
    
    //表单验证--回退
    $('#back-form').validate({
        rules: {
        	'postponeBack.backReason': "required"
        },
        messages: {
        	'postponeBack.backReason': "回退理由不能为空"
        },
        submitHandler: function(form){
        	//业务id
        	var busId = $('#back-form input[name="postponeBack.eventId"]').val();
        	formSubmit(form,busId,9); //回退：9
        }
    });
    
    //表单验证--县级退办
    $('#countryBack-form').validate({
        rules: {
        	'eventDealComfirm.delayDay': "required",
        	'eventDealComfirm.rejectReason': "required"
        },
        messages: {
        	'eventDealComfirm.delayDay': "延期时间不能为空",
        	'eventDealComfirm.rejectReason': "退办理由不能为空"
        },
        errorPlacement: function (error, element) {
            if (element.is(":radio")) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        },
        submitHandler: function(form){
        	//业务id
        	var busId = $('#countryBack-form input[name="eventDealComfirm.eventId"]').val();
        	formSubmit(form,busId,1); //县级退办：1
        }
    });
    
    //表单验证--结案审核
    $('#endCheck-form').validate({
        rules: {
        	'eventDealComfirm.serviceOpinion': "required",
        	'eventDealComfirm.feedbackPerosn': "required",
        	'eventDealComfirm.informUnit': "required",
        	'eventDealComfirm.informPerson': "required",
        	'eventDealComfirm.informPhone': {
        		'phone': true,
                required: true
        	} 
        },
        messages: {
        	'eventDealComfirm.serviceOpinion': "评价不能为空",
        	'eventDealComfirm.feedbackPerosn': "反馈人不能为空",
        	'eventDealComfirm.informUnit': "告知单位不能为空",
        	'eventDealComfirm.informPerson': "告知人不能为空",
        	'eventDealComfirm.informPhone': {
        		'phone': "告知电话格式不正确",
        		required: "告知电话不能为空",
        	}
        },
        submitHandler: function(form){
        	//业务id
        	var busId = $('#endCheck-form input[name="eventDealComfirm.eventId"]').val();
        	formSubmit(form,busId,0); //结案审核：0
        }
    });
    
    //表单验证--备注
    $('#remark-form').validate({
    	rules: {
    		remarkContent: "required"
    	},
        messages: {
        	remarkContent: "备注内容不能为空"
        },
        submitHandler: function(form){
        	$(form).ajaxSubmit({
                type: 'post',
                url: '../../eventBasicInfo/remarkEvent',
                dataType: 'json',
                success: function(res){
                    if(res.retCode == 0){
                        $.globalMessenger().post({
                            message : '提交成功!',
                            type : 'success',
                            hideAfter : 2,
                            showCloseButton : true
                        });
                        getEventsNewNum();  //更新导航栏tip
                        closeWin(); //退出
                    }else{
                        $.globalMessenger().post({
                            message : '提交失败!',
                            type : 'error',
                            hideAfter : 2,
                            showCloseButton : true
                        });
                    }
                },
                error: function(){
                }
            });     
        }
    });
    
    //表单验证--延期申请
    $('#applyDelay-form').validate({
        rules: {
        	'postponeBack.postponeReason': "required"
        },
        messages: {
        	'postponeBack.postponeReason': "延期理由不能为空"
        },
        submitHandler: function(form){
        	//业务id
        	var busId = $('#applyDelay-form input[name="postponeBack.eventId"]').val();
        	formSubmit(form,busId,6); //延期申请：6
        }
    });
});

//表单提交（延期审核-同意0 不同意1、结案审核0、县级退办1、交办2、直接回复3、结案申请4、上报5、延期申请6、办理7、批示8、回退9）
function formSubmit(form,busId,varValue){
	if(varValue == 2){
		if($('[name="assignFile"]').val() == ""){ //如果文件为空，阻止提交
    		$('[name="assignFile"]').attr('disabled',true);
    	}
	}else if(varValue == 3){
		if($('[name="replyFile"]').val() == ""){ //如果文件为空，阻止提交
    		$('[name="replyFile"]').attr('disabled',true);
    	}
	}else if(varValue == 4){
		if($('[name="endCaseFile"]').val() == ""){ //如果文件为空，阻止提交
    		$('[name="endCaseFile"]').attr('disabled',true);
    	}
	}else if(varValue == 5){
		if($('[name="reportFile"]').val() == ""){ //如果文件为空，阻止提交
    		$('[name="reportFile"]').attr('disabled',true);
    	}
	}else if(varValue == 8){
		if($('[name="instructFile"]').val() == ""){ //如果文件为空，阻止提交
    		$('[name="instructFile"]').attr('disabled',true);
    	}
	}
	$(form).ajaxSubmit({
        type: 'post',
        url: '../../act/deal/doActTask',
        data: {
			busId: busId,
			varName: "agreeAndOpera",
			varValue: varValue,
			nextUserIds: 4
		},
        dataType: 'json',
        success: function(res){
            if(res.retCode == 0){
                $.globalMessenger().post({
                    message : '提交成功!',
                    type : 'success',
                    hideAfter : 2,
                    showCloseButton : true
                });
                getEventsNewNum();  //更新导航栏tip
                closeWin(); //退出
            }else{
                $.globalMessenger().post({
                    message : '提交失败!',
                    type : 'error',
                    hideAfter : 2,
                    showCloseButton : true
                });
            }
        },
        error: function(){
        }
    });
}