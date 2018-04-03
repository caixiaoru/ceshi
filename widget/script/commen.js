$(function() {

// 组合报价tab切换

$('body').on('click','.combination_tab>div',function () {
    //    组合报价tab切换  
         
        $(this).addClass("combination_tab_active").siblings().removeClass("combination_tab_active");
        $('.combination_tab_content>div').eq($(this).index()).addClass('combination_tab_content_show').siblings().removeClass('combination_tab_content_show');
    
})


    

//    后台删除遮罩层
    $(".bg_list_delete").click(function () {
        console.log("qwertresa");
        $(".bg_list_delete_div").css("display", "block");

    });
    $(".bg_list_delete_btn_one").click(function () {
        $(".bg_list_delete_div").css("display", "none");
    });
    $(".bg_list_delete_btn_two").click(function () {
        $(".bg_list_delete_div").css("display", "none");
    })

//    后台查询未果遮罩层
    $(".bg_list_search_btn_one").click(function () {
        $(".bg_list_search_div").css("display", "none");
    })
//编辑
    $(".bg_add_editcomp_ok").click(function () {
        console.log("sfresvfd");
        $(".bg_list_editcomp_div").css("display", "block");
    })
    $(".bg_list_editcomp_btn_one").click(function () {
        $(".bg_list_editcomp_div").css("display", "none");
    })
    $(".bg_list_editcomp_btn_two").click(function () {
        $(".bg_list_editcomp_div").css("display", "none");
    })

//    购买流程
    var div_width = $(".index_buy_content>div>div").width();
    $(".index_buy_content>div>div").css("height", div_width);



    $('body').on('click','.combination_a tr td:nth-of-type(7)',function () {
        var t_num=$("#good_1");
        var t_money=$("#good_2");
        if ($(this).html() == "添加") {

            //个数
            t_num.val(parseInt(t_num.val()) + 1); //点击加号输入框数值加1
            //金额
            //t_money
           var list_money=$(this).prev().text();
            var list_money_content=parseInt(list_money);

            t_money.val(parseInt(t_money.val()) + list_money_content);


            var a=$(this).parent();
            $(".two_table_two tr:last-child").after(a.clone());
            $(this).html("已选");
            $(".two_table_two tr td:nth-of-type(7)").html("移除");
           $(".two_table_two tr td:nth-of-type(7)").attr("class","two_remove");
        }
        else if($(this).html() == "移除"){
            //个数
            t_num.val(parseInt(t_num.val()) -1); //点击加号输入框数值jian1

            //金额
            var list_money2=$(this).prev().text();
            var list_money_content2=parseInt(list_money2);
            t_money.val(parseInt(t_money.val()) - list_money_content2);


            var b=$(this).parent();
            var b_first= b.children(":first").html();
            $(this).parent().detach();
            console.log(b_first);

            console.log($(".two_table_one").children().children().children(":first-child"));
            var c=$(".two_table_one").children().children().children(":first-child");
            var c_len= c.length
            console.log(c_len);
            for(var i=0;i< c_len;i++){
                //console.log(c[i].innerHTML);
               if(c[i].innerHTML ==b_first ){
                   console.log(5555);
                   console.log($(c[i]).parent());
                   console.log($(c[i]).parent().children(":last-child").text());
                   //$(c[i]).parent().eq(7).html("添加");
                   //console.log( $(c[i]).parent().eq(4).html());
                   $(c[i]).parent().children(":last-child").html("添加");
               }
            }






        }
        else{
            console.log("else");
        }
    })



    //var a=$(".combination_tab_active").attr("id");
    //console.log(a);   //value_1
    //var b=a.substr(a.length-1,1);看见
    //console.log(b);   // 1

    $(".combination_finished_info_btn").click(function(){

        var zz=$(".two_table_two tr").length;

        if(zz<2){
            $(".two_white").css("display","block");
        }
        else{
            $(window).attr('location','three.html');
        }

    });
    $(".two_white div").click(function(){
        $(".two_white").css("display","none");
    });


    //var select2=$(".video_select_content select option:selected").val();
    //console.log(select2);
    //$(".video_select_btn_one").click(function(){
    //    var bf=$(".bg_add_c tr").find("td:eq(1)").html();
    //    if(bf == select)
    //})

})