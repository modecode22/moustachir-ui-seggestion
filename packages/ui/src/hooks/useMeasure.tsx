import { useState, useEffect, useCallback } from "react";

interface DOMRectReadOnly {
  x: number;
  y: number;
  width: number;
  height: number;
  top: number;
  right: number;
  bottom: number;
  left: number;
}

type UseMeasureRect = Pick<DOMRectReadOnly, "x" | "y" | "width" | "height" | "top" | "right" | "bottom" | "left">;

type UseMeasureResult = [(node: HTMLElement | null) => void, UseMeasureRect, () => void];

const defaultMeasureRect: UseMeasureRect = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

export function useMeasure(): UseMeasureResult {
  const [rect, setRect] = useState<UseMeasureRect>(defaultMeasureRect);
  const [node, setNode] = useState<HTMLElement | null>(null);
  const [observer, setObserver] = useState<ResizeObserver | null>(null);

  useEffect(() => {
    if (typeof ResizeObserver !== "undefined") {
      const newObserver = new ResizeObserver((entries) => {
        if (entries[0]) {
          const { x, y, width, height, top, right, bottom, left } = entries[0].contentRect;
          setRect({ x, y, width, height, top, right, bottom, left });
        }
      });
      setObserver(newObserver);
    } else {
      console.warn("ResizeObserver is not supported in this environment");
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const ref = useCallback((node: HTMLElement | null) => {
    setNode(node);
  }, []);

  const disconnect = useCallback(() => {
    if (node && observer) {
      observer.unobserve(node);
    }
  }, [node, observer]);

  useEffect(() => {
    if (node && observer) {
      observer.observe(node);
    }

    return () => {
      if (node && observer) {
        observer.unobserve(node);
      }
    };
  }, [node, observer]);

  return [ref, rect, disconnect];
}
