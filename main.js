$(document).ready(function(){

  // Variables
  var $choices = $('.choice')
  var $results = $('#results')
  var $winOrLose = $('#winOrLose')
  var $winsDiv = $('#winsDiv')
  var $lossesDiv = $('#lossesDiv')
  var $drawsDiv = $('#drawsDiv')
  var $wins = 0
  var $losses = 0
  var $draws = 0

  // Functions
  function choose(e) {
    $results.empty()
    myChoice = e.target.id
    myDiv = '<div id="' + myChoice +'"></div>'
    botDiv = botPick()
    display_results()
  }

  function botPick(){
    options = ['rock','paper','scissors']
    botChoice = options[Math.floor(Math.random() * options.length)]
    return '<div id="' + botChoice +'"></div>'
  }

  function display_results(){
    $results.append(myDiv)
    $results.append(botDiv)
    if (myChoice === botChoice){
      draw()
      return
    }
    switch(myChoice){
      case 'rock': (botChoice === 'paper') ? lose() : win()
        break
      case 'paper': (botChoice === 'scissors') ? lose() : win()
        break
      case 'scissors': (botChoice === 'rock') ? lose() : win()
        break
    }
  }

  function win(){
    $winOrLose.html('You Win!!').css({'background-color': 'green'})
    $wins++
    $winsDiv.html('<h2>Wins: ' + $wins + '</h2>')
  }

  function lose(){
    $winOrLose.html('You Lost!').css({'background-color': 'red'})
    $losses++
    $lossesDiv.html('<h2>Losses: ' + $losses + '</h2>')
  }

  function draw(){
    $winOrLose.html('Draw').css({'background-color': 'grey'})
    $draws++
    $drawsDiv.html('<h2>Draws: ' + $draws + '</h2>')
  }

  // Listeners
  for (i = 0; i < $choices.length; i++){
    $choices[i].addEventListener('click', choose)
  }

})
