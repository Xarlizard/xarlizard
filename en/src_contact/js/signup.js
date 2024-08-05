document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission
    let emailValue = document.getElementById("email").value;
    if(emailValue == ""){return false}
    document.getElementById("emailValue").textContent = emailValue;
    document.getElementsByClassName("first")[0].style.display = "none";
    document.getElementsByClassName("second")[0].style.display = "flex";
  });