// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDMgRfBCm2P581rVB4m2u5_mo9HwsBgVN4",
  authDomain: "signuplogin-ff518.firebaseapp.com",
  projectId: "signuplogin-ff518",
  storageBucket: "signuplogin-ff518.appspot.com",
  messagingSenderId: "605656690291",
  appId: "1:605656690291:web:a6950f8505995e49f7c406",
};

// Initialize Firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();

// Function to handle user sign up
const signUp = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Email and password are required.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
  }

  try {
    const userCredential = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    console.log("User signed up:", userCredential.user);
    // Optionally, you can redirect to another page or show a success message
    document.write("Signed up successfully.");
  } catch (error) {
    console.error("Sign up error:", error.code, error.message);
    // Optionally, show an error message to the user
    alert("Sign up failed. " + error.message);
  }
};

// Function to handle user sign in
const signIn = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Email and password are required.");
    return;
  }

  try {
    const userCredential = await auth.signInWithEmailAndPassword(
      email,
      password
    );
    console.log("User signed in:", userCredential.user);
    // Optionally, you can redirect to another page or show a success message
    document.write("Signed in successfully.");
  } catch (error) {
    console.error("Sign in error:", error.code, error.message);
    // Optionally, show an error message to the user
    alert("Sign in failed. " + error.message);
  }
};
