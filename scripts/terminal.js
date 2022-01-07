// increase and decrease of terminal and related DOM styles.
function increase(){
  var x = document.querySelector(".svelte5");
  var t = document.querySelector(".t");
 if (x.style.height === "100%"){
   x.style.height="50%";
   t.innerHTML="expand_less"
 }
 else{
x.style.height="100%";
t.innerHTML="expand_more"
 }
}

function rm(){
  document.querySelector(".svelte5").style.display="none";
}

// actual api
 function encode(str) {
            return btoa(unescape(encodeURIComponent(str || "")));
        }

        function decode(bytes) {
            var escaped = escape(atob(bytes || ""));
            try {
                return decodeURIComponent(escaped);
            } catch {
                return unescape(escaped);
            }
        }

        function errorHandler(jqXHR, textStatus, errorThrown) {
            $("#output").val(`${JSON.stringify(jqXHR, null, 4)}`);
            document.getElementById("run").innerHTML="play_arrow";
           console.log(data.memory);
                       console.log(data.time);
        }

        function check(token) {
            $("#output").val($("#output").val() + "\n> Checking submission status...");
            $.ajax({
                url: `https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=true`,
                type: "GET",
                headers: {
                    "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
	                "x-rapidapi-key": API_KEY
                },
                success: function (data, textStatus, jqXHR) {
                    if ([1, 2].includes(data["status"]["id"])) {
                        $("#output").val($("#output").val() + "\n > Status: " + data["status"]["description"]);
                        setTimeout(function() { check(token) }, 1000);
                        
                      
                    }
                    else {
                        var output = [decode(data["compile_output"]), decode(data["stdout"])].join("\n").trim();
                        $("#output").val(`${data["status"]["id"] != "3" ? ">" : ">"} ${data["status"]["description"]}\n${"> Memory: " +data.memory}\n${"> Run time : "+data.time}\n${output}`);
                         document.getElementById("run").innerHTML="play_arrow";
                         console.log(data);
                         console.log(data.memory);
                       console.log(data.time);
                    }
                },
                error: errorHandler
            });
        }
  API_KEY = "45b0e67815msh8f5fb5c3ed095a7p126d59jsn243789654347"; 

       

        function run() {
var tabBar = new mdc.tabBar.MDCTabBar(document.querySelector('.mdc-tab-bar-1'));
var contentEls = document.querySelectorAll('.content-1');

tabBar.listen('MDCTabBar:activated', function (event) {
  // Hide currently-active content
  document.querySelector('.content--active-1').classList.remove('content--active-1');
  // Show content for newly-activated tab
  contentEls[event.detail.index].classList.add('content--active-1');
});


                 var y = document.querySelector(".svelte5");
                 y.style.display="block";
            document.getElementById("run").innerHTML="stop";
            $("#output").val("> Creating submission... suppose you have inputs don't forget to enter it in compile input ");

            let encodedExpectedOutput = encode($("#expout").val());
            if (encodedExpectedOutput === "") {
                encodedExpectedOutput = null; // Assume that user does not want to use expected output if it is empty.
            }

            $.ajax({
                url: "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=false",
                type: "POST",
                contentType: "application/json",
                headers: {
                    "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
	                "x-rapidapi-key": API_KEY
                },
                data: JSON.stringify({
                    "language_id": 70,
                    // language_to_id[$("#lang").val()]
                    "source_code": encode(window.editor.getValue()),
                    "stdin": encode($("#input").val()),
                    "expected_output": encodedExpectedOutput,
                    "redirect_stderr_to_stdout": true
                }),
                success: function(data, textStatus, jqXHR) {
                  console.log(data);
                    $("#output").val($("#output").val() + "\n> Submission created....");
                    setTimeout(function() { 
                      check(data["token"]) 
                      
                      }, 2000);
                },
                error: errorHandler
            });
        }

        

        $("#source").focus();
