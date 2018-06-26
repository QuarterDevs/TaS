$('img').click(function(){  
        $('img').attr('src','php/getVerify.php?'+Math.random());//刷新验证码  
    })  
    $('#login').click(function(){  
        var username=$('#user-name').val();  
        var password=$("#user-password").val();  
        var code=$("#code").val();  
        if(username!=""&&password!=""&&code.length==4){  
            $.ajax({  
                type:"POST",  
                url:"php/userLogin.php",  
                dataType:"JSON",  
                data:{  
                    "user_name":username,  
                    "password":password,  
                    "code":code  
                },  
                success:function(data){  
                    switch(data){  
                        case 1://普通用户  
                            $.cookie("user",username);  
                            $.cookie("limit",0);  
                            window.location.href="index.php";  
                            break;  
                        case 2://管理员用户  
                            $.cookie("user",username);  
                            $.cookie("limit",1);  
                            window.location.href="index.php";  
                            break;  
                        case 3://密码错误  
                            alert("密码错误！");  
                            break;  
                        case 4://用户不存在  
                            alert("该用户不存在！");  
                            break;  
                        case 0://验证码错误  
                            alert("验证码不正确！");  
                            break;  
                    }  
                      
                }  
            })  
        }else{  
            alert("请检查您的输入！");  
        }  
    })  
    $('#sign').click(function(){  
        var username=$('#user-name').val();  
        var password=$("#user-password").val();  
        var code=$("#code").val();  
        if(username!=""&&password!=""&&code.length==4){  
            $.ajax({  
                type:"POST",  
                url:"php/addUser.php",  
                dataType:"JSON",  
                data:{  
                    "user_name":username,  
                    "password":password,  
                    "code":code  
                },  
                success:function(data){  
                    switch(data){  
                        case 1://用户已存在  
                            alert("该用户已存在！请换一个用户名注册。")  
                            break;  
                        case 2://注册成功  
                            alert("注册成功！");  
                            $.cookie("user",username);  
                            $.cookie("limit",0);  
                            window.location.href="index.php";  
                            break;  
                        case 0://验证码错误  
                            alert("验证码不正确！");  
                            break;  
                    }  
                      
                }  
            })  
        }else{  
            alert("请检查您的输入！");  
        }  
    })  
