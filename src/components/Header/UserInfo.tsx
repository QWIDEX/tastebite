"use client";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function UserInfo() {
  const session = useSession();
  const Url = usePathname();

  return (
    <div className="justify-self-center sm:justify-self-end w-fit">
      {session?.data?.user ? (
        <Link
          href="/profile"
          className="group w-fit justify-self-center sm:justify-self-end"
        >
          {session.data.user?.image ? (
            <Image
              src={session.data.user.image}
              height={28}
              width={28}
              alt="avatar"
              className="rounded-full"
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                className="group-hover:stroke-[#ff642f] transition-all duration-300"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2Z" />
                <path d="M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846M12 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z" />
              </g>
            </svg>
          )}
        </Link>
      ) : (
        <Link href={`/signup?callbackUrl=${Url}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              className="group-hover:stroke-[#ff642f] transition-all duration-300"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2Z" />
              <path d="M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846M12 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z" />
            </g>
          </svg>
        </Link>
      )}
    </div>
  );
}
