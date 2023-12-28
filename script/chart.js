
const ctx = document.getElementById('myChart');

const red = 'rgb(255, 99, 132)';
const orange= 'rgb(255, 159, 64)';
const yellow = 'rgb(255, 205, 86)';
const green = 'rgb(75, 192, 192)';
const blue = 'rgb(54, 162, 235)';
const purple = 'rgb(153, 102, 255)';
const grey = 'rgb(201, 203, 207)';
const brown = 'rgb(80, 52, 24)';
const sky = 'rgb(0, 255, 255)';
const fire = 'rgb(255, 0, 0)';
const grass = 'rgb(102, 204, 0)';

var nodesDatabases = document.getElementById('nodes-databases');
var storage = document.getElementById('storage');
var users = document.getElementById('users');
var transactions = document.getElementById('transactions');

var nodesDatabasesParameter = 1
var storageParameter = 1
var usersParameter = 10
var transactionsParameter = 1000

var chart = undefined

function updateChart(nodesDatabasesParameter, storageParameter, usersParameter, transactionsParameter) {
  
    chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['DB - On Premise', 'DB - Cloud', 'DLT - On Premise', 'DLT - Cloud', 'Transactions', 'Smart Contract Deployment'],
        datasets: [     
                        // DB ON PREMISE
                        {
                            label: 'DB Data Engineer', 
                            data: [nodesDatabasesParameter * 3000, null, null, null, null, null],
                            backgroundColor: green,
                            stack : 'DB - On Premise',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'DB Hardware Server', 
                            data: [nodesDatabasesParameter * 500, null, null, null, null, null],
                            backgroundColor: orange,
                            stack : 'DB - On Premise',
                            skipNull : true,
                            borderWidth: 2
                        }, 
                        {
                            label: 'DB Maintenance', 
                            data: [nodesDatabasesParameter * 120, null, null, null, null, null],
                            backgroundColor: purple,
                            stack : 'DB - On Premise',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'DB Storage 2 TB', 
                            data: [storageParameter * 120, null, null, null, null, null],
                            backgroundColor: red,
                            stack : 'DB - On Premise',
                            skipNull : true,
                            borderWidth: 2
                        },

                        
                        // DB CLOUD

                        //AWS VM
                        {
                            label: 'AWS VM Data Engineer', 
                            data:  [null, nodesDatabasesParameter * 3000, null, null, null, null],
                            backgroundColor: green,
                            stack : 'AWS VM',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'AWS VM t4g.xlarge', 
                            data:  [null, nodesDatabasesParameter * 65, null, null, null, null],
                            backgroundColor: orange,
                            stack : 'AWS VM',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'AWS VM Storage 2 TB', 
                            data:  [null, storageParameter * 189, null, null, null, null],
                            backgroundColor: red,
                            stack : 'AWS VM',
                            skipNull : true,
                            borderWidth: 2
                        },

                        //ORACLE VM
                        {
                            label: 'Oracle VM Data Engineer', 
                            data:  [null, nodesDatabasesParameter * 3000, null, null, null, null],
                            backgroundColor: green,
                            stack : 'Oracle VM',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'Oracle VM Standard.E4.Flex', 
                            data:  [null, nodesDatabasesParameter * 55, null, null, null, null],
                            backgroundColor: orange,
                            stack : 'Oracle VM',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'Oracle VM Storage 2 TB', 
                            data:  [null, storageParameter * 153, null, null, null, null],
                            backgroundColor: red,
                            stack : 'Oracle VM',
                            skipNull : true,
                            borderWidth: 2
                        },

                        //AWS DocumentDB
                        {
                            label: 'AWS DocumentDB Data Engineer', 
                            data:  [null, nodesDatabasesParameter * 3000, null, null, null, null],
                            backgroundColor: green,
                            stack : 'AWS DocumentDB',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'AWS DocumentDB db.r4.xlarge', 
                            data:  [null, nodesDatabasesParameter * 404, null, null, null, null],
                            backgroundColor: orange,
                            stack : 'AWS DocumentDB',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'AWS DocumentDB Storage 2 TB', 
                            data:  [null, storageParameter * 614, null, null, null, null],
                            backgroundColor: red,
                            stack : 'AWS DocumentDB',
                            skipNull : true,
                            borderWidth: 2
                        },

                        //AWS RDS
                        {
                            label: 'AWS RDS Data Engineer', 
                            data:  [null, nodesDatabasesParameter * 3000, null, null, null, null],
                            backgroundColor: green,
                            stack : 'AWS RDS',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'AWS RDS db.m4.xlarge', 
                            data:  [null, nodesDatabasesParameter * 511, null, null, null, null],
                            backgroundColor: orange,
                            stack : 'AWS RDS',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'AWS RDS Storage 2 TB', 
                            data:  [null, storageParameter * 471, null, null, null, null],
                            backgroundColor: red,
                            stack : 'AWS RDS',
                            skipNull : true,
                            borderWidth: 2
                        },

                        // DLT ON PREMISE
                        {
                            label: 'DLT Blockchain Engineer', 
                            data:  [null, null, nodesDatabasesParameter * 3500, null, null, null],
                            backgroundColor: green,
                            stack : 'DLT - On Premise',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'DLT Blockchain Developer', 
                            data:  [null, null, nodesDatabasesParameter * 2000, null, null, null],
                            backgroundColor: yellow,
                            stack : 'DLT - On Premise',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'DLT Software Developer', 
                            data:  [null, null, nodesDatabasesParameter * 1500, null, null, null],
                            backgroundColor: brown,
                            stack : 'DLT - On Premise',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'DLT Smart Contract', 
                            data:  [null, null, nodesDatabasesParameter * 3000, null, null, null],
                            backgroundColor: blue,
                            stack : 'DLT - On Premise',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'DLT Landing Page', 
                            data:  [null, null, nodesDatabasesParameter * 500, null, null, null],
                            backgroundColor: grey,
                            stack : 'DLT - On Premise',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'DLT Hardware Node', 
                            data:  [null, null, nodesDatabasesParameter * 500, null, null, null],
                            backgroundColor: orange,
                            stack : 'DLT - On Premise',
                            skipNull : true,
                            borderWidth: 2
                        }, 
                        {
                            label: 'DLT Maintenance', 
                            data:  [null, null, nodesDatabasesParameter * 120, null, null, null],
                            backgroundColor: purple,
                            stack : 'DLT - On Premise',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'DLT Storage 2 TB', 
                            data:  [null, null, storageParameter * 120, null, null, null],
                            backgroundColor: red,
                            stack : 'DLT - On Premise',
                            skipNull : true,
                            borderWidth: 2
                        },


                        // DLT CLOUD

                        // Alibaba 500 GB
                        {
                            label: 'Alibaba 500 GB Blockchain Developer', 
                            data:  [null, null, null, nodesDatabasesParameter * 2000, null, null],
                            backgroundColor: yellow,
                            stack : 'Alibaba 500 GB',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'Alibaba 500 GB Software Developer', 
                            data:  [null, null, null, nodesDatabasesParameter * 1500, null, null],
                            backgroundColor: brown,
                            stack : 'Alibaba 500 GB',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'Alibaba 500 GB Smart Contract', 
                            data:  [null, null, null, nodesDatabasesParameter * 3000, null, null],
                            backgroundColor: blue,
                            stack : 'Alibaba 500 GB',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'Alibaba 500 GB Landing Page', 
                            data:  [null, null, null, nodesDatabasesParameter * 500, null, null],
                            backgroundColor: grey,
                            stack : 'Alibaba 500 GB',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'Alibaba 500 GB Node', 
                            data:  [null, null, null, nodesDatabasesParameter * 1215, null, null],
                            backgroundColor: orange,
                            stack : 'Alibaba 500 GB',
                            skipNull : true,
                            borderWidth: 2
                        }, 

                        // Alibaba 2 TB
                        {
                            label: 'Alibaba 2 TB Blockchain Developer', 
                            data:  [null, null, null, nodesDatabasesParameter * 2000, null, null],
                            backgroundColor: yellow,
                            stack : 'Alibaba 2 TB',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'Alibaba 2 TB Software Developer', 
                            data:  [null, null, null, nodesDatabasesParameter * 1500, null, null],
                            backgroundColor: brown,
                            stack : 'Alibaba 2 TB',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'Alibaba 2 TB Smart Contract', 
                            data:  [null, null, null, nodesDatabasesParameter * 3000, null, null],
                            backgroundColor: blue,
                            stack : 'Alibaba 2 TB',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'Alibaba 2 TB Landing Page', 
                            data:  [null, null, null, nodesDatabasesParameter * 500, null, null],
                            backgroundColor: grey,
                            stack : 'Alibaba 2 TB',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'Alibaba 2 TB Node', 
                            data:  [null, null, null, nodesDatabasesParameter * 3333, null, null],
                            backgroundColor: orange,
                            stack : 'Alibaba 2 TB',
                            skipNull : true,
                            borderWidth: 2
                        }, 


                        // AWS 500 GB
                        {
                            label: 'AWS 500 GB Blockchain Developer', 
                            data:  [null, null, null, nodesDatabasesParameter * 2000, null, null],
                            backgroundColor: yellow,
                            stack : 'AWS 500 GB',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'AWS 500 GB Software Developer', 
                            data:  [null, null, null, nodesDatabasesParameter * 1500, null, null],
                            backgroundColor: brown,
                            stack : 'AWS 500 GB',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'AWS 500 GB Smart Contract', 
                            data:  [null, null, null, nodesDatabasesParameter * 3000, null, null],
                            backgroundColor: blue,
                            stack : 'AWS 500 GB',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'AWS 500 GB Landing Page', 
                            data:  [null, null, null, nodesDatabasesParameter * 500, null, null],
                            backgroundColor: grey,
                            stack : 'AWS 500 GB',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'AWS 500 GB Node', 
                            data:  [null, null, null, nodesDatabasesParameter * 1027, null, null],
                            backgroundColor: orange,
                            stack : 'AWS 500 GB',
                            skipNull : true,
                            borderWidth: 2
                        }, 


                        // Oracle 500 GB
                        {
                            label: 'Oracle 500 GB Blockchain Developer', 
                            data:  [null, null, null, nodesDatabasesParameter * 2000, null, null],
                            backgroundColor: yellow,
                            stack : 'Oracle 500 GB',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'Oracle 500 GB Software Developer', 
                            data:  [null, null, null, nodesDatabasesParameter * 1500, null, null],
                            backgroundColor: brown,
                            stack : 'Oracle 500 GB',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'Oracle 500 GB Smart Contract', 
                            data:  [null, null, null, nodesDatabasesParameter * 3000, null, null],
                            backgroundColor: blue,
                            stack : 'Oracle 500 GB',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'Oracle 500 GB Landing Page', 
                            data:  [null, null, null, nodesDatabasesParameter * 500, null, null],
                            backgroundColor: grey,
                            stack : 'Oracle 500 GB',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'Oracle 500 GB Node', 
                            data:  [null, null, null, nodesDatabasesParameter * 1315, null, null],
                            backgroundColor: orange,
                            stack : 'Oracle 500 GB',
                            skipNull : true,
                            borderWidth: 2
                        }, 


                        // Transactions
                        {
                            label: 'TX Users Ethereum', 
                            data:  [null, null, null, null, usersParameter * 8.1203, null],
                            backgroundColor: grass,
                            stack : 'Ethereum',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'TX Users Binance Smart Chain', 
                            data:  [null, null, null, null, usersParameter * 0.1030, null],
                            backgroundColor: grass,
                            stack : 'Binance Smart Chain',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'TX Users Avalanche', 
                            data:  [null, null, null, null, usersParameter * 0.0827, null],
                            backgroundColor: grass,
                            stack : 'Avalanche',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'TX Users Polygon', 
                            data:  [null, null, null, null, usersParameter *  0.0038, null],
                            backgroundColor: grass,
                            stack : 'Polygon',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'TX Hash Ethereum', 
                            data:  [null, null, null, null, transactionsParameter * 1.2180, null],
                            backgroundColor: fire,
                            stack : 'Ethereum',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'TX Hash Binance Smart Chain', 
                            data:  [null, null, null, null, transactionsParameter * 0.0155, null],
                            backgroundColor: fire,
                            stack : 'Binance Smart Chain',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'TX Hash Avalanche', 
                            data:  [null, null, null, null, transactionsParameter * 0.0124, null],
                            backgroundColor: fire,
                            stack : 'Avalanche',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'TX Hash Polygon', 
                            data:  [null, null, null, null, transactionsParameter * 0.0006, null],
                            backgroundColor: fire,
                            stack : 'Polygon',
                            skipNull : true,
                            borderWidth: 2
                        },


                        // Smart Contract Deployment
                        {
                            label: 'SC Ethereum', 
                            data:  [null, null, null, null, null, nodesDatabasesParameter * 185],
                            backgroundColor: sky,
                            stack : 'Ethereum',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'SC Binance Smart Chain', 
                            data:  [null, null, null, null, null, nodesDatabasesParameter * 3],
                            backgroundColor: sky,
                            stack : 'Binance Smart Chain',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'SC Avalanche', 
                            data:  [null, null, null, null, null, nodesDatabasesParameter * 2],
                            backgroundColor: sky,
                            stack : 'Avalanche',
                            skipNull : true,
                            borderWidth: 2
                        },
                        {
                            label: 'SC Polygon', 
                            data:  [null, null, null, null, null, nodesDatabasesParameter * 0.01],
                            backgroundColor: sky,
                            stack : 'Polygon',
                            skipNull : true,
                            borderWidth: 2
                        },
                    ],
      },
      options: {
        devicePixelRatio: 2,
        scales: {
          y: {
            beginAtZero: true,
            stacked: true,
          }
        }
      }
    });

}

updateChart(nodesDatabasesParameter, storageParameter, usersParameter, transactionsParameter)

nodesDatabases.addEventListener("change", () => {
    nodesDatabasesParameter = nodesDatabases.value
    chart.destroy();
    updateChart(nodesDatabasesParameter, storageParameter, usersParameter, transactionsParameter)
});

storage.addEventListener("change", () => {
    storageParameter = storage.value
    chart.destroy();
    updateChart(nodesDatabasesParameter, storageParameter, usersParameter, transactionsParameter)
});

users.addEventListener("change", () => {
    usersParameter = users.value
    chart.destroy();
    updateChart(nodesDatabasesParameter, storageParameter, usersParameter, transactionsParameter)
});

transactions.addEventListener("change", () => {
    transactionsParameter = transactions.value
    chart.destroy();
    updateChart(nodesDatabasesParameter, storageParameter, usersParameter, transactionsParameter)
});