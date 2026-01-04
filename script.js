console.log("nabiya");

  let userName =document.getElementById("userName")
 let userEmail =document.getElementById("userEmail")

 
  let userNamedash =document.getElementById("userNamedash")
 let  userEmaildash=document.getElementById("userEmaildash")


 function inputRender(){
  console.log(userName.value)
  console.log(userEmail.value)



  localStorage.setItem("userName", userName.value)
  localStorage.setItem("userEmail", userEmail.value)


  userName.value="";
  userEmail.value="";
 }




 function dashre(){

   
   let storedName = localStorage.getItem("userName");
   let storedEmail = localStorage.getItem("userEmail");
   

    userNamedash.innerText = "User Name: " + storedName;
    userEmaildash.innerText = "User Email: " + storedEmail;
  
 }
dashre();


