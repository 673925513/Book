// JavaScript Document//购物车需求
		
		//文档就绪函数
		$(function(){
			//要求1：点击图标显示和隐藏推荐商品
			$("#shopping_commend_arrow").click(function(){
				//将推荐商品显示隐藏
				$("#shopping_commend_sort").toggle();
				//判断图标方向
				if($(this).attr("src")=="images/shopping_arrow_up.gif"){
					$(this).attr("src","images/shopping_arrow_down.gif")
					}else{
					$(this).attr("src","images/shopping_arrow_up.gif")	
						}
				})
			//要求2：给购物车中山工加一个隔行变色
			$("#myTableProduct tr:even").css("background-color","#9F6");
			//要求3：计算总价格
			//找出所有tr中当当价及数量
			//分别计算单个商品价格*数量 求和
			//计算总价格
		function sum(){
			//声明变量 存放和	
			var x=0;
			//声明变量存放积分
			var jfen=0;
			//声明变量 存放差价
			var cajia=0;
			
			//找出所有叠加数值 找出所有存放当当价的元素
			var ddj=$("#myTableProduct .shopping_product_list_4>label");
			//找出所有存放数量的元素
			var sl=$("#myTableProduct .shopping_product_list_5>input");
			//找出所有存放积分的元素
			var jf=$("#myTableProduct .shopping_product_list_2>label");
			//找出所有存放市场价的元素
			var cj=$("#myTableProduct .shopping_product_list_3>label");
			//遍历
			for(var i=0;i<ddj.length;i++){
				//alert(ddj.eq(i).text());获取单个当当价格
				//alert(sl.eq(i).val())	获取当个的数量
				//完成叠加
				x+=parseFloat(ddj.eq(i).text())*parseFloat(sl.eq(i).val());	//计算总金额
				jfen+=parseFloat(jf.eq(i).text())*parseFloat(sl.eq(i).val());//计算积分
				cajia+=parseFloat(cj.eq(i).text())*parseFloat(sl.eq(i).val())-parseFloat(ddj.eq(i).text())*parseFloat(sl.eq(i).val());//计算差价
			}
			//将计算结果放到存放的对应标签中
			$("#product_total").text(x.toFixed(3));//展示总金额
			$("#product_integral").text(jfen.toFixed(2));//展示积分
			$("#product_save").text(cajia.toFixed(3));//展示差价
			
		}
		
		sum();
		$("#myTableProduct .shopping_product_list_5>input").blur(aa);
		//定义函数：
		
		function aa(){
			sum()
		}
			//：删商品
			$("#myTableProduct .shopping_product_list_6>a").click(function(){
				if(window.confirm("确认删除吗")==true){
					$(this).parents("tr").remove();
					sum();//重新调用计算价格
				}
			});
			
			//清空购物车
			$("#removeAllProduct").click(function(){
			if(window.confirm("确认删除？")==true){
						//点击确认时 将对应的行删除
						$("#myTableProduct").next().remove();
						$("#myTableProduct").remove();
						$(".shopping_list_border").append("<div class='empty_product'><div>您还没有挑选商品，<a href='index.html'>去挑选看看>></a></div></div>");
			}
		});
			})