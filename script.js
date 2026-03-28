// deviceDetection.js

// Device detection logic
function getDeviceInfo() {
    const userAgent = navigator.userAgent;
    let deviceType = '';

    if (/android/i.test(userAgent)) {
        deviceType = 'Android';
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
        deviceType = 'iOS';
    } else if (/windows phone/i.test(userAgent)) {
        deviceType = 'Windows Phone';
    } else {
        deviceType = 'Desktop';
    }

    return {
        deviceType: deviceType,
        userAgent: userAgent
    };
}

// messaging functionality
function showMessage(message) {
    const messageContainer = document.getElementById('messages');
    const msgElement = document.createElement('div');
    msgElement.textContent = message;
    messageContainer.appendChild(msgElement);
}

// real-time chat features
const socket = new WebSocket('ws://your-websocket-url');

socket.onopen = () => {
    console.log('Connected to WebSocket server');
};

socket.onmessage = (event) => {
    const messageData = JSON.parse(event.data);
    showMessage(messageData.message);
};

function sendMessage(message) {
    socket.send(JSON.stringify({ message: message }));
}
