// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CuboidMaker {
    constructor (cmAttrs) {
        this.length = cmAttrs.length;
        this.width = cmAttrs.width;
        this.height = cmAttrs.height;  
    }
    volume (){
        return this.length * this.width * this.height;
    }
    surfaceArea(){
        return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
    }
};

const blueCube = new CuboidMaker ({
    length: 4,
    width: 5,
    height: 5,
  })

  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(blueCube.volume()); // 100
  console.log(blueCube.surfaceArea()); // 130
  
  
  