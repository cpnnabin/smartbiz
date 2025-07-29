document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("themeToggle");
    if(toggle) {
        toggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            showToast(`Theme switched to ${document.body.classList.contains('dark-mode') ? 'Dark' : 'Light'} mode`);
        });
    }

    function showToast(message) {
        const toastEl = document.createElement('div');
        toastEl.className = 'toast align-items-center text-bg-success border-0 position-fixed bottom-0 end-0 m-3';
        toastEl.setAttribute('role', 'alert');
        toastEl.setAttribute('aria-live', 'assertive');
        toastEl.setAttribute('aria-atomic', 'true');
        toastEl.innerHTML = `
      <div class="d-flex">
        <div class="toast-body">${message}</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
      </div>`;
        document.body.appendChild(toastEl);
        const bs = new bootstrap.Toast(toastEl);
        bs.show();
        setTimeout(()=> toastEl.remove(), 3000);
    }
});
