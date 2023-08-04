    const listStyleChangeStartY = 373;
    const listStyleChangeEndY = 1585;

    const listItems = document.querySelectorAll(".list-item");

    const division = (listStyleChangeEndY - listStyleChangeStartY) / listItems.length;

    const panel1Image = document.getElementById("panel1-image");
    const flyingLionImage = document.getElementById("flying-lion-image")

    window.addEventListener("scroll", () => {
      // console.log(window.scrollY) // 처음지점 끝지점 파악
        if(document.getElementById("on")) document.getElementById("on").removeAttribute("id");
        
        if(window.scrollY > listStyleChangeStartY && window.screenY < listStyleChangeEndY) {
            const targetIndex = Math.round((window.scrollY - listStyleChangeStartY) / division)
            
            if(listItems[targetIndex]) listItems[targetIndex].id = 'on';
        };

        const scrollYBottom = window.scrollY + document.documentElement.clientHeight; //스크롤했을때 맨 위 높이 + 화면높이
        
        if(scrollYBottom > panel1Image.offsetTop && scrollYBottom < panel1Image.offsetTop + panel1Image.offsetHeight) {
            const translateX = 80 - 80 * (scrollYBottom - panel1Image.offsetTop) / (panel1Image.offsetHeight);
            const translateY = -13 + 13 * (scrollYBottom - panel1Image.offsetTop) / (panel1Image.offsetHeight);
        

            const rotationDegree = 23 - 23 * (scrollYBottom - panel1Image.offsetTop) / (panel1Image.offsetHeight);

            flyingLionImage.style.transform =  `translate(${translateX}px, ${translateY}px) rotate(${rotationDegree}deg)`;
        }
    });