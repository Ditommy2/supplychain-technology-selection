const sortableList = document.querySelector(".leaderboard__profiles");
const items = sortableList.querySelectorAll(".leaderboard__profile");
const slidersList = document.querySelector(".slidecontainer")
const sliders = slidersList.querySelectorAll(".slider_item")
const submitBtn = document.getElementById("submit")
const costBtn = document.getElementById("cost")
const answerEls = document.querySelectorAll(".answer");
const dbEls = document.querySelectorAll(".db");

const mapsPrice = new Map([["InfluxDB ~ $0", 0], ["MySQL ~ $0", 0], ["MongoDB ~ $0", 0], ["Algorand ~ $0.144177", 0.144177], ["Avalanche ~ $21.98", 21.98], ["Cardano ~ $0.389197", 0.389197], ["Corda ~ $0", 0], ["Binance Smart Chain ~ $227.30", 227.30], ["Bitcoin ~ $38,756.54", 38.756,4], ["EOSIO ~ $0.693558", 0.693558], ["Ethereum ~ $2,099.66", 2.099,66], ["Flow ~ $0.681876", 0.681876], ["Hedera Hashgraph ~ $0.061697", 0.061697], ["Hyperledger Besu ~ $0", 0], ["Hyperledger Fabric ~ $0", 0], ["Hyperledger Sawtooth ~ $0", 0], ["IOTA ~ $0.272089", 0.272089], ["Klatyn ~ $0.190499", 0.190499], ["NEO ~ $11.32", 11.32], ["Polygon ~ $0.808497", 0.808497], ["Quorum ~ $0", 0], ["Solana ~ $62.06", 62.06], ["Stellar ~ $0.119809", 0.119809], ["Tezos ~ $0.853330", 0.853330], ["Tron ~ $0.102876", 0.102876], ["XDC Network ~ $0.048348", 0.048348]]);

var maps = new Map(); 

var methodology = localStorage.getItem("methodology")
const initialBound = 1

const firstLevel = 0.25         //interaction, resilience, reliability
const secondLevel = 0.50        //transparency, trustability, security, energy
const thirdLevel = 0.75         //verifiability, immutability

var immutabilityBK = false
var immutabilityDB = false
var transparencyBK = false
var transparencyDB = false
var reliabilityBK = false
var reliabilityDB = false
var trustabilityBK = false
var trustabilityDB = false
var securityBK = false
var securityDB = false
var resilienceBK = false
var resilienceDB = false
var verifiabilityBK = false
var verifiabilityDB = false
var interactionBK = false
var interactionDB = false

var energyMed = false
var energyLow = false

var lastAnswerVisibility = undefined
var lastAnswerDB = undefined

var story = false
var othersReasons = false

var scalaUsers = false
var scalaTX = false



updateScore(methodology, initialBound);

function updateScore(technology, currentScore) {

    items.forEach(item => { 

        var name = item.getElementsByClassName("leaderboard__name")[0].textContent
        var tec_type = item.getElementsByClassName("leaderboard__name")[0].getAttribute("value")
        var score = parseFloat(item.getElementsByClassName("leaderboard__value")[0].getAttribute("value"))

        if(tec_type.includes(technology)) {

            score = score + parseFloat(currentScore)

            item.getElementsByClassName("leaderboard__value")[0].setAttribute("value", score.toString())
            item.getElementsByClassName("leaderboard__value")[0].textContent = score.toString()

            maps.set(name, score)
        }


        if(!maps.has(name)) {
            maps.set(name, score)
        }
    });

    updateLeaderbord() 
}


function updateLeaderbord() {

    var sortedNumDesc = new Map([...maps].sort((a, b) => b[1] - a[1]));
    maps = sortedNumDesc   

    var i = 0
    maps.forEach(function(value, key) {
        items.forEach(item => {
            var name = item.getElementsByClassName("leaderboard__name")[0].textContent
            if(name === key){
                item.remove
                sortableList.insertBefore(item, sortableList.children[i])
            }
            i = i + 1
        });
      })

      sortForPrice()
    
}

function sortForPrice() {

}

