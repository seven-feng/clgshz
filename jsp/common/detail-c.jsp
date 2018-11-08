<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!-- 作废 -->
<div id="modal1" class="modal fade">
<div class="modal-dialog modal-content" style="margin-top: 15%; width: 300px;">
    <div class="modal-header modal-header-adjust">
        <button type="button" class="close" data-dismiss="modal" style="width: 14px; margin-top: 11px;"/>
        <span>作废</span>
    </div>
    <div class="modal-body" style="padding: 20px 0px 20px 50px;">
        <p style="font-size: 14px;">确定要废除吗？</p>
    </div>
    <div class="modal-footer" style="padding: 5px 10px 5px 0px; border: 1px solid #d6d6d6;">
        <button type="button" id="cancelBtn" class="btn btn-primary btn-sm">确定</button>
        <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">取消</button>
    </div>
</div>
</div><!-- modal1 -->

<!-- 打印-->
<div id="modal2" class="modal fade" data-backdrop="static">
<div class="modal-dialog modal-content" style="margin-top: 10%; width: 1200px;">
    <div class="modal-header modal-header-adjust">
        <button type="button" class="close" data-dismiss="modal" style="width: 14px; margin-top: 11px;"/>
        <span>打印</span>
    </div>
    <div class="modal-body" style="height: 500px; background: #f1f1f1; text-align: center;">
        <div id="print-body">
        <h3 style="text-align: center;">基层治理综合信息平台交办单</h3>
        <table id="print-table" class="print-table" style="border: 1px solid #000;">
            <tbody>
                <tr>
                    <td>交办人</td>
                    <td colspan="2"><span name="assignPerson"></span></td>
                    <td>联系电话</td>
                    <td colspan="2"><span name="assignPhone"></span></td>
                </tr>
                <tr>
                    <td>编号</td>
                    <td colspan="2"><span name="eventNo"></span></td>
                    <td>受理单位</td>
                    <td colspan="2"><span name="assignUnit"></span></td>
                </tr>
                <tr>
                    <td rowspan="4">事件情况</td>
                    <td>求助人</td>
                    <td><span name="appealPerson"></span></td>
                    <td>求助电话</td>
                    <td colspan="2"><span name="appealPhone"></span></td>
                </tr>
                <tr>
                    <td>住址</td>
                    <td colspan="4"><span name="address"></span></td>
                </tr>
                <tr>
                    <td>求助日期</td>
                    <td><span name="issueTime"></span></td>
                    <td>办理期限</td>
                    <td colspan="2"><span name="feedbackTime"></span></td>
                </tr>
                <tr>
                    <td>问题发生地</td>
                    <td colspan="2"><span name="occurPlace"></span></td>
                    <td>来源方式</td>
                    <td><span name="eventSourceWay"></span></td>
                </tr>
                <tr style="height: 80px;">
                    <td>求助内容</td>
                    <td colspan="5"><span name="issueContent"></span></td>
                </tr>
                <tr style="height: 50px;">
                    <td>交办意见</td>
                    <td colspan="5"><span name="assignContent"></span></td>
                </tr>
                <tr style="height: 50px;">
                    <td>承办单位领导意见</td>
                    <td colspan="5"><span name="departmentLeaderConmment"></span></td>
                </tr>
                <tr>
                    <td>承办单位（科室）</td>
                    <td><span name="hostUnit"></span></td>
                    <td>承办人</td>
                    <td><span name="hostPerson"></span></td>
                    <td>联系电话</td>
                    <td><span name="hostPhone"></span></td>
                </tr>
                <tr>
                    <td rowspan="3">办理结果</td>
                    <td colspan="5"><span name="handleResult"></span></td>
                </tr>
                <tr>
                    <td>办理结果意见</td>
                    <td colspan="4"><span name="resultOpinion"></span></td>
                </tr>
                <tr>
                    <td>签发领导</td>
                    <td><span name="signLeader"></span></td>
                    <td>办结时间</td>
                    <td colspan="2"><span name="endTime"></span></td>
                </tr>
                <tr>
                    <td>协办单位（科室）</td>
                    <td><span name="assistUnit"></span></td>
                    <td>协办人</td>
                    <td><span name="assistPerson"></span></td>
                    <td>联系电话</td>
                    <td><span name="assistPhone"></span></td>
                </tr>
                <tr>
                    <td style="height: 50px;">其他办理结果意见</td>
                    <td colspan="5"><span name="otherResult"></span></td>
                </tr>
                <tr>
                    <td style="height: 80px;">备注</td>
                    <td colspan="5"><span name="remarkContent"></span></td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
    <div class="modal-footer" style="padding: 5px 10px 5px 0px; border: 1px solid #d6d6d6; background: #f1f1f1;">
        <button type="button" id="printBtn" class="btn btn-primary btn-sm">打印</button>
        <button type="button" id="wordBtn" class="btn btn-primary btn-sm">导出word</button>
        <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">取消</button>
    </div>
