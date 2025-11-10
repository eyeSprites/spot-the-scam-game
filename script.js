// Game Data - Realistic text message scams with urgency, requests, and excuses
const messages = [
    {
        sender: "USPS",
        number: "+1 (855) 474-2691",
        time: "Tuesday 1:01 PM",
        text: "U.S. Post: You have a USPS parcel being cleared, due to the detection of an invalid zip code address, the parcel can not be cleared, the parcel is temporarily detained, please confirm the zip code address information in the link within 24 hours. https://usps.com-bcamkozq.vip/i (Please reply with a Y, then exit the text message and open it again to activate the link, or copy the link into your Safari browser and open it) Have a great day from the USPS team!",
        scamIndices: [1, 2, 3, 4, 5]
    },
    {
        sender: "Mom",
        number: "(555) 123-4567",
        time: "Wednesday 3:45 PM",
        text: "Hi honey! Just wanted to let you know that Dad and I will be visiting next weekend. We're planning to arrive Saturday morning around 10 AM. Do you need us to bring anything? Also, we made dinner reservations at that Italian place you love for Saturday night at 7 PM. Let me know if that works for you. Love you!",
        scamIndices: []
    },
    {
        sender: "FedEx Delivery",
        number: "+1 (844) 728-1147",
        time: "Monday 9:22 AM",
        text: "FedEx Alert: Your package delivery has been suspended. We attempted delivery twice but access to your building was restricted. To reschedule delivery immediately, you must pay a $3.99 redelivery fee within 48 hours or your package will be returned to sender. Click here to pay now: fedex-delivery-portal.net/pay The system doesn't accept our normal payment methods due to security upgrades, so we can only process through this secure link. Tracking: FX8847291US",
        scamIndices: [1, 2, 3, 4]
    },
    {
        sender: "Bank of America",
        number: "+1 (800) 432-1000",
        time: "Thursday 11:07 AM",
        text: "Bank of America Security Alert: A charge of $1,247.89 at Best Buy in Miami, FL was flagged by our fraud detection system. If you did not make this purchase, please call the number on the back of your card immediately at 1-800-432-1000 or log into the BofA mobile app to dispute the transaction. Your card has been temporarily locked for your protection. Reference #: BOA-FR-8847.",
        scamIndices: []
    },
    {
        sender: "IRS Tax Services",
        number: "+1 (866) 441-2155",
        time: "Friday 8:15 AM",
        text: "FINAL NOTICE: IRS records show you owe $4,287 in back taxes for 2023. You must call our Priority Resolution Department within 24 hours or a federal warrant will be issued for your arrest. Call 1-866-441-2155 immediately. We can only accept payment via Apple/Google gift cards due to IRS system maintenance. Our regular payment portal is temporarily offline. Do not ignore this urgent matter. Case #IRS-2024-8847",
        scamIndices: [0, 1, 2, 3, 4]
    },
    {
        sender: "Amazon",
        number: "+1 (888) 280-4331",
        time: "Saturday 2:33 PM",
        text: "Your Amazon order #284-7192847-9182473 has shipped! Wireless Bluetooth Headphones - Sony WH-1000XM5 will arrive Nov 13-15. Track your package in the Amazon app or at amazon.com/orders. If you have questions, visit our Help Center or call 1-888-280-4331. Thank you for shopping with Amazon!",
        scamIndices: []
    },
    {
        sender: "Unknown",
        number: "+1 (844) 555-0147",
        time: "Sunday 6:47 PM",
        text: "Mom, it's me! My phone broke and I'm using a friend's number. I'm in serious trouble - I got arrested for DUI and I'm at the police station. I need $2,500 for bail RIGHT NOW or I'll be stuck here all weekend! Please don't tell Dad, I'm so embarrassed. The bail bondsman only accepts Zelle or Venmo because their credit card system is down. Can you send it to this Venmo: @BailBonds_247? I only have one phone call and my battery is dying. PLEASE HURRY! I love you mom ❤️",
        scamIndices: [0, 2, 3, 4, 5, 6, 7]
    },
    {
        sender: "Toll Services FL",
        number: "+1 (855) 865-5465",
        time: "Monday 10:12 AM",
        text: "Florida Turnpike E-PASS: You have an unpaid toll of $6.50 from Nov 3rd. Your vehicle (plate ending 4J7B) was captured by toll cameras. Pay within 5 days to avoid a $25 late fee. Visit pay-florida-tolls.com/invoice Due to high traffic, our phone lines are down so you must pay online only. Enter plate number and credit card to settle. Invoice #FTP-8847291",
        scamIndices: [2, 3, 4]
    },
    {
        sender: "Netflix",
        number: "+1 (844) 505-2993",
        time: "Tuesday 7:23 PM",
        text: "Your Netflix subscription payment of $15.49 has been successfully processed. Your account is active and you can continue enjoying unlimited streaming. If you notice any unauthorized activity, please visit netflix.com/account or call us at 1-844-505-2993. Thanks for being a member!",
        scamIndices: []
    },
    {
        sender: "PayPal Security",
        number: "+1 (888) 221-1161",
        time: "Wednesday 4:55 PM",
        text: "URGENT PayPal Alert: Someone tried to send $847 from your account to an unknown recipient in Vietnam. We blocked this transaction but your account is now limited. You must verify your identity within 12 hours or your account will be permanently suspended and funds frozen. Click here immediately: paypal-secure-verify.com/account Our verification center is temporarily closed for maintenance so you MUST use this link. Enter your email, password, and last 4 of SSN. Case #PP-8847-VN",
        scamIndices: [0, 1, 2, 3, 4]
    },
    {
        sender: "Apple",
        number: "+1 (800) 692-7753",
        time: "Thursday 11:28 AM",
        text: "Apple ID Security: Your Apple ID was used to sign in to iCloud on a Windows PC in Moscow, Russia on Nov 10 at 3:42 AM EST. If this was not you, please change your password immediately at appleid.apple.com and enable two-factor authentication. For help, contact Apple Support at 1-800-692-7753 or visit support.apple.com/apple-id.",
        scamIndices: []
    },
    {
        sender: "Social Security",
        number: "+1 (866) 593-0229",
        time: "Friday 9:41 AM",
        text: "SSA SUSPENSION ALERT: Your Social Security Number has been suspended due to suspicious activity linked to fraud in Texas. Your SSN was used to open 3 bank accounts. You must call 1-866-593-0229 IMMEDIATELY to speak with an investigator or a warrant will be issued for your arrest within 24 hours. We cannot email or mail you because this is time-sensitive. Our office can only handle this matter by phone due to federal privacy laws. Press 1 now. Case #SSA-FR-8847",
        scamIndices: [0, 1, 2, 3, 4, 5]
    },
    {
        sender: "Wells Fargo",
        number: "+1 (800) 869-3557",
        time: "Saturday 1:15 PM",
        text: "Wells Fargo Fraud Alert: We declined a $897.50 charge at Target in Phoenix, AZ on your debit card ending in 4721. If you didn't make this purchase, no action needed - we've blocked the transaction. To unblock your card or report other issues, call 1-800-869-3557 or use the Wells Fargo app. Your account is secure.",
        scamIndices: []
    },
    {
        sender: "Package Delivery",
        number: "+1 (844) 474-8477",
        time: "Sunday 3:08 PM",
        text: "Your package from China is held at customs. Import tax of $8.75 must be paid within 72 hours or package returns to sender. Pay immediately at customs-clearance-usa.net/pay Our customs office is closed weekends so online payment is your only option right now. Package contains: Electronics. Tracking: CN8847291US. This is your final notice before automatic return!",
        scamIndices: [1, 2, 3, 4]
    },
    {
        sender: "Amazon Support",
        number: "+1 (888) 280-4331",
        time: "Monday 8:52 AM",
        text: "Hello! This is Raj from Amazon Customer Service. I'm following up on your recent inquiry about order #284-7192847. As discussed, we've issued a full refund of $89.99 to your original payment method. The refund should appear in 3-5 business days. Is there anything else I can help you with today? You can reach us anytime at 1-888-280-4331 or through the Amazon app. Have a great day!",
        scamIndices: []
    },
    {
        sender: "Venmo",
        number: "+1 (855) 812-4430",
        time: "Tuesday 5:37 PM",
        text: "Venmo Payment Request: @SarahJ_Mom sent you a payment request for $25.00 with note: \"Pizza from last night 🍕\" You can pay or decline in the Venmo app. If you have questions about this request, contact the sender directly. Need help? Visit help.venmo.com or call 1-855-812-4430.",
        scamIndices: []
    },
    {
        sender: "Unknown Sender",
        number: "+1 (844) 555-0192",
        time: "Wednesday 11:04 AM",
        text: "Hey Dad! Car emergency! My car broke down on I-95 near exit 47. Tow truck guy is here (Mike's Towing) but he only takes Cash App or Venmo - his card reader isn't working. Need $180 ASAP for the tow or he'll leave me here! Can you send to @Towtruck_Mike right now? My phone is at 8% battery so I might not respond. I'll pay you back tonight I promise! This is so stressful 😰",
        scamIndices: [0, 2, 3, 4, 5]
    },
    {
        sender: "Microsoft 365",
        number: "+1 (800) 642-7676",
        time: "Thursday 2:19 PM",
        text: "Your Microsoft 365 subscription expires in 7 days on Nov 17, 2024. To continue using Word, Excel, PowerPoint and 1TB OneDrive storage, your subscription will auto-renew at $69.99/year. No action needed if auto-renewal is on. Manage your subscription at account.microsoft.com or call 1-800-642-7676. Thank you for being a valued subscriber!",
        scamIndices: []
    },
    {
        sender: "Walmart Rewards",
        number: "+1 (844) 925-6278",
        time: "Friday 4:41 PM",
        text: "🎉 WINNER ALERT! You've been selected for a $500 Walmart gift card! To claim your prize, verify your identity at walmart-rewards-claim.net within 48 hours. Complete a 2-min survey about your shopping habits. This is time-sensitive - prizes expire fast! Our call center is overwhelmed with winners right now so please use the website only. Don't miss out! Winner Code: WM-2024-8847 ✨",
        scamIndices: [0, 1, 2, 3, 4]
    },
    {
        sender: "Chase Bank",
        number: "+1 (800) 935-9935",
        time: "Saturday 9:33 AM",
        text: "Chase Fraud Alert: We blocked a $2,450.00 charge at Best Buy in Los Angeles, CA on your Chase debit card. If this wasn't you, call 1-800-935-9935 immediately or use the Chase app to report fraud. Your card is temporarily locked for protection. DO NOT share your PIN or full card number with anyone. We'll never ask for that info. Reference #: CH-FR-8847",
        scamIndices: []
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
    
    // Select 5 random messages from the pool
    selectedMessages = shuffleArray(messages).slice(0, MESSAGES_PER_GAME);
    
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
    const isSuspicious = message.number.includes('+1') && (
        message.sender === 'Unknown' || 
        message.sender === 'Unknown Sender' ||
        !message.number.match(/^[\(\d\s\)-]+$/) // Check if number looks weird
    );
    
    if (isSuspicious) {
        // Correct - identified suspicious contact
        correctCount++;
        if (type === 'name') {
            contactName.style.backgroundColor = 'rgba(50, 215, 75, 0.3)';
            contactName.style.color = '#32d74b';
        } else {
            contactNumber.style.backgroundColor = 'rgba(50, 215, 75, 0.3)';
            contactNumber.style.color = '#32d74b';
        }
    } else {
        // Incorrect - this is a legit contact
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
    correctCountSpan.textContent = correctCount;
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
