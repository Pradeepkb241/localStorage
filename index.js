function onsignup(event){
    event.preventDefault();

   console.log(event.target.name.value);
   console.log(event.target.add.value);
   console.log(event.target.email.value);
   console.log(event.target.dt.value);
   console.log(event.target.bonus.value);
   console.log(event.target.about.value);



   let myObj = {

   Name : document.getElementById('name').value,
   
   Address : document.getElementById('add').value,
   
   Email: document.getElementById('email').value,
   
   Date: document.getElementById('dt').value,
   
   Bonus : document.getElementById('bonus').value,
   
   About: document.getElementById('about').value,

   }
    
   let myObj_convertToString =  JSON.stringify(myObj);
   localStorage.setItem('myObj' ,myObj_convertToString);

   
   let myObj_converToObject = JSON.parse(localStorage.getItem('myObj'));

   console.log(myObj_converToObject);
}

