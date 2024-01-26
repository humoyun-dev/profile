"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

interface TypedTextProps {
  strings: string[];
  className?: string;
}

const TypedText: React.FC<TypedTextProps> = ({ strings, className }) => {
  const typedRef = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: strings,
      typeSpeed: 150,
      backSpeed: 50,
      onComplete: (self: Typed) => {
        self.reset();
      },
    };

    typedRef.current = new Typed("#typed-text", options);

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, [strings]);

  return <span id={"typed-text"} className={className}></span>;
};

export default TypedText;
