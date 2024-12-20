document.addEventListener('DOMContentLoaded', function () {
    const pages = document.querySelectorAll('.page');
    let currentPage = 0;

    pages[currentPage].classList.add('page-flipped');

    document.addEventListener('click', function () {
        if (currentPage < pages.length - 1) {
            pages[currentPage].classList.remove('page-flipped');
            currentPage++;
            pages[currentPage].classList.add('page-flipped');
        } else {
            pages[currentPage].classList.remove('page-flipped');
            currentPage = 0;
            pages[currentPage].classList.add('page-flipped');
        }
    });
});
