// ----------------------------
// SETTINGS
// ----------------------------
const QUESTIONS_PER_ROW = 3;

// ----------------------------
// FULL QUESTION POOL – Sproochentest (Luxembourgish B1 comprehension)
// Simulates the Héierversteesdemech format: short passages + MCQ
// ----------------------------
const INLINE_TEST_QUESTIONS = [
  {
    q: "Dir lauschtert um Radio: «Wéinst staarkem Schnéi sinn d'Autobunne ronderëm d'Stad zanter 6 Auer gespaart. De Verkéier gëtt iwwer d'Nationalstroossen ëmgeleet.» — Wat ass d'Haaptinformatioun?",
    a: [
      "D'Autobunne si gespaart wéinst Schnéi.",
      "D'Nationalstroossen si gespaart.",
      "Den Zuchverkéier ass gestéiert."
    ],
    correct: 0
  },
  {
    q: "Am Supermarché héiert Dir: «Léif Clienten, eise Bäckereestand schléisst haut schonn ëm 18 Auer amplaz 20 Auer.» — Wéini schléisst de Bäckereestand haut?",
    a: [
      "Ëm 18 Auer — zwou Stonnen éischter.",
      "Ëm 20 Auer wéi gewinnt.",
      "De Stand bleift haut zou."
    ],
    correct: 0
  },
  {
    q: "Um Telefon: «De nächste fräien Termin ass Freides de 14., moies ëm 9 Auer. Passt Iech dat? — Jo, dat ass gutt.» — Wéini ass de Rendez-vous?",
    a: [
      "Freides de Moien ëm 9 Auer.",
      "Freides den Owend ëm 9 Auer.",
      "Mëttwochs de Moien ëm 14 Auer."
    ],
    correct: 0
  },
  {
    q: "Um Radio: «D'Gemeng Hesper invitéiert all Awunner op hire Chrëschtmaart de 15. an 16. Dezember um Parking vun der Sportshal. Entrée gratis.» — Wat ass richteg?",
    a: [
      "De Chrëschtmaart dauert zwee Deeg a kascht näischt.",
      "De Chrëschtmaart ass nëmmen en Dag.",
      "D'Entrée kascht 5 Euro."
    ],
    correct: 0
  },
  {
    q: "Um Äntwertapparat: «Äre Rendez-vous vun e Méindeg gouf op en Dënschdeg verluecht, selwecht Auerzäit. Rufft eis w.e.g. zeréck fir ze confirméieren.» — Wat soll d'Persoun maachen?",
    a: [
      "Zeréckruffen fir den neien Termin ze confirméieren.",
      "E Méindeg wéi geplangt kommen.",
      "D'Auerzäit änneren."
    ],
    correct: 0
  },
  {
    q: "Eng Presentatioun: «D'Grondschoul zu Miersch kritt en neit Gebai mat 6 Klassesäll. D'Aarbechte fänken am Mäerz un a sollen an 18 Méint fäerdeg sinn.» — Wéi laang daueren d'Aarbechten?",
    a: [
      "18 Méint.",
      "6 Méint.",
      "12 Méint."
    ],
    correct: 0
  },
  {
    q: "Am Bus héiert Dir: «Nächsten Arrêt: Hamilius. Passagéier déi op den Tram wëlle wiesselen, kënnen hei ausklammen.» — Firwat ass dësen Arrêt wichteg?",
    a: [
      "Well een hei op den Tram wiessele kann.",
      "Well de Bus hei ophält ze fueren.",
      "Well et de leschten Arrêt ass."
    ],
    correct: 0
  },
  {
    q: "An enger Noriicht: «D'Schwemm zu Bouneweg ass vun e Méindeg bis e Mëttwoch zou wéinst Renovatiounsaarbechten. Vun en Donneschdeg un ass alles nees normal.» — Wéi laang ass d'Schwemm zou?",
    a: [
      "Dräi Deeg — vu Méindeg bis Mëttwoch.",
      "Eng ganz Woch.",
      "Nëmmen e Méindeg."
    ],
    correct: 0
  },
  {
    q: "Um Radio: «D'Temperaturen an der Nuecht falen op minus 5 Grad. Denkt w.e.g. drun, Är Waasserleitungen ze schützen.» — Wat gëtt recommandéiert?",
    a: [
      "D'Waasserleitunge schützen.",
      "D'Heizung ausstellen.",
      "D'Fënsteren opmaachen."
    ],
    correct: 0
  },
  {
    q: "An der Maison relais: «Muer ass d'Journée pédagogique. D'Kanner hunn dofir schoulfräi. D'Maison relais ass awer vu 7h30 bis 18h30 op.» — Wat geschitt muer?",
    a: [
      "D'Kanner hu schoulfräi, d'Maison relais ass awer op.",
      "D'Schoul an d'Maison relais sinn zou.",
      "D'Schoul ass normal op."
    ],
    correct: 0
  },
  {
    q: "An der Gare: «Den Zuch vu 14h12 Richtung Ettelbréck huet ongeféier 20 Minutte Verspéidung. Mir entschëllegen eis.» — Wéini fiert den Zuch ongeféier of?",
    a: [
      "Géint 14h32.",
      "Ëm 14h12 wéi geplangt.",
      "Den Zuch ass annuléiert."
    ],
    correct: 0
  },
  {
    q: "Am Geschäft: «Mir hunn am Moment eng Promotioun op all Wanterschong: 30% Remise bis Enn vum Mount.» — Wéi laang gëllt d'Promotioun?",
    a: [
      "Bis Enn vum Mount.",
      "Nëmmen haut.",
      "Eng ganz Woch."
    ],
    correct: 0
  }
];

