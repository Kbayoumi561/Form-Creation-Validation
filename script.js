// Run the code when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Step 2: Form Selection
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Step 3: Form Submission and Event Prevention
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting to the server

        // Step 4: Input Retrieval and Trimming
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Step 5: Validation Logic
        let isValid = true; // Tracks the overall validation status
        let messages = []; // Array to store validation error messages

        // Username Validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email Validation
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Password Validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Step 6: Displaying Feedback
        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green for success
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545"; // Red for error messages
        }
    });
});
