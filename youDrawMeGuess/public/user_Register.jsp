<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<!--css代码-->


<title>用户注册</title>
 <meta charset="utf-8">
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<style>
	body{
		font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
	}
	 form{
		 margin: 0 auto;
		 width:336px;
		 border:1px solid #838B8B;
		 padding-left: 27px;
    padding-bottom: 31px;
		box-shadow: 0 0 5px #838B8B;
	 }
	 input{
		 margin-top:20px;
		 outline:none;
	 }
	 .title{
		 margin-left:64px;
	 }
	 .selectClass{
		 margin-top:20px;
		 /*margin-left: 20px;*/
	 }
	 .selectClass select{
		 width: 173px;
     height: 21px;
		 outline: none;
	 }
	  button{
			width: 100px;
	    outline: none;
	    color:#838B8B;
	    height: 35px;
	    background-color: white;
	    border: #838B8B 1px solid;
			font-size: 14px;
			margin-top: 20px;
			margin-left: 189px;
	 }
	 button:hover{
		 background-color: #838B8B;
		 color:white;
	 }
</style>
</head>
<script type="text/javascript">
	var citys = [ [ "杭州", "绍兴", "嘉兴", "宁波" ], //浙江省
	[ "济南", "烟台", "青岛", "聊城" ] //山东省
	];

	function getCity() {
		//获取省份和城市对应下拉列表框
		var province = document.forms[0].elements["province"];
		var city = document.forms[0].elements["city"];

		//每次要清空
		city.options.length = 1;
		//获取省份中选中项的下标
		var index = province.options.selectedIndex;

		var provinces = citys[index - 1];//获取选中省份对应的城市数组

		//将对应的城市添加到城市下拉框中。
		for (var i = 0; i < provinces.length; i++) {
			city.options[city.length] = new Option(provinces[i], provinces[i]);
		}
	}
</script>
<script type="text/javascript">
	/*第二种方式*/

	function check() {

		document.getElementsById("tel_Account_Id").placeholder = "";
	}

	function f1() {
		var input = document.getElementById("tel_Account_Id");
		input.placeholder = "请输入手机账号";
	}
</script>
<body>
	<form action="" method="post">
	    <span class="title">账号：</span> <input type="text" id="tel_Account_Id" name="tel_Account"
			onblur="check()" onfocus="f1()" /> <br>
			<span class="title">密码：</span> <input type="password"
			name="user_Password"> <br>
			<span style="margin-left:32px">确认密码：</span> <input type="password"
			name="user_RePassword"> <br>
			<span class="title">昵称：</span> <input type="text"
			name="nick_Name"> <br>
			<span class="title">性别：</span>
			<label>
			<input type="radio" name="gender" value="nan" checked="checked" />
			<span>男</span>
		</label>
		   <label>
			<input type="radio" name="gender" value="nv" />
			<span>女</span>
		</label>

		<!--选择框-->
		  <br/>
      <div class='selectClass'>
				<span>选择所在省份：</span>
		 <select name="province" onchange="getCity()">
			<option value="0">请选择</option>
			<option value="浙江省">浙江省</option>
			<option value="山东省">山东省</option>
		  </select>
    </div>
     <div class='selectClass'>
		<span>选择所在城市：</span>
		<select name="city">
		<option value="0">请选择</option><br>
		</select>
	  </div>


		 <span class="title">邮箱：</span>
      <input type="text" title="Email Address" value="" name="e_Mail"> <br>
      <button><span>提交</span></button>









	</form>

</body>
</html>
