// Game Data - SUPER HARD realistic messages (20 total)
const messages = [
    {
        text: "TOLL ALERT: You have an outstanding toll of $4.75 from your recent trip on the Florida Turnpike. Your vehicle was captured by our toll cameras on October 28th. To avoid additional late fees of $25, please pay immediately at pay-fl-toll.com. Enter your license plate number and credit card to settle this balance.",
        scamIndices: [2, 3]
    },
    {
        text: "FINAL NOTICE: The IRS has been trying to reach you regarding unpaid taxes. This is your last warning before legal action is taken. You owe $3,847 in back taxes. Call our department immediately at 1-866-555-0178 to arrange payment and avoid arrest. Time is running out!",
        scamIndices: [0, 1, 3, 4]
    },
    {
        text: "Hi Sarah, I hope this email finds you well. I wanted to follow up on our meeting last week about the Johnson account. Can you send over the quarterly report by Friday? Also, I'll be out of office next Monday and Tuesday for the conference in Austin. Let me know if you need anything before then. Best regards, Mike",
        scamIndices: []
    },
    {
        text: "FedEx Delivery Exception: Your package has arrived at our customs facility but cannot be released until you pay an import tariff fee of $12.50. This international shipment requires immediate payment to avoid return to sender. Click here to pay the customs fee: fedex-customs-payment.net. Your tracking number is included in this message.",
        scamIndices: [1, 2]
    },
    {
        text: "Congratulations! You've won a $500 Walmart gift card in our monthly customer appreciation drawing! To claim your prize, verify your identity by completing a short survey at walmart-winners.org. You must claim within 48 hours or the prize will go to an alternate winner. Don't miss out on this exclusive reward!",
        scamIndices: [0, 1, 3]
    },
    {
        text: "Your dentist appointment is scheduled for Thursday, March 15th at 2:30 PM with Dr. Anderson. Please arrive 10 minutes early to complete any necessary paperwork. If you need to reschedule, call our office at (555) 123-4567. We look forward to seeing you!",
        scamIndices: []
    },
    {
        text: "PayPal Security Alert: We've detected unusual activity on your account from an unrecognized device in Vietnam. Someone tried to send $847 to an unknown recipient. If this wasn't you, verify your account now at paypal-secure-login.com to prevent unauthorized transactions. Your account has been temporarily limited for your protection.",
        scamIndices: [2, 3]
    },
    {
        text: "Your Amazon order #2847-9182 has been confirmed and will arrive between 2-5 business days. You can track your shipment by logging into your account on our website. If you have any questions, please contact our customer service team during business hours Monday through Friday, 9 AM to 6 PM EST.",
        scamIndices: []
    },
    {
        text: "USPS: Your package is waiting at our distribution center. We attempted delivery but no one was home. Pay the redelivery fee of $2.99 to schedule a new delivery time: usps-redelivery.com. Use confirmation code #TR8492. This fee must be paid within 72 hours or your package will be returned.",
        scamIndices: [2, 4]
    },
    {
        text: "Your subscription to Microsoft 365 will expire in 7 days. To continue using Word, Excel, and PowerPoint, renew your subscription through your Microsoft account. You can manage your subscription settings anytime by visiting account.microsoft.com. No action is needed if you have automatic renewal enabled.",
        scamIndices: []
    },
    {
        text: "Social Security Administration Notice: Your social security number has been suspended due to suspicious activity linked to fraud in Texas. Call our fraud department immediately at 1-888-555-0199 to reactivate your number. Failure to call will result in arrest and frozen bank accounts. This is urgent!",
        scamIndices: [0, 1, 2, 3]
    },
    {
        text: "Hey! I saw you on LinkedIn and wanted to reach out about a job opportunity at our company. We're looking for someone with your background in marketing. Would you be interested in a quick 15-minute call to discuss? Let me know your availability this week. Thanks!",
        scamIndices: []
    },
    {
        text: "Bank of America Fraud Alert: We blocked a suspicious charge of $2,450 at an electronics store in California. If this purchase was not authorized by you, please call the number on the back of your debit card immediately or use our mobile app to report the fraud. We're here to protect you 24/7.",
        scamIndices: []
    },
    {
        text: "Your car's extended warranty is about to expire! This is your final courtesy call to renew your vehicle protection plan. Press 1 to speak with a warranty specialist about your 2019 Honda Accord. If you don't renew now, you'll have to pay thousands out of pocket for repairs. Don't wait!",
        scamIndices: [0, 1, 4]
    },
    {
        text: "Venmo Payment Request: Your friend Jessica Martinez sent you a payment request for $45.00 with the note 'dinner last night'. Open the Venmo app to pay or decline this request. You can also view this request by logging into venmo.com.",
        scamIndices: []
    },
    {
        text: "Apple Store Receipt: You've been charged $899.99 for a new iPhone 15 Pro Max. If you did not make this purchase, cancel the order immediately by clicking here: apple-store-cancel.net. This charge will appear on your credit card within 24-48 hours. Act fast to prevent this transaction!",
        scamIndices: [1, 2, 4]
    },
    {
        text: "Hi Mom! My phone broke and I'm texting from a friend's number. I need to pay for the repair today but my bank app isn't working. Can you Venmo me $300? I'll pay you back as soon as I get home. This is my friend's number: (555) 987-6543. Love you!",
        scamIndices: [2, 3]
    },
    {
        text: "Your credit score has dropped 50 points! See what's hurting your credit and get your free credit report at freecreditscore-now.com. Enter your social security number and banking information to access your full report instantly. This service is 100% free for a limited time only!",
        scamIndices: [0, 1, 2, 3]
    },
    {
        text: "Meeting Reminder: Our team standup is at 10 AM tomorrow in Conference Room B. Please bring updates on your current projects. We'll also be discussing the Q4 budget allocation. Coffee and bagels will be provided. See you there!",
        scamIndices: []
    },
    {
        text: "Netflix account on hold: Your last payment was declined. Update your payment method within 24 hours to avoid account suspension. Click here to update billing: netflix-billing-update.com. You won't be able to watch anything until this is resolved. We value you as a member!",
        scamIndices: [0, 1, 2]
    }
];

