/*  TO-DO APP */
function showList() {
    let items = ["Maths Exercise 1", "English Quiz", "Note on Physics"];
    let date = new Date();
    let day = date.getDay();
    let today = "";
    let options = {
      weekday: "long",
      day: "numeric",
      month: "long",
    };
  
    today = date.toLocaleDateString("en-US", options);
    document.getElementById("headerTitle").innerHTML = today;
  
    let toDoList = document.getElementById("studentList");
  
    items.forEach((x) => {
      let doc = `<div class = "item"><input type = "checkbox"><p>${x}</p></div`;
      toDoList.insertAdjacentHTML("beforeend", doc);
    });
  }
  showList();