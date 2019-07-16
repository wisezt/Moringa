
    // build the Calendar

    let theCalendarDate = new Date();
    let theYear = theCalendarDate.getFullYear();
    let theMonth = theCalendarDate.getMonth();
    let theDay = theCalendarDate.getDay();
    let theDate = theCalendarDate.getDate();
    let selectMonth = true;
    let theDateId = "" + theYear + "y" + theMonth + "m" + theDate + "d";

    function setSalendar() {
      theYear = theCalendarDate.getFullYear();
      theMonth = theCalendarDate.getMonth();
      theDay = theCalendarDate.getDay();
      theDate = theCalendarDate.getDate();
      theDateId = "" + theYear + "y" + theMonth + "m" + theDate + "d";

    }




    // reflesh month information
    function showMonth() {
      var months = new Array(12);
      months[0] = "Jan";
      months[1] = "Feb";
      months[2] = "Mar";
      months[3] = "Apr";
      months[4] = "May";
      months[5] = "Jun";
      months[6] = "Jul";
      months[7] = "Aug";
      months[8] = "Sep";
      months[9] = "Oct";
      months[10] = "Nov";
      months[11] = "Dec";



      var monthString = months[theMonth];
      document.getElementById("month").innerHTML = monthString;

      if (selectMonth) {
        document.getElementById("month").style.fontWeight = 700;
        document.getElementById("year").style.fontWeight = 400;
      }

    }
    showMonth();


    function showYear() {
      document.getElementById("year").innerHTML = theYear;
      if (!selectMonth) {
        document.getElementById("year").style.fontWeight = 700;
        document.getElementById("month").style.fontWeight = 400;
      }
    }

    showYear();

    function chooseMonth() {
      selectMonth = true;
      showMonth();
      showYear();
    }

    function chooseYear() {
      selectMonth = false;
      showMonth();
      showYear();
    }


    function minus() {
      if (selectMonth) {
        theCalendarDate.setMonth(theMonth - 1);

      } else {
        theCalendarDate.setYear(theYear - 1);
      }
      setSalendar();
      showMonth();
      showYear();
      showDate();
    }

    function plus() {
      if (selectMonth) {
        theCalendarDate.setMonth(theMonth + 1);

      } else {
        theCalendarDate.setYear(theYear + 1);
      }
      setSalendar();
      showMonth();
      showYear();
      showDate();
    }





    let dayDiv = document.getElementById("id-dates");


    function showDate() {

      let tempCalendarDate = new Date(theYear, theMonth, 1);
      let tempYear = tempCalendarDate.getFullYear();
      let tempDate = tempCalendarDate.getDate();
      let tempDay = tempCalendarDate.getDay();
      let tempMonth = tempCalendarDate.getMonth();

      dayDiv.innerHTML = "<!--innerHTML-->"
      console.log(dayDiv.innerHTML);

      loopWeekDady: for (let i = 0; i < 6; i++) {


        // make there is enough rows for showing weeks.
        // porvide an extra row when the month span 6 weeks
        if (i == 5) {
          document.getElementById("id-dates").style.height = "270px";
          document.getElementById("calendar").style.height = "405px";

          console.log("i: 5");
          console.log("id-dates height: " + document.getElementById("id-dates").style.height);


        } else {
          document.getElementById("id-dates").style.height = "225px";
          document.getElementById("calendar").style.height = "360px";
        }



        loopDate: for (let j = 0; j < 7; j++) {
          console.log("tempYear: " + tempYear);
          console.log("tempDay: " + tempDay);
          console.log("tempDate: " + tempDate);
          console.log("tempMonth: " + tempMonth);
          console.log("i: " + i + "\nj: " + j);

          let tempId = "" + tempYear + "y" + tempMonth + "m" + tempDate + "d";


          if (tempDay == j) {
            dayDiv.innerHTML = dayDiv.innerHTML + "<div " + "id=" + tempId + " class= \"small-box\" " + " onclick=\"chooseDate('" + tempId + "')\"" + " data-value=" + "\"" + tempDate + "\" " + ">" + "<p>" + tempDate + "</p" +
              " class= \"date\" " + ">" + "</div>";
            //dayDiv.innerHTML = dayDiv.innerHTML + "<div " + "id=" + tempId + " class= \"small-box\" " + ">" + "<p>" + tempDate + "</p>" + "</div>";
            tempCalendarDate.setDate(tempDate + 1);
            tempDay = tempCalendarDate.getDay();
            tempDate = tempCalendarDate.getDate();

          } else {
            dayDiv.innerHTML = dayDiv.innerHTML + "<div class= \"small-box\" >" + "<p>" + " " + "</p>" + "</div>";
          }
          if (tempMonth != tempCalendarDate.getMonth()) {
            tempMonth = tempCalendarDate.getMonth();
            break loopWeekDady;
          }

        }

      }

      document.getElementById(theDateId).style.fontWeight = 700;
    }
    showDate();

    function chooseDate(tempid) {
      console.log("tempid: " + tempid);
      document.getElementById(theDateId).style.fontWeight = 400;
      theDateId = tempid;
      document.getElementById(theDateId).style.fontWeight = 700;
      theDate = document.getElementById(theDateId).getAttribute('data-value');
      console.log("theDate: " + theDate);
      theCalendarDate.setDate(theDate);
      setSalendar();
    }



    // Show Calendar

    let iconCalendarDiv = document.getElementById("icon-calendar-id");
    let  calendarTop = iconCalendarDiv.getBoundingClientRect().top;
    let  calendarLeft = iconCalendarDiv.getBoundingClientRect().left-400-346;
    document.getElementById("calendar").style.position="absolute";
    document.getElementById("calendar").style.top=calendarTop+"px";
    document.getElementById("calendar").style.left=calendarLeft+"px";

    function showCalendar() {


      if(document.getElementById("calendar").style.display == "none"){
          document.getElementById("calendar").style.display = "block";
      }else{
          document.getElementById("calendar").style.display = "none";
      }


    }

//hide calendar

function hideCalendar(){
    document.getElementById("calendar").style.display = "none";
}
hideCalendar();




function ok(){
  let birthday = "" + theYear + "-" + theMonth + "-" + theDate;
  document.getElementById("GI-Birthday").innerHTML= "<p>"+ birthday + "</p>";
  hideCalendar();
}

function cancel(){
  hideCalendar();
}
