import { useState, useEffect } from 'react'
import { Users } from 'lucide-react'
import './App.css'

function EventTile({ event, isLarge = false }) {
  const imageSrc = `${import.meta.env.BASE_URL}assets/${event.image}`

  return (
    <div className={`event-tile ${isLarge ? 'event-tile-large' : ''}`}>
      <div className="event-tile-image">
        <img 
          src={imageSrc} 
          alt={event.title}
        />
      </div>
      <div className="event-tile-content">
        <div className="event-tile-date">{event.date}</div>
        <h3 className="event-tile-title">{event.title}</h3>
        {event.description && (
          <p className="event-tile-description">{event.description}</p>
        )}
      </div>
    </div>
  )
}

function App() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}events.json`)
      .then(response => response.json())
      .then(data => setEvents(data.events))
      .catch(error => console.error('Error loading events:', error))
  }, [])

  // Separate the ongoing event and regular events
  const ongoingEvent = events.find(event => event.date.includes('ONGOING'))
  const regularEvents = events.filter(event => !event.date.includes('ONGOING'))

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <header className="header-banner">
        <img src={`${import.meta.env.BASE_URL}assets/header-banner.png`} alt="Digby Dawgs - Noe Valley Neighborhood Events 2025" />
      </header>
      
      <main className="comic-grid">
        {/* Top row - ongoing event takes 2 columns, juneteenth hike takes 2 columns */}
        <div className="grid-row">
          {ongoingEvent && (
            <div className="grid-item span-2">
              <EventTile event={ongoingEvent} isLarge={false} />
            </div>
          )}
          {regularEvents[0] && (
            <div className="grid-item span-2">
              <EventTile event={regularEvents[0]} isLarge={false} />
            </div>
          )}
        </div>

        {/* Second row - 4 equal columns */}
        <div className="grid-row">
          {regularEvents.slice(1, 5).map((event) => (
            <div key={event.id} className="grid-item">
              <EventTile event={event} />
            </div>
          ))}
        </div>

        {/* Third row - 4 equal columns */}
        <div className="grid-row">
          {regularEvents.slice(5, 9).map((event) => (
            <div key={event.id} className="grid-item">
              <EventTile event={event} />
            </div>
          ))}
        </div>
      </main>
      
      <footer className="text-center py-2 text-gray-600">
        <p className="flex items-center justify-center gap-2 text-xs">
          <Users className="w-3 h-3" />
          Made with ❤️ for the Digby Dawgs community
        </p>
      </footer>
    </div>
  )
}

export default App


