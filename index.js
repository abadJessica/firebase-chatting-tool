  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
  import {
    getDatabase,
    ref,
    child,
    get,
    push,
    set,
    onValue,
    serverTimestamp
  } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-database.js";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBWD_vKbkhHH4ShTr-D5BTuhloLDfDWgcU",
    authDomain: "humberdemo-8a0f8.firebaseapp.com",
    projectId: "humberdemo-8a0f8",
    storageBucket: "humberdemo-8a0f8.firebasestorage.app",
    messagingSenderId: "565063997958",
    appId: "1:565063997958:web:9c937e1d12d41d335ec187"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const database = getDatabase();

  const messages = ref(database, "/messages");

  onValue(
    messages,
    (snapshot) => {
  
      let ul = document.getElementById("messages");
      ul.innerHTML = "";
      
      snapshot.forEach((childSnapshot) => {
  
        const childKey = childSnapshot.key;   
        const childData = childSnapshot.val();
  
        // console.log(childKey);
        // console.log(childData.name);
  
        let li = document.createElement("li");
  
        let text = document.createTextNode(
          childData.message + " ~ " + childData.name
        );
  
        li.appendChild(text);
        ul.appendChild(li);
              
      });
  
    }
  );

  const add = document.getElementById("add");

  add.addEventListener("click", function(){
  
      let name = document.getElementById("name");
      let message = document.getElementById("message");
  
      // console.log(name.value);
  
      // push
      // set
      let newMessage = push(messages);
  
      set(
        newMessage,
        {
          name: name.value,
          message: message.value,
          date: serverTimestamp()
        }
      );
  
  });





