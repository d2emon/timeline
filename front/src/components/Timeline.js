import EventRow from "./EventRow";

const Timeline = ({
  events,
}) => {
  /*
          event={item}
          eventStyle={eventStyle}
          timeContainerStyle={timeContainerStyle}
          iconContainerStyle={iconContainerStyle}
          lineStyle={lineStyle}
          contentContainerStyle={contentContainerStyle}
  */
  return <>
    { events.map((event, index) => (
      <div
        key={index}
      >
        <EventRow event={event} />
      </div>
    ))}
  </>;
};

export default Timeline;
