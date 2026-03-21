import Link from "next/link";
import React from "react";

type DeveloperCardTypes = {
  id: string;
  username: string;
  role: string;
  bio: string;
};

const Developer_Card = ({ id, username, role, bio }: DeveloperCardTypes) => {
  return (
    <Link href={`/developers/${username}`}>
      <div>
        <h2>{username}</h2>
        <p>
          <strong>Role:</strong> {role}
        </p>
        <p>
          <strong>Bio:</strong> {bio}
        </p>
      </div>
    </Link>
  );
};

export default Developer_Card;
