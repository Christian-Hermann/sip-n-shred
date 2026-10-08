# Sip n' Shred

Sip n' Shred is a full-stack web application for comparing Utah ski resorts, checking current mountain weather, and finding après spots near each resort.

I created this project after years of family ski trips to Utah. I wanted to build something that could actually be useful when deciding where to ski or snowboard and where to go afterward.

Live Site:
https://sip-n-shred-utah.netlify.app/

Users can:

- View and search Utah ski resorts
- See current temperature and weather conditions for each resort
- Filter resorts by difficulty and terrain park availability
- Sort resorts alphabetically or by drive time from Salt Lake City International Airport
- Compare two resorts side by side
- Browse après spots for each resort

This project uses a React frontend with an Express backend and PostgreSQL database. Resort and après data are served through REST API routes built with Express, while current weather data is retrieved from the Open-Meteo API.

Working on this project helped me get more comfortable with:

- React components and state management
- useEffect and asynchronous data fetching
- Building REST API routes with Express
- Connecting an Express server to PostgreSQL
- Designing related PostgreSQL tables with foreign keys
- Fetching and displaying data from a third-party API
- Passing data between React components with props
- Filtering, sorting, and searching data
- Error handling for API requests
- Responsive CSS and mobile layouts

This project was built with React, JavaScript, Vite, Node.js, Express, PostgreSQL, CSS, and the Open-Meteo API.
