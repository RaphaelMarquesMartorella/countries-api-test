import Link from 'next/link';

export async function getStaticProps() {
  try {
    const response = await fetch('http://localhost:3001/api/v1/countries/availableCountries');
    const data = await response.json();
    
    return {
      props: {
        countries: data.availableCountries || [],
      },
    };
  } catch (error) {
    console.error('Error fetching countries:', error);
    return {
      props: {
        countries: [],
      },
    };
  }
}

const CountryList = ({ countries }) => {
  return (
    <div>
      <h1>Country List</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.countryCode}>
            <Link href={`/country-info/${country.countryCode}`}>
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
