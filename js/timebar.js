/**
 * 
 */
$(function(){
	//获取处理过程
	$.ajax({
      type: "post", 
      url :"../../eventBasicInfo/getEventLog",
      data:{
      	eventId:id
      },
      dataType : 'json',
      success:function(res){ 
          if(res.retCode == 0)
          {
        	  var data = res.data;
        	  var length = data.length;
        	  var arrayOuter = [];
        	  
        	  
        	  for(var i=0;i<length;i++){
        		var arrayOuterObj = {};
        		var tableOuter = [];
        		
        		arrayOuterObj.Columns = 6;
        		arrayOuterObj.time = data[i].time;
        		arrayOuterObj.title = data[i].operation;
        		if(data[i].otherInfo != null){
        			switch(data[i].type){
        			case "2":
        				for(var j=0;j<=5;j++){
        					var tableInter = [];
        					if(j == 0){
    							var tableObj0 = {};
    							var tableObj1 = {};
    							tableObj0.title = "是否要件";
    							if(data[i].otherInfo.isImportant == '0'){
    								tableObj0.content = "是";
    							}else{
    								tableObj0.content = "否";
    							}
    							
    							tableObj0.colspan = 2;
    							tableInter.push(tableObj0);
    							tableObj1.title = "受理时间";
    							tableObj1.content = data[i].otherInfo.acceptTime;
    							tableObj1.colspan = 2;
    							tableInter.push(tableObj1);
    							tableOuter.push(tableInter);
        					}
        					if(j == 1){
    							var tableObj0 = {};
    							var tableObj1 = {};
    							tableObj0.title = "交办人";
    							//tableObj0.content = data[i].otherInfo.assignPerson;
    							tableObj0.content = data[i].operationPerson;
    							tableObj0.colspan = 2;
    							tableInter.push(tableObj0);
    							tableObj1.title = "交办时间";
    							tableObj1.content = data[i].otherInfo.assignTime;
    							tableObj1.colspan = 2;
    							tableInter.push(tableObj1);
    							tableOuter.push(tableInter);
        					}
        					if(j == 2){
    							var tableObj0 = {};
    							var tableObj1 = {};
    							tableObj0.title = "反馈时间";
    							tableObj0.content = data[i].otherInfo.feedbackTime;
    							tableObj0.colspan = 2;
    							tableInter.push(tableObj0);
    							tableObj1.title = "联系电话";
    							tableObj1.content = data[i].otherInfo.phone;
    							tableObj1.colspan = 2;
    							tableInter.push(tableObj1); 
    							tableOuter.push(tableInter);
        					}
        					if(j == 3){
    							var tableObj0 = {};
    							var tableObj1 = {};
    							tableObj0.title = "联合执法";
    							if(data[i].otherInfo.isJoint == '0'){
    								tableObj0.content = "是";
    							}else{
    								tableObj0.content = "否";
    							}   					
    							tableObj0.colspan = 2;
    							tableInter.push(tableObj0);
    							tableObj1.title = "主办单位";
    							tableObj1.content = data[i].otherInfo.departmentName;
    							tableObj1.colspan = 2;
    							tableInter.push(tableObj1);
    							tableOuter.push(tableInter);                            						
        					}
        					if(j == 4){
    							var tableObj0 = {};
    							tableObj0.title = "交办意见";
    							tableObj0.content = data[i].otherInfo.assignContent;
    							tableObj0.colspan = 5;
    							tableInter.push(tableObj0);
    							tableOuter.push(tableInter);
        					}
        					if(j==5){
        						var tableInter = [];
        						var tableObj1 = {};
        						tableObj1.title = "附件下载";
        						tableObj1.content = "";
        						for(var z = 0; z < data[i].otherInfo.filePaths.length; z++){
        							var file = data[i].otherInfo.filePaths[z];
        							tableObj1.content += "<a style='text-decoration:underline' href='../../"+ file +"' download=''>" 
        							+ file.substring(file.lastIndexOf('/') + 1, file.length) + "</a>" + "&nbsp";
        						} 
        						
        						tableObj1.colspan = 5;
        						tableInter.push(tableObj1);
        						tableOuter.push(tableInter);
        					}
        				};
        				break;
        				
        			case "8":
        				for(var j=0;j<5;j++){
        					var tableInter = [];
        					if(j == 0){
    							var tableObj0 = {};
    							tableObj0.title = "承办单位领导意见";
    							tableObj0.content = data[i].otherInfo.departmentLeaderComment;
    							tableObj0.colspan = 5;
    							tableInter.push(tableObj0);
    							tableOuter.push(tableInter);
        					}
        					if(j == 1){
    							var tableObj0 = {};
    							var tableObj1 = {};
    							tableObj0.title = "承办单位";
    							tableObj0.content = data[i].otherInfo.departmentName;
    							tableObj0.colspan = 2;
    							tableInter.push(tableObj0);
    							tableObj1.title = "承办科室";
    							tableObj1.content = data[i].otherInfo.departmentOffice;
    							tableObj1.colspan = 2;
    							tableInter.push(tableObj1);
    							tableOuter.push(tableInter);
        					}
        					if(j == 2){
    							var tableObj0 = {};
    							var tableObj1 = {};
    							tableObj0.title = "承办人";
    							//tableObj0.content = data[i].otherInfo.name;
    							tableObj0.content = data[i].operationPerson;
    							tableObj0.colspan = 2;
    							tableInter.push(tableObj0);
    							tableObj1.title = "联系电话";
    							tableObj1.content = data[i].otherInfo.phone;
    							tableObj1.colspan = 2;
    							tableInter.push(tableObj1);
    							tableOuter.push(tableInter);
    							                            						
        					}
        					if(j == 3){
    							var tableObj0 = {};
    							
    							tableObj0.title = "办理结果";
    							tableObj0.content = data[i].otherInfo.result;
    							tableObj0.colspan = 5;
    							tableInter.push(tableObj0);
    							tableOuter.push(tableInter);
        					}
        					if(j==4){
        						var tableInter = [];
        						var tableObj1 = {};
        						tableObj1.title = "附件下载";
        						tableObj1.content = "";
        						for(var z = 0; z < data[i].otherInfo.filePaths.length; z++){
        							var file = data[i].otherInfo.filePaths[z];
        							tableObj1.content += "<a style='text-decoration:underline' href='../../"+ file +"' download=''>" 
        							+ file.substring(file.lastIndexOf('/') + 1, file.length) + "</a>" + "&nbsp";
        						} 
        						
        						tableObj1.colspan = 5;
        						tableInter.push(tableObj1);
        						tableOuter.push(tableInter);
        					}
//        					if(j == 4){
//    							var tableObj0 = {};
//    							var tableObj1 = {};
//    							tableObj0.title = "反馈方式";
//    							var typeName = data[i].otherInfo.feedbackType;
//    							switch(typeName)
//                              {
//                              	case "0":
//                              		tableObj0.content = "邮件";
//                                  break;
//                              	case "1":
//                              		tableObj0.content = "电话";
//                                  break;
//                              	case "2":
//                              		tableObj0.content = "其他";
//                                  break;
//                              }
////    							tableObj0.content = data[i].otherInfo.feedbackType;
//    							tableObj0.colspan = 2;
//    							tableInter.push(tableObj0);
//    							tableObj1.title = "反映人意见";
//    							var opinionName = data[i].otherInfo.reportPersonOpinion;
//    							switch(opinionName)
//                              {
//                              	case "0":
//                              		tableObj1.content = "满意";
//                                  break;
//                              	case "1":
//                              		tableObj1.content = "基本满意";
//                                  break;
//                              	case "2":
//                              		tableObj1.content = "不满意";
//                                  break;
//                              	case "3":
//                              		tableObj1.content = "其他";
//                                  break;
//                              }
////    							tableObj1.content = data[i].otherInfo.reportPersonOpinion;
//    							tableObj1.colspan = 2;
//    							tableInter.push(tableObj1);
//    							tableOuter.push(tableInter);
//        					}
        				};
        				break;
        			
        			case "9":
        				for(var j=0;j<3;j++){
        					var tableInter = [];
        					if(j == 0){
    							var tableObj0 = {};
    							if(data[i].otherInfo.isAgree=="0"){
    								tableObj0.title = "结案评价";
    								tableObj0.content = data[i].otherInfo.serviceOpinion;
    							}else{
    								tableObj0.title = "退办理由";
    								tableObj0.content = data[i].otherInfo.rejectReason;
    							}    
    							
    							tableObj0.colspan = 5;
    							tableInter.push(tableObj0);
    							tableOuter.push(tableInter);
        					}
        					if(data[i].otherInfo.isAgree == "0"){
        						if(j == 1){
        							var tableObj0 = {};
        							var tableObj1 = {};
        							tableObj0.title = "反映人意见";
        							var personOpinion = data[i].otherInfo.personOpinion;
        							if(personOpinion=="其他")
        								tableObj0.content = data[i].otherInfo.otherPersonOpinion;
        							else
        								tableObj0.content = data[i].otherInfo.personOpinion;
        							/*switch(personOpinion)
	                                  {
	                                  	case "0":
	                                  		tableObj0.content = "满意";
		                                break;
		                            	case "1":
		                            		tableObj0.content = "基本满意";
		                                break;
		                            	case "2":
		                            		tableObj0.content = "不满意";
		                                break;
		                            	case "3":
		                            		tableObj0.content = "其他";
		                                break;
	                                  }*/
        							tableObj0.colspan = 2;
        							tableInter.push(tableObj0);   
        							tableObj1.title = "反映人";
        							//var personOpinion = data[i].otherInfo.personOpinion;
        							tableObj1.content = data[i].otherInfo.feedbackPerosn;
        							tableObj1.colspan = 2;
        							tableInter.push(tableObj1);
        							tableOuter.push(tableInter);
            					}
            					if(j == 2){
            						var tableObj0 = {};
        							var tableObj1 = {};
        							tableObj0.title = "办理结果意见";
        							var resultOpnion = data[i].otherInfo.resultOpnion;
        							if(resultOpnion=="其他")
        								tableObj0.content = data[i].otherInfo.otherResultOpinion;
        							else
        								tableObj0.content = data[i].otherInfo.resultOpnion;
        							/*switch(resultOpnion)
	                                  {
	                                  	case "0":
	                                  		tableObj0.content = "满意";
		                                break;
		                            	case "1":
		                            		tableObj0.content = "基本满意";
		                                break;
		                            	case "2":
		                            		tableObj0.content = "不满意";
		                                break;
		                            	case "3":
		                            		tableObj0.content = "其他";
		                                break;
	                                  }*/
        							tableObj0.colspan = 2;
        							tableInter.push(tableObj0);   
        							tableObj1.title = "外网公开";
        							//var personOpinion = data[i].otherInfo.personOpinion;
        							var openNetwork = data[i].otherInfo.openNetwork;
        							if(openNetwork == "0"){
        								tableObj1.content = "是";
        							}else{
        								tableObj1.content = "否";
        							}
        							//tableObj1.content = data[i].otherInfo.openNetwork;
        							tableObj1.colspan = 2;
        							tableInter.push(tableObj1);
        							tableOuter.push(tableInter);
            					}
        					}
        					
        				};
        				break;
        				
        			case "4":
        				for(var j=0;j<2;j++){
        					var tableInter = [];
        					if(j == 0){
    							var tableObj0 = {};
    							tableObj0.title = "转办理由";
    							tableObj0.content = data[i].otherInfo.backReason;
    							tableObj0.colspan = 5;
    							tableInter.push(tableObj0);
    							tableOuter.push(tableInter);
        					}
        					if(j == 1){
    							var tableObj0 = {};
    							var tableObj1 = {};
    							tableObj0.title = "经手人";
    							tableObj0.content = data[i].otherInfo.createruser;
    							tableObj0.colspan = 2;
    							tableInter.push(tableObj0);
    							tableObj1.title = "联系电话";
    							tableObj1.content = data[i].otherInfo.postPhone;
    							tableObj1.colspan = 2;
    							tableInter.push(tableObj1);
    							tableOuter.push(tableInter);
        					}
        					
        				};
        				break;
        			
        			case "13":
    					var tableInter = [];
						var tableObj0 = {};
						tableObj0.title = "上报意见";
						tableObj0.content = data[i].otherInfo.reportOpinion;
						tableObj0.colspan = 5;
						tableInter.push(tableObj0);
						tableOuter.push(tableInter);
						
						var tableInter = [];
						var tableObj1 = {};
						tableObj1.title = "附件下载";
						tableObj1.content = "";
						for(var z = 0; z < data[i].otherInfo.filePaths.length; z++){
							var file = data[i].otherInfo.filePaths[z];
							tableObj1.content += "<a style='text-decoration:underline' href='../../"+ file +"' download=''>" 
							+ file.substring(file.lastIndexOf('/') + 1, file.length) + "</a>" + "&nbsp";
						} 
						
						tableObj1.colspan = 5;
						tableInter.push(tableObj1);
						tableOuter.push(tableInter);
						
        			break;
        			
        			case "14":
    					var tableInter = [];
						var tableObj0 = {};
						tableObj0.title = "批示内容";
						tableObj0.content = data[i].otherInfo.instructContent;
						tableObj0.colspan = 5;
						tableInter.push(tableObj0);
						tableOuter.push(tableInter);
						
						var tableInter = [];
						var tableObj1 = {};
						tableObj1.title = "附件下载";
						tableObj1.content = "";
						for(var z = 0; z < data[i].otherInfo.filePaths.length; z++){
							var file = data[i].otherInfo.filePaths[z];
							tableObj1.content += "<a style='text-decoration:underline' href='../../"+ file +"' download=''>" 
							+ file.substring(file.lastIndexOf('/') + 1, file.length) + "</a>" + "&nbsp";
						} 
						
						tableObj1.colspan = 5;
						tableInter.push(tableObj1);
						tableOuter.push(tableInter);
        			break;
        			
        			case "15":
    					var tableInter = [];
						var tableObj0 = {};
						tableObj0.title = "备注内容";
						tableObj0.content = data[i].otherInfo.remarkContent;
						tableObj0.colspan = 5;
						tableInter.push(tableObj0);
						tableOuter.push(tableInter);
        			break;
        				
        			case "6":
        				for(var j=0;j<2;j++){
        					var tableInter = [];
        					if(j == 0){
    							var tableObj0 = {};
    							tableObj0.title = "续保理由";
    							tableObj0.content = data[i].otherInfo.postponeReason;
    							tableObj0.colspan = 5;
    							tableInter.push(tableObj0);
    							tableOuter.push(tableInter);
        					}
        					if(j == 1){
    							var tableObj0 = {};
    							var tableObj1 = {};
    							tableObj0.title = "经手人";
    							tableObj0.content = data[i].otherInfo.createruser;
    							tableObj0.colspan = 2;
    							tableInter.push(tableObj0);
    							tableObj1.title = "联系电话";
    							tableObj1.content = data[i].otherInfo.postPhone;
    							tableObj1.colspan = 2;
    							tableInter.push(tableObj1);
    							tableOuter.push(tableInter);
        					}
        					
        				};
        				break;
        				
        			case "5":
        				for(var j=0;j<1;j++){
        					var tableInter = [];
        					if(j == 0){
    							var tableObj0 = {};
    							tableObj0.title = "回退理由";
    							tableObj0.content = data[i].otherInfo.backReason;
    							tableObj0.colspan = 5;
    							tableInter.push(tableObj0);
    							tableOuter.push(tableInter);
        					}
        					
        					
        				};
        			break;
        			case "7":
        				for(var j=0;j<1;j++){
        					var tableInter = [];
        					if(j == 0){
    							var tableObj0 = {};
    							tableObj0.title = "审批意见";
    							tableObj0.content = data[i].otherInfo.examinationOpinion;
    							tableObj0.colspan = 5;
    							tableInter.push(tableObj0);
    							tableOuter.push(tableInter);
        					}
        					
        					
        				};
        			break; 
        			case "10":
        				var filePaths = data[i].otherInfo.filePaths;
        				var templength = 1;
        				if(filePaths.length > 0){
        				  templength = 2;
        				}
        				for(var j=0;j<templength;j++){
        					var tableInter = [];
        					if(templength == 1){
        						if(j == 0){
        							var tableObj0 = {};
        							tableObj0.title = "回复内容";
        							tableObj0.content = data[i].otherInfo.replyContent;
        							tableObj0.colspan = 5;
        							tableInter.push(tableObj0);
        							tableOuter.push(tableInter);
            					}	
        					}
        					if(templength == 2){
        						if(j == 0){
        							var tableObj0 = {};
        							tableObj0.title = "回复内容";
        							tableObj0.content = data[i].otherInfo.replyContent;
        							tableObj0.colspan = 5;
        							tableInter.push(tableObj0);
        							tableOuter.push(tableInter);
            					}	
        						if(j == 1){
        							var tableObj0 = {};
        							tableObj0.title = "附件下载";
        							tableObj0.content = "";
        							for(var z = 0; z < data[i].otherInfo.filePaths.length; z++){
        								var file = data[i].otherInfo.filePaths[z];
        								tableObj0.content += "<a style='text-decoration:underline' href='../../"+ file +"' download=''>" 
        								+ file.substring(file.lastIndexOf('/') + 1, file.length) + "</a>" + "&nbsp";
        							} 
        							
        							tableObj0.colspan = 5;
        							tableInter.push(tableObj0);
        							tableOuter.push(tableInter);
            					}
        					}	
        				};
        			break; 
        			}
        		}
        		arrayOuterObj.table = tableOuter;
        		arrayOuter.push(arrayOuterObj);
        	  }
        	   
        	new timeBar($('#processId'),arrayOuter);
          }
      }
    });
})