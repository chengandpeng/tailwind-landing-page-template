"use client";

import type { StaticImageData } from "next/image";
import Image from "next/image";

interface ModalVideoProps {
  thumb: StaticImageData;
  thumbWidth: number;
  thumbHeight: number;
  thumbAlt: string;
  video: string;
  videoWidth: number;
  videoHeight: number;
}

export default function ModalVideo({ thumb, thumbWidth, thumbHeight, thumbAlt }: ModalVideoProps) {
  return (
    <div>
      {/* Video thumbnail */}
      <div>
        <div
          className="relative flex justify-center mb-8"
          data-aos="zoom-y-out"
          data-aos-delay="450"
        >
          <div className="flex flex-col justify-center overflow-hidden rounded-lg">
            <Image
              className="hover:scale-110 transition-all duration-500"
              src={thumb}
              width={thumbWidth}
              height={thumbHeight}
              alt={thumbAlt}
            />
          </div>
        </div>
      </div>
      {/* End: Video thumbnail */}
    </div>
  );
}
