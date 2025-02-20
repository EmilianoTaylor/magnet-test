import React, { useEffect } from 'react';

const SwipeHandler: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	useEffect(() => {
		const handleTouchMove = (event: TouchEvent) => {
			if (event.touches.length > 0) {
				const touch = event.touches[0];
				if (touch.clientY > 10) {
					event.preventDefault();
				}
			}
		};

		document.addEventListener('touchmove', handleTouchMove, { passive: false });

		return () => {
			document.removeEventListener('touchmove', handleTouchMove);
		};
	}, []);

	return <div>{children}</div>;
};

export default SwipeHandler;