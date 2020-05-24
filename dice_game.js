
var scores,roundscore,activeplayer,gameplay,previous=9;

init();

document.querySelector('.dice').style.display='none';

document.querySelector('.rolldice').addEventListener('click',function(){
    if(gameplay){
        //a random number
        var dice=Math.floor(Math.random()*6)+1;

        //display
        var dicedom=document.querySelector('.dice');
        dicedom.style.display='block';
        dicedom.src='./images/dice-'+dice+'.jpg';

        if(previous===6 && dice===6){
            scores[activeplayer]=0;
            document.querySelector('#pmain-score-'+activeplayer).textContent=scores[activeplayer];
        }
        else if (dice!==1){
            roundscore+=dice;
            document.querySelector("#pscore-"+activeplayer).textContent=roundscore;
        }
        else{
            nextplayer();
        }
        previous=dice;
    }
});

document.querySelector('.hold').addEventListener('click',function(){
    if(gameplay){
        scores[activeplayer]+=roundscore;

        document.querySelector('#pmain-score-'+activeplayer).textContent=scores[activeplayer];

        var input=document.querySelector('.final-score').value;
        var winningscore;
        if(input){
            winningscore=input;
        }
        else{
            winningscore=30;
        }

        if(scores[activeplayer]>=winningscore){
            document.querySelector('.p-'+activeplayer).textContent='PLAYER '+activeplayer+' WON';
            document.querySelector('.dice').style.display='none';
            gameplay=false;
        }
        else{
            nextplayer();
        }
    }
});

function nextplayer(){
    activeplayer===0? activeplayer=1:activeplayer=0;
    roundscore=0;
    document.getElementById('pscore-0').textContent='0';
    document.getElementById('pscore-1').textContent='0';

    document.querySelector('.box-0').classList.toggle('active');
    document.querySelector('.box-1').classList.toggle('active');
    //document.querySelector('.box-0').classList.add('disactive');
    //document.querySelector('.box-1').classList.add('active');
    document.querySelector('.dice').style.display='none';
}

document.querySelector('.newgame').addEventListener('click',init);


function init(){

    scores=[0,0];
    roundscore=0;
    activeplayer=0;
    gameplay=true;
    //dice=Math.floor(Math.random()*6)+1;

    //document.querySelector("#pscore-"+activeplayer).textContent=dice;
    //to read a data from window
    //var x=document.querySelector('#pmain-score-0').textContent;
    //console.log(x);

    //document.querySelector('.')
    document.getElementById('pmain-score-0').textContent='0';
    document.getElementById('pmain-score-1').textContent='0';
    document.getElementById('pscore-0').textContent='0';
    document.getElementById('pscore-1').textContent='0';
    document.querySelector('.p-0').textContent='PLAYER 0';
    document.querySelector('.p-1').textContent='PLAYER 1';
    document.querySelector('.box-0').classList.remove('active');
    document.querySelector('.box-1').classList.remove('active');
    document.querySelector('.box-0').classList.add('active');
}









