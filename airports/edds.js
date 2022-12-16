/*
"EDDS": {
            "GND": {
                "Ground": "",
                "Apron": "",
            },
            "SID": {

            },
            "STAR": {

            },
            "IAC": {
                
            }
        }

*/


module.exports = {
    "airports": {
        "EDDS": {
            "GND": {
                "Ground": "https://aip.dfs.de/BasicIFR/pages/P00C04.html",
                "Apron": "https://aip.dfs.de/BasicIFR/pages/P00C05.html",
            },
            "SID": {
                "Rwy 07": "https://aip.dfs.de/BasicIFR/pages/P00C1E.html",
                "Rwy 25": "https://aip.dfs.de/BasicIFR/pages/P00C1A.html",
            },
            "STAR": {
                "STAR 07/25": "https://aip.dfs.de/BasicIFR/pages/P00C0D.html",
                "Transition to Final 07": "https://aip.dfs.de/BasicIFR/pages/P00C0E.html",
                "Transition to Final 25": "https://aip.dfs.de/BasicIFR/pages/P00C0F.html",
                "Transition to Final 07 (CDO)": "https://aip.dfs.de/BasicIFR/pages/P00C10.html",
                "Transition to Final 25 (CDO)": "https://aip.dfs.de/BasicIFR/pages/P00C11.html",
            },
            "IAC": {
                "ILS 07": "https://aip.dfs.de/BasicIFR/pages/P00C13.html",
                "ILS 25": "https://aip.dfs.de/BasicIFR/pages/P00C12.html",
            }
        }
    }
}