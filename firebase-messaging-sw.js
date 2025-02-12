// Please see this file for the latest firebase-js-sdk version:
// https://github.com/firebase/flutterfire/blob/master/packages/firebase_core/firebase_core_web/lib/src/firebase_sdk_version.dart
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyATxJxLZOt3kDDJTARsuJLMk9kbsOzdbKg",
    authDomain: "nmpts-backend.firebaseapp.com",
    projectId: "nmpts-backend",
    storageBucket: "nmpts-backend.appspot.com",
    messagingSenderId: "1027738076676",
    appId: "1:1027738076676:web:1befbdcb19ca7c97001751",
    measurementId: "G-62L2NZMRQR"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
    console.log("onBackgroundMessage", message);
});