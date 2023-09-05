import { useEffect } from "react";

function useLeftAndRightKeyListener(handleLeftArrow, handleRightArrow) {

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowLeft') {
        handleLeftArrow();
      }

      if (event.key === 'ArrowRight') {
        handleRightArrow();
      }
    }

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };

  }, [handleLeftArrow, handleRightArrow])
}

export default useLeftAndRightKeyListener;