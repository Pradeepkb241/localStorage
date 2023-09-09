

function onsignup(event) {
    event.preventDefault();

    const name = event.target.name.value;
    const address = event.target.add.value;
    const email = event.target.email.value;
    const date = event.target.dt.value;
    const bonus = event.target.bonus.value;
    const about = event.target.about.value;
  
    const myObj = {
      Name: name,
      Address: address,
      Email: email,
      Date: date,
      Bonus: bonus,
      About: about,
    };
  
    // Retrieve existing objects from localStorage or initialize an empty array
    const localStorageContent = localStorage.getItem('details');
    
    let details;
    if(localStorageContent === null){
        details = [];
    }else{
        details = JSON.parse(localStorageContent);
    }
  
    // Add the new object to the array
    details.push(myObj);
  
    // Store the updated array in localStorage
    localStorage.setItem('details', JSON.stringify(details));
  
    // Optionally, clear the form fields or perform other actions
    event.target.reset();
  
    // To retrieve all stored objects
    const storedObjects = JSON.parse(localStorage.getItem('details'));
    console.log(storedObjects);
  }
  