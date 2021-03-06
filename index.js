var bools=[true,false,false,false,false,true], flag=false,verified=[4];
var strings=["Password should contain atleast 1 uppercase letter","Password should contain atleast 1 lowercase letter",
	"Password should contain atleast 1 digit","Password should contain atleast one of @,#,$,&",
	"Password should contain only @,#,$,& as special characters", "Passwords should be 8-16 characters"];
$(document).ready(function() {
	$(".container").hide();
	$(".head").fadeIn(1000);
	$(".container").fadeIn(1000);
	$(".giftp").click(function(){
		$(".santa").animate({left: '85%'},3000, function(){$(".santa").css("transform", "rotateY(180deg)");});
		$(".santa").animate({left: '2%'},3000, function(){$(".santa").css("transform", "rotateY(360deg)");}).delay(100);
		$(".gift").slideDown();
		$(".gift").click(function(){
			flag=(bools[Math.floor(Math.random()*bools.length)]);
			if(flag)
				{
					$(".giftp").text("Yay! You won a mobile!").css({"font-size":"2vw","left":"1.8vw","color":"pink"});
				}
			else
				{
					$(".giftp").text("Better Luck Next Time").css({"font-size":"2vw","left":"1.8vw","color":"pink"});
				}			
			$(".gift").slideUp(1500,function(){
				$(".giftp").text("Click Here").css({"font-size":"3vw","left":"6%","color":"black"}).delay(1000);
				$(".giftp").hover(function(){$(this).css("color","blue");}, 
					function(){$(this).css("color", "black");});
			});
		});	
	});
	var curr;
	$("#password").on({
		focus:function()
		{		
			setText();
			//azure,lightpink
			$("#pass_ver").css({"left":"25%","position":"relative","background-color":"deepskyblue","color":"white",
				"line-height":"22px","width":"72%","text-align":"left","padding-left":"20px"});
		},
		keyup:function(){
			curr=$("#password").val();
			if (curr.match(/[A-Z]+/))
			{
				if(!(verified.includes(0)))
					{verified.push(0);}
			}
			else{
				verified= verified.filter(function(item) {
				return item !== 0;
				});}
			if (curr.match(/[a-z]+/))
			{
				if(!(verified.includes(1)))
					{verified.push(1);}
			}
			else{
				verified= verified.filter(function(item) {
				return item !== 1;
				});}
			if (curr.match(/[0-9]+/))
			{
				if(!(verified.includes(2)))
					{verified.push(2);}
			}
			else{
				verified= verified.filter(function(item) {
				return item !== 2;
				});}
			if (curr.match(/[@#$&]+/))
			{
				if(!(verified.includes(3)))
					{verified.push(3);}
			}
			else{
				verified= verified.filter(function(item) {
				return item !== 3;
				});}
			if (!(curr.match(/[`!%^*()_+\-=\[\]{};':"\\|,.<>\/?~]/)))
			{
				if(!(verified.includes(4)))
					{verified.push(4);}
			}
			else{
				verified= verified.filter(function(item) {
				return item !== 4;
				});}
			if (curr.length>7 && curr.length<17)
			{
				if(!(verified.includes(5)))
					{verified.push(5);}
			}
			else{
				verified= verified.filter(function(item) {
				return item !== 5;
				});}
			setText();
		}
	});
	$("#password").blur(function(){
		$("#pass_ver").slideUp("slow")
	})
});

$(window).scroll(function() {
  if ($(window).scrollTop() >= (($(document).height() - $(window).height())- $('.container').height()/3)) {
    $("#arrow").fadeIn()
    .click(function()
    {
		$(window).scrollTop(0);
	});
  }
  if ($(window).scrollTop()==0) {
    $("#arrow").fadeOut();}
});


var a,b,result,operator;
function callCaptcha()
{
	a=Math.floor(Math.random() * 100)+1;//Math.random(1,99);
	b=Math.floor(Math.random() * 100);
	var operations=["+","-","*","/"];
	operator=operations[Math.floor(Math.random() * operations.length)];
	if(operator=="/")
	{
		while(((a/b)!=Math.round(a/b))||b==0)
		{
			a=Math.floor(Math.random() * 100)+1;//a may be prime
			b=Math.floor(Math.random() * 100);
		}
	}
	$("#calc").text(a+operator+b);
	switch(operator)
	{
		case "+":
			result=a+b;
			break;
		case "-":
			result=a-b;
			break;
		case "*":
			result=a*b;
			break;
		case "/":
			result=a/b;
			break;
	}
	
}

function validate()
{
	var elements=[],i,x,y,inputs,check1,check2,flag;
	
	if(result!=$("#captcha").val())
	{
		$("#recap").addClass("red").css("display","block");
		$("#recap").text("Please re-enter captcha");
		callCaptcha();
		return false;
	}
	$("#recap").css("display","none");
	
	
	inputs = $('input');

	for(i=0;i<inputs.length;i++)
	{
		elements.push(inputs[i].id.toString());
	}
	elements.pop();
	elements.push("address");

	inputs = $('select');
	for(i=0;i<inputs.length;i++)
	{
		elements.push(inputs[i].id.toString());
	}
	inputs=["middle_name","Alt_mobile","DOB","zip","male","female","other","yes","no"];
	for(i=0;i<elements.length;i++)
	{
		y=elements[i].toString();
		if (!(inputs.includes(y)))
		{
			x=$("#"+y).val();
			if (x == "") 
		    {
			    alert("Please fill '"+y.replace("_"," ")+"'");
			    return false;
		  	}
		}	
	}

	var date=$("#DOB").val();
	var curr=new Date();
	if(new Date(date)>curr)
	{
		alert("Please select a valid D.O.B");
		return false;
	}
	check1=$("#email_id").val();
	check1=check1.toLowerCase();
	if(!(check1.match(/^[a-z0-9_]+@[a-z]+[.]{1}[a-z]{2,3}$/)))
	{	
		//var txt = document.createElement("p");txt.className="red";txt.innerHTML="Please enter a valid email";$("#email_id").after(txt);
		//$(".red1").addClass("red");return false;}
		$("#valid").css("display","block");
		$("#valid").text("Please enter a valid email");
		return false;
	}
	else
	{
		$("#valid").css("display","none");
	}

	check1=$("#mobile_no").val();
	alert(check1);
	if(!(check1.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)))
	{
		alert("Please enter a valid mobile no.");
		return false;
	}
	check1=$("#Alt_mobile").val();
	if(check1!="")
	{	if(!(check1.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)))
		{
			alert("Please enter a valid alternate mobile no.");
			return false;
		}
	}
	
	//Password matching

	check1=$("#password").val();
	check2=$("#confirm_password").val();
	//var pattern=  /^[A-Z0-9@]{8,16}$/;

	if(verified.length<6)
	{
		setText();
		return false;
	}
	else if (check1!=check2)
	{
		$("#password").val("");
		$("#confirm_password").val("");
		verified=[4];
		alert("Passwords do not match");
		setText();
		return false;
	}
	else{
		$("#password").val("");
		$("#confirm_password").val("");
		verified=[4];
		$("#pass_ver").slideUp(1000);
	}
	
}
function setText()
{
	var text=""
	for(i=0;i<strings.length;i++)
	{	
		if(verified.includes(i))
		{
			text=text+"<s>"+strings[i]+"</s><br>"
		}
		else
		{text=text+strings[i]+"<br>"}
	}
	$("#pass_ver").slideDown("slow",function(){
		$("#pass_ver").html(text);
	});
	if(!($("#password").is(":focus")))
	{
		$("#password").focus();
	}
}
function toggle(id) 
{
	var decider=id;

    if (decider=="yes")
    {
        $("#no").removeAttr('checked');
    }    
    if (decider=="no")
    {
        $("#yes").removeAttr('checked');
    } 
 }