function registerEvent() {
  let formContainer = document.getElementById("eventForm");
  let statusDisplay = document.getElementById("feedback");

  try {

    if (!formContainer.checkValidity()) {
      throw formContainer.reportValidity();
    }

    let studentName = document.getElementById("studentName").value;
    let email = document.getElementById("email").value;
    let age = Number(document.getElementById("age").value);
    let eventName = document.getElementById("eventName").value;

    // Custom Validation Rules
    if (studentName.length < 3) {
      throw "Participant name must be at least 3 characters long.";
    }

    if (age < 8 || age > 18) {
      throw "Participant age must fall between 8 and 18 years.";
    }

    if (eventName === "") {
      throw "Please select a valid event category.";
    }

    // Pending status update
    statusDisplay.className = "";
    statusDisplay.innerHTML = "Validating input parameters and processing pass...";

    setTimeout(function() {
      let passNumber = Math.floor(Math.random() * 9000) + 1000;

      statusDisplay.className = "success";
      statusDisplay.innerHTML =
        "<strong>Registration Approved Successfully!</strong><br>" +
        "Participant Name: " + studentName + "<br>" +
        "Email Address: " + email + "<br>" +
        "Verified Age: " + age + "<br>" +
        "Chosen Activity: " + eventName + "<br>" +
        "Generated Access Pass: PASS-SECURE-" + passNumber;
    }, 2000);

  } catch (errorNotice) {
    statusDisplay.className = "error";

    if (errorNotice !== undefined) {
      statusDisplay.innerHTML = "Validation Error: " + errorNotice;
    } else {
      statusDisplay.innerHTML = "Please ensure all required form entries are completed correctly.";
    }
  }
}

document.getElementById("executeBtn").addEventListener("click", registerEvent);