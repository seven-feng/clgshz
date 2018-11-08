<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<div>
    <div class="title-one">图片</div>
    <div style="background: #f1f1f1;">
        <div style="margin-left: 15px;">处理前</div>
        <div style="padding: 5px 15px;">
        <div id="pre-carousel" class="carousel slide" data-ride="carousel">
          <!-- Indicators -->
          <ol id="preIndicators" class="carousel-indicators"></ol>
        
          <!-- Wrapper for slides -->
          <div id="preInner" class="carousel-inner"></div>
        
          <!-- Controls -->
          <a class="left carousel-control" href="#pre-carousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#pre-carousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        </div>
        <div style="margin-left: 15px;">处理后</div>
        <div style="padding: 5px 15px;">
        <div id="post-carousel" class="carousel slide" data-ride="carousel">
          <!-- Indicators -->
          <ol id="postIndicators" class="carousel-indicators"></ol>
        
          <!-- Wrapper for slides -->
          <div id="postInner" class="carousel-inner"></div>
        
          <!-- Controls -->
          <a class="left carousel-control" href="#post-carousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#post-carousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        </div>
    </div>
</div>
<div style="margin-top: 15px;">
    <div class="title-one">附件</div>
    <div style="background: #f1f1f1; height: 50px; padding: 10px;">
        <a id="batchDownload" style="vertical-align: -webkit-baseline-middle;">批量下载</a>
    </div>
</div>