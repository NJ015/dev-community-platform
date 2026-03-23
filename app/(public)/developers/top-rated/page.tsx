import { developers } from "@/data/developer";
import React from "react";
import Developer_Card from "@/components/Developer_Card";


const page = () => {
  const top_rated = developers.filter((dev) => dev.rating >= 4.5);
  return (
    <>
      <div className="px-8 py-12 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-4">
          Top-Rated Developers
        </h1>
        <p className="text-gray-400">
          Our highest rated community members. Learn from the best and most
          respected developers on the platform
        </p>
      </div>
      <div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {top_rated.map((dev) => (
            <li key={dev.id} className="h-full">
              <Developer_Card
                id={dev.id}
                username={dev.username}
                role={dev.role}
                bio={dev.bio}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default page;
