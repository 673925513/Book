// JavaScript Document
$(function(){
	$("#email").blur(B1);
	$("#nickName").blur(B2);
	$("#pwd").blur(B3);
	$("#repwd").blur(B4);
	$("#province").blur(B5);
	var J=$("<option>江西</option>");
	var S=$("<option>四川</option>");
	var B=$("<option>北京</option>");
	J.appendTo($("#province"));
	S.appendTo($("#province"));
	B.appendTo($("#province"));
})
function B1(){
	var b1=/^[a-zA-Z0-9]{6,12}@\S{2,5}.com$/
	var k=/^$/
	if(b1.test($(this).val())){
		$(this).removeClass("register_input_Blur").removeClass("register_input_Focus");
		var G=$("<img src='images/register_write_ok.gif' alt='open' />");
		$("#email_prompt").empty();
		$("#email_prompt").removeClass();
		G.appendTo($("#email_prompt"))	
	}else if(k.test($(this).val())){
		$("#email_prompt").empty();
		$("#email_prompt").removeClass();
		$(this).addClass("register_input_Focus");
	}else{
		$(this).addClass("register_input_Blur");
		var G=$("<b>样式错误</b>").css("color","red");
		$("#email_prompt").empty();
		G.appendTo($("#email_prompt"));
		$("#email_prompt").addClass("register_input_Blur").css("width",G.width()+5)
	}
}
function B2(){
	var b2=/^\S{1,6}$/
	var k=/^$/
	if(b2.test($(this).val())){
		$(this).removeClass("register_input_Blur").removeClass("register_input_Focus");
		var G=$("<img src='images/register_write_ok.gif' alt='open' />");
		$("#nickName_prompt").empty();
		$("#nickName_prompt").removeClass();
		G.appendTo($("#nickName_prompt"))	
	}else if(k.test($(this).val())){
		$("#nickName_prompt").empty();
		$("#nickName_prompt").removeClass();
		$(this).addClass("register_input_Focus");
		var G=$("<b>昵称为必填项,请输入您的昵称</b>").css("color","red");
		$("#nickName_prompt").empty();
		G.appendTo($("#nickName_prompt"));
		$("#nickName_prompt").addClass("register_input_Blur").css("width",G.width()+5)
	}else{
		$(this).addClass("register_input_Blur");
		var G=$("<b>昵称为必填项,请输入您的昵称</b>").css("color","red");
		$("#nickName_prompt").empty();
		G.appendTo($("#nickName_prompt"));
		$("#nickName_prompt").addClass("register_input_Blur").css("width",G.width()+5)
	}
}function B3(){
	var b3=/^[a-zA-Z0-9]{6,20}$/
	var k=/^$/
	if(b3.test($(this).val())){
		$(this).removeClass("register_input_Blur").removeClass("register_input_Focus");
		var G=$("<img src='images/register_write_ok.gif' alt='open' />");
		$("#pwd_prompt").empty();
		$("#pwd_prompt").removeClass();
		G.appendTo($("#pwd_prompt"))	
	}else if(k.test($(this).val())){
		$("#pwd_prompt").empty();
		$("#pwd_prompt").removeClass();
		$(this).addClass("register_input_Focus");
		var G=$("<b>密码错误,请用大小写英文,数字,长度6-20个字符</b>").css("color","red");
		$("#pwd_prompt").empty();
		G.appendTo($("#pwd_prompt"));
		$("#pwd_prompt").addClass("register_input_Blur").css("width",G.width()+70)
	}else{
		$(this).addClass("register_input_Blur");
		var G=$("<b>密码错误,请用大小写英文,数字,长度6-20个字符</b>").css("color","red");
		$("#pwd_prompt").empty();
		G.appendTo($("#pwd_prompt"));
		$("#pwd_prompt").addClass("register_input_Blur").css("width",G.width()+70)
	}
}
function B4(){
	var k=/^$/
	if(k.test($(this).val())){
		$("#repwd_prompt").empty();
		$("#repwd_prompt").removeClass();
		$(this).addClass("register_input_Focus");	
		var G=$("<b>两次输入密码不一致,请重新输入</b>").css("color","red");
		$("#repwd_prompt").empty();
		G.appendTo($("#repwd_prompt"));
		$("#repwd_prompt").addClass("register_input_Blur").css("width",G.width()+5)
	}else if(($(this).val())==($("#pwd").val())){
		$(this).removeClass("register_input_Blur").removeClass("register_input_Focus");		
		var G=$("<img src='images/register_write_ok.gif' alt='open' />");
		$("#repwd_prompt").empty();
		$("#repwd_prompt").removeClass();
		G.appendTo($("#repwd_prompt"))
	}else{
		$(this).addClass("register_input_Blur");
		var G=$("<b>两次输入密码不一致,请重新输入</b>").css("color","red");
		$("#repwd_prompt").empty();
		G.appendTo($("#repwd_prompt"));
		$("#repwd_prompt").addClass("register_input_Blur").css("width",G.width()+5)
	}
}
function B5(){
	var MR=$("#city option:first")
	if($(this).val()=="江西"){
		var N1=$("<option>九江</option>");
		$("#city").empty();
		MR.appendTo($("#city"));
		N1.appendTo($("#city"));
	}else if($(this).val()=="四川"){
		$("#city").empty();
		MR.appendTo($("#city"));
		var N2=$("<option>成都</option>");
		N2.appendTo($("#city"));
	}else if($(this).val()=="北京"){
		$("#city").empty();
		MR.appendTo($("#city"));
		var N3=$("<option>北京</option>");
		N3.appendTo($("#city"));
	}else{
		$("#city").empty();
		MR.appendTo($("#city"));
	}
}