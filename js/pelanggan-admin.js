let pelangganList = [];

async function loadPelanggan() {

    const result = await API.get("pelanggan");

    const tbody = document.getElementById("pelangganTable");

    if (!result.success) {

        tbody.innerHTML = "<tr><td colspan='6'>Gagal mengambil data.</td></tr>";

        return;

    }

    pelangganList = result.data;

    renderTable(pelangganList);

}

function renderTable(data) {

    const tbody = document.getElementById("pelangganTable");

    let html = "";

    data.forEach(item => {

        html += `
        <tr>

            <td>${item.id}</td>
            <td>${item.nama}</td>
            <td>${item.hp || item.whatsapp || "-"}</td>
            <td>${item.paket}</td>
            <td>${item.status}</td>

        <td>

            <button onclick="lihatDetail('${item.id}')">
                Detail
            </button>

            <button onclick="openEdit('${item.id}')">
                Edit
            </button>

            <button onclick="hapusPelanggan('${item.id}')">
                Hapus
            </button>

            <button onclick="waPelanggan('${item.hp || item.whatsapp}')">
                WA
            </button>

        </td>

        </tr>
        `;

    });

    tbody.innerHTML = html;

}

// DETAIL
function lihatDetail(id) {

    const data = pelangganList.find(x => x.id === id);

    const modal = document.getElementById("modalDetail");

    const content = document.getElementById("detailContent");

    content.innerHTML = `
        <p><b>ID:</b> ${data.id}</p>
        <p><b>Nama:</b> ${data.nama}</p>
        <p><b>HP:</b> ${data.hp || data.whatsapp || "-"}</p>
        <p><b>Paket:</b> ${data.paket}</p>
        <p><b>Alamat:</b> ${data.alamat}</p>
        <p><b>Status:</b> ${data.status}</p>
    `;

    modal.style.display = "block";

}


// WHATSAPP
function waPelanggan(hp) {

    if (!hp) {
        alert("Nomor WhatsApp tidak tersedia");
        return;
    }

    const nomor = String(hp)
        .replace(/[^0-9]/g, "")
        .replace(/^0/, "62");

    window.open(
        `https://wa.me/${nomor}?text=Halo%20DANNET%2C%20saya%20ingin%20bertanya`,
        "_blank"
    );

}

document.addEventListener(
    "DOMContentLoaded",
    loadPelanggan
);


function closeModal() {
    document.getElementById("modalDetail").style.display = "none";
}

function outsideClick(e) {
    const modal = document.getElementById("modalDetail");

    if (e.target === modal) {
        modal.style.display = "none";
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        closeModal();
    }
});


async function hapusPelanggan(id){

    if(!confirm("Yakin ingin menghapus pelanggan ini?"))
        return;

    const res = await deletePelanggan(id);

    alert(res.message);

    loadPelanggan();

}


function openEdit(id){

    const data = pelangganList.find(x => x.id === id);

    if(!data) return;

    document.getElementById("editId").value = data.id;
    document.getElementById("editNama").value = data.nama;
    document.getElementById("editWhatsapp").value = data.hp || data.whatsapp || "";
    document.getElementById("editEmail").value = data.email || "";
    document.getElementById("editAlamat").value = data.alamat || "";
    document.getElementById("editStatus").value = data.status || "Menunggu";
    document.getElementById("editPaket").value = data.paket || "";

    document.getElementById("modalEdit").style.display = "flex";

}


function closeEdit(){

    document.getElementById("modalEdit").style.display = "none";

}

function outsideEdit(e){

    if(e.target.id==="modalEdit"){

        closeEdit();

    }

}

async function simpanEdit(){

    const data = {

        id: document.getElementById("editId").value,

        nama: document.getElementById("editNama").value,

        whatsapp: document.getElementById("editWhatsapp").value,

        email: document.getElementById("editEmail").value,

        alamat: document.getElementById("editAlamat").value,

        paket: document.getElementById("editPaket").value,

        status: document.getElementById("editStatus").value

    };

    const res = await updatePelanggan(data);

    alert(res.message);

    closeEdit();

    loadPelanggan();

}