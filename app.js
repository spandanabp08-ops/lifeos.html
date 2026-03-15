function showPage(page){

document.querySelectorAll(".page").forEach(p=>{

p.classList.add("hidden")

})

document.getElementById(page).classList.remove("hidden")

}


document.getElementById("date").innerText = new Date().toDateString()


// CHARTS

new Chart(document.getElementById("lifeScore"),{

type:"doughnut",

data:{

datasets:[{

data:[80,20],

backgroundColor:["#6C63FF","#eee"]

}]

}

})


new Chart(document.getElementById("weeklyChart"),{

type:"line",

data:{

labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],

datasets:[{

label:"Productivity",

data:[4,5,6,3,7,8,6]

}]

}

})


new Chart(document.getElementById("studyChart"),{

type:"bar",

data:{

labels:["Week1","Week2","Week3"],

datasets:[{

label:"Study Hours",

data:[10,15,20]

}]

}

})
