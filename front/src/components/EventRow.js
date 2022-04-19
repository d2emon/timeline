import { Row } from "react-bootstrap";
import EventIcon from "./EventIcon";
import EventTime from "./EventTime";

const EventRow = ({
  event = {},
  style,
  timeStyle,
  iconStyle,
  lineStyle,
  contentStyle,
}) => {
  const styles = {};

  const {
    title = {},
    description = {},
    time,
    icon,
    onClick,  
  } = event;

  const eventTitle = <div style={title.style}>
    { title.content }
  </div>;

  const eventDescription = <div style={description.style}>
    { description.content }
  </div>;

  /*
      <EventTime time={time} style={timeContainerStyle} />
      <EventIcon
        icon={icon}
        iconStyle={iconContainerStyle}
        lineStyle={lineStyle}
      />
      <Event style={contentContainerStyle}>
        {title}
        {description}
      </Event>
  */
  return <Row
    style={style}
    onClick={onClick}
  >
    <EventTime
      time={time}
      style={timeStyle}
    />

    <EventIcon
      icon={icon}
      style={iconStyle}
      lineStyle={lineStyle}
    />

    <div>
        { JSON.stringify(event) }
        Event:
        { eventTitle }
        { eventDescription }
    </div>
  </Row>;
}

export default EventRow;
