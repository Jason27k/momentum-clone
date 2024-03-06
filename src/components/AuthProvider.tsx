import { Auth0Provider } from "@auth0/auth0-react";
import { ReactNode } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  return (
    <Auth0Provider
      domain={process.env.AUTH0_DOMAIN!}
      clientId={process.env.AUTH0_CLIENT_ID!}
      authorizationParams={{
        redirect_uri: process.env.AUTH0_BASE_URL,
      }}
      onRedirectCallback={() => {}}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
