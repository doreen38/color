const myForm = document.getElementById('myform');
let email= document.getElementById("email");
let password = document.getElementById("password")


myForm.addEventListener('submit', function(e){
  e.preventDefault();

  checkInputs();

});

function checkInputs() {
  
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  
  if (emailValue === '') {
    setErrorFor(email, 'Name cannot be blank');
  }else{
    setSuccessFor(email);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank')
  }else{
    setSuccessFor(password);
    window.location.href='http://127.0.0.1:5500/index.html'
  }
}


function setErrorFor(input, message) {
  const formOutline = input.parentElement;
  const small = formOutline.querySelector('small');
  formOutline.className = 'form-outline error'
  small.innerText = message;
}

function setSuccessFor(input) {
  const formOutline = input.parentElement;
  formOutline.className = 'form-outline success'
}
// End of login form.




// const Fashion =[
//     {
//       name: "Scot Woman",
//       image: "https://i.pinimg.com/736x/7f/44/60/7f4460e9d86213f8ae86458420e038ad.jpg",
//       price: "$8.90",
//       des: "Pay less, stay in fashion!",  
//     },
//     {
//         name: "zneey",
        
//         image: "https://i.ytimg.com/vi/J52cBZ1BG2s/maxresdefault.jpg",
//         des : "Dress good, because you deserve it!",
//     },

//     {
//         name: "Zaineey",
//         image: "https://1.bp.blogspot.com/-iiSaOnTmBDs/Xxat1BO28KI/AAAAAAAADEk/YqQuLHn8N5QAdsYSqakRdQLtDF_YnY98wCLcBGAsYHQ/s400/9jaworkchic___B1qaeHGlJkP___.jpg",
//         price: ["$9.99", "for elegant and classy for your look",],
//       },
//       {
//         name: "vintage bedezeed",
//         image: "https://1.bp.blogspot.com/-hcL04MViVzg/YHyLxZsmcDI/AAAAAAAABhE/PtHrawbJOh01lrjUem-5H-yPO92r0oZaQCLcBGAsYHQ/s1346/corporate%2Bdress%2B%25288%2529.jpg",
//         price: "$2.55",
//         des: "An article of clothing, usually worn by women and girls, that hangs from the waist and covers the lower part of the body.",
//     }, 
//     {
//         name: "vintage bedezeed",
//         image: "https://4.bp.blogspot.com/-krVqPUY4Yf8/W7rhVa7T6bI/AAAAAAAABUE/SxZHUmbHAX0NujqE61-7-vi2UerNUz4AQCLcBGAs/w1200-h630-p-k-no-nu/Corporate%2BGowns%2BStyle%2BFor%2BOffice%2BWear.jpg",
//         price: "$6.89",
//         des: "Good look to good Work",
//     },
//     {
//         name: "Women Sequin",
//         image: "https://i.pinimg.com/736x/77/be/a0/77bea073d31b85e6bf86b6d24358ddff.jpg",
//         price: "$5.99",
//         des : "Been there, the style that!",
//     },   
//     {
//         name: "Glamaguga",
//         image: "https://i.pinimg.com/474x/26/83/f6/2683f67c15c35c1fa999eebefed5b710.jpg",
//         price: "$10.44",
//         des: "FFF Fashion, fun & friends",
//     }
// ]



// let container = document.getElementById("container");

// Fashion.forEach(function(el) {
//     console.log(el.price);
//     let Fashion =`
//     <div class="card-group d-flex mb-3 col-md-5" style="wdith:20rem; background-color:lightblue;" >
//   <div class="row row-cols-1 row-cols-md-5 g-4">
//     <div class="col-md-4">
//       <img src="${el.image}" class="img-fluid rounded-start" alt="...">
//     </div>
//     <div class="col-md-6 m-lg-auto mb-4 text-center">
//       <div class="card-body">
//         <h5 class="card-title">${el.name}</h5>
//         <p class="card-text">${el.price}</p>
//         <p class="card-text">${el.des}</p>
//       </div>
//     </div>
//   </div>
// </div>`
     
    
    
//       container.innerHTML +=Fashion
    
// });
