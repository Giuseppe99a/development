if (document.documentElement.clientWidth < 480) { 
    document.querySelector("meta[name=viewport]").setAttribute(
          'content', 
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
 }
    


    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){  
        for(tablink of tablinks){ 
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){ 
            tabcontent.classList.remove("active-tab");
        }
        EventTarget.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }




    var sidemenu = document.getElementById("sidemenu");

    function openmenu(){
        sidemenu.style.right = "0";
    }

    function closemenu(){
        sidemenu.style.right = "-200px";
    }

    

    
