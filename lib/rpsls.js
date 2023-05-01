export function rps(shot){
    //Export rps function
    const shot_list = ['rock', 'paper', 'scissors']; //Create shotlist
    const random_index = Math.floor(Math.random()*3); // Select random index
    const random_shot = shot_list[random_index]; //Select shot from shot list
    if (shot == undefined){
        //Undefined shot condition
        return {"player": random_shot}; //Return random shot
    }
    shot = shot.toLowerCase();//Convert input to lower case
    if(!shot_list.includes(shot)){
        //Invalid shot condition
        throw new RangeError("The shot was invalid"); //Throw a range error
    }
    //If-else block to handle valid shot condition
    if (shot == random_shot){
        return {"player": shot, "opponent": random_shot, "result": "tie"}; //Return tie result
    }
    else if ((shot == "rock" && random_shot == "scissors") || 
    (shot == "paper" && random_shot == "rock") || 
    (shot == "scissors" && random_shot == "paper")){
        return {"player": shot, "opponent": random_shot, "result": "win"}; //Return win result
    } 
    else{
        return {"player": shot, "opponent": random_shot, "result": "lose"}; //Return lose result
    }
}
export function rpsls(shot){
    //Export rpsls function
    const shot_list = ['rock', 'paper', 'scissors','lizard','spock']; //Create shotlist
    const random_index = Math.floor(Math.random()*3); //Select random index
    const random_shot = shot_list[random_index];//Select shot from shot list
    if (shot == undefined){
        //Undefined shot condition
        return {"player": random_shot}; //Return random shot
    }
    shot = shot.toLowerCase();//Convert input to lower case
    if(!shot_list.includes(shot)){
        //Invalid shot condition
        throw new RangeError("The shot was invalid"); //Range error thrown
    }
    //If-else block to handle valid shot condition for rpsls
    if (shot == random_shot){
        return {"player": shot, "opponent": random_shot, "result": "tie"}; //Return tie result
    }
    else if((shot == "paper" && random_shot == "scissors") ||
    (shot == "rock" && random_shot == "paper") ||
    (shot == "lizard" && random_shot == "rock") || 
    (shot == "spock" && random_shot == "lizard") ||
    (shot == "scissors" && random_shot == "spock") ||
    (shot == "lizard" && random_shot == "scissors") || 
    (shot == "paper" && random_shot == "lizard") ||
    (shot == "spock" && random_shot == "paper") || 
    (shot == "rock" && random_shot == "spock") ||
    (shot == "scissors" && random_shot == "rock")){
        return {"player": shot, "opponent": random_shot, "result": "lose"};//Return lose result
    }
    else{
        return {"player": shot, "opponent": random_shot, "result": "win"};//Return win results
    }
}