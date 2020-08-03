class TV{
    constructor(brand,price,inches,Status,volume=50,channel=1)
    {
        this.brand=brand
        this.channel=channel
        this.price=price
        this.inches=inches
        this.Status=Status
        this.volume=volume
    }
    increaseVolume(){
        if(this.volume<100)
        this.volume++
    }
    decreaseVolume(){
        if(this.volume>0)
        this.volume--
    }
    channel(x){
        if(x<=50&&x>=1)
        this.channel=x
    }
    reset(){
        this.volume=50
        this.channel=1
    }
    Status()
    {
        return this.brand+" at channel "+this.channel+", volume "+this.volume
    }
    
}
class LED_TV extends TV{
    constructor(ST,EU,lifespan,refreshrate,...args)
    {
        super(args)
        this.screenThickness=ST
        this.nergyUsage=EU
        this.lifespan=lifespan
        this.refreshrate=refreshrate
        
    }
    viewingAngle()
    {
        return this.viewingAngle
    }
    backlight()
    {
        return this.backlight
    }
    displaydetails()
    {
        return this.screenThickness+" "+this.refreshrate
    }
}
class Plasma extends TV{
    constructor(ST,EU,lifespan,refreshrate,...args)
    {
        super(args)
        this.screenThickness=ST
        this.nergyUsage=EU
        this.lifespan=lifespan
        this.refreshrate=refreshrate
        
    }
    viewingAngle()
    {
        return this.viewingAngle
    }
    backlight()
    {
        return this.backlight
    }
    displaydetails()
    {
        return this.screenThickness+" "+this.refreshrate
    }
}
