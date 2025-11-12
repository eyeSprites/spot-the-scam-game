// Game Data - Realistic text message scams with urgency, requests, and excuses
const messages = [
    {
        sender: "USPS",
        number: "+44 7911 123456",
        time: "Tuesday 1:01 PM",
        text: "U.S. Post: You have a USPS parcel being cleared, due to the detection of an invalid zip code address, the parcel can not be cleared. The parcel is temporarily detained. Please confirm the zip code address information in the link within 24 hours or it will be returned. Visit: https://usps-clearance-portal.com/verify Our main system is temporarily down so you must use this secure link to update your information. Failure to respond will result in package destruction. Confirmation Code: USPS-2024-9472",
        scamIndices: [0, 1, 2, 3, 4, 5]
    },
    {
        sender: "FedEx Delivery",
        number: "+91 98765 43210",
        time: "Monday 9:22 AM",
        text: "FedEx URGENT Alert: Your package delivery has been suspended due to incomplete address information. We attempted delivery 3 times but could not reach you. You must pay a $4.99 redelivery processing fee within 48 hours. The package will be returned to sender if payment is not received immediately. Visit: fedex-reschedule-delivery.net/pay Our credit card processing system is under maintenance so payment must be made through the secure portal only. Tracking number: FDX8847291-US",
        scamIndices: [0, 1, 2, 3, 4, 5]
    },
    {
        sender: "IRS Tax Services",
        number: "+234 802 555 0199",
        time: "Friday 8:15 AM",
        text: "FINAL LEGAL NOTICE: IRS records indicate you owe $4,287 in unpaid back taxes for fiscal year 2023. You have 24 hours to contact our Priority Resolution Department or a federal arrest warrant will be issued. Payment can only be accepted via Apple gift cards or Google Play cards due to emergency system maintenance. Call 1-866-441-2155 immediately. Our online payment portal is temporarily offline for security updates. This is your last warning before legal action is taken. Case Number: IRS-FR-2024-8847",
        scamIndices: [0, 1, 2, 3, 4, 5, 6]
    },
    {
        sender: "Unknown",
        number: "+63 917 555 0147",
        time: "Sunday 6:47 PM",
        text: "Hey Mom it's me! My phone broke and I'm using a friend's number in the Philippines. I got arrested for DUI and I'm at the police station right now. I need $2,500 for bail IMMEDIATELY or I'll be stuck in jail all weekend! Please don't tell Dad, I'm so embarrassed about this. The bail bondsman's credit card machine is broken so he only accepts Zelle or Venmo right now. Can you send it to @Emergency_Bail_247? My phone battery is dying and this is my only call. PLEASE HURRY MOM! Time is running out! Love you ❤️",
        scamIndices: [0, 1, 2, 3, 4, 5, 6, 7]
    },
    {
        sender: "Toll Services FL",
        number: "+86 138 0000 5465",
        time: "Monday 10:12 AM",
        text: "Florida E-PASS Toll Violation: Your vehicle (license plate ending in 4J7B) was captured by toll cameras on I-95. You have an unpaid toll balance of $6.50 from November 3rd. Pay within 5 days to avoid a $50 late penalty fee. Visit: florida-toll-payment.net/invoice Due to extremely high call volume, our phone lines are completely down. You must pay online immediately. Enter your license plate number and credit card information to settle this violation. If payment is not received, your vehicle registration will be suspended. Invoice #FTP-8847291",
        scamIndices: [0, 2, 3, 4, 5, 6]
    },
    {
        sender: "PayPal Security",
        number: "+52 55 5555 1161",
        time: "Wednesday 4:55 PM",
        text: "CRITICAL PayPal Security Alert: We detected someone attempting to transfer $847.00 from your account to an unknown recipient in Vietnam. This suspicious transaction has been blocked for your protection. Your account is now under temporary limitation. You must verify your identity within 12 hours or your account will be permanently suspended and all funds will be frozen. Click here to verify: paypal-account-secure.com/verify Our verification center is closed for emergency maintenance so you MUST use this secure link. Enter your email, password, and last 4 digits of your Social Security Number. Case Reference: PP-VN-8847",
        scamIndices: [1, 2, 3, 4, 5, 6]
    },
    {
        sender: "Apple Security",
        number: "+7 495 555 7753",
        time: "Thursday 11:28 AM",
        text: "Apple ID Critical Security Alert: Your Apple ID was used to sign in to iCloud on a Windows computer in Moscow, Russia at 3:42 AM EST today. If this was not you, your account may be compromised. You must change your password immediately within 6 hours. Visit: apple-id-security.com/reset Our phone support is unavailable due to high call volume so please use the secure link above. Enter your current Apple ID and password to verify your identity and create a new secure password. Failure to act will result in permanent account suspension. Security Code: APPL-RU-8847",
        scamIndices: [0, 1, 2, 3, 4, 5]
    },
    {
        sender: "Social Security Admin",
        number: "+60 12 345 0229",
        time: "Friday 9:41 AM",
        text: "SSA URGENT SUSPENSION NOTICE: Your Social Security Number has been suspended immediately due to suspicious activity linked to fraud in Texas. Your SSN was used to open 3 fraudulent bank accounts. You must call our investigation unit at 1-866-593-0229 within 24 hours or a federal arrest warrant will be issued in your name. We cannot send email or mail for security reasons. Our office can only handle this matter by phone due to federal privacy laws. Press 1 to speak with an investigator now. Ignoring this notice will result in criminal charges. Case File: SSA-TX-FR-8847",
        scamIndices: [0, 1, 2, 3, 4, 5, 6]
    },
    {
        sender: "Package Customs",
        number: "+7 495 555 8477",
        time: "Sunday 3:08 PM",
        text: "US Customs Notice: Your international package from China is being held at the customs facility. An import tax of $12.75 must be paid within 72 hours or the package will be returned to sender and you will be charged a $45 restocking fee. Visit immediately: us-customs-clearance.net/pay Our customs offices are closed on weekends so online payment is your only option right now. Package contents: Electronics (Apple AirPods). Enter your tracking number and credit card to release your package. This is your final notice before automatic return and penalty fees. Tracking: CN8847291US",
        scamIndices: [0, 1, 2, 3, 4, 5, 6]
    },
    {
        sender: "Unknown Sender",
        number: "+92 300 5550192",
        time: "Wednesday 11:04 AM",
        text: "Dad it's me! EMERGENCY! My car just broke down on Interstate 95 near exit 47. The tow truck driver is here right now (Mike's Towing) but he says his credit card reader is broken and he only accepts Cash App or Venmo. I need $180 RIGHT NOW for the tow or he's going to leave me stranded on the highway! Can you please send it to his Venmo @Towing_Services_Mike immediately? My phone is at 5% battery so I might not be able to respond. I promise I'll pay you back tonight when I get home! This is so stressful and scary! Please hurry Dad!",
        scamIndices: [0, 1, 2, 3, 4, 5, 6]
    },
    {
        sender: "Prize Winner Team",
        number: "+880 1711 555278",
        time: "Friday 4:41 PM",
        text: "🎉 CONGRATULATIONS WINNER! You've been randomly selected to receive a $750 Amazon gift card in our customer loyalty program! To claim your prize immediately, verify your identity at amazon-prize-center.com within 24 hours only. Complete our quick 3-minute survey about your shopping experience. This is extremely time-sensitive as prizes expire within 24 hours! Our phone lines are currently down due to overwhelming response so please use the secure website link only. Enter your full name, email, phone number, and shipping address to claim. Winner Confirmation Code: AMZ-WINNER-8847 ✨",
        scamIndices: [0, 1, 2, 3, 4, 5, 6]
    },
    {
        sender: "Bank Security Dept",
        number: "+234 803 777 9935",
        time: "Saturday 9:33 AM",
        text: "URGENT Chase Bank Security Alert: We have detected unusual activity on your account. A charge of $2,847.50 at an electronics store in Los Angeles, CA was just processed. If you did not authorize this transaction, you must call our fraud department at 1-800-935-9935 within 2 hours. Your debit card has been temporarily frozen for your protection. To unlock your card immediately, visit: chase-security-unlock.com and enter your card number, CVV, and PIN. Our phone system is experiencing technical difficulties so the website is the fastest way to restore access. Waiting longer than 2 hours will result in permanent card cancellation. Reference Code: CH-SEC-8847",
        scamIndices: [1, 2, 3, 4, 5, 6]
    },
    {
        sender: "Microsoft Security",
        number: "+91 22 5555 7676",
        time: "Thursday 2:19 PM",
        text: "Microsoft Account Security Warning: Your Microsoft 365 account was accessed from an unrecognized device in Beijing, China at 11:47 PM last night. This login appeared suspicious to our security systems. If this was not you, your account may have been compromised and we must take immediate action. Click here to secure your account now: microsoft-security-verify.com/account You have 6 hours to verify your identity before we permanently disable your account. Our security call center is closed for maintenance so you must use the online verification system. Enter your email, current password, and phone number to confirm your identity. Session ID: MSFT-CN-2024-8847",
        scamIndices: [0, 1, 2, 3, 4, 5, 6]
    },
    {
        sender: "Netflix Account Team",
        number: "+63 917 505 2993",
        time: "Tuesday 7:23 PM",
        text: "Netflix Payment Failed: We were unable to process your subscription payment of $19.99 for this month. Your account will be suspended in 24 hours unless you update your payment information immediately. To avoid service interruption, please visit: netflix-billing-update.com/payment and re-enter your credit card details. Our automated phone system is currently offline for upgrades so you must use the secure payment portal. Failure to update within 24 hours will result in permanent account deletion and loss of your viewing history and preferences. Account ID: NFLX-8847-2024",
        scamIndices: [0, 1, 2, 3, 4, 5]
    },
    {
        sender: "Amazon Prime Alert",
        number: "+86 138 280 4331",
        time: "Monday 8:52 AM",
        text: "Amazon Prime Membership Suspended: We attempted to charge your card for your annual Prime membership renewal of $139.99 but the payment was declined. Your Prime benefits have been temporarily suspended. To restore your membership and continue enjoying free shipping and Prime Video, you must update your payment method within 48 hours. Visit: amazon-prime-renew.com/billing Our customer service lines are experiencing high wait times of over 2 hours, so please use the express online payment portal for immediate restoration. Enter your account email, password, and new credit card information. Membership ID: PRIME-8847-2024",
        scamIndices: [0, 1, 2, 3, 4, 5]
    }
];

