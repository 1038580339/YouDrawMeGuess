/**
 * Created by Eccentric on 2017/3/28.
 */
function removeObjectFromArray(obj, arr) {
    var index = arr.indexOf(obj);
    if (index != -1) {
        arr.splice(index, 1);
    }
}

var json=[
  {title:'安全帽'},
  {title:'北斗星'},
  {title:'包子'},
  {title:'北京'},
  {title:'解放军'},
  {title:'经纬度'},
  {title:'折叠床'},
  {title:'牙签'},
  {title:'运动鞋'},
  {title:'运动会'},
  {title:'天鹅'},
  {title:'西红柿'},
  {title:'乌鸦喝水'},
  {title:'网球'},
  {title:'烧麦'},
  {title:'七夕'},
  {title:'旅行箱'},
  {title:'帽子'},
  {title:'面巾纸'},
  {title:'扑克'},
  {title:'公安局'},
  {title:'斗牛'},
  {title:'热狗'},
  {title:'三长两短'},
  {title:'对牛弹琴'},
  {title:'亡羊补牢'},
  {title:'打草惊蛇'},
  {title:'狗急跳墙'},
  {title:'如鱼得水'},
  {title:'热狗'},
  {title:'画饼充饥'},
  {title:'泪流满面'},
  {title:'一手遮天'},
  {title:'哇哈哈'},
  {title:'二郎神'},
  {title:'孙悟空'},
  {title:'支付宝'},
  {title:'马云'},
  {title:'马化腾'},
  {title:'爸爸'}
]
var count2=0,count1=0,count3=0,count4=0,count5=0;
var countF1=0,countF2=0,countF3=0,countF4=0,countF5=0;
var title1,title2,title3,title4,title5;
var titleF1,titleF2,titleF3,titleF4,titleF5;
class SocketConnection {

