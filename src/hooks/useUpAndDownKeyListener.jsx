import { useEffect } from "react";

function useUpAndDownKeyListener(callbackForUpDown) {

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowUp') {
        callbackForUpDown();
      }

      if (event.key === 'ArrowDown') {
        callbackForUpDown();
      }
    }

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };

  }, [callbackForUpDown])
}

export default useUpAndDownKeyListener;