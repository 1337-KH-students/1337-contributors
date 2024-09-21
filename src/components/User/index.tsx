import React, { FC } from "react";
import avatar from "@assets/default-avatar.png";

type Props = {
  firstName: string;
  lastName: string;
  github: string;
  bio: string;
};

const User: FC<Props> = ({ firstName, lastName, github, bio }) => {
  firstName = firstName.toLowerCase();
  lastName = lastName.toLowerCase();

  return (
    <a
      href={github ? `https://github.com/${github}` : "#"}
      target={github ? "_blank" : "_self"}
    >
      <div
        className="flex flex-col items-center py-10 px-8 rounded  relative z-0 overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-900 hover:border hover:border-gray-800"
        id="card"
      >
        <div
          className="w-60 aspect-square rounded-full overflow-hidden  mb-[-28px] bg-gray-1000 border-4 border-gray-1000"
          id="avatar"
        >
          <img
            src={github ? `https://github.com/${github}.png` : avatar}
            onError={(e) => {
              e.currentTarget.src = avatar;
            }}
            alt={`${firstName} ${lastName}'s avatar`}
            className=" w-full h-full"
          />
        </div>
        <h3 className="text-xl bg-gray-1000 py-1 px-2 rounded capitalize  font-sora">
          <span className="text-gray-400 mr-2">
            <i className="fa-solid fa-less-than"></i>
          </span>
          {firstName + " " + lastName}
          <span className="text-gray-400 font-semibold  ml-2">
            /<i className="fa-solid fa-greater-than"></i>
          </span>
        </h3>
        <h4 className="text-lg capitalize mb-5">
          <span className="text-sm text-gray-300 underline">@{github}</span>
        </h4>
        <p className="text-sm text-center text-muted-foreground flex items-center justify-center">
          <span className="mx-2">{bio}</span>
        </p>
      </div>
    </a>
  );
};

export default User;
