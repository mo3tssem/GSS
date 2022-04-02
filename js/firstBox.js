


/* variable definition*/
var datalist = document.getElementById("datalist");
var input1 = document.getElementById("searchField");
var inputto1 = document.getElementById("searchField2");

var test = 0;
var Same = false;
var endPointNumber, beginPointNumber;
var EndAndBeginSamein = "";
var beginvaluPoint, endvaluPoint;
var the_beginlevelnameNotInsid = "";
var nameOflevels = "";

var mo3 = false;
var beginPoint, endpoint, beginPointlevel, endpointlevel, beginPointLevelViste, endPointleveViste;
var beginPointLevelViste = new Array([]);
var numberOfLevelInsideArray = new Array([]);
beginPointLevelViste[0] = beginPointLevelViste[1] = beginPointLevelViste[2] = beginPointLevelViste[3] = false;




var endPointLevelViste = new Array([]);
endPointLevelViste[0] = endPointLevelViste[1] = endPointLevelViste[2] = endPointLevelViste[3] = false;




var levelone = [{ "label": "مختبر lap5", "coord": "42,69", "id": 1 },
    { "label": "مختبر lap1", "coord": "43,329", "id": 2 },
    { "label": " مختبر lap4 ", "coord": "42,187", "id": 2 },
{ "label": "  غرفة المعيدين lap2 ", "coord": "45,282", "id": 2 },
{ "label": "مختبر lap3", "coord": "42,205", "id": 2 },
{ "label": " الصيانة ", "coord": "42,118", "id": 2 },
{ "label": " قاعة المؤتمرات ", "coord": "129,68", "id": 2 },
{ "label": " الصالة", "coord": "110,154", "id": 2 },
{ "label": " استراحة مقاعد المدخل الأول ", "coord": "129,142", "id": 2 },
{ "label": " أضواء المستقبل ", "coord": "145,117", "id": 2 },
{ "label": " المدخل الأول ", "coord": "178,93", "id": 2 },
{ "label": " بيسان ", "coord": "128,331", "id": 2 },
{ "label": " المدخل الأول ", "coord": "178,88", "id": 2 },
{ "label": " المدخل الثاني ", "coord": "175,302", "id": 2 },
{ "label": "استراحة مقاعد المدخل الثاني ", "coord": "143,236", "id": 2 },
{ "label": "بيسان المدخل الثاني", "coord": "63,378", "id": 2 },
 { "label": "دورة مياة الموضفين", "coord": "33,88", "id": 2 },
 { "label": "دورة مياة طالبات المستوى الأول", "coord": "33,302", "id": 2 }
];



var levetow = [{ "label": "مكتب د.إيهاب زقوت", "coord": "154,299", "id": 3 },
 { "label": "مكتب د.نبيل أبو شعبان", "coord": "156,97", "id": 4 }, { "label": "دورة مياة طلاب الطابق الأول", "coord": "34,89", "id": 4 },
 { "label": "ورشة 1", "coord": "42,110", "id": 4 }, { "label": "ورشة 2", "coord": "45,186", "id": 4 }, { "label": "مكتب د فوزي أبو جراد", "coord": "21,210", "id": 4 },
       { "label": "مكتب د أحمد عيسى", "coord": "17,217", "id": 4 }, { "label": "مكتب د مصطفى أبو النصر ", "coord": "41,227", "id": 4 },
       { "label": "مكتب د نشأت نعيم", "coord": "32,227", "id": 4 }, { "label": "مكتب د أيمن عياد", "coord": "17,239", "id": 4 },
       { "label": "مكتب أ ناصر المصري ", "coord": "19,252", "id": 4 }, { "label": "مكتب د ماهر شامية", "coord": "31,253", "id": 4 },
       { "label": " مكتب أ يوسف أبو سلطان", "coord": "41,259", "id": 4 }, { "label": "مكتب د عادل أحمد", "coord": "17,271", "id": 4 },
       { "label": "مكتب د غير معروف ", "coord": "24,227", "id": 4 }, { "label": "دورة مياة طالبات الطابق الأول", "coord": "36,311", "id": 4 }
       , { "label": "مختبر lap7  ", "coord": "39,326", "id": 4 }, { "label": "مختبر lap6", "coord": "45,70", "id": 4 }
       , { "label": "قاعة المؤتمرات الطابق الأول", "coord": "131,70", "id": 4 }, { "label": "بيسان الطابق الأول ", "coord": "130,327", "id": 4 }

        , { "label": " مكتب أ عبد الباسط المصري", "coord": "170,136", "id": 4 }, { "label": "مكتب د مصعب عياد", "coord": "180,136", "id": 4 },
        { "label": "مكتب أ علاء عكيلة ", "coord": "171,114", "id": 4 }, { "label": "مكتب أ محمد أبو شعبان", "coord": "178,114", "id": 4 },
        { "label": "السكرتاريا", "coord": "155,212", "id": 4 }, { "label": "  مكتب د عبد الله ريحان ", "coord": "180,227", "id": 4 }
        , { "label": "مكتب د يوسف أبو شعبان ", "coord": "171,252", "id": 4 }, { "label": "مكتب د  مازن أبو عمرو  ", "coord": "159,256", "id": 4 }
         , { "label": "مكتب د أحمد محمود  ", "coord": "165,277", "id": 4 }, { "label": "مكتب د سامي أبو ناصر  ", "coord": "176,278", "id": 4 }
          , { "label": "مكان غير معروف ", "coord": "171,155", "id": 4 }
];