// Game State
let currentMessageIndex = 0;
let correctCount = 0;
let incorrectCount = 0;
let strikes = 0;
let clickedSentences = new Set();
let totalSentences = 0;
let selectedMessages = [];
const MAX_STRIKES = 3;
const MESSAGES_PER_GAME = 5;

// Shuffle array helper function
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

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
const strikeCountSpan = document.getElementById('strikeCount');

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
    strikes = 0;
    
    // Select 5 random messages from the pool of 20
    selectedMessages = shuffleArray(messages).slice(0, MESSAGES_PER_GAME);
    
    updateScore();
    loadMessage();
}

function loadMessage() {
    const message = selectedMessages[currentMessageIndex];
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
        // Correctly identified a scam sentence
        sentenceElement.classList.add('correct');
        correctCount++;
    } else {
        // Incorrectly marked a safe sentence as scam - this is a mistake!
        sentenceElement.classList.add('incorrect');
        incorrectCount++;
        strikes++;
        
        // Check if player has 3 strikes - GAME OVER
        if (strikes >= MAX_STRIKES) {
            setTimeout(() => {
                gameOver();
            }, 1000);
            return;
        }
    }
    
    updateScore();
    
    // Check if all sentences have been clicked
    if (clickedSentences.size === totalSentences) {
        nextBtn.classList.remove('hidden');
    }
}

function updateScore() {
    correctCountSpan.textContent = correctCount;
    strikeCountSpan.textContent = strikes;
}

function nextMessage() {
    currentMessageIndex++;
    
    if (currentMessageIndex < selectedMessages.length) {
        loadMessage();
    } else {
        showEndScreen();
    }
}

function showEndScreen() {
    gameScreen.classList.remove('active');
    endScreen.classList.add('active');
    
    // Calculate total scam sentences in selected messages
    const totalScamSentences = selectedMessages.reduce((sum, msg) => sum + msg.scamIndices.length, 0);
    
    // Update final score
    document.getElementById('finalCorrect').textContent = correctCount;
    document.getElementById('totalScam').textContent = totalScamSentences;
    
    // Calculate accuracy
    const accuracy = totalScamSentences > 0 ? Math.round((correctCount / totalScamSentences) * 100) : 0;
    document.getElementById('accuracy').textContent = accuracy;
}

function gameOver() {
    gameScreen.classList.remove('active');
    endScreen.classList.add('active');
    
    // Show game over message
    document.querySelector('#endScreen h1').textContent = '💔 Game Over!';
    document.querySelector('.final-score p:first-child').innerHTML = `You got <strong>3 strikes</strong> by incorrectly marking safe messages as scams!`;
    document.querySelector('.accuracy').innerHTML = `You identified <strong>${correctCount}</strong> real scam sentences before losing.`;
}

function restartGame() {
    endScreen.classList.remove('active');
    startScreen.classList.add('active');
    currentMessageIndex = 0;
    correctCount = 0;
    incorrectCount = 0;
    strikes = 0;
    clickedSentences.clear();
    
    // Reset end screen text to default
    document.querySelector('#endScreen h1').textContent = '🎉 Game Complete!';
    document.querySelector('.final-score p:first-child').innerHTML = 'You identified <span id="finalCorrect">0</span> out of <span id="totalScam">0</span> scam sentences correctly!';
    document.querySelector('.accuracy').innerHTML = 'Accuracy: <span id="accuracy">0</span>%';
}
