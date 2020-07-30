import React from "react";
import Avatar from "@material-ui/core/Avatar";

export default function UserAvatar({ user }) {
  return (
    <Avatar
      className="avatar"
      alt={`${user.first_name} avatar`}
      src={user.avatar}
    />
  );
}