var levelthree = [{ "label": "307 المدخل الثاني", "coord": "94,18", "id": 5 }, { "label": "307 المدخل الأول", "coord": "130,61", "id": 6 },
    { "label": "306", "coord": "44,69", "id": 6 }, { "label": "دورة مياه طلاب الطابق الثاني", "coord": "34,87", "id": 6 },
{ "label": "305 المدخل الثاني", "coord": "42,174", "id": 6 }, { "label": "305 المدخل الأول", "coord": "46,112", "id": 6 }, { "label": "المصلى", "coord": "149,99", "id": 6 },
{ "label": "309", "coord": "154,111", "id": 6 }, { "label": "310", "coord": "154,215", "id": 6 }, { "label": "311", "coord": "154,232", "id": 6 },
{ "label": "مكتبة المعيدات", "coord": "154,298", "id": 6 }, { "label": "306", "coord": "35,326", "id": 6 }, { "label": "303 المدخل الأول ", "coord": "44,282", "id": 6 },
{ "label": "303 المدخل الثاني ", "coord": "42,240", "id": 6 }, { "label": "304", "coord": "34,217", "id": 6 },
{ "label": "دورة مياة طالبات الطابق الثاني", "coord": "34,312", "id": 6 }, { "label": "302", "coord": "42,328", "id": 6 },
{ "label": "301 المدخل الأول", "coord": "131,332", "id": 6 }, { "label": "301 المدخل الثاني", "coord": "76,370", "id": 6 },
];
var allLevel_new = levelone.concat(levetow, levelthree);



/* ["begin point ,end point ]*/

var mo3tssem = false;
var leveloneDefaultPoint, levelTowDefaultPoint, levelThreeDefaultPoint;

var leveloneDefaultPoint = ["66,105", "73,107"], levelTowDefaultPoint = ["85,116", "73,116"], levelThreeDefaultPoint = ["85,117", "72,118"];

var leveloneDefaultPoint_door = ["76,281", "73,287"], levelTowDefaultPoint_door = ["87,277", "73,278"], levelThreeDefaultPoint_door = ["88,281", "72,283"];

