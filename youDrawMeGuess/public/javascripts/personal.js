/**
 * Created by Eccentric on 2017/3/11.
 */
(function () {
    console.log('personal.js')
    var user=JSON.parse(sessionStorage.getItem('user'));


    function init() {
        /**
         * 对user信息进行赋值
          */
        $('#userName').text(user.userName);
        $('#userId').text(user.userId);
        $('#grade').text(user.grade);
        $('#remark').text(user.remark);
        $('#sex').text(user.sex);
        getIframeHeight();
    }
    function getIframeHeight() {
        console.log(window.screen.availHeight);

        $('iframe').attr('height',window.screen.availHeight-60);
    }
    init();

    $('#change').click(function () {
        window.location.href='changeUser.html';
    })
})();