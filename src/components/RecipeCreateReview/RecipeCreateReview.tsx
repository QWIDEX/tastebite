"use client";
import H1 from "@/ui/H1";
import { useState } from "react";
import SquareButton from "@/ui/SquareButton";
import RateReceipt from "../RateReceipt/RateReceipt";

const RecipeCreateReview = ({ className }: { className?: string }) => {
  const [adding, setAdding] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => setAdding(!adding)}
        className="fixed h-[100vh] top-0 left-0 z-40 transition-opacity duration-300 w-[100vw] bg-[rgba(0,0,0,0.3)]"
        style={adding ? { opacity: 1 } : { opacity: 0, pointerEvents: "none" }}
      ></button>
      <div
        className="fixed top-[50%] left-[50%] -translate-x-[50%] opacity-0 z-50 -translate-y-[50%] transition-opacity duration-300 bg-white shadow-md w-[70vw] h-[80vh] rounded-lg p-5"
        style={adding ? { opacity: 1 } : { opacity: 0, pointerEvents: "none" }}
      >
        <button
          className="absolute top-5 right-5"
          onClick={() => setAdding(!adding)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 15 15"
          >
            <path
              fill="currentColor"
              d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"
            />
          </svg>
        </button>
        {/* <RateReceipt editing={true} /> */}
      </div>
      <div className={className}>
        <H1>Already made this?</H1>
        <SquareButton
          onClick={() => setAdding(!adding)}
          className="sm:my-10 my-7"
        >
          Share Your Feedback
        </SquareButton>
        <div className="h-2 w-full rounded-sm bg-[#ff642f]"></div>
      </div>
    </>
  );
};

export default RecipeCreateReview;
