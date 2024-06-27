// Ambil data dari localStorage
const savedSalesData = JSON.parse(localStorage.getItem("salesData"));

// Gunakan data yang telah diambil
console.log(savedSalesData); // Output: [{ date: "2024-06-19", quantitySold: 5 }, { date: "2024-06-18", quantitySold: 8 }, { date: "2024-06-17", quantitySold: 12 }]
