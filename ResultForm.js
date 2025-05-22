import React, { useState } from "react";

const ResultForm = () => {
  const [marks, setMarks] = useState([0, 0, 0, 0, 0]);
  const [total, setTotal] = useState(null);
  const [percentage, setPercentage] = useState(null);
  const [grade, setGrade] = useState("");

  const handleChange = (index, value) => {
    const newMarks = [...marks];
    newMarks[index] = parseFloat(value) || 0;
    setMarks(newMarks);
  };

  const calculateResult = () => {
    const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
    const percent = (totalMarks / 500) * 100;

    let grade = "Fail";
    if (percent >= 90) grade = "A+";
    else if (percent >= 80) grade = "A";
    else if (percent >= 70) grade = "B+";
    else if (percent >= 60) grade = "B";
    else if (percent >= 50) grade = "C";

    setTotal(totalMarks);
    setPercentage(percent);
    setGrade(grade);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Enter Marks for 5 Subjects</h2>
      {marks.map((mark, i) => (
        <div key={i}>
          <input
            type="number"
            placeholder={`Subject ${i + 1} Marks`}
            value={mark}
            onChange={(e) => handleChange(i, e.target.value)}
          />
        </div>
      ))}
      <button onClick={calculateResult}>Calculate Result</button>

      {total !== null && (
        <div style={{ marginTop: "20px" }}>
          <p><strong>Total:</strong> {total}</p>
          <p><strong>Percentage:</strong> {percentage.toFixed(2)}%</p>
          <p><strong>Grade:</strong> {grade}</p>
        </div>
      )}
    </div>
  );
};

export default ResultForm;
