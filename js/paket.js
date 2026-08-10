/**
 * ============================================
 * DANNET ISP SYSTEM
 * paket.js
 * ============================================
 */

async function loadPaket() {

    const container =
        document.getElementById("paketContainer");

    if (!container) return;


    /* =========================================
       LOADING
    ========================================= */

    container.innerHTML = `
        <p class="loading">
            Memuat paket internet...
        </p>
    `;


    try {

        const result =
            await API.get("paket");


        console.log(
            "RESPONS API PAKET:",
            result
        );


        /* =====================================
           API TIDAK MERESPONS
        ===================================== */

        if (!result) {

            container.innerHTML = `
                <p class="package-error">
                    Gagal memuat paket.
                </p>
            `;

            console.error(
                "API tidak mengembalikan data."
            );

            return;

        }


        /* =====================================
           API ERROR
        ===================================== */

        if (!result.success) {

            container.innerHTML = `
                <p class="package-error">
                    Gagal memuat paket.
                </p>
            `;

            console.error(
                "API paket gagal:",
                result
            );

            return;

        }


        /* =====================================
           VALIDASI DATA
        ===================================== */

        if (!Array.isArray(result.data)) {

            container.innerHTML = `
                <p class="package-error">
                    Data paket tidak valid.
                </p>
            `;

            console.error(
                "result.data bukan array:",
                result.data
            );

            return;

        }


        /* =====================================
           BELUM ADA PAKET
        ===================================== */

        if (result.data.length === 0) {

            container.innerHTML = `
                <p class="package-empty">
                    Belum ada paket internet tersedia.
                </p>
            `;

            return;

        }


        /* =====================================
           GENERATE HTML
        ===================================== */

        let html = "";


        result.data.forEach(
            (paket, index) => {


                const id =
                    paket.id || "";


                const nama =
                    paket.nama || "Paket Internet";


                const speed =
                    paket.speed || "-";


                const harga =
                    Number(
                        paket.harga || 0
                    );


                const deskripsi =
                    paket.deskripsi || "";


                html += `

                    <div
                        class="package-card"
                        data-paket-id="${id}"
                    >

                        <div class="speed">
                            ${speed}
                        </div>


                        <h3>
                            ${nama}
                        </h3>


                        <div class="price">

                            Rp${harga.toLocaleString(
                                "id-ID"
                            )}

                            <span>
                                /Bulan
                            </span>

                        </div>


                        ${
                            deskripsi
                                ? `
                                    <p class="package-description">
                                        ${deskripsi}
                                    </p>
                                  `
                                : ""
                        }


                        <a
                            href="pages/pasang-baru.html?paket=${encodeURIComponent(id)}"
                            class="btn btn-primary"
                        >
                            Pilih Paket
                        </a>

                    </div>

                `;

            }
        );


        /* =====================================
           TAMPILKAN
        ===================================== */

        if (!html) {

            container.innerHTML = `
                <p class="package-empty">
                    Belum ada paket internet tersedia.
                </p>
            `;

            return;

        }


        container.innerHTML =
            html;


    } catch (error) {


        console.error(
            "ERROR LOAD PAKET:",
            error
        );


        container.innerHTML = `
            <p class="package-error">
                Gagal memuat paket.
            </p>
        `;

    }

}


/* ============================================
   LOAD SAAT HALAMAN SIAP
============================================ */

document.addEventListener(
    "DOMContentLoaded",
    loadPaket
);
