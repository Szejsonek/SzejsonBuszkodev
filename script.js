let currentPage = 1;
let pageCount = 1;
let content = "";

const pageContainer = document.getElementById('page-container');
const pageNumberElement = document.getElementById('page-number');
const prevButton = document.getElementById('prev-page');
const nextButton = document.getElementById('next-page');

// Funkcja do tworzenia nowej strony
function createNewPage() {
    const newPage = document.createElement('div');
    newPage.classList.add('page');
    newPage.setAttribute('contenteditable', true);  // Umożliwia edytowanie tekstu w prostokącie
    newPage.setAttribute('data-page', pageCount);  // Umożliwia numerowanie stron
    pageContainer.appendChild(newPage);
    pageCount++;
}

// Funkcja do zmiany stron
function changePage(direction) {
    if (direction === 'next' && currentPage < pageCount) {
        currentPage++;
    } else if (direction === 'prev' && currentPage > 1) {
        currentPage--;
    }

    updatePageView();
}

// Funkcja do aktualizacji widoku stron
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

// Obsługa przycisków nawigacyjnych
prevButton.addEventListener('click', () => changePage('prev'));
nextButton.addEventListener('click', () => changePage('next'));

// Inicjalizacja pierwszej strony
createNewPage();
updatePageView();
