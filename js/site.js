
// Display the Message the user entered.
function displayMessage() {
    let inputBox = document.getElementById('message');
    let message = inputBox.value;

    Swal.fire({
        title: "DigitCentury",
        text: message,
        icon: "success",
        backdrop: false
      });

}