document.addEventListener("DOMContentLoaded", function () {
  const sections = {
    promosiProductMenu: "promosiProductContent",
    stockIphoneMenu: "stockIphoneContent",
    hasilPenjualanMenu: "hasilPenjualanContent",
    customerPembeliMenu: "customerPembeliContent",
    transaksiPenjualanMenu: "transaksiPenjualanContent",
  };

  Object.keys(sections).forEach((menuId) => {
    document.getElementById(menuId).addEventListener("click", function () {
      document.querySelectorAll(".content-section").forEach((section) => {
        section.classList.remove("active");
      });

      document.getElementById(sections[menuId]).classList.add("active");

      document.querySelectorAll("nav.menu ul li a").forEach((link) => {
        link.classList.remove("active");
      });

      this.classList.add("active");
    });
  });

  // Show the first content section by default
  document.getElementById("promosiProductContent").classList.add("active");
  document.getElementById("promosiProductMenu").classList.add("active");
});

// Simpan pembelian ke localStorage
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

    // Get existing sales data from localStorage, or initialize as empty array
    const salesData = JSON.parse(localStorage.getItem("salesData")) || [];
    salesData.push(saleData);
    localStorage.setItem("salesData", JSON.stringify(salesData));

    alert(
      `Thank you for your purchase! Your payment method is ${paymentMethod}.`
    );

    // Optionally, redirect to hasil_penjualan.html
    window.location.href = "hasil_penjualan.html";
  } else {
    alert("Username is required to complete the purchase.");
  }
}
