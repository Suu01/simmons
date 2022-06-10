$(document).ready(function(){
    $("#tbl_alist > .btabname").click(function(){
        $(".btapMain").slideUp(300);

        if ($(this).next().css("display")=="block"){//내가 선택한 a의 p가 보이면,
            $(this).next().slideUp(300);//탭의 클래스 해제, P숨기기
        }else{
            $(this).next().slideDown(300);//탭의 클래스 적용, p보이기
        }
    });
});