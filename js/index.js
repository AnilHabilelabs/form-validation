function validation(e) {
  e.preventDefault();
  let languagesArr = [];
  let radioArr = [];
  if (e.target.name1.value.includes(" ")) {
    alert("Enter Valid Name Without Space");
    return false;
  }

  if (e.target.name1.value=="") {
    alert("Name Can't be Empty");
    return false;
  }

  // number validation
  if (isNaN(e.target.mobile.value)) {
    alert("use Numeric value");
    return false;
  }
  if (e.target.mobile.value=="") {
    alert("Mobile number can't be empty");
    return false;
  }

  if (e.target.mobile.value.length<10) {
    alert("Please Enter a valid Number");
    return false;
  }

  //  Email validation
  if (!e.target.email.value.includes('@')) {
    alert("Not Right Email");
    return false;
  }
  if (!e.target.email.value.includes('.')) {
    alert("Not Right Email");
    return false;
  }
  // Message Validation
  if (e.target.message.value == "") {
    alert("Please Enter Message");
    return false;
  }

  // Fav Music Validation
  if(!e.target.music.value){
    alert("Please Select Your Fav Music Category");
    return true;
  }

  // Radio and CheckBox Validation
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
