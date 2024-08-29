// JavaScript functions for calculation
function calculate() {
  var height_inches = parseFloat(
    document.getElementById("height_inches").value
  );
  var wrist = parseFloat(document.getElementById("wrist").value);
  var gender = parseInt(document.getElementById("gender").value);
  var body = parseInt(document.getElementById("body").value);
  var growth = parseInt(document.getElementById("growth").value);

  // Validate inputs
  if (
    isNaN(height_inches) ||
    isNaN(wrist) ||
    isNaN(gender) ||
    isNaN(body) ||
    isNaN(growth)
  ) {
    alert("Please fill out all fields.");
    return;
  }

  var club_max;

  // Calculation based on height_inches
  if (height_inches < 74) {
    if (height_inches > 58) {
      club_max = (wrist * 1.34 + height_inches * 0.65) / 2;
    } else if (height_inches > 52) {
      club_max = (wrist * 1.38 + height_inches * 0.68) / 2;
    } else if (height_inches > 48) {
      club_max = (wrist * 1.45 + height_inches * 0.7) / 2;
    } else {
      club_max = (wrist * 1.49 + height_inches * 0.72) / 2;
    }

    // Adjust club_max based on gender
    if (gender === 2) club_max -= 0.6;

    // Adjust club_max based on body type
    if (body === 1) club_max -= 0.25;
    else if (body === 3) club_max += 0.5;

    // Adjust club_max based on growth expectation
    if (growth === 1) {
      if (height_inches > 60) club_max += 1;
      else if (height_inches > 50) club_max += 1.25;
      else club_max += 1.5;
    } else if (growth === 2) {
      if (height_inches > 60) club_max += 1.5;
      else if (height_inches > 50) club_max += 2;
      else club_max += 2.25;
    }

    // Limit club_max to a maximum of 45
    if (club_max > 45) club_max = 45;
  } else {
    club_max = 46;
  }

  // Display the results
  document.getElementById("output").innerHTML = "";
  if (club_max <= 35) {
    seven_peices_set(club_max);
  } else {
    full_set(club_max);
  }
}

// Function to output results to the screen
function output_to_screen(label, value, id) {
  var outputDiv = document.getElementById("output");
  var p = document.createElement("p");
  p.innerHTML = label + value;
  p.id = "p" + id;
  outputDiv.appendChild(p);
}

// Function to calculate and display seven pieces set
function seven_peices_set(club_max) {
  output_to_screen(
    "Driver Length: ",
    (Math.round(club_max * 4) / 4).toFixed(2),
    "driverlength"
  );
  output_to_screen(
    "Fairway wood length: ",
    (Math.round((club_max - 1) * 4) / 4).toFixed(2),
    "fairwaywoodlength"
  );
  output_to_screen(
    "Hybrid wood length: ",
    (Math.round((club_max - 2) * 4) / 4).toFixed(2),
    "hybridwoodlength"
  );
  output_to_screen(
    "7 Iron length: ",
    (Math.round(club_max * 0.84 * 4) / 4).toFixed(2),
    "ironlength7"
  );
  output_to_screen(
    "8 Iron Length: ",
    (Math.round(club_max * 0.825 * 4) / 4).toFixed(2),
    "ironlength8"
  );
  output_to_screen(
    "Wedge length: ",
    (Math.round(club_max * 0.79 * 4) / 4).toFixed(2),
    "wedgelength"
  );
  output_to_screen(
    "Putter length: ",
    (Math.round(club_max * 0.78 * 4) / 4).toFixed(2),
    "putterlength"
  );
}

// Function to calculate and display full set
function full_set(club_max) {
  output_to_screen(
    "Driver Length: ",
    (Math.round(club_max * 4) / 4).toFixed(2),
    "driverlength"
  );
  output_to_screen(
    "Fairway wood length: ",
    (Math.round((club_max - 1) * 4) / 4).toFixed(2),
    "fairwaywoodlength"
  );
  output_to_screen(
    "Hybrid wood length: ",
    (Math.round((club_max - 2) * 4) / 4).toFixed(2),
    "hybridwoodlength"
  );
  output_to_screen(
    "7 Iron length: ",
    (Math.round(club_max * 0.84 * 4) / 4).toFixed(2),
    "ironlength7"
  );
  output_to_screen(
    "8 Iron Length: ",
    (Math.round(club_max * 0.825 * 4) / 4).toFixed(2),
    "ironlength8"
  );
  output_to_screen(
    "Wedge length: ",
    (Math.round(club_max * 0.79 * 4) / 4).toFixed(2),
    "wedgelength"
  );
  output_to_screen(
    "Putter length: ",
    (Math.round(club_max * 0.78 * 4) / 4).toFixed(2),
    "putterlength"
  );
}
