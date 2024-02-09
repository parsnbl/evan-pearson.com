'use client'

import { useEffect, useRef, useState, useCallback } from 'react'


export type Dimensions = {
  width: number | null,
  height: number | null
}

export type CustomRef = (node: HTMLElement) => void

function useDimensions()  {
  const [dim, setDim] = useState<Dimensions>({
    width: null,
    height: null
  })
  const previousObserver = useRef<HTMLElement>(null);

  const customRef: CustomRef = useCallback((node) => {
    if (previousObserver.current) {
      previousObserver.current.disconnect();
      previousObserver.current = null;
    }

    if (node?.nodeType === Node.ELEMENT_NODE) {
      const observer = new ResizeObserver(([entry]) => {
        if (entry && entry.borderBoxSize) {
          const { inlineSize: width, blockSize: height } = 
            entry.borderBoxSize[0];
          setDim({width, height})
        }
      });
      observer.observe(node);
      previousObserver.current = observer;
    }
  }, []);
  
  return [customRef, dim]
}

export default useDimensions;