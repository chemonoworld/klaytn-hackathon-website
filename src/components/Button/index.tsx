import React from 'react';
import './button.scss';
type ReactText = string | number;
type ReactChild = React.ReactNode | ReactText;
type ButtonParams = {
  children: ReactChild;
  onClick: any;
  className: string;
};

const Button = ({ children, onClick, className }: ButtonParams) => {
  return (
    <div className={`button ${className}`} onClick={onClick}>
      <button>{children}</button>






      
    </div>
  );
};

export default Button;
