const List = document.querySelectorAll("li");
console.log(List.length);

// for loop
const remove = () => {
  for (let i = 0; i < List.length; i++) {
    console.log(List[i]);
    List[i].classList.remove("active");
  }
};

for (let i = 0; i < List.length; i++) {
  console.log(List[i]);
  List[i].addEventListener("click", () => {
    const H1 = document.querySelector("main > h1");
    remove();
    List[i].classList.add("active");

    H1.innerHTML = List[i].innerText;
    console.log("list >>>", List[i].innerText);
  });
}
