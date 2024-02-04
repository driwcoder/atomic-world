import React from 'react';

interface MyButtonProps {
  title: string;
  bgColor: string;
  txtColor: string;
}

const MyButton: React.FC<MyButtonProps> = ({ title, bgColor, txtColor }) => {
  return (
    <div className={`w-fit p-4 ${txtColor} ${bgColor} border-2 border-white `}>
      <p>{title ? title : 'Fill the props "title" to get off of default text, that is it here, what u r reading right now!'}</p>
    </div>
  );
};

export default MyButton;
