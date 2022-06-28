
    
    

function validate()
{

    const name = document.getElementById("exampleInputname");
    const email = document.getElementById("exampleInputmail");
    const number = document.getElementById("exampleInputnumber");
    const password1 = document.getElementById("password1");
    const password2 = document.getElementById("password2");
    const error = document.getElementById("error");
    const regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})$/;
    const phnu = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const pwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
   
    if(name.value.trim() == "")
    { 
        alert("Box cannot be empty");
        return false;
      }
    
        
     else if(regexp.test(email.value))
     {
        error.innerText ="valid";
       error.style.color ="green";
    
     }
     else {  
         error.innerText ="Invalid";
         error.style.color ="red";
         return false;
        
    }
    if(number.value =="")
    {
        alert("Phone number cannot be empty");
        return false;
    }
   
     else if(phnu.test(number.value))
     {
        error1.innerText ="valid";
        error1.style.color ="green";
     
     }
      else{
        error1.innerText ="Invalid";
        error1.style.color ="red";
        return false;
      }

if(password1.value==""){
  alert("Password is Mandatory");
  return false;
}
else if(pwd.test(password1.value))
{
  three.innerText="Suggested Password";
  three.style.color="green";
}else
{
  three.innerText="Not Suggested Password";
  three.style.color="red";
  return false;
}



    if(password2.value =="")
    {
      alert("confirmation password need to be filled");
      return false;
    }
     else if(password2.value==password1.value){
      two.innerText="successfully submitted";
      two.style.color="green";
     
      return true;
     }
     else{
      two.innerText="Not the same password as above";
      two.style.color="red";
      return false;
     }
    
     function confirm()
     {
       const email = document.getElementById("exampleInputmail");
       const password1 = document.getElementById("password1");
       const lemail =document.getElementById("InputEmail1");
       const  lpassword = document.getElementById("InputPassword1");
      
      if(lemail.value==email.value){
       alert("Valid Email");
      }else
      {
        alert("Not the same password");
       return false;
      }
       if(lpassword.value=="")
       {
        alert("Please Fill Password");
        return false;
       }
 
       if(lpassword.value == password1.value)
       {
       alert("Successfully Logged In");
       return true;
       }
       else {
         alert("Login Failed");
         return false;
       }
       
     }
    
    }
    
     
    
    