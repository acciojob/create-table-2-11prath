function createTable() {
  // Get user input for rows and columns
  let rn = prompt("Input number of rows");
  let cn = prompt("Input number of columns");

  // Convert to numbers
  rn = parseInt(rn);
  cn = parseInt(cn);

  // Validate input
  if (isNaN(rn) || isNaN(cn)) {
    alert("Please enter valid numeric values for rows and columns.");
    return;
  }

  if (rn <= 0 || cn <= 0) {
    alert("Number of rows and columns must be greater than zero.");
    return;
  }

  // Get the table element
  const table = document.getElementById("myTable");

  // Clear existing table content
  table.innerHTML = "";

  // Create rows and columns
  for (let i = 0; i < rn; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < cn; j++) {
      const cell = document.createElement("td");
      cell.textContent = `Row-${i} Column-${j}`;
      row.appendChild(cell);
    }

    table.appendChild(row);
  }
}
