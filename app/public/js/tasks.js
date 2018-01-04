

        function filter(state)
        {
          var x   = document.getElementsByClassName(state);
          var btn = document.getElementById(state);

          if (btn.className === "btn")
          {
            btn.className = btn.dataset.class;
            for (i = 0; i < x.length; i++) 
            {
                x[i].className = " animated fadeInLeft "+ state;
            }
          }
          else
          { 
              for (i = 0; i < x.length; i++) 
              {
                  x[i].className = " animated fadeOutRight "+ state;
              }
              btn.className = "btn";
          }
        }

        $("#addnew").click(function(){
              //$("#forgot").fadeIn();
               //$("#tasks > tbody").prepend("<tr><td>"+ "1234" + "</td><td>" + "5678" + "</td><td>" +
  //"90" + "</td><td>");
                //$("#tasks > tbody").prepend("<tr><td>"+ "1234" + "</td><td>" + "5678" + "</td><td>" +
  //"90" + "</td><td>");


                $("#tasks").find('tbody').append($('<tr class="progress"></td>')
                              .append($('<td class="avatar"><img src="https://pbs.twimg.com/profile_images/746779035720683521/AyHWtpGY_400x400.jpg"></td>'))
                                //.attr("class", "avatar")
                                //.append($('<img>').attr('src', "https://pbs.twimg.com/profile_images/746779035720683521/AyHWtpGY_400x400.jpg")))
                              .append($('<td>').text("Tim"))
                              .append($('<td>').text("Group 1"))
                              .append($('<td>').text("tim@gmail.com"))
                              .append($('<td><a href="#" class="btn btn-primary" id="edit" title="edit"  ><i class="fa fa-pencil fa-2x"></i></a><a href="#" class="btn btn-info" title="progress"   ><i class="fa fa-spinner fa-pulse fa-2x fa-fw"   ></i></a><a href="#" class="btn btn-danger" id="delete" title="delete"><i class="fa fa-trash fa-2x" ></i></a></td>'))
                              
                            );
          });

/*
        $("#delete").click(function(){
              console.log("delete");
              $(this).parents('tr').remove();
          });
      */

        $(document).on('click', '#delete', function(){
                  console.log("delete pressed");
                  $(this).parents('tr').remove();
        });

        $(document).on('click', '#edit', function(){
                  console.log("edit pressed");
                  var i = $(this).parents('tr').index();
                  console.log(i);
                  i = $(this).parents('tr').attr("value");
                  console.log(i)
        });

        $(document).on('click', '#save', function(){
                  console.log("save pressed");
        });


          /*
          $("#save").click(function(){
                    alert("save");
          }

          $("#cancel").click(function(){
                    alert("cancel");
          }
          */







    function sortTable(n) {

      alert("sort this table");
      var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
      table = document.getElementById("tasks");
      switching = true;
      // Set the sorting direction to ascending:
      dir = "asc"; 
      /* Make a loop that will continue until
      no switching has been done: */
      while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.getElementsByTagName("TR");
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
          // Start by saying there should be no switching:
          shouldSwitch = false;
          /* Get the two elements you want to compare,
          one from current row and one from the next: */
          x = rows[i].getElementsByTagName("TD")[n];
          y = rows[i + 1].getElementsByTagName("TD")[n];
          /* Check if the two rows should switch place,
          based on the direction, asc or desc: */
          if (dir == "asc") {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              // If so, mark as a switch and break the loop:
              shouldSwitch= true;
              break;
            }
          } else if (dir == "desc") {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              // If so, mark as a switch and break the loop:
              shouldSwitch= true;
              break;
            }
          }
        }
        if (shouldSwitch) {
          /* If a switch has been marked, make the switch
          and mark that a switch has been done: */
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
          // Each time a switch is done, increase this count by 1:
          switchcount ++; 
        } else {
          /* If no switching has been done AND the direction is "asc",
          set the direction to "desc" and run the while loop again. */
          if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
          }
        }
      }
    }