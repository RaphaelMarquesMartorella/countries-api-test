# Countries App
## A full-stack application to display country details, including a list of available countries, country-specific information, borders, and population trends over time.

## Back-End

### Setup:

Clone the repository:
```bash
    git clone https://github.com/RaphaelMarquesMartorella/countries-app-test.git
```

Navigate to the server folder:
```bash
cd server
```

Install dependencies:
```bash
npm install
```

Start the server:
```bash
npm start
```
The server will run on http://localhost:3001.

### Documentation

### Endpoints:

GET `/api/v1/countries`: Retrieve a list of all available countries.

GET `/api/v1/countries/countryInfo/:countryCode`: Retrieve detailed information about a specific country, including borders, population data, and flag.

### Swagger UI

Access API documentation at:

http://localhost:3001/api-docs/


## Front-End

### Setup

Navigate to the client folder:
```bash
cd client
```

Install dependencies:
```bash
npm install
```


Start the development server:
```bash
npm run dev
```

The application will run on http://localhost:3000.

### Features

#### Country List Page:

* Fetches and displays a list of available countries.
* Each country name is clickable and navigates to the Country Info Page.

#### Country Info Page:

#### Displays detailed information about the selected country:
* Country Name: Prominently displayed.
* Country Flag: Fetched from the backend.
* Border Countries: Lists clickable neighboring countries.
* Population Chart: Visualizes population trends over time.

#### Responsive Design:

* Styled for a user-friendly and responsive interface.

### Tech Stack

#### Back-End:

* Node.js
* Express.js
* Swagger for API documentation

#### Front-end:

* React.js
* Next.js
* Chart.js for data visualization

Browse through the list of countries and click on a country name to view its details.

Explore the Country Info Page for population trends and border country navigation.

## Authors

- [@RaphaelMarquesMartorella](https://github.com/RaphaelMarquesMartorella)

https://www.linkedin.com/in/raphael-marques-martorella