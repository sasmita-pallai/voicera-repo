

import React, { useState } from "react";
import { Button } from "../utils/MainButton/Button";

interface PostmanCardProps {
  onClose: () => void;
  onSubmit: (link: string) => void; 
}

const PostmanCard: React.FC<PostmanCardProps> = ({ onClose, onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (!inputValue.trim()) return; 
    onSubmit(inputValue.trim()); 
    onClose(); 
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      <div className="bg-gradient-to-tl from-accent to-primaryC p-[2px] rounded-2xl w-[520px]">
    
        <div className="relative p-10 bg-borderbg rounded-2xl">
        
          <button
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center 
                       rounded-full bg-[#2C2C2C] text-white hover:bg-white 
                       hover:text-black transition"
            onClick={onClose}
          >
            ✕
          </button>


          <h2 className="text-white text-[24px] font-semibold mb-2 text-center">
            Add Postman Collection
          </h2>
          <p className="text-contentTertiary text-[14px] mb-4 text-center">
            Enter your Postman collection URL to continue.
          </p>
          <form
  onSubmit={(e) => {
    e.preventDefault();  // stop page refresh
    handleSubmit();
  }}
></form>

          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="example.com"
            className="w-full h-[50px] mb-10rounded-md px-3 outline-none 
                        border-white/20 bg-white text-black 
                       placeholder:text-gray-400 rounded-xl"
          />
          <Button className="mt-5 w-[242px] block mx-auto" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostmanCard;