// Game State
let currentMessageIndex = 0;
let correctCount = 0;
let incorrectCount = 0;
let strikes = 0;
let clickedSentences = new Set();
let totalSentences = 0;
let totalScamSentences = 0;
let selectedMessages = [];
const MAX_STRIKES = 3;
const MESSAGES_PER_GAME = 3;

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
const contactName = document.getElementById('contactName');
const contactNumber = document.getElementById('contactNumber');
const messageTime = document.getElementById('messageTime');

// Event Listeners
startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', nextMessage);
restartBtn.addEventListener('click', restartGame);

// Make contact info clickable
contactName.addEventListener('click', () => handleContactClick('name'));
contactNumber.addEventListener('click', () => handleContactClick('number'));

// Game Functions
function startGame() {
    startScreen.classList.remove('active');
    gameScreen.classList.add('active');
    currentMessageIndex = 0;
    correctCount = 0;
    incorrectCount = 0;
    strikes = 0;
    totalScamSentences = 0;
    
    // Select 3 random messages from the pool
    selectedMessages = shuffleArray(messages).slice(0, MESSAGES_PER_GAME);
    
    // Calculate total scam sentences across all 3 messages
    selectedMessages.forEach(msg => {
        totalScamSentences += msg.scamIndices.length;
    });
    
    updateScore();
    loadMessage();
}

