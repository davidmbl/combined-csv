// Import Google Maps API and initialize the map
function initializeMap() {
    // Function to fetch and parse the CSV file from GitHub
    async function fetchCSVData() {
        try {
            // Fetch CSV data from GitHub raw URL
            // Use JSON data directly instead of CSV
            const jsonData = [
 {
   "Latitude": -6.818204897,
   "Longitude": 39.28809591,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.706943423,
   "Longitude": 39.11664167,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107038,
   "Longitude": 39.2588155,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.740740566,
   "Longitude": 39.14883239,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.774306431,
   "Longitude": 39.23337666,
   "CustType": "personal"
 },
 {
   "Latitude": -6.617360425,
   "Longitude": 39.12355363,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7152436,
   "Longitude": 39.2117887,
   "CustType": "personal"
 },
 {
   "Latitude": -6.806146615,
   "Longitude": 39.17799531,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8264417,
   "Longitude": 39.2571329,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8272119,
   "Longitude": 39.2692071,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7348946,
   "Longitude": 39.1992497,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6911329,
   "Longitude": 39.1906049,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.68620569,
   "Longitude": 39.18982247,
   "CustType": "personal"
 },
 {
   "Latitude": -6.773847282,
   "Longitude": 39.23300533,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7502874,
   "Longitude": 39.190371,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7902583,
   "Longitude": 39.2632716,
   "CustType": "personal"
 },
 {
   "Latitude": -6.617360425,
   "Longitude": 39.12355363,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.801802289,
   "Longitude": 39.24670849,
   "CustType": "personal"
 },
 {
   "Latitude": -6.708957224,
   "Longitude": 39.19735193,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.751458569,
   "Longitude": 39.16342414,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.821390861,
   "Longitude": 39.27347852,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.730672382,
   "Longitude": 39.10879612,
   "CustType": "personal"
 },
 {
   "Latitude": -6.652738048,
   "Longitude": 39.19414628,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7974888,
   "Longitude": 39.1972353,
   "CustType": "personal"
 },
 {
   "Latitude": -6.80927475,
   "Longitude": 39.21425865,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818002728,
   "Longitude": 39.27254103,
   "CustType": "personal"
 },
 {
   "Latitude": -6.680635098,
   "Longitude": 39.17602845,
   "CustType": "personal"
 },
 {
   "Latitude": -7.017280826,
   "Longitude": 39.3142523,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.641030961,
   "Longitude": 39.18421305,
   "CustType": "personal"
 },
 {
   "Latitude": -6.591991,
   "Longitude": 39.1146161,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7723197,
   "Longitude": 39.1575438,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8215457,
   "Longitude": 39.2695719,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7982538,
   "Longitude": 39.2099472,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7880633,
   "Longitude": 39.2379615,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.828003,
   "Longitude": 39.2568497,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819472761,
   "Longitude": 39.24783111,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7038539,
   "Longitude": 39.1823857,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9183545,
   "Longitude": 39.2833639,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7406614,
   "Longitude": 39.1507217,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6352417,
   "Longitude": 39.167676,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8966287,
   "Longitude": 39.2511204,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8055176,
   "Longitude": 39.2737513,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.791231007,
   "Longitude": 39.20363903,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7937497,
   "Longitude": 39.2417088,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7120136,
   "Longitude": 39.1664248,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819568637,
   "Longitude": 39.29719448,
   "CustType": "personal"
 },
 {
   "Latitude": -6.833791792,
   "Longitude": 39.25755485,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6262152,
   "Longitude": 39.1305445,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6646888,
   "Longitude": 39.18730046,
   "CustType": "personal"
 },
 {
   "Latitude": -6.801261228,
   "Longitude": 39.16905999,
   "CustType": "personal"
 },
 {
   "Latitude": -6.811269341,
   "Longitude": 39.17395585,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.654925,
   "Longitude": 39.0847583,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8160878,
   "Longitude": 39.2143838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.661628865,
   "Longitude": 39.20048561,
   "CustType": "personal"
 },
 {
   "Latitude": -6.736657731,
   "Longitude": 39.19162005,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7332288,
   "Longitude": 39.1929836,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810908303,
   "Longitude": 39.10746486,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.81830816,
   "Longitude": 39.2873186,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.459392193,
   "Longitude": 35.55761456,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7905932,
   "Longitude": 39.2195264,
   "CustType": "personal"
 },
 {
   "Latitude": -6.757500661,
   "Longitude": 39.19517398,
   "CustType": "personal"
 },
 {
   "Latitude": -6.749135,
   "Longitude": 39.1636695,
   "CustType": "personal"
 },
 {
   "Latitude": -6.823960035,
   "Longitude": 39.27447934,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.797000008,
   "Longitude": 39.23393458,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7694017,
   "Longitude": 39.2297917,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6883618,
   "Longitude": 39.2009943,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7603705,
   "Longitude": 39.193838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.712199109,
   "Longitude": 39.2134881,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.840714543,
   "Longitude": 39.14170182,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7302454,
   "Longitude": 39.2146584,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8139798,
   "Longitude": 39.2395925,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7176314,
   "Longitude": 39.1960667,
   "CustType": "personal"
 },
 {
   "Latitude": -6.718240531,
   "Longitude": 39.20917561,
   "CustType": "personal"
 },
 {
   "Latitude": -6.770847655,
   "Longitude": 39.2574361,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.794075,
   "Longitude": 39.2547267,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6864918,
   "Longitude": 39.2039261,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7530199,
   "Longitude": 39.1103928,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7527789,
   "Longitude": 39.2023722,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.817186574,
   "Longitude": 39.28686541,
   "CustType": "personal"
 },
 {
   "Latitude": -6.707842904,
   "Longitude": 39.19314904,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6412898,
   "Longitude": 39.1946102,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.749181838,
   "Longitude": 39.16084772,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819942385,
   "Longitude": 39.27253796,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7940799,
   "Longitude": 39.2286485,
   "CustType": "personal"
 },
 {
   "Latitude": -6.828387,
   "Longitude": 39.2562304,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6384932,
   "Longitude": 39.1916619,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.813256735,
   "Longitude": 39.2887938,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.801252,
   "Longitude": 39.2501783,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.803807369,
   "Longitude": 39.16629732,
   "CustType": "personal"
 },
 {
   "Latitude": -6.631617,
   "Longitude": 39.188174,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.678067,
   "Longitude": 39.1597998,
   "CustType": "personal"
 },
 {
   "Latitude": -6.924469482,
   "Longitude": 39.13123747,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.669381578,
   "Longitude": 39.17820096,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7720975,
   "Longitude": 39.2587771,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.78223932,
   "Longitude": 39.22984958,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7992488,
   "Longitude": 39.2683642,
   "CustType": "personal"
 },
 {
   "Latitude": -6.784377761,
   "Longitude": 39.0501428,
   "CustType": "personal"
 },
 {
   "Latitude": -6.70764298,
   "Longitude": 39.19563449,
   "CustType": "personal"
 },
 {
   "Latitude": -6.826166804,
   "Longitude": 39.27562752,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7037533,
   "Longitude": 39.207965,
   "CustType": "personal"
 },
 {
   "Latitude": -6.785738,
   "Longitude": 39.2046387,
   "CustType": "personal"
 },
 {
   "Latitude": -6.777829952,
   "Longitude": 39.24539528,
   "CustType": "personal"
 },
 {
   "Latitude": -4.646645482,
   "Longitude": 31.81278742,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.646320948,
   "Longitude": 39.09416199,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.777215404,
   "Longitude": 39.26850796,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.673056855,
   "Longitude": 39.20777911,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7402867,
   "Longitude": 39.2286798,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6285356,
   "Longitude": 39.1631081,
   "CustType": "personal"
 },
 {
   "Latitude": -6.788879177,
   "Longitude": 39.22723304,
   "CustType": "personal"
 },
 {
   "Latitude": -6.751832287,
   "Longitude": 39.14013657,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7213205,
   "Longitude": 39.142563,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7574419,
   "Longitude": 39.2379365,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.741005154,
   "Longitude": 39.08832762,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7950545,
   "Longitude": 39.1031401,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8139798,
   "Longitude": 39.2395925,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.767846846,
   "Longitude": 39.25824959,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.608305957,
   "Longitude": 39.13041819,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7941129,
   "Longitude": 39.1811039,
   "CustType": "personal"
 },
 {
   "Latitude": -6.503417246,
   "Longitude": 35.16897337,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.761527209,
   "Longitude": 39.26384728,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7060638,
   "Longitude": 39.2182261,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8078384,
   "Longitude": 39.2603339,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7955972,
   "Longitude": 39.2461184,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575148,
   "Longitude": 39.2040513,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803998818,
   "Longitude": 39.25228613,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7957583,
   "Longitude": 39.19435,
   "CustType": "personal"
 },
 {
   "Latitude": -6.79718631,
   "Longitude": 39.2336905,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7408101,
   "Longitude": 39.1719981,
   "CustType": "personal"
 },
 {
   "Latitude": -6.791231007,
   "Longitude": 39.20363903,
   "CustType": "personal"
 },
 {
   "Latitude": -6.815248251,
   "Longitude": 39.22952615,
   "CustType": "personal"
 },
 {
   "Latitude": -6.727734104,
   "Longitude": 39.21080951,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7216069,
   "Longitude": 39.1468601,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8200517,
   "Longitude": 39.1238448,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7937497,
   "Longitude": 39.2417088,
   "CustType": "personal"
 },
 {
   "Latitude": -6.812747531,
   "Longitude": 39.21268077,
   "CustType": "personal"
 },
 {
   "Latitude": -6.795636902,
   "Longitude": 39.25927418,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810242104,
   "Longitude": 39.25965481,
   "CustType": "personal"
 },
 {
   "Latitude": -6.797499,
   "Longitude": 39.2323877,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7434654,
   "Longitude": 39.1726507,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7960455,
   "Longitude": 39.2251697,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7434235,
   "Longitude": 39.1722298,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7495616,
   "Longitude": 39.1922364,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.784420096,
   "Longitude": 39.0916416,
   "CustType": "personal"
 },
 {
   "Latitude": -6.790762251,
   "Longitude": 39.19763088,
   "CustType": "personal"
 },
 {
   "Latitude": -6.738254822,
   "Longitude": 39.21341562,
   "CustType": "personal"
 },
 {
   "Latitude": -6.74441519,
   "Longitude": 39.27504234,
   "CustType": "personal"
 },
 {
   "Latitude": -6.738771098,
   "Longitude": 39.22589081,
   "CustType": "personal"
 },
 {
   "Latitude": -6.793690724,
   "Longitude": 39.15684493,
   "CustType": "personal"
 },
 {
   "Latitude": -6.790337834,
   "Longitude": 39.24327928,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7884014,
   "Longitude": 39.2334182,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8294781,
   "Longitude": 37.6839409,
   "CustType": "personal"
 },
 {
   "Latitude": -6.795858263,
   "Longitude": 39.20588587,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810002211,
   "Longitude": 39.22380924,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7900189,
   "Longitude": 39.1645951,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7606953,
   "Longitude": 39.2328033,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6478035,
   "Longitude": 39.1736599,
   "CustType": "personal"
 },
 {
   "Latitude": -6.802281899,
   "Longitude": 39.16003615,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.784892098,
   "Longitude": 39.25844193,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.774658823,
   "Longitude": 39.2704058,
   "CustType": "personal"
 },
 {
   "Latitude": -6.823131322,
   "Longitude": 39.27216527,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8091288,
   "Longitude": 39.2655132,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7907836,
   "Longitude": 39.2556956,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.827118633,
   "Longitude": 39.26211689,
   "CustType": "personal"
 },
 {
   "Latitude": -6.742348672,
   "Longitude": 39.22972485,
   "CustType": "personal"
 },
 {
   "Latitude": -6.782840957,
   "Longitude": 39.23485556,
   "CustType": "personal"
 },
 {
   "Latitude": -6.785044,
   "Longitude": 39.2639862,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7049833,
   "Longitude": 39.2227383,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8055176,
   "Longitude": 39.2737513,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8091417,
   "Longitude": 39.2647104,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.5843766,
   "Longitude": 39.1227221,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7849936,
   "Longitude": 39.241609,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6519873,
   "Longitude": 39.2003069,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7086736,
   "Longitude": 39.1364236,
   "CustType": "personal"
 },
 {
   "Latitude": -6.727351445,
   "Longitude": 39.20179215,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7937497,
   "Longitude": 39.2417088,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6747069,
   "Longitude": 39.1932928,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9230302,
   "Longitude": 39.2529332,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.801245248,
   "Longitude": 39.16904926,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.689188686,
   "Longitude": 39.15664998,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7994587,
   "Longitude": 39.1909,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6650468,
   "Longitude": 39.2061678,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.690854048,
   "Longitude": 39.18550973,
   "CustType": "personal"
 },
 {
   "Latitude": -6.807253692,
   "Longitude": 39.21814442,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.792568455,
   "Longitude": 39.20894392,
   "CustType": "personal"
 },
 {
   "Latitude": -6.737598636,
   "Longitude": 39.22138221,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369081793,
   "Longitude": 34.88874153,
   "CustType": "personal"
 },
 {
   "Latitude": -6.814685897,
   "Longitude": 39.27133038,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.79298665,
   "Longitude": 39.20605726,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.795923151,
   "Longitude": 39.11767639,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.744318165,
   "Longitude": 39.09280041,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.828186,
   "Longitude": 39.2559084,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8139798,
   "Longitude": 39.2395925,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819688122,
   "Longitude": 39.27309176,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.783709962,
   "Longitude": 39.2259468,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.705504872,
   "Longitude": 39.11325932,
   "CustType": "personal"
 },
 {
   "Latitude": -6.712502772,
   "Longitude": 39.18116681,
   "CustType": "personal"
 },
 {
   "Latitude": -6.779461053,
   "Longitude": 39.23874067,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6576528,
   "Longitude": 39.1878049,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.76750991,
   "Longitude": 39.23247712,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.789310219,
   "Longitude": 39.25347467,
   "CustType": "personal"
 },
 {
   "Latitude": -2.849490531,
   "Longitude": 32.61012743,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.817012629,
   "Longitude": 39.08672884,
   "CustType": "personal"
 },
 {
   "Latitude": -6.631617,
   "Longitude": 39.188174,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.694564542,
   "Longitude": 39.12171326,
   "CustType": "personal"
 },
 {
   "Latitude": -6.608081614,
   "Longitude": 39.10759449,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818112001,
   "Longitude": 39.28720432,
   "CustType": "personal"
 },
 {
   "Latitude": -6.784748538,
   "Longitude": 39.1925203,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.740645259,
   "Longitude": 39.23196316,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6964726,
   "Longitude": 39.1686427,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7820467,
   "Longitude": 39.2385167,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.698695995,
   "Longitude": 39.20934677,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.822249,
   "Longitude": 39.2394637,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.705313074,
   "Longitude": 39.11272287,
   "CustType": "personal"
 },
 {
   "Latitude": -6.762267465,
   "Longitude": 39.23080877,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8059472,
   "Longitude": 39.2611474,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803733117,
   "Longitude": 39.16657293,
   "CustType": "personal"
 },
 {
   "Latitude": -6.5891319,
   "Longitude": 39.1157088,
   "CustType": "personal"
 },
 {
   "Latitude": -6.78729739,
   "Longitude": 39.24230399,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.811942175,
   "Longitude": 39.20726454,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6838231,
   "Longitude": 39.1861814,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016335,
   "Longitude": 39.2315656,
   "CustType": "personal"
 },
 {
   "Latitude": -6.830336254,
   "Longitude": 39.25617743,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.759063042,
   "Longitude": 39.19576942,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.805818035,
   "Longitude": 39.24388374,
   "CustType": "personal"
 },
 {
   "Latitude": -5.130844925,
   "Longitude": 32.03865423,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.782024377,
   "Longitude": 39.14277438,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8305242,
   "Longitude": 39.2613577,
   "CustType": "personal"
 },
 {
   "Latitude": -6.631617,
   "Longitude": 39.188174,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.738872538,
   "Longitude": 39.17850411,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7528328,
   "Longitude": 39.0492691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7816221,
   "Longitude": 39.0927511,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810562619,
   "Longitude": 39.23003335,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9047966,
   "Longitude": 39.2510121,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7808183,
   "Longitude": 39.194695,
   "CustType": "personal"
 },
 {
   "Latitude": -6.782328607,
   "Longitude": 39.24728082,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7891948,
   "Longitude": 39.2376987,
   "CustType": "personal"
 },
 {
   "Latitude": -6.791637,
   "Longitude": 39.1910279,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271028,
   "Longitude": 39.1619573,
   "CustType": "personal"
 },
 {
   "Latitude": -6.802081534,
   "Longitude": 39.23523277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.661474589,
   "Longitude": 39.20034528,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7398967,
   "Longitude": 39.19221,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.796989,
   "Longitude": 39.1175172,
   "CustType": "personal"
 },
 {
   "Latitude": -6.77385,
   "Longitude": 39.1129312,
   "CustType": "personal"
 },
 {
   "Latitude": -6.702457405,
   "Longitude": 39.11471844,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.756094291,
   "Longitude": 39.23329353,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.794076227,
   "Longitude": 39.20601201,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231951,
   "Longitude": 39.1427885,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.811502607,
   "Longitude": 39.27402381,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.790283772,
   "Longitude": 39.25034704,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7131569,
   "Longitude": 39.2020008,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7049485,
   "Longitude": 39.2133288,
   "CustType": "personal"
 },
 {
   "Latitude": -6.704927738,
   "Longitude": 39.21328622,
   "CustType": "personal"
 },
 {
   "Latitude": -6.77906995,
   "Longitude": 39.15473248,
   "CustType": "personal"
 },
 {
   "Latitude": -6.812569611,
   "Longitude": 39.26260471,
   "CustType": "personal"
 },
 {
   "Latitude": -6.631617,
   "Longitude": 39.188174,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.802858,
   "Longitude": 39.2557012,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7319096,
   "Longitude": 39.2206093,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810923957,
   "Longitude": 39.26088537,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.816246701,
   "Longitude": 39.07350525,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.927534501,
   "Longitude": 39.13355827,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.80579221,
   "Longitude": 39.22406901,
   "CustType": "personal"
 },
 {
   "Latitude": -6.774272907,
   "Longitude": 39.23340082,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.723273696,
   "Longitude": 39.23008257,
   "CustType": "personal"
 },
 {
   "Latitude": -6.799723676,
   "Longitude": 39.20480967,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7771457,
   "Longitude": 39.2229121,
   "CustType": "personal"
 },
 {
   "Latitude": -6.78793,
   "Longitude": 39.0487222,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.738855271,
   "Longitude": 39.08723116,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.790748615,
   "Longitude": 39.25266041,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.737916967,
   "Longitude": 39.16732405,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7849574,
   "Longitude": 39.1982426,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810753388,
   "Longitude": 39.22243379,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.812746887,
   "Longitude": 39.16578001,
   "CustType": "personal"
 },
 {
   "Latitude": -6.759012098,
   "Longitude": 39.18250441,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6674245,
   "Longitude": 39.2095089,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7543728,
   "Longitude": 39.2408694,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6252369,
   "Longitude": 39.1156478,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8062285,
   "Longitude": 39.2608391,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7995696,
   "Longitude": 39.2303353,
   "CustType": "personal"
 },
 {
   "Latitude": -6.797823246,
   "Longitude": 39.21362886,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6423873,
   "Longitude": 39.1779296,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7503545,
   "Longitude": 39.116503,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7055054,
   "Longitude": 39.1689491,
   "CustType": "personal"
 },
 {
   "Latitude": -6.672362792,
   "Longitude": 39.12784629,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8234998,
   "Longitude": 39.2799207,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7774231,
   "Longitude": 39.2404848,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8121067,
   "Longitude": 39.256595,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.707964368,
   "Longitude": 39.21328135,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7131183,
   "Longitude": 39.2167135,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7872083,
   "Longitude": 39.145355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8085229,
   "Longitude": 39.2623598,
   "CustType": "personal"
 },
 {
   "Latitude": -6.75764702,
   "Longitude": 39.19539804,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7924,
   "Longitude": 39.2083,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8729697,
   "Longitude": 39.2441614,
   "CustType": "personal"
 },
 {
   "Latitude": -6.799668552,
   "Longitude": 39.21409965,
   "CustType": "personal"
 },
 {
   "Latitude": -6.740613458,
   "Longitude": 39.14923393,
   "CustType": "personal"
 },
 {
   "Latitude": -6.809169312,
   "Longitude": 39.28467486,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.78627455,
   "Longitude": 39.16758058,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7478505,
   "Longitude": 39.1183509,
   "CustType": "personal"
 },
 {
   "Latitude": -6.906605785,
   "Longitude": 39.25276637,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7517942,
   "Longitude": 39.1233282,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.770775779,
   "Longitude": 39.23537594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7995944,
   "Longitude": 39.1907433,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8143129,
   "Longitude": 39.2606774,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7455137,
   "Longitude": 39.1654848,
   "CustType": "personal"
 },
 {
   "Latitude": -6.614028048,
   "Longitude": 38.76493589,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7613591,
   "Longitude": 39.0802587,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8055176,
   "Longitude": 39.2737513,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.81379971,
   "Longitude": 39.24707658,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.721023122,
   "Longitude": 39.21067827,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.826603,
   "Longitude": 39.2526959,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.790518415,
   "Longitude": 39.25080541,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7996247,
   "Longitude": 39.2675177,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8118522,
   "Longitude": 39.2126716,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.71097236,
   "Longitude": 39.18832287,
   "CustType": "personal"
 },
 {
   "Latitude": -6.73759115,
   "Longitude": 39.11134372,
   "CustType": "personal"
 },
 {
   "Latitude": -6.777355927,
   "Longitude": 39.2718272,
   "CustType": "personal"
 },
 {
   "Latitude": -6.777269548,
   "Longitude": 39.23318302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8027967,
   "Longitude": 39.266236,
   "CustType": "personal"
 },
 {
   "Latitude": -6.80905,
   "Longitude": 39.2352017,
   "CustType": "personal"
 },
 {
   "Latitude": -6.762232511,
   "Longitude": 39.2421776,
   "CustType": "personal"
 },
 {
   "Latitude": -6.723184106,
   "Longitude": 39.22959957,
   "CustType": "personal"
 },
 {
   "Latitude": -6.670969865,
   "Longitude": 39.15417677,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.631617,
   "Longitude": 39.188174,
   "CustType": "personal"
 },
 {
   "Latitude": -6.617446607,
   "Longitude": 39.1234073,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8035647,
   "Longitude": 39.2036505,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.927244811,
   "Longitude": 39.13355748,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7478978,
   "Longitude": 39.114409,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6893455,
   "Longitude": 39.1845325,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8120817,
   "Longitude": 39.2554967,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7234766,
   "Longitude": 39.142792,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7895348,
   "Longitude": 39.1883422,
   "CustType": "personal"
 },
 {
   "Latitude": -6.813473791,
   "Longitude": 39.21577737,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7469718,
   "Longitude": 39.1374692,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.740405529,
   "Longitude": 39.14882541,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.661333392,
   "Longitude": 39.18280497,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8143752,
   "Longitude": 39.1635549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6412631,
   "Longitude": 39.1802383,
   "CustType": "personal"
 },
 {
   "Latitude": -6.631617,
   "Longitude": 39.188174,
   "CustType": "personal"
 },
 {
   "Latitude": -6.631617,
   "Longitude": 39.188174,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.78312,
   "Longitude": 39.1672217,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7106354,
   "Longitude": 39.2072926,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7220801,
   "Longitude": 39.1452586,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8139798,
   "Longitude": 39.2395925,
   "CustType": "personal"
 },
 {
   "Latitude": -6.615694202,
   "Longitude": 39.16801667,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7477462,
   "Longitude": 39.1172839,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8034054,
   "Longitude": 39.2578404,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6364101,
   "Longitude": 39.1651654,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7437497,
   "Longitude": 39.0964857,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.745211332,
   "Longitude": 39.11655889,
   "CustType": "personal"
 },
 {
   "Latitude": -6.72416178,
   "Longitude": 39.14304167,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.743934237,
   "Longitude": 39.09236275,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7852281,
   "Longitude": 39.049843,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810851014,
   "Longitude": 39.21979262,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.752941313,
   "Longitude": 39.13555018,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7812764,
   "Longitude": 39.1680253,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.801774785,
   "Longitude": 39.25239417,
   "CustType": "personal"
 },
 {
   "Latitude": -6.827708946,
   "Longitude": 39.23489694,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7386498,
   "Longitude": 39.213871,
   "CustType": "personal"
 },
 {
   "Latitude": -5.654200987,
   "Longitude": 32.47182964,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8102839,
   "Longitude": 39.2435622,
   "CustType": "personal"
 },
 {
   "Latitude": -6.914194419,
   "Longitude": 39.2532206,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6809032,
   "Longitude": 39.0699717,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.719654352,
   "Longitude": 39.19824979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8042617,
   "Longitude": 39.1120744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8271992,
   "Longitude": 39.2694153,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8271992,
   "Longitude": 39.2694153,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8237903,
   "Longitude": 39.2763922,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.757027657,
   "Longitude": 39.2280285,
   "CustType": "personal"
 },
 {
   "Latitude": -6.687570098,
   "Longitude": 39.14823704,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.786531958,
   "Longitude": 39.14984788,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7531102,
   "Longitude": 39.2393128,
   "CustType": "personal"
 },
 {
   "Latitude": -6.687701062,
   "Longitude": 39.05175341,
   "CustType": "personal"
 },
 {
   "Latitude": -6.796480495,
   "Longitude": 39.21028241,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7941224,
   "Longitude": 39.2591168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7729525,
   "Longitude": 39.2071306,
   "CustType": "personal"
 },
 {
   "Latitude": -6.723171279,
   "Longitude": 39.23032165,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.702457405,
   "Longitude": 39.11471844,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.780604,
   "Longitude": 39.2269701,
   "CustType": "personal"
 },
 {
   "Latitude": -6.763191994,
   "Longitude": 39.15403807,
   "CustType": "personal"
 },
 {
   "Latitude": -6.425501219,
   "Longitude": 34.98743782,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.740229943,
   "Longitude": 39.18542373,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "personal"
 },
 {
   "Latitude": -6.811706397,
   "Longitude": 39.22786695,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.777350683,
   "Longitude": 39.25313898,
   "CustType": "personal"
 },
 {
   "Latitude": -6.780199411,
   "Longitude": 39.22467219,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.825024786,
   "Longitude": 39.27893758,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.833804232,
   "Longitude": 39.25755403,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8294781,
   "Longitude": 37.6839409,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7937497,
   "Longitude": 39.2417088,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": -6.927491899,
   "Longitude": 39.13355827,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810130049,
   "Longitude": 39.2274034,
   "CustType": "personal"
 },
 {
   "Latitude": -6.631747834,
   "Longitude": 39.18848569,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8139798,
   "Longitude": 39.2395925,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8081933,
   "Longitude": 39.2632167,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8021897,
   "Longitude": 39.2423789,
   "CustType": "personal"
 },
 {
   "Latitude": -6.689425,
   "Longitude": 39.1466967,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803770082,
   "Longitude": 39.16566432,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7441977,
   "Longitude": 39.1266253,
   "CustType": "personal"
 },
 {
   "Latitude": -6.807772,
   "Longitude": 39.2604369,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7709942,
   "Longitude": 39.2254079,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.762257387,
   "Longitude": 39.20535455,
   "CustType": "personal"
 },
 {
   "Latitude": -4.747179236,
   "Longitude": 36.42704523,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8011572,
   "Longitude": 39.1974667,
   "CustType": "personal"
 },
 {
   "Latitude": -6.661959455,
   "Longitude": 39.19458926,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6189945,
   "Longitude": 39.1041406,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8163834,
   "Longitude": 39.2907344,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7495353,
   "Longitude": 39.1509151,
   "CustType": "personal"
 },
 {
   "Latitude": -6.688715,
   "Longitude": 39.1975233,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.70271067,
   "Longitude": 39.20360603,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7798482,
   "Longitude": 39.2162197,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.754669,
   "Longitude": 39.1402393,
   "CustType": "personal"
 },
 {
   "Latitude": -6.743727353,
   "Longitude": 39.11775995,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851715,
   "Longitude": 39.2579396,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8046435,
   "Longitude": 39.2577228,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7495436,
   "Longitude": 39.1616984,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7824728,
   "Longitude": 39.172857,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6393068,
   "Longitude": 39.1752344,
   "CustType": "personal"
 },
 {
   "Latitude": -6.69118,
   "Longitude": 39.1815894,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6162239,
   "Longitude": 39.1216455,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7138533,
   "Longitude": 39.1968924,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8279279,
   "Longitude": 39.2567847,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8282963,
   "Longitude": 39.255967,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7429547,
   "Longitude": 39.1651275,
   "CustType": "personal"
 },
 {
   "Latitude": -6.662618744,
   "Longitude": 39.19488442,
   "CustType": "personal"
 },
 {
   "Latitude": -6.782375155,
   "Longitude": 39.23691183,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7244458,
   "Longitude": 39.1967447,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7856763,
   "Longitude": 39.0756946,
   "CustType": "personal"
 },
 {
   "Latitude": -6.808454839,
   "Longitude": 39.21950966,
   "CustType": "personal"
 },
 {
   "Latitude": -6.76256,
   "Longitude": 39.2149305,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7270554,
   "Longitude": 39.2320913,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8271992,
   "Longitude": 39.2694153,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8271992,
   "Longitude": 39.2694153,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7540928,
   "Longitude": 39.1642574,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208156,
   "Longitude": 39.2729391,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7696132,
   "Longitude": 39.2295911,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6196144,
   "Longitude": 39.1686792,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.723115585,
   "Longitude": 39.14289327,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231951,
   "Longitude": 39.1427885,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7994675,
   "Longitude": 39.1921612,
   "CustType": "personal"
 },
 {
   "Latitude": -6.779805,
   "Longitude": 39.2359167,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6676585,
   "Longitude": 39.1942336,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803843625,
   "Longitude": 39.25218453,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7460386,
   "Longitude": 39.1595788,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7551625,
   "Longitude": 39.1739919,
   "CustType": "personal"
 },
 {
   "Latitude": -6.777189413,
   "Longitude": 39.23258811,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8147512,
   "Longitude": 39.1564326,
   "CustType": "personal"
 },
 {
   "Latitude": -6.778919331,
   "Longitude": 39.2524378,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.876298513,
   "Longitude": 39.24588376,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8070996,
   "Longitude": 39.2604872,
   "CustType": "personal"
 },
 {
   "Latitude": -6.727111,
   "Longitude": 39.142468,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7696359,
   "Longitude": 39.2547739,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7517206,
   "Longitude": 39.1160688,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6537476,
   "Longitude": 39.1898113,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7869127,
   "Longitude": 39.1353982,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8092655,
   "Longitude": 39.2219793,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7892967,
   "Longitude": 39.1392967,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8725117,
   "Longitude": 39.2375805,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6984042,
   "Longitude": 39.2020136,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7880043,
   "Longitude": 39.2440647,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7418073,
   "Longitude": 39.1684244,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8304705,
   "Longitude": 39.2577255,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.759811,
   "Longitude": 39.1009396,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6051874,
   "Longitude": 39.1025841,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7817061,
   "Longitude": 39.1492923,
   "CustType": "personal"
 },
 {
   "Latitude": -6.78946,
   "Longitude": 39.272095,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8152186,
   "Longitude": 39.2334256,
   "CustType": "personal"
 },
 {
   "Latitude": -6.751170116,
   "Longitude": 39.18801357,
   "CustType": "personal"
 },
 {
   "Latitude": -6.619203142,
   "Longitude": 39.1184311,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7853252,
   "Longitude": 39.2124461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.794654031,
   "Longitude": 39.21700729,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7340779,
   "Longitude": 39.1386709,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8071824,
   "Longitude": 39.2615066,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7821126,
   "Longitude": 39.140059,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7651979,
   "Longitude": 39.1447543,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8312485,
   "Longitude": 39.1311862,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7312458,
   "Longitude": 39.2110369,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6515893,
   "Longitude": 39.1778769,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7753337,
   "Longitude": 39.1455028,
   "CustType": "personal"
 },
 {
   "Latitude": -6.800824,
   "Longitude": 39.2105881,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7684253,
   "Longitude": 39.1400132,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7160644,
   "Longitude": 39.1974611,
   "CustType": "personal"
 },
 {
   "Latitude": -6.83375,
   "Longitude": 39.25579,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8091605,
   "Longitude": 39.2483432,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819286,
   "Longitude": 39.2711848,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9138862,
   "Longitude": 39.2406375,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8289623,
   "Longitude": 39.2540052,
   "CustType": "personal"
 },
 {
   "Latitude": -6.699202172,
   "Longitude": 39.2172038,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.725783774,
   "Longitude": 39.21748774,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6645192,
   "Longitude": 39.2071727,
   "CustType": "personal"
 },
 {
   "Latitude": -6.931778436,
   "Longitude": 39.27906172,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7670209,
   "Longitude": 39.1470446,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7973834,
   "Longitude": 39.2320469,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7725209,
   "Longitude": 39.1488936,
   "CustType": "personal"
 },
 {
   "Latitude": -6.811665,
   "Longitude": 39.2451883,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8036867,
   "Longitude": 39.2481838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.660250028,
   "Longitude": 39.19861799,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6289247,
   "Longitude": 39.1665541,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.692299,
   "Longitude": 39.1950059,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7619115,
   "Longitude": 39.1415872,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7580234,
   "Longitude": 39.1369291,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7590038,
   "Longitude": 39.251099,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819430149,
   "Longitude": 39.27292585,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7947068,
   "Longitude": 39.1867769,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "personal"
 },
 {
   "Latitude": -6.792749876,
   "Longitude": 39.20862685,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7526416,
   "Longitude": 39.175736,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7876326,
   "Longitude": 39.2597161,
   "CustType": "personal"
 },
 {
   "Latitude": -6.708602,
   "Longitude": 39.1951219,
   "CustType": "personal"
 },
 {
   "Latitude": -6.808329756,
   "Longitude": 39.25602464,
   "CustType": "corporate"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.770970383,
   "Longitude": 39.23208144,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7532689,
   "Longitude": 39.1390515,
   "CustType": "personal"
 },
 {
   "Latitude": -6.761254,
   "Longitude": 39.2660596,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.793181702,
   "Longitude": 39.21626549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7947816,
   "Longitude": 39.2200095,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803109578,
   "Longitude": 39.25228357,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6295362,
   "Longitude": 39.1181057,
   "CustType": "personal"
 },
 {
   "Latitude": -6.809959306,
   "Longitude": 39.26317969,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.816088211,
   "Longitude": 39.22988473,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6982743,
   "Longitude": 39.183886,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8082303,
   "Longitude": 39.2623613,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7469591,
   "Longitude": 39.167359,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7863297,
   "Longitude": 39.2427328,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8241057,
   "Longitude": 39.2720511,
   "CustType": "personal"
 },
 {
   "Latitude": -6.790762251,
   "Longitude": 39.19763088,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.725063617,
   "Longitude": 39.23162213,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8058097,
   "Longitude": 39.2013683,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8314611,
   "Longitude": 39.255792,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803264,
   "Longitude": 39.247559,
   "CustType": "personal"
 },
 {
   "Latitude": -6.668866244,
   "Longitude": 39.16334911,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819720031,
   "Longitude": 39.28739156,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7937497,
   "Longitude": 39.2417088,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.770702661,
   "Longitude": 39.2210526,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7603417,
   "Longitude": 39.1359181,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7106354,
   "Longitude": 39.2072926,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7630008,
   "Longitude": 39.0994742,
   "CustType": "personal"
 },
 {
   "Latitude": -6.665692,
   "Longitude": 39.1807016,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "personal"
 },
 {
   "Latitude": -6.757469303,
   "Longitude": 39.19534305,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7555317,
   "Longitude": 39.1374467,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.790359075,
   "Longitude": 39.24337248,
   "CustType": "personal"
 },
 {
   "Latitude": -6.715350138,
   "Longitude": 39.19691057,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7318068,
   "Longitude": 39.1601975,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.717758479,
   "Longitude": 39.2074585,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.782772008,
   "Longitude": 39.26792622,
   "CustType": "personal"
 },
 {
   "Latitude": -6.770309628,
   "Longitude": 39.22681063,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.773535734,
   "Longitude": 39.11860066,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7523774,
   "Longitude": 39.1379708,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7605546,
   "Longitude": 39.1398354,
   "CustType": "personal"
 },
 {
   "Latitude": -6.752235,
   "Longitude": 39.1351587,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7557711,
   "Longitude": 39.1376067,
   "CustType": "personal"
 },
 {
   "Latitude": -6.759846703,
   "Longitude": 39.14144701,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7527116,
   "Longitude": 39.1398258,
   "CustType": "personal"
 },
 {
   "Latitude": -6.754635098,
   "Longitude": 39.13676461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7569551,
   "Longitude": 39.1388494,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7605768,
   "Longitude": 39.1391187,
   "CustType": "personal"
 },
 {
   "Latitude": -6.74735,
   "Longitude": 39.14396,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7578382,
   "Longitude": 39.1372155,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8069033,
   "Longitude": 39.2316517,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.705163856,
   "Longitude": 39.11143419,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.725994701,
   "Longitude": 39.23062762,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7970438,
   "Longitude": 39.1095749,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7534947,
   "Longitude": 39.1424554,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7569122,
   "Longitude": 39.1355936,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7589724,
   "Longitude": 39.1360723,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7559854,
   "Longitude": 39.1364512,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7604092,
   "Longitude": 39.1427318,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.755068,
   "Longitude": 39.1379,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.729045,
   "Longitude": 39.1951883,
   "CustType": "personal"
 },
 {
   "Latitude": -6.784596419,
   "Longitude": 39.25665239,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.757146065,
   "Longitude": 39.20332028,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7833266,
   "Longitude": 39.2661272,
   "CustType": "personal"
 },
 {
   "Latitude": -6.5799037,
   "Longitude": 39.1360086,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.703080454,
   "Longitude": 39.19606971,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8339019,
   "Longitude": 39.2571893,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.75184873,
   "Longitude": 39.14016041,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8113718,
   "Longitude": 39.1732215,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6365,
   "Longitude": 39.1624905,
   "CustType": "personal"
 },
 {
   "Latitude": -6.79251227,
   "Longitude": 39.20861976,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -7.363890405,
   "Longitude": 31.41714231,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.79238159,
   "Longitude": 39.2083168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7937497,
   "Longitude": 39.2417088,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7833378,
   "Longitude": 39.2649941,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7429021,
   "Longitude": 39.1477508,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8291923,
   "Longitude": 39.2668828,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6263645,
   "Longitude": 39.1700158,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8033113,
   "Longitude": 39.174541,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8083702,
   "Longitude": 39.262361,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6421777,
   "Longitude": 39.1759825,
   "CustType": "personal"
 },
 {
   "Latitude": -6.760005126,
   "Longitude": 39.20291441,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7817043,
   "Longitude": 39.2641784,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7290609,
   "Longitude": 39.2099599,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8040109,
   "Longitude": 39.2432377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8095947,
   "Longitude": 39.2207277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.690256195,
   "Longitude": 39.19625392,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7618249,
   "Longitude": 39.2326594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9071639,
   "Longitude": 39.2563676,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7401508,
   "Longitude": 39.1648859,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7527809,
   "Longitude": 39.1852186,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7125267,
   "Longitude": 39.2330883,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.752384838,
   "Longitude": 39.14107099,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.272966696,
   "Longitude": 35.00456385,
   "CustType": "personal"
 },
 {
   "Latitude": -6.689676266,
   "Longitude": 39.19224218,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7024115,
   "Longitude": 39.1434811,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.793434095,
   "Longitude": 39.08290938,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7332683,
   "Longitude": 39.1813733,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7195782,
   "Longitude": 39.2015408,
   "CustType": "personal"
 },
 {
   "Latitude": -6.782105712,
   "Longitude": 39.05130776,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8098682,
   "Longitude": 39.2536731,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8010597,
   "Longitude": 39.2524489,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8055176,
   "Longitude": 39.2737513,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7937497,
   "Longitude": 39.2417088,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.727430005,
   "Longitude": 39.21414304,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.644393,
   "Longitude": 39.1057233,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.718442844,
   "Longitude": 39.20822011,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7765781,
   "Longitude": 39.2696471,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8007618,
   "Longitude": 39.2115093,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.716547591,
   "Longitude": 39.18214479,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.667134592,
   "Longitude": 39.19416917,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7895204,
   "Longitude": 39.2277447,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7324072,
   "Longitude": 39.2077127,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803850087,
   "Longitude": 39.25224336,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7505745,
   "Longitude": 39.1654633,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6262152,
   "Longitude": 39.1305445,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7986365,
   "Longitude": 39.2616991,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.78836512,
   "Longitude": 39.12710371,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7828818,
   "Longitude": 39.2741347,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.765095372,
   "Longitude": 39.12930697,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.805044479,
   "Longitude": 39.2239286,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.801111,
   "Longitude": 39.1692806,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8312396,
   "Longitude": 39.2643707,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8312396,
   "Longitude": 39.2643707,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.791087184,
   "Longitude": 39.20752823,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7592469,
   "Longitude": 39.121056,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.770166257,
   "Longitude": 39.2313489,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7878834,
   "Longitude": 39.1912203,
   "CustType": "personal"
 },
 {
   "Latitude": -6.83375,
   "Longitude": 39.255795,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7924499,
   "Longitude": 39.2626516,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.738852908,
   "Longitude": 39.14474892,
   "CustType": "personal"
 },
 {
   "Latitude": -6.820036034,
   "Longitude": 39.27341536,
   "CustType": "personal"
 },
 {
   "Latitude": -6.79275435,
   "Longitude": 39.2086295,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.786598649,
   "Longitude": 39.15192868,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6677301,
   "Longitude": 39.1903686,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.723032962,
   "Longitude": 39.23074776,
   "CustType": "personal"
 },
 {
   "Latitude": -6.642715,
   "Longitude": 39.1853083,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.761789789,
   "Longitude": 39.24300665,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.782809768,
   "Longitude": 39.17669584,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7497442,
   "Longitude": 39.1249013,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7128061,
   "Longitude": 39.1800649,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7069554,
   "Longitude": 39.1287484,
   "CustType": "personal"
 },
 {
   "Latitude": -6.78227342,
   "Longitude": 39.11573529,
   "CustType": "personal"
 },
 {
   "Latitude": -6.806236621,
   "Longitude": 39.28221821,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7985652,
   "Longitude": 39.2336665,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803644947,
   "Longitude": 39.22547688,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7844671,
   "Longitude": 39.2574519,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7552102,
   "Longitude": 39.1358103,
   "CustType": "personal"
 },
 {
   "Latitude": -6.811842771,
   "Longitude": 39.2607831,
   "CustType": "personal"
 },
 {
   "Latitude": -6.800766,
   "Longitude": 39.2491758,
   "CustType": "personal"
 },
 {
   "Latitude": -6.805040258,
   "Longitude": 39.28212522,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7485976,
   "Longitude": 39.1669352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7265559,
   "Longitude": 39.2174266,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.804809152,
   "Longitude": 39.28140602,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6537103,
   "Longitude": 39.1802805,
   "CustType": "personal"
 },
 {
   "Latitude": -6.773243543,
   "Longitude": 39.10822677,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.794942464,
   "Longitude": 39.13642214,
   "CustType": "personal"
 },
 {
   "Latitude": -6.770370888,
   "Longitude": 39.26100612,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7624406,
   "Longitude": 39.2433632,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.80338869,
   "Longitude": 39.19101921,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7333937,
   "Longitude": 39.1769304,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7741262,
   "Longitude": 39.2320604,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.775927378,
   "Longitude": 39.25853024,
   "CustType": "personal"
 },
 {
   "Latitude": -6.697555845,
   "Longitude": 39.19758797,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6602538,
   "Longitude": 39.183914,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7137439,
   "Longitude": 39.212989,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8306483,
   "Longitude": 39.2600233,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7671365,
   "Longitude": 39.2238522,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7835353,
   "Longitude": 39.1400397,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6805237,
   "Longitude": 39.2031816,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.723065343,
   "Longitude": 39.23012545,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8294781,
   "Longitude": 37.6839409,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7818005,
   "Longitude": 39.2565967,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.791366913,
   "Longitude": 39.24994231,
   "CustType": "personal"
 },
 {
   "Latitude": -6.789103327,
   "Longitude": 39.203654,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6397831,
   "Longitude": 39.1793209,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.820365787,
   "Longitude": 39.26282915,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8264922,
   "Longitude": 39.2689456,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8264922,
   "Longitude": 39.2689456,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8103558,
   "Longitude": 39.2126048,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7885058,
   "Longitude": 39.2676334,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7024395,
   "Longitude": 39.2126471,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207724,
   "Longitude": 39.2774351,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.772347205,
   "Longitude": 39.22667921,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.801854,
   "Longitude": 39.1926905,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7937497,
   "Longitude": 39.2417088,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8139798,
   "Longitude": 39.2395925,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8264922,
   "Longitude": 39.2689456,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8264922,
   "Longitude": 39.2689456,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7427386,
   "Longitude": 39.2086483,
   "CustType": "personal"
 },
 {
   "Latitude": -6.747719911,
   "Longitude": 39.12595153,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803298232,
   "Longitude": 39.1982767,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7561503,
   "Longitude": 39.1320284,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7059754,
   "Longitude": 39.1373481,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8017611,
   "Longitude": 39.2466732,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7476946,
   "Longitude": 39.2772638,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7709715,
   "Longitude": 39.107349,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8100936,
   "Longitude": 39.2299059,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.631617,
   "Longitude": 39.188174,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.77533346,
   "Longitude": 39.24485857,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8127708,
   "Longitude": 39.2560111,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7898497,
   "Longitude": 39.2211792,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8260206,
   "Longitude": 39.2682682,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8260206,
   "Longitude": 39.2682682,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9047966,
   "Longitude": 39.2510121,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8106988,
   "Longitude": 39.2428659,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8264922,
   "Longitude": 39.2689456,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8264922,
   "Longitude": 39.2689456,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8196098,
   "Longitude": 39.1608628,
   "CustType": "personal"
 },
 {
   "Latitude": -6.778523366,
   "Longitude": 39.16200958,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8055176,
   "Longitude": 39.2737513,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8002137,
   "Longitude": 39.258805,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7359564,
   "Longitude": 39.1502557,
   "CustType": "personal"
 },
 {
   "Latitude": -6.821225501,
   "Longitude": 39.26390528,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.631617,
   "Longitude": 39.188174,
   "CustType": "personal"
 },
 {
   "Latitude": -7.127530278,
   "Longitude": 32.49380247,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6376734,
   "Longitude": 39.1784613,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803770028,
   "Longitude": 39.16652733,
   "CustType": "personal"
 },
 {
   "Latitude": -3.624726514,
   "Longitude": 30.58405116,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8200235,
   "Longitude": 39.2714385,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8106522,
   "Longitude": 39.2545063,
   "CustType": "personal"
 },
 {
   "Latitude": -6.740197763,
   "Longitude": 39.16168928,
   "CustType": "personal"
 },
 {
   "Latitude": -6.711407952,
   "Longitude": 39.22385216,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.5977607,
   "Longitude": 39.1139922,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8260206,
   "Longitude": 39.2682682,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8260206,
   "Longitude": 39.2682682,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.79932111,
   "Longitude": 39.17846201,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6274667,
   "Longitude": 39.1550598,
   "CustType": "personal"
 },
 {
   "Latitude": -7.250521414,
   "Longitude": 33.70155806,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8069282,
   "Longitude": 39.2777509,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7801332,
   "Longitude": 39.2241884,
   "CustType": "personal"
 },
 {
   "Latitude": -6.758832972,
   "Longitude": 39.18669878,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7938769,
   "Longitude": 39.2515937,
   "CustType": "personal"
 },
 {
   "Latitude": -6.083430173,
   "Longitude": 37.84414427,
   "CustType": "personal"
 },
 {
   "Latitude": -6.720163245,
   "Longitude": 39.22967166,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.80347179,
   "Longitude": 39.16653872,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.799343706,
   "Longitude": 39.26466782,
   "CustType": "personal"
 },
 {
   "Latitude": -6.796407316,
   "Longitude": 39.24076899,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8086941,
   "Longitude": 39.2815028,
   "CustType": "personal"
 },
 {
   "Latitude": -6.792514759,
   "Longitude": 39.20867085,
   "CustType": "personal"
 },
 {
   "Latitude": -6.756735515,
   "Longitude": 39.1974072,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9047966,
   "Longitude": 39.2510121,
   "CustType": "personal"
 },
 {
   "Latitude": -6.60424637,
   "Longitude": 39.14068222,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.76256,
   "Longitude": 39.2149305,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6795617,
   "Longitude": 39.205805,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7857747,
   "Longitude": 39.265006,
   "CustType": "personal"
 },
 {
   "Latitude": -6.814555536,
   "Longitude": 39.25932554,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810849697,
   "Longitude": 39.25998734,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8055176,
   "Longitude": 39.2737513,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6484109,
   "Longitude": 39.17416,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016117,
   "Longitude": 39.286395,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.827451,
   "Longitude": 39.2645551,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7845596,
   "Longitude": 39.249225,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.817964503,
   "Longitude": 39.27143393,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7003407,
   "Longitude": 39.1706598,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7092833,
   "Longitude": 39.1388699,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8161883,
   "Longitude": 39.2275259,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8319591,
   "Longitude": 39.2598082,
   "CustType": "personal"
 },
 {
   "Latitude": -6.758027327,
   "Longitude": 39.23439895,
   "CustType": "personal"
 },
 {
   "Latitude": -6.783403478,
   "Longitude": 39.24629249,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.795391961,
   "Longitude": 39.1577524,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7891895,
   "Longitude": 39.2676891,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7667974,
   "Longitude": 39.2284753,
   "CustType": "personal"
 },
 {
   "Latitude": -6.791885063,
   "Longitude": 39.27070124,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803770082,
   "Longitude": 39.16566432,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.772376612,
   "Longitude": 39.22786422,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.786238149,
   "Longitude": 39.22900566,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6666552,
   "Longitude": 39.1808289,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.80564,
   "Longitude": 39.2509967,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6564707,
   "Longitude": 39.1948867,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7267097,
   "Longitude": 39.20657354,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.768808103,
   "Longitude": 39.21850523,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8225703,
   "Longitude": 39.2792103,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.710165,
   "Longitude": 39.2144314,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7908342,
   "Longitude": 39.2204655,
   "CustType": "personal"
 },
 {
   "Latitude": -6.368722391,
   "Longitude": 34.88882169,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8001183,
   "Longitude": 39.2036834,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7873984,
   "Longitude": 39.2644783,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.789775,
   "Longitude": 39.2582017,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7937497,
   "Longitude": 39.2417088,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.757598486,
   "Longitude": 39.09387976,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.694055,
   "Longitude": 39.2114333,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6845866,
   "Longitude": 39.1254452,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8139798,
   "Longitude": 39.2395925,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.617567648,
   "Longitude": 39.12377403,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.74737609,
   "Longitude": 39.18523026,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7801744,
   "Longitude": 39.1941687,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8311375,
   "Longitude": 39.2642144,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8311375,
   "Longitude": 39.2642144,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7139261,
   "Longitude": 39.1822219,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.759811,
   "Longitude": 39.1009396,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851853,
   "Longitude": 39.1680134,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7979334,
   "Longitude": 39.257556,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.657003108,
   "Longitude": 39.19185611,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7827129,
   "Longitude": 39.1304641,
   "CustType": "personal"
 },
 {
   "Latitude": -3.624807304,
   "Longitude": 30.58602974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803770082,
   "Longitude": 39.16566432,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7765725,
   "Longitude": 39.2623275,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.754566035,
   "Longitude": 39.20562916,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7206356,
   "Longitude": 39.2282788,
   "CustType": "personal"
 },
 {
   "Latitude": -6.753348653,
   "Longitude": 39.20002281,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7165133,
   "Longitude": 39.1821967,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6959475,
   "Longitude": 39.2144421,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6631793,
   "Longitude": 39.1970414,
   "CustType": "personal"
 },
 {
   "Latitude": -6.806622993,
   "Longitude": 39.21946048,
   "CustType": "personal"
 },
 {
   "Latitude": -6.704701717,
   "Longitude": 39.14660588,
   "CustType": "personal"
 },
 {
   "Latitude": -6.905769757,
   "Longitude": 39.24679544,
   "CustType": "personal"
 },
 {
   "Latitude": -6.661596567,
   "Longitude": 39.19959062,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6558957,
   "Longitude": 39.0808887,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6420449,
   "Longitude": 39.1761226,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7726961,
   "Longitude": 39.0983602,
   "CustType": "personal"
 },
 {
   "Latitude": -6.802778,
   "Longitude": 39.2656813,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6420449,
   "Longitude": 39.1761226,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -4.868261124,
   "Longitude": 32.21914427,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7177835,
   "Longitude": 39.1755441,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "personal"
 },
 {
   "Latitude": -6.792884045,
   "Longitude": 39.2576941,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7776737,
   "Longitude": 39.2356229,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016837,
   "Longitude": 39.231319,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "personal"
 },
 {
   "Latitude": -6.802599582,
   "Longitude": 39.16646001,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.814503224,
   "Longitude": 39.17701608,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7826615,
   "Longitude": 39.1792751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8175599,
   "Longitude": 39.2764418,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.786500804,
   "Longitude": 39.1663456,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "personal"
 },
 {
   "Latitude": -5.14187112,
   "Longitude": 31.46119064,
   "CustType": "personal"
 },
 {
   "Latitude": -6.927880311,
   "Longitude": 39.13403504,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7998033,
   "Longitude": 39.167565,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8001765,
   "Longitude": 39.2113289,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7809778,
   "Longitude": 39.1869435,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8082386,
   "Longitude": 39.1783789,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7614601,
   "Longitude": 39.214604,
   "CustType": "personal"
 },
 {
   "Latitude": -6.824065,
   "Longitude": 39.2764983,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.893407013,
   "Longitude": 39.19191077,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8051603,
   "Longitude": 39.1790582,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819631949,
   "Longitude": 39.27320212,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7343701,
   "Longitude": 39.2152723,
   "CustType": "personal"
 },
 {
   "Latitude": -6.722247593,
   "Longitude": 39.22267323,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.830872594,
   "Longitude": 39.26055416,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6641969,
   "Longitude": 39.1856123,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8006987,
   "Longitude": 39.2586413,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8285714,
   "Longitude": 39.2555552,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.631617,
   "Longitude": 39.188174,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7708835,
   "Longitude": 39.1136445,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6248626,
   "Longitude": 39.1697327,
   "CustType": "personal"
 },
 {
   "Latitude": -6.776497414,
   "Longitude": 39.22689861,
   "CustType": "personal"
 },
 {
   "Latitude": -6.718208053,
   "Longitude": 39.1344349,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7043533,
   "Longitude": 39.1970417,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7944329,
   "Longitude": 39.2615377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.790831499,
   "Longitude": 39.25035775,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7917114,
   "Longitude": 39.1992797,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.631617,
   "Longitude": 39.188174,
   "CustType": "personal"
 },
 {
   "Latitude": -6.631617,
   "Longitude": 39.188174,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7546569,
   "Longitude": 39.1637428,
   "CustType": "personal"
 },
 {
   "Latitude": -6.843345385,
   "Longitude": 39.18574333,
   "CustType": "personal"
 },
 {
   "Latitude": -6.726684763,
   "Longitude": 39.21525698,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7979875,
   "Longitude": 39.1602912,
   "CustType": "personal"
 },
 {
   "Latitude": -4.614433032,
   "Longitude": 32.53785079,
   "CustType": "personal"
 },
 {
   "Latitude": -6.767274296,
   "Longitude": 39.19555959,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7551622,
   "Longitude": 39.1199797,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7924788,
   "Longitude": 39.2394159,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7957392,
   "Longitude": 39.1778594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.794480332,
   "Longitude": 39.21518326,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7451902,
   "Longitude": 39.04709,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.789483821,
   "Longitude": 39.2085743,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.723748759,
   "Longitude": 39.23011131,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9047966,
   "Longitude": 39.2510121,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8134034,
   "Longitude": 39.2587241,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8046709,
   "Longitude": 39.2466157,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.816676516,
   "Longitude": 39.27450984,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.810713535,
   "Longitude": 39.25960323,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7926117,
   "Longitude": 39.2606067,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7795438,
   "Longitude": 39.1026045,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8264117,
   "Longitude": 39.2582102,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7070867,
   "Longitude": 39.1418383,
   "CustType": "personal"
 },
 {
   "Latitude": -6.491559905,
   "Longitude": 36.85460182,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.734308947,
   "Longitude": 39.19964661,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7600106,
   "Longitude": 39.1208364,
   "CustType": "personal"
 },
 {
   "Latitude": -6.765331,
   "Longitude": 39.256917,
   "CustType": "personal"
 },
 {
   "Latitude": -6.78220227,
   "Longitude": 39.26140346,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7417821,
   "Longitude": 39.1002636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.774057165,
   "Longitude": 39.23359931,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8258978,
   "Longitude": 39.267639,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8258978,
   "Longitude": 39.267639,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6609535,
   "Longitude": 39.1959535,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8209572,
   "Longitude": 39.2718042,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7267216,
   "Longitude": 39.215222,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7994902,
   "Longitude": 39.2577356,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.776019706,
   "Longitude": 39.1103036,
   "CustType": "personal"
 },
 {
   "Latitude": -6.668841497,
   "Longitude": 39.163416,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8355601,
   "Longitude": 39.1159113,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819919159,
   "Longitude": 39.27058793,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.802575349,
   "Longitude": 39.11491507,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8045046,
   "Longitude": 39.257912,
   "CustType": "personal"
 },
 {
   "Latitude": -6.704993711,
   "Longitude": 39.11195576,
   "CustType": "personal"
 },
 {
   "Latitude": -6.738241143,
   "Longitude": 39.2148271,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8102022,
   "Longitude": 39.2285059,
   "CustType": "personal"
 },
 {
   "Latitude": -6.753141747,
   "Longitude": 39.16156449,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8052892,
   "Longitude": 39.2557239,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.774149321,
   "Longitude": 39.23321761,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7748142,
   "Longitude": 39.0496029,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.757550066,
   "Longitude": 39.19530955,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7525048,
   "Longitude": 39.1423709,
   "CustType": "personal"
 },
 {
   "Latitude": -4.260363432,
   "Longitude": 31.54904262,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.757964,
   "Longitude": 39.1726687,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7584933,
   "Longitude": 39.1758717,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8139798,
   "Longitude": 39.2395925,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.75582477,
   "Longitude": 39.07699396,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6576129,
   "Longitude": 39.1871636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.748974,
   "Longitude": 39.2388998,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6615552,
   "Longitude": 39.1837789,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8075097,
   "Longitude": 39.2598157,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6301501,
   "Longitude": 39.1557114,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369024943,
   "Longitude": 34.88881767,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8266621,
   "Longitude": 39.2609775,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.656985,
   "Longitude": 39.1879436,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6256848,
   "Longitude": 39.1268389,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.793878409,
   "Longitude": 39.26927269,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6907671,
   "Longitude": 39.1340158,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7120546,
   "Longitude": 39.14505,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.731937863,
   "Longitude": 39.19099495,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810769236,
   "Longitude": 39.25962746,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8037771,
   "Longitude": 39.1689071,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7130763,
   "Longitude": 39.2021579,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8139798,
   "Longitude": 39.2395925,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8293297,
   "Longitude": 39.2628475,
   "CustType": "personal"
 },
 {
   "Latitude": -6.801026777,
   "Longitude": 39.2267067,
   "CustType": "personal"
 },
 {
   "Latitude": -6.801031964,
   "Longitude": 39.22660398,
   "CustType": "personal"
 },
 {
   "Latitude": -6.76487,
   "Longitude": 39.081249,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7879449,
   "Longitude": 39.2517193,
   "CustType": "personal"
 },
 {
   "Latitude": -6.789687895,
   "Longitude": 39.25382248,
   "CustType": "personal"
 },
 {
   "Latitude": -6.779381,
   "Longitude": 39.1158252,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.814870672,
   "Longitude": 39.2395699,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8081933,
   "Longitude": 39.2632167,
   "CustType": "personal"
 },
 {
   "Latitude": -6.797555,
   "Longitude": 39.250585,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7349317,
   "Longitude": 39.1059617,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.828258338,
   "Longitude": 39.26513086,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7611529,
   "Longitude": 39.122418,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7092248,
   "Longitude": 39.1347746,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810769236,
   "Longitude": 39.25962746,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7541867,
   "Longitude": 39.2061042,
   "CustType": "personal"
 },
 {
   "Latitude": -6.814354,
   "Longitude": 39.2212464,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7351797,
   "Longitude": 39.1058667,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7722991,
   "Longitude": 39.2729399,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7379308,
   "Longitude": 39.2140661,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7979465,
   "Longitude": 39.1598562,
   "CustType": "personal"
 },
 {
   "Latitude": -6.800796667,
   "Longitude": 39.24058107,
   "CustType": "personal"
 },
 {
   "Latitude": -6.373176346,
   "Longitude": 34.89882168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8010182,
   "Longitude": 39.2282304,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8010182,
   "Longitude": 39.2282304,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7937497,
   "Longitude": 39.2417088,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6412595,
   "Longitude": 39.1856363,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7720754,
   "Longitude": 39.2294584,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6617584,
   "Longitude": 39.1949256,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7212315,
   "Longitude": 39.2229506,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6948483,
   "Longitude": 39.1865425,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6914309,
   "Longitude": 39.1118803,
   "CustType": "personal"
 },
 {
   "Latitude": -6.771745255,
   "Longitude": 39.18833435,
   "CustType": "personal"
 },
 {
   "Latitude": -6.767958599,
   "Longitude": 39.23015798,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9047966,
   "Longitude": 39.2510121,
   "CustType": "personal"
 },
 {
   "Latitude": -6.828186,
   "Longitude": 39.2559084,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8058063,
   "Longitude": 39.2611849,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7879394,
   "Longitude": 39.1879338,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.783328364,
   "Longitude": 39.22374371,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7937497,
   "Longitude": 39.2417088,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.702457405,
   "Longitude": 39.11471844,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8003556,
   "Longitude": 39.2489993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.668119,
   "Longitude": 39.1909242,
   "CustType": "personal"
 },
 {
   "Latitude": -6.631617,
   "Longitude": 39.188174,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7839117,
   "Longitude": 39.1614,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7816217,
   "Longitude": 39.1625807,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.801739782,
   "Longitude": 39.2522884,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.786495435,
   "Longitude": 39.23076331,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818367518,
   "Longitude": 39.24013183,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.908505,
   "Longitude": 39.2603233,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7988026,
   "Longitude": 39.2098828,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7986649,
   "Longitude": 39.1827864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7704491,
   "Longitude": 39.2648251,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8035609,
   "Longitude": 39.2588781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6458484,
   "Longitude": 39.1746222,
   "CustType": "personal"
 },
 {
   "Latitude": -6.78679378,
   "Longitude": 39.26865578,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7944198,
   "Longitude": 39.2325397,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7235467,
   "Longitude": 39.20722,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.729408413,
   "Longitude": 39.19764091,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8044308,
   "Longitude": 39.2255994,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.811260779,
   "Longitude": 39.2336481,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7943767,
   "Longitude": 39.2626083,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.747325694,
   "Longitude": 39.28157866,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7335391,
   "Longitude": 39.1583642,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7562701,
   "Longitude": 39.2758445,
   "CustType": "personal"
 },
 {
   "Latitude": -6.617195236,
   "Longitude": 39.12396669,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.808545391,
   "Longitude": 39.25552636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369154464,
   "Longitude": 34.88881898,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.798670961,
   "Longitude": 39.23374401,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8018976,
   "Longitude": 39.2582824,
   "CustType": "personal"
 },
 {
   "Latitude": -6.805993152,
   "Longitude": 39.2594239,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8111472,
   "Longitude": 39.2516812,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7981424,
   "Longitude": 39.2102615,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6467213,
   "Longitude": 39.1712915,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7909019,
   "Longitude": 39.2571896,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7408101,
   "Longitude": 39.1719981,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6907346,
   "Longitude": 39.2016058,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7133224,
   "Longitude": 39.1973002,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7785574,
   "Longitude": 39.1006301,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818423177,
   "Longitude": 39.16670149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9183545,
   "Longitude": 39.2833639,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.820905,
   "Longitude": 39.27468,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.806987404,
   "Longitude": 39.26025207,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.927491899,
   "Longitude": 39.13355827,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7547555,
   "Longitude": 39.241383,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8176343,
   "Longitude": 39.2769243,
   "CustType": "personal"
 },
 {
   "Latitude": -6.726956084,
   "Longitude": 39.13190923,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818180051,
   "Longitude": 39.27737387,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.698983696,
   "Longitude": 39.18810368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.368524733,
   "Longitude": 34.88922539,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.792693062,
   "Longitude": 39.20843339,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803513685,
   "Longitude": 39.16562074,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8110697,
   "Longitude": 39.2056098,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7862022,
   "Longitude": 39.229244,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.71749609,
   "Longitude": 39.23025861,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7236741,
   "Longitude": 39.1783664,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8041171,
   "Longitude": 39.2573478,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8279755,
   "Longitude": 39.262455,
   "CustType": "personal"
 },
 {
   "Latitude": -6.779272239,
   "Longitude": 39.22905028,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7010816,
   "Longitude": 39.1525691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7797792,
   "Longitude": 39.248701,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.68969,
   "Longitude": 39.21256,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7208613,
   "Longitude": 39.2160507,
   "CustType": "personal"
 },
 {
   "Latitude": -6.793396,
   "Longitude": 39.13624,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7220866,
   "Longitude": 39.1777577,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7421178,
   "Longitude": 39.1686088,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8071463,
   "Longitude": 39.2249105,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.796542784,
   "Longitude": 39.26364888,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7371707,
   "Longitude": 39.1832021,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -7.154302008,
   "Longitude": 32.35708357,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.822202558,
   "Longitude": 39.27562207,
   "CustType": "personal"
 },
 {
   "Latitude": -6.756367039,
   "Longitude": 39.18694192,
   "CustType": "personal"
 },
 {
   "Latitude": -6.726570476,
   "Longitude": 39.23536075,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7933369,
   "Longitude": 39.2266716,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6156802,
   "Longitude": 39.1221588,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7936092,
   "Longitude": 39.1913693,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8170177,
   "Longitude": 39.2502775,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7882482,
   "Longitude": 39.2264803,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7007433,
   "Longitude": 39.1776433,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7697197,
   "Longitude": 39.1963745,
   "CustType": "personal"
 },
 {
   "Latitude": -6.762455,
   "Longitude": 39.2148301,
   "CustType": "personal"
 },
 {
   "Latitude": -6.807289428,
   "Longitude": 39.17031423,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7831829,
   "Longitude": 39.1624447,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8150649,
   "Longitude": 39.1675134,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.806212,
   "Longitude": 39.2020955,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7882902,
   "Longitude": 39.2652857,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.787512901,
   "Longitude": 39.26248133,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.827773198,
   "Longitude": 39.25647852,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.623815822,
   "Longitude": 39.09531967,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819354673,
   "Longitude": 39.27364303,
   "CustType": "personal"
 },
 {
   "Latitude": -10.9431018,
   "Longitude": 35.0098472,
   "CustType": "personal"
 },
 {
   "Latitude": -10.9431018,
   "Longitude": 35.0098472,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8233242,
   "Longitude": 39.2749574,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8066836,
   "Longitude": 39.2612105,
   "CustType": "personal"
 },
 {
   "Latitude": -4.658234547,
   "Longitude": 34.185697,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6722065,
   "Longitude": 39.1559376,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7559316,
   "Longitude": 39.103587,
   "CustType": "personal"
 },
 {
   "Latitude": -6.919204161,
   "Longitude": 39.27101305,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8072731,
   "Longitude": 39.2216184,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6415491,
   "Longitude": 39.185277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.66745,
   "Longitude": 39.1761833,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6892119,
   "Longitude": 39.1891553,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.722308218,
   "Longitude": 39.2054522,
   "CustType": "corporate"
 },
 {
   "Latitude": -3.624290946,
   "Longitude": 30.58665814,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.809125989,
   "Longitude": 39.22171444,
   "CustType": "personal"
 },
 {
   "Latitude": -6.790995812,
   "Longitude": 39.2288406,
   "CustType": "personal"
 },
 {
   "Latitude": -6.779043182,
   "Longitude": 39.22666311,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.444789617,
   "Longitude": 34.99878829,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.444789617,
   "Longitude": 34.99878829,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6888355,
   "Longitude": 39.132147,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8170808,
   "Longitude": 39.2454172,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7173094,
   "Longitude": 39.1269703,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8013238,
   "Longitude": 39.2102479,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -4.6852803,
   "Longitude": 33.04325617,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8139798,
   "Longitude": 39.2395925,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.732477,
   "Longitude": 39.0663329,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803750492,
   "Longitude": 39.25217481,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.821286,
   "Longitude": 39.277087,
   "CustType": "personal"
 },
 {
   "Latitude": -6.813975816,
   "Longitude": 39.23959136,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7953806,
   "Longitude": 39.1867699,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8097684,
   "Longitude": 39.2954672,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8125473,
   "Longitude": 39.275333,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8125473,
   "Longitude": 39.275333,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -4.96100895,
   "Longitude": 32.43887083,
   "CustType": "personal"
 },
 {
   "Latitude": -6.792514759,
   "Longitude": 39.20867085,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7743955,
   "Longitude": 39.2355365,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.749457051,
   "Longitude": 39.17790785,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7270818,
   "Longitude": 39.2072924,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8227318,
   "Longitude": 39.2797371,
   "CustType": "personal"
 },
 {
   "Latitude": -6.807758722,
   "Longitude": 39.08140386,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.78477863,
   "Longitude": 39.20518279,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7330992,
   "Longitude": 39.2253341,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6474189,
   "Longitude": 39.1865402,
   "CustType": "personal"
 },
 {
   "Latitude": -6.712273221,
   "Longitude": 39.2174391,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8103531,
   "Longitude": 39.2202774,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8018617,
   "Longitude": 39.2272448,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7880477,
   "Longitude": 39.2726491,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8008611,
   "Longitude": 39.2671443,
   "CustType": "personal"
 },
 {
   "Latitude": -6.741481651,
   "Longitude": 39.08811897,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.750264315,
   "Longitude": 39.16191427,
   "CustType": "personal"
 },
 {
   "Latitude": -6.790390572,
   "Longitude": 39.25046092,
   "CustType": "personal"
 },
 {
   "Latitude": -6.774309217,
   "Longitude": 39.22438318,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.796793906,
   "Longitude": 39.20224181,
   "CustType": "personal"
 },
 {
   "Latitude": -6.804981679,
   "Longitude": 39.20881781,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.728700302,
   "Longitude": 39.22622024,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.80677,
   "Longitude": 39.2257707,
   "CustType": "personal"
 },
 {
   "Latitude": -6.778549145,
   "Longitude": 39.23326853,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8265218,
   "Longitude": 39.2646454,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.752914973,
   "Longitude": 39.19842738,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8139798,
   "Longitude": 39.2395925,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8294781,
   "Longitude": 37.6839409,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810410546,
   "Longitude": 39.25934266,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.791694691,
   "Longitude": 39.22580682,
   "CustType": "personal"
 },
 {
   "Latitude": -6.631617,
   "Longitude": 39.188174,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.723270846,
   "Longitude": 39.23015979,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7937497,
   "Longitude": 39.2417088,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.781941606,
   "Longitude": 39.27287082,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.824996274,
   "Longitude": 39.28103954,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8051043,
   "Longitude": 39.2760528,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6860882,
   "Longitude": 39.1836749,
   "CustType": "personal"
 },
 {
   "Latitude": -6.778325,
   "Longitude": 39.2368622,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6724916,
   "Longitude": 39.1713983,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6916501,
   "Longitude": 39.149313,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6232154,
   "Longitude": 39.1664262,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6281155,
   "Longitude": 39.1737625,
   "CustType": "personal"
 },
 {
   "Latitude": -6.826374108,
   "Longitude": 39.26129794,
   "CustType": "personal"
 },
 {
   "Latitude": -6.708545,
   "Longitude": 39.2047684,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.757552677,
   "Longitude": 39.19455585,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8117663,
   "Longitude": 39.2071793,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6858681,
   "Longitude": 39.1823534,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7117601,
   "Longitude": 39.1908774,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7023478,
   "Longitude": 39.178032,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.747496023,
   "Longitude": 39.28208229,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.778217847,
   "Longitude": 39.22801634,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7863474,
   "Longitude": 39.2519145,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016495,
   "Longitude": 39.2573418,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7772322,
   "Longitude": 39.2713542,
   "CustType": "personal"
 },
 {
   "Latitude": -6.766513897,
   "Longitude": 39.23245559,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6975993,
   "Longitude": 39.1882089,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819284852,
   "Longitude": 39.27338554,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.612838203,
   "Longitude": 39.11971375,
   "CustType": "personal"
 },
 {
   "Latitude": -6.705324649,
   "Longitude": 39.19681207,
   "CustType": "personal"
 },
 {
   "Latitude": -6.732973381,
   "Longitude": 39.14739153,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.793446942,
   "Longitude": 39.16576624,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.647480694,
   "Longitude": 39.16969804,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8043712,
   "Longitude": 39.2574822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7962668,
   "Longitude": 39.2464257,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8072985,
   "Longitude": 39.2078389,
   "CustType": "personal"
 },
 {
   "Latitude": -6.725128,
   "Longitude": 39.2141043,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.751888879,
   "Longitude": 39.19693941,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.784151606,
   "Longitude": 39.22703503,
   "CustType": "personal"
 },
 {
   "Latitude": -6.806686,
   "Longitude": 39.2253931,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369076188,
   "Longitude": 34.88842252,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6280368,
   "Longitude": 39.1550167,
   "CustType": "personal"
 },
 {
   "Latitude": -6.802505891,
   "Longitude": 39.22770077,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.776633,
   "Longitude": 39.0610974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.774812262,
   "Longitude": 39.24326465,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.785221,
   "Longitude": 39.1800375,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6474361,
   "Longitude": 39.1821943,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7237447,
   "Longitude": 39.21012,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803812695,
   "Longitude": 39.16619003,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8028961,
   "Longitude": 39.148236,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7930232,
   "Longitude": 39.2007644,
   "CustType": "personal"
 },
 {
   "Latitude": -6.788089584,
   "Longitude": 39.20576458,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.749303807,
   "Longitude": 39.16445653,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6852581,
   "Longitude": 39.1894723,
   "CustType": "personal"
 },
 {
   "Latitude": -6.726753489,
   "Longitude": 39.20730293,
   "CustType": "personal"
 },
 {
   "Latitude": -6.704144,
   "Longitude": 39.197223,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6855251,
   "Longitude": 39.1834538,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6860345,
   "Longitude": 39.1841641,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8294781,
   "Longitude": 37.6839409,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7844448,
   "Longitude": 39.1982245,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7238131,
   "Longitude": 39.2199626,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.791584147,
   "Longitude": 39.27846104,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.819043105,
   "Longitude": 39.27337646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7194471,
   "Longitude": 39.2209569,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7478974,
   "Longitude": 39.1963535,
   "CustType": "personal"
 },
 {
   "Latitude": -6.791228626,
   "Longitude": 39.25907415,
   "CustType": "corporate"
 },
 {
   "Latitude": -8.9159953,
   "Longitude": 33.5665566,
   "CustType": "personal"
 },
 {
   "Latitude": -8.9159953,
   "Longitude": 33.5665566,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6690976,
   "Longitude": 39.2086414,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7910086,
   "Longitude": 39.1929687,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7814341,
   "Longitude": 39.2023801,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7999216,
   "Longitude": 39.2355206,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6731886,
   "Longitude": 39.2078631,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7956414,
   "Longitude": 39.1920397,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -3.626359744,
   "Longitude": 30.58672229,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7486498,
   "Longitude": 39.1638787,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.5799925,
   "Longitude": 39.1363931,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6785626,
   "Longitude": 39.1352047,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6432076,
   "Longitude": 39.1920483,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6443485,
   "Longitude": 39.087762,
   "CustType": "personal"
 },
 {
   "Latitude": -6.740572827,
   "Longitude": 39.14842524,
   "CustType": "personal"
 },
 {
   "Latitude": -6.723099986,
   "Longitude": 39.22987646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.778649251,
   "Longitude": 39.19252283,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7924339,
   "Longitude": 39.2433747,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7996126,
   "Longitude": 39.2144824,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7162615,
   "Longitude": 39.2256301,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7741487,
   "Longitude": 39.080171,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6583962,
   "Longitude": 39.2055528,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369295839,
   "Longitude": 34.88949792,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7688205,
   "Longitude": 39.2306198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.799210456,
   "Longitude": 39.21319306,
   "CustType": "personal"
 },
 {
   "Latitude": -6.66561047,
   "Longitude": 39.17754876,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7933191,
   "Longitude": 39.08901215,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7854913,
   "Longitude": 39.2686429,
   "CustType": "personal"
 },
 {
   "Latitude": -5.308978373,
   "Longitude": 31.61503351,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7870049,
   "Longitude": 39.2796736,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7845752,
   "Longitude": 39.1124162,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7771202,
   "Longitude": 39.2400696,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7102088,
   "Longitude": 39.2260979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7758348,
   "Longitude": 39.2250389,
   "CustType": "personal"
 },
 {
   "Latitude": -6.780763273,
   "Longitude": 39.19556423,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.794257896,
   "Longitude": 39.14358381,
   "CustType": "personal"
 },
 {
   "Latitude": -6.787080779,
   "Longitude": 39.26162769,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.740684191,
   "Longitude": 39.14905119,
   "CustType": "personal"
 },
 {
   "Latitude": -6.823360218,
   "Longitude": 39.07300281,
   "CustType": "personal"
 },
 {
   "Latitude": -6.644323884,
   "Longitude": 39.16764651,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7949293,
   "Longitude": 39.2500324,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7060638,
   "Longitude": 39.2182261,
   "CustType": "personal"
 },
 {
   "Latitude": -6.728595203,
   "Longitude": 39.2233456,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.741207293,
   "Longitude": 39.08794999,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8132467,
   "Longitude": 39.0900479,
   "CustType": "personal"
 },
 {
   "Latitude": -6.72887317,
   "Longitude": 39.16376718,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7074971,
   "Longitude": 39.1861829,
   "CustType": "personal"
 },
 {
   "Latitude": -6.817226137,
   "Longitude": 39.25726006,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.730543461,
   "Longitude": 39.16085082,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7842043,
   "Longitude": 39.2357643,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7886358,
   "Longitude": 39.2616771,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8086293,
   "Longitude": 39.2015571,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.741795963,
   "Longitude": 39.17857647,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.752379105,
   "Longitude": 39.16522834,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7781455,
   "Longitude": 39.2463083,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.72336062,
   "Longitude": 39.22961669,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7892892,
   "Longitude": 39.1872586,
   "CustType": "personal"
 },
 {
   "Latitude": -6.792162374,
   "Longitude": 39.20295045,
   "CustType": "personal"
 },
 {
   "Latitude": -6.811605,
   "Longitude": 39.158895,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6231661,
   "Longitude": 39.1669299,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6346006,
   "Longitude": 39.0904333,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7817376,
   "Longitude": 39.227566,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7919517,
   "Longitude": 39.1803083,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.741424325,
   "Longitude": 39.08891913,
   "CustType": "personal"
 },
 {
   "Latitude": -6.808093689,
   "Longitude": 39.08235118,
   "CustType": "personal"
 },
 {
   "Latitude": -6.723183015,
   "Longitude": 39.22985322,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7666211,
   "Longitude": 39.1924348,
   "CustType": "personal"
 },
 {
   "Latitude": -6.781376365,
   "Longitude": 39.25825953,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7992913,
   "Longitude": 39.2473674,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7721964,
   "Longitude": 39.2296406,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9183545,
   "Longitude": 39.2833639,
   "CustType": "personal"
 },
 {
   "Latitude": -6.750141269,
   "Longitude": 39.17664494,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7774231,
   "Longitude": 39.2404848,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7030082,
   "Longitude": 39.1355948,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7505745,
   "Longitude": 39.1654633,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.778699596,
   "Longitude": 39.265818,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7935144,
   "Longitude": 39.200945,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7483133,
   "Longitude": 39.16442,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6956391,
   "Longitude": 39.1664584,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8135826,
   "Longitude": 39.2739233,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.758547711,
   "Longitude": 39.17452445,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": -6.798051618,
   "Longitude": 39.2359968,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7783233,
   "Longitude": 39.1454633,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8064692,
   "Longitude": 39.2601919,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7831782,
   "Longitude": 39.1956217,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7937497,
   "Longitude": 39.2417088,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8229385,
   "Longitude": 39.2742648,
   "CustType": "personal"
 },
 {
   "Latitude": -6.617804246,
   "Longitude": 39.12346824,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6752097,
   "Longitude": 39.2031446,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6270214,
   "Longitude": 39.0973402,
   "CustType": "personal"
 },
 {
   "Latitude": -6.740885818,
   "Longitude": 39.14942705,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7382912,
   "Longitude": 39.2140196,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7918333,
   "Longitude": 39.090355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8086925,
   "Longitude": 39.2219338,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.782201402,
   "Longitude": 39.11898625,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.5950374,
   "Longitude": 39.1596759,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803336777,
   "Longitude": 39.16909218,
   "CustType": "personal"
 },
 {
   "Latitude": -6.757201299,
   "Longitude": 39.23688543,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8043519,
   "Longitude": 39.225688,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7178274,
   "Longitude": 39.1427852,
   "CustType": "personal"
 },
 {
   "Latitude": -6.641267025,
   "Longitude": 39.35460379,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8259238,
   "Longitude": 39.2646471,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9884667,
   "Longitude": 39.5139704,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8040389,
   "Longitude": 39.2583665,
   "CustType": "personal"
 },
 {
   "Latitude": -6.824851,
   "Longitude": 39.260886,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8056992,
   "Longitude": 39.2619224,
   "CustType": "personal"
 },
 {
   "Latitude": -6.368646607,
   "Longitude": 34.8880137,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7518374,
   "Longitude": 39.1724188,
   "CustType": "personal"
 },
 {
   "Latitude": -6.631617,
   "Longitude": 39.188174,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.64440735,
   "Longitude": 39.17961085,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971182,
   "Longitude": 39.0947164,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.786478,
   "Longitude": 39.1925383,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7783,
   "Longitude": 39.24494,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8055176,
   "Longitude": 39.2737513,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7981172,
   "Longitude": 39.2576197,
   "CustType": "personal"
 },
 {
   "Latitude": -6.631614437,
   "Longitude": 39.18817341,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8294781,
   "Longitude": 37.6839409,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6755683,
   "Longitude": 39.1614883,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7748142,
   "Longitude": 39.0496029,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7476946,
   "Longitude": 39.2772638,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.67449182,
   "Longitude": 39.18244384,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7558771,
   "Longitude": 39.1922784,
   "CustType": "personal"
 },
 {
   "Latitude": -6.703643322,
   "Longitude": 39.2114324,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8196098,
   "Longitude": 39.1608628,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.749241574,
   "Longitude": 39.16442254,
   "CustType": "personal"
 },
 {
   "Latitude": -6.775175365,
   "Longitude": 39.10152204,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7777415,
   "Longitude": 39.2069439,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9148619,
   "Longitude": 39.2779889,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8136019,
   "Longitude": 39.2282974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7038366,
   "Longitude": 39.1999663,
   "CustType": "personal"
 },
 {
   "Latitude": -6.725689852,
   "Longitude": 39.21225811,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.761756124,
   "Longitude": 39.24219767,
   "CustType": "personal"
 },
 {
   "Latitude": -6.712958138,
   "Longitude": 39.2334237,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8062474,
   "Longitude": 39.1075203,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7444109,
   "Longitude": 39.2769068,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8198059,
   "Longitude": 39.2775289,
   "CustType": "personal"
 },
 {
   "Latitude": -6.768049808,
   "Longitude": 39.23536031,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.781884,
   "Longitude": 39.2618011,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9183545,
   "Longitude": 39.2833639,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9183545,
   "Longitude": 39.2833639,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.707877676,
   "Longitude": 39.20515034,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7105587,
   "Longitude": 39.2137546,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7923067,
   "Longitude": 39.2635475,
   "CustType": "personal"
 },
 {
   "Latitude": -6.707763821,
   "Longitude": 39.20504987,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.801680354,
   "Longitude": 39.2463937,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7922733,
   "Longitude": 39.2602,
   "CustType": "personal"
 },
 {
   "Latitude": -6.707935679,
   "Longitude": 39.20522346,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6812448,
   "Longitude": 39.1531346,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.81211,
   "Longitude": 39.26311,
   "CustType": "personal"
 },
 {
   "Latitude": -6.793484956,
   "Longitude": 39.27266519,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8185666,
   "Longitude": 39.1691723,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8065379,
   "Longitude": 39.2607667,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7279258,
   "Longitude": 39.1636283,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.779173957,
   "Longitude": 39.24004744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7743208,
   "Longitude": 39.1089184,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8229385,
   "Longitude": 39.2742648,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7938365,
   "Longitude": 39.2601528,
   "CustType": "personal"
 },
 {
   "Latitude": -6.822273,
   "Longitude": 39.2740674,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.661274168,
   "Longitude": 39.19998073,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6892284,
   "Longitude": 39.2072621,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.747423,
   "Longitude": 39.1655404,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7803599,
   "Longitude": 39.2426513,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8041812,
   "Longitude": 39.2469785,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -5.154344504,
   "Longitude": 31.95547239,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7592469,
   "Longitude": 39.121056,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.746385747,
   "Longitude": 39.20176629,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6988667,
   "Longitude": 39.2091667,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7883754,
   "Longitude": 39.2265406,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -4.921137105,
   "Longitude": 32.68057005,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7515728,
   "Longitude": 39.1621034,
   "CustType": "personal"
 },
 {
   "Latitude": -6.5980962,
   "Longitude": 39.1171966,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6211046,
   "Longitude": 39.0930493,
   "CustType": "personal"
 },
 {
   "Latitude": -6.727193546,
   "Longitude": 39.20709908,
   "CustType": "personal"
 },
 {
   "Latitude": -6.680707732,
   "Longitude": 39.20090937,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.658826602,
   "Longitude": 39.18984981,
   "CustType": "personal"
 },
 {
   "Latitude": -6.706870831,
   "Longitude": 39.26499577,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6379007,
   "Longitude": 39.1765316,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.80560777,
   "Longitude": 39.22438323,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.757124339,
   "Longitude": 39.20362175,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9047966,
   "Longitude": 39.2510121,
   "CustType": "personal"
 },
 {
   "Latitude": -6.706408956,
   "Longitude": 39.22172411,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.799851506,
   "Longitude": 39.1652399,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8139798,
   "Longitude": 39.2395925,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7854382,
   "Longitude": 39.2471044,
   "CustType": "personal"
 },
 {
   "Latitude": -6.255988046,
   "Longitude": 32.61936019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8105214,
   "Longitude": 39.2443162,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8202821,
   "Longitude": 39.2465401,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8182398,
   "Longitude": 39.2740517,
   "CustType": "personal"
 },
 {
   "Latitude": -6.714793076,
   "Longitude": 39.1986964,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7148231,
   "Longitude": 39.1639697,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7705476,
   "Longitude": 39.2659525,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.668719344,
   "Longitude": 39.16761095,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8078647,
   "Longitude": 39.1320838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.791727028,
   "Longitude": 39.21898745,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.811484026,
   "Longitude": 39.22635734,
   "CustType": "personal"
 },
 {
   "Latitude": -6.817050182,
   "Longitude": 39.27296391,
   "CustType": "personal"
 },
 {
   "Latitude": -6.741156683,
   "Longitude": 39.16226864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7814259,
   "Longitude": 39.2488429,
   "CustType": "personal"
 },
 {
   "Latitude": -6.792362256,
   "Longitude": 39.2318058,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7689433,
   "Longitude": 39.2698232,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6698665,
   "Longitude": 39.0679122,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8264922,
   "Longitude": 39.2689456,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8264922,
   "Longitude": 39.2689456,
   "CustType": "personal"
 },
 {
   "Latitude": -6.782569913,
   "Longitude": 39.25065995,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.794498975,
   "Longitude": 39.21958476,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7586706,
   "Longitude": 39.2375252,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.788514342,
   "Longitude": 39.20970619,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.806212,
   "Longitude": 39.2020955,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.631617,
   "Longitude": 39.188174,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8240936,
   "Longitude": 39.2753976,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6194942,
   "Longitude": 39.104786,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803303131,
   "Longitude": 39.2066126,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.651242146,
   "Longitude": 39.20248355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7456724,
   "Longitude": 39.1270825,
   "CustType": "personal"
 },
 {
   "Latitude": -6.79677821,
   "Longitude": 39.2337133,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.715949759,
   "Longitude": 39.15981442,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6911958,
   "Longitude": 39.1887135,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6201622,
   "Longitude": 39.1407541,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6890644,
   "Longitude": 39.1899121,
   "CustType": "personal"
 },
 {
   "Latitude": -6.670795586,
   "Longitude": 39.16387394,
   "CustType": "personal"
 },
 {
   "Latitude": -6.808752027,
   "Longitude": 39.227235,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7845252,
   "Longitude": 39.2468418,
   "CustType": "personal"
 },
 {
   "Latitude": -6.80285983,
   "Longitude": 39.21391015,
   "CustType": "personal"
 },
 {
   "Latitude": -6.68288509,
   "Longitude": 39.1701898,
   "CustType": "personal"
 },
 {
   "Latitude": -6.792356064,
   "Longitude": 39.20854749,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8034671,
   "Longitude": 39.2510541,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9084155,
   "Longitude": 39.1203924,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7435133,
   "Longitude": 39.16333,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7062672,
   "Longitude": 39.1777111,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.77987941,
   "Longitude": 39.25945537,
   "CustType": "personal"
 },
 {
   "Latitude": -6.792561847,
   "Longitude": 39.20875573,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8037213,
   "Longitude": 39.2586089,
   "CustType": "personal"
 },
 {
   "Latitude": -6.736767,
   "Longitude": 39.2163557,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7494159,
   "Longitude": 39.1622378,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6972302,
   "Longitude": 39.0984965,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.809553783,
   "Longitude": 39.25953851,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8055176,
   "Longitude": 39.2737513,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.808850426,
   "Longitude": 39.22857035,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038558,
   "Longitude": 39.2571168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7552708,
   "Longitude": 39.1303706,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7553793,
   "Longitude": 39.1312761,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8276285,
   "Longitude": 39.1391145,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.797180983,
   "Longitude": 39.2336905,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7650278,
   "Longitude": 39.2438168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.633454567,
   "Longitude": 39.09089913,
   "CustType": "personal"
 },
 {
   "Latitude": -6.633452632,
   "Longitude": 39.09101673,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8223789,
   "Longitude": 39.2738509,
   "CustType": "personal"
 },
 {
   "Latitude": -6.82372544,
   "Longitude": 39.27147616,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8198771,
   "Longitude": 39.2743992,
   "CustType": "personal"
 },
 {
   "Latitude": -6.719351425,
   "Longitude": 39.22905028,
   "CustType": "personal"
 },
 {
   "Latitude": -6.782864572,
   "Longitude": 39.22393836,
   "CustType": "personal"
 },
 {
   "Latitude": -6.771592599,
   "Longitude": 39.24858704,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.798049236,
   "Longitude": 39.22875524,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7528704,
   "Longitude": 39.112019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.727248333,
   "Longitude": 39.11700833,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.71733,
   "Longitude": 39.1443167,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.81028999,
   "Longitude": 39.18607858,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8123337,
   "Longitude": 39.2256634,
   "CustType": "personal"
 },
 {
   "Latitude": -6.711501269,
   "Longitude": 39.22902151,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7505316,
   "Longitude": 39.163345,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.705063871,
   "Longitude": 39.11313941,
   "CustType": "personal"
 },
 {
   "Latitude": -6.646872457,
   "Longitude": 39.18236983,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7819755,
   "Longitude": 39.178967,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8064158,
   "Longitude": 39.2511033,
   "CustType": "personal"
 },
 {
   "Latitude": -6.740283,
   "Longitude": 39.14987683,
   "CustType": "personal"
 },
 {
   "Latitude": -6.792514759,
   "Longitude": 39.20867085,
   "CustType": "personal"
 },
 {
   "Latitude": -6.731797191,
   "Longitude": 39.10060633,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "personal"
 },
 {
   "Latitude": -6.776818968,
   "Longitude": 39.22501792,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7685419,
   "Longitude": 39.0697859,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7824535,
   "Longitude": 39.1599446,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8096567,
   "Longitude": 39.2374329,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.76933755,
   "Longitude": 39.14018755,
   "CustType": "personal"
 },
 {
   "Latitude": -6.798659,
   "Longitude": 39.2616116,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7758826,
   "Longitude": 39.2249942,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7783255,
   "Longitude": 39.1193991,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8200226,
   "Longitude": 39.2764721,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8108443,
   "Longitude": 39.2379154,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7834522,
   "Longitude": 39.1742811,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8007139,
   "Longitude": 39.2501527,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "personal"
 },
 {
   "Latitude": -5.63862546,
   "Longitude": 41.53299205,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8072044,
   "Longitude": 39.2759374,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8089216,
   "Longitude": 39.1379099,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7474583,
   "Longitude": 39.0956693,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.729141602,
   "Longitude": 39.20420667,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7954799,
   "Longitude": 39.2383635,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8076241,
   "Longitude": 39.2274468,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7093361,
   "Longitude": 39.2053347,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925996,
   "Longitude": 39.2616012,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8161772,
   "Longitude": 39.2275042,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369024943,
   "Longitude": 34.88881767,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7884592,
   "Longitude": 39.1493274,
   "CustType": "personal"
 },
 {
   "Latitude": -6.806426008,
   "Longitude": 39.2420171,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6898749,
   "Longitude": 39.1760454,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7834982,
   "Longitude": 39.2575263,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7830663,
   "Longitude": 39.1771015,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7567701,
   "Longitude": 39.2371557,
   "CustType": "corporate"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7362704,
   "Longitude": 39.2220583,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8028957,
   "Longitude": 39.1750099,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8304214,
   "Longitude": 39.2653253,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810565713,
   "Longitude": 39.26022851,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7546625,
   "Longitude": 39.1948507,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.787443652,
   "Longitude": 39.2574656,
   "CustType": "personal"
 },
 {
   "Latitude": -6.631617,
   "Longitude": 39.188174,
   "CustType": "personal"
 },
 {
   "Latitude": -6.766467265,
   "Longitude": 39.19203528,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8181568,
   "Longitude": 39.1662445,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.815947164,
   "Longitude": 39.24452299,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.710445489,
   "Longitude": 39.20551766,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7910204,
   "Longitude": 39.2561764,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.739742343,
   "Longitude": 39.22857347,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.927587754,
   "Longitude": 39.13355425,
   "CustType": "personal"
 },
 {
   "Latitude": -6.927587754,
   "Longitude": 39.13355425,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.77831739,
   "Longitude": 39.24604073,
   "CustType": "personal"
 },
 {
   "Latitude": -6.739462589,
   "Longitude": 39.13891196,
   "CustType": "personal"
 },
 {
   "Latitude": -6.752349702,
   "Longitude": 39.16034922,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6790232,
   "Longitude": 39.1983234,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8289068,
   "Longitude": 39.2641014,
   "CustType": "personal"
 },
 {
   "Latitude": -6.792043665,
   "Longitude": 39.19418861,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7262981,
   "Longitude": 39.2165348,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.618851619,
   "Longitude": 39.14014798,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6558957,
   "Longitude": 39.0808887,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.677749229,
   "Longitude": 39.14955598,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.749874467,
   "Longitude": 39.15811435,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7955947,
   "Longitude": 39.2662634,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7852812,
   "Longitude": 39.2580119,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7968338,
   "Longitude": 39.2644967,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.584654871,
   "Longitude": 34.73481591,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7931756,
   "Longitude": 39.2708995,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810910408,
   "Longitude": 39.10747573,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.81142973,
   "Longitude": 39.2262125,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.801285012,
   "Longitude": 39.26453309,
   "CustType": "personal"
 },
 {
   "Latitude": -6.78952,
   "Longitude": 39.1979133,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7594311,
   "Longitude": 39.2134104,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6889871,
   "Longitude": 39.1315114,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7755833,
   "Longitude": 39.0453919,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7603566,
   "Longitude": 39.0505029,
   "CustType": "personal"
 },
 {
   "Latitude": -6.820427016,
   "Longitude": 39.2845192,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6466655,
   "Longitude": 39.1686142,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8139798,
   "Longitude": 39.2395925,
   "CustType": "personal"
 },
 {
   "Latitude": -6.790285,
   "Longitude": 39.2593533,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8076916,
   "Longitude": 39.2058415,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7804375,
   "Longitude": 39.2436506,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7926173,
   "Longitude": 39.2266549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7950545,
   "Longitude": 39.1031401,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7944901,
   "Longitude": 39.2194523,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7850993,
   "Longitude": 39.0747896,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.776146404,
   "Longitude": 39.22619605,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7889021,
   "Longitude": 39.0572736,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7439519,
   "Longitude": 39.1626028,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7670144,
   "Longitude": 39.2255622,
   "CustType": "personal"
 },
 {
   "Latitude": -6.755636154,
   "Longitude": 39.12997216,
   "CustType": "personal"
 },
 {
   "Latitude": -6.666483074,
   "Longitude": 39.21784401,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.792117354,
   "Longitude": 39.25227057,
   "CustType": "personal"
 },
 {
   "Latitude": -6.751831442,
   "Longitude": 39.27356228,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6882531,
   "Longitude": 39.2009541,
   "CustType": "personal"
 },
 {
   "Latitude": -6.735389108,
   "Longitude": 39.20269511,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7520765,
   "Longitude": 39.1758061,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7552479,
   "Longitude": 39.1785784,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8052547,
   "Longitude": 39.2279062,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7832901,
   "Longitude": 39.1133951,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8041824,
   "Longitude": 39.2019136,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -3.625124411,
   "Longitude": 30.58578743,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8020721,
   "Longitude": 39.2586802,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.790275,
   "Longitude": 39.2642983,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.718435,
   "Longitude": 39.2007367,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6423137,
   "Longitude": 39.1777357,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7188466,
   "Longitude": 39.1503215,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7268541,
   "Longitude": 39.1320003,
   "CustType": "personal"
 },
 {
   "Latitude": -6.368573665,
   "Longitude": 34.88942653,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7672705,
   "Longitude": 39.2275852,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7037095,
   "Longitude": 39.1703372,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.740687878,
   "Longitude": 39.14891124,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.788789,
   "Longitude": 39.2505202,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7128623,
   "Longitude": 39.1920192,
   "CustType": "personal"
 },
 {
   "Latitude": -6.784205952,
   "Longitude": 39.24324666,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.733033439,
   "Longitude": 39.21310078,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7333491,
   "Longitude": 39.16159,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8260206,
   "Longitude": 39.2682682,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8260206,
   "Longitude": 39.2682682,
   "CustType": "personal"
 },
 {
   "Latitude": -6.750910929,
   "Longitude": 39.18723464,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7694212,
   "Longitude": 39.2610977,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7913499,
   "Longitude": 39.2677851,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.802022181,
   "Longitude": 39.25943,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.754646046,
   "Longitude": 39.23751771,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8078899,
   "Longitude": 39.2624758,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7330577,
   "Longitude": 39.1619425,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.782588444,
   "Longitude": 39.22412876,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7340766,
   "Longitude": 39.2107111,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "corporate"
 },
 {
   "Latitude": -4.607753224,
   "Longitude": 31.79078048,
   "CustType": "personal"
 },
 {
   "Latitude": -6.368623691,
   "Longitude": 34.88929947,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810368013,
   "Longitude": 39.25958478,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7720725,
   "Longitude": 39.2239806,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7520765,
   "Longitude": 39.1758061,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8046197,
   "Longitude": 39.0954994,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6558957,
   "Longitude": 39.0808887,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.805245559,
   "Longitude": 39.25664485,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.807392328,
   "Longitude": 39.24659655,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7242816,
   "Longitude": 39.1679063,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.5945666,
   "Longitude": 39.1592988,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7257885,
   "Longitude": 39.232273,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -7.350334397,
   "Longitude": 31.46108763,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.797329357,
   "Longitude": 39.26735555,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8084393,
   "Longitude": 39.2529417,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.785329869,
   "Longitude": 39.17036819,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6692638,
   "Longitude": 39.1603231,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.802140127,
   "Longitude": 39.19402599,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7054682,
   "Longitude": 39.198503,
   "CustType": "personal"
 },
 {
   "Latitude": -6.701876187,
   "Longitude": 39.10758536,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7870214,
   "Longitude": 39.2328436,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.752774419,
   "Longitude": 39.18843627,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.745740787,
   "Longitude": 39.1601353,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473131,
   "Longitude": 39.1601358,
   "CustType": "personal"
 },
 {
   "Latitude": -6.645673461,
   "Longitude": 39.17849598,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8031105,
   "Longitude": 39.2584807,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8046327,
   "Longitude": 39.2611859,
   "CustType": "personal"
 },
 {
   "Latitude": -6.198428471,
   "Longitude": 37.9649204,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7706063,
   "Longitude": 39.1914145,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6287116,
   "Longitude": 39.1738903,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.769454642,
   "Longitude": 39.21927094,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -7.775332533,
   "Longitude": 36.90560613,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6255462,
   "Longitude": 39.1629432,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7890167,
   "Longitude": 39.0558873,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8022273,
   "Longitude": 39.2582734,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7799833,
   "Longitude": 39.2351583,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.676574482,
   "Longitude": 39.16328788,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7427235,
   "Longitude": 39.1977819,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7387653,
   "Longitude": 39.1176531,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8158733,
   "Longitude": 39.1661733,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7828861,
   "Longitude": 39.2453326,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.757500661,
   "Longitude": 39.19517398,
   "CustType": "personal"
 },
 {
   "Latitude": -6.5873467,
   "Longitude": 39.1101117,
   "CustType": "personal"
 },
 {
   "Latitude": -6.752061574,
   "Longitude": 39.19031025,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7397863,
   "Longitude": 39.1613407,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.792072638,
   "Longitude": 39.20886934,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7287752,
   "Longitude": 39.2304699,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.80906207,
   "Longitude": 39.22190085,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6998627,
   "Longitude": 39.1965366,
   "CustType": "personal"
 },
 {
   "Latitude": -6.790396959,
   "Longitude": 39.2238441,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.789361304,
   "Longitude": 39.08866346,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6418436,
   "Longitude": 39.1758179,
   "CustType": "personal"
 },
 {
   "Latitude": -6.814057907,
   "Longitude": 39.22026206,
   "CustType": "personal"
 },
 {
   "Latitude": -6.642588978,
   "Longitude": 39.11367417,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.804887566,
   "Longitude": 39.15949083,
   "CustType": "personal"
 },
 {
   "Latitude": -6.638314897,
   "Longitude": 39.16506198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7954447,
   "Longitude": 39.2355338,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.636884964,
   "Longitude": 39.17242722,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8011979,
   "Longitude": 39.2509391,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7942022,
   "Longitude": 39.2684895,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8026674,
   "Longitude": 39.2169751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.792413551,
   "Longitude": 39.20835435,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6262626,
   "Longitude": 39.1301283,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.809378183,
   "Longitude": 39.23665679,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6674365,
   "Longitude": 39.1761835,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.75626476,
   "Longitude": 39.18331861,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.661039505,
   "Longitude": 39.2006111,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6904067,
   "Longitude": 39.1293967,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8048343,
   "Longitude": 39.2746659,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7847569,
   "Longitude": 39.2589058,
   "CustType": "personal"
 },
 {
   "Latitude": -6.807491221,
   "Longitude": 39.08104678,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8311819,
   "Longitude": 39.2550686,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.776965312,
   "Longitude": 39.15358091,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810878597,
   "Longitude": 39.2598502,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7572595,
   "Longitude": 39.2001547,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.790469277,
   "Longitude": 39.25065815,
   "CustType": "personal"
 },
 {
   "Latitude": -6.722160076,
   "Longitude": 39.22777593,
   "CustType": "personal"
 },
 {
   "Latitude": -6.761644201,
   "Longitude": 39.24245255,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.804800283,
   "Longitude": 39.28128798,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8083468,
   "Longitude": 39.2618325,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7014212,
   "Longitude": 39.1734322,
   "CustType": "personal"
 },
 {
   "Latitude": -6.770536025,
   "Longitude": 39.23056036,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.785373537,
   "Longitude": 39.11669874,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7199567,
   "Longitude": 39.2270618,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.81291385,
   "Longitude": 39.2905071,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810211636,
   "Longitude": 39.23553844,
   "CustType": "personal"
 },
 {
   "Latitude": -6.784457516,
   "Longitude": 39.26253771,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6237634,
   "Longitude": 39.1044312,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7919433,
   "Longitude": 39.2632986,
   "CustType": "personal"
 },
 {
   "Latitude": -6.642530251,
   "Longitude": 39.1788602,
   "CustType": "personal"
 },
 {
   "Latitude": -6.700744709,
   "Longitude": 39.14530439,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7999204,
   "Longitude": 39.2486365,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7824577,
   "Longitude": 39.1667876,
   "CustType": "personal"
 },
 {
   "Latitude": -6.809713321,
   "Longitude": 39.25805571,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7326179,
   "Longitude": 39.2071722,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.807914593,
   "Longitude": 39.27554551,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6564707,
   "Longitude": 39.1948867,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6813876,
   "Longitude": 39.1555531,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.791704034,
   "Longitude": 39.26995611,
   "CustType": "personal"
 },
 {
   "Latitude": -6.739800876,
   "Longitude": 39.16660845,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7436664,
   "Longitude": 39.1259731,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7782966,
   "Longitude": 39.2442136,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.785983061,
   "Longitude": 39.19533245,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8275029,
   "Longitude": 39.131232,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8169674,
   "Longitude": 39.231519,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.664053778,
   "Longitude": 39.16434272,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7149291,
   "Longitude": 39.212001,
   "CustType": "personal"
 },
 {
   "Latitude": -6.782441741,
   "Longitude": 39.22625542,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8046435,
   "Longitude": 39.2577228,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173757,
   "Longitude": 39.12369249,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6285797,
   "Longitude": 39.1474436,
   "CustType": "personal"
 },
 {
   "Latitude": -6.718493686,
   "Longitude": 39.13664281,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.783589682,
   "Longitude": 39.22729611,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7385289,
   "Longitude": 39.1538886,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7807594,
   "Longitude": 39.2216234,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.814714972,
   "Longitude": 39.17814794,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8219914,
   "Longitude": 39.2764628,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.62583739,
   "Longitude": 39.12692171,
   "CustType": "personal"
 },
 {
   "Latitude": -6.81156023,
   "Longitude": 39.2337817,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7787735,
   "Longitude": 39.2440154,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7843545,
   "Longitude": 39.0810126,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.796594485,
   "Longitude": 39.26928921,
   "CustType": "personal"
 },
 {
   "Latitude": -6.666874,
   "Longitude": 39.1753682,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810351,
   "Longitude": 39.2151592,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6602438,
   "Longitude": 39.1929924,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.737217574,
   "Longitude": 39.16947239,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7651451,
   "Longitude": 39.2665763,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.680216672,
   "Longitude": 39.11044787,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7994367,
   "Longitude": 39.25865,
   "CustType": "personal"
 },
 {
   "Latitude": -5.669346598,
   "Longitude": 31.59294292,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7186152,
   "Longitude": 39.1929385,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8008668,
   "Longitude": 39.2575713,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7937497,
   "Longitude": 39.2417088,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.757801357,
   "Longitude": 39.2010071,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8031856,
   "Longitude": 39.2441316,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7859005,
   "Longitude": 39.1305585,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.631617,
   "Longitude": 39.188174,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8055176,
   "Longitude": 39.2737513,
   "CustType": "personal"
 },
 {
   "Latitude": -6.790190539,
   "Longitude": 39.26879143,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.783955,
   "Longitude": 39.2377667,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7993157,
   "Longitude": 39.1908654,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7866267,
   "Longitude": 39.2303333,
   "CustType": "personal"
 },
 {
   "Latitude": -6.741100167,
   "Longitude": 39.14927286,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8055176,
   "Longitude": 39.2737513,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7748142,
   "Longitude": 39.0496029,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7748142,
   "Longitude": 39.0496029,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9197423,
   "Longitude": 39.2503316,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.779834915,
   "Longitude": 39.23152761,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8144344,
   "Longitude": 39.2211487,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.79203891,
   "Longitude": 39.24980396,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6267358,
   "Longitude": 39.1341373,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7843045,
   "Longitude": 39.2350751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7593657,
   "Longitude": 39.1216243,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7382912,
   "Longitude": 39.2140196,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6012725,
   "Longitude": 39.1283765,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.785477267,
   "Longitude": 39.23115766,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -5.001832958,
   "Longitude": 31.7248968,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.778891847,
   "Longitude": 39.23749288,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7056598,
   "Longitude": 39.1370045,
   "CustType": "personal"
 },
 {
   "Latitude": -6.757764508,
   "Longitude": 39.19440166,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.782201744,
   "Longitude": 39.23819008,
   "CustType": "personal"
 },
 {
   "Latitude": -6.807853,
   "Longitude": 39.1453711,
   "CustType": "personal"
 },
 {
   "Latitude": -6.740479562,
   "Longitude": 39.14945327,
   "CustType": "personal"
 },
 {
   "Latitude": -6.721068848,
   "Longitude": 39.216533,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369024943,
   "Longitude": 34.88912344,
   "CustType": "personal"
 },
 {
   "Latitude": -6.80035959,
   "Longitude": 39.21054478,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.783005721,
   "Longitude": 39.2246061,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7685547,
   "Longitude": 39.2671837,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6281817,
   "Longitude": 39.147165,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7862643,
   "Longitude": 39.2230941,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8179354,
   "Longitude": 39.2757723,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.700295,
   "Longitude": 39.1416701,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8264317,
   "Longitude": 39.2564983,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077348,
   "Longitude": 39.2840251,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.805440517,
   "Longitude": 39.21827149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.743795146,
   "Longitude": 39.14326598,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.803846399,
   "Longitude": 39.25230387,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.782397918,
   "Longitude": 39.25140747,
   "CustType": "personal"
 },
 {
   "Latitude": -6.796291421,
   "Longitude": 39.20733511,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.660086591,
   "Longitude": 39.19112116,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -7.109102001,
   "Longitude": 38.84656466,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7808177,
   "Longitude": 39.2549714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7806882,
   "Longitude": 39.2231768,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.670029964,
   "Longitude": 39.17458832,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.92750255,
   "Longitude": 39.13357437,
   "CustType": "personal"
 },
 {
   "Latitude": -6.787024168,
   "Longitude": 39.26275822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7823338,
   "Longitude": 39.2324081,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7656444,
   "Longitude": 39.2255266,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.79460114,
   "Longitude": 39.2653749,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369531417,
   "Longitude": 34.89332914,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.763786659,
   "Longitude": 39.24061596,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7870153,
   "Longitude": 39.2475961,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.628186,
   "Longitude": 39.1471483,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7867399,
   "Longitude": 39.179335,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7528122,
   "Longitude": 39.16925815,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.791231007,
   "Longitude": 39.20363903,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7919615,
   "Longitude": 39.2579527,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.751073069,
   "Longitude": 39.20364939,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.75792862,
   "Longitude": 39.18813064,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.78915,
   "Longitude": 39.2620133,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7273338,
   "Longitude": 39.1568332,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7434239,
   "Longitude": 39.1630959,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6336145,
   "Longitude": 39.1732394,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8003579,
   "Longitude": 39.2251424,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.736422099,
   "Longitude": 39.17450541,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7940616,
   "Longitude": 39.1912099,
   "CustType": "personal"
 },
 {
   "Latitude": -6.767120905,
   "Longitude": 39.21802211,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8204982,
   "Longitude": 39.2765087,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.782783949,
   "Longitude": 39.26344145,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6898434,
   "Longitude": 39.1225933,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7806993,
   "Longitude": 39.2513274,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8040405,
   "Longitude": 39.2584391,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7506836,
   "Longitude": 39.175506,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7937497,
   "Longitude": 39.2417088,
   "CustType": "personal"
 },
 {
   "Latitude": -6.801461948,
   "Longitude": 39.21013168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6558957,
   "Longitude": 39.0808887,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.761266943,
   "Longitude": 39.24013853,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8063087,
   "Longitude": 39.2618872,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7740434,
   "Longitude": 39.0808322,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6080754,
   "Longitude": 39.1267508,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -7.272648068,
   "Longitude": 36.6027922,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7147607,
   "Longitude": 39.1695902,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7922299,
   "Longitude": 39.2637102,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7876611,
   "Longitude": 39.2696491,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.815420659,
   "Longitude": 39.25373819,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.783293179,
   "Longitude": 39.25569144,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7480327,
   "Longitude": 39.1647038,
   "CustType": "personal"
 },
 {
   "Latitude": -6.821613995,
   "Longitude": 39.27985132,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7957515,
   "Longitude": 39.1805215,
   "CustType": "personal"
 },
 {
   "Latitude": -6.761562597,
   "Longitude": 39.25160229,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.738071827,
   "Longitude": 39.19707086,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7924283,
   "Longitude": 39.262812,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7920575,
   "Longitude": 39.1498302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7481864,
   "Longitude": 39.1722497,
   "CustType": "personal"
 },
 {
   "Latitude": -6.795918637,
   "Longitude": 39.17836018,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7877318,
   "Longitude": 39.182345,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8055176,
   "Longitude": 39.2737513,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7462621,
   "Longitude": 39.176907,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8290148,
   "Longitude": 39.1185791,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7155435,
   "Longitude": 39.1399166,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7492375,
   "Longitude": 39.1755648,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.796088,
   "Longitude": 39.2610324,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7739516,
   "Longitude": 39.2265032,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.774046713,
   "Longitude": 39.22307577,
   "CustType": "personal"
 },
 {
   "Latitude": -6.727214856,
   "Longitude": 39.20785546,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.733687707,
   "Longitude": 39.11743551,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851098,
   "Longitude": 39.2296068,
   "CustType": "personal"
 },
 {
   "Latitude": -6.755131038,
   "Longitude": 39.20494392,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7511657,
   "Longitude": 39.2400253,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7509468,
   "Longitude": 39.1876549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7699738,
   "Longitude": 39.2177416,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7802431,
   "Longitude": 39.2430919,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7171241,
   "Longitude": 39.1986126,
   "CustType": "personal"
 },
 {
   "Latitude": -6.791896854,
   "Longitude": 39.27042603,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": 8.28732503,
   "Longitude": 101.2631154,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7918279,
   "Longitude": 39.2259324,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7673076,
   "Longitude": 39.0978373,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7145883,
   "Longitude": 39.1389817,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.628709151,
   "Longitude": 39.14746211,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7362175,
   "Longitude": 39.1922087,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7357812,
   "Longitude": 39.1191514,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6656832,
   "Longitude": 39.1932441,
   "CustType": "personal"
 },
 {
   "Latitude": -6.740452559,
   "Longitude": 39.14869616,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7511817,
   "Longitude": 39.17124,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7215623,
   "Longitude": 39.1364937,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7144416,
   "Longitude": 39.1443853,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7147696,
   "Longitude": 39.1453429,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7141406,
   "Longitude": 39.142058,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7116567,
   "Longitude": 39.1451548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.36919327,
   "Longitude": 34.88814941,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7422799,
   "Longitude": 39.1721392,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8161498,
   "Longitude": 39.2278351,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7215576,
   "Longitude": 39.1420557,
   "CustType": "personal"
 },
 {
   "Latitude": -6.75262269,
   "Longitude": 39.18856456,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.80247038,
   "Longitude": 39.24342155,
   "CustType": "personal"
 },
 {
   "Latitude": -6.793233872,
   "Longitude": 39.20730829,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7912683,
   "Longitude": 39.2594483,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7883175,
   "Longitude": 39.0990514,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.74477439,
   "Longitude": 39.17169931,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.740687878,
   "Longitude": 39.14891124,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.747671674,
   "Longitude": 39.17245904,
   "CustType": "personal"
 },
 {
   "Latitude": -6.763510758,
   "Longitude": 39.09628777,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.740600717,
   "Longitude": 39.14922187,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.828515267,
   "Longitude": 39.26903659,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7170556,
   "Longitude": 39.1441495,
   "CustType": "personal"
 },
 {
   "Latitude": -6.76540794,
   "Longitude": 39.12466056,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7130422,
   "Longitude": 39.1413267,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7250643,
   "Longitude": 39.141609,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.629748986,
   "Longitude": 39.1468189,
   "CustType": "personal"
 },
 {
   "Latitude": -6.71257,
   "Longitude": 39.1421504,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7847645,
   "Longitude": 39.1689388,
   "CustType": "personal"
 },
 {
   "Latitude": -6.753807574,
   "Longitude": 39.20782105,
   "CustType": "personal"
 },
 {
   "Latitude": -6.711735932,
   "Longitude": 39.14338424,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7563703,
   "Longitude": 39.1925525,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.807944186,
   "Longitude": 39.28636856,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8028417,
   "Longitude": 39.2040617,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107403,
   "Longitude": 39.0692812,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7898867,
   "Longitude": 39.2165017,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6959802,
   "Longitude": 39.2254473,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.712236,
   "Longitude": 39.1346476,
   "CustType": "personal"
 },
 {
   "Latitude": -6.77368001,
   "Longitude": 39.21353451,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.784461,
   "Longitude": 39.2628518,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.661630358,
   "Longitude": 39.2006555,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7489333,
   "Longitude": 39.1623083,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.731792035,
   "Longitude": 39.21511384,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369252422,
   "Longitude": 34.88801201,
   "CustType": "personal"
 },
 {
   "Latitude": -6.60211,
   "Longitude": 39.1522233,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7814526,
   "Longitude": 39.2518508,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7536319,
   "Longitude": 39.2076703,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.754389068,
   "Longitude": 39.23684738,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8055176,
   "Longitude": 39.2737513,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.797431338,
   "Longitude": 39.12831724,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8317628,
   "Longitude": 39.2555754,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8186081,
   "Longitude": 39.273637,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.832303615,
   "Longitude": 39.25904115,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7525483,
   "Longitude": 39.1763433,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7521864,
   "Longitude": 39.1729256,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.730463911,
   "Longitude": 39.19593433,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7512882,
   "Longitude": 39.1742095,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7781589,
   "Longitude": 39.2420586,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.74845,
   "Longitude": 39.1699131,
   "CustType": "personal"
 },
 {
   "Latitude": -6.717232671,
   "Longitude": 39.20200734,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7494067,
   "Longitude": 39.1751209,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7555966,
   "Longitude": 39.1736366,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6255942,
   "Longitude": 39.088122,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6028288,
   "Longitude": 39.1075709,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.784178,
   "Longitude": 39.2691488,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9454449,
   "Longitude": 39.3438034,
   "CustType": "personal"
 },
 {
   "Latitude": -6.801976022,
   "Longitude": 39.25280732,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7476456,
   "Longitude": 39.1742072,
   "CustType": "personal"
 },
 {
   "Latitude": -6.796054314,
   "Longitude": 39.26227685,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.835602561,
   "Longitude": 39.28668939,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038033,
   "Longitude": 39.2585555,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7513699,
   "Longitude": 39.0780335,
   "CustType": "personal"
 },
 {
   "Latitude": -6.753189046,
   "Longitude": 39.18934135,
   "CustType": "personal"
 },
 {
   "Latitude": -6.751288434,
   "Longitude": 39.16851072,
   "CustType": "personal"
 },
 {
   "Latitude": -6.741545121,
   "Longitude": 39.08890518,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6649254,
   "Longitude": 39.1903078,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7864077,
   "Longitude": 39.1241549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.826487665,
   "Longitude": 39.26453993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.75791,
   "Longitude": 39.18823789,
   "CustType": "personal"
 },
 {
   "Latitude": -6.746858554,
   "Longitude": 39.17436327,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.740724065,
   "Longitude": 39.1495596,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7622737,
   "Longitude": 39.1255654,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8139798,
   "Longitude": 39.2395925,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.713677822,
   "Longitude": 39.13711431,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6817318,
   "Longitude": 39.0692668,
   "CustType": "personal"
 },
 {
   "Latitude": -6.74189019,
   "Longitude": 39.14351845,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7746901,
   "Longitude": 39.2598213,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8324024,
   "Longitude": 39.2544927,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.799839006,
   "Longitude": 39.20434713,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.713618494,
   "Longitude": 39.13705689,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.792287571,
   "Longitude": 39.20862858,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.713715075,
   "Longitude": 39.13712709,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7896839,
   "Longitude": 39.2642381,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.78317685,
   "Longitude": 39.22424376,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7366045,
   "Longitude": 39.221745,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.766008047,
   "Longitude": 39.23505306,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.808713179,
   "Longitude": 39.22185659,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7128927,
   "Longitude": 39.1346963,
   "CustType": "personal"
 },
 {
   "Latitude": -6.827375855,
   "Longitude": 39.28035565,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.779014823,
   "Longitude": 39.24109399,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.727447051,
   "Longitude": 39.20795759,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7156563,
   "Longitude": 39.1364129,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.705775997,
   "Longitude": 39.17500164,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6213467,
   "Longitude": 39.1038183,
   "CustType": "personal"
 },
 {
   "Latitude": -6.781506422,
   "Longitude": 39.23429837,
   "CustType": "personal"
 },
 {
   "Latitude": -6.809536136,
   "Longitude": 39.25436899,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.80410566,
   "Longitude": 39.16672647,
   "CustType": "personal"
 },
 {
   "Latitude": -6.791577236,
   "Longitude": 39.21431843,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819920184,
   "Longitude": 39.27214265,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8139798,
   "Longitude": 39.2395925,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7305468,
   "Longitude": 39.1430157,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.751501432,
   "Longitude": 39.18792426,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7013671,
   "Longitude": 39.1871173,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "corporate"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7748142,
   "Longitude": 39.0496029,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.712766,
   "Longitude": 39.1344077,
   "CustType": "personal"
 },
 {
   "Latitude": -6.712766,
   "Longitude": 39.1344077,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7781589,
   "Longitude": 39.2420586,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.781209785,
   "Longitude": 39.16162896,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803762492,
   "Longitude": 39.16650587,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7431057,
   "Longitude": 39.1901115,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7748142,
   "Longitude": 39.0496029,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077292,
   "Longitude": 39.2609985,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7634085,
   "Longitude": 39.1985553,
   "CustType": "personal"
 },
 {
   "Latitude": -6.899148819,
   "Longitude": 39.27314191,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.677157263,
   "Longitude": 39.15466052,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.642147782,
   "Longitude": 39.17743181,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6401994,
   "Longitude": 39.1780783,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7144152,
   "Longitude": 39.1342274,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.814975129,
   "Longitude": 39.23571378,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7892858,
   "Longitude": 39.264867,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7079858,
   "Longitude": 39.1730545,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8055176,
   "Longitude": 39.2737513,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7256101,
   "Longitude": 39.1784316,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8164399,
   "Longitude": 39.2535464,
   "CustType": "personal"
 },
 {
   "Latitude": -6.687441486,
   "Longitude": 39.19369193,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6809226,
   "Longitude": 39.1537015,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8205862,
   "Longitude": 39.278074,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8139798,
   "Longitude": 39.2395925,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.814969885,
   "Longitude": 39.27624426,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7768346,
   "Longitude": 39.1188885,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.789176989,
   "Longitude": 39.15544832,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803908426,
   "Longitude": 39.1663188,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7825481,
   "Longitude": 39.2541453,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.826059706,
   "Longitude": 39.26093904,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.740687878,
   "Longitude": 39.14890051,
   "CustType": "personal"
 },
 {
   "Latitude": -6.927506544,
   "Longitude": 39.13357705,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8008359,
   "Longitude": 39.2602685,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.740216309,
   "Longitude": 39.20525971,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8227205,
   "Longitude": 39.260004,
   "CustType": "personal"
 },
 {
   "Latitude": -6.762222739,
   "Longitude": 39.24254837,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6819542,
   "Longitude": 39.1856643,
   "CustType": "personal"
 },
 {
   "Latitude": -6.792517423,
   "Longitude": 39.20867354,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.723086038,
   "Longitude": 39.22986031,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.624105948,
   "Longitude": 39.12671037,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.661474589,
   "Longitude": 39.20034528,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810672027,
   "Longitude": 39.22818124,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8258417,
   "Longitude": 39.2527683,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851648,
   "Longitude": 39.2579604,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.765236,
   "Longitude": 39.0520816,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8156408,
   "Longitude": 39.2189261,
   "CustType": "personal"
 },
 {
   "Latitude": -6.776700555,
   "Longitude": 39.27183804,
   "CustType": "personal"
 },
 {
   "Latitude": -6.789087,
   "Longitude": 39.2377896,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.724823227,
   "Longitude": 39.21200235,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8058764,
   "Longitude": 39.2606736,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.802529,
   "Longitude": 39.2295109,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.789109307,
   "Longitude": 39.2703507,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6971817,
   "Longitude": 39.211007,
   "CustType": "personal"
 },
 {
   "Latitude": -6.740662905,
   "Longitude": 39.14913048,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7158687,
   "Longitude": 39.136876,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818265033,
   "Longitude": 39.28753234,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6398588,
   "Longitude": 39.1775835,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6128764,
   "Longitude": 39.1164703,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.762251395,
   "Longitude": 39.24126963,
   "CustType": "personal"
 },
 {
   "Latitude": -6.774323951,
   "Longitude": 39.23351917,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7884667,
   "Longitude": 39.0589807,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.781320732,
   "Longitude": 39.12296798,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7873011,
   "Longitude": 39.2361936,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7630731,
   "Longitude": 39.2658434,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7025889,
   "Longitude": 39.1958404,
   "CustType": "personal"
 },
 {
   "Latitude": -6.783057253,
   "Longitude": 39.22472692,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8237032,
   "Longitude": 39.2762899,
   "CustType": "personal"
 },
 {
   "Latitude": -6.79015,
   "Longitude": 39.26795,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6848762,
   "Longitude": 39.1935961,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6903119,
   "Longitude": 39.1578936,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7539737,
   "Longitude": 39.1922652,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7367575,
   "Longitude": 39.2262545,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.791231007,
   "Longitude": 39.20363903,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7198935,
   "Longitude": 39.1343456,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.753558553,
   "Longitude": 39.18928385,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.717247529,
   "Longitude": 39.13445281,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.802099561,
   "Longitude": 39.16750508,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.705975,
   "Longitude": 39.178475,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7116883,
   "Longitude": 39.1362016,
   "CustType": "personal"
 },
 {
   "Latitude": -6.80391,
   "Longitude": 39.2775167,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.757391743,
   "Longitude": 39.19593985,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.656721218,
   "Longitude": 39.1850702,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7144152,
   "Longitude": 39.1342274,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7943051,
   "Longitude": 39.2348308,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.783645765,
   "Longitude": 39.21861244,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7156072,
   "Longitude": 39.1342847,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.743667616,
   "Longitude": 39.14641439,
   "CustType": "personal"
 },
 {
   "Latitude": -6.714035,
   "Longitude": 39.134211,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7156072,
   "Longitude": 39.1342847,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.714035,
   "Longitude": 39.134211,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7154146,
   "Longitude": 39.1335884,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.73126754,
   "Longitude": 39.21986433,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7879867,
   "Longitude": 39.2567673,
   "CustType": "personal"
 },
 {
   "Latitude": -6.808436,
   "Longitude": 39.2821265,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6895925,
   "Longitude": 39.1318944,
   "CustType": "personal"
 },
 {
   "Latitude": -6.722048988,
   "Longitude": 39.18485472,
   "CustType": "personal"
 },
 {
   "Latitude": -6.824950934,
   "Longitude": 39.20165378,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8027964,
   "Longitude": 39.2305584,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8002695,
   "Longitude": 39.2294604,
   "CustType": "personal"
 },
 {
   "Latitude": -6.789075,
   "Longitude": 39.2562683,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7938267,
   "Longitude": 39.2254697,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7929469,
   "Longitude": 39.2319728,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.797154349,
   "Longitude": 39.20874596,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8139798,
   "Longitude": 39.2395925,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.758540994,
   "Longitude": 39.15056992,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7937497,
   "Longitude": 39.2417088,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7937497,
   "Longitude": 39.2417088,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7408101,
   "Longitude": 39.1719981,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7793287,
   "Longitude": 39.2422366,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7772602,
   "Longitude": 39.1047615,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369024943,
   "Longitude": 34.88881767,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8075533,
   "Longitude": 39.2312072,
   "CustType": "personal"
 },
 {
   "Latitude": -6.792514759,
   "Longitude": 39.20867085,
   "CustType": "personal"
 },
 {
   "Latitude": -6.763577598,
   "Longitude": 39.23848645,
   "CustType": "personal"
 },
 {
   "Latitude": -5.833266749,
   "Longitude": 35.70343569,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6633824,
   "Longitude": 39.2098358,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7974598,
   "Longitude": 39.23531,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7746846,
   "Longitude": 39.2709382,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8091847,
   "Longitude": 39.2655695,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7962069,
   "Longitude": 39.2108681,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.630166,
   "Longitude": 39.1635617,
   "CustType": "personal"
 },
 {
   "Latitude": -6.696214,
   "Longitude": 39.128073,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810766831,
   "Longitude": 39.25963351,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8191884,
   "Longitude": 39.2721899,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.702484044,
   "Longitude": 39.20087636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.652790399,
   "Longitude": 39.18578625,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7906838,
   "Longitude": 39.2552299,
   "CustType": "personal"
 },
 {
   "Latitude": -6.789281779,
   "Longitude": 39.25374771,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6692601,
   "Longitude": 39.1923423,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.667218,
   "Longitude": 39.1803028,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369144898,
   "Longitude": 34.88887399,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.822026559,
   "Longitude": 39.30446577,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819593078,
   "Longitude": 39.27324175,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.928049094,
   "Longitude": 39.13331034,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8048224,
   "Longitude": 39.2583139,
   "CustType": "personal"
 },
 {
   "Latitude": -6.718349841,
   "Longitude": 39.22434568,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.764973,
   "Longitude": 39.047543,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.656536729,
   "Longitude": 39.09904759,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.747592703,
   "Longitude": 39.16579381,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.786156718,
   "Longitude": 39.2607752,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.78213821,
   "Longitude": 39.22924456,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8261006,
   "Longitude": 39.2562762,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8209449,
   "Longitude": 39.2787879,
   "CustType": "personal"
 },
 {
   "Latitude": -6.791058782,
   "Longitude": 39.27050049,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7852822,
   "Longitude": 39.2450491,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810744766,
   "Longitude": 39.25983926,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.800986871,
   "Longitude": 39.26054805,
   "CustType": "personal"
 },
 {
   "Latitude": -6.705323729,
   "Longitude": 39.1127336,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7825111,
   "Longitude": 39.0182514,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7120546,
   "Longitude": 39.14505,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7188964,
   "Longitude": 39.2084739,
   "CustType": "personal"
 },
 {
   "Latitude": -6.776922278,
   "Longitude": 39.26326504,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.727209334,
   "Longitude": 39.20722531,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.782525,
   "Longitude": 39.242975,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8000413,
   "Longitude": 39.2589016,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8329734,
   "Longitude": 39.2559299,
   "CustType": "personal"
 },
 {
   "Latitude": -6.80117724,
   "Longitude": 39.2419883,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.723112676,
   "Longitude": 39.22993541,
   "CustType": "personal"
 },
 {
   "Latitude": -6.735999834,
   "Longitude": 39.17148605,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.773641338,
   "Longitude": 39.22326124,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.824018627,
   "Longitude": 39.27158175,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.81920925,
   "Longitude": 39.27303036,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.640025338,
   "Longitude": 39.16506303,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.780364279,
   "Longitude": 39.19259705,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.792225,
   "Longitude": 39.257275,
   "CustType": "personal"
 },
 {
   "Latitude": -6.713406064,
   "Longitude": 39.133226,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7573963,
   "Longitude": 39.2761338,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.763388768,
   "Longitude": 39.11042722,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803354604,
   "Longitude": 39.16613102,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.78160553,
   "Longitude": 39.28581239,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8130887,
   "Longitude": 39.2300557,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7318974,
   "Longitude": 39.1444136,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.799010705,
   "Longitude": 39.26431596,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.716066014,
   "Longitude": 39.13765503,
   "CustType": "personal"
 },
 {
   "Latitude": -6.665616501,
   "Longitude": 39.17755651,
   "CustType": "personal"
 },
 {
   "Latitude": -4.227414342,
   "Longitude": 35.00602075,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.81110327,
   "Longitude": 39.22632705,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8026017,
   "Longitude": 39.2273868,
   "CustType": "personal"
 },
 {
   "Latitude": -6.784114378,
   "Longitude": 39.16821241,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8128728,
   "Longitude": 39.2402447,
   "CustType": "personal"
 },
 {
   "Latitude": -6.823380075,
   "Longitude": 39.27330264,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.639065153,
   "Longitude": 39.12353647,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6232017,
   "Longitude": 39.1668618,
   "CustType": "personal"
 },
 {
   "Latitude": -6.638189794,
   "Longitude": 39.16418374,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8315117,
   "Longitude": 39.2557655,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8100511,
   "Longitude": 39.2744703,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8139798,
   "Longitude": 39.2395925,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.808105036,
   "Longitude": 39.26282877,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6558957,
   "Longitude": 39.0808887,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.637921323,
   "Longitude": 39.16617341,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7577906,
   "Longitude": 39.1995822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7701309,
   "Longitude": 39.1906861,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7914785,
   "Longitude": 39.1968522,
   "CustType": "personal"
 },
 {
   "Latitude": -6.705331721,
   "Longitude": 39.1127336,
   "CustType": "personal"
 },
 {
   "Latitude": -6.756870872,
   "Longitude": 39.24009077,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.623731742,
   "Longitude": 39.12655369,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7937497,
   "Longitude": 39.2417088,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.749094342,
   "Longitude": 39.19904172,
   "CustType": "personal"
 },
 {
   "Latitude": -6.662430588,
   "Longitude": 39.19959785,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.667964363,
   "Longitude": 39.18332724,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7533349,
   "Longitude": 39.1915605,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.811392,
   "Longitude": 39.2091917,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.730411126,
   "Longitude": 39.15461561,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7778201,
   "Longitude": 39.2462561,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6867666,
   "Longitude": 39.21258,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.150066302,
   "Longitude": 36.07544845,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8081428,
   "Longitude": 39.2610974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.718711105,
   "Longitude": 39.19596996,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7941752,
   "Longitude": 39.259303,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9047966,
   "Longitude": 39.2510121,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7524366,
   "Longitude": 39.276258,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6703915,
   "Longitude": 39.1915114,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.822012,
   "Longitude": 39.2731011,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.792452628,
   "Longitude": 39.21693846,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.791781,
   "Longitude": 39.255707,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.742128066,
   "Longitude": 39.08832139,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6606721,
   "Longitude": 39.1862368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.672171258,
   "Longitude": 39.19754283,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8053895,
   "Longitude": 39.2742613,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8266621,
   "Longitude": 39.2609775,
   "CustType": "personal"
 },
 {
   "Latitude": -6.706883095,
   "Longitude": 39.20412425,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7276589,
   "Longitude": 39.1916755,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8020483,
   "Longitude": 39.2604819,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810883758,
   "Longitude": 39.25978839,
   "CustType": "personal"
 },
 {
   "Latitude": -6.791012825,
   "Longitude": 39.08428011,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8071601,
   "Longitude": 39.2622938,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.678442498,
   "Longitude": 39.1557506,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7937497,
   "Longitude": 39.2417088,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7542179,
   "Longitude": 39.1862627,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.753673047,
   "Longitude": 39.19607247,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8020041,
   "Longitude": 39.2431451,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6888918,
   "Longitude": 39.2128033,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.655665304,
   "Longitude": 39.19860232,
   "CustType": "personal"
 },
 {
   "Latitude": -6.808299227,
   "Longitude": 39.25350562,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7995234,
   "Longitude": 39.2658551,
   "CustType": "personal"
 },
 {
   "Latitude": -6.653983453,
   "Longitude": 39.17873703,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7049751,
   "Longitude": 39.2115779,
   "CustType": "personal"
 },
 {
   "Latitude": -6.710763305,
   "Longitude": 39.22822952,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7050894,
   "Longitude": 39.2032573,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.71059744,
   "Longitude": 39.22812564,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7153556,
   "Longitude": 39.1769819,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.796259461,
   "Longitude": 39.2632699,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8210146,
   "Longitude": 39.2771212,
   "CustType": "personal"
 },
 {
   "Latitude": -6.792565528,
   "Longitude": 39.22784848,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819409,
   "Longitude": 39.2771156,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7937497,
   "Longitude": 39.2417088,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6653179,
   "Longitude": 39.1885382,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8074961,
   "Longitude": 39.222528,
   "CustType": "personal"
 },
 {
   "Latitude": -6.715418518,
   "Longitude": 39.20390887,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.717882179,
   "Longitude": 39.23076291,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -4.680141968,
   "Longitude": 31.9226507,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7937497,
   "Longitude": 39.2417088,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.809366,
   "Longitude": 39.2761897,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8163561,
   "Longitude": 39.2417283,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.782942468,
   "Longitude": 39.2245388,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7220226,
   "Longitude": 39.2270569,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.784921801,
   "Longitude": 39.25791555,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.785745,
   "Longitude": 39.2665806,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6514837,
   "Longitude": 39.2002532,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7243394,
   "Longitude": 39.1987338,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7549143,
   "Longitude": 39.0905288,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.776988768,
   "Longitude": 39.23743874,
   "CustType": "personal"
 },
 {
   "Latitude": -6.765400762,
   "Longitude": 39.25477266,
   "CustType": "corporate"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.741535933,
   "Longitude": 39.08784356,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6770076,
   "Longitude": 39.1934183,
   "CustType": "personal"
 },
 {
   "Latitude": -6.792177093,
   "Longitude": 39.23066046,
   "CustType": "personal"
 },
 {
   "Latitude": -6.709279068,
   "Longitude": 39.23219378,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "personal"
 },
 {
   "Latitude": -6.817882,
   "Longitude": 39.2480864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.757661191,
   "Longitude": 39.19537658,
   "CustType": "personal"
 },
 {
   "Latitude": -6.797164449,
   "Longitude": 39.2674501,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7681033,
   "Longitude": 39.0889181,
   "CustType": "personal"
 },
 {
   "Latitude": -6.718884,
   "Longitude": 39.1928704,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.659891323,
   "Longitude": 39.15033995,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.801252,
   "Longitude": 39.2501783,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.667524706,
   "Longitude": 39.16437022,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7029185,
   "Longitude": 39.2035373,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8173007,
   "Longitude": 39.2727113,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.816825221,
   "Longitude": 39.1786313,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.762076664,
   "Longitude": 39.24201797,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8066954,
   "Longitude": 39.2609349,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6271275,
   "Longitude": 39.0897838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818351716,
   "Longitude": 39.27377343,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.797979989,
   "Longitude": 39.26101416,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.709321341,
   "Longitude": 39.20729157,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7108518,
   "Longitude": 39.137912,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.740687878,
   "Longitude": 39.14891124,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7171815,
   "Longitude": 39.1789515,
   "CustType": "personal"
 },
 {
   "Latitude": -6.793170979,
   "Longitude": 39.26872856,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7449832,
   "Longitude": 39.2040535,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7731833,
   "Longitude": 39.21758,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6504008,
   "Longitude": 39.1759469,
   "CustType": "personal"
 },
 {
   "Latitude": -6.705466912,
   "Longitude": 39.11294374,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8187234,
   "Longitude": 39.2757998,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6781666,
   "Longitude": 39.1601152,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.791443909,
   "Longitude": 39.26611683,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.817063363,
   "Longitude": 39.24775377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7772106,
   "Longitude": 39.2403064,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7343264,
   "Longitude": 39.1393789,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6638483,
   "Longitude": 39.1891125,
   "CustType": "personal"
 },
 {
   "Latitude": -6.693073823,
   "Longitude": 39.1702014,
   "CustType": "personal"
 },
 {
   "Latitude": -6.368912986,
   "Longitude": 34.88803983,
   "CustType": "personal"
 },
 {
   "Latitude": -6.740687878,
   "Longitude": 39.14891124,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.783569214,
   "Longitude": 39.17943725,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.368865555,
   "Longitude": 34.88936383,
   "CustType": "personal"
 },
 {
   "Latitude": -6.800606779,
   "Longitude": 39.23077899,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7999216,
   "Longitude": 39.2355206,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8196996,
   "Longitude": 39.2763862,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.762090028,
   "Longitude": 39.24280709,
   "CustType": "personal"
 },
 {
   "Latitude": -6.725472766,
   "Longitude": 39.17243958,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7513392,
   "Longitude": 39.2386172,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.636122748,
   "Longitude": 39.17918462,
   "CustType": "personal"
 },
 {
   "Latitude": -6.624568107,
   "Longitude": 39.17269176,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7552448,
   "Longitude": 39.1659908,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.628913369,
   "Longitude": 39.08597774,
   "CustType": "personal"
 },
 {
   "Latitude": -6.80724592,
   "Longitude": 39.21400151,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6719514,
   "Longitude": 39.2127229,
   "CustType": "personal"
 },
 {
   "Latitude": -6.808053214,
   "Longitude": 39.22314291,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7020705,
   "Longitude": 39.1855982,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6972839,
   "Longitude": 39.1267313,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7311736,
   "Longitude": 39.0709164,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.800629857,
   "Longitude": 39.20802367,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.790847479,
   "Longitude": 39.19763088,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.784306145,
   "Longitude": 39.1695857,
   "CustType": "personal"
 },
 {
   "Latitude": -6.631617,
   "Longitude": 39.188174,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7794383,
   "Longitude": 39.2444113,
   "CustType": "personal"
 },
 {
   "Latitude": -6.796162812,
   "Longitude": 39.20766057,
   "CustType": "personal"
 },
 {
   "Latitude": -6.741809407,
   "Longitude": 39.08853839,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7090954,
   "Longitude": 39.1406018,
   "CustType": "personal"
 },
 {
   "Latitude": -6.783022371,
   "Longitude": 39.22464073,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.802490484,
   "Longitude": 39.25213878,
   "CustType": "personal"
 },
 {
   "Latitude": -6.368854341,
   "Longitude": 34.88882035,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.732558943,
   "Longitude": 39.20658328,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.647562438,
   "Longitude": 39.18925099,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8258105,
   "Longitude": 39.2614184,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.625313553,
   "Longitude": 39.14100329,
   "CustType": "personal"
 },
 {
   "Latitude": -6.815193208,
   "Longitude": 39.22651392,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7922884,
   "Longitude": 39.2632773,
   "CustType": "personal"
 },
 {
   "Latitude": -6.789048167,
   "Longitude": 39.25799446,
   "CustType": "personal"
 },
 {
   "Latitude": -6.79642,
   "Longitude": 39.260605,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8059244,
   "Longitude": 39.2615822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369312949,
   "Longitude": 34.88934749,
   "CustType": "personal"
 },
 {
   "Latitude": -6.705229794,
   "Longitude": 39.22241587,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7468949,
   "Longitude": 39.150965,
   "CustType": "personal"
 },
 {
   "Latitude": -6.757363904,
   "Longitude": 39.12647217,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6245558,
   "Longitude": 39.0901608,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6909098,
   "Longitude": 39.1984472,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8139798,
   "Longitude": 39.2395925,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7323883,
   "Longitude": 39.2064882,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7922299,
   "Longitude": 39.2637102,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7789333,
   "Longitude": 39.23384,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7910274,
   "Longitude": 39.2012107,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7949618,
   "Longitude": 39.2212604,
   "CustType": "personal"
 },
 {
   "Latitude": -7.54772446,
   "Longitude": 32.51579449,
   "CustType": "personal"
 },
 {
   "Latitude": -6.790847479,
   "Longitude": 39.19763088,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.705251181,
   "Longitude": 39.11265951,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.820259223,
   "Longitude": 39.26348012,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.752114452,
   "Longitude": 39.17000826,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.71982858,
   "Longitude": 39.13787358,
   "CustType": "personal"
 },
 {
   "Latitude": -6.719722678,
   "Longitude": 39.13793767,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8049974,
   "Longitude": 39.2023114,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.5792932,
   "Longitude": 39.1340377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.780413529,
   "Longitude": 39.22964171,
   "CustType": "personal"
 },
 {
   "Latitude": -6.76282965,
   "Longitude": 39.18628168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.670505761,
   "Longitude": 39.15956372,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.790943312,
   "Longitude": 39.22264084,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.660089748,
   "Longitude": 39.19378997,
   "CustType": "personal"
 },
 {
   "Latitude": -6.754352,
   "Longitude": 39.1299342,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7879497,
   "Longitude": 39.25300241,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8139798,
   "Longitude": 39.2395925,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6685498,
   "Longitude": 39.1790671,
   "CustType": "personal"
 },
 {
   "Latitude": -6.927577103,
   "Longitude": 39.13351536,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7739842,
   "Longitude": 39.2171136,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.637310598,
   "Longitude": 39.16456729,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.763053356,
   "Longitude": 39.25321092,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.804039158,
   "Longitude": 39.22770999,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7922299,
   "Longitude": 39.2637102,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.732634207,
   "Longitude": 39.20043347,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.631617,
   "Longitude": 39.188174,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.786410248,
   "Longitude": 39.24336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.69471,
   "Longitude": 39.14854,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6081498,
   "Longitude": 39.0824649,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.927232204,
   "Longitude": 39.1339043,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6103745,
   "Longitude": 39.1477669,
   "CustType": "personal"
 },
 {
   "Latitude": -6.787979941,
   "Longitude": 39.13565468,
   "CustType": "personal"
 },
 {
   "Latitude": -6.794191348,
   "Longitude": 39.20528506,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8095685,
   "Longitude": 39.27492374,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7586111,
   "Longitude": 39.1270986,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.789363588,
   "Longitude": 39.2058856,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7233408,
   "Longitude": 39.1855571,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.732556287,
   "Longitude": 39.16792363,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.792050128,
   "Longitude": 39.20136808,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7525699,
   "Longitude": 39.1982611,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818867,
   "Longitude": 39.2731899,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.800916747,
   "Longitude": 39.26544133,
   "CustType": "personal"
 },
 {
   "Latitude": -6.626690855,
   "Longitude": 39.13450778,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6353001,
   "Longitude": 39.164077,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.768089708,
   "Longitude": 39.24681402,
   "CustType": "personal"
 },
 {
   "Latitude": -6.716227139,
   "Longitude": 39.22413565,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7146864,
   "Longitude": 39.2026398,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.791007283,
   "Longitude": 39.26555514,
   "CustType": "personal"
 },
 {
   "Latitude": -6.724961325,
   "Longitude": 39.21157837,
   "CustType": "personal"
 },
 {
   "Latitude": -6.638515,
   "Longitude": 39.097225,
   "CustType": "personal"
 },
 {
   "Latitude": -6.69239273,
   "Longitude": 39.20767064,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7777856,
   "Longitude": 39.2324994,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.830551585,
   "Longitude": 39.25673978,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7354168,
   "Longitude": 39.1053659,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.91024669,
   "Longitude": 39.25618384,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.794709962,
   "Longitude": 39.20807455,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.781472249,
   "Longitude": 39.24196243,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8061665,
   "Longitude": 39.2464466,
   "CustType": "personal"
 },
 {
   "Latitude": -6.724572652,
   "Longitude": 39.21397675,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.736720552,
   "Longitude": 32.38268827,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.704807464,
   "Longitude": 39.13403292,
   "CustType": "personal"
 },
 {
   "Latitude": -6.792919075,
   "Longitude": 39.20391153,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7900324,
   "Longitude": 39.2517151,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.635864426,
   "Longitude": 39.18367641,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6292232,
   "Longitude": 39.1563179,
   "CustType": "personal"
 },
 {
   "Latitude": -6.790763523,
   "Longitude": 39.24350591,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7816717,
   "Longitude": 39.2647899,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.80451105,
   "Longitude": 39.11490167,
   "CustType": "personal"
 },
 {
   "Latitude": -6.719556325,
   "Longitude": 39.22818038,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.778697604,
   "Longitude": 39.25164401,
   "CustType": "personal"
 },
 {
   "Latitude": -6.727092324,
   "Longitude": 39.22917366,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.787685346,
   "Longitude": 39.02741598,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.631617,
   "Longitude": 39.188174,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.767126362,
   "Longitude": 39.26013027,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.796032772,
   "Longitude": 39.25894221,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7077323,
   "Longitude": 39.1861655,
   "CustType": "personal"
 },
 {
   "Latitude": -6.79238159,
   "Longitude": 39.2083168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.798430096,
   "Longitude": 39.20613885,
   "CustType": "personal"
 },
 {
   "Latitude": -6.822149302,
   "Longitude": 39.2742911,
   "CustType": "personal"
 },
 {
   "Latitude": -6.817938736,
   "Longitude": 39.27463174,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.816793,
   "Longitude": 39.2740819,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.740646035,
   "Longitude": 39.14839712,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.755476339,
   "Longitude": 39.24007416,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7418188,
   "Longitude": 39.1188046,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7418283,
   "Longitude": 39.1193952,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.794485614,
   "Longitude": 39.20562567,
   "CustType": "personal"
 },
 {
   "Latitude": -6.785233017,
   "Longitude": 39.25734758,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7881923,
   "Longitude": 39.2421398,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6291044,
   "Longitude": 39.1632358,
   "CustType": "personal"
 },
 {
   "Latitude": -6.801389,
   "Longitude": 39.2082607,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7074539,
   "Longitude": 39.1919491,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8139798,
   "Longitude": 39.2395925,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.768630582,
   "Longitude": 39.22423314,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.821960343,
   "Longitude": 39.28004067,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8300891,
   "Longitude": 39.2535571,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8106069,
   "Longitude": 39.2278399,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7326187,
   "Longitude": 39.168815,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7806927,
   "Longitude": 39.2519805,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -5.036417009,
   "Longitude": 31.48306028,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.796445052,
   "Longitude": 39.23545709,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.740624683,
   "Longitude": 39.17916439,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.785529988,
   "Longitude": 39.16831568,
   "CustType": "personal"
 },
 {
   "Latitude": -6.821081351,
   "Longitude": 39.281407,
   "CustType": "personal"
 },
 {
   "Latitude": -6.816674845,
   "Longitude": 39.2147097,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810385724,
   "Longitude": 39.259547,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.775953,
   "Longitude": 39.242104,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7870282,
   "Longitude": 39.2652678,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8139798,
   "Longitude": 39.2395925,
   "CustType": "personal"
 },
 {
   "Latitude": -6.792831775,
   "Longitude": 39.20823522,
   "CustType": "personal"
 },
 {
   "Latitude": -6.727094,
   "Longitude": 39.2126417,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7067067,
   "Longitude": 39.1283636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818345179,
   "Longitude": 39.27231029,
   "CustType": "personal"
 },
 {
   "Latitude": -6.631617,
   "Longitude": 39.188174,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7877624,
   "Longitude": 39.1036373,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7934483,
   "Longitude": 39.2259128,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.648299538,
   "Longitude": 39.18677057,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.795286781,
   "Longitude": 39.22322109,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8055861,
   "Longitude": 39.2271364,
   "CustType": "personal"
 },
 {
   "Latitude": -6.820905,
   "Longitude": 39.27468,
   "CustType": "personal"
 },
 {
   "Latitude": -6.762477485,
   "Longitude": 39.23692588,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.784846522,
   "Longitude": 39.25072306,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7025363,
   "Longitude": 39.1281699,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7161872,
   "Longitude": 39.1927214,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7959667,
   "Longitude": 39.2008733,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.5948626,
   "Longitude": 39.1582981,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8041779,
   "Longitude": 39.2853394,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7875779,
   "Longitude": 39.0316564,
   "CustType": "personal"
 },
 {
   "Latitude": -6.783098,
   "Longitude": 39.0367446,
   "CustType": "personal"
 },
 {
   "Latitude": -6.796711681,
   "Longitude": 39.16004767,
   "CustType": "personal"
 },
 {
   "Latitude": -6.79150619,
   "Longitude": 39.21842601,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8102817,
   "Longitude": 39.2744117,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.78266888,
   "Longitude": 39.22958349,
   "CustType": "personal"
 },
 {
   "Latitude": -6.762115267,
   "Longitude": 39.24649269,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.73923884,
   "Longitude": 39.22998905,
   "CustType": "personal"
 },
 {
   "Latitude": -6.775442175,
   "Longitude": 39.24396336,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7364856,
   "Longitude": 39.2062428,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.800115993,
   "Longitude": 39.19883251,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7927486,
   "Longitude": 39.2013085,
   "CustType": "personal"
 },
 {
   "Latitude": -6.80256644,
   "Longitude": 39.2066857,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7120183,
   "Longitude": 39.10482,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.752975224,
   "Longitude": 39.23911393,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.810385724,
   "Longitude": 39.259547,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.755989117,
   "Longitude": 39.19193656,
   "CustType": "personal"
 },
 {
   "Latitude": -6.760409277,
   "Longitude": 39.20531273,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.775422418,
   "Longitude": 39.23762055,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8500667,
   "Longitude": 39.2734498,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.705313074,
   "Longitude": 39.11270142,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7735604,
   "Longitude": 39.2712157,
   "CustType": "personal"
 },
 {
   "Latitude": -6.815071611,
   "Longitude": 39.27390508,
   "CustType": "personal"
 },
 {
   "Latitude": -6.815071611,
   "Longitude": 39.27390508,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7029606,
   "Longitude": 39.1273269,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6349867,
   "Longitude": 39.086757,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7590585,
   "Longitude": 39.1879934,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.814859298,
   "Longitude": 39.22971346,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -8.014620785,
   "Longitude": 33.57046246,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8048922,
   "Longitude": 39.2585588,
   "CustType": "personal"
 },
 {
   "Latitude": -6.668818319,
   "Longitude": 39.17659684,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8040405,
   "Longitude": 39.2584391,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8135569,
   "Longitude": 39.23955495,
   "CustType": "personal"
 },
 {
   "Latitude": -6.655021,
   "Longitude": 39.1824448,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6928983,
   "Longitude": 39.1330483,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.601748878,
   "Longitude": 39.14041496,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7351157,
   "Longitude": 39.1789721,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.632424372,
   "Longitude": 39.15063858,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7826684,
   "Longitude": 39.2587791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6594515,
   "Longitude": 39.1428736,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7531074,
   "Longitude": 39.1287375,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.620530979,
   "Longitude": 39.12686348,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.653014468,
   "Longitude": 39.18374461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7171189,
   "Longitude": 39.1989107,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.62573194,
   "Longitude": 39.15012875,
   "CustType": "personal"
 },
 {
   "Latitude": -6.800989985,
   "Longitude": 39.22694672,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6934503,
   "Longitude": 39.2128161,
   "CustType": "personal"
 },
 {
   "Latitude": -6.622984814,
   "Longitude": 39.12517637,
   "CustType": "personal"
 },
 {
   "Latitude": -6.72285766,
   "Longitude": 39.23019635,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7775857,
   "Longitude": 39.2452208,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.805577648,
   "Longitude": 39.25683522,
   "CustType": "personal"
 },
 {
   "Latitude": -6.741433882,
   "Longitude": 39.18441437,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7714891,
   "Longitude": 39.2700268,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.718873147,
   "Longitude": 39.12852884,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6060193,
   "Longitude": 39.1540555,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101322,
   "Longitude": 39.2751593,
   "CustType": "personal"
 },
 {
   "Latitude": -6.65590609,
   "Longitude": 39.08101745,
   "CustType": "personal"
 },
 {
   "Latitude": -6.762049752,
   "Longitude": 39.21505672,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8034861,
   "Longitude": 39.189292,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.801639407,
   "Longitude": 39.24973057,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7775857,
   "Longitude": 39.2452208,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7916814,
   "Longitude": 39.2703838,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.788918108,
   "Longitude": 39.2364756,
   "CustType": "personal"
 },
 {
   "Latitude": -6.670750571,
   "Longitude": 39.16750411,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7754381,
   "Longitude": 39.2272243,
   "CustType": "personal"
 },
 {
   "Latitude": -6.776827606,
   "Longitude": 39.11022169,
   "CustType": "personal"
 },
 {
   "Latitude": -6.792777336,
   "Longitude": 39.21767331,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.661474589,
   "Longitude": 39.20034528,
   "CustType": "personal"
 },
 {
   "Latitude": -6.785876068,
   "Longitude": 39.22294392,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -4.659619675,
   "Longitude": 31.81139921,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7928103,
   "Longitude": 39.2185358,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6987403,
   "Longitude": 39.2257087,
   "CustType": "personal"
 },
 {
   "Latitude": -6.782740046,
   "Longitude": 39.1767633,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -7.620668786,
   "Longitude": 38.519151,
   "CustType": "personal"
 },
 {
   "Latitude": -6.802652284,
   "Longitude": 39.2094241,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.781118011,
   "Longitude": 39.26392972,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.789663024,
   "Longitude": 39.20612164,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.631617,
   "Longitude": 39.188174,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.77860195,
   "Longitude": 39.25141921,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.77712124,
   "Longitude": 39.22402788,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8236715,
   "Longitude": 39.2725405,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7879168,
   "Longitude": 39.0557071,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8120816,
   "Longitude": 39.2748591,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7513047,
   "Longitude": 39.0785684,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.652074912,
   "Longitude": 39.1767294,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.74152774,
   "Longitude": 39.08778581,
   "CustType": "personal"
 },
 {
   "Latitude": -6.792478224,
   "Longitude": 39.20882129,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8093167,
   "Longitude": 39.22078,
   "CustType": "personal"
 },
 {
   "Latitude": -6.625555874,
   "Longitude": 39.08628181,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8125803,
   "Longitude": 39.218944,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8139202,
   "Longitude": 39.2428762,
   "CustType": "personal"
 },
 {
   "Latitude": -6.78523568,
   "Longitude": 39.25734758,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819626089,
   "Longitude": 39.2783049,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.78734042,
   "Longitude": 39.26374675,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8248683,
   "Longitude": 39.1158483,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.617360425,
   "Longitude": 39.12355363,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8139798,
   "Longitude": 39.2395925,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6682195,
   "Longitude": 39.1592994,
   "CustType": "personal"
 },
 {
   "Latitude": -6.772799999,
   "Longitude": 39.235847,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7760035,
   "Longitude": 39.2414156,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.645829631,
   "Longitude": 35.89749771,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6876555,
   "Longitude": 39.1445349,
   "CustType": "personal"
 },
 {
   "Latitude": -6.772039774,
   "Longitude": 39.11730085,
   "CustType": "personal"
 },
 {
   "Latitude": -4.59253126,
   "Longitude": 32.36206954,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.787452203,
   "Longitude": 39.21180771,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8012978,
   "Longitude": 39.2588326,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8070062,
   "Longitude": 39.260872,
   "CustType": "personal"
 },
 {
   "Latitude": -6.796799036,
   "Longitude": 39.23414312,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.346316455,
   "Longitude": 35.81177658,
   "CustType": "personal"
 },
 {
   "Latitude": -6.617075929,
   "Longitude": 39.12371591,
   "CustType": "personal"
 },
 {
   "Latitude": -6.668872819,
   "Longitude": 39.12761737,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.78665795,
   "Longitude": 39.17662161,
   "CustType": "personal"
 },
 {
   "Latitude": -6.746711834,
   "Longitude": 39.28483983,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.824916378,
   "Longitude": 39.26237941,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.768511198,
   "Longitude": 39.22631675,
   "CustType": "personal"
 },
 {
   "Latitude": -6.673111571,
   "Longitude": 39.19519891,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -4.852868495,
   "Longitude": 33.68011133,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7157473,
   "Longitude": 39.2251412,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.824376142,
   "Longitude": 39.27017064,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7824037,
   "Longitude": 39.2502247,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7876198,
   "Longitude": 39.0375309,
   "CustType": "personal"
 },
 {
   "Latitude": -7.183362612,
   "Longitude": 38.91407887,
   "CustType": "personal"
 },
 {
   "Latitude": -6.823720598,
   "Longitude": 39.27328527,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9047966,
   "Longitude": 39.2510121,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.783907019,
   "Longitude": 39.22197829,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.745262707,
   "Longitude": 39.122466,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.777346169,
   "Longitude": 39.15323521,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077377,
   "Longitude": 39.0818149,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.793936431,
   "Longitude": 39.25831546,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810193967,
   "Longitude": 39.25625861,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.746801,
   "Longitude": 39.168086,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.723195252,
   "Longitude": 39.23022777,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8125803,
   "Longitude": 39.218944,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7993354,
   "Longitude": 39.126839,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810071263,
   "Longitude": 39.27457315,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7912689,
   "Longitude": 39.25731606,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.783023626,
   "Longitude": 39.22482013,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7620444,
   "Longitude": 39.2418168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.796110312,
   "Longitude": 39.22720492,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6770858,
   "Longitude": 39.2021273,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7885576,
   "Longitude": 39.261864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7573454,
   "Longitude": 39.2760939,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803774,
   "Longitude": 39.2108402,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.770166822,
   "Longitude": 39.26105195,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.762247903,
   "Longitude": 39.09409753,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7417146,
   "Longitude": 39.1851248,
   "CustType": "personal"
 },
 {
   "Latitude": -6.637932875,
   "Longitude": 39.16230236,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8070996,
   "Longitude": 39.2604872,
   "CustType": "personal"
 },
 {
   "Latitude": -6.787193292,
   "Longitude": 39.14578915,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7947101,
   "Longitude": 39.2456471,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7047137,
   "Longitude": 39.198806,
   "CustType": "personal"
 },
 {
   "Latitude": -6.623269492,
   "Longitude": 39.11889325,
   "CustType": "personal"
 },
 {
   "Latitude": -7.211704694,
   "Longitude": 32.09831402,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -7.025263616,
   "Longitude": 32.44987652,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7580014,
   "Longitude": 39.0360102,
   "CustType": "personal"
 },
 {
   "Latitude": -6.741514629,
   "Longitude": 39.08725644,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6527752,
   "Longitude": 39.18197,
   "CustType": "personal"
 },
 {
   "Latitude": -6.78538641,
   "Longitude": 39.24683125,
   "CustType": "personal"
 },
 {
   "Latitude": -6.79238159,
   "Longitude": 39.2083168,
   "CustType": "personal"
 },
 {
   "Latitude": -6.795635839,
   "Longitude": 39.13608381,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.740832075,
   "Longitude": 39.2084751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.720459559,
   "Longitude": 39.17753577,
   "CustType": "personal"
 },
 {
   "Latitude": -6.716050984,
   "Longitude": 39.22999173,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7550289,
   "Longitude": 39.19244,
   "CustType": "personal"
 },
 {
   "Latitude": -6.813775071,
   "Longitude": 39.23402647,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.807545978,
   "Longitude": 39.2602781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6263698,
   "Longitude": 39.0886468,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818737708,
   "Longitude": 39.27337646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.77727997,
   "Longitude": 39.22884911,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.690773,
   "Longitude": 39.1996225,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8139798,
   "Longitude": 39.2395925,
   "CustType": "personal"
 },
 {
   "Latitude": -6.797125026,
   "Longitude": 39.20226094,
   "CustType": "personal"
 },
 {
   "Latitude": -6.790413245,
   "Longitude": 39.20847125,
   "CustType": "personal"
 },
 {
   "Latitude": -6.797985316,
   "Longitude": 39.20709372,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8090633,
   "Longitude": 39.2219019,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.769645083,
   "Longitude": 39.26379427,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8221031,
   "Longitude": 39.2762864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6173653,
   "Longitude": 39.1235548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8031358,
   "Longitude": 39.2439264,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.725552174,
   "Longitude": 39.21930587,
   "CustType": "personal"
 },
 {
   "Latitude": -6.802232012,
   "Longitude": 39.24784184,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7473712,
   "Longitude": 39.2816971,
   "CustType": "personal"
 },
 {
   "Latitude": -6.779434598,
   "Longitude": 39.16018201,
   "CustType": "personal"
 },
 {
   "Latitude": -6.796029112,
   "Longitude": 39.26464226,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.792477707,
   "Longitude": 39.25721388,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.814941029,
   "Longitude": 39.27544413,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7826184,
   "Longitude": 39.2466031,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8011542,
   "Longitude": 39.2480912,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.924303546,
   "Longitude": 39.13261103,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.812998524,
   "Longitude": 39.26273789,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9088305,
   "Longitude": 39.1201715,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7672382,
   "Longitude": 39.2257372,
   "CustType": "personal"
 },
 {
   "Latitude": -6.616736969,
   "Longitude": 39.132936,
   "CustType": "personal"
 },
 {
   "Latitude": -6.699761037,
   "Longitude": 39.18072331,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8078804,
   "Longitude": 39.2396485,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8279881,
   "Longitude": 39.2568782,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.753747204,
   "Longitude": 39.12366881,
   "CustType": "personal"
 },
 {
   "Latitude": -6.78514542,
   "Longitude": 39.25809574,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.759962702,
   "Longitude": 39.1152943,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.6678592,
   "Longitude": 39.1269236,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7054909,
   "Longitude": 39.2259909,
   "CustType": "personal"
 },
 {
   "Latitude": -6.79248416,
   "Longitude": 39.24890557,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.368044691,
   "Longitude": 34.88972964,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8190599,
   "Longitude": 39.2440886,
   "CustType": "personal"
 },
 {
   "Latitude": -7.429223951,
   "Longitude": 34.04287473,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.626772,
   "Longitude": 39.1245885,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "corporate"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6566807,
   "Longitude": 39.2005877,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7231168,
   "Longitude": 39.2299377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8248637,
   "Longitude": 39.2624789,
   "CustType": "personal"
 },
 {
   "Latitude": -6.728062451,
   "Longitude": 39.11185309,
   "CustType": "personal"
 },
 {
   "Latitude": -6.779723247,
   "Longitude": 39.21797553,
   "CustType": "personal"
 },
 {
   "Latitude": -6.805738781,
   "Longitude": 39.26108454,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.796557757,
   "Longitude": 39.20969009,
   "CustType": "personal"
 },
 {
   "Latitude": -6.78317685,
   "Longitude": 39.22424376,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.73044964,
   "Longitude": 39.14026098,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7381111,
   "Longitude": 39.2080983,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7946846,
   "Longitude": 39.2199506,
   "CustType": "personal"
 },
 {
   "Latitude": -6.721530955,
   "Longitude": 39.16940957,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7937497,
   "Longitude": 39.2417088,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7951167,
   "Longitude": 39.26593,
   "CustType": "personal"
 },
 {
   "Latitude": -6.791834517,
   "Longitude": 39.20811575,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6302258,
   "Longitude": 39.1751554,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810818909,
   "Longitude": 39.2201448,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6157692,
   "Longitude": 39.0859494,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7988635,
   "Longitude": 39.268472,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.720563446,
   "Longitude": 39.20910135,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.79251631,
   "Longitude": 39.12348845,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7543065,
   "Longitude": 39.1232115,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7099306,
   "Longitude": 39.1728281,
   "CustType": "personal"
 },
 {
   "Latitude": -6.787412752,
   "Longitude": 39.22059581,
   "CustType": "personal"
 },
 {
   "Latitude": -6.831355763,
   "Longitude": 39.26257173,
   "CustType": "personal"
 },
 {
   "Latitude": -6.740606091,
   "Longitude": 39.14853405,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8137597,
   "Longitude": 39.272657,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.617360425,
   "Longitude": 39.12355363,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7044137,
   "Longitude": 39.1926609,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": -6.774057165,
   "Longitude": 39.23359931,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8127126,
   "Longitude": 39.2349912,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6621699,
   "Longitude": 39.1820215,
   "CustType": "personal"
 },
 {
   "Latitude": -6.631614437,
   "Longitude": 39.18817341,
   "CustType": "personal"
 },
 {
   "Latitude": -6.790741956,
   "Longitude": 39.25680867,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7863201,
   "Longitude": 39.1974934,
   "CustType": "personal"
 },
 {
   "Latitude": -6.738017889,
   "Longitude": 39.17906342,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -7.722756656,
   "Longitude": 33.83423751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.675257019,
   "Longitude": 39.17263577,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7226817,
   "Longitude": 39.1429013,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7518478,
   "Longitude": 39.1981619,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7575038,
   "Longitude": 39.1951781,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.689472838,
   "Longitude": 39.21259472,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8033994,
   "Longitude": 39.2583559,
   "CustType": "personal"
 },
 {
   "Latitude": -6.73261,
   "Longitude": 39.2132625,
   "CustType": "personal"
 },
 {
   "Latitude": -6.753807695,
   "Longitude": 39.13045472,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.726600275,
   "Longitude": 39.1424758,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6614771,
   "Longitude": 39.2003461,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7925196,
   "Longitude": 39.2086751,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7405999,
   "Longitude": 39.1489979,
   "CustType": "personal"
 },
 {
   "Latitude": -6.773140925,
   "Longitude": 39.23406333,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7971123,
   "Longitude": 39.2336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.821241144,
   "Longitude": 39.27289367,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.791231007,
   "Longitude": 39.20363903,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810882243,
   "Longitude": 39.2588279,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7271309,
   "Longitude": 39.2071368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.760968115,
   "Longitude": 39.20289282,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7334688,
   "Longitude": 39.1457533,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7625848,
   "Longitude": 39.2263699,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.761847597,
   "Longitude": 39.24218774,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7911512,
   "Longitude": 39.2151918,
   "CustType": "personal"
 },
 {
   "Latitude": -6.797641,
   "Longitude": 39.2780489,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8038095,
   "Longitude": 39.166302,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.786156043,
   "Longitude": 39.22544025,
   "CustType": "personal"
 },
 {
   "Latitude": -72.89814307,
   "Longitude": 49.13161975,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.60820018,
   "Longitude": 39.11465004,
   "CustType": "personal"
 },
 {
   "Latitude": -6.780673215,
   "Longitude": 39.22389507,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7851658,
   "Longitude": 39.2574864,
   "CustType": "personal"
 },
 {
   "Latitude": -6.620055278,
   "Longitude": 39.08915983,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.6221302,
   "Longitude": 39.0880648,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7904705,
   "Longitude": 39.2506594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7414821,
   "Longitude": 39.0881198,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7829438,
   "Longitude": 39.2245606,
   "CustType": "personal"
 },
 {
   "Latitude": -6.789931271,
   "Longitude": 39.12368774,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7742732,
   "Longitude": 39.2334023,
   "CustType": "personal"
 },
 {
   "Latitude": -6.796091269,
   "Longitude": 39.23225303,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7934296,
   "Longitude": 39.2674753,
   "CustType": "personal"
 },
 {
   "Latitude": -6.759056187,
   "Longitude": 39.10652161,
   "CustType": "personal"
 },
 {
   "Latitude": -6.72154,
   "Longitude": 39.217215,
   "CustType": "personal"
 },
 {
   "Latitude": -6.754873819,
   "Longitude": 39.28370949,
   "CustType": "personal"
 },
 {
   "Latitude": -6.808501585,
   "Longitude": 39.23361583,
   "CustType": "personal"
 },
 {
   "Latitude": -6.763925,
   "Longitude": 39.222275,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8065761,
   "Longitude": 39.2617152,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819387057,
   "Longitude": 39.27327973,
   "CustType": "personal"
 },
 {
   "Latitude": -6.927491899,
   "Longitude": 39.13355827,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.815600216,
   "Longitude": 39.27283534,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.826573637,
   "Longitude": 39.26900374,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8055176,
   "Longitude": 39.2737513,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8299879,
   "Longitude": 39.2650951,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8013248,
   "Longitude": 39.2562975,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208858,
   "Longitude": 39.2774268,
   "CustType": "personal"
 },
 {
   "Latitude": -7.35851888,
   "Longitude": 36.61020812,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.799838,
   "Longitude": 39.2492884,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141538,
   "Longitude": 39.2602892,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.798368893,
   "Longitude": 39.2488159,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7981172,
   "Longitude": 39.2576197,
   "CustType": "personal"
 },
 {
   "Latitude": -6.806843046,
   "Longitude": 39.26059677,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7985148,
   "Longitude": 39.2577233,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8007226,
   "Longitude": 39.254466,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.831446506,
   "Longitude": 39.25367832,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8103369,
   "Longitude": 39.2616734,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8039033,
   "Longitude": 39.2533018,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810306845,
   "Longitude": 39.26455825,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.819649465,
   "Longitude": 39.27281155,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8034466,
   "Longitude": 39.2584757,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8000398,
   "Longitude": 39.2520829,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.826456,
   "Longitude": 39.2548149,
   "CustType": "personal"
 },
 {
   "Latitude": -6.927491899,
   "Longitude": 39.13355827,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8070062,
   "Longitude": 39.260872,
   "CustType": "personal"
 },
 {
   "Latitude": -6.870951082,
   "Longitude": 39.24278663,
   "CustType": "personal"
 },
 {
   "Latitude": -6.992174,
   "Longitude": 39.5313165,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819934127,
   "Longitude": 39.27153178,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.820356428,
   "Longitude": 39.27329112,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.81528846,
   "Longitude": 39.29115657,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810539044,
   "Longitude": 39.25322559,
   "CustType": "personal"
 },
 {
   "Latitude": -6.931155661,
   "Longitude": 39.13300037,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.835494502,
   "Longitude": 39.24789548,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.814923737,
   "Longitude": 39.27374095,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7999183,
   "Longitude": 39.2461233,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819503388,
   "Longitude": 39.27252187,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.813323,
   "Longitude": 39.2721028,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.787907086,
   "Longitude": 39.20878887,
   "CustType": "personal"
 },
 {
   "Latitude": -6.836557064,
   "Longitude": 39.27208746,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.808615393,
   "Longitude": 39.25652716,
   "CustType": "personal"
 },
 {
   "Latitude": -6.811238003,
   "Longitude": 39.25319121,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.814313801,
   "Longitude": 39.27540729,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8063916,
   "Longitude": 39.2530929,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.811005778,
   "Longitude": 39.25976516,
   "CustType": "personal"
 },
 {
   "Latitude": -6.805776497,
   "Longitude": 39.24390147,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.825091441,
   "Longitude": 39.28278039,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8240883,
   "Longitude": 39.266875,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8296085,
   "Longitude": 39.267092,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8068513,
   "Longitude": 39.2599753,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.910540314,
   "Longitude": 39.24948925,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818327569,
   "Longitude": 39.2872113,
   "CustType": "personal"
 },
 {
   "Latitude": -5.576630382,
   "Longitude": 32.66960308,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8041436,
   "Longitude": 39.2822323,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.832411903,
   "Longitude": 39.25831318,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8074209,
   "Longitude": 39.2618228,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.801639421,
   "Longitude": 39.2466563,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8279836,
   "Longitude": 39.2568078,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208694,
   "Longitude": 39.2773312,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8013924,
   "Longitude": 39.2477892,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818843,
   "Longitude": 39.2774416,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8216571,
   "Longitude": 39.2774058,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.896448761,
   "Longitude": 39.25130815,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8055176,
   "Longitude": 39.2737513,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8098093,
   "Longitude": 39.2746824,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8068168,
   "Longitude": 39.2596014,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.927491899,
   "Longitude": 39.13355827,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.821832379,
   "Longitude": 39.27641273,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.907904435,
   "Longitude": 39.23946156,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8296481,
   "Longitude": 39.2552511,
   "CustType": "personal"
 },
 {
   "Latitude": -6.800300263,
   "Longitude": 39.24958685,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818493423,
   "Longitude": 39.28278775,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.92750255,
   "Longitude": 39.13357437,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.801418213,
   "Longitude": 39.26052148,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.927587754,
   "Longitude": 39.13355425,
   "CustType": "personal"
 },
 {
   "Latitude": -6.873562589,
   "Longitude": 39.24723832,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.822012,
   "Longitude": 39.2731011,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.826530276,
   "Longitude": 39.26134139,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8276037,
   "Longitude": 39.2585182,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8203976,
   "Longitude": 39.2720842,
   "CustType": "personal"
 },
 {
   "Latitude": -6.806003414,
   "Longitude": 39.2627417,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.914957226,
   "Longitude": 39.25099306,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8046435,
   "Longitude": 39.2577228,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8055176,
   "Longitude": 39.2737513,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.823264085,
   "Longitude": 39.27073246,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8064692,
   "Longitude": 39.2601919,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803607547,
   "Longitude": 39.25150969,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8027132,
   "Longitude": 39.2455321,
   "CustType": "personal"
 },
 {
   "Latitude": -6.825587832,
   "Longitude": 39.2750934,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.804792796,
   "Longitude": 39.28116024,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8298963,
   "Longitude": 39.2653366,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8293589,
   "Longitude": 39.2665059,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369026276,
   "Longitude": 34.88912478,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8061552,
   "Longitude": 39.2620824,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8298963,
   "Longitude": 39.2653366,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.814215772,
   "Longitude": 39.27402509,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.808712644,
   "Longitude": 39.25494358,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.926837833,
   "Longitude": 39.17722062,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141538,
   "Longitude": 39.2602892,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.049194299,
   "Longitude": 35.3398108,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8139,
   "Longitude": 39.260015,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.838530476,
   "Longitude": 39.19368267,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8265381,
   "Longitude": 39.2639898,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8265381,
   "Longitude": 39.2639898,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.811510427,
   "Longitude": 39.2730028,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.819355578,
   "Longitude": 39.27334428,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.828578964,
   "Longitude": 39.27978402,
   "CustType": "personal"
 },
 {
   "Latitude": -7.097235566,
   "Longitude": 39.43621874,
   "CustType": "personal"
 },
 {
   "Latitude": -6.809446705,
   "Longitude": 39.28080599,
   "CustType": "personal"
 },
 {
   "Latitude": -6.809446705,
   "Longitude": 39.28080599,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.800839,
   "Longitude": 39.2490263,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.802817944,
   "Longitude": 39.25863504,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.805930443,
   "Longitude": 39.26089011,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8115067,
   "Longitude": 39.2628483,
   "CustType": "personal"
 },
 {
   "Latitude": -3.62541672,
   "Longitude": 30.58517863,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.83098,
   "Longitude": 39.25285,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8272969,
   "Longitude": 39.259852,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8175783,
   "Longitude": 39.2478388,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8245999,
   "Longitude": 39.2554083,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.81074793,
   "Longitude": 39.2592895,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8322474,
   "Longitude": 39.2602216,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8212529,
   "Longitude": 39.2396626,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "corporate"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -3.625266339,
   "Longitude": 30.58572829,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.804807948,
   "Longitude": 39.27469646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047022,
   "Longitude": 39.2600994,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -3.625266339,
   "Longitude": 30.58572829,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8240177,
   "Longitude": 39.2735067,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8170177,
   "Longitude": 39.2502775,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8149634,
   "Longitude": 39.2771683,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818071898,
   "Longitude": 39.24735904,
   "CustType": "personal"
 },
 {
   "Latitude": -6.833675908,
   "Longitude": 39.25659565,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.927398326,
   "Longitude": 39.13397133,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819896889,
   "Longitude": 39.27251116,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.798441559,
   "Longitude": 39.25762683,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8134387,
   "Longitude": 39.26015,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8055176,
   "Longitude": 39.2737513,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8055176,
   "Longitude": 39.2737513,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8032855,
   "Longitude": 39.2523957,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8151116,
   "Longitude": 39.2615797,
   "CustType": "personal"
 },
 {
   "Latitude": -6.822514507,
   "Longitude": 39.27551981,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8021206,
   "Longitude": 39.2447072,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8281778,
   "Longitude": 39.25673873,
   "CustType": "personal"
 },
 {
   "Latitude": -6.805550374,
   "Longitude": 39.26235448,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8203873,
   "Longitude": 39.2712439,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8098914,
   "Longitude": 39.2475955,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.815456859,
   "Longitude": 39.27113466,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8185285,
   "Longitude": 39.2749622,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819690569,
   "Longitude": 39.27319783,
   "CustType": "personal"
 },
 {
   "Latitude": -7.307695361,
   "Longitude": 40.13967223,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.825900837,
   "Longitude": 39.28299007,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.809157841,
   "Longitude": 39.26400279,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810359091,
   "Longitude": 39.26023364,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8031873,
   "Longitude": 39.2609657,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8086186,
   "Longitude": 39.2402542,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.822699198,
   "Longitude": 39.27766468,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.805533245,
   "Longitude": 39.26187549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9138119,
   "Longitude": 39.244615,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9095277,
   "Longitude": 39.2404779,
   "CustType": "personal"
 },
 {
   "Latitude": -6.814806754,
   "Longitude": 39.28001761,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8166481,
   "Longitude": 39.2728133,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208768,
   "Longitude": 39.2717624,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8959404,
   "Longitude": 39.1613696,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8040632,
   "Longitude": 39.2758067,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810665855,
   "Longitude": 39.25986353,
   "CustType": "personal"
 },
 {
   "Latitude": -6.822227252,
   "Longitude": 39.27556155,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8055176,
   "Longitude": 39.2737513,
   "CustType": "corporate"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810667606,
   "Longitude": 39.25933269,
   "CustType": "personal"
 },
 {
   "Latitude": -6.927555802,
   "Longitude": 39.13355827,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8168055,
   "Longitude": 39.2518589,
   "CustType": "personal"
 },
 {
   "Latitude": -6.821020097,
   "Longitude": 39.27212656,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810987625,
   "Longitude": 39.26028192,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8297066,
   "Longitude": 39.2618354,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168689,
   "Longitude": 39.2846041,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.927491899,
   "Longitude": 39.13355827,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.822531474,
   "Longitude": 39.27345425,
   "CustType": "personal"
 },
 {
   "Latitude": -6.927491899,
   "Longitude": 39.13355827,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8169812,
   "Longitude": 39.2503857,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.822328896,
   "Longitude": 39.27538488,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8035839,
   "Longitude": 39.2599104,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.812793326,
   "Longitude": 39.27379489,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.822260304,
   "Longitude": 39.27297574,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819787812,
   "Longitude": 39.2729576,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819358242,
   "Longitude": 39.27334428,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.92750255,
   "Longitude": 39.13357437,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819691494,
   "Longitude": 39.27913603,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.81086794,
   "Longitude": 39.263793,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819801089,
   "Longitude": 39.27923115,
   "CustType": "personal"
 },
 {
   "Latitude": -6.821827053,
   "Longitude": 39.30165768,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8305256,
   "Longitude": 39.263834,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8258105,
   "Longitude": 39.2614184,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8189698,
   "Longitude": 39.2730447,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369202425,
   "Longitude": 34.88900188,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8006234,
   "Longitude": 39.2571101,
   "CustType": "personal"
 },
 {
   "Latitude": -6.823265189,
   "Longitude": 39.27202329,
   "CustType": "personal"
 },
 {
   "Latitude": -6.823331167,
   "Longitude": 39.27371616,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.925213957,
   "Longitude": 39.13235327,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.819994754,
   "Longitude": 39.27686334,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.833638219,
   "Longitude": 39.25532887,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8218084,
   "Longitude": 39.2783537,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.820442607,
   "Longitude": 39.26292057,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.818016604,
   "Longitude": 39.28970559,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.821685,
   "Longitude": 39.2730317,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8200078,
   "Longitude": 39.247726,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.807009478,
   "Longitude": 39.25983338,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8212456,
   "Longitude": 39.2421695,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -7.293135453,
   "Longitude": 39.00246964,
   "CustType": "personal"
 },
 {
   "Latitude": -6.892684747,
   "Longitude": 39.23389435,
   "CustType": "personal"
 },
 {
   "Latitude": -6.823572044,
   "Longitude": 39.27354547,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197145,
   "Longitude": 39.2718018,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8182818,
   "Longitude": 39.2743933,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.812386219,
   "Longitude": 39.32985887,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -5.981905309,
   "Longitude": 35.04814951,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803959178,
   "Longitude": 39.27584544,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.814451564,
   "Longitude": 39.26244851,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.806581083,
   "Longitude": 39.24255809,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8077292,
   "Longitude": 39.2609985,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8040405,
   "Longitude": 39.2584391,
   "CustType": "personal"
 },
 {
   "Latitude": -6.821225165,
   "Longitude": 39.28611159,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8224134,
   "Longitude": 39.2796195,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.927166792,
   "Longitude": 39.13370579,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819609115,
   "Longitude": 39.27263528,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.874415744,
   "Longitude": 39.24402373,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.821225165,
   "Longitude": 39.28611159,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8005539,
   "Longitude": 39.2836054,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8316517,
   "Longitude": 39.2584533,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.812032894,
   "Longitude": 39.25976436,
   "CustType": "personal"
 },
 {
   "Latitude": -6.811301892,
   "Longitude": 39.26038384,
   "CustType": "personal"
 },
 {
   "Latitude": -6.830395444,
   "Longitude": 39.26254683,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.82811221,
   "Longitude": 39.25684869,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8076225,
   "Longitude": 39.260646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810072629,
   "Longitude": 39.25623985,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -55.61661596,
   "Longitude": 17.03106605,
   "CustType": "personal"
 },
 {
   "Latitude": -6.354671084,
   "Longitude": 33.78332273,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7981172,
   "Longitude": 39.2576197,
   "CustType": "personal"
 },
 {
   "Latitude": -6.82800649,
   "Longitude": 39.26217368,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.818261646,
   "Longitude": 39.24437524,
   "CustType": "personal"
 },
 {
   "Latitude": -6.934418297,
   "Longitude": 39.2480287,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.939605427,
   "Longitude": 39.15005204,
   "CustType": "corporate"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.821571469,
   "Longitude": 39.28346418,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.925983516,
   "Longitude": 39.13293166,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.821416917,
   "Longitude": 39.28486168,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9207231,
   "Longitude": 39.2546496,
   "CustType": "personal"
 },
 {
   "Latitude": -6.802286091,
   "Longitude": 39.25289372,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.811331188,
   "Longitude": 39.25569534,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819286,
   "Longitude": 39.2711848,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.826302579,
   "Longitude": 39.26124096,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.814978214,
   "Longitude": 39.2595146,
   "CustType": "personal"
 },
 {
   "Latitude": -7.821750089,
   "Longitude": 32.72735035,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.831217631,
   "Longitude": 39.2617209,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.824011351,
   "Longitude": 39.26445825,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.807369954,
   "Longitude": 39.24812197,
   "CustType": "personal"
 },
 {
   "Latitude": -6.927491899,
   "Longitude": 39.13355827,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8017633,
   "Longitude": 39.2600324,
   "CustType": "personal"
 },
 {
   "Latitude": -6.927491899,
   "Longitude": 39.13355827,
   "CustType": "personal"
 },
 {
   "Latitude": -5.731851434,
   "Longitude": 33.95620351,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803830956,
   "Longitude": 39.27563121,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.828655105,
   "Longitude": 39.25258673,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8049167,
   "Longitude": 39.2586631,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8038822,
   "Longitude": 39.2528339,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8062522,
   "Longitude": 39.2538042,
   "CustType": "personal"
 },
 {
   "Latitude": -6.823756435,
   "Longitude": 39.27236114,
   "CustType": "personal"
 },
 {
   "Latitude": -3.478930073,
   "Longitude": 31.61471552,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.927491899,
   "Longitude": 39.13355827,
   "CustType": "personal"
 },
 {
   "Latitude": -6.823510079,
   "Longitude": 39.26408882,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.807798135,
   "Longitude": 39.2626909,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.815056513,
   "Longitude": 39.27449355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.80807486,
   "Longitude": 39.26151451,
   "CustType": "personal"
 },
 {
   "Latitude": -5.394983998,
   "Longitude": 32.84546798,
   "CustType": "personal"
 },
 {
   "Latitude": -6.811916659,
   "Longitude": 39.25395266,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819246386,
   "Longitude": 39.27772969,
   "CustType": "personal"
 },
 {
   "Latitude": -6.812878551,
   "Longitude": 39.26254034,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.931155661,
   "Longitude": 39.13300037,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.827078832,
   "Longitude": 39.26239264,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.901546542,
   "Longitude": 39.16924238,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810769236,
   "Longitude": 39.25962746,
   "CustType": "personal"
 },
 {
   "Latitude": -6.925928656,
   "Longitude": 39.12874041,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.92750255,
   "Longitude": 39.13357437,
   "CustType": "personal"
 },
 {
   "Latitude": -6.805764057,
   "Longitude": 39.24177313,
   "CustType": "personal"
 },
 {
   "Latitude": -6.828830984,
   "Longitude": 39.25985211,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "corporate"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.81100864,
   "Longitude": 39.25961085,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803267254,
   "Longitude": 39.25070635,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.826242617,
   "Longitude": 39.26419108,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.819763136,
   "Longitude": 39.27312984,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -33.41284642,
   "Longitude": 21.59959208,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.811054237,
   "Longitude": 39.26384208,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8282724,
   "Longitude": 39.2584866,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.826002963,
   "Longitude": 39.29985523,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.800877708,
   "Longitude": 39.25885499,
   "CustType": "personal"
 },
 {
   "Latitude": -6.802832,
   "Longitude": 39.247512,
   "CustType": "personal"
 },
 {
   "Latitude": -6.939164715,
   "Longitude": 39.09669399,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8007491,
   "Longitude": 39.2565052,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.809226393,
   "Longitude": 39.2601184,
   "CustType": "personal"
 },
 {
   "Latitude": -6.800624557,
   "Longitude": 39.25674073,
   "CustType": "personal"
 },
 {
   "Latitude": -6.928248442,
   "Longitude": 39.13423731,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8010785,
   "Longitude": 39.2585043,
   "CustType": "personal"
 },
 {
   "Latitude": -6.232092523,
   "Longitude": 33.0541052,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810890176,
   "Longitude": 39.2598745,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.80174258,
   "Longitude": 39.24637849,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.824671363,
   "Longitude": 39.26936388,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803894764,
   "Longitude": 39.25151922,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9173708,
   "Longitude": 39.2507236,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803527994,
   "Longitude": 39.25087392,
   "CustType": "personal"
 },
 {
   "Latitude": -21.1625682,
   "Longitude": 31.89950039,
   "CustType": "personal"
 },
 {
   "Latitude": -6.798528043,
   "Longitude": 39.24814031,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.805106149,
   "Longitude": 39.26144233,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8065379,
   "Longitude": 39.2607667,
   "CustType": "personal"
 },
 {
   "Latitude": -6.812905342,
   "Longitude": 39.25792613,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7994867,
   "Longitude": 39.2403517,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": -6.823313216,
   "Longitude": 39.26745138,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8243584,
   "Longitude": 39.2758949,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.927189439,
   "Longitude": 39.25329468,
   "CustType": "personal"
 },
 {
   "Latitude": -4.512996655,
   "Longitude": 36.75893466,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.821563,
   "Longitude": 39.2823526,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.704744959,
   "Longitude": 39.11042926,
   "CustType": "personal"
 },
 {
   "Latitude": -6.826907,
   "Longitude": 39.2534303,
   "CustType": "personal"
 },
 {
   "Latitude": -6.992174,
   "Longitude": 39.5313165,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.824750204,
   "Longitude": 39.26083772,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.827678792,
   "Longitude": 39.26801286,
   "CustType": "personal"
 },
 {
   "Latitude": -6.807647645,
   "Longitude": 39.25468224,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7983927,
   "Longitude": 39.2368134,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9183545,
   "Longitude": 39.2833639,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9493622,
   "Longitude": 39.4078387,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8036863,
   "Longitude": 39.2453125,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8188703,
   "Longitude": 39.245878,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803109578,
   "Longitude": 39.25228357,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8049605,
   "Longitude": 39.2617896,
   "CustType": "personal"
 },
 {
   "Latitude": -6.806283063,
   "Longitude": 39.25541803,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8126079,
   "Longitude": 39.2591507,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -1.896580191,
   "Longitude": 36.92345412,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.924817647,
   "Longitude": 39.13450654,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.805378184,
   "Longitude": 39.25960294,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.828331479,
   "Longitude": 39.26819218,
   "CustType": "personal"
 },
 {
   "Latitude": -6.822509,
   "Longitude": 39.2599947,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8258978,
   "Longitude": 39.267639,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8258978,
   "Longitude": 39.267639,
   "CustType": "personal"
 },
 {
   "Latitude": -6.802635506,
   "Longitude": 39.28495288,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.810879134,
   "Longitude": 39.27448953,
   "CustType": "personal"
 },
 {
   "Latitude": -6.81063478,
   "Longitude": 39.2602217,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.826615498,
   "Longitude": 39.26421136,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.80199517,
   "Longitude": 39.26870665,
   "CustType": "personal"
 },
 {
   "Latitude": -6.809401189,
   "Longitude": 39.27770579,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8324221,
   "Longitude": 39.2560855,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "corporate"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.929978202,
   "Longitude": 39.13506986,
   "CustType": "personal"
 },
 {
   "Latitude": -6.800547472,
   "Longitude": 39.2583725,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8037456,
   "Longitude": 39.2607347,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7986068,
   "Longitude": 39.258257,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.808201826,
   "Longitude": 39.25704718,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.927668301,
   "Longitude": 39.13378142,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.820926472,
   "Longitude": 39.26317897,
   "CustType": "corporate"
 },
 {
   "Latitude": -23.04166618,
   "Longitude": 31.59247254,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.845390642,
   "Longitude": 39.17685986,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.823053071,
   "Longitude": 39.26709649,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8218745,
   "Longitude": 39.274159,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8167423,
   "Longitude": 39.2773038,
   "CustType": "personal"
 },
 {
   "Latitude": -7.335744995,
   "Longitude": 38.11749916,
   "CustType": "personal"
 },
 {
   "Latitude": -6.80544942,
   "Longitude": 39.25477214,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818685509,
   "Longitude": 39.27292585,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.928088328,
   "Longitude": 39.13467407,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8255908,
   "Longitude": 39.2617767,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9183545,
   "Longitude": 39.2833639,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.809213859,
   "Longitude": 39.24166057,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8055176,
   "Longitude": 39.2737513,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9259546,
   "Longitude": 39.2508561,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.802873,
   "Longitude": 39.2599832,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "corporate"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": 15.150382,
   "Longitude": 30.26001045,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8032972,
   "Longitude": 39.24855392,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819412978,
   "Longitude": 39.24829581,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -11.27111708,
   "Longitude": 31.19332603,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.834658824,
   "Longitude": 39.22099887,
   "CustType": "personal"
 },
 {
   "Latitude": -6.812177576,
   "Longitude": 39.25657728,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": -19.10364825,
   "Longitude": 26.58691406,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.821863573,
   "Longitude": 39.27795888,
   "CustType": "personal"
 },
 {
   "Latitude": -6.924339331,
   "Longitude": 39.13329741,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803445776,
   "Longitude": 39.26083986,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8209572,
   "Longitude": 39.2718042,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "corporate"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819347589,
   "Longitude": 39.27595943,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -3.625841714,
   "Longitude": 30.58590317,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818752927,
   "Longitude": 39.28806344,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.80104311,
   "Longitude": 39.24634541,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8315616,
   "Longitude": 39.26169047,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.87298494,
   "Longitude": 39.23919191,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.820848174,
   "Longitude": 39.27511362,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8264333,
   "Longitude": 39.2649284,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8228581,
   "Longitude": 39.2785973,
   "CustType": "personal"
 },
 {
   "Latitude": -6.927533761,
   "Longitude": 39.13377707,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.805238934,
   "Longitude": 39.25317308,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818348875,
   "Longitude": 39.28949922,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.806011261,
   "Longitude": 39.25344497,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8134804,
   "Longitude": 39.2598447,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803846604,
   "Longitude": 39.2520643,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -8.433814164,
   "Longitude": 33.78437725,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8055176,
   "Longitude": 39.2737513,
   "CustType": "personal"
 },
 {
   "Latitude": -6.807003654,
   "Longitude": 39.25337336,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.924724865,
   "Longitude": 39.1269194,
   "CustType": "corporate"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -15.37392666,
   "Longitude": 25.12632198,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -21.76530858,
   "Longitude": 28.9747137,
   "CustType": "personal"
 },
 {
   "Latitude": -6.81683349,
   "Longitude": 39.27440912,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810118728,
   "Longitude": 39.25252441,
   "CustType": "personal"
 },
 {
   "Latitude": -6.82496472,
   "Longitude": 39.28032046,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8259202,
   "Longitude": 39.2534124,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8166396,
   "Longitude": 39.2498524,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8086985,
   "Longitude": 39.2581335,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": -6.804042844,
   "Longitude": 39.25755721,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819680493,
   "Longitude": 39.27314311,
   "CustType": "personal"
 },
 {
   "Latitude": -6.83098,
   "Longitude": 39.25285,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -21.50347236,
   "Longitude": 29.17318922,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.788503689,
   "Longitude": 39.20969009,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.806273597,
   "Longitude": 39.24266517,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.804430585,
   "Longitude": 39.24828708,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.813712223,
   "Longitude": 39.27364297,
   "CustType": "personal"
 },
 {
   "Latitude": -6.829898,
   "Longitude": 39.2561371,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8021117,
   "Longitude": 39.2485167,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.80015595,
   "Longitude": 39.25939164,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": -6.822423614,
   "Longitude": 39.2765522,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "corporate"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8015101,
   "Longitude": 39.2584714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.732226083,
   "Longitude": 39.33050215,
   "CustType": "personal"
 },
 {
   "Latitude": -6.924637406,
   "Longitude": 39.13125178,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.924984646,
   "Longitude": 39.13281327,
   "CustType": "personal"
 },
 {
   "Latitude": -6.80000338,
   "Longitude": 39.24933289,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.809189588,
   "Longitude": 39.26016032,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.805425,
   "Longitude": 39.2614817,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.821305062,
   "Longitude": 39.27915126,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.829157475,
   "Longitude": 39.26604429,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208804,
   "Longitude": 39.2384554,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.927883618,
   "Longitude": 39.12724634,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8022276,
   "Longitude": 39.2595459,
   "CustType": "personal"
 },
 {
   "Latitude": -6.806280585,
   "Longitude": 39.24621793,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -14.42599771,
   "Longitude": 32.84066246,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.820187761,
   "Longitude": 39.27235887,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9183545,
   "Longitude": 39.2833639,
   "CustType": "personal"
 },
 {
   "Latitude": -6.893650492,
   "Longitude": 39.24952659,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.925076362,
   "Longitude": 39.13138138,
   "CustType": "personal"
 },
 {
   "Latitude": -6.823717935,
   "Longitude": 39.27319944,
   "CustType": "personal"
 },
 {
   "Latitude": -6.826242651,
   "Longitude": 39.26406384,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.86265247,
   "Longitude": 39.23105925,
   "CustType": "personal"
 },
 {
   "Latitude": -6.816122402,
   "Longitude": 39.27440107,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7996837,
   "Longitude": 39.25604799,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.822404971,
   "Longitude": 39.27546591,
   "CustType": "corporate"
 },
 {
   "Latitude": -3.637670712,
   "Longitude": 32.28267597,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.814855476,
   "Longitude": 39.25217628,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.806794216,
   "Longitude": 39.28673714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.830023208,
   "Longitude": 39.265727,
   "CustType": "personal"
 },
 {
   "Latitude": -6.822951654,
   "Longitude": 39.27857655,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8048116,
   "Longitude": 39.2467696,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810845326,
   "Longitude": 39.24788947,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8078384,
   "Longitude": 39.2603339,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810770485,
   "Longitude": 39.25997995,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818985389,
   "Longitude": 39.28688407,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818985389,
   "Longitude": 39.28688407,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8023329,
   "Longitude": 39.2580929,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.837671361,
   "Longitude": 39.27781995,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.809831112,
   "Longitude": 39.25596656,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -4.190152998,
   "Longitude": 32.27241101,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -4.779058628,
   "Longitude": 33.48751556,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810271898,
   "Longitude": 39.25916315,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.809980754,
   "Longitude": 39.26174574,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.822481,
   "Longitude": 39.2766484,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9183545,
   "Longitude": 39.2833639,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.820405365,
   "Longitude": 39.28416514,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -5.2163808,
   "Longitude": 39.7833148,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.806116928,
   "Longitude": 39.24149734,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9183545,
   "Longitude": 39.2833639,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.790706291,
   "Longitude": 39.2503617,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.81640218,
   "Longitude": 39.27481125,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8262604,
   "Longitude": 39.2538731,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8000413,
   "Longitude": 39.2589016,
   "CustType": "personal"
 },
 {
   "Latitude": -6.805011188,
   "Longitude": 39.2806989,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "corporate"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.802704829,
   "Longitude": 39.2520443,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.805952,
   "Longitude": 39.247954,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.810755566,
   "Longitude": 39.25987638,
   "CustType": "personal"
 },
 {
   "Latitude": -6.822682143,
   "Longitude": 39.2629224,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803362902,
   "Longitude": 39.25105326,
   "CustType": "personal"
 },
 {
   "Latitude": -6.824851,
   "Longitude": 39.260886,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.928088328,
   "Longitude": 39.13467407,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": NaN,
   "Longitude": NaN,
   "CustType": "personal"
 },
 {
   "Latitude": -6.806030823,
   "Longitude": 39.25088025,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.823659345,
   "Longitude": 39.27069157,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -9.020818175,
   "Longitude": 31.29646895,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.714519295,
   "Longitude": 39.10926819,
   "CustType": "personal"
 },
 {
   "Latitude": -6.822839075,
   "Longitude": 39.27164376,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9227538,
   "Longitude": 39.2736597,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8089123,
   "Longitude": 39.2773621,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.821058233,
   "Longitude": 39.28261749,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.806032342,
   "Longitude": 39.24147409,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.821785012,
   "Longitude": 39.27038594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.822259227,
   "Longitude": 39.27043618,
   "CustType": "personal"
 },
 {
   "Latitude": -6.949753324,
   "Longitude": 39.13533293,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8281679,
   "Longitude": 39.268718,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.822274126,
   "Longitude": 39.27045657,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.821748978,
   "Longitude": 39.27107355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.887470909,
   "Longitude": 39.16376531,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.824255903,
   "Longitude": 39.27084446,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.992174,
   "Longitude": 39.5313165,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8219171,
   "Longitude": 39.2699477,
   "CustType": "personal"
 },
 {
   "Latitude": -6.992174,
   "Longitude": 39.5313165,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8325971,
   "Longitude": 39.2609213,
   "CustType": "personal"
 },
 {
   "Latitude": -6.824601625,
   "Longitude": 39.28419789,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.807280527,
   "Longitude": 39.24263765,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.804612156,
   "Longitude": 39.24630169,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9689242,
   "Longitude": 39.10545602,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -5.242889235,
   "Longitude": 39.76860423,
   "CustType": "personal"
 },
 {
   "Latitude": -6.827740087,
   "Longitude": 39.26336791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.811191311,
   "Longitude": 39.2478692,
   "CustType": "personal"
 },
 {
   "Latitude": -6.923299379,
   "Longitude": 39.12806789,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8188703,
   "Longitude": 39.245878,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803470189,
   "Longitude": 39.25087736,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.948018776,
   "Longitude": 39.1683113,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819776369,
   "Longitude": 39.2729795,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8007423,
   "Longitude": 39.2565601,
   "CustType": "personal"
 },
 {
   "Latitude": -6.919451,
   "Longitude": 39.2786452,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.835873425,
   "Longitude": 39.1711612,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819776369,
   "Longitude": 39.2729795,
   "CustType": "personal"
 },
 {
   "Latitude": -9.30697323,
   "Longitude": 32.55487646,
   "CustType": "personal"
 },
 {
   "Latitude": -9.828557784,
   "Longitude": 33.24975181,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.927355359,
   "Longitude": 39.13513934,
   "CustType": "personal"
 },
 {
   "Latitude": -6.809447375,
   "Longitude": 39.24849171,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "corporate"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8179447,
   "Longitude": 39.2778204,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.931155661,
   "Longitude": 39.13300037,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8055176,
   "Longitude": 39.2737513,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810878756,
   "Longitude": 39.25899588,
   "CustType": "personal"
 },
 {
   "Latitude": -6.928123926,
   "Longitude": 39.13242075,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.832981448,
   "Longitude": 39.25955345,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.807335,
   "Longitude": 39.25,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.821946841,
   "Longitude": 39.27840769,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803474454,
   "Longitude": 39.25811201,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.727318634,
   "Longitude": 32.70349556,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8111251,
   "Longitude": 39.2780999,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8175981,
   "Longitude": 39.2747047,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8248637,
   "Longitude": 39.2624789,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.826167895,
   "Longitude": 39.251183,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8070576,
   "Longitude": 39.2467166,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.875976733,
   "Longitude": 39.24030473,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.82403752,
   "Longitude": 39.26447958,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.820693,
   "Longitude": 39.2748136,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.927831874,
   "Longitude": 39.13365542,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.802523647,
   "Longitude": 39.24865723,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.806593193,
   "Longitude": 39.24649,
   "CustType": "personal"
 },
 {
   "Latitude": -6.840466566,
   "Longitude": 39.14449632,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8077501,
   "Longitude": 39.2449022,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8215339,
   "Longitude": 39.2727384,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8146785,
   "Longitude": 39.2725582,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8071823,
   "Longitude": 39.2500191,
   "CustType": "personal"
 },
 {
   "Latitude": -6.799704596,
   "Longitude": 39.28549791,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8039954,
   "Longitude": 39.2584939,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.802953794,
   "Longitude": 39.25884031,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.816974011,
   "Longitude": 39.28561775,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.904195862,
   "Longitude": 39.24725782,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8740738,
   "Longitude": 39.2444642,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.805882,
   "Longitude": 39.2599489,
   "CustType": "personal"
 },
 {
   "Latitude": -6.90519016,
   "Longitude": 39.25146523,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8154154,
   "Longitude": 39.2928768,
   "CustType": "personal"
 },
 {
   "Latitude": -4.826979084,
   "Longitude": 33.48937651,
   "CustType": "personal"
 },
 {
   "Latitude": -6.799881619,
   "Longitude": 39.24071789,
   "CustType": "personal"
 },
 {
   "Latitude": -6.928275173,
   "Longitude": 39.13413117,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.807639262,
   "Longitude": 39.25469678,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.928046879,
   "Longitude": 39.11567504,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8759113,
   "Longitude": 39.242687,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.823952038,
   "Longitude": 39.271592,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810769236,
   "Longitude": 39.25962746,
   "CustType": "personal"
 },
 {
   "Latitude": -6.901056591,
   "Longitude": 39.16211307,
   "CustType": "personal"
 },
 {
   "Latitude": -6.87126542,
   "Longitude": 39.22357264,
   "CustType": "personal"
 },
 {
   "Latitude": -6.92750255,
   "Longitude": 39.13357437,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8044046,
   "Longitude": 39.2448749,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8173326,
   "Longitude": 39.2901534,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.935914785,
   "Longitude": 39.24493744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7024967,
   "Longitude": 39.1860458,
   "CustType": "personal"
 },
 {
   "Latitude": -6.813782611,
   "Longitude": 39.26256587,
   "CustType": "personal"
 },
 {
   "Latitude": -6.801509432,
   "Longitude": 39.24619042,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8014413,
   "Longitude": 39.2463767,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8281197,
   "Longitude": 39.2629527,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "personal"
 },
 {
   "Latitude": -6.845305423,
   "Longitude": 39.19381142,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8279558,
   "Longitude": 39.256847,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8055176,
   "Longitude": 39.2737513,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8193,
   "Longitude": 39.250402,
   "CustType": "personal"
 },
 {
   "Latitude": -6.925720372,
   "Longitude": 39.13006945,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8158191,
   "Longitude": 39.2502483,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819699654,
   "Longitude": 39.273466,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7985922,
   "Longitude": 39.2371712,
   "CustType": "personal"
 },
 {
   "Latitude": -6.82997,
   "Longitude": 39.2630774,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8156733,
   "Longitude": 39.287215,
   "CustType": "personal"
 },
 {
   "Latitude": -8.58504677,
   "Longitude": 33.30511638,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.822854248,
   "Longitude": 39.27233894,
   "CustType": "personal"
 },
 {
   "Latitude": -6.819946839,
   "Longitude": 39.27328235,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.852861353,
   "Longitude": 39.24216246,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8172017,
   "Longitude": 39.2888833,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.828666153,
   "Longitude": 39.27502871,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "personal"
 },
 {
   "Latitude": -6.808714412,
   "Longitude": 39.25834573,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9207231,
   "Longitude": 39.2546496,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8058063,
   "Longitude": 39.2611849,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9047966,
   "Longitude": 39.2510121,
   "CustType": "corporate"
 },
 {
   "Latitude": -4.770618778,
   "Longitude": 33.47947539,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": -4.894945667,
   "Longitude": 34.75598032,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -5.2278405,
   "Longitude": 39.778124,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8248637,
   "Longitude": 39.2624789,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8039145,
   "Longitude": 39.2407212,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8066491,
   "Longitude": 39.2561817,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.802081403,
   "Longitude": 39.25829674,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8026975,
   "Longitude": 39.2523529,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.928563005,
   "Longitude": 39.13390312,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8289116,
   "Longitude": 39.2660844,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8063087,
   "Longitude": 39.2618872,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.802483719,
   "Longitude": 39.24355888,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.823394317,
   "Longitude": 39.27236104,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818675486,
   "Longitude": 39.28755588,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.821663265,
   "Longitude": 39.2830351,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.852953754,
   "Longitude": 39.30835247,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.82644,
   "Longitude": 39.2577482,
   "CustType": "personal"
 },
 {
   "Latitude": -6.80875,
   "Longitude": 39.2633979,
   "CustType": "personal"
 },
 {
   "Latitude": -8.331776887,
   "Longitude": 32.92699691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.813649901,
   "Longitude": 39.2606074,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8096405,
   "Longitude": 39.2484178,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8179354,
   "Longitude": 39.2757723,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.802766,
   "Longitude": 39.2577589,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8080559,
   "Longitude": 39.2483074,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8063835,
   "Longitude": 39.2379396,
   "CustType": "personal"
 },
 {
   "Latitude": -21.2228651,
   "Longitude": 30.02165685,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9257114,
   "Longitude": 39.275212,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.7053324,
   "Longitude": 39.1127352,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8071948,
   "Longitude": 39.2618223,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.921841913,
   "Longitude": 39.23793945,
   "CustType": "personal"
 },
 {
   "Latitude": -6.924849494,
   "Longitude": 39.13115191,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8224519,
   "Longitude": 39.285341,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8269689,
   "Longitude": 39.2643696,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803434859,
   "Longitude": 39.25180429,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.927661589,
   "Longitude": 39.13316874,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8157068,
   "Longitude": 39.2886441,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.79915719,
   "Longitude": 39.20608521,
   "CustType": "personal"
 },
 {
   "Latitude": -5.685299857,
   "Longitude": 32.48187754,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9152205,
   "Longitude": 39.2493936,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -5.2278405,
   "Longitude": 39.778124,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "corporate"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.93631044,
   "Longitude": 39.14527416,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8016344,
   "Longitude": 39.2463691,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.70502943,
   "Longitude": 39.33213928,
   "CustType": "corporate"
 },
 {
   "Latitude": 48.63601154,
   "Longitude": 10.68474187,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.82496452,
   "Longitude": 39.28055442,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810558306,
   "Longitude": 39.2599175,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -4.9839819,
   "Longitude": 39.7549511,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.809518028,
   "Longitude": 39.25445906,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "personal"
 },
 {
   "Latitude": -5.249399,
   "Longitude": 39.7743433,
   "CustType": "personal"
 },
 {
   "Latitude": -6.806726126,
   "Longitude": 39.24228003,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.817203406,
   "Longitude": 39.28865198,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.817203406,
   "Longitude": 39.28865198,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.804986283,
   "Longitude": 39.23717759,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810131765,
   "Longitude": 39.25441524,
   "CustType": "personal"
 },
 {
   "Latitude": -6.801306531,
   "Longitude": 39.25402456,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.823374103,
   "Longitude": 39.27920642,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9065905,
   "Longitude": 39.2517906,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8055176,
   "Longitude": 39.2737513,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -35.5606543,
   "Longitude": 44.58791069,
   "CustType": "personal"
 },
 {
   "Latitude": -6.823416992,
   "Longitude": 39.2791459,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.927662308,
   "Longitude": 39.13353145,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.821107983,
   "Longitude": 39.26436424,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.806485504,
   "Longitude": 39.24897499,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8103959,
   "Longitude": 39.2480807,
   "CustType": "personal"
 },
 {
   "Latitude": -6.82336005,
   "Longitude": 39.27916277,
   "CustType": "personal"
 },
 {
   "Latitude": -26.58382654,
   "Longitude": 19.63411892,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8268932,
   "Longitude": 39.2640158,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8108133,
   "Longitude": 39.2947817,
   "CustType": "personal"
 },
 {
   "Latitude": -5.240637842,
   "Longitude": 39.7690563,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.801756518,
   "Longitude": 39.25728977,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.81095034,
   "Longitude": 39.25923049,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.80949,
   "Longitude": 39.2488233,
   "CustType": "personal"
 },
 {
   "Latitude": -6.925296185,
   "Longitude": 39.13329504,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.872287147,
   "Longitude": 39.23831509,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "personal"
 },
 {
   "Latitude": -6.805168043,
   "Longitude": 39.25982553,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -3.624129732,
   "Longitude": 30.58578538,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.800247574,
   "Longitude": 39.24732931,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9105816,
   "Longitude": 39.2568332,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8037259,
   "Longitude": 39.2461034,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.82894845,
   "Longitude": 39.25653487,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.806569139,
   "Longitude": 39.25428034,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8299492,
   "Longitude": 39.2641756,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8050483,
   "Longitude": 39.282731,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "corporate"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "corporate"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.798871655,
   "Longitude": 39.25794358,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.800319546,
   "Longitude": 39.24676663,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8043826,
   "Longitude": 39.2784473,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810936807,
   "Longitude": 39.25961442,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8203133,
   "Longitude": 39.2747627,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.823259576,
   "Longitude": 39.26169251,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -5.2429806,
   "Longitude": 39.7869194,
   "CustType": "personal"
 },
 {
   "Latitude": -8.769321229,
   "Longitude": 32.76377108,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9088167,
   "Longitude": 39.120205,
   "CustType": "personal"
 },
 {
   "Latitude": -6.806690777,
   "Longitude": 39.2607367,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8281596,
   "Longitude": 39.2618624,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -5.245275,
   "Longitude": 39.7680827,
   "CustType": "personal"
 },
 {
   "Latitude": -6.823102757,
   "Longitude": 39.26433856,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.820125742,
   "Longitude": 39.28584428,
   "CustType": "corporate"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.820887626,
   "Longitude": 39.26343354,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.927388869,
   "Longitude": 39.13246165,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8064001,
   "Longitude": 39.2410676,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": -6.801077458,
   "Longitude": 39.24128115,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8055176,
   "Longitude": 39.2737513,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8055176,
   "Longitude": 39.2737513,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8004531,
   "Longitude": 39.2587365,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -6.803977821,
   "Longitude": 39.24737513,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "corporate"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8342067,
   "Longitude": 39.2550152,
   "CustType": "personal"
 },
 {
   "Latitude": -6.80478813,
   "Longitude": 39.24882728,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8055176,
   "Longitude": 39.2737513,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8193417,
   "Longitude": 39.248265,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8055176,
   "Longitude": 39.2737513,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8006141,
   "Longitude": 39.2461665,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9493622,
   "Longitude": 39.4078387,
   "CustType": "personal"
 },
 {
   "Latitude": -6.813710334,
   "Longitude": 39.26141916,
   "CustType": "personal"
 },
 {
   "Latitude": -6.931585444,
   "Longitude": 39.13046249,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.863456693,
   "Longitude": 39.18514252,
   "CustType": "personal"
 },
 {
   "Latitude": -6.806287122,
   "Longitude": 39.24196968,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.800157238,
   "Longitude": 39.25896102,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8045394,
   "Longitude": 39.2472674,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.822495,
   "Longitude": 39.2742383,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.925355811,
   "Longitude": 39.13285493,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.815733567,
   "Longitude": 39.25415039,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818231693,
   "Longitude": 39.2875278,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810181054,
   "Longitude": 39.25440326,
   "CustType": "personal"
 },
 {
   "Latitude": -3.625726735,
   "Longitude": 30.58568755,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.831917504,
   "Longitude": 39.25831772,
   "CustType": "personal"
 },
 {
   "Latitude": -10.10550314,
   "Longitude": 35.10440068,
   "CustType": "personal"
 },
 {
   "Latitude": -6.80314796,
   "Longitude": 39.25227669,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.828115246,
   "Longitude": 39.26885355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8055176,
   "Longitude": 39.2737513,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.826895133,
   "Longitude": 39.26848412,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8226094,
   "Longitude": 39.2830387,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.810379363,
   "Longitude": 39.25978092,
   "CustType": "personal"
 },
 {
   "Latitude": -5.2429806,
   "Longitude": 39.7869194,
   "CustType": "personal"
 },
 {
   "Latitude": -9.9937717,
   "Longitude": 39.712885,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.814175607,
   "Longitude": 39.29208655,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.820487765,
   "Longitude": 39.28467477,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.804644982,
   "Longitude": 39.25106317,
   "CustType": "corporate"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -5.156148506,
   "Longitude": 32.41742657,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "personal"
 },
 {
   "Latitude": -5.521834713,
   "Longitude": 33.64170721,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8106017,
   "Longitude": 39.2517817,
   "CustType": "personal"
 },
 {
   "Latitude": -6.727021462,
   "Longitude": 39.21471594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818859024,
   "Longitude": 39.2872046,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.823685977,
   "Longitude": 39.26030338,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.817149424,
   "Longitude": 39.28667417,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8207991,
   "Longitude": 39.2632744,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810769236,
   "Longitude": 39.25962746,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8064294,
   "Longitude": 39.2609978,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.927491899,
   "Longitude": 39.13355827,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.918644268,
   "Longitude": 39.28638052,
   "CustType": "personal"
 },
 {
   "Latitude": -3.629231606,
   "Longitude": 30.58706508,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.824772565,
   "Longitude": 39.27482486,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.82250351,
   "Longitude": 39.28160012,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.798322619,
   "Longitude": 39.28538706,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8174135,
   "Longitude": 39.2779458,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8101188,
   "Longitude": 39.2559974,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "corporate"
 },
 {
   "Latitude": -33.02500956,
   "Longitude": 35.47752338,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8141975,
   "Longitude": 39.2901367,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.814668264,
   "Longitude": 39.28940535,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.819448257,
   "Longitude": 39.28259986,
   "CustType": "personal"
 },
 {
   "Latitude": -6.828343962,
   "Longitude": 39.26813789,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.924105025,
   "Longitude": 39.13484573,
   "CustType": "personal"
 },
 {
   "Latitude": -6.970349388,
   "Longitude": 38.93720014,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8066886,
   "Longitude": 39.261567,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "corporate"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.710257177,
   "Longitude": 39.10810947,
   "CustType": "personal"
 },
 {
   "Latitude": -6.822222475,
   "Longitude": 39.27430051,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.827160815,
   "Longitude": 39.22365056,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.807988,
   "Longitude": 39.2611404,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.814892606,
   "Longitude": 39.29350476,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818642124,
   "Longitude": 39.28409772,
   "CustType": "personal"
 },
 {
   "Latitude": -6.817983294,
   "Longitude": 39.28162414,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8115152,
   "Longitude": 39.2746267,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.810769236,
   "Longitude": 39.25962746,
   "CustType": "personal"
 },
 {
   "Latitude": -6.929763479,
   "Longitude": 39.27197701,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8165743,
   "Longitude": 39.2743355,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9275886,
   "Longitude": 39.1335549,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.839787471,
   "Longitude": 39.29431915,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8053738,
   "Longitude": 39.2476082,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8026359,
   "Longitude": 39.2458968,
   "CustType": "personal"
 },
 {
   "Latitude": -6.610871107,
   "Longitude": 32.4267687,
   "CustType": "personal"
 },
 {
   "Latitude": -6.930837997,
   "Longitude": 39.13138397,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7980355,
   "Longitude": 39.2479399,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.816649725,
   "Longitude": 39.25702572,
   "CustType": "personal"
 },
 {
   "Latitude": -6.805226671,
   "Longitude": 39.26124594,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9223919,
   "Longitude": 39.284571,
   "CustType": "personal"
 },
 {
   "Latitude": -3.6251732,
   "Longitude": 30.585714,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.821648569,
   "Longitude": 39.27106348,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8047973,
   "Longitude": 39.2811646,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "corporate"
 },
 {
   "Latitude": null,
   "Longitude": null,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "personal"
 },
 {
   "Latitude": -6.818322,
   "Longitude": 39.2875377,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.811014258,
   "Longitude": 39.25946116,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8026975,
   "Longitude": 39.2523529,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8060567,
   "Longitude": 39.2419245,
   "CustType": "personal"
 },
 {
   "Latitude": -6.807671228,
   "Longitude": 39.25413976,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.808541101,
   "Longitude": 39.26209507,
   "CustType": "personal"
 },
 {
   "Latitude": -6.807376767,
   "Longitude": 39.24386925,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8039817,
   "Longitude": 39.2511185,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8055176,
   "Longitude": 39.2737513,
   "CustType": "personal"
 },
 {
   "Latitude": -21.00309019,
   "Longitude": 29.01913271,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.810737865,
   "Longitude": 39.25992274,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.7997594,
   "Longitude": 39.2485241,
   "CustType": "personal"
 },
 {
   "Latitude": -6.815653669,
   "Longitude": 39.27308679,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.829592939,
   "Longitude": 39.27384317,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8197286,
   "Longitude": 39.2729993,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8180787,
   "Longitude": 39.276803,
   "CustType": "personal"
 },
 {
   "Latitude": -6.82139675,
   "Longitude": 39.28612122,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.886208715,
   "Longitude": 39.15613174,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8058811,
   "Longitude": 39.2611705,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8157691,
   "Longitude": 39.2757718,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8107874,
   "Longitude": 39.2596277,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9493622,
   "Longitude": 39.4078387,
   "CustType": "personal"
 },
 {
   "Latitude": -6.9183545,
   "Longitude": 39.2833639,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.8168957,
   "Longitude": 39.2855909,
   "CustType": "corporate"
 },
 {
   "Latitude": -6.798894541,
   "Longitude": 39.24771515,
   "CustType": "personal"
 },
 {
   "Latitude": -6.369028,
   "Longitude": 34.888822,
   "CustType": "personal"
 },
 {
   "Latitude": -6.8208371,
   "Longitude": 39.2843636,
   "CustType": "personal"
 }
];
            
            // Create heatmap data directly from JSON
            const heatmapData = jsonData
              .filter(point => !isNaN(point.Latitude) && !isNaN(point.Longitude) 
                && point.Latitude != null && point.Longitude != null)
              .map(point => ({
                location: new google.maps.LatLng(point.Latitude, point.Longitude),
                weight: 1
              }));
            
            return heatmapData;
        
        } catch (error) {
            console.error('Error fetching or parsing CSV data:', error);
            return [];
        }
    }

    // Create the map
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -6.7764, lng: 39.2382 },
        zoom: 11,
    });

    // Fetch the CSV data and create the heatmap
    fetchCSVData().then(heatmapData => {
        // Create the heatmap layer with custom colors
        const heatmap = new google.maps.visualization.HeatmapLayer({
            data: heatmapData,
            map: map,
            radius: 10,  // Increased radius for better clustering
            opacity: 0.6, // Higher opacity for more visibility
            maxIntensity: 10 // Adjust this value based on your data density
        });
        
        // Enhanced gradient to make concentrations more visible
        // Using a gradient from transparent to blue, green, yellow, and red for highest concentrations
        heatmap.set('gradient', [
            'rgba(0, 0, 0, 0)',      // transparent
            'rgba(0, 0, 255, 0.5)',  // blue
            'rgba(0, 255, 0, 0.7)',  // green
            'rgba(255, 255, 0, 0.9)', // yellow
            'rgba(255, 0, 0, 1)'      // red (highest concentration)
        ]);
    });
}

