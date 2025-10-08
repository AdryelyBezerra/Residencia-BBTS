document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.info-box-mais').forEach(button => {
            button.addEventListener('click', () => {
                window.location.href = 'admin-candidato.html';
            });
    });
});