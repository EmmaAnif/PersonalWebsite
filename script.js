document.addEventListener("DOMContentLoaded", () => {
  const detailOption = document.getElementById("detailOption");
  const selfDetails = document.getElementById("selfDetails");
  const supplierDetails = document.getElementById("supplierDetails");

  detailOption.addEventListener("change", () => {
    if (detailOption.value === "self") {
      selfDetails.style.display = "block";
      supplierDetails.style.display = "none";
    } else if (detailOption.value === "supplier") {
      selfDetails.style.display = "none";
      supplierDetails.style.display = "block";
    } else {
      selfDetails.style.display = "none";
      supplierDetails.style.display = "none";
    }
  });

  const form = document.getElementById("shipmentForm");
  form.addEventListener("submit", (e) => {
    // For demo, prevent actual submission and go to confirmation page
    e.preventDefault();
    window.location.href = "confirmation.html";
  });
});
