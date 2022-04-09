var firebaseConfig = {
    apiKey: "AIzaSyAcUnZp6Byk4GSjUeGe4-bkXsBnMW2iGrU",
    authDomain: "grouptrade-3c957.firebaseapp.com",
    databaseURL: "https://grouptrade-3c957-default-rtdb.firebaseio.com",
    projectId: "grouptrade-3c957",
    storageBucket: "grouptrade-3c957.appspot.com",
    messagingSenderId: "370408999855",
    appId: "1:370408999855:web:f78cd9969e45ad5903fd5a",
    measurementId: "G-8ZXNLHEST4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// initialize database
const db = firebase.database();

// get user's data
const username = prompt("Please Tell Us Your Name");

// submit form
// listen for submit event on the form and call the postChat function
document.getElementById("message-form").addEventListener("submit", sendMessage);

// send message to db
function sendMessage(e) {
    e.preventDefault();

    // get values to be submitted
    const timestamp = Date.now();
    const messageInput = document.getElementById("message-input");
    const message = messageInput.value;

    // clear the input box
    messageInput.value = "";

    //auto scroll to bottom
    document
        .getElementById("messages")
        .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

    // create db collection and send in the data
    db.ref("messages/" + timestamp).set({
        username,
        message,
        timestamp,
    });
}

// display the messages
// reference the collection created earlier
const fetchChat = db.ref("messages/");

// check for new messages using the onChildAdded event listener
fetchChat.on("child_added", function(snapshot) {
    const messages = snapshot.val();
    const message = `<li class=${
      username === messages.username ? "sent" : "receive"
    }> <span>${messages.username}: </span>${messages.message}</li>`;
    // append the message on the page
    document.getElementById("messages").innerHTML += message;
});
