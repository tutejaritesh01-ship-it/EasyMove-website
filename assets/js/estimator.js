// =============================
// BookEasyMove Cost Estimator
// Dummy Rates (Can be changed later)
// =============================

const vehicleRates = {
  "Maruti Eeco": { base: 700, perKm: 15 },
  "Tata Ace": { base: 900, perKm: 18 },
  "Mini Truck": { base: 1200, perKm: 22 },
  "14 Feet Truck": { base: 1800, perKm: 28 },
  "17 Feet Truck": { base: 2400, perKm: 35 },
  "22 Feet Truck": { base: 3200, perKm: 45 }
};

const houseCharges = {
  "1 RK": 300,
  "1 BHK": 600,
  "2 BHK": 1000,
  "3 BHK": 1600,
  "4 BHK": 2200,
  "Villa": 3500,
  "Office": 3000
};

document.getElementById("calculateBtn").addEventListener("click", function () {

    const vehicle = document.getElementById("vehicle").value;
    const house = document.getElementById("houseSize").value;
    const distance = parseFloat(document.getElementById("distance").value);
    const moveType = document.getElementById("moveType").value;

    if (!distance || distance <= 0) {
        alert("Please enter a valid distance.");
        return;
    }

    let base = vehicleRates[vehicle].base;
    let kmRate = vehicleRates[vehicle].perKm;

    let transportCost = base + (distance * kmRate);

    transportCost += houseCharges[house];

    if (moveType === "Intercity" && distance > 80) {
        transportCost += 500; // Temporary Toll
    }

    const minEstimate = Math.round(transportCost);
    const maxEstimate = Math.round(transportCost * 1.10);

    document.getElementById("estimatedCost").innerHTML =
        minEstimate.toLocaleString("en-IN") +
        " - " +
        maxEstimate.toLocaleString("en-IN");

    document.getElementById("resultCard").classList.remove("d-none");

    document.getElementById("resultCard").scrollIntoView({
        behavior: "smooth"
    });

});