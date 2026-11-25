import React from 'react';

export interface TitleProps {
  text?: string;
  children: React.ReactNode;
}

const Title = ({ children, text = 'text-center' }: TitleProps) => {
  return (
    <h2 className={`${text} text-2xl font-semibold uppercase text-global-main md:text-[30px]`}>
      {children}
    </h2>
  );
};

export default Title;