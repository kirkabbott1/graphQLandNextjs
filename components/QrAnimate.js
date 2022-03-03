import { useState, useEffect, useRef } from "react";
import QRCode from "react-qr-code";

let size = 200;
const colors = ["#94f7f5", "#75ffb3", "#f2f475", "#79a9f7", "#bcffe6"];

export default function Home() {
  const container = useRef();

  const [box, setBox] = useState({
    color: 0,
    top: 0,
    left: 0,
    topDirection: 1,
    leftDirection: 1,
  });
  const [dimensions, setDimensions] = useState({
    heightSize: 0,
    widthSize: 0,
  });
  const { heightSize, widthSize } = dimensions;
  const { color, top, left, topDirection, leftDirection } = box;

  useEffect(() => {
    function handleResize() {
      setDimensions({
        heightSize: window.innerHeight,
        widthSize: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
    if (widthSize >= 600) {
      size = 210;
    } else {
      size = 130;
    }

    return () => {
      // console.log("dimensions.width", widthSize);
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    if (!container.current) return;

    window.requestAnimationFrame(() => {
      const width = container.current?.offsetWidth;
      const height = container.current?.offsetHeight;

      if ((leftDirection === 1 && left + size >= width) || (leftDirection === -1 && left <= 0)) {
        setBox((val) => ({ ...val, color: color + 1, leftDirection: leftDirection * -1 }));
      } else if (
        (topDirection === 1 && top + size >= height) ||
        (topDirection === -1 && top <= 0)
      ) {
        setBox((val) => ({ ...val, color: color + 1, topDirection: topDirection * -1 }));
      } else {
        setBox((val) => ({ ...val, top: top + topDirection, left: left + leftDirection }));
      }
    });
  }, [color, top, left, topDirection, leftDirection]);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "40vh",
          position: "relative",
        }}
        ref={container}>
        <div style={{ top, left, position: "absolute" }}>
          <QRCode
            value="mailto:kirkabbott1@gmail.com"
            bgColor={colors[color % colors.length]}
            size={size}
          />
        </div>
      </div>
    </>
  );
}
