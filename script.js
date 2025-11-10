// Game Data
const messages = [
    {
        id: 1,
        text: "Hello valued customer, this is to inform you that your Chase Bank account has been temporarily locked due to suspicious login attempts from an unknown device in another country. To protect your funds, please verify your account information immediately by clicking the secure link below. If you do not take action within the next 24 hours, your account may be permanently suspended for security reasons. We understand this may cause inconvenience, but your cooperation is essential to maintain your financial safety. Please provide your date of birth, card number, and PIN on the verification page to unlock your account. Thank you for your prompt attention.",
        scamIndices: [1, 3, 4, 7]
    },
    {
        id: 2,
        text: "Hi Samantha, just a quick reminder about our staff meeting on Thursday at 10 AM in the main conference room. We'll be reviewing the upcoming marketing launch plan and assigning responsibilities for next week. Please make sure to bring the revised PowerPoint slides and your updated sales report. If you're unable to attend in person, you can join via the Zoom link we used last time. Let me know if you have any conflicts. Thanks again for your hard work this quarter — it's really paying off!",
        scamIndices: []
    },
    {
        id: 3,
        text: "Congratulations! You've been selected as the grand prize winner in our national customer appreciation sweepstakes. You are eligible to receive an exclusive reward of $1,000 in prepaid Visa gift cards, but to confirm your identity and ship your prize, we need you to fill out a short form. Please include your full name, address, phone number, and credit card for identity verification purposes. This offer expires in 12 hours, so don't delay! Click the link below to claim your reward now. Failure to respond in time will result in forfeiture of your prize.",
        scamIndices: [1, 4, 5, 6]
    },
    {
        id: 4,
        text: "This is the IRS Fraud Department contacting you regarding a serious issue with your tax filings. Our records indicate that you have unpaid taxes from the last fiscal year, and if this is not resolved immediately, a warrant will be issued for your arrest. To avoid further legal action, please submit your payment using Apple or Google Play gift cards. Once purchased, send us the codes so we can verify your payment and close your case. Do not contact anyone else or share this notice, as it may delay the processing of your file.",
        scamIndices: [1, 2, 3, 4]
    },
    {
        id: 5,
        text: "Your recent Amazon order #437-1125890-222 has shipped and is expected to arrive by Friday. You can track your package using the official Amazon tracking page linked below. If you have any issues with your order, please visit the Help Center or contact customer support through your Amazon account. Do not reply to this email, as this inbox is not monitored. Thank you for shopping with us!",
        scamIndices: []
    }
];

// Game State
let currentMessageIndex = 0;
let correctCount = 0;
let incorrectCount = 0;
let clickedSentences = new Set();
let totalSentences = 0;

// DOM Elements
const startScreen = document.getElementById('startScreen');
const gameScreen = document.getElementById('gameScreen');
const endScreen = document.getElementById('endScreen');
const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
const messageContent = document.getElementById('messageContent');
const currentMessageSpan = document.getElementById('currentMessage');
const correctCountSpan = document.getElementById('correctCount');
const incorrectCountSpan = document.getElementById('incorrectCount');

// Event Listeners
startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', nextMessage);
restartBtn.addEventListener('click', restartGame);

// Game Functions
function startGame() {
    startScreen.classList.remove('active');
    gameScreen.classList.add('active');
    currentMessageIndex = 0;
    correctCount = 0;
    incorrectCount = 0;
    updateScore();
    loadMessage();
}

function loadMessage() {
    const message = messages[currentMessageIndex];
    clickedSentences.clear();
    
    // Split text into sentences
    const sentences = message.text.match(/[^.!?]+[.!?]+/g) || [message.text];
    totalSentences = sentences.length;
    
    // Update progress
    currentMessageSpan.textContent = currentMessageIndex + 1;
    
    // Create clickable sentences
    messageContent.innerHTML = '';
    sentences.forEach((sentence, index) => {
        const span = document.createElement('span');
        span.className = 'sentence';
        span.textContent = sentence;
        span.dataset.index = index;
        span.addEventListener('click', () => handleSentenceClick(index, message.scamIndices));
        messageContent.appendChild(span);
        messageContent.appendChild(document.createTextNode(' '));
    });
    
    nextBtn.classList.add('hidden');
}

function handleSentenceClick(index, scamIndices) {
    // Prevent clicking the same sentence twice
    if (clickedSentences.has(index)) return;
    
    clickedSentences.add(index);
    const sentenceElement = messageContent.querySelector(`[data-index="${index}"]`);
    sentenceElement.classList.add('clicked');
    
    // Check if sentence is a scam
    const isScam = scamIndices.includes(index);
    
    if (isScam) {
        sentenceElement.classList.add('correct');
        correctCount++;
    } else {
        sentenceElement.classList.add('incorrect');
        incorrectCount++;
    }
    
    updateScore();
    
    // Check if all sentences have been clicked
    if (clickedSentences.size === totalSentences) {
        nextBtn.classList.remove('hidden');
    }
}

function updateScore() {
    correctCountSpan.textContent = correctCount;
    incorrectCountSpan.textContent = incorrectCount;
}

function nextMessage() {
    currentMessageIndex++;
    
    if (currentMessageIndex < messages.length) {
        loadMessage();
    } else {
        showEndScreen();
    }
}

function showEndScreen() {
    gameScreen.classList.remove('active');
    endScreen.classList.add('active');
    
    // Calculate total scam sentences
    const totalScamSentences = messages.reduce((sum, msg) => sum + msg.scamIndices.length, 0);
    
    // Update final score
    document.getElementById('finalCorrect').textContent = correctCount;
    document.getElementById('totalScam').textContent = totalScamSentences;
    
    // Calculate accuracy
    const accuracy = totalScamSentences > 0 ? Math.round((correctCount / totalScamSentences) * 100) : 0;
    document.getElementById('accuracy').textContent = accuracy;
}

function restartGame() {
    endScreen.classList.remove('active');
    startScreen.classList.add('active');
    currentMessageIndex = 0;
    correctCount = 0;
    incorrectCount = 0;
    clickedSentences.clear();
}
