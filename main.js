function burgerClicked(){
    var x = document.getElementById("navShowHide");
   
        x.classList.remove("navHide");
        x.classList.add("navShow");
    
    
}
function closeClicked(){
    var x = document.getElementById("navShowHide");
    x.classList.add("navHide");
    x.classList.remove("navShow");
}


var jobs = ["Admin Executive", "Accountant", "Java Developer","Junior Architect", "Architect", "Kinder Garden Teacher", "Logistics", "Mechanical Engineering", "Marketing", "Network Engineer", "Operations Manager", "Pharmacist", "QA", "Quality Control", "Qa Engineer", "Receptionist", "React JS developer", "Real Estate", "Securtiy", "School Teacher", "Sales Executive", "Teacher", "Tally accountant", "Video Editor", "Banking jobs","Back Office", "Computer Operator", "Civil Engineer", "Digital Marketing", "Data Analyst",  "Web Developer", "Web Designer", "Programmer", "Ethical Hacking", "Data Scientist", "IT Manager", "Information Security Analyst", "Computer Systems Analyst", "Computer Network Architect", "Database Administrator"];

const joblistElement = document.querySelector('#job-list');
const jobInputElement = document.querySelector('#search-input');



function loadData(data, element){
    if(data){
        
        element.innerHTML = "";
        let innerElemet = "";
        data.forEach((item) => {
            innerElemet+=`
            <li>${item}</li>
            `
            
        });
        element.innerHTML = innerElemet;
    }
}

function filterData(data, searchText){
    return data.filter((x) => x.toLowerCase().startsWith(searchText.toLowerCase()));
}

jobInputElement.addEventListener("input", function(){
    if(jobInputElement.value == ""){
        joblistElement.style.display = "none";
    }
    else{
        joblistElement.style.display = "block";
        var filteredData = filterData(jobs, jobInputElement.value);
    loadData(filteredData, joblistElement); 
    }
    
}); 

function unFocused(){
    joblistElement.style.display = "none";
}
function focused(){
    joblistElement.style.display = "block";
}

const selectionOne = document.querySelector(".header");

const selectionToObserve = document.querySelector(".section-hero");

const options = {
    root: null,
    threshold: 0,
    rootMargin: "-600px 0px 0px 0px",
};

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            selectionOne.classList.add("nav-scrolled");
            document.querySelector(".header__title").style.color = "#39273F";
            document.documentElement.style.setProperty("--javacript-color", "#39273F");

            var elements = document.getElementsByClassName("header__links");
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.color="#39273F";
            }   
            
            
        }
        else{
            selectionOne.classList.remove("nav-scrolled");
            document.querySelector(".header__title").style.color = "white";
            var elements = document.getElementsByClassName("header__links");
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.color="white";
            }  

            document.documentElement.style.setProperty("--javacript-color", "white");
            
        }
    });
}, options); 




    observer.observe(selectionToObserve);


