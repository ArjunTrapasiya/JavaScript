function a()
{
	var f=document.forms['MyForm'];
	var u=f.uname.value;
	var p=f.pwd.value;

	if(u=="Arjun" && p=="1701")
	{
		alert("Login Succesfully");
	}
	else
	{
		alert("Login Failed");
	}
}