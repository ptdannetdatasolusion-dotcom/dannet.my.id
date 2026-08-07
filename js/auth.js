/**
 * ============================================
 * DANNET ISP SYSTEM - AUTH
 * ============================================
 * Manajemen autentikasi user
 */

// js/auth.js
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('loginBtn');
    btn.disabled = true;
    btn.textContent = 'Memproses...';

    const payload = {
        action: 'login',
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };

    try {
        const res = await api(payload);
        if (res.status === 'success') {
            localStorage.setItem('user_session', JSON.stringify(res.user));
            window.location.href = 'dashboard.html';
        } else {
            alert(res.message);
        }
    } catch (err) {
        alert('Terjadi kesalahan koneksi');
    } finally {
        btn.disabled = false;
        btn.textContent = 'Masuk';
    }
});