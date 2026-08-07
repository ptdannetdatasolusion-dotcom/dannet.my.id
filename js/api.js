/**
 * ============================================
 * DANNET ISP SYSTEM
 * api.js
 * ============================================
 */

const API = {

    async get(action){

        const response = await fetch(

            `${CONFIG.API_URL}?action=${action}`

        );

        return await response.json();

    },

    async post(action,data){

        const response = await fetch(

            `${CONFIG.API_URL}?action=${action}`,

            {

                method:"POST",

                body:JSON.stringify(data)

            }

        );

        return await response.json();

    }

};


/* ======================================
   UPDATE PELANGGAN
====================================== */

async function updatePelanggan(data){

    return postAPI("updatePelanggan", data);

}

/* ======================================
   HAPUS PELANGGAN
====================================== */

async function deletePelanggan(id){

    return postAPI("deletePelanggan", {
        id:id
    });

}