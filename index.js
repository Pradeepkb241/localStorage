function onsignup(event){
    event.preventDefault();

   console.log(event.target.name.value);
   console.log(event.target.add.value);
   console.log(event.target.email.value);
   console.log(event.target.dt.value);
   console.log(event.target.bonus.value);
   console.log(event.target.about.value);

   let name = document.getElementById('name').value;
   localStorage.setItem('Name:',name);
   let add = document.getElementById('add').value;
   localStorage.setItem('Address:',add);
   let email= document.getElementById('email').value;
   localStorage.setItem('Email:',email);
   let date= document.getElementById('dt').value;
   localStorage.setItem('Date:',dt);
   let bonus = document.getElementById('bonus').value;
   localStorage.setItem('Bonus:',bonus);
   let about= document.getElementById('about').value;
   localStorage.setItem('About Yourself:',about);
   
   
}

