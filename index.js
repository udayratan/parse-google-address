let controller = function () { };

function Process_Reverse_GeoCode(ARRAY) {
    return new Promise(resolve => {
        setImmediate(() => {
            let ParsedData = new Object();
            let Postal_Data = ARRAY.find(item => item.types.includes("postal_code"));
            let Country_Data = ARRAY.find(item => item.types.includes("country"));
            let Area_Level_1_Data = ARRAY.find(item => item.types.includes("administrative_area_level_1"));
            let Area_Level_2_Data = ARRAY.find(item => item.types.includes("administrative_area_level_2"));
            let Area_Level_3_Data = ARRAY.find(item => item.types.includes("administrative_area_level_3"));
            let Locality_Data = ARRAY.find(item => item.types.includes("locality"));
            let Sub_Locality_1_Data = ARRAY.find(item => item.types.includes("sublocality_level_1"));
            let Sub_Locality_2_Data = ARRAY.find(item => item.types.includes("sublocality_level_2"));
            let Sub_Locality_3_Data = ARRAY.find(item => item.types.includes("sublocality_level_3"));
            let Postal_Town_Data = ARRAY.find(item => item.types.includes("postal_town"));
            let Neighborhood_Data = ARRAY.find(item => item.types.includes("neighborhood"));
            let Route_Data = ARRAY.find(item => item.types.includes("route"));
            let Street_Address_Data = ARRAY.find(item => item.types.includes("street_address"));
            let Street_Number_Data = ARRAY.find(item => item.types.includes("street_number"));
            let Premises_Data = ARRAY.find(item => item.types.includes("premise"));
            let Sub_Premises_Data = ARRAY.find(item => item.types.includes("subpremise"));
            let Floor_Data = ARRAY.find(item => item.types.includes("floor"));
            ParsedData.Postal_Code = (Postal_Data == null) ? "" : Postal_Data.long_name;
            ParsedData.Country = (Country_Data == null) ? "" : Country_Data.long_name;
            ParsedData.Area_Level_1 = (Area_Level_1_Data == null) ? "" : Area_Level_1_Data.long_name;
            ParsedData.Area_Level_2 = (Area_Level_2_Data == null) ? "" : Area_Level_2_Data.long_name;
            ParsedData.Area_Level_3 = (Area_Level_3_Data == null) ? "" : Area_Level_3_Data.long_name;
            ParsedData.Postal_Town = (Postal_Town_Data == null) ? "" : Postal_Town_Data.long_name;
            ParsedData.Locality = (Locality_Data == null) ? "" : Locality_Data.long_name;
            ParsedData.Sub_Locality_1 = (Sub_Locality_1_Data == null) ? "" : Sub_Locality_1_Data.long_name;
            ParsedData.Sub_Locality_2 = (Sub_Locality_2_Data == null) ? "" : Sub_Locality_2_Data.long_name;
            ParsedData.Sub_Locality_3 = (Sub_Locality_3_Data == null) ? "" : Sub_Locality_3_Data.long_name;
            ParsedData.Neighborhood = (Neighborhood_Data == null) ? "" : Neighborhood_Data.long_name;
            ParsedData.Route = (Route_Data == null) ? "" : Route_Data.long_name;
            ParsedData.Street_Address = (Street_Address_Data == null) ? "" : Street_Address_Data.long_name;
            ParsedData.Street_Number = (Street_Number_Data == null) ? "" : Street_Number_Data.long_name;
            ParsedData.Premises = (Premises_Data == null) ? "" : Premises_Data.long_name;
            ParsedData.Sub_Premises = (Sub_Premises_Data == null) ? "" : Sub_Premises_Data.long_name;
            ParsedData.Floor = (Floor_Data == null) ? "" : Floor_Data.long_name;
            resolve(ParsedData);
        });
    });
};

controller.Parse_Reverse_GeoCode_Address = (ARRAY, callback) => {
    if (callback) {
        Process_Reverse_GeoCode(ARRAY).then((ParsedData) => {
            callback(null, ParsedData);
        })
    } else return new Promise(resolve => {
        setImmediate(() => {
            Process_Reverse_GeoCode(ARRAY).then((ParsedData) => {
                resolve(ParsedData);
            });
        })
    });
}

module.exports = controller;
