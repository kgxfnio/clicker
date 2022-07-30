let i = 0;
let counter = 0;
let arrayNames = [];
let elemArrays = [];
function addPlayer(){
    let liMain = document.createElement('li');
    liMain.className = 'liMain';
    liMain.id = i;
    let playerDiv = document.createElement('div');
    playerDiv.className = 'playerDiv';
    let nickname = document.createElement('h3');
    nickname.innerText = document.getElementById('playerName').value;
    if(arrayNames.includes(document.getElementById('playerName').value)){
        alert("error name is already being used")
        return 0;
    }
    else{
        arrayNames.push(document.getElementById('playerName').value)
        nickname.className = 'nickname';
        let color = document.createElement('div');
        color.style = `background-color:${document.getElementById('colorChoose').value}`
        color.className = 'colorPlayer';
        let btnSelect = document.createElement('button');
        btnSelect.id = i;
        btnSelect.onclick = function(){
            let idThis = this.id;
            this.innerText = 'selected';
            for(let zxc = 0; zxc < document.getElementsByClassName("selectBtn").length; zxc++){
                if(document.getElementById(zxc).lastChild.lastChild.innerText == 'selected' && zxc != idThis){
                    document.getElementById(zxc).lastChild.lastChild.innerText = 'select';
                }
            }
        }
        btnSelect.className = 'selectBtn';
        btnSelect.innerText = 'select';
        document.getElementById('playersList').append(liMain);
        document.getElementById('playersList').lastChild.append(playerDiv);
        document.getElementById('playersList').lastChild.firstChild.append(nickname);
        document.getElementById('playersList').lastChild.firstChild.append(color);
        document.getElementById('playersList').lastChild.firstChild.append(btnSelect);
        i+=1
    }
}
function unlock(){
    document.querySelectorAll('li').forEach(Elem => {
        elemArrays.push(Elem.lastChild.lastChild.innerText);
    })
    if(elemArrays.includes('selected')){    
        counter = 0;
        count();
        setTimeout(returnRes,1000);
        return 0;
        }
    else{
            alert('Error. Please choose one of the players')
        }
        elemArrays = [];
}
function count(){
    document.getElementById('lockedBtn').innerText =  'Unlocked';
    document.getElementById('clickBtn').onclick = function(){
        counter+=1;
    }
}
function returnRes(){
    let resultDiv = document.createElement('div');
    resultDiv.className = 'resultContainer';
    for(let qwe = 0; qwe < document.getElementsByClassName("selectBtn").length; qwe++){
        if(document.getElementById(qwe).lastChild.lastChild.innerText == 'selected'){
            if(document.getElementById(document.getElementById(qwe).firstChild.firstChild.innerText) == null){
                resultDiv.id = document.getElementById(qwe).firstChild.firstChild.innerText;
                let resultName = document.createElement('h3');
                resultName.innerText = document.getElementById(qwe).firstChild.firstChild.innerText;
                let resultScore = document.createElement('h3');
                resultScore.innerText = counter;
                document.getElementById('containerToList').append(resultDiv);
                document.getElementById(document.getElementById(qwe).firstChild.firstChild.innerText).append(resultName);
                document.getElementById(document.getElementById(qwe).firstChild.firstChild.innerText).append(resultScore);
                document.getElementById('lockedBtn').innerText = 'Locked';
                document.getElementById('clickBtn').onclick = '';
            }
            else{
                let oldResult = document.getElementById(document.getElementById(qwe).firstChild.firstChild.innerText).lastChild.innerText;
                let newResult = counter;
                if(oldResult < newResult){
                    document.getElementById(document.getElementById(qwe).firstChild.firstChild.innerText).lastChild.innerText = newResult;
                }
                document.getElementById('lockedBtn').innerText = 'Locked';
                document.getElementById('clickBtn').onclick = '';
            }
        }
    };
}