window.onload = function(){

    var scoreText = document.getElementById('score')//estudar
    var score = 0;
    var highscore = localStorage.getItem("highscore")//estudar
    var highscoreText = document.getElementById('highscore')//estudar
    highscoreText.innerText = highscore//estudar

    var stage = document.getElementById('stage')
    var ctx = stage.getContext("2d")
    document.addEventListener("keydown",keyPush)

    setInterval(game, 100)

    const vel = 1
    var vx = vy = 0
    var px = 10
    var py = 12
    var tp = 30
    var qp = 18
    var ax = ay = 15
    

    var trail = [1]
    tail = 2

    function game(){
        px += vx
        py += vy

        if(px < 0){
            px = qp -1
        }
        if(px > qp -1){
            px=0
        }
        if(py < 0){
            py = qp -1
        }
        if(py > qp -1){ // aqui
            py = 0
        }
        

        ctx.fillStyle = "#1a1c1b"
        ctx.fillRect(0,0, stage.width, stage.height)

        ctx.fillStyle = "#990b20"
        ctx.fillRect(ax*tp, ay*tp, tp, tp)

        ctx.fillStyle = "#07b35d"
        for(var i = 0; i < trail.length; i++){
            ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp-1, tp-1)

            if(trail[i].x == px && trail[i].y == py){
                vx = vy = 0
                tail = 2
                
                score = 0
                
                
                
                

                
            } 
            
        }
        
        
        
        trail.push({x:px, y:py})
        while(trail.length > tail){
            trail.shift()
        }
        if(ax == px && ay == py){
            tail++
            score ++
            scoreText.innerText = score
            if(score > highscore){
            highscore = score
            }
            localStorage.setItem("highscore", highscore)
            highscoreText.innerText = highscore

            ax = Math.floor(Math.random()*qp)
            ay = Math.floor(Math.random()*qp)
        }
    }
    function keyPush(event){
        switch(event.keyCode){
            case 37:
                vx = -vel 
                vy = 0
                break
            case 38:
                vx = 0
                vy = -vel
                break
            case 39:
                vx = vel
                vy = 0
                break
            case 40:
                vx = 0
                vy = vel
                break
            default:
                break
        }

    }
    


}