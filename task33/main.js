fetch("https://restcountries.com/v3.1/name/azerbaijan")
  .then((response) => response.json())
  .then((data) => {
    const country = data[0];

    const name = country.name.common;
    const flag = country.flags.png;
    const area = country.area;
    const coatOfArms = country.coatOfArms.png;
    const capital = country.capital[0];

    console.log("Country Name:", name);
    console.log("Flag:", flag);
    console.log("Area (sq km):", area);
    console.log("Coat of Arms:", coatOfArms);
    console.log("Capital:", capital);

    document.body.innerHTML = `
      <h1>${name}</h1>
      <p><img src="${flag}" alt="Flag of ${name}" width="150"></p>
      <p><strong>Area:</strong> ${area} sq km</p>
      <p><img src="${coatOfArms}" alt="Coat of Arms of ${name}" width="150"></p>
      <p><strong>Capital:</strong> ${capital}</p>
    `;
  })
  .catch((error) => console.error("Error fetching data:", error));
