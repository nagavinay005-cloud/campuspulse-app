import { app, auth } from "./lib/firebase";
import { GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

if (typeof window !== "undefined") {
  try {
    getAnalytics(app);
  } catch (e) {
    // Analytics optional notice
  }
}

export { auth, app };
export default app;