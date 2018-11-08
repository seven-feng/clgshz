var id = getHashRequest().id ;  //获取url中"?"符后的字串 

$(function(){
	//查看相似页面做特殊处理
	if(location.href.substring(location.href.lastIndexOf('/') + 1,location.href.indexOf('?')) == "relatedDetail"){
		id = location.href.substring(location.href.indexOf('?') + 4,location.href.length);
	}
	
    //作废按钮
    $('#cancel').click(function(){
        $("#modal1").modal('show');
    });
    
    $('#cancelBtn').click(function(){
    	$.ajax({
  	        type: "post", 
  	        url: "../../eventBasicInfo/invalidEvent",
  	        data: {
  	          id: id
  	        },
  	        dataType: 'json',
  	        success: function(res){
  	        	if(res.retCode == 0){
                    $.globalMessenger().post({
                        message : '废除成功!',
                        type : 'success',
                        hideAfter : 2,
                        showCloseButton : true
                    });
                    $("#modal1").modal('hide');
                    $(".modal-backdrop").remove();  //删除class值为modal-backdrop的标签，可去除阴影
                    closeWin(); //退出
                }else{
                    $.globalMessenger().post({
                        message : '废除失败!',
                        type : 'error',
                        hideAfter : 2,
                        showCloseButton : true
                    });
                    $("#modal1").modal('hide');
                    $(".modal-backdrop").remove();  //删除class值为modal-backdrop的标签，可去除阴影
                }
  	        }
  	    });
    });
    
    //打印按钮
    $('#print').click(function(){
        $("#modal2").modal('show');
        
        $.ajax({
  	        type: "post", 
  	        url: "../../eventBasicInfo/getEventGeneralInfo",
  	        data: {
  	          eventId: id
  	        },
  	        dataType: 'json',
  	        success: function(res){
  	        	if(res.retCode == 0 && res.data != null){
  	        		$("#print-table [name='assignPerson']").text(res.data.assignPerson);  //交办人
  	        		$("#print-table [name='assignPhone']").text(res.data.assignPhone);  //交办联系电话
    				$("#print-table [name='assignContent']").text(res.data.assignContent);  //交办意见
    				$("#print-table [name='assignUnit']").text(res.data.assignUnit);  //受理单位---交办单位
    				
    				$("#print-table [name='eventNo']").text(res.data.eventNo);  //事件编号
    				$("#print-table [name='appealPerson']").text(res.data.appealPerson);  //求助人
    				$("#print-table [name='appealPhone']").text(res.data.appealPhone);  //求助电话
    				$("#print-table [name='address']").text(res.data.address);  //住址
    				
    				$("#print-table [name='issueTime']").html(res.data.issueTime);  //求助日期---只显示年月日
    				$("#print-table [name='feedbackTime']").html(res.data.feedbackTime);  //办理期限
    				$("#print-table [name='occurPlace']").text(res.data.occurPlace);  //问题发生地
    				$("#print-table [name='eventSourceWay']").text(res.data.eventSourceWay);  //事件来源方式--eventChannel
    				$("#print-table [name='issueContent']").text(res.data.issueContent);  //求助内容
    				
    				$("#print-table [name='departmentLeaderConmment']").text(res.data.departmentLeaderConmment);  //承办部门领导意见
    				$("#print-table [name='hostUnit']").text(res.data.hostUnit);  //承办单位
    				$("#print-table [name='hostPerson']").text(res.data.hostPerson);  //承办人
    				$("#print-table [name='hostPhone']").text(res.data.hostPhone);  //承办人电话
    				$("#print-table [name='handleResult']").text(res.data.handleResult);  //办理结果
    				$("#print-table [name='resultOpinion']").text(res.data.resultOpinion);  //办理结果意见
    				$("#print-table [name='signLeader']").text(res.data.signLeader);  //签发领导
    				$("#print-table [name='endTime']").html(res.data.endTime);  //办结时间
    				
    				$("#print-table [name='assistUnit']").text(res.data.assistUnit);  //协办单位
    				$("#print-table [name='assistPerson']").text(res.data.assistPerson);  //协办人
    				$("#print-table [name='assistPhone']").text(res.data.assistPhone);  //协办人电话
    				$("#print-table [name='otherResult']").text(res.data.otherResult);  //其他办理结果意见	
    				$("#print-table [name='remarkContent']").text(res.data.remarkContent);  //备注内容
    			} 
  	        },
  	        error: function(){
  	        	
  	        }
  	    });
    });
    
    $('#printBtn').click(function(){
    	$("#print-body").print({
    	    globalStyles:true,//是否包含父文档的样式，默认为true
    	    mediaPrint:false,//是否包含media='print'的链接标签。会被globalStyles选项覆盖，默认为false
    	    stylesheet:null,//外部样式表的URL地址，默认为null
    	    noPrintSelector:".no-print",//不想打印的元素的jQuery选择器，默认为".no-print"
    	    iframe:true,//是否使用一个iframe来替代打印表单的弹出窗口，true为在本页面进行打印，false就是说新开一个页面打印，默认为true
    	    append:null,//将内容添加到打印内容的后面
    	    prepend:null,//将内容添加到打印内容的前面，可以用来作为要打印内容
    	    deferred:
    	 $.Deferred()//回调函数
    	});         
    });
    
    $('#wordBtn').click(function(){
    	window.location = "../../eventBasicInfo/exportDoc?eventId=" + id;
    	$("#modal2").modal('hide');
    });
    
    //评价按钮
    $('#evaluate').click(function(){
        $("#modal3").modal('show');
    });
    
    $.ajax({
	    type: "post", 
	    url: "../../eventBasicInfo/getEvaluation",
	    data: {
	      eventId: id
	    },
	    dataType: 'json',
	    success: function(res){
	    	if(res.retCode == 0 && res.data != null){
	    		$("table.evaluate-table [name='id']").val(res.data.id);  //id
	    		$("table.evaluate-table [name='eventId']").val(res.data.eventId);  //eventId
	    		$("table.evaluate-table [name='serviceOpinion']").val(res.data.serviceOpinion);  //评价
				$("table.evaluate-table [name='personOpinion'][value='" + res.data.personOpinion + "']").attr('checked','checked');  //工作态度意见
				$("table.evaluate-table [name='otherPersonOpinion']").val(res.data.otherPersonOpinion);  //工作态度其他意见 
				$("table.evaluate-table [name='feedbackPerosn']").val(res.data.feedbackPerosn);  //反馈人
				$("table.evaluate-table [name='resultOpnion'][value='" + res.data.resultOpnion + "']").attr('checked','checked');  //办理结果意见
				$("table.evaluate-table [name='otherResultOpinion']").val(res.data.otherResultOpinion);  //办理结果其他意见
				$("table.evaluate-table [name='isHotSpot'][value='" + res.data.isHotSpot + "']").attr('checked','checked');  //是否热点
				$("table.evaluate-table [name='enterSampleLibrary'][value='" + res.data.enterSampleLibrary + "']").attr('checked','checked');  //是否进入样本库
				$("table.evaluate-table [name='openNetwork'][value='" + res.data.openNetwork + "']").attr('checked','checked');  //是否公开
				$("table.evaluate-table [name='isCheck'][value='" + res.data.isCheck + "']").attr('checked','checked');  //是否排查
				$("table.evaluate-table [name='isEffective'][value='" + res.data.isEffective + "']").attr('checked','checked');  //是否能效件
				$("table.evaluate-table [name='isVisit'][value='" + res.data.isVisit + "']").attr('checked','checked');  //是否已回访
				
				if($('table.evaluate-table input[name="personOpinion"][value="其他"]').prop('checked')){
					$('table.evaluate-table input[name="otherPersonOpinion"]').css('display','inline');
				}
				
				if($('table.evaluate-table input[name="resultOpnion"][value="其他"]').prop('checked')){
					$('table.evaluate-table input[name="otherResultOpinion"]').css('display','inline');
				}
				
			    //“其他”选项，弹出输入框
			    $('table.evaluate-table input[name="personOpinion"][value!="其他"]').click(function(){
			    	$('table.evaluate-table input[name="otherPersonOpinion"]').css('display','none');
			    });
			    
			    $('table.evaluate-table input[name="personOpinion"][value="其他"]').click(function(){
			    	$('table.evaluate-table input[name="otherPersonOpinion"]').css('display','inline-block');
			    });
			    
			    $('table.evaluate-table input[name="resultOpnion"][value!="其他"]').click(function(){
			        $('table.evaluate-table input[name="otherResultOpinion"]').css('display','none');
			    });
			    
			    $('table.evaluate-table input[name="resultOpnion"][value="其他"]').click(function(){
			        $('table.evaluate-table input[name="otherResultOpinion"]').css('display','inline-block');
			    });
			} else {
				$('#evaluate').css('display','none');
			}
	    },
	    error: function(){
	    	
	    }
	});
    
    $('#evaluateBtn').click(function(){
    	$('#evaluate-form').ajaxSubmit({
            type: 'post',
            url: '../../eventBasicInfo/updateEvaluation',
            dataType: 'json',
            success: function(res){
            	if(res.retCode == 0){
            		$.globalMessenger().post({
                        message : '修改成功!',
                        type : 'success',
                        hideAfter : 2,
                        showCloseButton : true
                    });
            	}else{
            		$.globalMessenger().post({
                        message : '修改失败!',
                        type : 'error',
                        hideAfter : 2,
                        showCloseButton : true
                    });
            	}
            	$("#modal3").modal('hide');
            },
            error: function(){
            }
        });    
    });

	//获取事件详情
	$.ajax({
		type: "post", 
        url : "../../eventBasicInfo/getOne", 
        data: {
          id: id
        },
        async: true,
        dataType: 'json',
        success: function(res){ 
        if(res.retCode == 0){
        	$.ajax({
        		type: 'post',
        		url: '../../eventBasicInfo/getConfirmInfo',
        		data: {
        			eventId: id
        		},
        		dataType: 'json',
        		success: function(res){
        			if(res.retCode == 0 && res.data != null){
        				$('input[name="postponeBack.id"]').val(res.data.id); //延期审核、回退
        				//延期审核
        				$("#delayCase-form input[name='postponeBack.createruser']").val(res.data.createruser); //经手人	
        	        	$("#delayCase-form input[name='postponeBack.postPhone']").val(res.data.postPhone); //联系电话
        	        	$("#delayCase-form input[name='postponeBack.delayDay']").val(res.data.delayDay); //延期天数
        	        	$("#delayCase-form textarea[name='postponeBack.postponeReason']").val(res.data.postponeReason); //延期理由
        			}
        		},
        		error: function(){}
        	});
        	
        	var d = res.data;
            for(var i in d){
            	if(i=="remarkContent"){
            		$("#remark-form textarea[name='"+i+"']").val(d[i]);  //备注内容
            	}else{
            		//是否保密,是否排查,是否能效件,是否公开
                	if(i=="isSecret" || i=="isCheck" || i=="isEffective" || i=="isSecondAssignEvent"){
                		if(d[i]=="0")  //0是,1否
                			d[i]="是";
                		else if(d[i]=="1")
                			d[i]="否";
                	}
                	else if(i=="emDegree"){  //紧急程度
                		if(d[i]=="0")	
                			d[i]="平急";
                      	else if(d[i]=="1") 
                      		d[i]="紧急";
                      	else if(d[i]=="2") 
                      		d[i]="特急";
                	}
                	else if(i=="gender"){  //性别
                		if(d[i]=="1")	
                			d[i]="男";
                      	else if(d[i]=="0") 
                      		d[i]="女";
                  	}
                	else if(i=="firstStatus"){  //初重标识
                      	if(d[i]=="1")
                      		d[i]="重";
                      	else if(d[i]=="0")
                      		d[i]="初";
                  	}
                  	else if(i=="age"){  //年龄
                  		if(d[i]==0)
                  			d[i]="";
                  	}
                  	else if(i=="attrType"){ //归属类型
                  		if(d[i]=="1")
                      		d[i]="百姓热线";
                      	else if(d[i]=="2")
                      		d[i]="信访局";
                      	else if(d[i]=="3")
                      		d[i]="无违建县";
                      	else if(d[i]=="4")
                      		d[i]="五水共治";
                      	else if(d[i]=="5")
                      		d[i]="110联动";
                      	else if(d[i]=="6")
                      		d[i]="文明城市创建";
                      	else if(d[i]=="7")
                      		d[i]="领导交办";
                      	else if(d[i]=="8")
                      		d[i]="群众线索";
                  	}

            		$("#event-form").find("[name='"+i+"']").html(d[i]);  //数据填充   
            	} 
            }
            
            /**
             * 备注
             */
        	$("#event-form input[name='eventId']").val(id);
            $("#event-form input[name='remarkPerson']").val(localStorage.userName);  //备注人	
        	$("#event-form input[name='remarkDept']").val(localStorage.departmentName);  //备注单位
        	
        	/**
        	 * 上报
        	 */
        	$("#event-form input[name='eventReport.eventId']").val(id); //业务id
        	$("#event-form input[name='eventReport.reportPerson']").val(localStorage.userName);  //上报人	
        	$("#event-form input[name='eventReport.reportPhone']").val(localStorage.phone);  //联系电话（上报）
        	$("#event-form input[name='eventReport.reportUnit']").val(localStorage.departmentName);  //上报单位
        	$("#event-form input[name='eventReport.reportUnitId']").val(localStorage.departmentId);  //上报单位id
        	//如果上报单位是：赫章县治理中心（id:4），就在办理操作中去掉上报
        	if($("#event-form input[name='eventReport.reportUnitId']").val() == 4)
        		$('#report-radio').parent().css('display','none');
        	
        	/**
        	 * 直接回复
        	 */
        	$("#event-form input[name='eventBasicInfo.id']").val(id); //业务id
        	$("#event-form input[name='eventDerictReply.replyPerson']").val(localStorage.userName); //回复人
            $("#event-form input[name='eventDerictReply.replyDept']").val(localStorage.departmentName); //回复单位
            $("#event-form input[name='eventDerictReply.departmentId']").val(localStorage.departmentId); //回复单位id
        	
        	/**
        	 * 交办
        	 */
            $("#event-form input[name='eventAssign.eventId']").val(id); //业务id
        	$("#event-form input[name='eventAssign.acceptTime']").val(getNowFormatDate()); //受理时间（交办）
        	$("#event-form input[name='eventAssign.assignPerson']").val(localStorage.userName); //交办人
        	$("#event-form input[name='eventAssign.phone']").val(localStorage.phone); //联系电话（交办）
        	
        	$.ajax({ //初始化办理期限
      	        type: "post", 
      	        url: "../../eventBasicInfo/getFeedbackTime",
      	        dataType: 'json',
      	        success: function(res){ 
      	            if(res.retCode == 0){
      	            	$("#event-form input[name='eventAssign.feedbackTime']").val(res.data);  //反馈时间（交办）
      	            	$("#event-form input[name='eventAssign.period']").val(5); //5个工作日
      	            }
      	        }
      	    });
        	
        	$("#event-form input[name='eventAssign.period']").change(function(){ //办理期限修改
        		var period = $("#event-form input[name='eventAssign.period']").val();
          		$.ajax({
          	        type: "post", 
          	        url: "../../eventBasicInfo/getFeedbackTime",
          	        data: {
          	          delayDay: period
          	        },
          	        dataType: 'json',
          	        success: function(res){ 
          	            if(res.retCode == 0){
          	            	$("#event-form input[name='eventAssign.feedbackTime']").val(res.data);
          	            }
          	        }
          	    });
          	});
        	
        	var pagePath = location.hash.substring(location.hash.indexOf('#') + 1, location.hash.indexOf('?'));
        	if(res.data.isJoint == "1" && pagePath == "/event/preDetail"){ //1.非联合执法 2.代办件
        		$('#assign-radio').parent().css('display','inline');  //交办
        	}
        	
        	/**
        	 * 办理、结案申请
        	 */
        	$("#event-form input[name='eventDealInfo.eventId']").val(id); //业务id
            $("#event-form input[name='eventDealInfo.replyPerson']").val(localStorage.userName);  //承办人
            $("#event-form input[name='eventDealInfo.phone']").val(localStorage.phone);  //承办人联系电话
            $("#event-form input[name='eventDealInfo.replyUnit']").val(localStorage.departmentName);  //承办单位
            
            /**
             * 县级退办
             */
            $("#event-form input[name='eventDealComfirm.eventId']").val(id); //业务id
            
            /**
             * 延期申请
             */
            $("#event-form input[name='postponeBack.eventId']").val(id); //业务id
        	$("#event-form input[name='postponeBack.createruser']").val(localStorage.userName); //经手人	
        	$("#event-form input[name='postponeBack.postPhone']").val(localStorage.phone); //联系电话
        	
        	/**
        	 * 回退
        	 */
        	$("#event-form input[name='postponeBack.eventId']").val(id); //业务id
        	
        	/**
        	 * 批示
        	 */
        	$("#event-form input[name='eventInstruction.eventId']").val(id); //业务id
        	$("#event-form input[name='eventInstruction.assignPerson']").val(localStorage.userName);  //批示人	
        	$("#event-form input[name='eventInstruction.phone']").val(localStorage.phone);  //联系电话
        	
            /**
             * 备注、上报、回复、交办、转告时间
             */
        	setInterval(function(){
        		var currentTime = getNowFormatDate();
        		$("#event-form input[name='remarkTime']").val(currentTime); //备注时间
              	$("#event-form input[name='eventReport.reportTime']").val(currentTime); //上报时间
              	$("#event-form input[name='eventDerictReply.replyTime']").val(currentTime); //回复时间
              	$("#event-form input[name='eventAssign.assignTime']").val(currentTime); //交办时间
              	//结案审核
              	$("#event-form input[name='eventDealComfirm.informTime']").val(currentTime); //告知时间
            },"1000");
        	

        	/**
        	 * 保存临时数据的回显
        	 */
        	$.ajax({
        		type: 'post',
        		url: '../../eventBasicInfo/getTempStorage',
        		data: {
        			eventId: id
        		},
        		dataType: 'json',
        		success: function(res){
        			if(res.retCode == 0 && res.data != null){
        				//上报
        				$("#event-form [name='eventReport.reportOpinion']").val(res.data.reportOpinion);  //上报意见
        				//直接回复
        				$("#event-form [name='eventDerictReply.replyContent']").val(res.data.replyContent); //回复内容
        				$("#event-form [name='eventDerictReply.messageContent']").val(res.data.messageContent); //短信内容
        				//交办
        				$("#event-form [name='eventAssign.leaderInstruction']").val(res.data.leaderInstruction);  //领导批示
        				$("#event-form [name='eventAssign.assignContent']").val(res.data.assignContent);  //交办意见
        				$("#event-form [name='eventAssign.isImportant'][value='" + res.data.isImportant + "']").attr('checked','checked');  //是否要件
        				if($('input[name="eventAssign.isImportant"][value="0"]').prop('checked')){ //如果选中，就自动展开
        		            $('#leaderInstruct').css('display','block');
        		        }else{
        		            $('#leaderInstruct').css('display','none');
        		        }
        				$("#event-form [name='eventAssign.isPublic'][value='" + res.data.isPublic + "']").attr('checked','checked');  //外网公开
        				$("#event-form [name='eventAssign.isSpecial'][value='" + res.data.isSpecial + "']").attr('checked','checked');  //特事特办

        				if(res.data.isJoint == "0"){
        					$("#event-form [name='isJoint']").prop('checked',true);  //联合执法
        					$('#jointDeptDiv').css('display','block');
        				}else{
        					$("#event-form [name='isJoint']").prop('checked',false);
        					$('#jointDeptDiv').css('display','none');
        				}	
        				//批示
        				$("#event-form [name='eventInstruction.instructContent']").val(res.data.instructContent);  //批示内容
        			}
        		},
        		error: function(){}
        	});
        	
        	/**
        	 * 保存临时数据的回显
        	 */
        	$.ajax({
        		type: 'post',
        		url: '../../eventBasicInfo/getTempDealConfirm',
        		data: {
        			eventId: id
        		},
        		dataType: 'json',
        		success: function(res){
        			if(res.retCode == 0 && res.data != null){
        				//结案审核
        				$("#event-form [name='eventDealComfirm.serviceOpinion']").val(res.data.serviceOpinion);  //评价
        				$("#event-form [name='eventDealComfirm.personOpinion'][value='" + res.data.personOpinion + "']").attr('checked','checked');  //工作态度意见 
        				$("#event-form [name='eventDealComfirm.otherPersonOpinion']").val(res.data.otherPersonOpinion); //其他工作态度意见 
        				$("#event-form [name='eventDealComfirm.feedbackPerosn']").val(res.data.feedbackPerosn);  //反馈人
        				$("#event-form [name='eventDealComfirm.resultOpnion'][value='" + res.data.resultOpnion + "']").attr('checked','checked');  //办理结果意见
        				$("#event-form [name='eventDealComfirm.otherResultOpinion']").val(res.data.otherResultOpinion); //其他办理结果意见
        				$("#event-form [name='eventDealComfirm.isHotSpot'][value='" + res.data.isHotSpot + "']").attr('checked','checked');  //是否热点
        				$("#event-form [name='eventDealComfirm.enterSampleLibrary'][value='" + res.data.enterSampleLibrary + "']").attr('checked','checked');  //是否进入样本库
        				$("#event-form [name='eventDealComfirm.openNetwork'][value='" + res.data.openNetwork + "']").attr('checked','checked');  //是否公开
        				$("#event-form [name='eventDealComfirm.isCheck'][value='" + res.data.isCheck + "']").attr('checked','checked');  //是否排查
        				$("#event-form [name='eventDealComfirm.isEffective'][value='" + res.data.isEffective + "']").attr('checked','checked');  //是否能效件
        				$("#event-form [name='eventDealComfirm.isVisit'][value='" + res.data.isVisit + "']").attr('checked','checked');  //是否已回访
        				$("#event-form [name='eventDealComfirm.informUnit']").val(res.data.informUnit);  //告知单位
        				$("#event-form [name='eventDealComfirm.informPerson']").val(res.data.informPerson);  // 告知人
        				$("#event-form [name='eventDealComfirm.informPhone']").val(res.data.informPhone);  //告知电话
        				
        			    //初始化
        			    if($('input[name="eventDealComfirm.personOpinion"][value="其他"]').attr('checked')){
        			    	$('input[name="eventDealComfirm.otherPersonOpinion"]').css('display','inline');
        			    }
        			    //初始化
        			    if($('input[name="eventDealComfirm.resultOpnion"][value="其他"]').prop('checked')){
        			        $('input[name="eventDealComfirm.otherResultOpinion"]').css('display','inline');
        			    }
        			}
        		},
        		error: function(){}
        	});
        }
        }
	});

    var crud_table = $("#handle-table").CrudTable({
        url: "../../eventBasicInfo/getEventLog",
        params: {
        	eventId:id
        },
        columns: [{
            title:"阶段",
            name: "stage",
            width:"15%",
        },{
            title:"操作人员",
            name: "operationPerson",
            width:"10%"
        },{
            title:"所属部门",
            name: "departmentName",
            width:"10%"
        },{
            title:"意见",
            name: "opinion",
            width:"50%"
        },{
            title:"操作时间",
            name: "time",
            width:"15%"
        }]
    });
    
    crud_table.reload(); 
    
    //添加图片
    $.ajax({
    	type: 'post',
    	url: '../../eventBasicInfo/getAllFilePathById',
    	data: {
			id: id,
			isEvent: true,
		},
		dataType: 'json',
		success: function(res){
			if(res.retCode == "0"){
				var data = res.data;
				var preProcessFile = data.preProcessFile;
				var postProcessFile = data.postProcessFile;
				var patt = /\.(jpg|gif|png|bmp)$/i; 
				
				if(preProcessFile.length == 0){
					$('#preInner').append('<div class="item active"><img src="../../resources/images/img-none.png" /></div>');
				}else{
					//处理前
					var count = 0;
	    			for(var i in preProcessFile){
	    				if(patt.test(preProcessFile[i])){
	    					if(count==0){
	    						$('#preIndicators').append('<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>');
	    						$('#preInner').append('<div class="item active"><img src="' + basePath + preProcessFile[i] + '" /></div>');
	    					}else{
	    						$('#preIndicators').append('<li data-target="#carousel-example-generic" data-slide-to="' + count + '"></li>');
	    						$('#preInner').append('<div class="item"><img src="' + basePath + preProcessFile[i] + '" /></div>');
	    					}
	    					count++;
	    				}
	    			}
	    			if(count==0){
	    				$('#preInner').append('<div class="item active"><img src="../../resources/images/img-none.png" /></div>');
	    			}
				}
				
				if(postProcessFile.length == 0){
					$('#postInner').append('<div class="item active"><img src="../../resources/images/img-none.png" /></div>');
				}else{
					//处理后
					var count = 0;
	    			for(var i in postProcessFile){
	    				if(patt.test(postProcessFile[i])){
	    					if(count==0){
	    						$('#postIndicators').append('<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>');
	    						$('#postInner').append('<div class="item active"><img src="' + basePath + postProcessFile[i] + '" /></div>');
	    					}else{
	    						$('#postIndicators').append('<li data-target="#carousel-example-generic" data-slide-to="' + count + '"></li>');
	    						$('#postInner').append('<div class="item"><img src="' + basePath + postProcessFile[i] + '" /></div>');
	    					}
	    					count++;
	    				}
	    			}
	    			if(count==0){
	    				$('#postInner').append('<div class="item active"><img src="../../resources/images/img-none.png" /></div>');
	    			}
				}
			}
		},
		error: function(){}
    });
    
    //添加附件路径
    $.ajax({
		type: 'post',
		url: '../../eventBasicInfo/getZipFilePath',
		data: {
			id: id
		},
		dataType: 'json',
		success: function(res){
			if(res.retCode == "0"){
				var data = res.data;
				if(data != null){
					$('#batchDownload').attr('href','../../' + data);
				}
			}
		},
		error: function() {}
	});
    
    //批量下载
    $('#batchDownload').click(function(){
    	$.ajax({
    		type: 'post',
    		url: '../../eventBasicInfo/fileToZip',
    		data: {
    			id: id
    		},
    		dataType: 'json',
    		success: function(res){
    			if(res.retCode == "0"){
    			}
    		},
    		error: function() {}
    	});
    });
    
	$('#mapSrc').attr('src','../../act/deal/showFlowImg?eventId='+id); //查看流程图
	
	/**
	 * 查看相似事件
	 */
	$('#simBtn').click(function(){
		var issueContent = $('td[name="issueContent"]').html();
		$.ajax({
			type: 'post',
			url: '../../eventBasicInfo/getRelatedEvent',
			data: {
				id: id,
				issueContent: issueContent
			},
			dataType: 'json',
			success: function(res){
				if(res.retCode == 0){
					//拼接src地址
			    	var src = "../../Layout/event/relatedDetail?id=" + res.data.id;
			    	$('#simDetailFrame').attr('src',src);
			    	$('#simDetailModal').modal('show');
				}else{
					$.globalMessenger().post({
                        message : '没有相似内容!',
                        type : 'error',
                        hideAfter : 2,
                        showCloseButton : true
                    });
				}
			},
			error: function(){}
		});
	});
});