
function getInfoForm(event) {
    event.preventDefault()
    let nameInput = document.getElementById("name-input").value;
    let phoneInput = document.getElementById("phone-input").value;
    let emailInput = document.getElementById("email-input").value;
    let messageInput = document.getElementById("message-input").value;
    console.log("Name: ", nameInput);
    console.log("Phone: ", phoneInput);
    console.log("Email: ", emailInput);
    console.log("Message: ", messageInput);
}