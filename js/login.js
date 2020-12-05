// JavaScript Document
$(function(){
	function checkEamil(){
			var a=$("#email").val()
			if(a==""){
				alert("请输入Email")
				return false;
			}		
		return true;
		}
	function checkpwd(){
			var a=$("#pwd").val()
			if(a==""){
				alert("请输入密码")
				return false;
			}		
		return true;
		}
$(function(){
		
	$("#btn").click(function(){
			var bn=true;
			if(checkEamil()==false)bn=false;
			if(checkpwd()==false)bn=false;
		})
		
	})
	})