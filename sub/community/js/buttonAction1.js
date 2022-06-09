<<<<<<< HEAD
window.onload = function(){
    const afaq=document.getElementById("faqBtn");
    const aqna=document.getElementById("qnaBtn");
    const atel=document.getElementById("telBtn");
    const aasp=document.getElementById("aspBtn");
    const anotice=document.getElementById("noticeBtn");

    afaq.onclick=function(){
        document.getElementById("faq").style.display="block";
        document.getElementById("qna").style.display="none";
        document.getElementById("telph").style.display="none";
        document.getElementById("asp").style.display="none";
        document.getElementById("notice").style.display="none";
    }

    aqna.onclick=function(){
        document.getElementById("faq").style.display="none";
        document.getElementById("qna").style.display="block";
        document.getElementById("telph").style.display="none";
        document.getElementById("asp").style.display="none";
        document.getElementById("notice").style.display="none";
    }

    atel.onclick=function(){
        document.getElementById("faq").style.display="none";
        document.getElementById("qna").style.display="none";
        document.getElementById("telph").style.display="block";
        document.getElementById("asp").style.display="none";
        document.getElementById("notice").style.display="none";
    }
    
    aasp.onclick=function(){
        document.getElementById("faq").style.display="none";
        document.getElementById("qna").style.display="none";
        document.getElementById("telph").style.display="none";
        document.getElementById("asp").style.display="block";
        document.getElementById("notice").style.display="none";
    }

    anotice.onclick=function(){
        document.getElementById("faq").style.display="none";
        document.getElementById("qna").style.display="none";
        document.getElementById("telph").style.display="none";
        document.getElementById("asp").style.display="none";
        document.getElementById("notice").style.display="block";
    }
=======
window.onload = function(){
    const afaq=document.getElementById("faqBtn");
    const aqna=document.getElementById("qnaBtn");
    const atel=document.getElementById("telBtn");
    const aasp=document.getElementById("aspBtn");
    const anotice=document.getElementById("noticeBtn");

    afaq.onclick=function(){

        window.scrollTo(0,0);
        document.getElementById("faq").style.display="block";
        document.getElementById("qna").style.display="none";
        document.getElementById("telph").style.display="none";
        document.getElementById("asp").style.display="none";
        document.getElementById("notice").style.display="none";

        afaq.setAttribute("class","mouseon");
        aqna.removeAttribute("class");
        atel.removeAttribute("class");
        aasp.removeAttribute("class");
        anotice.removeAttribute("class");
    }

    aqna.onclick=function(){

        window.scrollTo(0,0);
        document.getElementById("faq").style.display="none";
        document.getElementById("qna").style.display="block";
        document.getElementById("telph").style.display="none";
        document.getElementById("asp").style.display="none";
        document.getElementById("notice").style.display="none";

        afaq.removeAttribute("class");
        aqna.setAttribute("class","mouseon");
        atel.removeAttribute("class");
        aasp.removeAttribute("class");
        anotice.removeAttribute("class");
    }

    atel.onclick=function(){

        window.scrollTo(0,0);
        document.getElementById("faq").style.display="none";
        document.getElementById("qna").style.display="none";
        document.getElementById("telph").style.display="block";
        document.getElementById("asp").style.display="none";
        document.getElementById("notice").style.display="none";

        afaq.removeAttribute("class");
        aqna.removeAttribute("class");
        atel.setAttribute("class","mouseon");
        aasp.removeAttribute("class");
        anotice.removeAttribute("class");
    }
    
    aasp.onclick=function(){

        window.scrollTo(0,0);
        document.getElementById("faq").style.display="none";
        document.getElementById("qna").style.display="none";
        document.getElementById("telph").style.display="none";
        document.getElementById("asp").style.display="block";
        document.getElementById("notice").style.display="none";

        afaq.removeAttribute("class");
        aqna.removeAttribute("class");
        atel.removeAttribute("class");
        aasp.setAttribute("class","mouseon");
        anotice.removeAttribute("class");
    }

    anotice.onclick=function(){

        window.scrollTo(0,0);
        document.getElementById("faq").style.display="none";
        document.getElementById("qna").style.display="none";
        document.getElementById("telph").style.display="none";
        document.getElementById("asp").style.display="none";
        document.getElementById("notice").style.display="block";

        afaq.removeAttribute("class");
        aqna.removeAttribute("class");
        atel.removeAttribute("class");
        aasp.removeAttribute("class");
        anotice.setAttribute("class","mouseon");
    }
>>>>>>> d692542b33df4058e5b883d161f27ea06206fe9f
}