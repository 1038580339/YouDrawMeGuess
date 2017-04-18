/**
 * Created by Eccentric on 2017/3/9.
 */
(function () {
    var body=document.body;
     console.log(window.screen.availHeight);
    body.style.backgroundSize='100%'+window.screen.height+'px';
    console.log(body.style.backgroundSize);
    var register=document.getElementById('register');
    register.onclick=function (e) {
      e.preventDefault();
        window.location.href='register.html';
    }
    var signIn=document.getElementById("signIn");
    var userName=document.getElementById("userName");
    var password=document.getElementById("password");

    signIn.onclick=function (e) {
        e.preventDefault();
        $.post('/signIn',getData(),function (data) {
            if(!data.returnCode){
                //跳转到游戏页面
                window.location.href='main.html';
               //存储用户信息
                sessionStorage.setItem('user',JSON.stringify(data.returnVal.results[0]));
            }
            else{
                alert(data.returnVal);
            }
        })
    }
    /**
     * 获取上传参数
     */

    function getData() {
        return {
            userName:userName.value,
            password:password.value
        }
    }

    /**
     * 判断是否已登录
     */
      var doCheck=sessionStorage.getItem('user');
      if(doCheck){
        window.location.href='main.html';
      }

})();
