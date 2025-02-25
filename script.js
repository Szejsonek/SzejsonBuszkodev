// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCEv4QqXhCE_GubA-ImpAmTLMZ-Ie8wBAI",
  authDomain: "malem-2d0db.firebaseapp.com",
  projectId: "malem-2d0db",
  storageBucket: "malem-2d0db.firebasestorage.app",
  messagingSenderId: "54725230165",
  appId: "1:54725230165:web:e31a9c7ae63ef4998cdedc",
  measurementId: "G-DB62ZWDH50"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

// Elements
const loginSubmit = document.getElementById('loginSubmit');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const textarea1 = document.getElementById('textarea1');
const pageNumber = document.getElementById('pageNumber');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const loginError = document.getElementById('loginError');

let currentPage = 1;
let isAdmin = false;

loginSubmit.addEventListener('click', () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  // Sprawdzanie, czy dane logowania są poprawne
  if (email === 'szymonpoczta12@wp.pl' && password === 'bułka123') {
    isAdmin = true;
    alert('Zalogowano jako admin');
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    loadPageContent();
  } else {
    loginError.style.display = 'block';
  }
});

function loadPageContent() {
  firebase.database().ref(`pages/${currentPage}`).once('value', (snapshot) => {
    const data = snapshot.val();
    if (data) {
      textarea1.value = data.text;
    } else {
      textarea1.value = '';
    }
  });

  // Tylko admin może edytować
  if (isAdmin) {
    textarea1.disabled = false;
  } else {
    textarea1.disabled = true;
  }

  textarea1.addEventListener('input', () => {
    if (isAdmin) {
      const text = textarea1.value;
      firebase.database().ref(`pages/${currentPage}`).set({
        text: text
      });
    }
  });

  pageNumber.innerText = currentPage;
}

prevPageBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    loadPageContent();
  }
});

nextPageBtn.addEventListener('click', () => {
  currentPage++;
  loadPageContent();
});
