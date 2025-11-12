// Game Data - Realistic text message scams with urgency, requests, and excuses
const messages = [
    {
        sender: "USPS",
        number: "+44 7911 123456",
        time: "Tuesday 1:01 PM",
        text: "U.S. Postal Service Alert:\n\nYou have a USPS parcel (#US847291938472) currently being cleared at our distribution center. Due to the detection of an invalid or incomplete zip code address, the parcel cannot be cleared and has been temporarily detained.\n\nPlease confirm your zip code address information through the secure link within 24 hours or the package will be automatically returned to sender.\n\nVisit: https://usps-clearance-portal.com/verify\n\nOur main verification system is temporarily down for maintenance, so you must use this secure link to update your information immediately. Failure to respond within 24 hours will result in permanent package destruction and a $45.00 processing fee.\n\nConfirmation Code: USPS-2024-9472",
        scamIndices: [1, 2, 3, 4, 5]
    },
    {
        sender: "FedEx Delivery",
        number: "+91 98765 43210",
        time: "Monday 9:22 AM",
        text: "FedEx Express URGENT Delivery Alert:\n\nYour package delivery (Tracking #FDX8847291847) has been suspended due to incomplete address information in our system. Our driver attempted delivery 3 times on November 10th, 11th, and 12th but was unable to access your building or reach you by phone.\n\nYou must pay a mandatory $4.99 redelivery processing fee within the next 48 hours to reschedule delivery. If payment is not received immediately, the package will be returned to sender and you will forfeit the contents.\n\nVisit our secure payment portal: fedex-reschedule-delivery.net/pay\n\nOur standard credit card processing system is currently under emergency maintenance, so all payments must be made through the secure online portal only. Phone support is unavailable at this time.\n\nPackage Contents: Electronics\nOriginal Delivery Fee: $12.50\nRedelivery Fee: $4.99",
        scamIndices: [1, 2, 3, 4, 5]
    },
    {
        sender: "IRS Tax Services",
        number: "+234 802 555 0199",
        time: "Friday 8:15 AM",
        text: "FINAL LEGAL NOTICE - Internal Revenue Service:\n\nIRS records indicate that you owe $4,287.50 in unpaid federal back taxes for fiscal year 2023. This debt is now 90 days past due and has been escalated to our Priority Resolution Department.\n\nYou have exactly 24 hours from receipt of this message to contact us or a federal arrest warrant will be issued in your name for tax evasion. Payment can only be accepted via Apple gift cards ($500.00 denominations) or Google Play gift cards due to our emergency system maintenance.\n\nCall our Priority Resolution Department immediately at: 1-866-441-2155\n\nOur secure online payment portal is temporarily offline for critical security updates and will not be available for 72 hours. We cannot accept checks, credit cards, or bank transfers at this time due to federal privacy regulations.\n\nThis is your final warning before legal action is taken and your assets are frozen.\n\nCase Number: IRS-FR-2024-8847\nAmount Due: $4,287.50\nPenalty if Unpaid: $8,500.00",
        scamIndices: [1, 2, 3, 4, 5, 6]
    },
    {
        sender: "Unknown",
        number: "+63 917 555 0147",
        time: "Sunday 6:47 PM",
        text: "Hey Mom, it's me!\n\nI know this is a weird number - my iPhone completely broke and I had to borrow my friend Sarah's phone (she's from the Philippines, that's why it's an international number).\n\nMom, I'm in serious trouble. I got arrested for DUI about 2 hours ago and I'm currently at the downtown police station. I need $2,500.00 for bail IMMEDIATELY or I'll be stuck in jail all weekend until Monday morning!\n\nPlease, PLEASE don't tell Dad about this. I'm so embarrassed and ashamed. He'll be so disappointed in me.\n\nThe bail bondsman here says his credit card machine is broken right now (something about their system being down), so he can only accept Zelle or Venmo payments at the moment. Can you send the $2,500.00 to his Venmo: @Emergency_Bail_247?\n\nMy phone battery is at 3% and dying fast. This is literally my only phone call they're allowing me. I won't be able to text you back if it dies.\n\nPLEASE HURRY MOM! The bondsman says he's leaving in 30 minutes and then I'm stuck here until Monday!\n\nI love you so much. I'm so sorry. ❤️",
        scamIndices: [2, 3, 4, 5, 6, 7]
    },
    {
        sender: "Toll Services FL",
        number: "+86 138 0000 5465",
        time: "Monday 10:12 AM",
        text: "Florida Turnpike E-PASS Toll Violation Notice:\n\nVehicle License Plate: ****4J7B\nViolation Date: November 3rd, 2024\nLocation: I-95 Northbound, Mile Marker 127\n\nYour vehicle was captured by our automated toll cameras and you have an unpaid toll balance of $6.50 that is now overdue. You must pay within 5 days (by November 17th) to avoid a mandatory $50.00 late penalty fee being added to your account.\n\nVisit our secure payment portal: florida-toll-payment.net/invoice\n\nDue to extremely high call volume during peak hours, our customer service phone lines are completely down and unavailable. You must pay online immediately through the portal above.\n\nPlease enter your complete license plate number and credit card information to settle this violation. If payment is not received by the deadline, your vehicle registration will be suspended by the Florida DMV.\n\nInvoice Number: FTP-8847291\nToll Amount: $6.50\nLate Fee (if unpaid): $50.00\nTotal if Paid Today: $6.50",
        scamIndices: [3, 4, 5, 6, 7]
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
let currentMessageScams = 0;
let currentMessageScamsFound = 0;
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
const notification = document.getElementById('notification');

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
    
    // Track scams for current message
    currentMessageScams = message.scamIndices.length;
    currentMessageScamsFound = 0;
    
    // Reset and set contact info
    contactName.style.backgroundColor = '';
    contactName.style.color = '';
    contactNumber.style.backgroundColor = '';
    contactNumber.style.color = '';
    contactName.textContent = message.sender;
    contactNumber.textContent = message.number;
    messageTime.textContent = message.time;
    
    // Split text into sentences (but not on decimal points in numbers)
    const sentences = message.text.match(/[^.!?]+(?:\.\d+)?[.!?]+/g) || [message.text];
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
        currentMessageScamsFound++;
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
    // Check if user found all scams in previous message
    showNotification();
    
    currentMessageIndex++;
    
    // Small delay before loading next message to show notification
    setTimeout(() => {
        if (currentMessageIndex < selectedMessages.length) {
            loadMessage();
        } else {
            showEndScreen();
        }
    }, 600);
}

function showNotification() {
    // Hide notification first (in case it's still showing)
    notification.classList.remove('show', 'success', 'error');
    
    // Small delay to ensure clean state
    setTimeout(() => {
        // Check if all scams were found
        if (currentMessageScamsFound === currentMessageScams) {
            // Success - got all scams!
            notification.textContent = '✅ Perfect! You got all scams in the previous message!';
            notification.classList.add('success');
        } else {
            // Missed some scams
            const missed = currentMessageScams - currentMessageScamsFound;
            notification.textContent = `❌ You missed ${missed} scam${missed > 1 ? 's' : ''} in the previous message!`;
            notification.classList.add('error');
        }
        
        // Show notification
        notification.classList.add('show');
        
        // Hide after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show');
        }, 5000);
    }, 100);
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
