/**
 * Created by Eccentric on 2017/3/11.
 */
(function () {
    var user=JSON.parse(sessionStorage.getItem('user'));

    /**
     * 设置初始参数
     */
     function setData() {
         $('#userName').val(user.userName);
        $('#sex').val(user.sex);
        $('#password').val(user.password);
        $('#remark').val(user.remark);
     }


    function init() {
        setData();
    }

    /**
     * 获取上传参数
     */
    function getData() {
        return  {
            userId:user.userId,
            userName: $('#userName').val(),
            password: $('#password').val(),
            remark:$('#remark').val(),
            grade:user.grade,
            sex:$('#sex').val()
        }
    }

    $('#button').on('click',function (e) {
        e.preventDefault();
        $.post('/changeUser',getData(),function (data) {
            if(!data.returnCode){
                alert(data.returnVal.message);
                sessionStorage.setItem('user',JSON.stringify(data.returnVal.user));
                window.location.href='personal.html';
            }
        })
    })

    init();


})();