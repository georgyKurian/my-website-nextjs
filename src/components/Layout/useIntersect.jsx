import { useState, useRef, useEffect } from "react";

export const useIntersect = ({rootMargin="0px", threshold = 0.1}) => {
  const [entry,updateEntrty] = useState();
  const [node, setNode] = useState(null);

  const observer = useRef(null);

  useEffect(() => {
    if(observer.current){
      observer.current.disconnect();
    }
    observer.current = new window.IntersectionObserver(
      ([entry]) => {
        if(entry.intersectionRatio>0){
          updateEntrty(entry);
          currentObserver.disconnect();
        }
      },
      {
        rootMargin,
        threshold
      }
    );
    const {current: currentObserver} = observer;

    if(node) currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node,rootMargin,threshold]);

  return [setNode, entry];
};
