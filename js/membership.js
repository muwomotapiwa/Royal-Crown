document.getElementById('membership-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const data = {
    fullName: this.fullName.value,
    email: this.email.value,
    mobile: this.mobile.value,
    address: this.address.value
  };

  fetch('https://script.google.com/macros/s/AKfycbxauQoymFoUv9GVoQbyUDPj7WbMi_pkuqgRtjcxMrl-OkoK_1ZIYab6R_X4ufuKVqrg6w/exec', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(result => {
    alert('Form submitted successfully!');
    this.reset();
    window.location.href = 'index.html'; // ✅ Redirect after submission
  })
  .catch(error => {
    alert('Submission failed. Please try again.');
    console.error(error);
  });
});
