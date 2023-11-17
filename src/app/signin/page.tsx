import SignIn from "@/components/signIn/signIn";
import Image from "next/image";
import banner from "../../images/Screenshot_4.png";

export default async function Auth() {
  return (
    <div className="flex justify-between px-3 sm:px-7">
      <SignIn />
      <div className="hidden lg:block relative max-w-[1000px] max-h-[900px] mx-auto my-auto">
        <svg
          id="visual"
          className="w-full h-full"
          viewBox="0 0 1000 900"
          width="1000"
          height="900"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <g transform="translate(505.8381383160465 495.95582904735033)">
            <path
              d="M207.5 -357.5C288.7 -312.6 387.9 -296.9 428.5 -242.2C469.1 -187.5 451 -93.8 423.4 -16C395.8 61.8 358.5 123.7 331.5 201.9C304.5 280.1 287.8 374.8 234.2 390.7C180.7 406.7 90.3 344 9.4 327.7C-71.5 311.3 -143 341.4 -186 319.4C-229 297.3 -243.6 223.2 -296.6 161.3C-349.7 99.3 -441.4 49.7 -460.1 -10.8C-478.9 -71.3 -424.8 -142.7 -372 -205.2C-319.3 -267.7 -267.9 -321.3 -206.1 -377.5C-144.3 -433.7 -72.2 -492.3 -4.5 -484.5C63.2 -476.7 126.3 -402.5 207.5 -357.5"
              fill="#ffaf02"
            ></path>
          </g>
        </svg>
        <Image
          className="absolute top-[46.5%] w-[55%] -translate-y-[50%] left-[50%] -translate-x-[50%] h-auto"
          src={banner}
          sizes="(max-width: 1000px) 0vw, 33vw"
          alt="Tastebite banner"
        />
      </div>
    </div>
  );
}
