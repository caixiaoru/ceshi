$(function() {
//    组合报价tab切换
    $(".combination_tab>div").click(function () {

        $(this).addClass("combination_tab_active").siblings().removeClass("combination_tab_active");
        $('.combination_tab_content>div').eq($(this).index()).addClass('combination_tab_content_show').siblings().removeClass('combination_tab_content_show');
    })

    //if($(window).width())
    //console.log(2345676543);
    //console.log($(window).width());
    //if($(window).width()<767){
    //    console.log(66);
    //    $(".index_buy_content .fa-angle-right").attr("class","fa fa-arrow-down");
    //}

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



    //
    //$('body').on('click','table.two_table_one tr td:nth-of-type(6)',function(){
    //    var a=$(this).parent();
    //
    //    $('.two_table_two tr:last-child').after(a.clone());
    //    $(".two_table_two tr td:nth-of-type(6)").html("移除");
    //    $(".two_table_two tr td:nth-of-type(6)").attr("class","two_remove");
    //});
    //$('body').on('click','table.two_table_two tr td:nth-of-type(6)',function(){
    //    var b=$(this).parent();
    //    var b_fir= b.children(":first").html();
    //    var combination_tab=$(".combination_tab div");
    //    var combination_tab_le=combination_tab.length;
    //    var i_num;
    //     for(var i=0;i<combination_tab_le;i++){
    //        if(combination_tab[i].innerHTML ==b_fir){
    //            i_num=i;
    //            break;
    //        }
    //    }
    //    $(".two_table_one").eq(i_num).children(":last-child").after(b);
    //    $(".two_table_one tr td:nth-of-type(6)").html("添加");
    //    $(".two_table_one tr td:nth-of-type(6)").attr("class","two_add");
    //
    //});


    $('body').on('click','.combination_a tr td:nth-of-type(7)',function () {
        if ($(this).html() == "添加") {

            var a=$(this).parent();
            $(".two_table_two tr:last-child").after(a.clone());
            $(this).html("已选");
            $(".two_table_two tr td:nth-of-type(7)").html("移除");
           $(".two_table_two tr td:nth-of-type(7)").attr("class","two_remove");
        }
        else if($(this).html() == "移除"){
            //var b=$(this).parent();
            //var b_fir= b.children(":first").html();
            //$(this).parent().detach();
            //var combination_tab=$(".combination_tab div");
            //var combination_tab_le=combination_tab.length;
            //var i_num;
            // for(var i=0;i<combination_tab_le;i++){
            //    if(combination_tab[i].innerHTML ==b_fir){
            //        i_num=i;
            //        break;
            //    }
            //}
            //
            //$(".two_table_one").eq(i_num);

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

    })
    $(".two_white div").click(function(){
        $(".two_white").css("display","none");
    })
})