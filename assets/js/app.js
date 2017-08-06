document.addEventListener("DOMContentLoaded", function() {
    // Functions which show or hide chosen element
    function showElement(element) {
        element.style.display = "block";
    }

    function hideElement(element) {
        element.style.display = "none";
    }
    /*
    Dropdown Menu
    */
    var dropdownButton = document.getElementById('dropdownButton');
    var dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.style.display = "none";

    dropdownButton.addEventListener('mouseover', function() {
        showElement(dropdownMenu);
    });

    dropdownButton.addEventListener('mouseout', function() {
        hideElement(dropdownMenu);
    });


    /*
    Image captions
    */
    var images = document.querySelectorAll('.chair img');

    for (var i = 0; i < images.length; i++) {
        showElement(images[i].nextElementSibling)
        images[i].addEventListener('mouseover', function() {
            hideElement(this.nextElementSibling);
        });

        images[i].addEventListener('mouseout', function() {
            showElement(this.nextElementSibling);
        });
    }

    /*
    Slider
    */
    var arrowPrev = document.getElementById('js-arrowPrev');
    var arrowNext = document.getElementById('js-arrowNext');
    var slides = document.getElementsByClassName('js-slides');
    var index = 0;


    slides[index].classList.add('visible');

    arrowNext.addEventListener("click", function() {
        slides[index].classList.remove('visible');
        index++;
        if (index == slides.length) {
            index = 0;
        }
        slides[index].classList.add('visible');
    });

    arrowPrev.addEventListener("click", function() {
        slides[index].classList.remove('visible');
        index--;
        if (index < 0) {
            index = slides.length - 1;
        }
        slides[index].classList.add('visible');
    });

    /*
    Calculator
    */
    var arrows = document.getElementsByClassName('list_arrow');
    var listPanel = document.getElementsByClassName('list_panel');
    var panelLeft = document.querySelector('.panel_left');
    var panelRight = document.querySelector('.panel_right');
    var transport = document.getElementById('transport');
    var sumForm = document.getElementsByTagName('strong')[0];

    // Function which returns the whole cost of product
    function calculate() {
        var panelRight = document.querySelector('.panel_right').children;
        var sum = 0;
        for (var i = 0; i < panelRight.length; i++) {
            sum += Number(panelRight[i].innerText);
        }
        sumForm.innerText = sum;
    }

    // Loop which shows and hides the choice menu
    for (var j = 0; j < arrows.length; j++) {
        hideElement(arrows[j].nextElementSibling);
        arrows[j].addEventListener('click', function() {
            if (this.nextElementSibling.style.display === "none") {
                showElement(this.nextElementSibling);
            } else {
                hideElement(this.nextElementSibling);
            }
        });

    }


    // Function which add chosen items and values to the summary panel
    function addValues(listPanelChild) {
        for (var i = 0; i < listPanel[listPanelChild].children.length; i++) {
            listPanel[listPanelChild].children[i].addEventListener('click', function() {
                if (listPanelChild === 0) {
                    panelLeft.children[listPanelChild].innerText = "Chair " + this.innerText;
                } else {
                    panelLeft.children[listPanelChild].innerText = this.innerText;
                }
                panelRight.children[listPanelChild].innerText = this.dataset.price;
                calculate();
            });
        }
    }

    for (var k = 0; k < listPanel.length; k++) {
        addValues(k);
    }

    // Event which adds transport values to the summary panel
    transport.addEventListener('click', function() {
        if (transport.checked) {
            panelLeft.lastElementChild.innerText = "Transport";
            panelRight.lastElementChild.innerText = this.dataset.price;
        } else {
            panelLeft.lastElementChild.innerText = " ";
            panelRight.lastElementChild.innerText = " ";
        }
        calculate();
    });



});