function getSelectedRadioVisibility() {
    let answer = undefined;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function getSelectedRadioDB() {
    let answer = undefined;

    dbEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}


function getSelectedPhase() {
    let checked = document.querySelectorAll('input[type="checkbox"]:checked')
    return checked;
}


function getAllPoints() {

    var DBpoints = 0
    var BKpoints = 0
    var energyPoints = 0
    var permissionedPoints = 0
    var privatePermissionedPoints = 0
    var publicPermissionedPoints = 0
    var publicPermissionlessPoints = 0
    var timeSeries = 0
    var relational = 0
    var noSQL = 0
    

    sliders.forEach(slider => {

        var name = slider.getElementsByClassName("param")[0].id
        var value = slider.getElementsByClassName("param")[0].value

        switch(name) {
            case "immutability":
                if(value == 100 && !immutabilityBK && !immutabilityDB) {
                    BKpoints += thirdLevel
                    immutabilityBK = true
                } else if(value == 0 && !immutabilityDB && !immutabilityBK) {
                    DBpoints += thirdLevel
                    immutabilityDB = true
                } else if (value == 100 && immutabilityDB && !immutabilityBK) {
                    DBpoints -= thirdLevel
                    BKpoints += thirdLevel
                    immutabilityDB = false
                    immutabilityBK = true
                } else if (value == 0 && !immutabilityDB && immutabilityBK) {
                    DBpoints += thirdLevel
                    BKpoints -= thirdLevel
                    immutabilityDB = true
                    immutabilityBK = false
                } else if (value == 50 && immutabilityBK) {
                    BKpoints -= thirdLevel
                    immutabilityBK = false
                } else if (value == 50 && immutabilityDB) {
                    DBpoints -= thirdLevel
                    immutabilityDB = false
                }
                break;
            case "transparency":
                if(value == 100 && !transparencyBK && !transparencyDB) {
                    BKpoints += secondLevel
                    transparencyBK = true
                } else if(value == 0 && !transparencyDB && !transparencyBK) {
                    DBpoints += secondLevel
                    transparencyDB = true
                } else if (value == 100 && transparencyDB && !transparencyBK) {
                    DBpoints -= secondLevel
                    BKpoints += secondLevel
                    transparencyDB = false
                    transparencyBK = true
                } else if (value == 0 && !transparencyDB && transparencyBK) {
                    DBpoints += secondLevel
                    BKpoints -= secondLevel
                    transparencyDB = true
                    transparencyBK = false
                } else if (value == 50 && transparencyBK) {
                    BKpoints -= secondLevel
                    transparencyBK = false
                } else if (value == 50 && transparencyDB) {
                    DBpoints -= secondLevel
                    transparencyDB = false
                }
                break;
            case "reliability":
                if(value == 100 && !reliabilityBK && !reliabilityDB) {
                    BKpoints += firstLevel
                    reliabilityBK = true
                } else if(value == 0 && !reliabilityDB && !reliabilityBK) {
                    DBpoints += firstLevel
                    reliabilityDB = true
                } else if (value == 100 && reliabilityDB && !reliabilityBK) {
                    DBpoints -= firstLevel
                    BKpoints += firstLevel
                    reliabilityDB = false
                    reliabilityBK = true
                } else if (value == 0 && !reliabilityDB && reliabilityBK) {
                    DBpoints += firstLevel
                    BKpoints -= firstLevel
                    reliabilityDB = true
                    reliabilityBK = false
                } else if (value == 50 && reliabilityBK) {
                    BKpoints -= firstLevel
                    reliabilityBK = false
                } else if (value == 50 && reliabilityDB) {
                    DBpoints -= firstLevel
                    reliabilityDB = false
                }
                break;
            case "trustability":
                if(value == 100 && !trustabilityBK && !trustabilityDB) {
                    BKpoints += secondLevel
                    trustabilityBK = true
                } else if(value == 0 && !trustabilityDB && !trustabilityBK) {
                    DBpoints += secondLevel
                    trustabilityDB = true
                } else if (value == 100 && trustabilityDB && !trustabilityBK) {
                    DBpoints -= secondLevel
                    BKpoints += secondLevel
                    trustabilityDB = false
                    trustabilityBK = true
                } else if (value == 0 && !trustabilityDB && trustabilityBK) {
                    DBpoints += secondLevel
                    BKpoints -= secondLevel
                    trustabilityDB = true
                    trustabilityBK = false
                } else if (value == 50 && trustabilityBK) {
                    BKpoints -= secondLevel
                    trustabilityBK = false
                } else if (value == 50 && trustabilityDB) {
                    DBpoints -= secondLevel
                    trustabilityDB = false
                }
                break;
            case "security":
                if(value == 100 && !securityBK && !securityDB) {
                    BKpoints += secondLevel
                    securityBK = true
                } else if(value == 0 && !securityDB && !securityBK) {
                    DBpoints += secondLevel
                    securityDB = true
                } else if (value == 100 && securityDB && !securityBK) {
                    DBpoints -= secondLevel
                    BKpoints += secondLevel
                    securityDB = false
                    securityBK = true
                } else if (value == 0 && !securityDB && securityBK) {
                    DBpoints += secondLevel
                    BKpoints -= secondLevel
                    securityDB = true
                    securityBK = false
                } else if (value == 50 && securityBK) {
                    BKpoints -= secondLevel
                    securityBK = false
                } else if (value == 50 && securityDB) {
                    DBpoints -= secondLevel
                    securityDB = false
                }
                break;
            case "resilience":
                if (value == 100 && !resilienceBK && !resilienceDB) {
                    BKpoints += firstLevel
                    resilienceBK = true
                } else if(value == 0 && !resilienceDB && !resilienceBK) {
                    DBpoints += firstLevel
                    resilienceDB = true
                } else if (value == 100 && resilienceDB && !resilienceBK) {
                    DBpoints -= firstLevel
                    BKpoints += firstLevel
                    resilienceDB = false
                    resilienceBK = true
                } else if (value == 0 && !resilienceDB && resilienceBK) {
                    DBpoints += firstLevel
                    BKpoints -= firstLevel
                    resilienceDB = true
                    resilienceBK = false
                } else if (value == 50 && resilienceBK) {
                    BKpoints -= firstLevel
                    resilienceBK = false
                } else if (value == 50 && resilienceDB) {
                    DBpoints -= firstLevel
                    resilienceDB = false
                }
                break;
            case "verifiability":
                if (value == 100 && !verifiabilityBK && !verifiabilityDB) {
                    BKpoints += thirdLevel
                    verifiabilityBK = true
                } else if(value == 0 && !verifiabilityDB && !verifiabilityBK) {
                    DBpoints += thirdLevel
                    verifiabilityDB = true
                } else if (value == 100 && verifiabilityDB && !verifiabilityBK) {
                    DBpoints -= thirdLevel
                    BKpoints += thirdLevel
                    verifiabilityDB = false
                    verifiabilityBK = true
                } else if (value == 0 && !verifiabilityDB && verifiabilityBK) {
                    DBpoints += thirdLevel
                    BKpoints -= thirdLevel
                    verifiabilityDB = true
                    verifiabilityBK = false
                } else if (value == 50 && verifiabilityBK) {
                    BKpoints -= thirdLevel
                    verifiabilityBK = false
                } else if (value == 50 && verifiabilityDB) {
                    DBpoints -= thirdLevel
                    verifiabilityDB = false
                }
                break;
            case "interaction":
                if (value == 100 && !interactionBK && !interactionDB) {
                    BKpoints += firstLevel
                    interactionBK = true
                } else if(value == 0 && !interactionDB && !interactionBK) {
                    DBpoints += firstLevel
                    interactionDB = true
                } else if (value == 100 && interactionDB && !interactionBK) {
                    DBpoints -= firstLevel
                    BKpoints += firstLevel
                    interactionDB = false
                    interactionBK = true
                } else if (value == 0 && !interactionDB && interactionBK) {
                    DBpoints += firstLevel
                    BKpoints -= firstLevel
                    interactionDB = true
                    interactionBK = false
                } else if (value == 50 && interactionBK) {
                    BKpoints -= firstLevel
                    interactionBK = false
                } else if (value == 50 && interactionDB) {
                    DBpoints -= firstLevel
                    interactionDB = false
                }
                break;
            case "energy":
                if (value == 50 && !energyMed && !energyLow) {
                    energyPoints += secondLevel
                    energyMed = true
                } else if (value == 0 && !energyLow && !energyMed) {
                    permissionedPoints += secondLevel
                    energyLow = true
                } else if (value == 50 && energyLow && !energyMed) {
                    permissionedPoints -= secondLevel
                    energyPoints += secondLevel
                    energyLow = false
                    energyMed = true
                } else if (value == 0 && !energyLow && energyMed) {
                    permissionedPoints += secondLevel
                    energyPoints -= secondLevel
                    energyLow = true
                    energyMed = false
                } else if (value == 100 && energyMed) {
                    energyPoints -= secondLevel
                    energyMed = false
                } else if (value == 100 && energyLow) {
                    permissionedPoints -= secondLevel
                    energyLow = false
                }
                break;
            case "scalability":
                if (value == 0 && !scalaUsers && !scalaTX) {
                    publicPermissionlessPoints += thirdLevel
                    scalaUsers = true
                } else if (value == 100 && !scalaTX && !scalaUsers) {
                    permissionedPoints += thirdLevel
                    scalaTX = true
                } else if (value == 100 && scalaUsers && !scalaTX) {
                    permissionedPoints += thirdLevel
                    publicPermissionlessPoints -= thirdLevel
                    scalaUsers = false
                    scalaTX = true
                } else if (value == 0 && !scalaUsers && scalaTX) {
                    permissionedPoints -= thirdLevel
                    publicPermissionlessPoints += thirdLevel
                    scalaUsers = true
                    scalaTX = false
                } else if (value == 50 && scalaUsers) {
                    publicPermissionlessPoints -= thirdLevel
                    scalaUsers = false
                } else if (value == 50 && scalaTX) {
                    permissionedPoints -= thirdLevel
                    scalaTX = false
                }
        }
    });

    switch(lastAnswerVisibility) {
        case 'a':
        case 'b':
            privatePermissionedPoints -= secondLevel
            break;
        case('c'):
            publicPermissionedPoints -= secondLevel
            break;
        case('d'):
            publicPermissionlessPoints -= secondLevel
            break;
    }


    var answerVisibility = getSelectedRadioVisibility()
    lastAnswerVisibility = answerVisibility

    switch(answerVisibility) {
        case 'a':
        case 'b':
            privatePermissionedPoints += secondLevel
            break;
        case('c'):
            publicPermissionedPoints += secondLevel
            break;
        case('d'):
            publicPermissionlessPoints += secondLevel
            break;
    }

    switch(lastAnswerDB) {
        case('n'):
            timeSeries -= secondLevel
            break;
        case('o'):
            relational -= secondLevel
            break;
        case('p'):
            noSQL -= secondLevel
            break;
    }


    var answerDB = getSelectedRadioDB()
    lastAnswerDB = answerDB

    switch(answerDB) {
        case('n'):
            timeSeries += secondLevel
            break;
        case('o'):
            relational += secondLevel
            break;
        case('p'):
            noSQL += secondLevel
            break;
    }

    var checkedList = getSelectedPhase()
    var checkedString = ''

    checkedList.forEach(box => {
        checkedString += box.value
    });



    if(story && !checkedString.includes('storytelling')) {
        publicPermissionlessPoints -= secondLevel
        story = false
    } else if (othersReasons && !(checkedString.includes('certification') || checkedString.includes('alert') || checkedString.includes('insurance') || checkedString.includes('justice') || checkedString.includes('environmental') || checkedString.includes('government'))) {
        BKpoints -= secondLevel
        othersReasons = false
    }

    if(!story && checkedString.includes('storytelling')) {
        publicPermissionlessPoints += secondLevel
        story = true
    } else if (!othersReasons && (checkedString.includes('certification') || checkedString.includes('alert') || checkedString.includes('insurance') || checkedString.includes('justice') || checkedString.includes('environmental') || checkedString.includes('government'))) {
        BKpoints += secondLevel
        othersReasons = true
    }

    
    updateScore("DB", DBpoints)
    updateScore("BK", BKpoints)
    updateScore("Energy", energyPoints)
    updateScore("Permissioned", permissionedPoints)
    updateScore("PrivatePermissioned", privatePermissionedPoints)
    updateScore("PublicPermissioned", publicPermissionedPoints)
    updateScore("PublicPermissionless", publicPermissionlessPoints)
    updateScore("TimeSeries", timeSeries)
    updateScore("Relational", relational)
    updateScore("NoSQL", noSQL)
    


}


submitBtn.addEventListener("click", () => {
    getAllPoints();

});

costBtn.addEventListener("click", () => {
    window.location.href = "chart.html";
});

