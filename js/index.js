function validation(e) {
  e.preventDefault();
  console.log(e);
  let languagesArr = [];
  let radioArr = [];
  if (e.target.name1.value.includes(" ")) {
    alert("do not use space");
    return false;
  }

  if (isNaN(e.target.mobile.value)) {
    alert("use Numeric value");
    return false;
  }

  if (e.target.message.value == "") {
    alert("Please Enter Message");
    return false;
  }

  for (i = 0; i < e.target.length; i++) {
    if (e.target[i].type == "checkbox") {
      if (e.target[i].checked) {
        languagesArr.push(e.target[i].value);
      }
    }
    if (e.target[i].type == "radio") {
      if (e.target[i].checked) {
        radioArr.push(e.target[i].value);
      }
    }
  }
  if (radioArr.length == 0) {
    alert("select gender");
    return false;
  }
  if (languagesArr.length == 0) {
    alert("select one language");
    return false;
  }

  getInfo(e);
}

function getInfo(e) {
  for (i = 0; i < e.target.length; i++) {
    if (e.target[i].type == "radio" || e.target[i].type == "checkbox") {
      if (e.target[i].checked) {
        // document.write(e.target[i].value + "</br>");
        console.log(e.target[i].value);
      }
    } else {
      // document.write(e.target[i].value + "</br>");
      console.log(e.target[i].value);
    }
  }
}
