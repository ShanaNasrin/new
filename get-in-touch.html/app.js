(function() {
    emailjs.init("wiGFDzd8m5YZg5Svg"); // Replace with your actual User ID
})();

const form = document.getElementById('contact-form');

  // Add event listener for form submission
  form.addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send email using EmailJS
    emailjs.send("service_7hd40ro", "template_awaa9k7", {
        from_name: name,
        from_email: email,
        message: message
    }).then(
        function(response) {
            // Success
            alert('Message sent successfully!');
            
            // Reset form
            form.reset();
            
            // Reset button
            submitButton.textContent = 'Send';
            submitButton.disabled = false;
        },
        function(error) {
            // Error
            console.log('Failed...', error);
            alert('Failed to send message. Please try again.');
            
            // Reset button
            submitButton.textContent = 'Send';
            submitButton.disabled = false;
        }
    );
});

