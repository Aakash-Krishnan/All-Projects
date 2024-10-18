class Node {
  constructor(content, parentId = null) {
    this.id = Date.now();
    this.content = content;
    this.parentId = parentId;
  }
}

class App {
  constructor(rootSelector) {
    this.root = document.getElementById(rootSelector);
    this.db = this.getFromLocalStorage();

    this.render();
  }

  createNode(value, pId) {
    const node = new Node(value, pId);
    this.db.push(node);
    this.setLocalStorage();
    this.render();
  }

  setLocalStorage() {
    localStorage.setItem("datas", JSON.stringify(this.db));
  }

  getFromLocalStorage() {
    return localStorage.getItem("datas")
      ? JSON.parse(localStorage.getItem("datas"))
      : [];
  }

  getReplies(parentId) {
    return this.db.filter((e) => e.parentId === parentId);
  }

  getRootComment() {
    return this.db.filter((cmt) => cmt.parentId === null);
  }

  createCommentElement(datas) {
    const fragment = document.createDocumentFragment();

    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message-container");

    for (let comment of datas) {
      const message = document.createElement("p");
      message.classList.add("message");
      message.setAttribute("id", comment.id);
      message.append(document.createTextNode(comment.content));

      const isReplies = comment.parentId;

      if (isReplies) {
        const arrow = document.createElement("span");
        arrow.classList.add("arrow");
        messageContainer.appendChild(arrow);
      }

      messageContainer.appendChild(message);

      const replyBtn = document.createElement("button");
      replyBtn.classList.add("reply-btn");
      replyBtn.append(document.createTextNode("Reply"));

      replyBtn.addEventListener("click", (e) => {
        const reply = prompt(`Reply to ${comment.content}`);
        if (reply) {
          this.createNode(reply, comment.id);
        }
      });

      messageContainer.appendChild(replyBtn);

      const replies = this.getReplies(comment.id);
      const subTree = this.createCommentElement(replies);

      messageContainer.appendChild(subTree);
    }

    fragment.appendChild(messageContainer);

    // const parent = arrow.parentElement;
    // const bound = parent.getBoundingClientRect();
    // console.log(bound);
    // console.log(arrow.parentElement);

    return fragment;
  }

  render() {
    this.root.innerHTML = "";
    const tree = this.createCommentElement(this.getRootComment());
    this.root.appendChild(tree);
  }
}

const app = new App("root");

const textarea = document.getElementById("root-textarea");
const textContainer = document.querySelector(".root-comment-container");
const btns = document.querySelectorAll(".btn");
const showBtn = document.getElementById("show");

showBtn.addEventListener("click", (e) => {
  showBtn.style.display = "none";
  textContainer.style.display = "flex";
});

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerText === "post") {
      const value = textarea.value;
      if (value.trim()) {
        app.createNode(value);
      }
    }
    textarea.value = "";
    showBtn.style.display = "flex";
    textContainer.style.display = "none";
  });
});
