  const form = document.getElementById("contact");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function(event){
      event.preventDefault();

      successMessage.innerHTML = "Message sent successfully!";

      form.reset();
    });