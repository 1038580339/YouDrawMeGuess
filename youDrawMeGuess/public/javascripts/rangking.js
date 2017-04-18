(function() {
  var user=JSON.parse(sessionStorage.getItem('user'));
  // console.log(user);
  $.ajax({
    url:'/getRanking',
    type:'post',
    success:function (resp) {
      var ranking=0;
      var data=resp.returnVal.message;
      // console.log(data);
      for(var v=0;v<data.length;v++){
        ranking++;
        var tr=$('<tr></tr>');
        var td1=$('<td>'+ranking+'</td>');
        var td2=$('<td>'+data[v].userId+'</td>');
        var td3=$('<td>'+data[v].userName+'</td>');
        var td4=$('<td>'+data[v].grade+'</td>');
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        if(v<10){
        $('table').append(tr);
      }
        if(data[v].userId==user.userId){
          $('#myGrade').text(data[v].grade);
          $('#myRanking').text(ranking);
        }
      }
    }
  })
})();
