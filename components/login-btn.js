//auth
import { useSession, signIn, signOut } from "next-auth/react";
//default react
import * as React from "react";
//mui
import Avatar from "@mui/material/Avatar";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        Session get : {JSON.stringify(session)} <br />
        <br />
        <Avatar alt="session.user.email" src={session.user.image} />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
