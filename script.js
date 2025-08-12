document.addEventListener("DOMContentLoaded", function () {
    const shipmentOption = document.getElementById("shipment-option");
    const shipmentDetailsSection = document.getElementById("shipment-details-section");
    const supplierDetailsSection = document.getElementById("supplier-details-section");

    // Listen for selection change
    shipmentOption.addEventListener("change", function () {
        if (shipmentOption.value === "self") {
            shipmentDetailsSection.style.display = "block";
            supplierDetailsSection.style.display = "none";
        } else if (shipmentOption.value === "supplier") {
            shipmentDetailsSection.style.display = "none";
            supplierDetailsSection.style.display = "block";
        } else {
            shipmentDetailsSection.style.display = "none";
            supplierDetailsSection.style.display = "none";
        }
    });

    // Simple form submission mock
    const form = document.getElementById("shipment-form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        window.location.href = "confirmation.html";
    });
});
