/**
 * Created by Eccentric on 2017/3/28.
 */
/**
 * Created by Eccentric on 2016/11/10.
 */
(function () {
  var order,strokeStyle='black',lineWidth='2',onplay,time;
    $('body').css('height',window.screen.height);
    var message=document.getElementById('message');
    var num=window.location.search.split('?')[1];
    // console.log(num);
    var socket = io(location.origin);
  //初始化时判断在线人数
  socket.emit('getTwoNumF'+num,{
    num:'+'
  });
  socket.on('getTwoNumF'+num,function(data){
    console.log(data);
    count=data.count;
    if(!data.order){

    }
    else{
      clearTimeout(time);
    }
     if(!order){
       order=data.count;
       if(order=='1'){
         $('#wCanvas').css('display','block');
         $('#sendAnswerContent').css('display','none');
       }
       else{
         $('#gCanvas').css('display','block');
         $('#selectColor').css('display','none');
       }
     }else{
        if(!data.order){

        }else{
          $("#countDown").stop(true, true);
          $('#countDown').css('width','0');
          jiHeAlert.open('有玩家退出');
          var p=document.createElement('p');
            p.innerText='有玩家退出游戏';
            p.className='overTime';
            message.appendChild(p);
            message.scrollTop = message.scrollHeight;
          onplay='';
          $('#kownAnswer').css('display','none');
            $('#notKown').css('display','none');
          if(order>data.order){
            order--;
            console.log(order);
          }
          if(order=='1'){
            $('#wCanvas').css('display','block');
            $('#sendAnswerContent').css('display','none');
            $('#gCanvas').css('display','none');
            $('#selectColor').css('display','block');
          }
          else{
            $('#wCanvas').css('display','none');
            $('#sendAnswerContent').css('display','block');
            $('#gCanvas').css('display','block');
            $('#selectColor').css('display','none');
          }
        }
     }
    if(parseInt(order)>8){
      alert('人数超过八人');
      window.location.href='../Tworoom.html';
    }
    doChange();
  })
    var wcanvas=document.getElementById("wCanvas");
   wcanvas.width=window.screen.width;
    wcanvas.height='200';
    var wctx=wcanvas.getContext("2d");
    var gcanvas=document.getElementById("gCanvas");
    gcanvas.width=window.screen.width;
    gcanvas.height='200';
    var gctx=gcanvas.getContext("2d");
    wcanvas.addEventListener("mousedown",function (e) {
        console.log(e.which);
        wctx.moveTo(e.offsetX,e.offsetY);
        socket.emit("chatF"+num, {
            moveX: e.offsetX,
            moveY: e.offsetY
        });
        wcanvas.addEventListener("mousemove",t);
        function t(e) {
            wctx.beginPath();
            wctx.lineTo(e.offsetX, e.offsetY);
            socket.emit("chatF"+num, {
                lineX: e.offsetX,
                lineY: e.offsetY
            });
            // wctx.strokeStyle = "white";
            wctx.stroke();
            wctx.closePath();

        }

        wcanvas.addEventListener("mouseup",function (e) {
            wcanvas.removeEventListener('mousemove',t);
        })

    });
  var ctxlineToX,ctxlineToY;
    wcanvas.addEventListener("touchstart",function (e) {
        wctx.moveTo(e.touches[0].pageX,e.touches[0].pageY);
        // alert(e.touches[0].pageX,e.touches[0].pageY);
        socket.emit("chatF"+num, {
            moveX: e.touches[0].pageX,
            moveY:e.touches[0].pageY
        });
        ctxlineToX=e.touches[0].pageX;
        ctxlineToY=e.touches[0].pageY;
        wcanvas.addEventListener("touchmove",t);
    });
    // wcanvas.addEventListener("touchmove",t);

    function t(e) {
        e.preventDefault();
        wctx.beginPath();
        if(ctxlineToX!=""&&ctxlineToY!=""){
        wctx.moveTo(ctxlineToX,ctxlineToY);
      }
        wctx.lineTo(e.touches[0].pageX, e.touches[0].pageY);
        socket.emit("chatF"+num, {
            lineX: e.touches[0].pageX,
            lineY: e.touches[0].pageY
        });
        wctx.strokeStyle = strokeStyle;
        wctx.lineWidth=lineWidth;
        wctx.stroke();
        wctx.closePath();
        ctxlineToX=e.touches[0].pageX;
        ctxlineToY=e.touches[0].pageY;
    }

    wcanvas.addEventListener("touchend",function (e) {
        wcanvas.removeEventListener('touchmove',t);
    });
         var gtxlineToX='',gtxlineToY='';
    socket.on("chatF"+num, function (data) {
      // console.log(data);
       if(typeof(data)!='string'){
         gctx.beginPath();
         if(gtxlineToX==''&&gtxlineToY==''){
        gctx.moveTo(data.moveX,data.moveY);
      }else{
        gctx.moveTo(gtxlineToX,gtxlineToY);
      }
        gctx.strokeStyle=strokeStyle;
        gctx.lineTo(data.lineX,data.lineY);
        if(strokeStyle=='rgb(255, 255, 255)'){
          gctx.lineWidth='20';
        }else{
            gctx.lineWidth='2';
        }
        gctx.stroke();
        gctx.closePath();
        gtxlineToX=data.lineX;
        gtxlineToY=data.lineY;
      }else{
        alert(data);
      }

    });

    $('#sendMessage').click(function(){
      var content=$('#input').val();
      if(!content){
        alert('不能发送空消息');
      }else{
        socket.emit('chatMessageF'+num,{
          user:JSON.parse(sessionStorage.getItem('user')).userName,
          message:content
        });
        $('#input').val('');
      }
    });
//聊天室
    socket.on('chatMessageF'+num,function(data){
      console.log(data);
      var p1=document.createElement('p');
      var p2=document.createElement('p');
      p1.innerText=data.user+':';
      p1.style.marginLeft='9px';
      p2.innerText=data.message;
      p2.className='pmessage'
      message.appendChild(p1);
      message.appendChild(p2);
      message.scrollTop = message.scrollHeight;
    })
    //检测用户是否退出页面
    window.onbeforeunload = function()
{
  socket.emit('getTwoNumF'+num,{
    num:'-',
    order:order
  });
}
window.addEventListener("popstate", function(e) {
alert("我监听到了浏览器的返回按钮事件啦");//根据自己的需求实现自己的功能
}, false);


   $('#selectColor ul li').click(function(){
     console.log('选择颜色');
      // strokeStyle=$(this).css('background-color');
      // console.log($(this).css('background-color'));
      // if($(this).css('background-color')=='rgb(255, 255, 255)'){
      //   lineWidth='20';
      // }else{
      //   lineWidth='2';
      // }
      socket.emit('changeColorF'+num,{
        color:$(this).css('background-color')
      })
   });

    socket.on('changeColorF'+num,function(data){
      strokeStyle=data.color;
      console.log(data.color);
      if(data.color=='rgb(255, 255, 255)'){
        lineWidth='20';
      }else{
        lineWidth='2';
      }
    });
  //点击开始游戏
  $('#startPlay').click(function(){
    console.log(1);
    if(count>='2'){
    if(!onplay){
      socket.emit('getTitleF'+num,{
        do:'start'
      });
    }else{
      jiHeAlert.open('已开始游戏');
    }
  }else{
    jiHeAlert.open('人数未到');
  }
  });
  //开始游戏或者结束游戏后更换游戏位置
  socket.on('getTitleF'+num,function(data){
    wctx.clearRect(0,0,360,200);
    gctx.clearRect(0,0,360,200);
    if(data.sc=='2'){
      clearTimeout(time);
      $("#countDown").stop(true, true);
      $('#countDown').css('width','0');
      onplay='';
      if(order=='1'){
        order=count;
        //为当前此玩家加积分
        var data=JSON.parse(sessionStorage.getItem('user'));
        data.grade=parseInt(data.grade)+3;
        sessionStorage.setItem('user',JSON.stringify(data));
        $.ajax({
          url: '/changeGrade',
          type: 'post',
          data: data,
          success:function(data){
           jiHeAlert.open('积分+3，游戏结束');
           socket.emit('chatMessageF'+num,{
             user:JSON.parse(sessionStorage.getItem('user')).userName,
             message:'我获得了积分+3；'
           });
          }
        });
      }
      else{
        if(data.order==order){
          order--;
          jiHeAlert.open('积分+5，游戏结束');
          socket.emit('chatMessageF'+num,{
            user:JSON.parse(sessionStorage.getItem('user')).userName,
            message:'我获得了积分+5；'
          });

        }
        else{
          order--;
          jiHeAlert.open('游戏结束,交换身份');
        }
      }

      if(order=='1'){
        $('#wCanvas').css('display','block');
        $('#sendAnswerContent').css('display','none');
        $('#gCanvas').css('display','none');
        $('#selectColor').css('display','block');
        $('#kownAnswer').css('display','none');
        $('#notKown').css('display','none');
      }
      else{
        $('#wCanvas').css('display','none');
        $('#sendAnswerContent').css('display','block');
        $('#gCanvas').css('display','block');
        $('#selectColor').css('display','none');
        $('#kownAnswer').css('display','none');
        $('#notKown').css('display','none');
      }
    }
    else if(data.sc=='3'){
      onplay='';
      if(order=='1'){
        order=count;
      }
      else{
        order--;
      }
      if(order=='1'){
        $('#wCanvas').css('display','block');
        $('#sendAnswerContent').css('display','none');
        $('#gCanvas').css('display','none');
        $('#selectColor').css('display','block');
        $('#kownAnswer').css('display','none');
        $('#notKown').css('display','none');
      }
      else{
        $('#wCanvas').css('display','none');
        $('#sendAnswerContent').css('display','block');
        $('#gCanvas').css('display','block');
        $('#selectColor').css('display','none');
        $('#kownAnswer').css('display','none');
        $('#notKown').css('display','none');
      }
      jiHeAlert.open('超时');
      var p=document.createElement('p');
        p.innerText='超时,进入下一轮';
        p.className='overTime';
        message.appendChild(p);
        message.scrollTop = message.scrollHeight;
    }
    else{
      onplay=data.title;
      console.log(order);
      if(order=='1'){
        jiHeAlert.open(data.title);
        $('#kownAnswer').css('display','block');
        $('#kownAnswerContent').text(data.title);
        time=setTimeout(function(){
          socket.emit('getTitleF'+num,{
            do:'timeout'
          });
        },60000)
        $('#countDown').animate({'width':'100%'}, 60000,function(){
          $('#countDown').css('width','0');
        });
      }
      else{
      $('#notKown').css('display','block');
        jiHeAlert.open('房主已开始游戏');
        console.log('计时1');
        // $('#countDown').css('width','0');
        $('#countDown').animate({'width':'100%'}, 60000,function(){
          $('#countDown').css('width','0');
        });
      }

    }
    doChange();
  })
     //输入答案
     $('#sendAnswer').click(function(){
       var answer=$('#inputAnswer').val();
       if(answer==''){
         jiHeAlert.open('请输入');
       }else{
         if(answer==onplay){
          //为本人加分，游戏结束,画图方加分在socket联系到后
          $('#inputAnswer').val('');
           var data=JSON.parse(sessionStorage.getItem('user'));
           data.grade=parseInt(data.grade)+5;
          console.log(data);
           sessionStorage.setItem('user',JSON.stringify(data));
           $.ajax({
             url: '/changeGrade',
             type: 'post',
             data: data,
             success:function(data){
              // jiHeAlert.open('答对了');
             }
           });
           socket.emit('getTitleF'+num,{
             do:'end',
             order:order
           });
           $("#countDown").stop(true, true);
           $('#countDown').css('width','0');
         }
         else{
           jiHeAlert.open('答案不对呀，再想想！');
         }
       }
     });


     //显示人数，身份
     function doChange(){
       $('#onlineNum').text(count);
       console.log(order);
      if(order=='1'){
        $('#myName').text('绘图者');
      }else{
        $('#myName').text('猜题者');
      }
     }





})();
