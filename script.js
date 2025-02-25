let currentPage = 1;
let pages = { 1: "" }; // Obiekt do przechowywania tekstu na każdej stronie

const pageContainer = document.getElementById("page-container");
const pageNumberElement = document.getElementById("page-number");
const prevButton = document.getElementById("prev-page");
const nextButton = document.getElementById("next-page");

// Funkcja tworząca stronę (jeśli jeszcze nie istnieje)
function createPage(pageNumber) {
    if (!pages[pageNumber]) {
        pages[pageNumber] = ""; // Tworzymy pustą stronę
    }

    // Tworzenie elementu strony
    let newPage = document.createElement("div");
    newPage.classList.add("page");
    newPage.setAttribute("contenteditable", true); // Pozwala edytować tekst
    newPage.setAttribute("data-page", pageNumber);
    newPage.innerText = pages[pageNumber]; // Wczytuje zapisany tekst
    newPage.addEventListener("input", (e) => {
        pages[pageNumber] = e.target.innerText; // Zapisuje zmiany tekstu
    });

    return newPage;
}

// Funkcja zmieniająca stronę
function changePage(direction) {
    if (direction === "next") {
        currentPage++;
        if (!pages[currentPage]) {
            pages[currentPage] = ""; // Tworzymy stronę, jeśli jeszcze nie istnieje
        }
    } else if (direction === "prev" && currentPage > 1) {
        currentPage--;
    }

    updatePageView();
}

// Funkcja aktualizująca widok strony
function updatePageView() {
    pageContainer.innerHTML = ""; // Czyścimy kontener

    let currentPageElement = createPage(currentPage);
    pageContainer.appendChild(currentPageElement);

    pageNumberElement.textContent = `Strona: ${currentPage}`;
}

// Obsługa przycisków nawigacyjnych
prevButton.addEventListener("click", () => changePage("prev"));
nextButton.addEventListener("click", () => changePage("next"));

// Inicjalizacja pierwszej strony
updatePageView();
