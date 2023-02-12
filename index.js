

function entered() {
    let inputr = document.getElementById("user").value 
    switch(inputr) {
        case "1986":
        case "2022":
        case "1978":
            document.getElementById("generate").innerText = "Argentina";
          break;
        case "2014":
          case "1990":
          case "1954":
          case "1974":
            document.getElementById("generate").innerText = "Germany";
          break;
          case "1998":
            case "2018":
            document.getElementById("generate").innerText = "France";
          break;
          case "2010":
            document.getElementById("generate").innerText = "Spain";
          break;
          case "1958":
          case "1962":
          case "1970":
          case "1994": 
          case "2002":
            document.getElementById("generate").innerText = "Brazil";
          break;
          case "1930":
          case "1950":
            document.getElementById("generate").innerText = "Urugay";
          break;
          case "1966":
            document.getElementById("generate").innerText = "England";
          break;
          case "1934":
          case "1938":
          case "1982": 
          case "2006":
            document.getElementById("generate").innerText = "Italy";
          break;
        default:
          document.getElementById("generate").innerText = "The World Cup was not held this year";
          break;
      }

} 

function refresh() {
  window.location.reload();
}