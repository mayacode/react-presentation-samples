class Parent {
  constructor(data) {
    this.data = data;
  }
}

class Child extends Parent {
  constructor(data) {
    super();
    this.otherData = this.data.other;
    this.otherData2 = data.other;
  }
}

const childObj = new Child({other: 'show me'});

console.log(childObj.otherData2);
console.log(childObj.otherData);
