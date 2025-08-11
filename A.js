const btn = document.getElementById("btn");
const input = document.getElementById("in");
const list = document.getElementById("lst");

btn.addEventListener("click", ()=> {
        let li = document.createElement("li");
        li.textContent = input.value; 
        list.appendChild(li);
        input.value="";
});
const btn1=document.getElementById("btnclr");
btn1.addEventListener("click", ()=>{
    document.body.style.backgroundColor="green";
});

const students = [
    { name: "John Doe", age: 20, course: "Computer Science" },
    { name: "Jane Smith", age: 22, course: "Information Technology" },
    { name: "Sam Wilson", age: 19, course: "Data Analytics" }
];

const table = document.createElement("table");
table.border = "1";
table.cellPadding = "10";
table.cellSpacing = "0";

table.style.width = "100%";

table.style.backgroundColor = "transparent";


const headerRow = document.createElement("tr");
const headers = ["Name", "Age", "Course"];
headers.forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
});
table.appendChild(headerRow);


students.forEach(student => {
    const row = document.createElement("tr");
    Object.values(student).forEach(value => {
        const td = document.createElement("td");
        td.textContent = value;
        row.appendChild(td);
    });
    table.appendChild(row);
});


document.getElementById("tableContainer").appendChild(table);