function loadMessage() {
    const message = selectedMessages[currentMessageIndex];
    clickedSentences.clear();
    
    // Set contact info
    contactName.textContent = message.sender;
    contactNumber.textContent = message.number;
    messageTime.textContent = message.time;
    
    // Split text into sentences
    const sentences = message.text.match(/[^.!?]+[.!?]+/g) || [message.text];
    totalSentences = sentences.length;
    
    // Update progress
    currentMessageSpan.textContent = currentMessageIndex + 1;
    
    // Create clickable sentences with link detection
    messageContent.innerHTML = '';
    sentences.forEach((sentence, index) => {
        const span = document.createElement('span');
        span.className = 'sentence';
        
        // Check if sentence contains a URL and make it glow
        if (sentence.match(/https?:\/\/[^\s]+|www\.[^\s]+|\.[a-z]{2,6}\/[^\s]+/i)) {
            span.innerHTML = sentence.replace(/(https?:\/\/[^\s]+|www\.[^\s]+|[a-z0-9-]+\.[a-z]{2,6}\/[^\s]+)/gi, 
                '<span class="link">$1</span>');
        } else {
            span.textContent = sentence;
        }
        
        span.dataset.index = index;
        span.addEventListener('click', () => handleSentenceClick(index, message.scamIndices));
        messageContent.appendChild(span);
        messageContent.appendChild(document.createTextNode(' '));
    });
    
    nextBtn.classList.add('hidden');
}

function handleContactClick(type) {
    const message = selectedMessages[currentMessageIndex];
    
    // Check if the phone number is suspicious (international number for US company)
    // All our scam messages have international numbers, so they're all suspicious
    const hasInternationalNumber = !message.number.match(/^\+1|^\(|^\d{3}/);
    
    if (hasInternationalNumber) {
        // Correct - identified suspicious contact with international number
        correctCount++;
        if (type === 'name') {
            contactName.style.backgroundColor = 'rgba(50, 215, 75, 0.3)';
            contactName.style.color = '#32d74b';
            setTimeout(() => {
                contactName.textContent += ' ✓ Suspicious!';
            }, 100);
        } else {
            contactNumber.style.backgroundColor = 'rgba(50, 215, 75, 0.3)';
            contactNumber.style.color = '#32d74b';
            setTimeout(() => {
                contactNumber.textContent += ' ✓ Wrong Country!';
            }, 100);
        }
    } else {
        // Incorrect - this is a legit US contact
        strikes++;
        incorrectCount++;
        if (type === 'name') {
            contactName.style.backgroundColor = 'rgba(255, 69, 58, 0.3)';
            contactName.style.color = '#ff453a';
        } else {
            contactNumber.style.backgroundColor = 'rgba(255, 69, 58, 0.3)';
            contactNumber.style.color = '#ff453a';
        }
        
        if (strikes >= MAX_STRIKES) {
            setTimeout(() => {
                gameOver();
            }, 1000);
            return;
        }
    }
    
    updateScore();
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
    correctCountSpan.textContent = `${correctCount}/${totalScamSentences}`;
    strikeCountSpan.textContent = strikes;
}

function nextMessage() {
    // Reset contact info colors
    contactName.style.backgroundColor = '';
    contactName.style.color = '';
    contactNumber.style.backgroundColor = '';
    contactNumber.style.color = '';
    
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
