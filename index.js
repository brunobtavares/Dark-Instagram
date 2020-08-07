document.addEventListener('DOMContentLoaded', function () {

    var _isOn = localStorage.getItem('IsOn');

    if (_isOn == "true") {
        document.getElementById("on_off").innerHTML = "On";
        document.getElementById("ck").checked = true;
    }
    else if (_isOn == "false") {
        document.getElementById("on_off").innerHTML = "Off";
        document.getElementById("ck").checked = false;
    }

    chrome.tabs.executeScript({ code: `(${inContent})()` });
    function inContent() {

        window.addEventListener('scroll', function (event) {

            //Card do feed
            for (let i = 0; i < document.getElementsByClassName("_8Rm4L M9sTE  L_LMM SgTZ1   ePUX4").length; i++) {

                if (document.getElementsByClassName("_8Rm4L M9sTE  L_LMM SgTZ1   ePUX4")[i].style.backgroundColor != "#242526") {
                    document.getElementsByClassName("_8Rm4L M9sTE  L_LMM SgTZ1   ePUX4")[i].style.backgroundColor = "#242526";
                    document.getElementsByClassName("_8Rm4L M9sTE  L_LMM SgTZ1   ePUX4")[0].style.borderColor = "#242526";
                }
            }
        });
    }


    document.getElementById("switch").addEventListener('change', function () {
        let lbl = document.getElementById("on_off");

        if (lbl.innerHTML == "Off") {
            localStorage.setItem('IsOn', true);
            lbl.innerHTML = "On";
            SetDarkTheme();
        }
        else if (lbl.innerHTML == "On") {
            localStorage.setItem('IsOn', false);
            lbl.innerHTML = "Off";
            RemoveDarkTheme();
        }
    });

    function SetDarkTheme() {
        chrome.tabs.executeScript({ code: `(${inContent})()` });
        function inContent() {

            //Barra de pesquisa
            document.getElementsByClassName("_lz6s  Hz2lF")[0].style.backgroundColor = "#242526";
            document.getElementsByClassName("_lz6s  Hz2lF")[0].style.borderBottom = "#242526";

            //Logo do instagram
            document.getElementsByClassName("s4Iyt")[0].style.filter = "invert(1)";

            //Campo de pesquisa
            document.getElementsByClassName("XTCLo x3qfX")[0].style.backgroundColor = "#3A3B3C";
            document.getElementsByClassName("XTCLo x3qfX")[0].style.borderColor = "#3A3B3C";

            //Icones da barra de pesquisa
            for (let i = 0; i < document.querySelectorAll("._47KiJ ._8-yf5 ").length; i++) {
                document.querySelectorAll("._47KiJ ._8-yf5 ")[i].style.fill = "#B0B3B8";
            }

            //Toda tela
            document.getElementsByClassName("SCxLW  o64aR")[0].style.backgroundColor = "#18191A";

            //Cor do nome
            document.getElementsByClassName("gmFkV")[0].style.color = "#E4E6EB";

            //Barra de stories
            document.getElementsByClassName("zGtbP IPQK5 VideM")[0].style.backgroundColor = "#242526";
            document.getElementsByClassName("zGtbP IPQK5 VideM")[0].style.borderColor = "#242526";
        }
    }

    function RemoveDarkTheme() {
        chrome.tabs.executeScript({ code: `(${inContent})()` });
        function inContent() {

            //Barra de pesquisa
            document.getElementsByClassName("_lz6s  Hz2lF")[0].style.backgroundColor = "";
            document.getElementsByClassName("_lz6s  Hz2lF")[0].style.borderBottom = "";

            //Logo do instagram
            document.getElementsByClassName("s4Iyt")[0].style.filter = "";

            //Campo de pesquisa
            document.getElementsByClassName("XTCLo x3qfX")[0].style.backgroundColor = "";
            document.getElementsByClassName("XTCLo x3qfX")[0].style.borderColor = "rgb(195, 195, 195))";

            //Icones da barra de pesquisa
            for (let i = 0; i < document.querySelectorAll("._47KiJ ._8-yf5 ").length; i++) {
                document.querySelectorAll("._47KiJ ._8-yf5 ")[i].style.fill = "#262626";
            }

            //Toda tela
            document.getElementsByClassName("SCxLW  o64aR")[0].style.backgroundColor = "";

            //Cor do nome
            document.getElementsByClassName("gmFkV")[0].style.color = "";

            //Barra de stories
            document.getElementsByClassName("zGtbP IPQK5 VideM")[0].style.backgroundColor = "";
            document.getElementsByClassName("zGtbP IPQK5 VideM")[0].style.borderColor = "";
        }
    }

});