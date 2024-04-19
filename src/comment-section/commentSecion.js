// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhsNrY4cNctA3qh7dfrtYfqswzIun0190",
  authDomain: "animeblogz-fd391.firebaseapp.com",
  projectId: "animeblogz-fd391",
  storageBucket: "animeblogz-fd391.appspot.com",
  messagingSenderId: "996426784648",
  appId: "1:996426784648:web:41b79137adefb1fb86643d",
  measurementId: "G-BJN1W0KPXW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

async function addComment(blogId, comment, name, timestamp) {
  // Add a new document with a generated id.
  try {
    const docRef = await addDoc(collection(db, "comments"), {
      blogId: blogId,
      comment: comment,
      name: name,
      timestamp: timestamp,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getComments(blogId) {
  const querySnapshot = await getDocs(collection(db, "comments"));
  const allComments = [];
  querySnapshot.forEach((doc) => {
    allComments.push(doc.data());
  });
  const comments = allComments.filter(
    (comment) => comment.blogId === parseInt(blogId)
  );

  return comments;
}

export { addComment, getComments };
