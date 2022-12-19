const filter = [
  {
    id: 1,
    first_name: "Barbaraanne",
    last_name: "Zannolli",
    email: "bzannolli0@nhs.uk",
    gender: "Female",
    ip_address: "115.253.49.211",
  },
  {
    id: 2,
    first_name: "Reginauld",
    last_name: "Got",
    email: "rgot1@ucla.edu",
    gender: "Genderqueer",
    ip_address: "5.127.101.166",
  },
  {
    id: 3,
    first_name: "Alicea",
    last_name: "Rantoull",
    email: "arantoull2@pcworld.com",
    gender: "Female",
    ip_address: "12.40.167.51",
  },
  {
    id: 4,
    first_name: "Brander",
    last_name: "Reeve",
    email: "breeve3@globo.com",
    gender: "Male",
    ip_address: "0.65.58.248",
  },
  {
    id: 5,
    first_name: "Michaeline",
    last_name: "Scarfe",
    email: "mscarfe4@adobe.com",
    gender: "Female",
    ip_address: "96.45.29.25",
  },
  {
    id: 6,
    first_name: "Sherman",
    last_name: "Florez",
    email: "sflorez5@artisteer.com",
    gender: "Male",
    ip_address: "51.129.194.6",
  },
  {
    id: 7,
    first_name: "Harley",
    last_name: "Crake",
    email: "hcrake6@studiopress.com",
    gender: "Male",
    ip_address: "70.21.0.134",
  },
  {
    id: 8,
    first_name: "Suki",
    last_name: "Vegas",
    email: "svegas7@jugem.jp",
    gender: "Female",
    ip_address: "233.76.218.252",
  },
  {
    id: 9,
    first_name: "Giselle",
    last_name: "Kybbye",
    email: "gkybbye8@senate.gov",
    gender: "Female",
    ip_address: "59.247.32.214",
  },
  {
    id: 10,
    first_name: "Doy",
    last_name: "Brabben",
    email: "dbrabben9@comcast.net",
    gender: "Male",
    ip_address: "248.136.226.188",
  },
];
function filter(filter, callback) {
  let results = [];
  for (let i = 0; i < numbers.length; i++) {
    if (callback(numbers[i])) {
      results.push(numbers[i]);
    }
  }
  return results;
}
const evens = filter(numbers, (n) => {
  return n % 2 === 0;
}); // [2, 4, 6, 8]
const odds = filter(numbers, (n) => {
  return n % 2 !== 0;
}); // [1, 3, 5, 7]
const odds = filter(numbers, (n) => {
  return n % 3 === 0;
}); // [3, 6, 9]
1;
2;
3;
