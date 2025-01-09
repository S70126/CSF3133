document.addEventListener('scroll', function () {
    const progressBar = document.getElementById('progressBar');
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / documentHeight) * 100;
    progressBar.style.width = scrollPercentage + '%';
});