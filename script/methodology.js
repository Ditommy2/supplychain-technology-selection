const quizData = [
    {
    question: "What do you need to store from the supply chain?",
    a: "Nothing",
    b: "Only Data",
    c: "Only State",
    d: "State and Data",
    goOn: "cd",
    guide: "If the data to be stored are only values (quantity of product harvested or delivered) and not time-dependent data, select Data Only. \n If, in addition to this data, you also want to store states, i.e. in addition to storing the quantity of product harvested, you also want to store when it was harvested and the next status, i.e. to whom it is delivered, select State and data. \n If you only want to store information on the ownership of the product to identify the states, select State only.",
    database :'b',
    end: 'a', },
    
    {
    question: "How many people participate in the supply chain?",
    a: "1",
    b: "> 1",
    c: "I don't know",
    goOn: "b",
    guide: "If you know the exact number of people who will be part of the supply chain you are considering, select the value 1 if the supply chain consists of a single person, otherwise >1. \n If for any reason this information is still not certain, select I don't know.",
    database :'a',
    selectWritePhase: 'c' },

    {
    question: "Is there an exchange of the product between two different parts in the supply chain?",
    a: "Yes",
    b: "No",
    c: "I don't know",
    goOn: "a",
    guide: "Considering your supply chain, we want to know if there is at least one product exchange between two different companies. By this we mean either a raw product that once picked up by one company is delivered to another company to perhaps perform some processing; or a product that undergoes two different processes by two different companies and then exchanges it between them. \n Think about all the stages the product will undergo during your supply chain and if you are certain that the product will undergo an exchange of ownership answer Yes, if not No. \n If for any reason this information is still not certain, select I don't know.",
    selectWritePhase: 'bc' },

    {
    question: "Select the phases that are present in your supply chain. If there are others, write them down.",
    goOn: "a",
    guide: "Tick the listed steps if they are present in your supply chain. \n If there are stages in your supply chain not listed, click on the add button for each new stage you want to introduce and write one for each field.",
    selectWritePhase: 'bc' },

    {
    question: "Are there at least two phases made by two different parts?",
    a: "Yes",
    b: "No",
    goOn: "a",
    guide: "Of the steps selected or added, please select Yes if there are at least two of them that are carried out by two different companies, otherwise No. \n For example, I selected collection, processing and packaging: the company that carries out the processing of the product is not the same as the company that carries out the packaging of the product and therefore my answer is Yes.",
    database: 'b', },

    {
    question: "Is there already a trusted consortium that is always online?",
    a: "Yes",
    b: "No",
    goOn: "b",
    guide: "If you know of a consortium that verifies whether every piece of data digitised and entered into a system is accurate, answer Yes, otherwise No.",
    consortium: 'a' },

    {
    question: "Do you want to entrust it for the maintenance of the system?",
    a: "Yes",
    b: "No",
    goOn: "b",
    guide: "If you want the consortium you refer to verify that supply chain participants enter truthful data into the system select Yes, otherwise No.",
    database: 'a'},

    {
    question: "Do you know all the people involved in the supply chain?",
    a: "Yes",
    b: "No, but I will know them",
    c: "Just some and I will not know the others",
    d: 'No and I will not know them',
    goOn: "ab",
    guide: "If you already know and are certain of all the people who will be part of the supply chain considered, answer Yes. \n If you do not know all of them for the time being, but before the supply chain becomes operational, select No, but I will know them. \n If you know or will know only some of them but there will still be some participants during the execution of the supply chain that you will not know select Just some and I will not know the others. \n If during the supply chain you will not know the identity of any other supply chain participants select No and I will not know them.",
    publicPermissionless: 'cd'},

    {
    question: "Is there a person in the supply chain you don't trust?",
    a: "Yes",
    b: "I don't know",
    c: "No, but I don't know if it's the same for others",
    d: 'No, we all trust everyone',
    goOn: "abc",
    guide: "If there is at least one person in the supply chain that you do not trust and therefore think might not be operating ethically, answer Yes. \n If you trust other participants in the supply chain but do not know if they trust you or others, answer No, but I don't know if it's the same for others. \n If you are certain that all participants trust everyone, answer No, we all trust everyone. \n If for any reason this information is still not certain, select I don't know.",
    databaseBlockchain: 'd'},

    {
    question: "Do you want anyone to be able to verify if the data corresponding to your product tracking are true?",
    a: "Yes",
    b: "No",
    goOn: "b",
    guide: "If you want any person to be able to check whether the data representing the supply chain's product tracking is true, select Yes, otherwise No.",
    publicPermissioned: 'a'},

    {
    question: "All data recorded in the system are?",
    a: "All public",
    b: "All private",
    c: "Some public and some private",
    guide: "If all the data you are going to store in the system will be private and therefore visible only to you or a few people, select All private. \n If they will all be public and therefore visible to everyone select, All public. \n If there will be both private and public data select Some public and some private.",
    publicPermissioned: 'ac',
    privatePermissioned: 'b'},


];
    
    const quiz = document.getElementById("quiz");
    const answerEls = document.querySelectorAll(".answer");
    const questionEl = document.getElementById("question");
    const guide = document.getElementById("guide");
    const a_text = document.getElementById("a_text");
    const a_radio = document.getElementById("a");
    const b_text = document.getElementById("b_text");
    const b_radio = document.getElementById("b");
    const c_text = document.getElementById("c_text");
    const c_radio = document.getElementById("c");
    const d_text = document.getElementById("d_text");
    const d_radio = document.getElementById("d");

    const e_checkbox = document.getElementById("e");
    const e_text = document.getElementById("e_text");
    const f_checkbox = document.getElementById("f");
    const f_text = document.getElementById("f_text");
    const g_checkbox = document.getElementById("g");
    const g_text = document.getElementById("g_text");
    const h_checkbox = document.getElementById("h");
    const h_text = document.getElementById("h_text");

    const submitBtn = document.getElementById("submit");
    const addBtn = document.getElementById("add");
    const backBtn = document.getElementById("back");

    var principalPath = false
    
    let currentQuiz = 0;
    var result = ''
    
    loadQuiz();
    
    function loadQuiz() {
        deselectAnswers();
        var currentQuizData = quizData[currentQuiz];
        questionEl.innerText = currentQuizData.question;
        guide.innerText = currentQuizData.guide
        quiz.style = 'width: auto';
        quiz.style = 'length: auto';

        a_text.style.display = '';
        a_radio.style.display = '';
        b_text.style.display = '';
        b_radio.style.display = '';
        c_text.style.display = '';
        c_radio.style.display = '';
        d_text.style.display = '';
        d_radio.style.display = '';
        e_checkbox.style.display = '';
        e_text.style.display = '';
        f_checkbox.style.display = '';
        f_text.style.display = '';
        g_checkbox.style.display = '';
        g_text.style.display = '';
        h_checkbox.style.display = '';
        h_text.style.display = '';

        addBtn.style.display = '';

        if(!!currentQuizData.a) {
            a_text.innerText = currentQuizData.a;}
        else {
            a_text.style.display = 'none';
            a_radio.style.display = 'none';
        }

        if(!!currentQuizData.b) {
            b_text.innerText = currentQuizData.b;}
        else {
            b_text.style.display = 'none';
            b_radio.style.display = 'none';
        }

        if(!!currentQuizData.c) {
            c_text.innerText = currentQuizData.c;}
        else {
            c_text.style.display = 'none';
            c_radio.style.display = 'none';
        }

        if(!!currentQuizData.d) {
            d_text.innerText = currentQuizData.d;}
        else {
            d_text.style.display = 'none';
            d_radio.style.display = 'none';
        }

        if(currentQuiz != 3) {
            e_checkbox.style.display = 'none';
            e_text.style.display = 'none';
            f_checkbox.style.display = 'none';
            f_text.style.display = 'none';
            g_checkbox.style.display = 'none';
            g_text.style.display = 'none';
            h_checkbox.style.display = 'none';
            h_text.style.display = 'none';
            addBtn.style.display = 'none';
        }
    }

    
    function getSelectedRadio() {
    let answer = undefined;
    answerEls.forEach(answerEl => {
    if (answerEl.checked) {
    answer = answerEl.id;
    }
    });
    return answer;
    }

    function getSelectedPhase() {
    let count = document.querySelectorAll('input[type="checkbox"]:checked').length
    return count;
    }

    
    function deselectAnswers() {
    answerEls.forEach(answerEl => {
    answerEl.checked = false;
    });
    }

    function add() {
        let allElements = document.getElementById("textbox");
        let textbox_id = allElements.getElementsByTagName("input").length;
        
        textbox_id++;
        
        //create textbox
        let input = document.createElement('input');
        input.type = "text";
        input.setAttribute("class", "w3-input w3-border");
        input.setAttribute('id', 'textbox' + textbox_id);
        input.setAttribute('value', '');
        let textbox = document.getElementById("textbox");
        
        //append elements
        textbox.appendChild(input);
        let br = document.createElement("br");
        textbox.appendChild(br);

        let listener = document.getElementById('textbox' + textbox_id)

        listener.addEventListener('input', function() { 
            listener.setAttribute('value', listener.value);
            console.log('Input value changed:' + textbox_id, listener.value); 
          }); 

      }

      

    addBtn.addEventListener("click", () => {
        add()
    });
    
    submitBtn.addEventListener("click", () => {
    const phase = getSelectedPhase();
    const answer = getSelectedRadio();
    if (answer && currentQuiz != 3) {
        result += quizData[currentQuiz].question + '  ' + quizData[currentQuiz][answer] + '\n'
        if (!!quizData[currentQuiz].goOn && quizData[currentQuiz].goOn.includes(answer)) {
            if(currentQuiz == 1) {
                principalPath = true
                currentQuiz = currentQuiz + 4
            } else if (currentQuiz == 2) {
                principalPath = false
                currentQuiz = currentQuiz + 3
            } else if (currentQuiz == 5) {
                principalPath = true
                currentQuiz = currentQuiz + 2
            } else if (currentQuiz == 6){
                principalPath = false
                currentQuiz++;
            } else {
                currentQuiz++;
            }
        } else if (!!quizData[currentQuiz].selectWritePhase && quizData[currentQuiz].selectWritePhase.includes(answer)) {
            currentQuiz++;
        } else if (!!quizData[currentQuiz].database && quizData[currentQuiz].database.includes(answer)) {
            quiz.innerHTML=` <h2> Database </h2> <button id="go">Go on!</button>`;
            secondPart('DB')
            result += 'Database'
            saveFile()
        } else if (!!quizData[currentQuiz].end && quizData[currentQuiz].end.includes(answer)) {
            quiz.innerHTML=` <h2> End </h2> <button id="go">Go on!</button>`;
            secondPart('')
            result += 'End'
            saveFile()
        } else if (!!quizData[currentQuiz].consortium && quizData[currentQuiz].consortium.includes(answer)) {
            currentQuiz++;
        } else if (!!quizData[currentQuiz].publicPermissionless && quizData[currentQuiz].publicPermissionless.includes(answer)) {
            quiz.innerHTML=` <h2> Public Permissionless Blockchain </h2> <button id="go">Go on!</button>`;
            secondPart('PublicPermissionless')
            result += 'Public Permissionless Blockchain'
            saveFile()
        } else if (!!quizData[currentQuiz].databaseBlockchain && quizData[currentQuiz].databaseBlockchain.includes(answer)) {
            quiz.innerHTML=` <h2> Database OR Blockchain (Security) </h2> <button id="go">Go on!</button>`;
            secondPart('')
            result += 'Database OR Blockchain (Security)'
            saveFile()
        } else if (!!quizData[currentQuiz].publicPermissioned && quizData[currentQuiz].publicPermissioned.includes(answer)) {
            quiz.innerHTML=` <h2> Public Permissioned Blockchain </h2> <button id="go">Go on!</button>`;
            secondPart('PublicPermissioned')
            result += 'Public Permissioned Blockchain'
            saveFile()
        } else if (!!quizData[currentQuiz].privatePermissioned && quizData[currentQuiz].privatePermissioned.includes(answer)) {
            quiz.innerHTML=` <h2> Private Permissioned Blockchain </h2> <button id="go">Go on!</button>`;
            secondPart('PrivatePermissioned')
            result += 'Private Permissioned Blockchain'
            saveFile()
        }
    } else {
        result += quizData[currentQuiz].question + ' '
        document.querySelectorAll('input[type="checkbox"]:checked').forEach(phase => result += phase.value + ' ');
        

        let allElements = document.getElementById("textbox");
        let textbox_id = allElements.getElementsByTagName("input").length;
        let count = 0
        for( i = 1; i <= textbox_id; i++) {
            var newPhase = document.getElementById('textbox' + i)
            if(newPhase.value != ''){
                count++;
                result += newPhase.value + ' '

            }
            newPhase.remove()
        }

        result += '\n'
        sum = count + phase

        if(sum == 1) {
            quiz.innerHTML=` <h2> Database </h2> <button id="go">Go on!</button>`;
            secondPart('DB')
            result += 'Database'
            saveFile()
            document.getElementById('textbox').remove()
        } else if (sum > 1) {
            currentQuiz++;
            document.getElementById('textbox').remove()
        }
        
        result + quizData[currentQuiz].question + '  ' + sum + '\n'

    }

    if (currentQuiz < quizData.length) {
        loadQuiz(); 
       }
});


function saveFile() {
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; //Months are zero based
    var curr_year = d.getFullYear();

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(result));
    element.setAttribute('download', curr_date + "-" + curr_month + "-" + curr_year + "-" + Date.now());

    element.click();
}


function secondPart(methodology) {

    var goBtn = document.getElementById("go");

    goBtn.addEventListener("click", () => {
        localStorage.setItem("methodology", methodology)
        window.location.href = "dashboard.html";
    });

}

backBtn.addEventListener("click", () => {

    if(currentQuiz == 5 && principalPath) {
        currentQuiz = 1
    } else if(currentQuiz == 7 && principalPath) {
        currentQuiz = 5
    } else {
        currentQuiz -= 1
    }

    loadQuiz()

});