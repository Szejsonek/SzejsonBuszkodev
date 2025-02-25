let currentPage = 1;
let pages = { 1: "" }; // Obiekt przechowujący strony i ich tekst

const pageContainer = document.getElementById("page-container");
const pageNumberElement = document.getElementById("page-number");
const prevButton = document.getElementById("prev-page");
const nextButton = document.getElementById("next-page");
const deleteButton = document.getElementById("delete-page");

// Funkcja do tworzenia strony
function createPage(pageNumber) {
    let newPage = document.createElement("div");
    newPage.classList.add("page");
    newPage.setAttribute("contenteditable", true);
    newPage.setAttribute("data-page", pageNumber);
    newPage.innerText = pages[pageNumber] || "";
    
    newPage.addEventListener("input", (e) => {
        pages[pageNumber] = e.target.innerText;
    });

    return newPage;
}

// Funkcja zmieniająca stronę
function changePage(direction) {
    if (direction === "next") {
        currentPage++;
        if (!pages[currentPage]) {
            pages[currentPage] = ""; // Tworzy pustą stronę
        }
    } else if (direction === "prev" && currentPage > 1) {
        currentPage--;
    }

    updatePageView();
}

// Funkcja aktualizująca widok
function updatePageView() {
    pageContainer.innerHTML = ""; // Czyścimy kontener

    let currentPageElement = createPage(currentPage);
    pageContainer.appendChild(currentPageElement);
    pageNumberElement.textContent = `Strona: ${currentPage}`;
}

// Funkcja usuwania aktualnej strony
function deletePage() {
    if (Object.keys(pages).length > 1) {
        delete pages[currentPage];

        let allPages = Object.keys(pages).map(Number).sort((a, b) => a - b);
        currentPage = allPages[allPages.length - 1];

        updatePageView();
    }
}

// Obsługa przycisków
prevButton.addEventListener("click", () => changePage("prev"));
nextButton.addEventListener("click", () => changePage("next"));
deleteButton.addEventListener("click", deletePage);

// Inicjalizacja pierwszej strony
updatePageView();
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEv4QqXhCE_GubA-ImpAmTLMZ-Ie8wBAI",
  authDomain: "malem-2d0db.firebaseapp.com",
  projectId: "malem-2d0db",
  storageBucket: "malem-2d0db.firebasestorage.app",
  messagingSenderId: "54725230165",
  appId: "1:54725230165:web:b516d3fcab6759538cdedc",
  measurementId: "G-XD3345NGVG"
};
