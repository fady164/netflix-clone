import { useRouter } from "next/router";
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

interface PlayButtonProps {
  movieId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push(`/watch/${movieId}`);
      }}
      className="flex items-center w-auto px-2 py-1 text-xs font-semibold transition bg-white rounded md:py-2 md:px-4 lg:text-lg hover:bg-neutral-300"
    >
      <BsFillPlayFill size={25} className="mr-1" />
      Play
    </button>
  );
};

export default PlayButton;
