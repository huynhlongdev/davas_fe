"use client";

import { useState, useRef, useEffect } from "react";

const MultiSelect = ({
  options,
  value = [],
  onChange,
  placeholder = "Select options",
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleOption = (option) => {
    const newValue = value.includes(option)
      ? value.filter((item) => item !== option)
      : [...value, option];
    onChange(newValue);
  };

  const removeOption = (option) => {
    onChange(value.filter((item) => item !== option));
  };

  return (
    <div ref={containerRef} className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 border border-border rounded-lg focus:border-red outline-0 cursor-pointer min-h-[42px] flex flex-wrap gap-1 bg-transparent"
      >
        {value.length > 0 ? (
          value.map((item, idx) => (
            <span
              key={idx}
              className="bg-white/20 text-white px-2 py-0.5 rounded-sm text-sm flex items-center gap-1"
            >
              {item}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeOption(item);
                }}
                className="hover:text-red-600 ml-1"
              >
                ×
              </button>
            </span>
          ))
        ) : (
          <span className="text-gray-500">{placeholder}</span>
        )}
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-border rounded-lg shadow-lg z-10 max-h-60 overflow-auto">
          {options.map((option, idx) => (
            <label
              key={idx}
              className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
            >
              <input
                type="checkbox"
                checked={value.includes(option.label)}
                onChange={() => toggleOption(option.label)}
                className="mr-2"
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
