
//LOGIN
let userData = [{ username: "test", password: "test" }];

let login = document.getElementById("btn-login");

login.addEventListener("click", () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  for (let i = 0; i < userData.length; i++) {
    if (email === userData[i].username && password === userData[i].password) {
      //Load homepage
    }
  }
});

//REGISTER
