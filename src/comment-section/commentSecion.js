// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  addDoc,
  where,
  query,
  getDocs,
  updateDoc,
} from "firebase/firestore";

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
// Create a transporter

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

async function addRating(blogId, rating, userId) {
  console.log("Adding or updating rating for user: ", userId, rating, blogId);
  try {
    // Check if the user has already rated the blog
    const ratingsRef = collection(db, "rating");
    const q = query(
      ratingsRef,
      where("blogId", "==", blogId),
      where("userId", "==", userId)
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      // If the user has not rated the blog yet, add a new rating document
      const docRef = await addDoc(collection(db, "rating"), {
        blogId: blogId,
        rating: rating,
        userId: userId, // Associate the rating with the user ID
      });
      console.log("Rating added with ID: ", docRef.id);
    } else {
      // If the user has already rated the blog, update their existing rating
      querySnapshot.forEach(async (doc) => {
        await updateDoc(doc.ref, { rating: rating });
        console.log("Rating updated for user: ", userId);
      });
    }
  } catch (error) {
    console.error("Error adding or updating rating: ", error);
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

async function getRating(userId, blogId) {
  try {
    const querySnapshot = await getDocs(collection(db, "rating"));
    const allRatings = [];
    querySnapshot.forEach((doc) => {
      allRatings.push(doc.data());
    });
    const rating = allRatings.filter(
      (rating) => rating.blogId === parseInt(blogId) && rating.userId === userId
    );

    return rating[0]?.rating || 0; // Return the rating if it exists, or 0 if it doesn't
  } catch (error) {
    console.error("Error getting rating:", error);
    return null; // Return null or a default value in case of error
  }
}

async function getBlogRating(blogId) {
  try {
    const querySnapshot = await getDocs(collection(db, "rating"));
    const allRatings = [];
    querySnapshot.forEach((doc) => {
      allRatings.push(doc.data());
    });
    const rating = allRatings.filter(
      (rating) => rating.blogId === parseInt(blogId)
    );
    const totalRating = rating.length;
    if (totalRating === 0) {
      return { averageRating: 0, totalRating: 0 };
    }
    const averageRating =
      rating.reduce((acc, curr) => acc + curr.rating, 0) / rating.length;

    return { averageRating, totalRating };
  } catch (error) {
    console.error("Error getting rating:", error);
    return null; // Return null or a default value in case of error
  }
}

export { addComment, getComments, addRating, getRating, getBlogRating };
