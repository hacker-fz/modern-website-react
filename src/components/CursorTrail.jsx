import React, { useEffect, useRef } from "react";

const CursorTrail = () => {
  const coords = useRef({ x: 0, y: 0 });
  const circles = useRef([]);

  const colors = [
    "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e", "#ec805d",
    "#e36e5c", "#df685c", "#d5585c", "#d1525c", "#c5415d", "#c03b5d",
    "#b22c5e", "#ac265e", "#9c155f", "#950f5f", "#830060", "#7c0060",
    "#680060", "#60005f", "#48005f", "#3d005e",
  ];

  useEffect(() => {
    // Create circles dynamically and append them to the document
    const circleElements = Array.from({ length: 20 }).map((_, index) => {
      const circle = document.createElement("div");
      circle.style.height = "24px";
      circle.style.width = "24px";
      circle.style.borderRadius = "50%";
      circle.style.backgroundColor = colors[index % colors.length];
      circle.style.position = "fixed";
      circle.style.top = "0";
      circle.style.left = "0";
      circle.style.pointerEvents = "none";
      circle.style.zIndex = "99999999";
      circle.style.transform = "scale(1)";
      document.body.appendChild(circle);
      return circle;
    });

    circles.current = circleElements;

    // Update coords on mousemove
    const handleMouseMove = (e) => {
      coords.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animate circles
    const animateCircles = () => {
      let { x, y } = coords.current;

      circles.current.forEach((circle, index) => {
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;
        circle.style.transform = `scale(${(circles.current.length - index) / circles.current.length})`;

        const nextCircle = circles.current[index + 1] || circles.current[0];
        x += (nextCircle.x - x) * 0.3 || 0;
        y += (nextCircle.y - y) * 0.3 || 0;

        circle.x = x;
        circle.y = y;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      circles.current.forEach((circle) => document.body.removeChild(circle));
    };
  }, []);

  return null; // No visual output; purely DOM manipulation
};

export default CursorTrail;
