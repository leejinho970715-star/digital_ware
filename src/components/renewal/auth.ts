import { useEffect, useState } from "react";

const AUTH_KEY = "dw-demo-authenticated";
const AUTH_EVENT = "dw-auth-change";

export function isDemoAuthenticated() {
  return typeof window !== "undefined" && localStorage.getItem(AUTH_KEY) === "true";
}

export function setDemoAuthenticated(value: boolean) {
  if (value) localStorage.setItem(AUTH_KEY, "true");
  else localStorage.removeItem(AUTH_KEY);
  window.dispatchEvent(new Event(AUTH_EVENT));
}

export function useDemoAuth() {
  const [authenticated, setAuthenticated] = useState(isDemoAuthenticated);

  useEffect(() => {
    const update = () => setAuthenticated(isDemoAuthenticated());
    window.addEventListener(AUTH_EVENT, update);
    window.addEventListener("storage", update);
    return () => {
      window.removeEventListener(AUTH_EVENT, update);
      window.removeEventListener("storage", update);
    };
  }, []);

  return authenticated;
}
