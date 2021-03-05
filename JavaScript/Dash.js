/* $(document).ready(function () {
  getData();
})
 */

function getData() {
  $.ajax({
      type: 'GET',
      url: "http://localhost:3000/employees",
      dataType:"json",
      success: function (data) {
        console.log(data)
        
        let rowdata = ""
        $.each(data, function (key, val) {
          rowdata += "<tr>";
          rowdata += '<td>' +val.firstName + '</td>';
          rowdata += '<td>' +val.lastName + '</td>';
          rowdata += '<td>' +val.department + '</td>';
          rowdata += '<td>' +val.emailAddress + '</td>';
          rowdata += '<td>' +val.phone + '</td>'; 
          rowdata += `<td><button class="button1" onclick="editId(${val.id})">Edit</button></td>`;
          rowdata += `<td><button class="button1" onclick="deleteData(${val.id})">Delete</button></td>`;              
          "</tr>";
                                            
        });
        $('#table').append(rowdata);
      },
        error: function () {
          alert('Error')
        }
  });
  
}
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
 
//delete
deleteData = (id) => {
  $.ajax({
    type: 'DELETE',
    url: `http://localhost:3000/employees/${id}`,
    
    success:function(data){
      console.log(data)
    }
  })
  window.open("../HTML/Dashboard.html", "_self")
}


//update
editId = (id) => {
  localStorage.setItem("id", id);
  localStorage.setItem("key", "edit");
  window.location.href ="../HTML/edit.html";
}

function updateData() {
  let id = localStorage.getItem("id"); 
  $.ajax({
  type:"GET",
  url: ` http://localhost:3000/employees/${id}`,
  contentType:"application/json",
  data:JSON.stringify(id),
  success: function(data){
    console.log("Sucessfull",data)
    document.getElementById('firstName').value=data.firstName;
    document.getElementById('lastName').value=data.lastName;
    document.getElementById('department').value=data.department;
    document.getElementById('emailAddress').value=data.emailAddress;
    document.getElementById('phone').value=data.phone; 
  }
});
}

$(document).ready(function () {
  let key = localStorage.getItem("key"); 
   if (key === "edit") {
    let id = localStorage.getItem("id");
    console.log(id);
     updateData();
   }
  else {
     getData();
  }

})

function update( ){

  let data = {
     "firstName": document.getElementById("firstName").value,
     "lastName": document.getElementById("lastName").value,
     "department": document.getElementById("department").value,
     "emailAddress": document.getElementById("emailAddress").value,
     "phone": document.getElementById("phone").value
 } 

  console.log("New updated data : ",data);
 console.log("Updating Employee data.....")
    let id = localStorage.getItem("id") 

 $.ajax({
     type: "PUT",
     url: ` http://localhost:3000/employees/${id}`,
     data: JSON.stringify(data),
     contentType: "application/json",
     success:function (data)  {
       console.log("Result : ",data)
       localStorage.clear();
       window.location = "../HTML/Dashboard.html";
  
            },

     error : function(error) {
         console.log("Error : ",error)
     }
 })


}










