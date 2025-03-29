import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult
} from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "", 
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Configure Google Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// Helper function to detect mobile devices
const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Helper function to handle Google Sign In
const handleGoogleSignIn = async () => {
  try {
    if (isMobileDevice()) {
      // Use redirect for mobile devices
      await signInWithRedirect(auth, googleProvider);
      // The redirect result will be handled in the component's useEffect
    } else {
      // Use popup for desktop
      return await signInWithPopup(auth, googleProvider);
    }
  } catch (error) {
    throw error;
  }
};

export { 
  auth, 
  googleProvider,
  handleGoogleSignIn,
  isMobileDevice,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult
};
