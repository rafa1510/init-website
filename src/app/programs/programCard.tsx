import Image from "next/image";

interface programCardProps {
  name: string;
  color: string;
  image: string;
  description: string;
}

function ProgramCard({ name, color, image, description }: programCardProps) {
  return (
    <>
      <div className="bg-zinc-900 text-white rounded-2xl overflow-hidden">
        <div className="relative w-full h-40">
          <Image
            src={image}
            alt={""}
            fill
            className="object-cover object-left-top"
          />
        </div>
        <div className="p-10">
          <div className="flex items-center">
            <svg
              className="mr-2 h-4"
              style={{ color }}
              fill="currentColor"
              strokeWidth="0"
              id="Footer INIT Logo"
              data-name="Footer INIT Logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 480.12"
            >
              <path d="m499.17,75.78c-79.68,0-131.34,62.17-153.23,108.58-3.5,7.01-7.88,17.51-18.39,13.13-11.38-4.38-2.63-21.89,4.38-35.9,7-14.01,11.38-28.9,11.38-49.91v-21.89h0c-77.37,0-140.1,62.73-140.1,140.1v250.23h140.1l1.02-163.32c0-87.13,37.48-123.43,94.39-123.43,49.91,0,86.72,30.4,86.72,134.6v152.16h140.1v-208.2c0-131.34-66.55-196.14-166.37-196.14Z" />
              <path d="m1140.2,201.87c33.02,0,59.8-26.77,59.8-59.8v-52.28h-126.09V0h-140.1v338.26c0,111.2,43.78,141.85,136.6,141.85h129.59v-112.08h-84.06c-40.28,0-42.03-1.75-42.03-45.53v-120.64h66.29Z" />
              <path d="m800.09,142.42c-27,0-51.55-12.01-69.82-31.6v369.3h138.95V111.55c-18.19,19.17-42.47,30.87-69.13,30.87Z" />
              <path d="m799.86,116.1c31.38,0,56.82-25.49,56.82-56.93s-25.44-56.93-56.82-56.93-56.82,25.49-56.82,56.93,25.44,56.93,56.82,56.93Z" />
              <path d="m69.82,142.42c-27,0-51.55-12.01-69.82-31.6v369.3h138.95V111.55c-18.19,19.17-42.47,30.87-69.13,30.87Z" />
              <ellipse cx="69.59" cy="59.18" rx="56.82" ry="56.93" />
            </svg>
            <h1 className="font-bold text-xl" style={{ color }}>
              {name}
            </h1>
          </div>
          <p className="mt-4 h-24 overflow-y-scroll no-srollbar">
            INIT <strong style={{ color }}>{name}</strong> is a program focused
            on {description}
          </p>
          <button
            className="text-white mt-5 py-2 px-5 text-sm font-bold rounded-md"
            style={{ backgroundColor: color }}
          >
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
}

export default ProgramCard;
