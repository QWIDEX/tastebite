"use client";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import SquareButton from "@/ui/SquareButton";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import H1 from "@/ui/H1";
import GoogleButton from "../GoogleButton/GoogleButton";

type FormInputs = {
  email: string;
  password: string;
};

const SignIn = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm();

  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  const [visiblePass, setVisiblePass] = useState(false);

  const router = useRouter();

  const handleLogin: SubmitHandler<any> = async (data: FormInputs) => {
    if (!data.password) {
      setError(
        "password",
        { type: "validate", message: "Password required" },
        { shouldFocus: true }
      );
      return;
    }

    if (!data.email) {
      setError(
        "email",
        { type: "validate", message: "Email required" },
        { shouldFocus: true }
      );
      return;
    }

    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res && !res.error) {
        toast.success("Sucessfully signed in");
      } else {
        console.log(res?.error);
        toast.error("Something went wrong");
        return;
      }

      router.push(callbackUrl);
    } catch (error: any) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="w-full mx-auto lg:w-[61%] flex items-center">
      <div className="gap-7 border border-gray-200 shadow-lg flex flex-col justify-center py-10 px-5 max-w-md w-full mx-auto rounded-lg ">
        <div className="mb-5">
          <H1 className="mb-5 text-center !font-sans">Sign In</H1>
          <h4 className="font-sans text-center text-base">
            New to Tastebite?{" "}
            <Link
              className="text-blue-600 font-semibold"
              href={`/signup?callbackUrl=${callbackUrl}`}
            >
              Sign Up
            </Link>
          </h4>
        </div>
        <GoogleButton />
        <h4 className="text-center text-gray-400 font-semibold text-lg">OR</h4>
        <form
          className="sm:px-5 px-3 flex items-center gap-5 flex-col w-full"
          onSubmit={handleSubmit(handleLogin)}
        >
          <label htmlFor="loginEmail" className=" w-full max-w-sm block">
            <div className="relative border-b-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 16 14"
                className="absolute left-0.5 top-1/2 -translate-y-1/2"
              >
                <path
                  fill="#9ca3af"
                  d="M14.5 13h-13C.67 13 0 12.33 0 11.5v-9C0 1.67.67 1 1.5 1h13c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5ZM1.5 2c-.28 0-.5.22-.5.5v9c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-9c0-.28-.22-.5-.5-.5h-13Z"
                />
                <path
                  fill="#9ca3af"
                  d="M8 8.96c-.7 0-1.34-.28-1.82-.79L.93 2.59c-.19-.2-.18-.52.02-.71c.2-.19.52-.18.71.02l5.25 5.58c.57.61 1.61.61 2.18 0l5.25-5.57c.19-.2.51-.21.71-.02c.2.19.21.51.02.71L9.82 8.18c-.48.51-1.12.79-1.82.79Z"
                />
              </svg>
              <input
                id="loginEmail"
                type="email"
                className="pl-8 py-3 w-full focus:outline-none"
                placeholder="Email"
                {...register("email")}
              />
            </div>
            {errors.email && <span>{errors.email?.message?.toString()}</span>}
          </label>
          <label htmlFor="loginPassword" className=" w-full max-w-sm block">
            <div className="relative border-b-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="absolute left-0.5 top-1/2 -translate-y-1/2"
              >
                <path
                  fill="#9ca3af"
                  d="M6 9V7.25C6 3.845 8.503 1 12 1s6 2.845 6 6.25V9h.5a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 19.5v-8A2.5 2.5 0 0 1 5.5 9Zm-1.5 2.5v8a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-13a1 1 0 0 0-1 1Zm3-4.25V9h9V7.25c0-2.67-1.922-4.75-4.5-4.75c-2.578 0-4.5 2.08-4.5 4.75Z"
                />
              </svg>
              <input
                id="loginPassword"
                className="px-8 py-3 w-full focus:outline-none"
                type={visiblePass ? "text" : "password"}
                placeholder="Password"
                {...register("password")}
              />
              <button
                type="button"
                className="absolute right-0.5 top-[50%] -translate-y-[50%]"
                onClick={() => setVisiblePass(!visiblePass)}
              >
                {visiblePass ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5Z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7Z"
                    />
                  </svg>
                )}
              </button>
            </div>
            <span>
              {errors.password && errors.password?.message?.toString()}
            </span>
          </label>
          <SquareButton type="submit" className="!rounded-lg mt-3">
            Submit
          </SquareButton>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
