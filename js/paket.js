/**
 * ============================================
 * DANNET ISP SYSTEM
 * paket.js
 * ============================================
 */

async function loadPaket() {

    const result = await API.get("paket");

    const container = document.getElementById("paketContainer");

    if (!container) return;

    if (!result.success) {

        container.innerHTML = "<p>Gagal memuat paket.</p>";

        return;

    }

    let html = "";

    result.data
        .sort((a, b) => Number(a.urutan) - Number(b.urutan))
        .forEach((paket) => {

            const populer =
                paket.populer &&
                paket.populer.toLowerCase() === "ya";

            const fitur = paket.fitur
                ? paket.fitur.split(",")
                : [];

            html += `
            <div class="package-card ${populer ? "popular" : ""}">

                ${populer ? `
                <div class="badge">
                    ⭐ PALING POPULER
                </div>` : ""}

                <div class="speed">
                    ${paket.speed}
                </div>

                <h3>${paket.nama}</h3>

                <div class="price">
                    Rp${Number(paket.harga).toLocaleString("id-ID")}
                    <span>/Bulan</span>
                </div>

                <ul>

                    ${fitur.map(f => `<li>✔ ${f}</li>`).join("")}

                </ul>

                <a href="pages/pasang-baru.html" class="btn btn-primary">
                    Pilih Paket
                </a>

            </div>
            `;

        });

    container.innerHTML = html;

}

document.addEventListener("DOMContentLoaded", loadPaket);