/* let firstName
let lastName
let department
let emailAddress
let phone */

$(document).ready(function () {

  firstName = $('#firstName');
  lastName =  $('#lastName');
  department = $('#department');
  emailAddress = $('#emailAddress');
  phone = $('#phone');
  
})

    function postData(){
    
        var data = {
            "firstName" : firstName.val(),
            "lastName" : lastName.val(),
            "department" :department.val(),
            "emailAddress" :emailAddress.val(),
            "phone" : phone.val()
        };

        $.ajax({
            type : 'POST',
            url : 'http://localhost:3000/employees',
            dataType: "json",
            contentType : "application/json",
            data : JSON.stringify(data),
            success : function(Data) {
                console.log(Data)
            },
            error: function () {
              console.log(' Error')
            }
        })
    }
    
    function getData(){
    
      var data = {
          "firstName" : firstName.val(),
          "lastName" : lastName.val(),
          "department" :department.val(),
          "emailAddress" :emailAddress.val(),
          "phone" : phone.val()
      };

      $.ajax({
          type : 'GET',
          url : 'http://localhost:3000/employees',
          dataType: "json",
          contentType : "application/json",
          data : JSON.stringify(data),
          success : function(Data) {
              console.log(Data)
          },
          error: function () {
            console.log(' Error')
          }
      })
  }