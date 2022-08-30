const List = document.querySelectorAll("li");

const remove = () => {
  for (let i = 0; i < List.length; i++) {
    List[i].classList.remove("active");
  }
};

for (let i = 0; i < List.length; i++) {
  List[i].addEventListener("click", () => {
    const Main = document.querySelector("main");
    remove();
    List[i].classList.add("active");
    Main.innerHTML = List[i].innerHTML;
  });
}