function changePath() {
    test = 1;
    check();

    for (var i = 0 ; i < beginPointLevelViste.length ; i++) {


        if (beginPointLevelViste[i] == true) {
            beginPointNumber = i + 1;

        }
    }




    for (var i = 0 ; i < endPointLevelViste.length; i++) {
        if (endPointLevelViste[i] == true) {

            endPointNumber = i + 1;

        }




    }

    if (endPointNumber > beginPointNumber) {



        if (endPointNumber == 3 && beginPointNumber == 1) {

            nameOflevels = "one_three";
            if (mo3tssem == false) {
                localStorage.setItem('beginvaluPoint_no_inside_page_one', beginvaluPoint);

                localStorage.setItem('endvaluPoint_no_inside_page_one', leveloneDefaultPoint_door[1]);

                localStorage.setItem('beginvaluPoint_no_inside_page_two', levelTowDefaultPoint_door[0]);

                localStorage.setItem('endvaluPoint_no_inside_page_two', levelTowDefaultPoint_door[1]);

                localStorage.setItem('beginvaluPoint_no_inside_page_Three', levelThreeDefaultPoint_door[0]);

                localStorage.setItem('endvaluPoint_no_inside_page_Three', endvaluPoint);
                localStorage.setItem('nameOflevels', nameOflevels);
            }
        }

        //window.location = "a.html";

        if (beginPointLevelViste.indexOf(true) == -1) {
            alert("begin");
        }
        else if (endPointLevelViste.indexOf(true) == -1) {
            alert("enda");
        }
        else if (endPointLevelViste.indexOf(true) != -1 || beginPointLevelViste.indexOf(true) != -1) {
            window.location = "a.html";
        }
    }
    if (endPointNumber - beginPointNumber == 1) {
        NotInsideLevel1();
    }
    //countinu ya mo3tssem :) 3 >> 1 فقط ! 

    if (endPointNumber < beginPointNumber) {

        if (endPointNumber == 1 && beginPointNumber == 3) {

            nameOflevels = "three_one";

            localStorage.setItem('endvaluPoint_no_inside_page_Three', levelThreeDefaultPoint_door[0]);

            localStorage.setItem('beginvaluPoint_no_inside_page_Three', beginvaluPoint);

            localStorage.setItem('endvaluPoint_no_inside_page_two', levelTowDefaultPoint_door[0]);

            localStorage.setItem('beginvaluPoint_no_inside_page_two', levelTowDefaultPoint_door[1]);

            localStorage.setItem('beginvaluPoint_no_inside_page_one', leveloneDefaultPoint_door[1]);
            localStorage.setItem('endvaluPoint_no_inside_page_one', endvaluPoint);
            localStorage.setItem('nameOflevels', nameOflevels);

        }

        if (beginPointLevelViste.indexOf(true) == -1) {
            alert("begin");
        }
        else if (endPointLevelViste.indexOf(true) == -1) {
            alert("enda");
        }
        else if (endPointLevelViste.indexOf(true) != -1 || beginPointLevelViste.indexOf(true) != -1) {
            window.location = "a.html";
        }
    }

    if (beginPointNumber - endPointNumber == 1) {

        NotInsideLevel1();

    }

    function NotInsideLevel1() {
        if (endPointNumber > beginPointNumber) {

            if (beginPointNumber == 1) {

                localStorage.setItem('beginvaluPoint_no_inside_page_one', beginvaluPoint); /*begin point from user */
                localStorage.setItem('endvaluPoint_no_inside_page_one', leveloneDefaultPoint_door[1]); /*end point from default*/
                localStorage.setItem('beginvaluPoint_no_inside_page_two', levelTowDefaultPoint_door[0]); /*begin point from default*/
                localStorage.setItem('endvaluPoint_no_inside_page_two', endvaluPoint); /*end point from user */
                the_beginlevelnameNotInsid = "one";



            }
            else if (beginPointNumber == 2) {

                the_beginlevelnameNotInsid = "two";

                localStorage.setItem('beginvaluPoint_no_inside_page_two', beginvaluPoint); /*begin point from user */

                localStorage.setItem('endvaluPoint_no_inside_page_two', levelTowDefaultPoint_door[1]); /*end point from default*/

                localStorage.setItem('beginvaluPoint_no_inside_page_Three', levelThreeDefaultPoint_door[0]); /*begin point from default*/

                localStorage.setItem('endvaluPoint_no_inside_page_Three', endvaluPoint); /*end point from user */




            }




        }




        else if (endPointNumber < beginPointNumber) {

            if (beginPointNumber == 2) {


                localStorage.setItem('beginvaluPoint_no_inside_page_two', beginvaluPoint); /*begin point from user */
                localStorage.setItem('endvaluPoint_no_inside_page_two', levelTowDefaultPoint_door[0]); /*end point from default*/
                localStorage.setItem('beginvaluPoint_no_inside_page_one', leveloneDefaultPoint_door[1]); /*end point from default*/
                localStorage.setItem('endvaluPoint_no_inside_page_one', endvaluPoint); /*end point from user */
                the_beginlevelnameNotInsid = "Two_one";



            }
            else if (beginPointNumber == 3) {


                localStorage.setItem('beginvaluPoint_no_inside_page_Three', beginvaluPoint); /*begin point from user */
                localStorage.setItem('endvaluPoint_no_inside_page_Three', levelThreeDefaultPoint_door[0]); /*end point from default*/
                localStorage.setItem('beginvaluPoint_no_inside_page_two', levelTowDefaultPoint_door[1]); /*end point from default*/
                localStorage.setItem('endvaluPoint_no_inside_page_two', endvaluPoint); /*end point from user */
                the_beginlevelnameNotInsid = "three_two";



            }
        }
        localStorage.setItem('the_beginlevelnameNotInsid', the_beginlevelnameNotInsid);



        if (beginPointLevelViste.indexOf(true) == -1) {
            alert("begin");
        }
        else if (endPointLevelViste.indexOf(true) == -1) {
            alert("enda");
        }
        else if (endPointLevelViste.indexOf(true) != -1 || beginPointLevelViste.indexOf(true) != -1) {
            window.location = "a.html";
        }


    }




}

