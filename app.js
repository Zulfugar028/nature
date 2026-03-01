const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    hamburger.classList.toggle('active');

    hamburger.classList.toggle('fa-bars');
    hamburger.classList.toggle('fa-xmark');
});