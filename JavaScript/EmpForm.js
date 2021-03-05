
 function validate()
{
    let firstName = document.getElementById('firstName').value;
    validatefName(firstName);

    let lastName = document.getElementById('lastName').value;
    validatelName(lastName);

    let department = document.getElementById('department').value;
    validateDept(department);

    let emailAddress = document.getElementById('emailAddress').value;
    validateEmail(emailAddress);

    let phone = document.getElementById('phone').value;
    validatePhone(phone);
   
    function validatefName(name)
{
    let firstNamePattern = RegExp(`^[A-Z]{1}[a-z]{2,}$`);
    if (firstNamePattern.test(name) == false)
    {
        document.getElementById('fNameError').innerHTML = "Enter valid FirstName";
        //return true;
    }else{
        document.getElementById('fNameError').innerHTML = "";

    }
    
}
    function validatelName(name)
    {
       let lastNamePattern = RegExp(`^[A-Z]{1}[a-z]{2,}$`);
      if (lastNamePattern.test(name) == false)
       {
           document.getElementById('lNameError').innerHTML = "Enter valid LastName";
          // return true;
       }
       else{
        document.getElementById('lNameError').innerHTML = "";
    }
    }
    function validateDept(name)
{
        let departmentPattern = RegExp(`^[A-Z]{1}[a-z]{2,}$`);
        if (departmentPattern.test(name) == false)
        {
            document.getElementById('deptError').innerHTML = "Enter valid Department";
           // return false;
        }else{
            document.getElementById('deptError').innerHTML = "";
        }
            }
    function validateEmail(name)
            {    
        let emailPattern = RegExp(`^[a-zA-Z0-9]([._+-]{0,1}[a-zA-Z0-9])*[@]{1}[a-zA-Z0-9]{1,}[.]{1}[a-zA-Z]{2,3}([.]{1}[a-zA-Z]{2,3}){0,1}$`);
        if (emailPattern.test(name) == false)
        {
            document.getElementById('emailError').innerHTML = "Enter valid emailAddress";
            //return false;
        }
        else{
            document.getElementById('emailError').innerHTML = "";
        }
        
    }
   
    function validatePhone(num)
  {
        let phonePattern = RegExp(`^([+][1-9]{1,3}[- ]?)?[1-9]{10}$`);
        if (phonePattern.test(num) == false)
        {
            document.getElementById('numError').innerHTML = "Enter valid PhoneNumber";
            //return false;
        }
    
    else{
        document.getElementById('numError').innerHTML = "";
    }
    }     
     //return true;
 }
 
  
   
  