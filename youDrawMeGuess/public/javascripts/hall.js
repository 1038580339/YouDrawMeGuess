/**
 * Created by Eccentric on 2017/3/28.
 */
(function () {
   var socket=io(location.origin);
    var input=document.getElementById('message');
    var send=document.getElementById('send');
    var content=document.getElementById('content');
    send.addEventListener('click',function (e) {
        e.preventDefault();
        var userName=JSON.parse(sessionStorage.getItem('user')).userName;
        if(input.value){
            socket.emit('message',{
                user: userName,
                message:input.value
            })
        } else{
            jiHeAlert.open('消息不能为空');
        }
        input.value='';
    });

     socket.on('message',function (data) {
         console.log(data);
         var p1=document.createElement('p');
         var p2=document.createElement('p');
         p1.innerText=data.user+':';
         p1.style.marginLeft='9px';
         p2.innerText=data.message;
       p2.className='pmessage'
         content.appendChild(p1);
         content.appendChild(p2);
         content.scrollTop = content.scrollHeight;
     })

})()