function backpath() {
    test = 1;
    check();
}


var split, split1;

var number_of_leve_show = new Array([]);

function append_place() {

    var containerfrom = document.getElementById('first_place'),
        containerto = document.getElementById('secound_plcae'),
        i = 0,
        len = allLevel_new.length,
        dl = document.createElement('datalist');
    dl.id = 'dlCities';
    for (; i < len; i += 1) {


        var option = document.cereateElement('option');
        option.value = allLevel_new[i].label;
        //option.value = level2[i][0];
        dl.appendChild(option);
    }

    containerfrom.appendChild(dl);
    containerto.appendChild(dl);
}


//append_place();


function check() {


    if (test == 0) {
        localStorage.setItem('input1', input1.value);
        localStorage.setItem('inputto1', inputto1.value);


    }

    var input2 = localStorage.getItem('input1').toString();
    var inputto2 = localStorage.getItem('inputto1').toString();



    /* begin_point To determine the level and activation*/
    for (var i = 0; i < levelone.length; i++) {

        if (levelone[i].label.toString() === input2) {
            beginPointlevel = 1;
            beginPointLevelViste[0] = true;
            beginvaluPoint = levelone[i].coord;


        }
    }

    for (var i = 0; i < levetow.length; i++) {

        if (levetow[i].label.toString() === input2) {


            beginPointlevel = 2;
            beginPointLevelViste[1] = true;
            beginvaluPoint = levetow[i].coord;
        }
    }

    for (var i = 0; i < levelthree.length; i++) {

        if (levelthree[i].label.toString() === input2) {
            beginPointlevel = 3;

            beginPointLevelViste[2] = true;
            beginvaluPoint = levelthree[i].coord;
        }

    }

    /* end_point To determine the level and activation*/
    for (var i = 0; i < levelone.length; i++) {

        if (levelone[i].label.toString() === inputto2) {
            endpointlevel = 1; endPointLevelViste[0] = true;

            endvaluPoint = levelone[i].coord;
        }
    }

    for (var i = 0; i < levetow.length; i++) {

        if (levetow[i].label.toString() === inputto2) {

            endpointlevel = 2; endPointLevelViste[1] = true;
            endvaluPoint = levetow[i].coord;
        }
    }

    for (var i = 0; i < levelthree.length; i++) {

        if (levelthree[i].label.toString() === inputto2) {
            endpointlevel = 3; endPointLevelViste[2] = true;
            endvaluPoint = levelthree[i].coord;
        }
    }


    for (var i = 0 ; i < beginPointLevelViste.length; i++) {

        // in the same level
        if (beginPointlevel == endpointlevel && beginPointLevelViste[i] == true) {


            if (endpointlevel == 1) {
                EndAndBeginSamein = "one";



            }
            else if (endpointlevel == 2) {
                Same = true;
                EndAndBeginSamein = "two";

            }
            else if (endpointlevel == 3) {
                Same = true;

                EndAndBeginSamein = "three";

            }


            if (beginPointLevelViste.indexOf(true) == -1) {
                alert("begin");
            }
            else if (endPointLevelViste.indexOf(true) == -1) {
                alert("enda");
            }
            else if (endPointLevelViste.indexOf(true) != -1 || beginPointLevelViste.indexOf(true) != -1) {
                window.location = "a.html";
            }



        }
        else if (beginPointlevel != endpointlevel) {
            mo3 = true;
        }
    }

    if (mo3 == true) {
        checkLevels();
    }

    localStorage.setItem('beginPoint', input2);
    localStorage.setItem('endPoint', inputto2);
    localStorage.setItem('beginPointvalue', beginvaluPoint);
    localStorage.setItem('endPointValue', endvaluPoint);
    localStorage.setItem('EndAndBeginSameinLocal', EndAndBeginSamein);
}

