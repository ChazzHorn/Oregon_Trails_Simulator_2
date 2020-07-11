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

    getAvailableSeatCount(){
        if (this.passengers.length <= 2){
            return this.capacity - this.passengers.length
        }else{
            return 0
        }
    }

    join(traveler){
        if (this.getAvailableSeatCount()== 0){
           return 'no space left' 
        }else{
        return this.passengers.push(traveler)
        }
    }
    shouldQuarantine(){
        const isInfected = this.passengers.some(passengers =>
            passengers.isHealthy === false
        )
       return isInfected
    } 
    totalFood(){
        
        const daFood = this.passengers.map(x => x.food )
       let allDaFood = daFood.reduce((a,b)=> a + b, 0)

        // console.log(daFood)
       return allDaFood
        
    }
    
    
}