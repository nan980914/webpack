console.log("Heading component~"); // 副作用代码

export const Heading = (level) => {
    return document.createElement("h" + level);
  };
  
