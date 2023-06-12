import Input from "@/components/Input";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toogleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/profiles",
      });
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });
      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

  return (
    <div
      className="relative h-[100vh] w-full bg-[url('/images/hero.jpg')]
      bg-no-repeat bg-center bg-fixed bg-cover"
    >
      <div className="w-full h-full bg-black md:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="self-center w-full px-16 py-16 mt-2 bg-black bg-opacity-70 md:w-2/5 md:max-w-md">
            <h2 className="mb-8 text-4xl font-semibold text-white">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  label="Username"
                  id="name"
                  onChange={(e: any) => {
                    setName(e.target.value);
                  }}
                  type="name"
                  value={name}
                />
              )}
              <Input
                label="Email"
                id="email"
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
                type="email"
                value={email}
              />
              <Input
                label="Password"
                id="password"
                onChange={(e: any) => {
                  setPassword(e.target.value);
                }}
                type="password"
                value={password}
              />
              <button
                onClick={variant === "login" ? login : register}
                className="w-full py-3 mt-10 text-white transition bg-red-600 rounded-md hover:bg-red-700"
              >
                {variant === "login" ? "Login" : "Sign up"}
              </button>
              <div className="flex flex-row items-center justify-center gap-4 mt-8">
                <div
                  onClick={() => signIn("google", { callbackUrl: "/profiles" })}
                  className="flex items-center justify-center w-10 h-10 transition bg-white rounded-full cursor-pointer hover:opacity-80"
                >
                  <FcGoogle size={30} />
                </div>
                <div
                  onClick={() => signIn("github", { callbackUrl: "/profiles" })}
                  className="flex items-center justify-center w-10 h-10 transition bg-white rounded-full cursor-pointer hover:opacity-80"
                >
                  <FaGithub size={30} />
                </div>
              </div>
              <p className="mt-12 text-neutral-500">
                {variant === "login"
                  ? "First time using Netflix?"
                  : "Already have an account"}

                <span
                  onClick={toogleVariant}
                  className="ml-1 text-white cursor-pointer hover:underline"
                >
                  {variant === "login" ? "Create an account" : "Login"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
