function validateForm() {
    let phone = document.getElementById("phone").value;
    let ten = document.getElementById("ten").value;
    let tuoi = document.getElementById("tuoi").value;
    let gmail = document.getElementById("gmail").value;
    let gender = document.getElementById("gender").value;
  if (phone == "" || ten == "" || tuoi == "" || gender == "") {
    alert("Name must be filled out");
    return false;
  }
}

function validateForm() {
  let email = document.getElementById("email").value;
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  if(email == "" || name == "" || phone == "") {
      alert("Form must be filled out");
      return false;
  }
}