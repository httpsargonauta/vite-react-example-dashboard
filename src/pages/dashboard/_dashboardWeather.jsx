import { useState } from 'react';

export function DashboardWeather() {
  const isDay = new Date().toLocaleString('es-VE', {
    timeZone: 'America/Caracas',
    hour: 'numeric',
    hour12: false,
    minute: 'numeric',
  });

  const [settings, setSettings] = useState({
    lenguage: 'es-ve',
    apiKey: 'A3rXKHeiNdqkNTpW7IbFPdyIkpkDtdyj',
    clima: 'maracaib',
  });

  const [weather, setWeather] = useState({
    headlineText: 'Parece que no hay clima para mostrar',
    temperature: '0',
    weatherIcon: isDay >= 6 && isDay <= 18 ? '01' : '33',
    weatherText: 'Prueba a actualizar tu ubicación desde ajustes.',
  });

  const getWeather = async () => {
    const urlKey = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${settings.apiKey}&q=${settings.clima}&language=${settings.lenguage}`;

    fetch(urlKey, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        const locationKey = data[0].Key;
        const url = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}?apikey=${settings.apiKey}&language=${settings.lenguage}`;

        fetch(url, { method: 'GET' })
          .then((response) => response.json())
          .then((data) => {
            const dailyForecasts = data.DailyForecasts;
            dailyForecasts.forEach((forecast) => {
              const promedioTemp =
                (((forecast.Temperature.Minimum.Value - 32) * 5) / 9 +
                  ((forecast.Temperature.Maximum.Value - 32) * 5) / 9) /
                2;

              if (isDay >= 6 && isDay <= 18) {
                setWeather({
                  headlineText: data.Headline.Text,
                  temperature: promedioTemp,
                  weatherIcon: forecast.Day.Icon,
                  weatherText: forecast.Day.IconPhrase,
                });
              } else {
                setWeather({
                  headlineText: data.Headline.Text,
                  temperature: promedioTemp,
                  weatherIcon: forecast.Night.Icon,
                  weatherText: forecast.Night.IconPhrase,
                });
              }
            });
          });
      });
  };

  return (
    <div className="flex flex-col gap-2 mt-5 p-4 bg-zinc-800 rounded-md shadow-2xl">
      <div className="flex items-center justify-center">
        <div className="flex-shrink-0">
          <img
            src={`https://developer.accuweather.com/sites/default/files/${weather.weatherIcon}-s.png`}
            alt="icono del clima"
            className="w-32 h-auto"
          />
        </div>
        <p className="text-white font-bold text-4xl ml-3">
          {`${weather.temperature} °C`}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 bg-zinc-700 rounded-md shadow-md">
          <p className="text-white">{weather.weatherText}</p>
        </div>
        <div className="p-3 bg-zinc-700 rounded-md shadow-md">
          <p className="text-white">{weather.headlineText}</p>
        </div>
      </div>
    </div>
  );
}
