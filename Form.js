
    function validateForm() {
      let isValid = true;


      document.querySelectorAll('.error').forEach((el) => el.textContent = '');

      const firstname = document.getElementById('firstname').value.trim();
      if (!firstname) {
        document.getElementById('errorFirstname').textContent = 'First name is required.';
        isValid = false;
      }

      const lastname = document.getElementById('lastname').value.trim();
      if (!lastname) {
        document.getElementById('errorLastname').textContent = 'Last name is required.';
        isValid = false;
      }

      const fathername = document.getElementById('fathername').value.trim();
      if (!fathername) {
        document.getElementById('errorFathername').textContent = 'Father\'s name is required.';
        isValid = false;
      }

      const email = document.getElementById('email').value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email) {
        document.getElementById('errorEmail').textContent = 'Email is required.';
        isValid = false;
      } else if (!emailRegex.test(email)) {
        document.getElementById('errorEmail').textContent = 'Enter a valid email address.';
        isValid = false;
      }

      const password = document.getElementById('password').value.trim();
      if (!password) {
        document.getElementById('errorPassword').textContent = 'Password is required.';
        isValid = false;
      } else if (password.length < 6) {
        document.getElementById('errorPassword').textContent = 'Password must be at least 6 characters.';
        isValid = false;
      }

      const gender = document.querySelector('input[name="gender"]:checked');
      if (!gender) {
        document.getElementById('errorGender').textContent = 'Please select a gender.';
        isValid = false;
      }

      return isValid;
    }