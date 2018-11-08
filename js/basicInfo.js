var backRoute = getHashRequest().backRoute;
var id = getHashRequest().id;  //获取url中"?"符后的字串 
var pagePath;

if(backRoute == 'event/preDetail'){
	pagePath = 'event-handle/predoing';
}
if(backRoute == 'event/assignTrackDetail'){
	pagePath = 'event-handle/doing';
}
//返回
var closeWin = function(){
	router.setRoute(backRoute + "?id=" + id);
}

var getUrl = "";
var updateUrl = "";
var success_msg = "保存成功！";
var error_msg = "保存成功！";
$(function(){
	if(backRoute.split('/')[0] == "workorder"){
		getUrl = "../../workorderInfo/detail";
		updateUrl = "../../workorderInfo/update";
		$('#workorder-reply').css('display','block');
	}else if(backRoute.split('/')[0] == "pretreat"){
		getUrl = "../../workorderInfo/detail";
		updateUrl = "../../eventBasicInfo/insert";
		$('#directReply').css('display','none');  //转入大联动详情不需要直接回复按钮
	}else if(backRoute.split('/')[0] == "event"){
		getUrl = "../../eventBasicInfo/getOne";
		updateUrl = "../../eventBasicInfo/update";
		$('#directReply').css('display','none');  //事件详情不需要直接回复按钮
	}
	
	//加载反映渠道、归属类型、从事职业
    $.ajax({
    	type: 'post',
    	url: '../../eventBasicInfo/getAllDict',
    	async: false,
    	dataType: 'json',
    	success: function(res){
    		var eventChannel = res.data.dictEventChannel;
    		for(i in eventChannel){
    			$('select[name="eventChannel"]').append('<option value="' + eventChannel[i].code + '">' + eventChannel[i].name + '</option>');
    		}
    		
    		var attrType = res.data.dictAttrType;
    		for(i in attrType){
    			$('select[name="attrType"]').append('<option value="' + attrType[i].code + '">' + attrType[i].name + '</option>');
    		}
    		
    		var job = res.data.dictJob;
    		for(i in job){
    			$('select[name="job"]').append('<option value="' + job[i].code + '">' + job[i].name + '</option>');
    		}
    		
    		var petitionCode = res.data.dictPetitionCode;
    		for(i in petitionCode){
    			$('#petitionCodeDiv').append('<input type="radio" name="petitionCode" value="' + petitionCode[i].code + '">' + petitionCode[i].name + ' ');	
    		}
    		
    		var eventType = res.data.dictEventType;
    		for(i in eventType){
    			$('#eventTypeDiv').append('<input type="radio" name="eventType" value="' + eventType[i].code + '">' + eventType[i].name + ' ');	
    		}
    	},
    	error: function(){}
    });
		
	//获取事件详情
	$.ajax({
		type: "post", 
        url : getUrl, 
        data: {
          id: id
        },
        dataType: 'json',
        success: function(res){ 
	        if(res.retCode == 0){
	        	$("#basicInfo-form input[name='eventId']").val(id);  //eventId!=null就更新
	        	$("#basicInfo-form input[name='id']").val(id);  //工单id
	        	
	        	var d = res.data;
	            for(var i in d){
	            	//单选框//是否保密,是否排查,是否能效件,是否二次交办,紧急程度
	            	if(i=="isSecret" || i=="isCheck" || i=="isEffective" || i=="isSecondAssignEvent" || i=="petitionCode" || i=="eventType" || i=="emDegree"){
	            		$('input[name="' + i + '"][value="' + d[i] + '"]').attr('checked','checked');  //0是,1否
	            	}
	            	//下拉框//反映渠道、初重标识、性别、从事职业、归属类型
	            	else if(i=="eventChannel" || i=="firstStatus" || i=="gender" || i=="job" || i=="attrType"){
	            		$('select[name="' + i + '"]').val(d[i]);
	            	}
	            	else if(i=="issueContent"){  //反映内容
	            		$("#basicInfo-form").find("textarea[name='"+i+"']").val(d[i]);
	            	}
	            	else if(i=="fileName") {
	            		$("#basicInfo-form").find("input[id='"+i+"']").val(d[i]);
	            	}
	            	else if(i=="replyDept" && d[i]==""){
	            		//自动填充回复人等信息
	            	    $("input[name='replyDept']").val(localStorage.departmentName);  //回复单位
	            	    $("input[name='replyDeptId']").val(localStorage.departmentId);  //回复单位Id
	            	}
	            	else{
	            		if(i=="age" && d[i]==0){  //年龄
	            			d[i]="";
		              	}
	            		$("#basicInfo-form").find("input[name='"+i+"']").val(d[i]);
	            	}
	            }   
	        }
        }
	});
	
    setInterval(function(){
    	var currentTime = getNowFormatDate();
    	$('input[name="replyTime"]').val(currentTime);  //回复时间
    },"1000");
	
	//表单验证
    $('#basicInfo-form').validate({
    	rules: {
    		occurOrg: "required",
    		eventChannel: "required",
    		petitionCode: "required",
    		eventType: "required",
    		eventTypeStr: "required",
    		reminderCount:{
    			digits: true
    		},
    		name: {
             	required: true,
                'no-spchar': true,
                maxlength: 11
            },
            nation: {
            	'no-spchar': true,
   	            maxlength: 10
   	        },
   	        certificateNo: {
   	        	'idcode':true
   	        },
   	        age: {
   	        	digits: true
   	        },
   	        email: {
   	        	email: true
   	        },
    		phone: {
    			required: true,
    			number: true,
             	maxlength: 11
            },
    		address: {
    			required:true,
   			  	'no-spchar':true,
   			  	maxlength:150
    		},
    		occurPlace: {
    			required: true,
                maxlength: 200
            },
    		subject: "required",
    		issueContent: "required",
    	},
    	errorPlacement: function (error, element) {
            if (element.is(":radio")) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        },
    	messages: {
    		occurOrg: "请选择发生网格",
    		eventChannel: "请选择反映渠道",
    		petitionCode: "请选择市电信访网",
    		eventType: "请选择反映类型",
    		eventTypeStr: "请选择事件类型",
    		reminderCount:{
    			digits: "催办次数必须输入整数"
    		},
            name:{
                required: "姓名不能为空",
                'no-spchar': "姓名存在特殊字符",
                maxlength: "姓名不能超过11个字符"
            },
            nation: {
            	'no-spchar': "民族填写不能存在特殊字符",
            	maxlength: "民族填写不超过10字符"
   	        },
   	        certificateNo: {
   	        	'idcode': "身份证号码格式不正确"
   	        },
   	        age: {
   	        	digits: "年龄只能填数字"
   	        },
   	        email: {
   	        	email: "邮箱格式不正确"
   	        },
    		phone: {
                required: "来电号码不能为空",
                number: "来电号码必须输入合法的数字",
                maxlength: "来电号码不超过11字符"
            },
    		address: {
    			required: "住址填写不能为空",
   	    	  	'no-spchar': "住址填写不能存在特殊字符",
     	        maxlength: "住址填写不超过150字符"
   	      	},
            occurPlace: {
                required: "问题发生地不能为空",
                maxlength: "问题发生地不能超过200个字符"
            },
            subject: {
                required: "反映主题不能为空",
                'no-spchar': "反映主题存在特殊字符",
                maxlength: "反映主题不能超过100个字符"
            },
            issueContent: {
                required: "反映内容不能为空",
                'no-spchar': "反映内容存在特殊字符",
                maxlength: "反映内容不能超过1000个字符"
            }	
    	},
    	submitHandler: function(form){
    		if(backRoute.split('/')[0] == "pretreat"){  //工单转入大联动，不需要工单id，否则会误认为事件id
    			$("#basicInfo-form input[name='id']").val("");
    		}
    		$(form).ajaxSubmit({
    			type: 'post',
    			url: updateUrl,
                dataType: 'json',
                success:function(res){
                	if(res.retCode == 0){
                		$.globalMessenger().post({
                            message : success_msg,
                            type : 'success',
                            hideAfter : 2,
                            showCloseButton : true
                        });
                		
                		if(success_msg == "回复成功！"){
                			router.setRoute("workorder/workorder");
                		}else{
                			closeWin();  //退出
                		}
                		getEventsNewNum();  //更新导航栏tip
                	}else{
                		$.globalMessenger().post({
                            message : error_msg,
                            type : 'error',
                            hideAfter : 2,
                            showCloseButton : true
                        });
                	}
                },
                error:function(){
                }
    		});
    	}
    });
    
    $('#directReply').click(function(){
    	updateUrl = "../../workorderInfo/directReply";
    	
    	success_msg = "回复成功！";
    	error_msg = "回复成功！";
    });
});