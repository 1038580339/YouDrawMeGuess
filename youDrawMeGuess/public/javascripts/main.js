/**
 * Created by Eccentric on 2017/3/10.
 */
(function () {
   function init() {
       //设置隐藏下拉框
       var width=$('#userHide').css('width').split('p')[0];
       var screenWidth=document.body.clientWidth;
       var marginLeft=screenWidth-width;
       $('#userHide').css('margin-left',marginLeft);
       //下拉框用户匹配积分
       $('#userName').text(getUser().userName);
       $('#userId').text(getUser().userId);
       $('#grade').text(getUser().grade);
       //下拉框用户中心点击跳转
       $('#goCenter').click(function () {
           $('#userHide').slideToggle('slow');
           $('iframe').attr('src','personal.html');
       })

   }
    setInterval(function(){
      $('#userName').text(getUser().userName);
      $('#userId').text(getUser().userId);
      $('#grade').text(getUser().grade);
    },500)

    /**
     * 控制隐藏元素显示与隐藏
     */
    console.log($('#menuHide').css('width'));
     $('#icon').click(function() {
        $('#userHide').slideToggle('slow');
    }
     );
    $('#menu').click(function () {
        if($('#menuHide').css('width')=='0px') {
            $('#menuHide').css('display','block');
            $('#menuHide').animate({'width': '60px'});
        }
        else{
            $('#menuHide').animate({'width': '0'},function () {
                $('#menuHide').css('display','none');
            });
        }
    })
    /**
     * 获取用户信息
     */

    function getUser() {
        return JSON.parse(sessionStorage.getItem('user'));
    }

    /**
     * 侧边菜单栏导航处理
     */
    $('#personal').click(function () {
      $('iframe').attr('src','personal.html');
        $('#menuHide').animate({'width': '0'},function () {
            $('#menuHide').css('display','none');
        });
    });
    $('#two').click(function () {
        $('iframe').attr('src','Tworoom.html');
        $('#menuHide').animate({'width': '0'},function () {
            $('#menuHide').css('display','none');
        });
    });

    $('#five').click(function () {
        $('iframe').attr('src','Fiveroom.html');
        $('#menuHide').animate({'width': '0'},function () {
            $('#menuHide').css('display','none');
        });
    });
    $('#hero').click(function () {
        $('iframe').attr('src','ranking.html');
        $('#menuHide').animate({'width': '0'},function () {
            $('#menuHide').css('display','none');
        });
    });
    $('#hall').click(function () {
        $('iframe').attr('src','hall.html');
        $('#menuHide').animate({'width': '0'},function () {
            $('#menuHide').css('display','none');
        });
    });

    /**
     * 初始化判断iframe高度
     */
    function getIframeHeight() {
        console.log(window.screen.availHeight);

        $('iframe').attr('height',window.screen.availHeight-60);
    }
    getIframeHeight()
    init();

    /**
     * 判断是否已登录;
     */
    setInterval(function() {
      var doCheck=sessionStorage.getItem('user');
      if(!doCheck){
        window.location.href='index.html';
      };
    },1000)

})();
