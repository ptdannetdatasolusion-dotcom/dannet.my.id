/**
 * ============================================
 * DANNET ISP SYSTEM
 * pasang-baru.js
 * ============================================
 */


/* ============================================
   LOAD PAKET
============================================ */

async function loadPaketPasangBaru() {

    const select =
        document.getElementById("paket");

    if (!select) return;


    select.innerHTML = `
        <option value="">
            Memuat paket...
        </option>
    `;


    try {

        const result =
            await API.get("paket");


        console.log(
            "PAKET PASANG BARU:",
            result
        );


        if (
            !result ||
            !result.success
        ) {

            select.innerHTML = `
                <option value="">
                    Gagal memuat paket
                </option>
            `;

            return;

        }


        if (
            !Array.isArray(result.data) ||
            result.data.length === 0
        ) {

            select.innerHTML = `
                <option value="">
                    Belum ada paket tersedia
                </option>
            `;

            return;

        }


        select.innerHTML = `
            <option value="">
                -- Pilih Paket Internet --
            </option>
        `;


        result.data.forEach(
            function(paket) {

                const option =
                    document.createElement(
                        "option"
                    );


                /*
                    value = ID paket

                    Contoh:
                    PKT01
                    PKT02
                    PKT03
                */

                option.value =
                    paket.id;


                option.textContent =
                    `${paket.nama} - ${paket.speed} - Rp${Number(
                        paket.harga || 0
                    ).toLocaleString("id-ID")}/Bulan`;


                select.appendChild(
                    option
                );

            }
        );


        /* =====================================
           CEK PAKET DARI URL
           
           Contoh:
           pasang-baru.html?paket=PKT03
        ===================================== */

        const params =
            new URLSearchParams(
                window.location.search
            );


        const paketURL =
            params.get("paket");


        if (paketURL) {

            const exists =
                Array.from(
                    select.options
                ).some(
                    function(option) {

                        return option.value ===
                               paketURL;

                    }
                );


            if (exists) {

                select.value =
                    paketURL;

            }

        }


    } catch (error) {

        console.error(
            "LOAD PAKET PASANG BARU ERROR:",
            error
        );


        select.innerHTML = `
            <option value="">
                Gagal memuat paket
            </option>
        `;

    }

}


/* ============================================
   SUBMIT FORM
============================================ */

async function submitPasangBaru(event) {

    event.preventDefault();


    const form =
        event.target;


    const button =
        form.querySelector(
            'button[type="submit"]'
        );


    if (button) {

        button.disabled = true;

        button.textContent =
            "Mengirim...";

    }


    try {

        const formData =
            new FormData(form);


        const data = {

            nama:
                formData.get("nama"),

            whatsapp:
                formData.get("whatsapp"),

            email:
                formData.get("email"),

            alamat:
                formData.get("alamat"),

            desa:
                formData.get("desa"),

            kecamatan:
                formData.get("kecamatan"),

            maps:
                formData.get("maps"),

            paket:
                formData.get("paket"),

            tanggal:
                formData.get("tanggal"),

            catatan:
                formData.get("catatan")

        };


        console.log(
            "DATA PASANG BARU:",
            data
        );


        const result =
            await API.post(
                "pasangBaru",
                data
            );


        console.log(
            "RESPONS PASANG BARU:",
            result
        );


        if (
            !result ||
            !result.success
        ) {

            alert(
                result?.message ||
                "Gagal mengirim permohonan."
            );

            return;

        }


        alert(
            "Permohonan pemasangan berhasil dikirim. Tim DANNET akan segera menghubungi Anda."
        );


        form.reset();


        /*
          Setelah reset, cek kembali
          apakah ada paket dari URL.
        */

        await loadPaketPasangBaru();


    } catch (error) {

        console.error(
            "SUBMIT PASANG BARU ERROR:",
            error
        );


        alert(
            "Terjadi kesalahan saat mengirim permohonan."
        );


    } finally {

        if (button) {

            button.disabled = false;

            button.textContent =
                "Kirim Permohonan";

        }

    }

}


/* ============================================
   INIT
============================================ */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadPaketPasangBaru();


        const form =
            document.getElementById(
                "pasangBaruForm"
            );


        if (form) {

            form.addEventListener(
                "submit",
                submitPasangBaru
            );

        }

    }
);