// ----------------------------
// SHUFFLE — runs before DOM logic
// ----------------------------
function shuffleAnswers(question) {
  const combined = question.a.map((opt, index) => ({
    text: opt,
    isCorrect: index === question.correct
  }));
  for (let i = combined.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [combined[i], combined[j]] = [combined[j], combined[i]];
  }
  question.a = combined.map(item => item.text);
  question.correct = combined.findIndex(item => item.isCorrect);
}

INLINE_TEST_QUESTIONS.forEach(q => shuffleAnswers(q));

// ----------------------------
// BUILD ROWS (after shuffle so object references are stable)
// ----------------------------
const rows = [];
for (let i = 0; i < INLINE_TEST_QUESTIONS.length; i += QUESTIONS_PER_ROW) {
  rows.push(INLINE_TEST_QUESTIONS.slice(i, i + QUESTIONS_PER_ROW));
}

// ----------------------------
// ALL DOM LOGIC INSIDE DOMContentLoaded
// ----------------------------
document.addEventListener("DOMContentLoaded", function () {

  const totalQuestions    = INLINE_TEST_QUESTIONS.length;
  let correctCount        = 0;
  let wrongCount          = 0;
  let answeredCount       = 0;
  let currentRow          = 0;

  // Per-row answered counts — drives row-reveal
  const rowAnsweredCounts = new Array(rows.length).fill(0);

  const container = document.getElementById("inline-test-questions");
  if (!container) {
    console.error("hometest-sproochentest: #inline-test-questions not found in DOM.");
    return;
  }

  // ----------------------------
  // PROGRESS
  // ----------------------------
  function updateProgressDisplay() {
    const el = document.getElementById("inline-progress-text");
    if (el) el.textContent = "Fortschrëtt: " + answeredCount + " / " + totalQuestions + " Froen";
  }

  function updateProgressBar() {
    const bar = document.getElementById("inline-progressbar");
    if (bar) bar.style.width = ((answeredCount / totalQuestions) * 100) + "%";
  }

  // ----------------------------
  // END CARD
  // ----------------------------
  function createDonutChart() {
    const pct = Math.round((correctCount / totalQuestions) * 100);
    const C   = 2 * Math.PI * 40;
    return (
      '<div class="donut-wrapper">' +
        '<svg width="120" height="120" viewBox="0 0 100 100">' +
          '<circle cx="50" cy="50" r="40" stroke="#ebe6ff" stroke-width="12" fill="none"></circle>' +
          '<circle cx="50" cy="50" r="40" stroke="#6d4aff" stroke-width="12" fill="none"' +
            ' stroke-dasharray="' + ((pct / 100) * C) + ' ' + ((1 - pct / 100) * C) + '"' +
            ' transform="rotate(-90 50 50)" stroke-linecap="round"></circle>' +
        '</svg>' +
        '<div class="donut-center">' + pct + '%</div>' +
      '</div>'
    );
  }

  function createEndCard() {
    const pct  = Math.round((correctCount / totalQuestions) * 100);
    const card = document.createElement("div");
    card.className = "inline-question-card end-card";
    const title =
      pct >= 80 ? "Excellent!" :
      pct >= 50 ? "Gutt gemaach!" :
      pct >= 25 ? "Gudde Start!" :
      "Weider trainéieren!";
    card.innerHTML =
      "<h3>" + title + "</h3>" +
      createDonutChart() +
      "<p>Dir hutt elo eis gratis Beispillfroen probéiert. " +
      "Kritt Zougang zu <strong>allen Übungen a Simulatiounen</strong> mat detailléierte Resultater.</p>" +
      '<a href="https://civiclearn.com/sproochentest/checkout.html" class="hero-primary-btn">Kompletten Zougang</a>';
    return card;
  }

  // ----------------------------
  // RENDER
  // ----------------------------
  function renderRow(rowIndex) {
    if (!rows[rowIndex]) return;
    rows[rowIndex].forEach(function (q, offset) {
      var absoluteIndex = rowIndex * QUESTIONS_PER_ROW + offset;
      container.appendChild(createQuestionCard(q, absoluteIndex, rowIndex));
    });
  }

  function createQuestionCard(questionObj, absoluteIndex, rowIndex) {
    var card = document.createElement("div");
    card.className = "inline-question-card";

    var title = document.createElement("h3");
    title.textContent = questionObj.q;
    card.appendChild(title);

    var feedback = document.createElement("div");
    feedback.className = "inline-feedback";

    questionObj.a.forEach(function (opt, i) {
      var btn = document.createElement("button");
      btn.className = "inline-option-btn";
      btn.textContent = opt;

      btn.onclick = function () {
        answeredCount++;
        rowAnsweredCounts[rowIndex]++;
        updateProgressDisplay();
        updateProgressBar();

        // Disable all buttons in this card
        var allBtns = card.querySelectorAll("button");
        allBtns.forEach(function (b) { b.disabled = true; });

        if (i === questionObj.correct) {
          correctCount++;
          btn.style.background  = "rgba(24, 160, 110, 0.15)";
          btn.style.borderColor = "#18a06e";
          btn.style.color       = "#14805a";
          feedback.textContent  = "Richteg!";
          feedback.classList.add("inline-correct");
        } else {
          wrongCount++;
          btn.style.background  = "rgba(230, 57, 70, 0.12)";
          btn.style.borderColor = "#e63946";
          btn.style.color       = "#c5303b";
          // Highlight the correct answer
          allBtns[questionObj.correct].style.background  = "rgba(24, 160, 110, 0.15)";
          allBtns[questionObj.correct].style.borderColor = "#18a06e";
          allBtns[questionObj.correct].style.color       = "#14805a";
          feedback.textContent = "Richteg Äntwert: " + questionObj.a[questionObj.correct];
          feedback.classList.add("inline-wrong");
        }

        card.appendChild(feedback);

        // Last question → show end card
        if (absoluteIndex === totalQuestions - 1) {
          setTimeout(function () { container.appendChild(createEndCard()); }, 300);
          return;
        }

        // All questions in this row answered → reveal next row
        var rowSize = rows[rowIndex].length;
        if (rowAnsweredCounts[rowIndex] === rowSize) {
          currentRow++;
          setTimeout(function () { renderRow(currentRow); }, 150);
        }
      };

      card.appendChild(btn);
    });

    return card;
  }

  // ----------------------------
  // INIT
  // ----------------------------
  renderRow(0);
  updateProgressDisplay();
  updateProgressBar();

}); // end DOMContentLoaded
