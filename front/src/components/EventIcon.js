import { Col } from "react-bootstrap";

const EventIcon = ({
  time = {},
  style,
  lineStyle
}) => {
  const {
    content,
    style: timeStyle,  
  } = time;

  /*
let iconToBeRendered = iconIsComponent ? (
    <OriginalIcon styles={styles.icon} />
  ) : (
    <Icon
      name={OriginalIcon.content}
      style={[
        styles.icon,
        OriginalIcon.style && !_isEmpty(OriginalIcon.style)
          ? OriginalIcon.style
          : null
      ]}
    />
  );

  */

  return <Col style={style}>
    iconToBeRendered  
    <div style={lineStyle} />
  </Col>;
}

export default EventIcon;
