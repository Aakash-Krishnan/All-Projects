import { useState } from "react";

const RangeNSelect = () => {
  const [rangeValue, setRangeValue] = useState(0);
  const [selectValue, setSelectValue] = useState("");

  const [flag, setFlag] = useState(false);

  const handleRangeValue = (e) => {
    const { value } = e.target;
    setRangeValue(value);
  };

  const handleSelectValue = (e) => {
    const { value } = e.target;
    setSelectValue(value);
  };

  const handleMouseEnter = () => {
    setFlag(true);
  };

  const handleMouseLeave = () => {
    setFlag(false);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          gap: "20px",
        }}
      >
        {flag && <span style={{}}>{rangeValue}</span>}
        <input
          style={{ width: "50%", marginTop: "20px" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          type="range"
          min={0}
          max={100}
          value={rangeValue}
          onChange={handleRangeValue}
        />
      </div>
      <p>Range value: {rangeValue}</p>

      <select value={selectValue} onChange={handleSelectValue}>
        <option value="O1">01</option>
        <option value="O2">02</option>
        <option value="O3">03</option>
      </select>
      <p>Selected value: {selectValue}</p>
    </div>
  );
};

export default RangeNSelect;
