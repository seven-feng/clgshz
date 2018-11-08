/**
 * File Name: crud.js
 * Copyright: Copyright 2013-2014 CETC52 CETITI All Rights Reserved.
 * Description: 
 * Author: Li Zhenghao
 * Create Date: 2017-6-10
 */
var crud = crud || {};

jQuery.fn.CrudSearchbar = function (config) {
    var searchbar = new crud.searchbar(this.selector, config);
    searchbar.init();
    return searchbar;
}

jQuery.fn.CrudToolbar = function (config) {
    var toolbar = new crud.toolbar(this.selector, config);
    toolbar.init();
    return toolbar;
}

jQuery.fn.CrudTable = function (config) {
    var table = new crud.table(this.selector, config);
    table.init();
    return table;
}

jQuery.fn.CrudPagination = function (config) {
    var pagination = new crud.pagination(this.selector, config);
    pagination.init();
    return pagination;
}

jQuery.fn.CrudModal = function (config) {
    var modal = new crud.modal(this.selector, config);
    modal.init();
    return modal;
}

jQuery.fn.CrudForm = function (config) {
    var form = new crud.form(this.selector, config);
    form.init();
    return form;
}

jQuery.fn.CrudTypeahead = function (config) {
    var typeahead = new crud.typeahead(this.selector, config);
    typeahead.init();
    return typeahead;
}

jQuery.fn.CrudAlerter = function (config) {
    var alerter = new crud.alerter(this.selector, config);
    alerter.init();
    return alerter;
}

jQuery.fn.CrudMap = function (config) {

}


