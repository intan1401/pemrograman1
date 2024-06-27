// Function untuk membeli produk dan menyimpan data ke localStorage
function buyProduct(productName, price) {
  const username = prompt("Enter your username:");

  if (username) {
    const paymentMethod = prompt(
      `You are buying ${productName} for Rp ${price}.\nChoose your payment method: Dana, Transfer Bank, OVO`
    );

    const saleData = {
      username: username,
      product: productName,
      price: price,
      paymentMethod: paymentMethod,
      date: new Date().toISOString(),
    };

    // Ambil data existing dari localStorage atau inisialisasi array kosong
    const salesData = JSON.parse(localStorage.getItem("salesData")) || [];
    salesData.push(saleData);

    // Simpan kembali data ke localStorage
    localStorage.setItem("salesData", JSON.stringify(salesData));

    alert(
      `Thank you for your purchase! Your payment method is ${paymentMethod}.`
    );

    // Opsi: Redirect ke halaman hasil_penjualan.html
    window.location.href = "hasil_penjualan.html";
  } else {
    alert("Username is required to complete the purchase.");
  }
}

// Function untuk menampilkan data penjualan di halaman hasil_penjualan.html
function loadSalesData() {
  const salesData = JSON.parse(localStorage.getItem("salesData")) || [];

  const tableBody = document.querySelector("#salesTable tbody");
  tableBody.innerHTML = ""; // Kosongkan baris tabel yang ada sebelumnya

  if (salesData.length === 0) {
    tableBody.innerHTML =
      '<tr><td colspan="5" class="no-data">No sales data available.</td></tr>';
  } else {
    salesData.forEach((sale) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${sale.username}</td>
                <td>${sale.product}</td>
                <td>Rp ${sale.price.toLocaleString()}</td>
                <td>${sale.paymentMethod}</td>
                <td>${new Date(sale.date).toLocaleString()}</td>
            `;
      tableBody.appendChild(row);
    });
  }
}

// Panggil fungsi loadSalesData saat halaman dimuat
window.onload = loadSalesData;
