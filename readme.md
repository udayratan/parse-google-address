# Google Reverse Geocode Address Parser

This is a powerful Reverse geocoding parser module for Node.JS 
  - It is very fast, simple and robust. 
  - It is use for parsing country, state, district, city... from Reverse geocoding address_components.
  - It takes argument as address_components(Array).
  - It return value in JSON Object.

# Installation!
```
    npm  install --save parse-google-address
```

# Setup!

- ES6 import
 ```
        import AddressParser from "parse-google-address";
```

- Javascript require
 ```
        var AddressParser = require('parse-google-address');
```

# Example
```
let address_components = [
    {
        "long_name": "5th Floor",
        "short_name": "5th",
        "types": ["floor"]
    },
    {
        "long_name": "Unispace Business Center",
        "short_name": "Unispace",
        "types": ["subpremise"]
    },
    {
        "long_name": "2-48/5/6, Vaishnavi Cynosure",
        "short_name": "Vaishnavi Cynosure",
        "types": ["premise"]
    },
    {
        "long_name": "West Edge Street",
        "short_name": "West Edge Street",
        "types": ["street_address"]
    },
    {
        "long_name": "2-48/5/6",
        "short_name": "2-48/5/6",
        "types": ["street_number"]
    },
    {
        "long_name": "Old Mumbai Highway",
        "short_name": "Old Mumbai Hwy",
        "types": ["route"]
    },
    {
        "long_name": "MNC Society",
        "short_name": "MNC Society",
        "types": ["political", "neighborhood"]
    },
    {
        "long_name": "Industrial Area",
        "short_name": "Industrial Area",
        "types": ["political", "sublocality", "sublocality_level_3"]
    },
    {
        "long_name": "Telecom Nagar Extension",
        "short_name": "Telecom Nagar Extension",
        "types": ["political", "sublocality", "sublocality_level_2"]
    },
    {
        "long_name": "Gachibowli",
        "short_name": "Gachibowli",
        "types": ["political", "sublocality", "sublocality_level_1"]
    },
    {
        "long_name": "Hyderabad",
        "short_name": "Hyderabad",
        "types": ["locality", "political"]
    },
    {
        "long_name": "Hyderabad/Secunderabad",
        "short_name": "Hyderabad/Secunderabad",
        "types": ["postal_town", "political"]
    },
    {
        "long_name": "Greater Hyderabad",
        "short_name": "Greater Hyderabad",
        "types": ["administrative_area_level_3", "political"]
    },
    {
        "long_name": "Ranga Reddy",
        "short_name": "R.R. District",
        "types": ["administrative_area_level_2", "political"]
    },
    {
        "long_name": "Telangana",
        "short_name": "Telangana",
        "types": ["administrative_area_level_1", "political"]
    },
    {
        "long_name": "India",
        "short_name": "IN",
        "types": ["country", "political"]
    },
    {
        "long_name": "500081",
        "short_name": "500081",
        "types": ["postal_code"]
    }
];
//Note: It is not mandatory to send all value just send the reverse geo code data addresss component as it is

// callback method

AddressParser.Parse_Reverse_GeoCode_Address(address_components, function (err, ParsedData) {
    if (err) console.error(err);
    console.log("Parsed Data--->", ParsedData);
});

// async/await method

(async function () {
    let ParsedData = await AddressParser.Parse_Reverse_GeoCode_Address(address_components);
    console.log("Parsed Data--->", ParsedData);
}());

// promise method

AddressParser.Parse_Reverse_GeoCode_Address(address_components).then((ParsedData) => {
    console.log("Parsed Data--->", ParsedData);
});

```
# Response(JSON Object)
```
{
  "Postal_Code": "500081", //Postal code or Zipcode or Pincode
  "Country": "India", //Country
  "Area_Level_1": "Telangana", //State or Territory 
  "Area_Level_2": "Ranga Reddy", //District or Counties
  "Area_Level_3": "Greater Hyderabad", //colloquial_area or entity above the locality
  "Postal_Town": "Hyderabad/Secunderabad", //Postal Town
  "Locality": "Hyderabad", // City or Village or Town
  "Sub_Locality_1": "Gachibowli", // Inner level of Locality
  "Sub_Locality_2": "Telecom Nagar Extension", // Inner lervel of Sublocality 1
  "Sub_Locality_3": "Industrial Area",// Inner lervel of Sublocality 2
  "Neighborhood": "MNC Society", // Neighborhood or Colony
  "Route": "Old Mumbai Highway", //Route for the address
  "Street_Number": "2-48/5/6", // Street Number
  "Premises": " 2-48/5/6, Vaishnavi Cynosure" //Premises Details if Available
}

```
