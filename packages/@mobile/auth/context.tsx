import { useStorageState } from "@mobile/hooks";
import constate from "constate";

const useAuth = () => {
  const [[isLoading, session], setSession] = useStorageState("session");

  return {
    signIn: () => {
      // Perform sign-in logic here
      setSession("xxx");
    },
    signOut: () => {
      setSession(null);
    },
    session,
    isLoading,
  };
};

export const [SessionProvider, useSession] = constate(useAuth);
