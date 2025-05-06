var typed= new Typed(".typing",{
    strings:["","Web Developer","java Developer","Fresher"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

const nav= document.querySelector(".nav"),
        navList=nav.querySelectorAll("li"),
        totalNavList = navList.length;
        allSection = document.querySelectorAll(".section");
        totalSection= allSection.length;
        for(let i=0;i<totalNavList; i++){
            const a=navList[i].querySelector("a");
            a.addEventListener("click",function(){
                for(let j=0; j<totalNavList;j++){
                    navList[j].querySelector("a").classList.remove("active");
                }
                this.classList.add("active")
                showSection(this);
            })
        }
        function showSection(element){
            for (let i=0;i<totalSection;i++){
                allSection[i].classList.remove("active");
            }
            const target= element.getAttribute("href").split("#")[1];
            document.querySelector("#" + target).classList.add("active")
        }
        // function updateNav(element){
        //     console.log(element.getAttribute("href").split("#")[1])
        // }
        // document.querySelector(".hire-me").addEventListener("click",function(){
        //     showSection(this);
        //     updateNav(this);
        // })

        function updateNav(element) {
            console.log(element.getAttribute("href").split("#")[1]);
        }
        
        function showSection(element) {
            const targetId = element.getAttribute("href").split("#")[1];
            document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
            document.getElementById(targetId).classList.add("active");
        }
        
        // Add click event to all elements with class "hire-me"
        document.querySelectorAll(".hire-me").forEach(button => {
            button.addEventListener("click", function (e) {
                e.preventDefault(); // Prevent default anchor behavior
                showSection(this);
                updateNav(this);
            });
        });
        