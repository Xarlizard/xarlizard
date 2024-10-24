//We initialize all the variables needed later on server GET Request
let API_KEY = ""; //API will be provided by user input, we don't store API's on our client-side app's.
let {game1, game2, game3, game4, game5} = {}; //Variables to initialize empty chart to later be populated by server response.data
const template = document.createElement("template"); //We load the template that will be used by the WEB-COMPONENTS (for now we have 2, a custom HeaderStreamHatchet and a popupNotify for user interaction)

//Buttons that dynamically change the chart data
airtimeHours.addEventListener("click", () => {
    chart1.data.datasets[0].label = 'Airtime-hours';
    chart1.data.datasets[0].data = [game1.airtime_hours, game2.airtime_hours, game3.airtime_hours, game4.airtime_hours, game5.airtime_hours, ]
    chart1.update();
});

maxRank.addEventListener("click", () => {
    chart1.data.datasets[0].label = 'Max_rank';
    chart1.data.datasets[0].data = [game1.max_rank, game2.max_rank, game3.max_rank, game4.max_rank, game5.max_rank, ]
    chart1.update();
});

averageViewers.addEventListener("click", () => {
    chart1.data.datasets[0].label = 'Average_viewers';
    chart1.data.datasets[0].data = [game1.average_viewers, game2.average_viewers, game3.average_viewers, game4.average_viewers, game5.average_viewers, ]
    chart1.update();
});

averageChannels.addEventListener("click", () => {
    chart1.data.datasets[0].label = 'Average_channels';
    chart1.data.datasets[0].data = [game1.average_channels, game2.average_channels, game3.average_channels, game4.average_channels, game5.average_channels]
    chart1.update();
});

//Chart creation with chart.js library -> TODO: Make it a standalone webcomponent as we did with custom header-streamhatchet, this way a constructor() could be setted for future charts.
//first we fetch de document element for the chart, a canvas inside a div with id #myChart
const ctx = document.getElementById('myChart');
//Then we prepare the data set that is going to get passedd to the chart constructor
const data = {
    //Instead of using generic labels we put the basic instructions for the user to read
    labels: [
        'You need to input a valid api',
        'to get this working, anyways chart',
        'animations do work meanwhile, you',
        'just need to click on {here} or even',
        '<---{here} if you want to see it.'
    ],
    datasets: [{
        //Label showed on-hover
        label: 'Input a valid API',
        //dummy-data for first page load
        data: [1, 1, 1, 1, 1],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(255, 205, 0)',
            'rgb(255, 0, 86)'
        ],
        hoverOffset: 4,
        //this is the doughnut circumference, we want only half for this chart
        circumference: 180,
        //by default the half-doughnut is rotated vertically, we need to adjust it by 90degrees increments (270 in this case)
        rotation: 270
    }]
};
//We load the initial chart (Axios hasnt fetched data from server, dummy/demo datasets should be provided as goodpractices)
const chart1 = new Chart(ctx, {
  type: 'doughnut',
  data: data,
  options: {
      aspectRatio: 1, 
      plugins: { 
          tooltip: {enabled:true}, 
          legend: {display: true}
      }
  }
});

//Server Requests
//fetch that loads when providing an API through the screen input field + button
fetchServer.addEventListener("click", () => {
    
    //Store the user
    API_KEY = document.getElementById("apiInput").value;
    document.getElementById("apiInput").value = "";

    //Only when API provided by user has accepted length we fetch/call the server
    if ( API_KEY.length == 30 ) {
      //When the API is valid, we disable GET button and show a button animation
      document.getElementById("fetchServer").style.display = "none";
      document.getElementById("buttonload").style.display = "inline-flex";

      axios
        .get(`https://api.streamhatchet.com/discovery/games/month/2024-01?token=${API_KEY}&sort_by=average_viewers&order=desc&limit=50&offset=0`)
        .then((response) => {
          //First things first, after server request is successful we disable API Input element's display
          document.getElementById("getRequestContainer").style.display = "none";
          //We store the server response on games const, if we ever want to change the displayed games with a future button
          const games = response.data.games;
          game1 = games[0];
          game2 = games[1];
          game3 = games[2];
          game4 = games[3];
          game5 = games[4];
        
          //initial data population for the first server load
          chart1.data.labels = [game1.game, game2.game, game3.game, game4.game, game5.game]
          chart1.data.datasets[0].label = 'Airtime-hours';
          chart1.data.datasets[0].data = [game1.airtime_hours, game2.airtime_hours, game3.airtime_hours, game4.airtime_hours, game5.airtime_hours, ]
          chart1.update();
          buttonContainer.style.transform = 'scale(1)';
        })
        .catch((error) => {
          //A proper error router is needed, for now we output through the console
          console.log(error);
          console.log("Error fetching from server, please enter a valid API Key");
          console.log("(If you are seeing CORS error message above, it means the API key was invalid or that the conexion to the server timed out)");
          //When the API_KEY is not valid, we enable GET button again
          document.getElementById("fetchServer").style.display = "inline-flex";
          document.getElementById("buttonload").style.display = "none";
        });
    }else{
        //Promp a warning indicating wrong input length/type
        console.log("Invalid API key length (expected: 30)");
    }
});
