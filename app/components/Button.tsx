'use client';
import React from 'react';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  fullWidth?: boolean;
  secondary?: boolean;
  danger?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  type = 'button',
  fullWidth = false,
  secondary = false,
  danger = false,
}) => {
  const baseClasses = 'rounded-2xl text-white shadow px-4 py-2 transition duration-200 ease-in-out';
  const primaryClasses = 'bg-sky-500 hover:bg-sky-600';
  const secondaryClasses = 'bg-gray-500 hover:bg-gray-600';
  const dangerClasses = 'bg-red-500 hover:bg-red-600';
  const fullWidthClasses = 'w-full';

  const classes = `${baseClasses} ${
    fullWidth ? fullWidthClasses : ''
  } ${secondary ? secondaryClasses : danger ? dangerClasses : primaryClasses}`;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={classes}
    >
      {children}
    </button>
  );
};

export default Button;
