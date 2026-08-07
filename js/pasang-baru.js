const form = document.getElementById("formPasangBaru");

if (form) {

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const btn = form.querySelector("button");

        btn.disabled = true;
        btn.innerHTML = "Mengirim...";

        const data = Object.fromEntries(
            new FormData(form)
        );

        const result = await API.post("pasangbaru", data);

        if (result.success) {

            alert(
                "✅ Permohonan berhasil dikirim.\n\n" +
                "Nomor Registrasi : " + result.data.id
            );

            form.reset();

        } else {

            alert(result.message);

        }

        btn.disabled = false;
        btn.innerHTML = "Kirim Permohonan";

    });

}