import { useRef, createRef, useEffect, RefObject } from 'react';

export const useSideSlide = () => {
  const cardRefs = useRef<RefObject<HTMLLIElement>[]>([]);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const scrollSliderRef = useRef<HTMLUListElement | null>(null);

  // カードを横に並べる
  const handleResize = () => {
    if (cardRefs.current) {
      cardRefs.current.forEach((card, ind) => {
        if (card.current) {
          card.current.style.left = `${
            (card.current.offsetWidth + 40) * (ind + 1)
          }px`;
        }
      });
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('scroll', () => {
      handleUpdateTranslate(scrollSliderRef.current);
    });

    window.addEventListener('resize', () => {
      handleResize();
      handleUpdateTranslate(scrollSliderRef.current);
    });

    return () => {
      window.removeEventListener('scroll', () => {
        handleUpdateTranslate(scrollSliderRef.current);
      });
      window.removeEventListener('resize', () => {
        handleResize();
        handleUpdateTranslate(scrollSliderRef.current);
      });
    };
  }, [handleResize]);

  const getWidthFirstItem = () => {
    if (cardRefs.current) {
      const f = cardRefs.current[0];
      return f && f.current ? f.current.getBoundingClientRect().width : 0;
    }
    return 0;
  };

  const getDistance = () => {
    let t = 0;
    if (cardRefs.current) {
      return (
        cardRefs.current.forEach((e, s) => {
          s === 0 || s === cardRefs.current.length - 1
            ? (t += e && e.current ? e.current.offsetWidth / 2 : 0)
            : (t += e && e.current ? e.current.offsetWidth : 0);
        }),
        (t += (cardRefs.current.length - 1) * 100),
        t
      );
    }
    return t;
  };

  const handleUpdateTranslate = (elm: HTMLUListElement | null) => {
    if (!elm) return;
    const firstItemWidth = getWidthFirstItem();

    const parentHeight = parentRef.current
      ? parentRef.current.getBoundingClientRect().height
      : 0;
    const parentWidth = parentRef.current
      ? parentRef.current.getBoundingClientRect().width
      : 0;
    const parentTop = parentRef.current
      ? parentRef.current.getBoundingClientRect().top
      : 0;
    const parentOffsetHeight = parentRef.current
      ? parentRef.current.offsetHeight
      : 0;

    const o =
      document.documentElement.scrollTop -
      (document.documentElement.scrollTop + parentTop);
    const d = parentOffsetHeight - window.innerHeight;
    const p = Math.max(0, Math.min(1, o / d));

    const distance = getDistance() - document.documentElement.scrollTop;

    const basePosX = parentWidth - firstItemWidth / 2;
    elm.style.transform = `translate(${basePosX + distance * p}px, ${
      parentHeight / 20
    }px)`;
  };

  return {
    cardRefs,
    parentRef,
    scrollSliderRef,
    handleUpdateTranslate,
  };
};