var beginlevel, endlevel;

function checkLevels() {

    for (var i = 0 ; i < beginPointLevelViste.length ; i++) {


        if (beginPointLevelViste[i] == true) {
            beginPointNumber = i + 1;

        }
    }




    for (var i = 0 ; i < endPointLevelViste.length; i++) {
        if (endPointLevelViste[i] == true) {

            endPointNumber = i + 1;

        }




    }


    /*in the same bulding but in difrrent level  1 >> 3  فقط */

    if (endPointNumber > beginPointNumber) {



        if (endPointNumber == 3 && beginPointNumber == 1) {

            nameOflevels = "one_three";
            if (mo3tssem == false) {
                localStorage.setItem('beginvaluPoint_no_inside_page_one', beginvaluPoint);

                localStorage.setItem('endvaluPoint_no_inside_page_one', leveloneDefaultPoint[1]);

                localStorage.setItem('beginvaluPoint_no_inside_page_two', levelTowDefaultPoint[0]);

                localStorage.setItem('endvaluPoint_no_inside_page_two', levelTowDefaultPoint[1]);

                localStorage.setItem('beginvaluPoint_no_inside_page_Three', levelThreeDefaultPoint[0]);

                localStorage.setItem('endvaluPoint_no_inside_page_Three', endvaluPoint);
                localStorage.setItem('nameOflevels', nameOflevels);
            }
        }

        //window.location = "a.html";

        if (beginPointLevelViste.indexOf(true) == -1) {
            alert("begin");
        }
        else if (endPointLevelViste.indexOf(true) == -1) {
            alert("enda");
        }
        else if (endPointLevelViste.indexOf(true) != -1 || beginPointLevelViste.indexOf(true) != -1) {
            window.location = "a.html";
        }
    }
    if (endPointNumber - beginPointNumber == 1) {
        NotInsideLevel();
    }
    //countinu ya mo3tssem :) 3 >> 1 فقط ! 

    if (endPointNumber < beginPointNumber) {

        if (endPointNumber == 1 && beginPointNumber == 3) {

            nameOflevels = "three_one";

            localStorage.setItem('endvaluPoint_no_inside_page_Three', levelThreeDefaultPoint[0]);

            localStorage.setItem('beginvaluPoint_no_inside_page_Three', beginvaluPoint);

            localStorage.setItem('endvaluPoint_no_inside_page_two', levelTowDefaultPoint[0]);

            localStorage.setItem('beginvaluPoint_no_inside_page_two', levelTowDefaultPoint[1]);

            localStorage.setItem('beginvaluPoint_no_inside_page_one', leveloneDefaultPoint[1]);

            localStorage.setItem('endvaluPoint_no_inside_page_one', endvaluPoint);
            localStorage.setItem('nameOflevels', nameOflevels);



        }

        if (beginPointLevelViste.indexOf(true) == -1) {
            alert("begin");
        }
        else if (endPointLevelViste.indexOf(true) == -1) {
            alert("enda");
        }
        else if (endPointLevelViste.indexOf(true) != -1 || beginPointLevelViste.indexOf(true) != -1) {
            window.location = "a.html";
        }


    }



    if (beginPointNumber - endPointNumber == 1) {

        NotInsideLevel();


    }



    //  window.location = "a.html";

}


