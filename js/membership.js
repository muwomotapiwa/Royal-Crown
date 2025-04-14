document.getElementById('membership-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Prepare data object
  const data = {
    fullName: this.fullName.value.trim(),
    email: this.email.value.trim(),
    mobile: this.mobile.value.trim(),
    address: this.address.value.trim()
  };

  // Send data to Google Apps Script
  fetch('https://script.google.com/macros/s/AKfycbxauQoymFoUv9GVoQbyUDPj7WbMi_pkuqgRtjcxMrl-OkoK_1ZIYab6R_X4ufuKVqrg6w/exec', {
    method: 'POST',
    mode: 'no-cors', // ✅ Important: prevents CORS errors but disables access to response
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  // ✅ Inform user and redirect immediately
  alert('Thank you! Your membership form was submitted successfully.');
  this.reset();
  window.location.href = 'index.html';
});
