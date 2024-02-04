import React from 'react';

function LeftSectionLayout({ children }: { children: React.ReactNode }) {
  return (
    <section id="left-section" className="flex">
      {children}
    </section>
  );
}

export default LeftSectionLayout;
