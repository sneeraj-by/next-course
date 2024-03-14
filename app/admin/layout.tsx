import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const AdminPageLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <aside className="bg-slate-200 p-4 mr-4">Side Bar</aside>
      <div>{children}</div>
    </div>
  );
};

export default AdminPageLayout;
