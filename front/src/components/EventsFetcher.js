import { useEffect, useState } from 'react';
import api from '../service/api';
import Timeline from './Timeline';

function EventsFetcher() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    console.log('MOUNTED');

    const fetchEvents = async () => {
      const result = await api.getEvents();
      console.log('Response', result);
      setEvents(result);
    };
  
    fetchEvents();

    return () => {
      console.log('UNMOUNTED');
      console.trace();
    };
  }, [])

  return (
    <div className="Events">
      <Timeline events={events} />
    </div>
  );
}

export default EventsFetcher;
