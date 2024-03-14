import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string };
}

const UserPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      <div className="flex justify-between">
        <h1>Users</h1>
        <Link href="users/new" className="btn">
          Add New User
        </Link>
      </div>
        <UserTable sortOrder={sortOrder} />
    </div>
  );
};

export default UserPage;
