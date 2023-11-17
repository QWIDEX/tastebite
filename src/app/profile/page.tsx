"use client";
import { signOut } from "next-auth/react";
import React from "react";

export default function Profile() {
  return (
    <div>
      <button onClick={() => signOut({ callbackUrl: "/" })}>Sign out</button>
    </div>
  );
}
