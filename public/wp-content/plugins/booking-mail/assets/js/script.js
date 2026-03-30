document.addEventListener('DOMContentLoaded', function() {
    const serviceSelect = document.getElementById('service_type');
    const allFields = document.querySelectorAll('.service_fields');
    const arrivalFields = document.getElementById('arrival_fields');
    const departureFields = document.getElementById('departure_fields');

    serviceSelect.addEventListener('change', function() {
        allFields.forEach(f => f.style.display = 'none'); // Hide all service fields initially
        const selected = this.value;

        // Display relevant fields based on selected service type
        if (selected === 'arrival') {
            arrivalFields.style.display = 'block';
        }
        if (selected === 'departure') {
            departureFields.style.display = 'block';
        }
    });

    // Initialize intl-tel-input plugin for phone number input with country code
    const phoneInput = document.getElementById('phone');
    const iti = window.intlTelInput(phoneInput, {
        preferredCountries: ["bd"], // Default country set to Bangladesh
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js" // Required for phone number validation
    });

    // Validate phone number when input changes
    phoneInput.addEventListener('input', function() {
        if (iti.isValidNumber()) {
            console.log("Valid phone number:", iti.getNumber());
        } else {
            console.log("Invalid phone number");
        }
    });
});