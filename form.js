/*var form = document.getElementById('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var salary = document.getElementById('salary').value;
  fetch('http://162.55.220.72:5005/user_info_3', {
        method:'POST',
        body:JSON.stringify({
            name:name,
            age:age,
            salary:salary,
        }),
       
       
         headers: {
      
      'Content-Type': 'text/plain',
    },
    })
    .then(function (res){
         return .json();
       
    });
   

})
let _data = {
  name: "foo",
  age: "bar", 
  salary:1
}

fetch('http://162.55.220.72:5005/user_info_3', {
  method: "POST",
  mode: "no-cors",
  body: JSON.stringify(_data),
  headers: {"Content-type": "application/json; charset=UTF-8"}
})
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log(err));
})

$("idform").submit( function(e){
  e.preventDefault();

  var form = $(this);
  var action = form.attr("http://162.55.220.72:5005/user_info_3");

  $.ajax({
    type : "POST",
    url : "http://162.55.220.72:5005/user_info_3",
    data : form.serialize(),
    sucess : function(data)
        {
                console.log('Submission was successful.');
                console.log(data);
        },        
            error: function (data) {
                console.log('An error occurred.');
      console.log(data);
    }
  });
});*/

/*$(document).ready(function () {
  $("#form").submit(function (event) {
      event.preventDefault();
      debugger;
    var formData = {
      name: $("#name").val(),
      age: $("#age").val(),
      salary: $("#salary").val(),
    };
     function AJAXrequest(url, postedData, callback) {
    $.ajax({
      type: "POST",
      url: "http://162.55.220.72:5005/user_info_3",
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function (data) {
      console.log(data);
    });
  }
   
  });

});*/

$("#form").submit(function(event){
	event.preventDefault(); //prevent default action 
	var post_url = $(this).attr("http://162.55.220.72:5005/get_method?name=Dzmitry&age=29"); //get form action url
	var form_data = $(this).serialize(); //Encode form elements for submission
	
	$.get( post_url, form_data, function( response ) {
	  $("#server-results").html( response );
	});