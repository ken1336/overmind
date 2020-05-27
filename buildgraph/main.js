const BuildTree = class {

    
    constructor(buildName) {
        this.buildName = buildName;
        this.children = [];
        console.log("build tree created");

    }
    add = (buildTree) => {
        this.children.push(buildTree);
    }
    show = () =>{
        console.log(this.children);
    }

  };
const tree = new BuildTree("root");
const childTree = new BuildTree("c1");
const childTree2 = new BuildTree("c2");
tree.add(childTree);
tree.add(childTree2);
tree.show(this.children);


