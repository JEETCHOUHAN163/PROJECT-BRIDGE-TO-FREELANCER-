document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting by default

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Basic validation logic
        if (email === '' || password === '') {
            alert('Please fill in both email and password fields.');
            return;
        }

        // Basic email format validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Basic password length check
        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
        }

        // If validation passes, proceed with form submission
        alert('Login successful!');
        form.submit(); // This will redirect to home.html as intended
    });
});