function NotInsideLevel() {
    if (endPointNumber > beginPointNumber) {

        if (beginPointNumber == 1) {

            localStorage.setItem('beginvaluPoint_no_inside_page_one', beginvaluPoint); /*begin point from user */
            localStorage.setItem('endvaluPoint_no_inside_page_one', leveloneDefaultPoint[1]); /*end point from default*/
            localStorage.setItem('beginvaluPoint_no_inside_page_two', levelTowDefaultPoint[0]); /*begin point from default*/
            localStorage.setItem('endvaluPoint_no_inside_page_two', endvaluPoint); /*end point from user */
            the_beginlevelnameNotInsid = "one";



        }
        else if (beginPointNumber == 2) {

            the_beginlevelnameNotInsid = "two";

            localStorage.setItem('beginvaluPoint_no_inside_page_two', beginvaluPoint); /*begin point from user */

            localStorage.setItem('endvaluPoint_no_inside_page_two', levelTowDefaultPoint[1]); /*end point from default*/

            localStorage.setItem('beginvaluPoint_no_inside_page_Three', levelThreeDefaultPoint[0]); /*begin point from default*/

            localStorage.setItem('endvaluPoint_no_inside_page_Three', endvaluPoint); /*end point from user */




        }




    }




    else if (endPointNumber < beginPointNumber) {

        if (beginPointNumber == 2) {


            localStorage.setItem('beginvaluPoint_no_inside_page_two', beginvaluPoint); /*begin point from user */
            localStorage.setItem('endvaluPoint_no_inside_page_two', levelTowDefaultPoint[0]); /*end point from default*/
            localStorage.setItem('beginvaluPoint_no_inside_page_one', leveloneDefaultPoint[1]); /*end point from default*/
            localStorage.setItem('endvaluPoint_no_inside_page_one', endvaluPoint); /*end point from user */
            the_beginlevelnameNotInsid = "Two_one";



        }
        else if (beginPointNumber == 3) {


            localStorage.setItem('beginvaluPoint_no_inside_page_Three', beginvaluPoint); /*begin point from user */
            localStorage.setItem('endvaluPoint_no_inside_page_Three', levelThreeDefaultPoint[0]); /*end point from default*/
            localStorage.setItem('beginvaluPoint_no_inside_page_two', levelTowDefaultPoint[1]); /*end point from default*/
            localStorage.setItem('endvaluPoint_no_inside_page_two', endvaluPoint); /*end point from user */
            the_beginlevelnameNotInsid = "three_two";



        }
    }
    localStorage.setItem('the_beginlevelnameNotInsid', the_beginlevelnameNotInsid);



    if (beginPointLevelViste.indexOf(true) == -1) {
        alert("begin");
    }
    else if (endPointLevelViste.indexOf(true) == -1) {
        alert("enda");
    }
    else if (endPointLevelViste.indexOf(true) != -1 || beginPointLevelViste.indexOf(true) != -1) {
        window.location = "a.html";
    }

    //  window.location = "a.html";


}




$("#map").bind("pageshow", function (e) {

    $("#searchField").autocomplete({
        target: $('#searchFieldUL'), source: allLevel_new, callback: function (e)
        {
            var $a = $(e.currentTarget); $('#searchField').val($a.text());
            $("#searchField").autocomplete('clear');
        }, minLength: 1, matchFromStart: false
    });


    $("#searchField2").autocomplete({
        target: $('#searchField2UL'), source: allLevel_new, callback: function (e) {
            var $a = $(e.currentTarget); $('#searchField2').val($a.text());
            $("#searchField2").autocomplete('clear');
        }, minLength: 1, matchFromStart: false
    });
});


