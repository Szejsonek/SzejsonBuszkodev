let currentPage = 1;
let pageCount = 1;
let content = document.querySelector('.content');

const pageContainer = document.getElementById('page-container');
const pageNumberElement = document.getElementById('page-number');
const prevButton = document.getElementById('prev-page');
const nextButton = document.getElementById('next-page');

function createNewPage() {
    const newPage = document.createElement('div');
    newPage.classList.add('page');
    newPage.innerHTML = `<div class="content" contenteditable="true" placeholder="Wpisz tekst tutaj..."></div>`;
    pageContainer.appendChild(newPage);
    pageCount++;
}

function changePage(direction) {
    if (direction === 'next' && currentPage < pageCount) {
        currentPage++;
    } else if (direction === 'prev' && currentPage > 1) {
        currentPage--;
    }

    updatePageView();
}

function updatePageView() {
    const pages = document.querySelectorAll('.page');
    pages.forEach((page, index) => {
        if (index + 1 === currentPage) {
            page.style.display = 'block';
        } else {
            page.style.display = 'none';
        }
    });

    pageNumberElement.textContent = `Strona: ${currentPage}`;
}

prevButton.addEventListener('click', () => changePage('prev'));
nextButton.addEventListener('click', () => changePage('next'));

// Dynamically create pages based on content length
content.addEventListener('input', () => {
    let text = content.textContent;

    if (text.length > 1000 && pageCount === currentPage) {
        createNewPage();
    }

    updatePageView();
});

updatePageView();
