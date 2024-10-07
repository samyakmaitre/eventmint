import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import Config from "../../Config/Config.jsx";

const firebaseConfig = {
  apiKey: Config.API_KEY,
  authDomain: Config.AUTH_DOMAIN,
  projectId: Config.PROJECT_ID,
  storageBucket: Config.STORAGE_BUCKET,
  messagingSenderId: Config.SENDERID,
  appId: Config.APPID,
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth=getAuth(app);
const provider=new GoogleAuthProvider();

export {auth, provider}