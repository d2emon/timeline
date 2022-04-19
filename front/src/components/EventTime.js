import { Col } from "react-bootstrap";

const EventTime = ({
  time = {},
  style,
}) => {
  const {
    content,
    style: timeStyle,  
  } = time;

  return <Col style={style}>
    <div style={timeStyle}>
      { content }  
    </div>
  </Col>;
}

export default EventTime;
