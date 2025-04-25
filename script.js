function calculatePrice() {
  const height = parseFloat(document.getElementById('height').value);
  const width = parseFloat(document.getElementById('width').value);
  const liggers = parseInt(document.getElementById('liggers').value);
  const profile = document.getElementById('profile').value;

  if (isNaN(height) || isNaN(width) || isNaN(liggers)) {
    alert("Vul alle velden correct in.");
    return;
  }

  // staalprijzen per meter
  const prices = {
    '40x10': 4.80,
    '40x15': 5.60
  };

  const pricePerMeter = prices[profile];

  // totale lengte staal in mm
  const totalLengthMm = (2 * height) + (2 * width) + (liggers * width);

  // omrekenen naar meters
  const totalLengthM = totalLengthMm / 1000;

  // totaalprijs staal
  const totalPrice = totalLengthM * pricePerMeter;

  document.getElementById('result').innerHTML = `
    Totale staal lengte: ${totalLengthM.toFixed(2)} meter<br>
    Staalprijs: €${totalPrice.toFixed(2)}
  `;
}
