function graduation(){
	
	var b=document.getElementsByName('graduation');
	//var gd="";
	for(var i=0;i<b.length;i++){
		if(b[i].checked){
			gd=b[i].value;
		}
		
	}
	//document.write(b.length);
	if(gd=='UG'){
		var array=['B.Sc','B.A','B.Com'];
	}else if(gd=='PG'){
		var array=['M.A','M.Tech','MCA','MBA'];
	}else{
		var array=[];
	}
	var string="";
	for(var i=0;i<array.length;i++){
		string=string+"<option>"+array[i]+"</option>";
	}
	string="<select name='qualify'>"+string+"</select>";
	document.getElementById('qualify').innerHTML=string;
}

function display(){
	var data=graduation();
	var name=document.getElementById("fname").value;
	var dob=document.getElementById("dob").value;
	var phone=document.getElementById("phone").value;
	var email=document.getElementById("emaildata").value;
	var grlevel=gd;
	var qualification=document.getElementById("qualify").value;
	
	var mywindow=window.open("","_blank","");
	mywindow.document.write("Name:"+name+"<br>");
	mywindow.document.write("Age:"+dob+"<br>");
	mywindow.document.write("Phone Number:"+phone+"<br>");
	mywindow.document.write("Email: "+email+"<br>");
	mywindow.document.write("Graduation level: "+grlevel+"<br>");
	mywindow.document.write("Qualification:"+qualification+"<br>");
	
}