//Barbossa and his three pirates found a treasure  of gold coins. Jack sparrow too joined them. 
// They decided to share the treasure. Barbossa  agreed to give x % share for jack sparrow. 
// He then decided to take y % share from the remaining treasure. His other pirates willl share equally the remaining gold coins. 
// Write a function to compute their share's.


//Write a function to return calculate the of JackShare.
function find_JackShare(goldCoin,X,Y){
    var jack=(goldCoin*X)/100;
    return jack;
}


//Write a function to retrun the  Barbossa share.
function find_BarbossaShare(goldCoin,X,Y){
    var jack=(goldCoin*X)/100;
    var current_gold=goldCoin-jack;
    var barbossa=(current_gold*Y)/100;
    return barbossa;
}


//Write a function to retrun the other pirates share.
function find_OtherShare(goldCoin,X,Y){
    var jack=(goldCoin*X)/100;
    var current_gold=goldCoin-jack;
    var barbossa=(current_gold*Y)/100;
    var remaining=current_gold-barbossa;
    return (remaining/3);  
}