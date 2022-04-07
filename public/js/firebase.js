let firebaseConfig = {
        apiKey: "AIzaSyBD26tYI4kS0_fsjD63CB-beb7wPfHoHpE",
        authDomain: "express-blog-346501.firebaseapp.com",
        projectId: "express-blog-346501",
        storageBucket: "express-blog-346501.appspot.com",
        messagingSenderId: "120620409996",
        appId: "1:120620409996:web:fad866255df874818847a9",
        measurementId: "G-WB34K231SK"
};


firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();