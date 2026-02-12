let currentIndex = 0;
let choices = [];
let activatedCompetences = new Set();

// Elements
const welcomeScreen = document.getElementById('welcome-screen');
const gameScreen = document.getElementById('game-screen');
const feedbackScreen = document.getElementById('feedback-screen');
const finalScreen = document.getElementById('final-screen');

const startBtn = document.getElementById('start-btn');
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

const domainBadge = document.getElementById('domain-badge');
const situationTitle = document.getElementById('situation-title');
const situationText = document.getElementById('situation-text');

const progressFill = document.getElementById('progress');
const currentSituationEl = document.getElementById('current-situation');
const totalSituationsEl = document.getElementById('total-situations');

const feedbackContent = document.getElementById('feedback-content');

// Initialize
totalSituationsEl.textContent = situations.length;

// Event listeners
startBtn.addEventListener('click', startGame);
btnLeft.addEventListener('click', () => makeChoice('analog'));
btnRight.addEventListener('click', () => makeChoice('digital'));
nextBtn.addEventListener('click', nextSituation);
restartBtn.addEventListener('click', restart);

function startGame() {
    welcomeScreen.classList.remove('active');
    gameScreen.classList.add('active');
    loadSituation();
}

function loadSituation() {
    if (currentIndex >= situations.length) {
        showFinalScreen();
        return;
    }

    const situation = situations[currentIndex];
    
    // Update progress
    const progress = ((currentIndex + 1) / situations.length) * 100;
    progressFill.style.width = `${progress}%`;
    currentSituationEl.textContent = currentIndex + 1;
    
    // Update card content
    domainBadge.textContent = situation.domain;
    situationTitle.innerHTML = formatTitle(situation.title);
    situationText.textContent = `"${situation.situation}"`;
}

function formatTitle(title) {
    // Split title intelligently for emphasis
    const words = title.split(' ');
    if (words.length <= 2) {
        return title;
    }
    
    // Last 2-3 words get highlighted
    const splitPoint = Math.max(1, words.length - 2);
    const firstPart = words.slice(0, splitPoint).join(' ');
    const highlightPart = words.slice(splitPoint).join(' ');
    
    return `${firstPart}<br><span class="highlight">${highlightPart}</span>`;
}

function makeChoice(choice) {
    const situation = situations[currentIndex];
    choices.push({
        situationId: situation.id,
        choice: choice
    });
    
    // Track activated competences for digital choices
    if (choice === 'digital') {
        activatedCompetences.add(situation.digital.competence);
    }
    
    // Show feedback immediately (no animation for simplicity)
    showFeedback(choice);
}

function showFeedback(choice) {
    const situation = situations[currentIndex];
    const feedback = choice === 'digital' ? situation.digital : situation.analog;
    
    let html = '';
    
    if (choice === 'digital') {
        // Choix numérique - compétence activée
        const statusClass = (feedback.status === 'ACTIVÉE' || feedback.status === 'ACTIVÉES') ? '' : 'inactive';
        const statusText = feedback.status === 'ACTIVÉES' ? 'COMPÉTENCES' : 'COMPÉTENCE';
        const emoji = statusClass === '' ? '✅' : '⚠️';
        
        html = `
            <div class="competence-badge ${statusClass}">
                ${emoji} ${statusText} DigComp ${feedback.status}
            </div>
            <h2>${feedback.competence}</h2>
            <p><em>(${situation.domain})</em></p>
            
            <div class="retro-separator small">
                <span class="flourish">❧</span>
            </div>
            
            <div class="domain-info">
                <h3>📖 C'est quoi ce domaine ?</h3>
                <p>${feedback.domainDescription}</p>
            </div>
            
            <h3>🎯 Ton choix en pratique :</h3>
            <p>${feedback.practice}</p>
            
            <h3>💡 Pourquoi c'est du DigComp :</h3>
            <p>${feedback.why}</p>
            
            <h3>🔑 L'argument 1:1 :</h3>
            <p>${feedback.argument}</p>
        `;
    } else {
        // Choix analogique - compétence non activée
        const statusText = feedback.status === 'NON ACTIVÉES' ? 'COMPÉTENCES' : 'COMPÉTENCE';
        const auraitPu = feedback.status === 'NON ACTIVÉES' ? 'auraient pu être travaillées' : 'aurait pu être travaillée';
        
        html = `
            <div class="competence-badge inactive">
                ⚠️ ${statusText} DigComp ${feedback.status}
            </div>
            <h2>${feedback.competence} <em>(${auraitPu})</em></h2>
            <p><em>(${situation.domain})</em></p>
            
            <div class="retro-separator small">
                <span class="flourish">❧</span>
            </div>
            
            <div class="domain-info">
                <h3>📖 C'est quoi ce domaine ?</h3>
                <p>${feedback.domainDescription}</p>
            </div>
            
            <h3>🎯 Ton choix en pratique :</h3>
            <p>${feedback.practice}</p>
            
            <h3>${feedback.timeLost ? '⏱️ Le temps perdu :' : '📉 Ce qui manque :'}</h3>
            <p>${feedback.timeLost || feedback.timeLost}</p>
        `;
    }
    
    feedbackContent.innerHTML = html;
    
    gameScreen.classList.remove('active');
    feedbackScreen.classList.add('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function nextSituation() {
    currentIndex++;
    feedbackScreen.classList.remove('active');
    
    if (currentIndex < situations.length) {
        gameScreen.classList.add('active');
        loadSituation();
        window.scrollTo(0, 0);
    } else {
        showFinalScreen();
    }
}

function showFinalScreen() {
    const digitalCount = choices.filter(c => c.choice === 'digital').length;
    const analogCount = choices.filter(c => c.choice === 'analog').length;
    
    document.getElementById('digital-count').textContent = digitalCount;
    document.getElementById('analog-count').textContent = analogCount;
    
    const competencesBox = document.getElementById('competences-activated');
    if (activatedCompetences.size > 0) {
        let competencesHtml = '<h3>🎯 Compétences DigComp activées dans vos choix :</h3><ul>';
        activatedCompetences.forEach(comp => {
            competencesHtml += `<li>✓ ${comp}</li>`;
        });
        competencesHtml += '</ul>';
        competencesBox.innerHTML = competencesHtml;
    } else {
        competencesBox.innerHTML = `
            <h3>💡 Aucune compétence DigComp n'a été activée dans vos choix.</h3>
            <p>Refaites l'activité en choisissant les approches numériques pour découvrir comment le DigComp s'applique en classe !</p>
        `;
    }
    
    finalScreen.classList.add('active');
    window.scrollTo(0, 0);
}

function restart() {
    currentIndex = 0;
    choices = [];
    activatedCompetences.clear();
    
    finalScreen.classList.remove('active');
    welcomeScreen.classList.add('active');
    window.scrollTo(0, 0);
}

