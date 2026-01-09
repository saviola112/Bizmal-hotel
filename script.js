document.addEventListener("DOMContentLoaded", () => {
  // --- BOOKING CALCULATOR LOGIC ---
  const roomSelect = document.getElementById("roomSelect");
  const nightsInput = document.getElementById("nightsInput");
  const totalPriceDisplay = document.getElementById("totalPrice");

  function calculateTotal() {
    const price = parseInt(roomSelect.value);
    const nights = parseInt(nightsInput.value);
    if (price > 0 && nights > 0) {
      totalPriceDisplay.innerText = (price * nights).toLocaleString();
    } else {
      totalPriceDisplay.innerText = "0";
    }
  }

  roomSelect.addEventListener("change", calculateTotal);
  nightsInput.addEventListener("input", calculateTotal);

  // --- FORM VALIDATION & SUCCESS MESSAGE ---
  const inquiryForm = document.getElementById("inquiryForm");
  const feedback = document.getElementById("formFeedback");

  inquiryForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevents the page from reloading

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name && email) {
      // Hide the form
      inquiryForm.style.display = "none";

      // Show success message
      feedback.innerHTML = `
                <div style="background: #d4edda; color: #155724; padding: 20px; border-radius: 8px; border: 1px solid #c3e6cb; text-align: center;">
                    <h3>Checkmark ✅ Sent Successfully!</h3>
                    <p>Thank you, <strong>${name}</strong>. We have received your inquiry and will email you at <strong>${email}</strong> shortly.</p>
                    <button onclick="location.reload()" style="margin-top:10px; background:#155724; color:white; border:none; padding:5px 15px; border-radius:4px; cursor:pointer;">Send another inquiry</button>
                </div>
            `;
    }
  });
});