!function () {
    /******************************************
     * common function
     ******************************************/
    /**
     * fill laytpl with data
     */
    function fillTpl(selector, data, template) {
        var tpl = document.getElementById(template).innerHTML;
        var html = laytpl(tpl).render(data);
        $(selector).html(html);
    }

    function fillSelect(selector, data) {
        for (var i in data) {
            var option = "<option value=" + data[i].code + ">" + data[i].name + "</option>"
            $(selector).append(option);
        }
    }

    function clearFields(selector, items) {
        for (var i = 0; i < items.length; i++) {
            switch (items[i].type) {
                case "text":
                    $(selector).find("[name='" + items[i].name + "']").html(items[i].defaultValue || "");
                    break;
                default:
                    $(selector).find("[name='" + items[i].name + "']").val(items[i].defaultValue || "");
                    break;
            }
        }
    }


    function getFields(selector, items) {
        var fields = {};
        for (var i = 0; i < items.length; i++) {
            switch (items[i].type) {
                case "select":
                    fields[items[i].name] = $(selector).find("[name='" + items[i].name + "'] option:selected").val();
                    break;
                case "datepicker":
                    fields[items[i].name] = $(selector).find("[name='" + items[i].name + "']").val() || "";
                    break;
                case "button":
                    break;
                default:
                    fields[items[i].name] = $(selector).find("[name='" + items[i].name + "']").val();
                    break;
            }
        }
        return fields;
    }

    function fillFields(selector, items, data) {
        for (var i = 0; i < items.length; i++) {
            switch (items[i].type) {
                case "datepicker":
                    $(selector).find("[name='" + items[i].name + "']").val(data[items[i].name] ? new Date(data[items[i].name]).format("yyyy-MM-dd") : "");
                    break;
                case "select":
                    $(selector).find("[name='" + items[i].name + "']").val(data[items[i].name] != undefined ? data[items[i].name] : "");
                    $(selector).find("[name='" + items[i].name + "']").trigger("change");
                    break;
                case "text":
                    $(selector).find("[name='" + items[i].name + "']").html(items[i].format ? items[i].format(data[items[i].name]) : data[items[i].name]);
                    break;
                default:
                    $(selector).find("[name='" + items[i].name + "']").val(data[items[i].name] != undefined ? data[items[i].name] : "");
                    break;
            }
        }
    }

    function fillDatas(selector, items, data) {
        for (var name in data) {
            $(selector).find("[name='" + name + "']").val(data[name] || "");
        }
    }
    /******************************************
     * searchbar
     ******************************************/
    crud.searchbar = function (selector, config) {
        this.selector = selector;
        this.items = config.items;
        this.search = config.search;
    };

    /*
     * searchbar init
     */
    crud.searchbar.prototype.init = function () {
        var searchbar = this;
        searchbar.render();
        searchbar.initDatepicker();//init datepciker and dateranger
        searchbar.initEvent();//init event
    }

    /*
     *searchbar render 
     */
    crud.searchbar.prototype.render = function () {
        var searchbar = this;
        fillTpl(searchbar.selector, searchbar, "searchbarTpl");
        searchbar.applyCSS();
    };

    /*
     * apply css
     */
    crud.searchbar.prototype.applyCSS = function () {
        var searchbar = this;
        for (var i = 0; i < searchbar.items.length; i++) {
            if (searchbar.items[i].style) {
                $(searchbar.selector).find("[name='" + searchbar.items[i].name + "']").css(searchbar.items[i].style);
            }

        }
    };

    /*
     * bind event
     */
    crud.searchbar.prototype.initEvent = function () {
        var searchbar = this;
        for (var i = 0; i < searchbar.items.length; i++) {
            for (var event in searchbar.items[i].events) {
                $(searchbar.selector).find("[name='" + searchbar.items[i].name + "']").bind(event, searchbar.items[i].events[event]);
            }
            $(searchbar.selector).find("[name='" + searchbar.items[i].name + "']").bind('keypress', function (e) {
                if (e.keyCode == "13") {
                    searchbar.search ? searchbar.search() : null;
                }
            });
        }
    };

    /*
     * init select
     */
    crud.searchbar.prototype.initSelect = function (data) {
        var searchbar = this;
        for (var i in data) {
            var selector = $(searchbar.selector).find("[name='" + data[i].name + "']").selector
            fillSelect(selector, data[i].options);
        }
    };

    /*
     * init datepicker
     */
    crud.searchbar.prototype.initDatepicker = function () {
        var searchbar = this;
        $(searchbar.selector).find(".datepicker").datepicker({
            dateFormat: 'yy-mm-dd',
            changeMonth: true,
            changeYear: true,
            timeFormat: 'hh:mm:ss',
            showSecond: true,
            yearRange: "c-100:c+100"
        });
        $(searchbar.selector).find(".datepicker").keydown(function (e) {
            e.keyCode == 8 ? $(e.target).val("") : e.preventDefault();
        });
    };

    /*
     *get query 
     */
    crud.searchbar.prototype.getFields = function () {
        var searchbar = this;
        return getFields(searchbar.selector, searchbar.items);
    };

    /******************************************
     * toolbar
     ******************************************/
    /*
     * constructor
     */
    crud.toolbar = function (selector, config) {
        this.selector = selector;
        this.items = config.items;
    };

    /*
     * toolbar init
     */
    crud.toolbar.prototype.init = function () {
        this.render();
        this.initEvent();
    }

    /*
     *toolbar render 
     */
    crud.toolbar.prototype.render = function () {
        var toolbar = this;
        fillTpl(toolbar.selector, toolbar, "toolbarTpl");
        toolbar.applyCSS();
    };

    /*
     * apply css
     */
    crud.toolbar.prototype.applyCSS = function () {
        var toolbar = this;
        for (var i = 0; i < toolbar.items.length; i++) {
            if (toolbar.items[i].style) {
                $(toolbar.selector).find("[name='" + toolbar.items[i].name + "']").css(toolbar.items[i].style);
            }
        }
    };

    /*
     * bind event
     */
    crud.toolbar.prototype.initEvent = function () {
        var toolbar = this;
        for (var i = 0; i < toolbar.items.length; i++) {
            for (var event in this.items[i].events) {
                $(toolbar.selector).find("[name='" + toolbar.items[i].name + "']").bind(event, toolbar.items[i].events[event]);
            }
        }
    };

    /******************************************
     * table
     ******************************************/
    crud.table = function (selector, config) {
        this.selector = selector;
        this.url = config.url;
        this.width = config.width;
        this.height = config.height;
        this.columns = config.columns || {};
        this.events = config.events || {};
        this.params = config.params || {};
    };

    /*
     * table init
     */
    crud.table.prototype.init = function () {
        var table = this;
        table.render();
    }

    /*
     * table render
     */
    crud.table.prototype.render = function () {
        var table = this;
        //$(table.selector).filter(".table-container").width(table.width || Math.max(screen.width - 220, 1218));
        $(table.selector).filter(".modal-table-container").width(table.width);
        //$(table.selector).height(table.height);

        if (table._table) {
            table._table.destroy();
        }
        $(table.selector).empty();
        $(table.selector).append("<table class='table dataTable no-footer'></table>");
        var tconfig = {
            ajax: function (data, callback, settings) {
                table.events.beforeLoad ? table.events.beforeLoad() : null;//beforeLoad
                $.ajax({
                    type: "post",
                    url: table.url,
                    data: table.params,
                    dataType: 'json',
                    success: function (res) {
                        if (res.retCode == 0 || res.code == 0) {
                            table.events.loadSuccessed ? table.events.loadSuccessed(res) : null;
                            var data = {
                                aaData: res.data.list || res.data,
                                iTotalDisplayRecords: res.data.pageSize,
                                iTotalRecords: res.data.total
                            }
                            callback(data);
                        }
                    },
                    error: function(){
                    }
                });
            },
            serverSide: true,
            deferLoading: 0,
            scrollCollapse: true,
            autoWidth: false,
            columns: table.getColumn(),
            createdRow: function (row, data, index) {
                $('td.table-index', row).html(index + 1);
                if(data.isSelect == '1'){
                	$('td.table-checkbox input', row).attr({"index": index,"checked":true});
                }else if(data.isSelect == '0'){
                	$('td.table-checkbox input', row).attr({"index": index,"checked":false});
                }else{
                	$('td.table-checkbox input', row).attr({"index": index});
                }
                
                for (var i in table.operations) {
                    var oper = null;
                    switch (table.operations[i].type) {
                        case "button":
                            oper = $("<a class='" + (table.operations[i].className ? table.operations[i].className : "") + "' title='" + (table.operations[i].title ? table.operations[i].title : "") + "' ></a>");
                            break;
                        case "buttonPlus":
                            oper = $("<a class='" + (table.operations[i].className ? table.operations[i].className : "") + "' title='" + (table.operations[i].title ? table.operations[i].title : "") + "' >" + table.operations[i].title + "</a>");
                            break;
                        default:
                            oper = $("<a class='" + table.operations[i].className + "'></a>");
                            break;
                    }
                    (function (i, index) {
                        for (var event in table.operations[i].events) {
                            oper.bind(event, function () {
                                var d = table._table.data()[index];
                                table.operations[i].events[event](d);
                            });
                        }
                        $('td.table-operation', row).append(oper);
                    })(i, index);
                }
            },
            paging: false,
            searching: false,
            ordering: false,
            lengthChange: false,
            language: {
                lengthMenu: "",
                emptyTable: "未找到相关数据",
                zeroRecords: "未找到相关数据",
                info: "",
                infoEmpty: "",
                loadingRecords: "正在加载中",
                paginate: { sPrevious: "", sNext: "" },
                infoFiltered: ""
            }
        };
        table._table = $(table.selector).find("table").DataTable(tconfig);
        table._table.on('draw.dt', function () {
            $("td.dataTables_empty").attr("colspan", "99");
        });
        
    }

    /*
     * setParams
     */
    crud.table.prototype.setParams = function (params) {
        var table = this;
        table.params = params;
    }
    /*
     * changePages
     */
    crud.table.prototype.changePages = function (pageParams) {
        var table = this;
        for (var i in pageParams) {
            if (Object.prototype.hasOwnProperty.call(pageParams, i)) {
                table.params[i] = pageParams[i];
            }
        }
    }

    /*
     * table reload
     */
    crud.table.prototype.reload = function () {
        var table = this;
        table._table.ajax.reload();
    }

    /*
     * table clear
     */
    crud.table.prototype.clear = function () {
        var table = this;
        table._table.clear();
    }

    /*
     * get column
     */
    crud.table.prototype.getColumn = function () {
        var table = this;
        var columns = [];
        for (var i in table.columns) {
            var column = table.columns[i];
            switch (column.type) {
                case 'index':
                    columns.push({ width: column.width ? column.width : "50px", className: "text-center table-index", defaultContent: "" });
                    break;
                case 'checkbox':
                    columns.push({
                        width: column.width ? column.width : "50px",
                        className: "text-center table-checkbox",
                        title: column.id ? ("<input id='" + column.id + "' type='checkbox'/>") : "选择",
                        render: function (data, type, full, meta) {
                            return "<input type='checkbox' />";
                        }
                    });
                    break;
                case 'operation':
                    this.operations = column.operations;
                    columns.push({ title: column.title ? column.title : "操作", data: null, width: column.width, className: "text-center table-operation", defaultContent: "" });
                    break;
                case 'column':
                    columns.push($.extend({ title: column.title, data: column.name, width: column.width ? column.width : "120px", className: column.className ? column.className : "text-center text-collapse", defaultContent: "", render: column.render }, column.extend));
                    break;
                case 'columnPlus':
                    columns.push($.extend({ title: column.title, data: column.name, width: column.width ? column.width : "120px", className: column.className ? column.className : "text-center text-collapse", defaultContent: column.defaultContent ? column.defaultContent : "", render: column.render }, column.extend));
                    break;
                case 'columnHide':
                    columns.push($.extend({ title: column.title, data: column.name, width: column.width ? column.width : "120px", className: column.className ? column.className : "text-center text-collapse columnHide", defaultContent: "", render: column.render }, column.extend));
                    break;
                default:
                    columns.push($.extend({ title: column.title, data: column.name, width: column.width ? column.width : "120px", className: column.className ? column.className : "text-center text-collapse", defaultContent: "", render: column.render }, column.extend));
                    break;
            }
        }
        columns.push({ data: null, defaultContent: "", width: "auto" });
        return columns;
    }

    /*
     * table clear checkbox
     */
    crud.table.prototype.clearCheckbox = function () {
        var table = this;
        $(table.selector).find("input[type='checkbox']").prop("checked", false);
    }

    /*
     * table clear checkall
     */
    crud.table.prototype.checkAll = function () {
        var table = this;
        $(table.selector).find("input[type='checkbox']").prop("checked", true);
    }

    /*
     * table get checkbox
     */
    crud.table.prototype.getCheckbox = function () {
        var table = this;
        var data = $(table.selector).find("input[type='checkbox']:checked").map(function (index, elem) {
            return table._table.data()[$(elem).attr("index")];
        }).get();
        return data;
    }
    crud.table.prototype.makeRadio = function () {
        var table = this;
        $(table.selector).off('click', 'tbody input[type="checkbox"]').on('click', 'tbody input[type="checkbox"]', function (e) {
            if ($(this).prop('checked')) {
                $(table.selector).find("input[type='checkbox']").prop('checked', false);
                $(this).prop('checked', true);
            }
        });
    }

    /******************************************
     * pagination
     ******************************************/
    crud.pagination = function (selector, config) {
        this.selector = selector;
        this.events = config.events || {};
        this.pageSize = config.pageSize ? config.pageSize : 10;
        this.pageNum = 1;
        this.total = 0;
        this.totalCount = 0;
        this.language = $.extend({
            pageUp: "上一页",
            pageDown: "下一页"
        }, config.language);
    }

    /*
     * pagination init
     */
    crud.pagination.prototype.init = function () {
        var pagination = this;
        pagination.render();
    }

    /*
     * pagination render
     */
    crud.pagination.prototype.render = function () {
        var pagination = this;
        fillTpl(pagination.selector, pagination, "paginationTpl");
        pagination.initEvent();
    }

    /*
     * pagination init event
     */
    crud.pagination.prototype.initEvent = function () {
        var pagination = this;
        $(pagination.selector).find(".pageUp").bind("click", function () {
            pagination.previousPage();
        });
        $(pagination.selector).find(".pageDown").bind("click", function () {
            pagination.nextPage();
        });
        $(pagination.selector).find(".gotoPage").bind('keypress', function (e) {
            if (e.keyCode == "13") {
                pagination.turnPage($(e.target).val());
            }
        });
    }

    /*
     * show page
     */
    crud.pagination.prototype.showPage = function (pageNum, total, totalCount) {
        var pagination = this;
        if (pageNum > total) {
            pageNum = total;
        }
        if (pageNum < 1) {
            pageNum = 1;
        }
        pagination.pageNum = pageNum;
        pagination.total = total;
        pagination.totalCount = totalCount;
        var eq = 0;
        var ul_html = $(pagination.selector).find("ul");
        ul_html.empty();
        if (total <= 5) {
            ul_html.append("<span style='float:left'>&nbsp&nbsp&nbsp</span>");
            for (var i = 1; i <= total; i++) {
                var li = $("<li>" + i + "</li>");
                (function () {
                    var index = i;
                    li.bind("click", function () {
                        pagination.turnPage(index);
                    });
                })();
                ul_html.append(li);
            }
            ul_html.append("<span style='float:left'>&nbsp&nbsp&nbsp</span>");
            eq = pageNum - 1;
        }
        else {
            if (pageNum <= 3) {
                ul_html.append("<span style='float:left'>&nbsp&nbsp&nbsp</span>");
                for (var i = 1; i <= 5; i++) {
                    var li = $("<li>" + i + "</li>");
                    (function () {
                        var index = i;
                        li.bind("click", function () {
                            pagination.turnPage(index);
                        });
                    })();
                    ul_html.append(li);
                }
                ul_html.append("<span style='float:left'>&nbsp...</span>");
                eq = pageNum - 1;
            }
            else if (total - pageNum <= 2) {
                ul_html.append("<span style='float:left'>&nbsp...</span>");
                for (var i = total - 4; i <= total; i++) {
                    var li = $("<li>" + i + "</li>");
                    (function () {
                        var index = i;
                        li.bind("click", function () {
                            pagination.turnPage(index);
                        });
                    })();
                    ul_html.append(li);
                }
                ul_html.append("<span style='float:left'>&nbsp&nbsp&nbsp</span>");
                eq = pageNum - total + 4;
            }
            else {
                ul_html.append("<span style='float:left'>&nbsp...</span>");
                for (var i = pageNum - 2; i <= pageNum + 2; i++) {
                    var li = $("<li>" + i + "</li>");
                    (function () {
                        var index = i;
                        li.bind("click", function () {
                            pagination.turnPage(index);
                        });
                    })();
                    ul_html.append(li);
                }
                ul_html.append("<span style='float:left'>&nbsp...</span>");
                eq = 2;
            }
        }
        $(pagination.selector).find("ul li").eq(eq).addClass("on");
        $(pagination.selector).find("[name='pageNum']").html(pagination.pageNum);
        $(pagination.selector).find("[name='total']").html(pagination.total);
        $(pagination.selector).find("[name='pageSize']").html(pagination.pageSize);
        $(pagination.selector).find("[name='totalCount']").html(pagination.totalCount);
    }

    /*
     * previous page
     */
    crud.pagination.prototype.previousPage = function () {
        var pagination = this;
        if (pagination.pageNum > 1) {
            pagination.pageNum--;
            pagination.showPage(pagination.pageNum, pagination.total, pagination.totalCount);
            pagination.events.shown ? pagination.events.shown(pagination.pageNum) : null;
        }
    }

    /*
     * next page
     */
    crud.pagination.prototype.nextPage = function () {
        var pagination = this;
        if (pagination.pageNum < pagination.total) {
            pagination.pageNum++;
            pagination.showPage(pagination.pageNum, pagination.total,pagination.totalCount);
            pagination.events.shown ? pagination.events.shown(pagination.pageNum) : null;
        }
    }

    /*
     * turn page
     */
    crud.pagination.prototype.turnPage = function (index) {
        var pagination = this;
        if (index <= pagination.total && index > 0) {
            pagination.pageNum = index;
            pagination.showPage(pagination.pageNum, pagination.total,pagination.totalCount);
            pagination.events.shown ? pagination.events.shown(pagination.pageNum) : null;
        }
    }

    /*
     * set pageNum
     */
    crud.pagination.prototype.setPageNum = function (pageNum) {
        this.pageNum = pageNum;
    }

    /*
     * get pageInfo
     */
    crud.pagination.prototype.getPageInfo = function () {
        return {
            pageSize: this.pageSize,
            pageNum: this.pageNum,
        };
    }

    /******************************************
     * Modal
     ******************************************/
    crud.modal = function (selector, config) {
        this.selector = selector;
        this.title = config.title;
        this.size = config.size;
        this.items = config.items;
        this.buttons = config.buttons;
        this.events = config.events || {};
        this.style = config.style;
    };

    /*
     * modal init
     */
    crud.modal.prototype.init = function () {
        var modal = this;
        modal.render();
        modal.initEvent();
    }

    /*
     *modal render 
     */
    crud.modal.prototype.render = function () {
        var modal = this;
        fillTpl(modal.selector, modal, "modalTpl");
    };

    /*
     * bind event
     */
    crud.modal.prototype.initEvent = function () {
        var modal = this;
        for (var event in modal.events) {
            $(modal.selector).on(event, modal.events[event]);
        }
        for (var i = 0; i < modal.buttons.length; i++) {
            for (var event in modal.buttons[i].events) {
                $(modal.selector).find("[name='" + modal.buttons[i].name + "']").bind(event, modal.buttons[i].events[event]);
            }
        }
    };

    /*
     * apply css
     */
    crud.modal.prototype.applyCSS = function () {
        var modal = this;
        for (var i = 0; i < modal.items.length; i++) {
            if (modal.items[i].style) {
                $(modal.selector).find("[name='" + modal.items[i].name + "']").css(modal.items[i].style);
            }
        }
    };

    /*
     * modal open
     */
    crud.modal.prototype.open = function () {
        var modal = this;
        $(modal.selector).modal("show");
    }

    /*
     * modal close
     */
    crud.modal.prototype.close = function () {
        var modal = this;
        $(modal.selector).modal("hide");
    }


    /******************************************
     * Form
     ******************************************/
    crud.form = function (selector, config) {
        this.selector = selector;
        this.items = config.items;
        this.url = config.url;
        this.events = config.events || {};
        this.position = $.extend({}, config.position);
    };

    /*
     * form init
     */
    crud.form.prototype.init = function () {
        var form = this;
        form.render();
        form.initEvent();
        form.initDatepicker();
        form.initTypeahead();
        form.initValidator();
    }

    /*
     *form render 
     */
    crud.form.prototype.render = function () {
        var form = this;
        fillTpl(form.selector, form, "formTpl");
        form.applyCSS();
    };

    /*
     * apply css
     */
    crud.form.prototype.applyCSS = function () {
        var form = this;
        if (form.position && form.position.label) {
            $(form.selector).find("label").css(form.position.label);
        }
        for (var i = 0; i < form.items.length; i++) {
            if (form.items[i].style) {
                $(form.selector).find("[name='" + form.items[i].name + "']").css(form.items[i].style);
            }
        }
    };

    /*
     * form clear
     */
    crud.form.prototype.clear = function () {
        var form = this;
        form._validator ? form._validator.resetForm() : null;
        $(form.selector).find(".error").removeClass("error");
        clearFields(form.selector, form.items);
    }

    /*
     * bind event
     */
    crud.form.prototype.initEvent = function () {
        var form = this;
        for (var i = 0; i < form.items.length; i++) {
            for (var event in form.items[i].events) {
                $(form.selector).find("[name='" + form.items[i].name + "']").bind(event, form.items[i].events[event]);
            }
        }
    };

    /*
     * init select
     */
    crud.form.prototype.initSelect = function (data) {
        var form = this;
        for (var i in data) {
            var selector = $(form.selector).find("[name='" + data[i].name + "']").selector
            fillSelect(selector, data[i].options);
        }
    };

    /*
     * init datepicker
     */
    crud.form.prototype.initDatepicker = function () {
        var form = this;
        $(form.selector).find(".datepicker").datepicker({
            dateFormat: 'yy-mm-dd',
            changeMonth: true,
            changeYear: true,
            timeFormat: 'hh:mm:ss',
            showSecond: true,
            yearRange: "c-100:c+100"
        });
        $(form.selector).find(".datepicker").keydown(function (e) {
            e.keyCode == 8 ? $(e.target).val("") : e.preventDefault();
        });
    };

    /*
     * init typeahead
     */
    crud.form.prototype.initTypeahead = function () {
        var form = this;
        for (var i in form.items) {
            if (form.items[i].type == "typeahead") {
                $(form.selector).find("[name='" + this.items[i].name + "']").CrudTypeahead(
                    form.items[i].typeahead
                );
                /*form.items[i].typeahead.container = "#"+this.id+" [name='"+this.items[i].name+"']";
                var typeahead = new crud.typeahead(this.items[i].typeahead);
                typeahead.init();*/
            }
        }
    }

    /*
     * init validator
     */
    crud.form.prototype.initValidator = function () {
        var form = this;
        if(form.selector == '#addWorkorder-form' || form.selector == '#editWorkorder-form' || form.selector == 'predoing-form' || form.selector == '#addEvent-form' || form.selector == '#editEvent-form'){
        	
        }else{
        	var rules = {};
            var messages = {};
            for (var i in form.items) {
                form.items[i].rule ? rules[form.items[i].name] = form.items[i].rule : null;
                form.items[i].message ? messages[form.items[i].name] = form.items[i].message : null;
            }
            form._validator = $(form.selector).validate({
                rules: rules,
                messages: messages
            });
        }
        
    }

    /*
     *get fields
     */
    crud.form.prototype.getFields = function () {
        var form = this;
        return getFields(form.selector, form.items);
    };

    /*
     *fill fields
     */
    crud.form.prototype.fillFields = function (data) {
        var form = this;
        fillFields(form.selector, form.items, data);
    };

    /*
     *fill fields
     */
    crud.form.prototype.fillDatas = function (data) {
        var form = this;
        fillDatas(form.selector, form.items, data);
    };

    /*
     *form submit
     */
    crud.form.prototype.submit = function () {
        var form = this;
        if ($(form.selector).valid()) {
            var fields = form.getFields();
            form.events.beforeSubmit ? form.events.beforeSubmit(fields) : null;
            $.ajax({
                type: "post",
                url: form.url,
                data: fields,
                dataType: 'json',
                success: function (res) {
                    if (res.retCode == 0) {
                        form.events.submitSuccessed ? form.events.submitSuccessed() : null;
                    }
                }
            });
        }else{
        	$("#username-error").css("marginLeft","73px");
        	$("#phone-error").css("marginLeft","107px");
        	$("#oriPasword-error").css("marginLeft","73px");
        	$("#newPassword-error").css("marginLeft","73px");
        	$("#againNew-error").css("marginLeft","73px");
        }
    };
    
    
    crud.form.prototype.submitAddEvent = function (formId) {
        var form = this;               
        if ($("#"+formId).valid()) {
            var fields = $("#"+formId).serialize();
            form.events.beforeSubmit ? form.events.beforeSubmit(fields) : null;
            $.ajax({
                type: "post",
                url: form.url,
                data: fields,
                dataType: 'json',
                success: function (res) {
                    if (res.retCode == 0) {
                        form.events.submitSuccessed ? form.events.submitSuccessed() : null;
                    }
                }
            });
        }
    };

    /*
     *form submit file
     */
    crud.form.prototype.submitFileAddEvent = function (formId) {
        var form = this;
        if ($("#"+formId).valid()) {
            //var fields = form.getFields();
            form.events.beforeSubmit ? form.events.beforeSubmit(fields) : null;
            $("#"+formId).ajaxSubmit({
                type: "post",
                url: form.url,
                //data: fields,
                dataType: 'json',
                success: function (res) {
                    var code = res.retCode;
                    if (code == 0) {
                        form.events.submitSuccessed ? form.events.submitSuccessed() : null;
                    }
                }
            });
            
        }
    };
    
    /*
     *form submit file
     */
    crud.form.prototype.submitFile = function () {
        var form = this;
        if ($(form.selector).valid()) {
            var fields = form.getFields();
            form.events.beforeSubmit ? form.events.beforeSubmit(fields) : null;
        	$(form.selector).ajaxSubmit({
                type: "post",
                url: form.url,
                //data: fields,
                dataType: 'json',
                success: function (res) {
                	var code = res.retCode;
                    if (code == 0) {
                        form.events.submitSuccessed ? form.events.submitSuccessed() : null;
                    }
                }
            });
            
        }
    };
//    function ajaxFileUpload(form,url,sucFunc){
//    	$("#"+form).ajaxSubmit({
//            type:'post',
//            url:url,
//            success:sucFunc,
//            error:function(XmlHttpRequest,textStatus,errorThrown){
//                console.log(XmlHttpRequest);
//                console.log(textStatus);
//                console.log(errorThrown);
//            }
//        });
//    }
    
    /*
     *form submit file
     */
//    crud.form.prototype.submitFile = function () {
//        var form = this;
//        if ($(form.selector).valid()) {
//            var fields = form.getFields();
//            form.events.beforeSubmit ? form.events.beforeSubmit(fields) : null;
//            $.ajax({
//                type: "post",
//                url: form.url,
//                data: fields,
//                dataType: 'json',
//                success: function (res) {
//                    if (res.retCode == 0) {
//                        form.events.submitSuccessed ? form.events.submitSuccessed() : null;
//                    }
//                }
//            });
//        }
//    };

    /******************************************
     * Alerter
     ******************************************/
    crud.alerter = function (selector) {
        this.selector = selector;
    }

    crud.alerter.prototype.init = function () {
        var alerter = this;
        alerter.render();
    }

    crud.alerter.prototype.render = function () {
        var alerter = this;
        fillTpl(alerter.selector, alerter, "alerterTpl");
    };

    crud.alerter.prototype.alert = function (msg, event) {
        var alerter = this;
        if (event) {
        	$(alerter.selector).find("[name='confirm']").css("display", "inline-block");
            $(alerter.selector).find("[name='confirm']").bind("click", event);
        }
        else {
            alerter.event = alerter.close;
            $(alerter.selector).find("[name='confirm']").css("display", "none");
            //$(alerter.selector).find("[name='cancel']").bind("click", function (e) { alerter.close(); });
        }
        $(alerter.selector).find("[name='info']").text(msg);
        $(alerter.selector).modal("show");
    };

    crud.alerter.prototype.close = function () {
        var alerter = this;
        $(alerter.selector).modal("hide");
    };

    /******************************************
     * typeahead
     ******************************************/
    crud.typeahead = function (selector, config) {
        this.selector = selector;
        this.url = config.url;
        this.updater = config.updater;
        this.querier = config.querier;
        this.format = config.format;
        this.afterSelect = config.afterSelect;
        this.items = {};
        this.itemSize = config.itemSize || 10;
    }

    crud.typeahead.prototype.init = function () {
        var typeahead = this;
        $(typeahead.selector).typeahead({
            source: function (query, process) {
                query = query.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
                var params = typeahead.querier ? typeahead.querier(query) : { query: query };
                $.post(typeahead.url, params, function (res) {
                    if (res.retCode === 0) {
                        var array = [];
                        if (res.data.length == 0) {
                            return process(array);
                        }
                        else {
                            $.each(res.data, function (index, ele) {
                                var item = typeahead.format ? typeahead.format(ele) : ele.name;
                                typeahead.items[item] = ele;
                                array.push(item);
                            });
                            return process(array);
                        }
                    }
                });
            },
            items: typeahead.itemSize,
            updater: function (item) {
                var ele = typeahead.items[item];
                typeahead.updater ? typeahead.updater(ele) : null;
                return item;
            },
            highlighter: function (item) {
                var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
                return "<div class='typeahead-item'>" + item.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
                    return '<strong>' + match + '</strong>'
                }) + "</div>";
            },
            afterSelect: function (item) {
                var ele = typeahead.items[item];
                typeahead.afterSelect ? typeahead.afterSelect(ele) : null;
            },
            fitToElement: true,
            delay: 500,
            hint: true,
            highlight: true,
        });
    }

}();