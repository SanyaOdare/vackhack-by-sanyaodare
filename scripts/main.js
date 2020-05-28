'use strict';

// Webinar Form

(function() {
    
    window.addEventListener('load', function() {
      // Fetch forms and apply validation
    var forms = document.getElementsByClassName('needs-validation');
      // Loop over and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
        }, false);
    });
    }, false);
})();