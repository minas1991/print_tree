const printTree = () => {
  let list = {};

  const groupTree = (branch, step) => {
    if (typeof step !== "number") {
      step = 0;
    }

    if (typeof list[step] !== "object") {
      list[step] = [];
    }

    list[step].push(branch.value);

    for (const key in branch) {
      if (typeof branch[key] === "object") {
        groupTree(branch[key], step + 1);
      }
    }
  };

  groupTree(tree);

  const el = document.getElementById("container");
  for (i in list) {
    let htmlStr = `<div class="row">`;
    for (const value of list[i]) {
      htmlStr += `<div><span>${value}</span></div>`;
    }
    el.innerHTML += htmlStr + `</div>`;
  }
};

printTree();
