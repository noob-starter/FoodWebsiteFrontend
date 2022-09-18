
// Create the dynamic images of the food items
(function () {

    function create() {
        const imagesListLinks = {
            1: "Assignment Assest\\Assets\\images\\dish1_9_s1.png",
            2: "Assignment Assest\\Assets\\images\\dish2_10.png",
            3: "Assignment Assest\\Assets\\images\\dish3_11.png",
            4: "Assignment Assest\\Assets\\images\\dish4_12.png",
            5: "Assignment Assest\\Assets\\images\\dish5.png",
            6: "Assignment Assest\\Assets\\images\\dish6.png",
            7: "Assignment Assest\\Assets\\images\\dish7.png",
            8: "Assignment Assest\\Assets\\images\\dish8.png",
            9: "Assignment Assest\\Assets\\images\\dish1_9_s1.png",
            10: "Assignment Assest\\Assets\\images\\dish2_10.png",
            11: "Assignment Assest\\Assets\\images\\dish3_11.png",
            12: "Assignment Assest\\Assets\\images\\dish4_12.png",
        }

        var mainContainer = document.createElement("div");
        mainContainer.id = "mainContainer";
        document.body.appendChild(mainContainer);

        for (var i = 0; i < 12; i++) {
            var divBlock = document.createElement("div");
            divBlock.className = "blocks";

            var image1 = document.createElement("img");
            image1.setAttribute('src', imagesListLinks[i + 1],);
            image1.setAttribute('class', 'pizza',)
            divBlock.appendChild(image1)

            var h1text = document.createElement("h1");
            h1text.appendChild(document.createTextNode("Home made pizza"))
            divBlock.appendChild(h1text)

            var h1text = document.createElement("h2");
            h1text.appendChild(document.createTextNode("₹ 199"))
            divBlock.appendChild(h1text)

            var button1 = document.createElement("input")
            button1.setAttribute('type', 'text',);
            button1.setAttribute('class', 'button1',);
            button1.setAttribute('id', 'star',);
            button1.setAttribute('placeholder', ' ★  4.7',);
            button1.setAttribute('disabled', 'disabled',);
            divBlock.appendChild(button1)

            var button2 = document.createElement("input")
            button2.setAttribute('type', 'text',);
            button2.setAttribute('class', 'button2',);
            button2.setAttribute('placeholder', ' 50-79 min',);
            button2.setAttribute('disabled', 'disabled',);
            divBlock.appendChild(button2)


            var image2 = document.createElement("img");
            image2.setAttribute('src', 'Assignment Assest\\Assets\\icons\\plus.svg',);
            image2.setAttribute('class', 'plus',)
            divBlock.appendChild(image2)

            mainContainer.appendChild(divBlock);
        }

    }

    create();

}());


// For the Slider of the food item 
const productContainers = Array.from(...document.querySelectorAll('.product-container'));
const nxtBtn = Array.from(...document.querySelectorAll('.nxt-btn'));
const preBtn = Array.from(...document.querySelectorAll('.pre-btn'));

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


    (function () {

        function createLine() {
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(300, 0);
            ctx.stroke();
        }
        createLine();
    }());



// For all the Modal popup windows
function openPopup() {
    document.body.setAttribute('style', 'overflow-y: hidden',)
    document.getElementById('popupWindow').setAttribute('style', 'transform: translate(-50%, -50%) scale(1); visibility: visible');
}

function closePopup() {
    document.body.setAttribute('style', 'overflow-y: visible',)
    document.getElementById('popupWindow').setAttribute('style', 'visibility: hidden')
}


function openPopupDish() {
    document.body.setAttribute('style', 'overflow-y: hidden',)
    document.getElementById('popupdish').setAttribute('style', 'transform: translate(-50%, -50%) scale(1); visibility: visible');
}

function closePopupDish() {
    document.body.setAttribute('style', 'overflow-y: visible',)
    document.getElementById('popupdish').setAttribute('style', 'z-index: -1; visibility: hidden')
}




