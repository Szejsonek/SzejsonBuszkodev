// Zmienna do przechowywania numeru aktualnej strony
let currentPage = 1;
const totalPages = 5; // Ustal ilość stron

// Funkcja do zmiany strony
function changePage(direction) {
    if (direction === 'next' && currentPage < totalPages) {
        currentPage++;
    } else if (direction === 'prev' && currentPage > 1) {
        currentPage--;
    }

    // Zmieniamy tekst strony
    const pageElement = document.getElementById('page');
    const pageNumberElement = document.getElementById('pageNumber');
    const bookTextArea = document.getElementById('bookText');
    
    // Możesz dostosować treść stron poniżej:
    let pageText = '';
    if (currentPage === 1) {
        pageText = 'Witaj na pierwszej stronie!';
    } else if (currentPage === 2) {
        pageText = 'Strona 2 - Przygody zaczynają się...';
    } else if (currentPage === 3) {
        pageText = 'Strona 3 - Tajemnicze wydarzenia wkrótce się rozwiną.';
    } else if (currentPage === 4) {
        pageText = 'Strona 4 - Wkrótce dojdzie do wielkich zmian.';
    } else if (currentPage === 5) {
        pageText = 'Strona 5 - Wielki finał! Co się stanie dalej?';
    }

    pageElement.innerHTML = `<textarea id="bookText" class="editable-text">${bookTextArea.value}</textarea>`;
    pageNumberElement.textContent = `Strona ${currentPage}`;
}
