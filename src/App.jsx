function App() {
  async function fetchData() {
    const response = await fetch(
      "https://api.myanimelist.net/v2/anime?q=bunny&limit=4",
      {
        "Content-Type": "application/json",
        method: "POST",
        authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImY3ZDA1NzkxM2E2MTMzNmQ2ZGY0NGQ0YTI1NzRjYjVmNDg5NGViNDA0YmM5MzE3ZWIyM2YyMzk2MjQxNzgwMGYyZGIzNzFjZmY2MDAyOWZlIn0.eyJhdWQiOiI1ZDlkZmNmNWQ5MWQ5MmNhZTgyNDhlYzExNGY0Y2U2MCIsImp0aSI6ImY3ZDA1NzkxM2E2MTMzNmQ2ZGY0NGQ0YTI1NzRjYjVmNDg5NGViNDA0YmM5MzE3ZWIyM2YyMzk2MjQxNzgwMGYyZGIzNzFjZmY2MDAyOWZlIiwiaWF0IjoxNzEyNjU1MzY5LCJuYmYiOjE3MTI2NTUzNjksImV4cCI6MTcxNTI0NzM2OSwic3ViIjoiMTI1NjAzMTUiLCJzY29wZXMiOltdfQ.OFVwfy_41YCk7QVkIV35_Oq86II8LsmthnLUik-rk2G6Lb3KipoB61U6aNcrPocAZ-bbzxO3KKiucPxxaxeFWTdQ725gX1tXIPes3O83DpEf3wGcHiWNw1eGxSdyqVTB6aaWE2WpU2bL-3vfqj09eHPWGr2F7Of8exqD-dTHPoc1YLczG862PC4k_9buF-F0E2trb_yI-XFxy2TVXIUMFsfGQvqliCZHthcBL4JmzvVNdotYzsgFo7vprz-bOG41uWy43dfP5iJXtW2pmLSOZlylN9eLM4FhtFZQkxLlHo50tfYnfHojlb4FMjkxKywisFWgZ8hGqt4TKtFlSkFdpQ",
      }
    );
    const data = await response.json();
    console.log(data);
  }
  fetchData();
  return <div>hello world</div>;
}

export default App;