// Handle errors from Google Maps API loading
function handleMapsError() {
    console.log("Google Maps API failed to load properly. This might happen if you're using an ad blocker.");
    document.getElementById("map").innerHTML = 
        "<div style='padding: 20px; color: #666;'>" +
        "<h3>Map loading issue detected</h3>" +
        "<p>If the map isn't displaying correctly, try temporarily disabling your ad blocker for this page.</p>" +
        "</div>";
}

// Load the Google Maps API script dynamically with error handling
const script = document.createElement("script");
script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBqu0nvmknoVKWUFpQxN30XxnWIXUds6QQ&libraries=visualization&callback=initMap`;
script.async = true;
script.onerror = handleMapsError;

// Add a timeout in case the script loads but has internal errors
const mapsTimeout = setTimeout(() => {
    // Check if the map has been created successfully
    if (!window.google || !window.google.maps) {
        handleMapsError();
    }
}, 5000);

// Define initMap as the callback function for the Google Maps API
// This fixes the recursive call that was causing the stack overflow
window.initMap = function() {
    clearTimeout(mapsTimeout);
    initializeMap(); // Call our implementation function
};

document.head.appendChild(script);

// Add console message about ad blockers
console.log("Note: Some non-critical Google Maps tracking requests may be blocked by ad blockers. This won't affect map functionality.");




