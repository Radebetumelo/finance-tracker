window.addEventListener('DOMContentLoaded', () => {
  const savedEmail = localStorage.getItem('userEmail');
  if (savedEmail) {
    document.getElementById('login-email').value = savedEmail;
    document.getElementById('rememberMe').checked = true;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-form");
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  toggleButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const loginVisible = loginForm.style.display !== "none";

      if (loginVisible) {
        loginForm.style.display = "none";
        signupForm.style.display = "flex";
      } else {
        loginForm.style.display = "flex";
        signupForm.style.display = "none";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {

 
  const loginBtn = document.querySelector(".login-btn");

  function isValidEmail(email) {
    const emailRejex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRejex.test(email);
  }
  if (loginBtn) {
    loginBtn.addEventListener("click", async () => {
   
      const email = document.getElementById("login-email").value.trim();
      const password = document.getElementById("login-password").value.trim();

      if (email === "" || password === "") {
        alert("Please fill in the details");
        return;
      } 
        
      if(!isValidEmail(email)){
            alert("Email is invalid");
            return;
        } 
          
    
      const rememberMe = document.getElementById('rememberMe').checked;

if (rememberMe) {
  localStorage.setItem('userEmail', email);
} else {
  localStorage.removeItem('userEmail');
}
        

      
    });
  }
});

const containerDiv = document.querySelector(".container");
const toggleLightMode = document.querySelector(".light-mode");
const logoDiv = document.querySelector(".logo-div");


toggleLightMode.addEventListener("click", () => {
    containerDiv.classList.toggle("light")
    logoDiv.classList.toggle("light")
})


 const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });