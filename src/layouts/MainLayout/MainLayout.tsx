import React, { ReactNode } from 'react';

interface IMainComponent {
  children: ReactNode;
}

function MainLayout({ children }: IMainComponent) {
  return <main className="gap-8 bg-slate-900">{children}</main>;
}

export default MainLayout;
