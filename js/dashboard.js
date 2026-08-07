async function loadDashboard() {

    // Total Paket
    const paket = await API.get("paket");

    if (paket.success) {

        document.getElementById("totalPaket").textContent =
            paket.data.length;

    }

    // Total Pelanggan
    const pelanggan = await API.get("pelanggan");

    if (pelanggan.success) {

        document.getElementById("totalPelanggan").textContent =
            pelanggan.data.length;

    }

}

document.addEventListener("DOMContentLoaded", loadDashboard);