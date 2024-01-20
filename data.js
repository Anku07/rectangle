class Rectangle{
    constructor(width,height){
        this.rWidth = width
        this.rHeight = height
    }
    getAreaOfRectangle(){
       return {
        AreaOfRectangle : (this.rWidth * this.rHeight)
       }
    }
    getPerimeterOfRectangle(){
        return {
           PerimeterOfRectangle : 2*(this.rHeight) + 2*(this.rWidth)
        }
    }
}
export {Rectangle}