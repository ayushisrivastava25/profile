var times = 0;
document.getElementById("button").addEventListener("click", function(event){
	event.preventDefault();
	if(times > 0){
		var snackBar = document.getElementById("snackbar");
   	    snackBar.className = "show";
	    snackBar.innerHTML = "Already submitted";
	    snackbar.style.background = "#FF4C4C";
  		setTimeout(function(){ snackBar.className = snackBar.className.replace("show", ""); }, 3000);
  		return;
	} else{
		if(document.getElementById("username").value == ''){
			var snackBar = document.getElementById("snackbar");
	   	    snackBar.className = "show";
		    snackBar.innerHTML = "Please enter name";
		    snackbar.style.background = "#FF4C4C";
	  		setTimeout(function(){ snackBar.className = snackBar.className.replace("show", ""); }, 3000);
	  		return;
		}
		if(document.getElementById("phno").value == ''){
			var snackBar = document.getElementById("snackbar");
	   	    snackBar.className = "show";
		    snackBar.innerHTML = "Please enter phone number";
		    snackbar.style.background = "#FF4C4C";
	  		setTimeout(function(){ snackBar.className = snackBar.className.replace("show", ""); }, 3000);
	  		return;
		} else if(document.getElementById("phno").value.length < 10 || document.getElementById("phno").value.length > 10){
			var snackBar = document.getElementById("snackbar");
	   	    snackBar.className = "show";
		    snackBar.innerHTML = "Please enter a valid phone number";
		    snackbar.style.background = "#FF4C4C";	    
	  		setTimeout(function(){ snackBar.className = snackBar.className.replace("show", ""); }, 3000);
	  		return;
		} 
		if(document.getElementById("email").value == ''){
			var snackBar = document.getElementById("snackbar");
	   	    snackBar.className = "show";
		    snackBar.innerHTML = "Please enter email id";
		    snackbar.style.background = "#FF4C4C";
	  		setTimeout(function(){ snackBar.className = snackBar.className.replace("show", ""); }, 3000);
	  		return;
		} else {
		    var regularExpression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		    if(!regularExpression.test(document.getElementById("email").value)){
				var snackBar = document.getElementById("snackbar");
		   	    snackBar.className = "show";
			    snackBar.innerHTML = "Please enter a valid email id";
			    snackbar.style.background = "#FF4C4C";
		  		setTimeout(function(){ snackBar.className = snackBar.className.replace("show", ""); }, 3000);
		  		return;
	  		}
		}
		if(document.getElementById("title").value == ''){
			var snackBar = document.getElementById("snackbar");
	   	    snackBar.className = "show";
		    snackBar.innerHTML = "Please enter job title";
		    snackbar.style.background = "#FF4C4C";
	  		setTimeout(function(){ snackBar.className = snackBar.className.replace("show", ""); }, 3000);
	  		return;
		}
		if(document.getElementById("resume").files.length == 0){
			var snackBar = document.getElementById("snackbar");
	   	    snackBar.className = "show";
		    snackBar.innerHTML = "Please select resume";
		    snackbar.style.background = "#FF4C4C";
	  		setTimeout(function(){ snackBar.className = snackBar.className.replace("show", ""); }, 3000);
	  		return;
		}
		const url = "http://localhost:3000/api/save";
	    const data = {
	        'resumeUploaded' : document.getElementById("resume").files[0],
	        'username': document.getElementById("username").value,
	        'phoneNo' : document.getElementById("phno").value,
	        'email' : document.getElementById("email").value,
	        'jobTitle' : document.getElementById("title").value
	    };
		axios({
		    method: 'post',
		    url: url,
		    data: data,
		    config: { headers: {'Content-Type': 'multipart/form-data' }}
		    })
		    .then(function (response) {
		    	if(response.data == "INVALID_EMAIL") {
		    		var snackBar = document.getElementById("snackbar");
			   	    snackBar.className = "show";
				    snackBar.innerHTML = "Invalid Email";
				    snackbar.style.background = "#FF4C4C";
			  		setTimeout(function(){ snackBar.className = snackBar.className.replace("show", ""); }, 3000);
			  		return;
		    	} else if (response.data == "INVALID_PHNO"){
		    		var snackBar = document.getElementById("snackbar");
			   	    snackBar.className = "show";
				    snackBar.innerHTML = "Invalid Phone Number";
				    snackbar.style.background = "#FF4C4C";
			  		setTimeout(function(){ snackBar.className = snackBar.className.replace("show", ""); }, 3000);
			  		return;
		    	} else {
				    var snackBar = document.getElementById("snackbar");
			   	    snackBar.className = "show";
				    snackBar.innerHTML = "Success!";
				    snackbar.style.background = "#00CC00";
			  		setTimeout(function(){ snackBar.className = snackBar.className.replace("show", ""); }, 3000);
		        	times++;	
	        	}
		    })
		    .catch(function (response) {
				var snackBar = document.getElementById("snackbar");
		   	    snackBar.className = "show";
			    snackBar.innerHTML = response.data;
			    snackbar.style.background = "#FF4C4C";
		  		setTimeout(function(){ snackBar.className = snackBar.className.replace("show", ""); }, 3000);
		  		return;
		});
	}
});

function preventInput(evnt) {
	if(evnt.which != 8){
		if (evnt.which < 48 || evnt.which >57){ 
		evnt.preventDefault();
		return;
		}
	}
}