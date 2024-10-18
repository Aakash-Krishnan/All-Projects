/* eslint-disable react/prop-types */

import { useState } from "react";

const Cell = ({ filled, onClick, disabled }) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      style={{
        backgroundColor: filled ? "green" : "transparent",
        border: "1px solid black",
        height: 0,
        paddingBottom: "100%",
        cursor: "pointer",
      }}
    ></button>
  );
};

const tiles = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

const GridLights = () => {
  const [order, setOrder] = useState([]);
  const [deactivate, setDeactivate] = useState(false);

  const deactivateCell = () => {
    setDeactivate(true);

    const timeout = setInterval(() => {
      setOrder((prev) => {
        const newOrder = prev.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timeout);
          setDeactivate(false);
        }

        return newOrder;
      });
    }, 300);
  };

  const activateCell = (i) => {
    const newOrder = [...order, i];
    setOrder(newOrder);
    if (newOrder.length === tiles.flat().filter(Boolean).length) {
      deactivateCell();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <h1>Grid Lights</h1>
      <div
        style={{
          display: "grid",
          maxWidth: "300px",
          width: "100%",
          padding: "20px",
          gap: "20px",
          border: "1px solid black",
          gridTemplateColumns: `repeat(${tiles[0].length}, 1fr)`,
        }}
      >
        {tiles.flat(1).map((tile, i) => {
          return tile === 1 ? (
            <Cell
              key={i}
              filled={order.includes(i)}
              onClick={() => activateCell(i)}
              disabled={order.includes(i) || deactivate}
            />
          ) : (
            <span key={i} />
          );
        })}
      </div>
    </div>
  );
};

export default GridLights;