    constructor(socket) {

        this._socket = socket;

        SocketConnection.allConnections.push(this);
   /**
    * 五人间
    * @param  {[type]} data [description]
    * @return {[type]}      [description]
    */
   //画图笔画记录
    socket.on("chatF1", function (data) {
      SocketConnection.allConnections.forEach(sc=> {
          sc.socket.emit("chatF1", data);
    });
    });
    socket.on("chatF2", function (data) {
      SocketConnection.allConnections.forEach(sc=> {
          sc.socket.emit("chatF2", data);
    });
    });
    socket.on("chatF3", function (data) {
      SocketConnection.allConnections.forEach(sc=> {
          sc.socket.emit("chatF3", data);
    });
    });
    socket.on("chatF4", function (data) {
      SocketConnection.allConnections.forEach(sc=> {
          sc.socket.emit("chatF4", data);
    });
    });
    socket.on("chatF5", function (data) {
      SocketConnection.allConnections.forEach(sc=> {
          sc.socket.emit("chatF5", data);
    });
    });
    //人数计算
    socket.on('getTwoNumF1',function (data){
        if(data.num=='+'){
          countF1=countF1+1;
        }else{
          countF1=countF1-1;
        }
        if(undefined==typeof(data.order)){
          SocketConnection.allConnections.forEach(sc=> {
              sc.socket.emit("getTwoNumF1",{count:countF1});
        });
        }else{
          SocketConnection.allConnections.forEach(sc=> {
              sc.socket.emit("getTwoNumF1",{count:countF1,order:data.order});
        });
        }
  });
  socket.on('getTwoNumF2',function (data){
      if(data.num=='+'){
        countF2=countF2+1;
      }else{
        countF2=countF2-1;
      }
      if(undefined==typeof(data.order)){
        SocketConnection.allConnections.forEach(sc=> {
            sc.socket.emit("getTwoNumF2",{count:countF2});
      });
      }else{
        SocketConnection.allConnections.forEach(sc=> {
            sc.socket.emit("getTwoNumF2",{count:countF2,order:data.order});
      });
      }
});
  socket.on('getTwoNumF3',function (data){
    if(data.num=='+'){
      countF3=countF3+1;
    }else{
      countF3=countF3-1;
    }
    if(undefined==typeof(data.order)){
      SocketConnection.allConnections.forEach(sc=> {
          sc.socket.emit("getTwoNumF3",{count:countF3});
    });
    }else{
      SocketConnection.allConnections.forEach(sc=> {
          sc.socket.emit("getTwoNumF3",{count:countF3,order:data.order});
    });
    }
});
socket.on('getTwoNumF4',function (data){
    if(data.num=='+'){
      countF4=countF4+1;
    }else{
      countF4=countF4-1;
    }
    if(undefined==typeof(data.order)){
      SocketConnection.allConnections.forEach(sc=> {
          sc.socket.emit("getTwoNumF4",{count:countF4});
    });
    }else{
      SocketConnection.allConnections.forEach(sc=> {
          sc.socket.emit("getTwoNumF4",{count:countF4,order:data.order});
    });
    }
});
socket.on('getTwoNumF5',function (data){
    if(data.num=='+'){
      countF5=countF5+1;
    }else{
      countF5=countF5-1;
    }
    if(undefined==typeof(data.order)){
      SocketConnection.allConnections.forEach(sc=> {
          sc.socket.emit("getTwoNumF5",{count:countF5});
    });
    }else{
      SocketConnection.allConnections.forEach(sc=> {
          sc.socket.emit("getTwoNumF5",{count:countF5,order:data.order});
    });
    }
});
  //房内对话
  socket.on('chatMessageF1',function(data){
    SocketConnection.allConnections.forEach(sc=> {
        sc.socket.emit("chatMessageF1", data);
  });
});
socket.on('chatMessageF2',function(data){
  SocketConnection.allConnections.forEach(sc=> {
      sc.socket.emit("chatMessageF2", data);
});
});
socket.on('chatMessageF3',function(data){
  SocketConnection.allConnections.forEach(sc=> {
      sc.socket.emit("chatMessageF3", data);
});
});
socket.on('chatMessageF4',function(data){
  SocketConnection.allConnections.forEach(sc=> {
      sc.socket.emit("chatMessageF4", data);
});
});
socket.on('chatMessageF5',function(data){
  SocketConnection.allConnections.forEach(sc=> {
      sc.socket.emit("chatMessageF5", data);
});
});
//五人间修改颜色
socket.on('changeColorF1',function(data){
  SocketConnection.allConnections.forEach(sc=> {
      sc.socket.emit("changeColorF1", data);
  });
});
socket.on('changeColorF2',function(data){
  SocketConnection.allConnections.forEach(sc=> {
      sc.socket.emit("changeColorF2", data);
  });
});
socket.on('changeColorF3',function(data){
  SocketConnection.allConnections.forEach(sc=> {
      sc.socket.emit("changeColorF3", data);
  });
});
socket.on('changeColorF4',function(data){
  SocketConnection.allConnections.forEach(sc=> {
      sc.socket.emit("changeColorF4", data);
  });
});
socket.on('changeColorF5',function(data){
  SocketConnection.allConnections.forEach(sc=> {
      sc.socket.emit("changeColorF5", data);
  });
});

  //获取题目，判断离线，结束
  socket.on('getTitleF1',function(data){
    if(data.do=='start'){
    var num=Math.floor(Math.random()*40);
     titleF1=json[num].title;
    SocketConnection.allConnections.forEach(sc=> {
        sc.socket.emit("getTitleF1", {sc:1,title:titleF1});
    });
  }else if(data.do=='end'){
    SocketConnection.allConnections.forEach(sc=> {
        sc.socket.emit("getTitleF1", {sc:2,order:data.order});
    });
  } else if(data.do=='timeout'){
    SocketConnection.allConnections.forEach(sc=> {
        sc.socket.emit("getTitleF1", {sc:3,title:'时间到'});
    });
  }
  });
  socket.on('getTitleF2',function(data){
    if(data.do=='start'){
    var num=Math.floor(Math.random()*40);
     titleF2=json[num].title;
    SocketConnection.allConnections.forEach(sc=> {
        sc.socket.emit("getTitleF2", {sc:1,title:titleF2});
    });
  }else if(data.do=='end'){
    SocketConnection.allConnections.forEach(sc=> {
        sc.socket.emit("getTitleF2", {sc:2,order:data.order});
    });
  } else if(data.do=='timeout'){
    SocketConnection.allConnections.forEach(sc=> {
        sc.socket.emit("getTitleF2", {sc:3,title:'时间到'});
    });
  }
  });
  socket.on('getTitleF3',function(data){
    if(data.do=='start'){
    var num=Math.floor(Math.random()*40);
     titleF3=json[num].title;
    SocketConnection.allConnections.forEach(sc=> {
        sc.socket.emit("getTitleF3", {sc:1,title:titleF3});
    });
  }else if(data.do=='end'){
    SocketConnection.allConnections.forEach(sc=> {
        sc.socket.emit("getTitleF3", {sc:2,order:data.order});
    });
  } else if(data.do=='timeout'){
    SocketConnection.allConnections.forEach(sc=> {
        sc.socket.emit("getTitleF3", {sc:3,title:'时间到'});
    });
  }
  });
  socket.on('getTitleF4',function(data){
    if(data.do=='start'){
    var num=Math.floor(Math.random()*40);
     titleF4=json[num].title;
    SocketConnection.allConnections.forEach(sc=> {
        sc.socket.emit("getTitleF4", {sc:1,title:titleF4});
    });
  }else if(data.do=='end'){
    SocketConnection.allConnections.forEach(sc=> {
        sc.socket.emit("getTitleF4", {sc:2,order:data.order});
    });
  } else if(data.do=='timeout'){
    SocketConnection.allConnections.forEach(sc=> {
        sc.socket.emit("getTitleF4", {sc:3,title:'时间到'});
    });
  }
  });
  socket.on('getTitleF5',function(data){
    if(data.do=='start'){
    var num=Math.floor(Math.random()*40);
     titleF5=json[num].title;
    SocketConnection.allConnections.forEach(sc=> {
        sc.socket.emit("getTitleF5", {sc:1,title:titleF5});
    });
  }else if(data.do=='end'){
    SocketConnection.allConnections.forEach(sc=> {
        sc.socket.emit("getTitleF5", {sc:2,order:data.order});
    });
  } else if(data.do=='timeout'){
    SocketConnection.allConnections.forEach(sc=> {
        sc.socket.emit("getTitleF5", {sc:3,title:'时间到'});
    });
  }
  });

   /**
    * 二人间
    * @param  {[type]} data [description]
    * @return {[type]}      [description]
    */
        socket.on("chat1", function (data) {
          SocketConnection.allConnections.forEach(sc=> {
              sc.socket.emit("chat1", data);

        });

        });
        socket.on("chat2", function (data) {

          SocketConnection.allConnections.forEach(sc=> {
              sc.socket.emit("chat2", data);
        });
        });
        socket.on('getTwoNum1',function (data){
            if(data.num=='+'){
              count1=count1+1;
            }else{
              count1=count1-1;
            }
            if(undefined==typeof(data.order)){
              SocketConnection.allConnections.forEach(sc=> {
                  sc.socket.emit("getTwoNum1",{count:count1});
            });
            }else{
              SocketConnection.allConnections.forEach(sc=> {
                  sc.socket.emit("getTwoNum1",{count:count1,order:data.order});
            });
            }

      });
      socket.on('getTwoNum2',function (data){
        if(data.num=='+'){
          count2=count2+1;
        }else{
          count2=count2-1;
        }
        if(undefined==typeof(data.order)){
          SocketConnection.allConnections.forEach(sc=> {
              sc.socket.emit("getTwoNum2",{count:count2});
        });
        }else{
          SocketConnection.allConnections.forEach(sc=> {
              sc.socket.emit("getTwoNum2",{count:count2,order:data.order});
        });
        }

    });
    socket.on('getTwoNum3',function (data){
      if(data.num=='+'){
        count3=count3+1;
      }else{
        count3=count3-1;
      }
      if(undefined==typeof(data.order)){
        SocketConnection.allConnections.forEach(sc=> {
            sc.socket.emit("getTwoNum3",{count:count3});
      });
      }else{
        SocketConnection.allConnections.forEach(sc=> {
            sc.socket.emit("getTwoNum3",{count:count3,order:data.order});
      });
      }

  });
  socket.on('getTwoNum4',function (data){
    if(data.num=='+'){
      count4=count4+1;
    }else{
      count4=count4-1;
    }
    if(undefined==typeof(data.order)){
      SocketConnection.allConnections.forEach(sc=> {
          sc.socket.emit("getTwoNum4",{count:count4});
    });
    }else{
      SocketConnection.allConnections.forEach(sc=> {
          sc.socket.emit("getTwoNum4",{count:count4,order:data.order});
    });
    }

});
socket.on('getTwoNum5',function (data){
  if(data.num=='+'){
    count5=count5+1;
  }else{
    count5=count5-1;
  }
  if(undefined==typeof(data.order)){
    SocketConnection.allConnections.forEach(sc=> {
        sc.socket.emit("getTwoNum5",{count:count5});
  });
  }else{
    SocketConnection.allConnections.forEach(sc=> {
        sc.socket.emit("getTwoNum5",{count:count5,order:data.order});
  });
  }

    });

        socket.on("chat3", function (data) {

          SocketConnection.allConnections.forEach(sc=> {

              sc.socket.emit("chat3", data);


        });
        });
        socket.on("chat4", function (data) {

            SocketConnection.allConnections.forEach(sc=> {

                sc.socket.emit("chat4", data);


        });
        });
        socket.on("chat5", function (data) {

          SocketConnection.allConnections.forEach(sc=> {

              sc.socket.emit("chat5", data);


        });
        });

        socket.on('chatMessage1',function(data){
          SocketConnection.allConnections.forEach(sc=> {
              sc.socket.emit("chatMessage1", data);
        });
      });
      socket.on('chatMessage2',function(data){
        SocketConnection.allConnections.forEach(sc=> {
            sc.socket.emit("chatMessage2", data);
      });
    });
    socket.on('chatMessage3',function(data){
      SocketConnection.allConnections.forEach(sc=> {
          sc.socket.emit("chatMessage3", data);
    });
  });

  socket.on('chatMessage4',function(data){
    SocketConnection.allConnections.forEach(sc=> {
        sc.socket.emit("chatMessage4", data);
  });
});
socket.on('chatMessage5',function(data){
  SocketConnection.allConnections.forEach(sc=> {
      sc.socket.emit("chatMessage5", data);
});
});

socket.on('message',function (data) {
            SocketConnection.allConnections.forEach(sc=> {
                sc.socket.emit("message", data);
            });
        });
        socket.on('changeColor1',function(data){
          SocketConnection.allConnections.forEach(sc=> {
              sc.socket.emit("changeColor1", data);
          });
        });
socket.on('changeColor2',function(data){
  SocketConnection.allConnections.forEach(sc=> {
      sc.socket.emit("changeColor2", data);
  });
});
socket.on('changeColor3',function(data){
  SocketConnection.allConnections.forEach(sc=> {
      sc.socket.emit("changeColor3", data);
  });
});
socket.on('changeColor4',function(data){
  SocketConnection.allConnections.forEach(sc=> {
      sc.socket.emit("changeColor4", data);
  });
});
socket.on('changeColor5',function(data){
  SocketConnection.allConnections.forEach(sc=> {
      sc.socket.emit("changeColor5", data);
  });
});
   socket.on('getTitle1',function(data){
     if(data.do=='start'){
     var num=Math.floor(Math.random()*40);
      title1=json[num].title;
     SocketConnection.allConnections.forEach(sc=> {
         sc.socket.emit("getTitle1", {sc:1,title:title1});
     });
   }else if(data.do=='end'){
     SocketConnection.allConnections.forEach(sc=> {
         sc.socket.emit("getTitle1", {sc:2,order:data.order});
     });
   } else if(data.do=='timeout'){
     SocketConnection.allConnections.forEach(sc=> {
         sc.socket.emit("getTitle1", {sc:3,title:'时间到'});
     });
   }
   });
   socket.on('getTitle2',function(data){
     if(data.do=='start'){
     var num=Math.floor(Math.random()*40);
      title2=json[num].title;
     SocketConnection.allConnections.forEach(sc=> {
         sc.socket.emit("getTitle2", {sc:1,title:title2});
     });
   }else if(data.do=='end'){
     SocketConnection.allConnections.forEach(sc=> {
         sc.socket.emit("getTitle2", {sc:2,order:data.order});
     });
   } else if(data.do=='timeout'){
     SocketConnection.allConnections.forEach(sc=> {
         sc.socket.emit("getTitle2", {sc:3,title:'时间到'});
     });
   }
   });
   socket.on('getTitle3',function(data){
     if(data.do=='start'){
     var num=Math.floor(Math.random()*40);
      title3=json[num].title;
     SocketConnection.allConnections.forEach(sc=> {
         sc.socket.emit("getTitle3", {sc:1,title:title3});
     });
   }else if(data.do=='end'){
     SocketConnection.allConnections.forEach(sc=> {
         sc.socket.emit("getTitle3", {sc:2,order:data.order});
     });
   } else if(data.do=='timeout'){
     SocketConnection.allConnections.forEach(sc=> {
         sc.socket.emit("getTitle3", {sc:3,title:'时间到'});
     });
   }
   });
   socket.on('getTitle4',function(data){
     if(data.do=='start'){
     var num=Math.floor(Math.random()*40);
      title4=json[num].title;
     SocketConnection.allConnections.forEach(sc=> {
         sc.socket.emit("getTitle4", {sc:1,title:title4});
     });
   }else if(data.do=='end'){
     SocketConnection.allConnections.forEach(sc=> {
         sc.socket.emit("getTitle4", {sc:2,order:data.order});
     });
   } else if(data.do=='timeout'){
     SocketConnection.allConnections.forEach(sc=> {
         sc.socket.emit("getTitle4", {sc:3,title:'时间到'});
     });
   }
   });
   socket.on('getTitle5',function(data){
     if(data.do=='start'){
     var num=Math.floor(Math.random()*40);
      title5=json[num].title;
     SocketConnection.allConnections.forEach(sc=> {
         sc.socket.emit("getTitle5",{sc:1,title:title5} );
     });
   }else if(data.do=='end'){
     SocketConnection.allConnections.forEach(sc=> {
         sc.socket.emit("getTitle5",{sc:2,order:data.order});
     });
   } else if(data.do=='timeout'){
     SocketConnection.allConnections.forEach(sc=> {
         sc.socket.emit("getTitle5", {sc:3,title:'时间到'});
     });
   }
   })


        socket.on("disconnect", ()=> {
            removeObjectFromArray(this, SocketConnection.allConnections);
    });
    }

    get socket() {
        return this._socket;
    }
}

SocketConnection.allConnections = [];

module.exports = SocketConnection;
