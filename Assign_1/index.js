function myFunction() {
    var nam = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var yearOfBirth = document.getElementById('year').value;
    var line1 = document.getElementById('line1').value;
    var line2 = document.getElementById('line2').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var zip = document.getElementById('zip').value;

    // Email validation
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    // Phone number validation
    if (!validatePhoneNumber(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // Address
    var address = line1 + ', ' + line2 + ', ' + city + ', ' + state + ',Pincode: ' + zip;

    // Calculate age
    var currentYear = new Date().getFullYear();
    var age = currentYear - parseInt(yearOfBirth);

    alert("Registration Details:\n" +
        "------------------------\n" +
        "Name: " + nam + '\n' +
        "Email: " + email + '\n' +
        "Phone: " + phone + '\n' +
        "Age: " + age + ' years\n' +
        "Address: " + address);
}

// Function to validate email format
function validateEmail(email) {
    // A simple regex for email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function validatePhoneNumber(phone) {
    // A simple regex for basic phone number validation
    var phoneRegex = /^[0-9]{10}$/;
    // Alternatively, you can use a more lenient regex like /^\d{10}$/ to allow any digits

    return phoneRegex.test(phone);
}


function populateDate() {
    let d = new Date().getFullYear();
    console.log(d);
    let select = document.getElementById('year');
    for (var i = d; i > d - 50; i--) {
        var op = document.createElement("OPTION");
        op.setAttribute("value", i);
        var optiontext = document.createTextNode(i);
        op.appendChild(optiontext);

        select.appendChild(op);
    }
}

function populateMonths() {
    let mon = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", 'Aug', 'Sept', "Oct", "NOv", "Dec"];
    let smon = document.getElementById('month');
    for (var i = 0; i < 12; i++) {
        var op = document.createElement("OPTION");
        op.setAttribute("value", mon[i]);
        var optiontext = document.createTextNode(mon[i]);
        op.appendChild(optiontext);
        smon.appendChild(op);
    }
}

function populateDays() {
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var daySelect = document.getElementById("day");
    var daysInMonth = new Date(year, monIndex(month) + 1, 0).getDate();

    // Clear existing options
    daySelect.innerHTML = "";

    for (var i = 1; i <= daysInMonth; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", i);
        var op = document.createTextNode(i);
        option.appendChild(op);
        daySelect.appendChild(option);
    }
}

// Utility function to get the index of the month in the array
function monIndex(month) {
    return ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", 'Aug', 'Sept', "Oct", "NOv", "Dec"].indexOf(month);
}

window.onload = function () {
    populateDate();
    populateMonths();
    populateDays();
};

// Add event listeners to year and month dropdowns to update days when changed
let yid = document.getElementById("year");
let mid = document.getElementById("month");
yid.addEventListener("change", populateDays);
mid.addEventListener("change", populateDays);
