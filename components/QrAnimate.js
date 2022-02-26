import { useState, useEffect, useRef } from "react";
import QRCode from "react-qr-code";

let size = 200;
const colors = ["#16BDB1", "#117271", "#61bfbf", "#D0BDD1", "#75ffb3"];

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
          paddingTop: "300px",
          height: "50vh",
          position: "relative",
        }}
        ref={container}>
        <div style={{ top, left, position: "absolute" }}>
          <QRCode
            value="mailto:kirkabbott1@gmail.com?subject=Come%20work%20for%20us!"
            bgColor={colors[color % colors.length]}
            size={size}
          />
        </div>
      </div>
    </>
  );
}
