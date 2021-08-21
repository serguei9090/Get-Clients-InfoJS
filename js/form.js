//pasar los datos a un paragrafo


$(document).ready(function(){
	var clientinfo;
	var lastName;
	var email;
	var addres;
	

	$('#submit').on('click', function (e) {
		e.preventDefault();
		/* var clientinfo='undefined'; */
		/* var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		var emailaddressVal = $("#inputEmail").val(); */
		var i_code = $('#itemCode').val();
		/* var v_lname = $('#inputLastName').val(); */
		/* var v_email = $('#inputEmail').val(); */
		/* var v_addres = $('#inputAddres').val(); */
		if (i_code == "") {
			alert("Item must be filled out");
		}
		/* else if (v_lname == "") {
		alert("Last Name must be filled out");
		} */
		/* else if (v_email == "") {
alert("Email must be filled out");
} */
		/* else if(!emailReg.test(emailaddressVal)) {
				alert("Email must be filed properly. Exampla: example@email.com");

		} */
/* 		else if (v_addres == "") {
			alert("Address must be filled out");

		}  */
		else {
			console.log(i_code)
			var clientinfo = clientinf[i_code]
		if (clientinfo == null) {
			clientinfo= "Your code dont exist or not ready yeat, for more detaill plis call the company TEL:+53 52472074"
		};
			/* var lastName = $('#inputLastName').val();
			var email = $('#inputEmail').val();
			var addres = $('#inputAddres').val(); */
			/* console.log(clientinfo, lastName, email, addres) */
			console.log(clientinfo)
		
		/* 	newlistItem = '<p> Hi ' + clientinfo + " " + lastName + ' Thanks for using my web Form. We dont save your email we only show it to you as example ' + email + ' and your address ' + addres + ' Thanks for use my form</p>'
			$('#resumePost').append(newlistItem) */
			newlistItem = '<p> Your Item Shipping is at: ' + clientinfo + " " + '</p>'
			$('#s_text').hide()
			$('#resumePost').append(newlistItem)
		}
	})
	$('#clear').on('click', function(){
		/* $("#resumePost").empty(); */
		$('#s_text').show()
	})
});



//validacion de formulario

//function validateEmail(email) {
//    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//    return re.test(String(email).toLowerCase());
//}


//Step 3 – Check That The Entered Text Is A Valid Email Address
//Our first regular expression will check to make sure that the entered text is a valid email address – i.e. contains at least one “.”, an “@” symbol and an appropriate top-level domain suffix (e.g. .com, .net, etc):
//
//?


//  function emailVal() {  
// 
//        $(".error").hide();
//        var hasError = false;
//        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
// 
//        var emailaddressVal = $("#inputEmail").val();
//        if(emailaddressVal == '') {
//			alert("Address must be filled out");
//            $("#inputEmail").after('<span class="error">Please enter your email address.</span>');
//            hasError = true;
//        }
// 
//        else if(!emailReg.test(emailaddressVal)) {
//			("Address must be filled out111");
//            $("#UserEmail").after('<span class="error">Enter a valid email address.</span>');
//            hasError = true;
//        }
// 
//        if(hasError == true) { return false; }
// 
//    });
//});



//function ValidateEmail(inputText)
//{
//var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//if(inputText.value.match(mailformat))
//{
//document.form1.text1.focus();
//return true;
//}
//else
//{
//alert("You have entered an invalid email address!");
//document.form1.text1.focus();
//return false;
//}
//}
//
//
//$('#inputEmail').validate({
//    email: {
//        required: true,
//        email: true,
//        regex: /^\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
//    }
//});
//function send(event) {
//	console.log("Running send()...");
//	var input_text = document.getElementById("meow-input").value;
//	document.getElementById("meow-output").value = meow(50,input_text);
//	event.preventDefault();
//};
//
//function meow(times, input_text){
//	var output = new Array(times);
//	for (i=0; i< times; i++){
//		output[i] = " meow " + input_text; 
//	}
//	return output;
//};