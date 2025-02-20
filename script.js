let currentPage = 1;
let pageCount = 1;
let content = "";

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
function addTextToPage(text) {
    content += text;

    let pageContent = content.slice(0, 2000); // Limit 2000 znaków na stronę

    if (content.length > 2000) {
        createNewPage();
        content = content.slice(2000); // Zwracamy resztę tekstu do nowej strony
    }

    const pages = document.querySelectorAll('.page');
    pages[pages.length - 1].querySelector('.content').innerHTML = pageContent;
}

// Example text input simulation (you can replace this with actual user input)
document.addEventListener('DOMContentLoaded', () => {
    addTextToPage("Witaj w książce! Tutaj możesz pisać. Kontynuuj, a strona automatycznie będzie się rozdzielać.");
});

updatePageView();
