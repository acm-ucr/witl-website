import HexagonShape from "react-hexagon";

const Hexagon = ({ text, textSize, textColor, diagonal }) => {
  return (
    <HexagonShape
      style={{ stroke: "#8e44ad", fill: "#8e44ad" }}
      flatTop="true"
      diagonal={diagonal}
    >
      <text
        style={{
          fontSize: textSize,
          fontFamily: "Marcellus SC",
          color: "white",
        }}
        x="50%"
        y="55%"
      >
        {text}
      </text>
      ;
    </HexagonShape>
  );
};

export default Hexagon;
