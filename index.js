function sendMail() {
    var params = {
        from_name: document.getElementById("fullname").value,
        email_id: document.getElementById("email").value,
        message: document.getElementById("msg").value
    };

    console.log(params);

    emailjs.send("service_mw4idz4", "template_y2wrso9", params)
    .then(function(response) {
        if(response.status === 200) {
            swal("Successful", "Your message has been sent!", "success");
        } else {
            swal("Error", "There was an issue sending the message.", "error");
        }
    })
    .catch(function(error) {
        console.error("Error:", error);
        swal("Error", "Failed to send message. Please try again.", "error");
    });
}
