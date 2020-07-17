class Traveler {
    constructor (name){
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
hunt(){
 return this.food+=2
}
eat(){
    
    if (this.food > 0){

        this.food--
    }else{

        this.isHealthy = false
    }
    return this
}

}
class Wagon {

    constructor (capacity){
        this.capacity = capacity
        this.passengers = []
    }

    getAvailableSeatCount(){//I changed this method
        return this.capacity - this.passengers.length
        
    }

    join(traveler){
        if (this.getAvailableSeatCount()== 0){
           return 'no space left' 
        }else{
        return this.passengers.push(traveler)
        }
    }
    shouldQuarantine(){
        const isStarved = this.passengers.some(passengers =>
            passengers.isHealthy === false
        )
       return isStarved
    } 
    totalFood(){
        
        const daFood = this.passengers.map(x => x.food )
       let allDaFood = daFood.reduce((a,b)=> a + b, 0)

        // console.log(daFood)
       return allDaFood
        
    }
    
    
}

class Doctor extends Traveler{
    constructor(name, food, isHealthy){
    super(name, food, isHealthy)
    }
    heal(traveler){
        return traveler.isHealthy = true
    }
}

class Hunter extends Traveler{
    constructor(name, food, isHealthy){
        super(name, food, isHealthy)
        this.food = 2
    }
    hunt(){
        return this.food += 5
    }

    eat(){
        
        if (this.food < 2){
            this.isHealthy = false
            this.food = 0
            
        }else {
    
            this.food-=2
        }
        return this
     
    }


    giveFood(traveler, numOfFoodUnits){ 
        if (this.food> 2){
            
            this.food -=numOfFoodUnits
        
        
        }
        else if(this.food < 2){

            return 0
        }

        

        return traveler.food+=numOfFoodUnits
        
}

}