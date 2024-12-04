import { useRouter } from 'next/router';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

export async function getServerSideProps(context) {
  const { countryCode } = context.params;

  try {
    const response = await fetch(`http://localhost:3001/api/v1/countries/countryInfo/${countryCode}`);
    const data = await response.json();

    return {
      props: {
        countryInfo: data || null,
      },
    };
  } catch (error) {
    console.error('Error fetching country info:', error);
    return {
      props: {
        countryInfo: null,
      },
    };
  }
}

const CountryInfo = ({ countryInfo }) => {
  const router = useRouter();

  if (!countryInfo) {
    return <div>Error loading country information.</div>;
  }

  const populationData = {
    labels: countryInfo.populationData.map((data) => data.year),
    datasets: [
      {
        label: 'Population Over Time',
        data: countryInfo.populationData.map((data) => data.value),
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        fill: true,
      },
    ],
  };

  const populationOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div>
      <button onClick={() => router.push('/')}>Back to Country List</button>
      <h1>{countryInfo.commonName || 'Unknown Country'}</h1>
      <img src={countryInfo.flagUrl} alt={`${countryInfo.commonName} flag`} style={{ width: '200px' }} />

      <h2>Borders:</h2>
      <ul>
        {countryInfo.borders && countryInfo.borders.length > 0 ? (
          countryInfo.borders.map((border) => (
            <li key={border.countryCode}>
              <button onClick={() => router.push(`/country-info/${border.countryCode}`)}>
                {border.commonName}
              </button>
            </li>
          ))
        ) : (
          <li>No borders available</li>
        )}
      </ul>

      <h2>Population Chart:</h2>
      <Line data={populationData} options={populationOptions} />
    </div>
  );
};

export default CountryInfo;
