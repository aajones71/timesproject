// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
const headerContainer = document.querySelector(".header-container")
function Header() {
    const header = document.createElement("div")
    header.classList.add("header")

    // const headerInfo = document.createElement("div")
    // headerInfo.classList.add("header-info")
    
    const date = document.createElement("span")
    date.classList.add("date")
    date.textContent = "SMARCH 28, 2019";
    header.appendChild(date)

    const title = document.createElement("h1")
    title.textContent = "Lambda Times"
    header.appendChild(title)

    const temp = document.createElement("span")
    temp.classList.add("temp")
    temp.textContent = "98°";
    header.appendChild(temp)

  
    return header
}
headerContainer.appendChild(Header())
