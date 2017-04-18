/**
 * Created by Eccentric on 2017/3/9.
 */
(function () {
    var body=document.body;
    body.style.backgroundSize='100%'+window.screen.availHeight+'px';
   var register=document.getElementById('register');
    var userId=document.getElementById('userId');
    var userName=document.getElementById('userName');
    var sex=document.getElementById('sex');
    var password=document.getElementById('password');
    //console.log(register);
    register.onclick=function (e) {
        e.preventDefault();
        console.log(getData());
        if(userId.value&&userName.value&&sex.value&&password.value) {
            $.post('/register', getData(), function (data) {
                if (!data.returnCode) {
                    alert(data.returnVal);
                    window.location.href = 'index.html';
                }
                else {
                    alert(data.returnVal);
                }


            }, 'json');
        }
        else{
            alert('请将信息填写完整');
        }
    }
    /**
     * 获取数据
     */
   function getData() {
        var data={
            userId:userId.value,
            userName: userName.value,
            sex:sex.value,
            password:password.value
        }
        return data;
   }
})();