let currentPage = 1;
let pageCount = 1;
let content = "";

const pageContainer = document.getElementById('page-container');
const pageNumberElement = document.getElementById('page-number');
const prevButton = document.getElementById('prev-page');
const nextButton = document.getElementById('next-page');
const addTextButton = document.getElementById('add-text');
const textInput = document.getElementById('text-input');

// Funkcja do tworzenia nowej strony
function createNewPage() {
    const newPage = document.createElement('div');
    newPage.classList.add('page');
    newPage.innerHTML = `<div class="content" contenteditable="true" placeholder="Wpisz tekst tutaj..."></div>`;
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

// Funkcja do dodawania tekstu do strony
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

// Dodanie tekstu po kliknięciu przycisku
addTextButton.addEventListener('click', () => {
    const text = textInput.value;
    if (text.trim()) {
        addTextToPage(text);
        textInput.value = ''; // Clear the input after adding text
    }
});

// Obsługa przycisków nawigacyjnych
prevButton.addEventListener('click', () => changePage('prev'));
nextButton.addEventListener('click', () => changePage('next'));

// Inicjalizacja pierwszej strony
createNewPage();
updatePageView();
