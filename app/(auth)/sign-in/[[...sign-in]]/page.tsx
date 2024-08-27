// "use client";
import { SignIn } from "@clerk/nextjs";
import { SWRConfig } from "swr";

const SignInPage = () => {
  return (
    // <SWRConfig value={{ refreshInterval: 3000 }}>
    <main className="items-center flex justify-center w-full h-screen">

        <SignIn />
      </main>
    // </SWRConfig>
  );
};
export default SignInPage;
