import React from "react";

import useInfoModal from "@/hooks/useInfoModal";
import { useRouter } from "next/router";
import { BiChevronDown } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";
import FavoriteButton from "./FavoriteButton";

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const router = useRouter();

  const { openModal } = useInfoModal();
  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
      <img
        src={data.thumbnailUrl}
        alt="thumbnailUrl"
        className="object-cover transition rounded-md shadow-xl cursor-pointer duration group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]"
      />
      <div
        className="
        opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[5vw]
        group-hover:translate-x-[0vw] group-hover:opacity-100
      "
      >
        <img
          className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]"
          alt="img"
          src={data.thumbnailUrl}
        />
        <div className="absolute z-10 w-full p-2 transition shadow-md bg-zinc-800 lg:p-4 rounded-b-md">
          <div className="flex items-center gap-3">
            <div
              onClick={() => {
                router.push(`/watch/${data?.id}`);
              }}
              className="flex items-center justify-center w-6 h-6 transition bg-white rounded-full cursor-pointer lg:w-10 lg:h-10 hover:bg-neutral-300"
            >
              <BsFillPlayFill size={20} />
            </div>
            <FavoriteButton movieId={data?.id} />
            <div
              onClick={() => {
                openModal(data?.id);
              }}
              className="flex items-center justify-center w-6 h-6 ml-auto transition border-white rounded-full cursor-pointer group/items lg:w-10 lg:h10 broder-2 hover:border-neutral-300"
            >
              <BiChevronDown
                size={30}
                className="text-white group-hover/items:text-neutral-300 "
              />
            </div>
          </div>
          <p className="mt-4 font-semibold text-green-400">
            New <span className="text-white ">2023</span>
          </p>
          <div className="flex items-center gap-2 mt-4">
            <p className="text-white text-[10px] lg:text-sm">{data.duration}</p>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <p className="text-white text-[10px] lg:text-sm">{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
