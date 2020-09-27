function testmatch(){
	var re=document.getElementById("regex").value;
	var subject=document.getElementById("subject").value;
	var result=subject.match(re);
	if(result){
		alert("Successful Match");
	}else{
		alert("Unsuccessful");
	}
	
}

function showmatch(){
	var re=document.getElementById("regex").value;
	var subject=document.getElementById("subject").value;
	var result=subject.match(re);
	if(result){
		alert("Match at position: "+result.index);
	}else{
		alert("Unsuccessful");
	}
	
}