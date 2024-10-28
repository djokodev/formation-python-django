"use client";

import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

const Video = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Découvrez-moi"
          paragraph="Prêt à transformer votre passion pour le code en compétences concrètes ? Ne laissez pas le doute ou le manque de structure freiner votre progression."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md" data-wow-delay=".15s">
              <div className="relative w-full pb-[115%]">
                <video
                  src="/images/video/video.mp4"
                  controls
                  className="absolute top-0 left-0 h-full w-full rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