</div>
</div><!-- modal2 -->

<!-- 修改评价  -->
<div id="modal3" class="modal fade">
<div class="modal-dialog modal-content" style="margin-top: 10%; width: 800px;">
    <div class="modal-header modal-header-adjust">
        <button type="button" class="close" data-dismiss="modal" style="width: 14px; margin-top: 11px;"/>
        <span>修改评价</span>
    </div>
    <div class="modal-body" style="height: 300px; background: #f1f1f1; text-align: center;">
        <form id="evaluate-form" method="post" enctype="multipart/form-data" >
        <table class="evaluate-table">
            <tbody>
                <tr>
                    <td class="right">评价</td>
                    <td colspan="5" class="left">
                        <input type="text" name="id" style="display: none;"/>
                        <input type="text" name="eventId" style="display: none;"/>
                        <textarea name="serviceOpinion" style="resize: none; width: 560px; height: 100px;"></textarea>
                    </td>
                    
                </tr>
                <tr>
                    <td class="right">工作态度意见</td>
                    <td colspan="5" class="left">
                        <input type="radio" name="personOpinion" value="满意" />满意
				        <input type="radio" name="personOpinion" value="基本满意" />基本满意
				        <input type="radio" name="personOpinion" value="不满意" />不满意
				        <input type="radio" name="personOpinion" value="其他" />其他
				        <input type="text" name="otherPersonOpinion" style="display: none;"/>
                    </td>
                </tr>
                <tr>
                    <td class="right">反馈人</td>
                    <td colspan="5" class="left"><input type="text" name="feedbackPerosn"/></td>
                </tr>
                <tr>
                    <td class="right">办理结果意见</td>
                    <td colspan="5" class="left">
                        <input type="radio" name="resultOpnion" value="满意" />满意
				        <input type="radio" name="resultOpnion" value="基本满意" />基本满意
				        <input type="radio" name="resultOpnion" value="不满意" />不满意
				        <input type="radio" name="resultOpnion" value="其他" />其他
				        <input type="text" name="otherResultOpinion" style="display: none;"/>
                    </td>
                </tr>
                <tr>
                    <td class="right">是否热点</td>
                    <td class="left">
                        <input type="radio" name="isHotSpot" value="0"/>是
                        <input type="radio" name="isHotSpot" value="1"/>否
                    </td>
                    <td class="right">进入样本库</td>
                    <td class="left">
                        <input type="radio" name="enterSampleLibrary" value="0"/>是
                        <input type="radio" name="enterSampleLibrary" value="1"/>否
                    </td>
                    <td class="right">外网公开</td>
                    <td class="left">
                        <input type="radio" name="openNetwork" value="0"/>是
                        <input type="radio" name="openNetwork" value="1"/>否 
                    </td>
                </tr>
                <tr>
                    <td class="right">是否排查</td>
                    <td class="left">
                        <input type="radio" name="isCheck" value="0"/>是
                        <input type="radio" name="isCheck" value="1"/>否
                    </td>
                    <td class="right">是否效能件</td>
                    <td class="left">
                        <input type="radio" name="isEffective" value="0"/>是
                        <input type="radio" name="isEffective" value="1"/>否
                    </td>
                    <td class="right">是否已回访</td>
                    <td class="left">
                        <input type="radio" name="isVisit" value="0"/>是
                        <input type="radio" name="isVisit" value="1"/>否
                    </td>
                </tr>
            </tbody>
        </table>
        </form>
    </div>
    <div class="modal-footer" style="padding: 5px 10px 5px 0px; border: 1px solid #d6d6d6; background: #f1f1f1;">
        <button type="button" id="evaluateBtn" class="btn btn-primary btn-sm">确定</button>
        <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">取消</button>
    </div>
</div>
</div><!-- modal3 -->
<!-- 相似事件 -->
<div id="simDetailModal" class="modal fade" style="overflow: hidden;" data-backdrop="static">
<div class="modal-dialog modal-content" style="margin-top: 5%; width: 1200px; overflow: hidden;">
    <div class="modal-header modal-header-adjust">
        <button id="simCancelFrame" type="button" class="close" data-dismiss="modal" style="width: 14px; margin-top: 11px;"/>
    </div>
    <div class="modal-body" style="padding: 0px; ">
        <iframe id="simDetailFrame" src="" frameborder=0 style="width: 1198px; height: 700px;"></iframe>
    </div>
</div>
</div>