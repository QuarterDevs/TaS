

   var css = {left:'1%'};  
    setInterval(function(){  
        $('.arrow').animate(css,900,rowBack);  
    },900);  
    function rowBack(){  
        if(css.left==='1%')  
            css.left='1.5%';  
        else if(css.left==='1.5%')  
            css.left='1%';  
    }  


	$(document).ready(	function(){
   	$('.word-position').fadeTo(3000,1);  
});


	$(document).ready(	function(){
   $('.arrow').click(function(){$('.ui-dialog').fadeTo(1000,1);});
});


	$(document).ready(	function(){
   $('.ui-dialog-closebutton').click(function(){$('.ui-dialog').fadeTo(1000,0);});
});


	$(document).ready(	function(){
   $('.ui-register-dialog-closebutton').click(function(){$('.ui-register-dialog').fadeTo(1000,0);});
});


	$(document).ready(	function(){
   $("#register").click(function(){
   	$('.ui-register-dialog').toggle();
    $('.ui-dialog').fadeTo(500,0);  });
});



function validate_required(field,alerttxt)
{
with (field)
  {
  if (value==null||value=="") 
    {alert(alerttxt); window.history.back(-1);  return false}
  else {return true}
  }
}

function validate_form(thisform)
{
with (thisform) 
  {
  if (validate_required(user,"用户名不能为空")==false)
    {user.focus(); return false}
   if (validate_required(pwd,"请输入密码")==false)
    {pwd.focus(); return false}
  
  }
}
function validate_form2(thisform)
{
with (thisform)
  {
    if (validate_required(new_user,"用户名不能为空")==false)
    {new_user.focus();return false}
   if (validate_required(new_password,"请输入密码")==false)
    {new_password.focus();return false}
    if (validate_required(check_password,"请输入确认密码")==false)
    {check_password.focus();return false}
    isSame();
  
  }

}

function isSame(){
	 var pwd1 = document.getElementById("new_password").value;
     var pwd2 = document.getElementById("check_password").value;
<!-- 对比两次输入的密码 -->
     if (pwd1 != pwd2) {
       alert("新密码和确认新密码不一致，请重新输入！");
        return;
}
}

function validate() {
              var pwd1 = document.getElementById("new_password").value;
              var pwd2 = document.getElementById("check_password").value;
		<!-- 对比两次输入的密码 -->
           if (pwd1 != pwd2) {
             alert("新密码和确认新密码不一致，请重新输入！");
             return;
}
          }
