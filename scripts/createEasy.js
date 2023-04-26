// declarations
var count_Exercise =  1;
blaa.value = "_";
blab.value = "_";
blac .value = "_";
blad.value = "_";
blae.value = "_";
blaout.value = "_";
// Declare SA1 In - Output
var faults = 0;
var trys = 0;
var hints = 0;
getExercise();

//declare dropdowns from students
dropdown_a.onchange = function () {
    blaa.value = this.value; // a

}
dropdown_b.onchange = function () {
    blab.value = this.value; // b

}
dropdown_c.onchange = function () {
    blac.value = this.value; // c
}
dropdown_d.onchange = function () {
    blad.value = this.value; // d
}
dropdown_e.onchange = function () {
    blae.value = this.value; // e
}
dropdown_out.onchange = function () {
    blaout.value = this.value; // output
}

var trysID = document.getElementById("trysID");
trysID.innerHTML = trys;
var hintsID = document.getElementById("hintsID");
hintsID.innerHTML = hints;
var faultID = document.getElementById("faultsID");
faultID.innerHTML = faults;

function countFaults() {
    faults++;
    faultID.innerHTML = faults;
    if(faults >= 25) {
        document.getElementById("solution").className = "show"
    }
}
function countTrys() {
    trys++;
    trysID.innerHTML = trys;
    if(trys >= 10) {
        document.getElementById("solution").className = "show"
    }
}
function countHints() {
    hints++;
    hintsID.innerHTML = hints;
}

// switching examples between difficulties
function getExercise() {
        var c1 = document.getElementById("canvas1");
        var ctx1 = c1.getContext("2d");
        ctx1.moveTo(125,0);
        ctx1.lineTo(125,100);
        ctx1.stroke();
        var c2 = document.getElementById("canvas2");
        var ctx2 = c2.getContext("2d");
        ctx2.moveTo(0,0);
        ctx2.lineTo(0,100);
        ctx2.moveTo(125,0);
        ctx2.lineTo(125,30);
        ctx2.stroke();

        var c3 = document.getElementById("canvas3");
        var ctx3 = c3.getContext("2d");
        ctx3.moveTo(0, 0);
        ctx3.lineTo(0, 30);
        ctx3.moveTo(0, 30);
        ctx3.lineTo(46.875, 30);
        ctx3.moveTo(46.875, 30);
        ctx3.lineTo(46.875, 50);
        ctx3.moveTo(124, 0);
        ctx3.lineTo(124, 30);
        ctx3.moveTo(124, 30);
        ctx3.lineTo(78.125, 30);
        ctx3.moveTo(78.125, 30);
        ctx3.lineTo(78.125, 50);
        ctx3.stroke();
        ctx3.beginPath(); ctx3.arc(62.5,50,25,25.1,3*Math.PI);
        ctx3.stroke();
        ctx3.moveTo(37.5, 50);
        ctx3.lineTo(87.5, 50);
        ctx3.stroke();
        ctx3.beginPath(); ctx3.arc(62.5,80,5,0,2*Math.PI);
        ctx3.stroke();
        ctx3.moveTo(62.5,85);
        ctx3.lineTo(62.5,100);
        ctx3.stroke();

        var c5 = document.getElementById("canvas5");
        var ctx5 = c5.getContext("2d");
        ctx5.moveTo(125,0);
        ctx5.lineTo(125,30);
        ctx5.stroke();

        var c6 = document.getElementById("canvas6");
        var ctx6 = c6.getContext("2d");
        ctx6.moveTo(0, 0);
        ctx6.lineTo(0, 30);
        ctx6.moveTo(0, 30);
        ctx6.lineTo(109.375, 30);
        ctx6.moveTo(109.375, 30);
        ctx6.lineTo(109.375, 50);
        ctx6.stroke();
        ctx6.beginPath();
        ctx6.arc(125,50,25,25.1,3*Math.PI);
        ctx6.stroke();
        ctx6.moveTo(100, 50);
        ctx6.lineTo(125, 50);
        ctx6.stroke();
        ctx6.beginPath();
        ctx6.arc(125,80,5,0,2*Math.PI);
        ctx6.stroke();
        ctx6.moveTo(125,85);
        ctx6.lineTo(125,100);
        ctx6.stroke();

        var c7 = document.getElementById("canvas7");
        var ctx7 = c7.getContext("2d");
        ctx7.moveTo(62.5, 30);
        ctx7.lineTo(62.5, 00);
        ctx7.moveTo(15.625, 30);
        ctx7.lineTo(62.5, 30);
        ctx7.moveTo(15.625, 30);
        ctx7.lineTo(15.625, 50);
        ctx7.stroke();
        ctx7.beginPath();     
        ctx7.arc(0,50,25,25.1,3*Math.PI);
        ctx7.stroke();
        ctx7.moveTo(25, 50);
        ctx7.lineTo(0, 50);
        ctx7.stroke();
        ctx7.beginPath();
        ctx7.arc(0,80,5,0,2*Math.PI);
        ctx7.stroke();
        ctx7.moveTo(0,85);
        ctx7.lineTo(0,100);
        ctx7.stroke();
}



// Students path if there enter the Inputs
function solve_path_byStudent() {
    // reset error_messager
    error_message_collection(0);

    // declare the beginning bcs there is no other options for the solution
    bla_d.value = "0";
    bla_e.value = "D'";

    //Independent Inputs
    // declare A
    if (blae.value != "_") {
        if(blaa.value == "D") {
            bla_a.value = "D"
            error_message_collection(3);
        } else if(blaa.value == "D'") {
            bla_a.value = "D'"
            error_message_collection(3);
        } else if(blaa.value == "0") {
            bla_a.value = "0"
            error_message_collection(0);
        } else if(blaa.value == "1") {
            bla_a.value = "1"
            error_message_collection(0);
        }
    } else if(blaa.value != "_" && blae.value == "_"){
        error_message_collection(7);
    }


    //Independent Inputs
    // declare B
    if(blad.value != "_") {
        if(blab.value == "D") {
            bla_b.value = "D"
            error_message_collection(3);
        } else if(blab.value == "D'") {
            bla_b.value = "D'"
            error_message_collection(3);
        } else if(blab.value == "0") {
            bla_b.value = "0"
            error_message_collection(0);
        } else if(blab.value == "1") {
            bla_b.value = "1"
            error_message_collection(0);
        }
    } else if(blab.value != "_" && blad.value == "_"){
        error_message_collection(7);
    }


    // declare C
    if(blad.value != "_") {
        if(blac.value == "0") {
            bla_c.value = "0"
            error_message_collection(3);
        } else if(blac.value == "1") {
            bla_c.value = "1"
            error_message_collection(3);
        } else if(blac.value == "D") {
            bla_c.value = "D"
            error_message_collection(0);
        } else if(blac.value == "D'") {
            bla_c.value = "D'"
            error_message_collection(0);
        }
    } else if(blac.value != "_" && blad.value == "_"){
        error_message_collection(7);
    }


    // declare D with B and C
    if((bla_b.value == "0") && (bla_c.value == "0")) {
        bla_d.value = "1";
    } else if ((bla_b.value == "0") && (bla_c.value == "1")) {
        bla_d.value = "0";
    } else if((bla_b.value == "0") && (bla_c.value == "D")) {
        bla_d.value = "1";
    } else if ((bla_b.value == "0") && (bla_c.value == "D'")) {
        bla_d.value = "1";

    } else if((bla_b.value == "1") && (bla_c.value == "0")) {
        bla_d.value = "0";
    } else if ((bla_b.value == "1") && (bla_c.value == "1")) {
        bla_d.value = "0";
    } else if((bla_b.value == "1") && (bla_c.value == "D")) {
        bla_d.value = "D'";
    } else if ((bla_b.value == "1") && (bla_c.value == "D'")) {
        bla_d.value = "D";

    } else if((bla_b.value == "D") && (bla_c.value == "0")) {
        bla_d.value = "1";
    } else if((bla_b.value == "D") && (bla_c.value == "1")) {
        bla_d.value = "D'";
    } else if ((bla_b.value == "D") && (bla_c.value == "D")) {
        bla_d.value = "D'"; 
    } else if((bla_b.value == "D") && (bla_c.value == "D'")) {
        bla_d.value = "1";

    } else if ((bla_b.value == "D'") && (bla_c.value == "0")) {
        bla_d.value = "1";
    }else if((bla_b.value == "D'") && (bla_c.value == "1")) {
        bla_d.value = "D";
    } else if ((bla_b.value == "D'") && (bla_c.value == "D")) {
        bla_d.value = "1";
    } else if((bla_b.value == "D'") && (bla_c.value == "D'")) {
        bla_d.value = "D";
    }


    // declare Gates from SA1
    if(bla_d.value == "0") {
        bla_e.value ="D'";
    } else if(bla_d.value == "1") {
        bla_e.value = "1";
    } else if(bla_e.value == "D") {
        error_message_collection(6);
    }

    // declare output
    if(blae.value != "_"){
        if((bla_a.value == "0") && (bla_e.value == "0")) {
            bla_out.value = "1";
            error_message_collection(4);
        } else if ((bla_a.value == "0") && (bla_e.value == "1")) {
            bla_out.value = "1";
            error_message_collection(3);
            error_message_collection(4);
        } else if((bla_a.value == "0") && (bla_e.value == "D")) {
            bla_out.value = "1";
            error_message_collection(4);
        } else if ((bla_a.value == "0") && (bla_e.value == "D'")) {
            bla_out.value = "1";
            error_message_collection(4);
    
    
        } else if((bla_a.value == "1") && (bla_e.value == "0")) {
            bla_out.value = "1";
            error_message_collection(3);
        } else if ((bla_a.value == "1") && (bla_e.value == "1")) {
            bla_out.value = "0";
            error_message_collection(3);
        } else if((bla_a.value == "1") && (bla_e.value == "D")) {
            bla_out.value = "D'";
        } else if ((bla_a.value == "1") && (bla_e.value == "D'")) {
            bla_out.value = "D";
            error_message_collection(0);
    
    
        } else if((bla_a.value == "D") && (bla_e.value == "0")) {
            bla_out.value = "1";
            error_message_collection(3);
            error_message_collection(4);
        } else if((bla_a.value == "D") && (bla_e.value == "1")) {
            bla_out.value = "D'";
            error_message_collection(3);
        } else if ((bla_a.value == "D") && (bla_e.value == "D")) {
            bla_out.value = "D'";
        } else if((bla_a.value == "D") && (bla_e.value == "D'")) {
            bla_out.value = "1";
            error_message_collection(4);
    
        } else if ((bla_a.value == "D'") && (bla_e.value == "0")) {
            bla_out.value = "1";
            error_message_collection(3);
            error_message_collection(4);
        }else if((bla_a.value == "D'") && (bla_e.value == "1")) {
            bla_out.value = "D";
            error_message_collection(3);
        } else if ((bla_a.value == "D'") && (bla_e.value == "D")) {
            bla_out.value = "1";
            error_message_collection(4);
        } else if((bla_a.value == "D'") && (bla_e.value == "D'")) {
            bla_out.value = "D";
        }
    } else if(blaout.value != "_" && blae.value == "_"){
        error_message_collection(8);
    }
    
}

// blaa  -> Students
// bla_a -> Solution

function  get_Color_Correction() {
    // reset every Canvas after first solution
    countTrys();
    get_clean_Canvas();
    var c1 = document.getElementById("canvas1");
    var ctx1 = c1.getContext("2d");
    var c2 = document.getElementById("canvas2");
    var ctx2 = c2.getContext("2d");
    var c3 = document.getElementById("canvas3");
    var ctx3 = c3.getContext("2d");
    var c4 = document.getElementById("canvas4");
    var ctx4 = c4.getContext("2d");
    var c5 = document.getElementById("canvas5");
    var ctx5 = c5.getContext("2d");
    var c6 = document.getElementById("canvas6");
    var ctx6 = c6.getContext("2d");
    var c7 = document.getElementById("canvas7");
    var ctx7 = c7.getContext("2d");

    // Input A is available if Students sets A and E values
    if(blaa.value != "_" && blae.value != "_"){
        // green if A is 0, 1 and red if A is D, D'
        if((bla_a.value != blaa.value) || bla_a.value == "D" || bla_a.value == "D'") {
            var grd = ctx1.createLinearGradient(0, 0, 200, 0);
            var grd = ctx2.createLinearGradient(0, 0, 200, 0);
            var grd = ctx5.createLinearGradient(0, 0, 200, 0);
            var grd = ctx6.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");                
            ctx1.fillStyle = grd;
            ctx2.fillStyle = grd;
            ctx5.fillStyle = grd;
            ctx6.fillStyle = grd;
            ctx1.fillRect(121, 0, 4, 100);
            ctx2.fillRect(0, 0, 4, 100);
            ctx5.fillRect(121, 0, 4, 34);
            ctx6.fillRect(0, 0, 4, 34);
            ctx6.fillRect(0, 26, 113, 8);
            ctx6.fillRect(105, 26, 8, 23);
            countFaults()

        } else if (bla_a.value == blaa.value) {
            var grd = ctx1.createLinearGradient(0, 0, 200, 0);
            var grd = ctx2.createLinearGradient(0, 0, 200, 0);
            var grd = ctx5.createLinearGradient(0, 0, 200, 0);
            var grd = ctx6.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");                
            ctx1.fillStyle = grd;
            ctx2.fillStyle = grd;
            ctx5.fillStyle = grd;
            ctx6.fillStyle = grd;
            ctx1.fillRect(121, 0, 4, 100);
            ctx2.fillRect(0, 0, 4, 100);
            ctx5.fillRect(121, 0, 4, 34);
            ctx6.fillRect(0, 0, 4, 34);
            ctx6.fillRect(0, 26, 113, 8);
            ctx6.fillRect(105, 26, 8, 23);
        }
    }

    // Input B is available if Students sets B and D values
    if(blab.value != "_" && blad.value != "_"){
        // green if B is 0, 1 and red if B is D, D'
        if((bla_b.value != blab.value) || bla_b.value == "D" || bla_b.value == "D'") {
            var grd = ctx2.createLinearGradient(0, 0, 200, 0);
            var grd = ctx3.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");                
            ctx2.fillStyle = grd;
            ctx3.fillStyle = grd;
            ctx2.fillRect(121, 0, 4, 34);
            ctx3.fillRect(0, 0, 4, 34);
            ctx3.fillRect(0, 26, 50.875, 8);
            ctx3.fillRect(42.875, 30, 8, 20);
            countFaults()

        } else if (bla_b.value == blab.value) {
            var grd = ctx2.createLinearGradient(0, 0, 200, 0);
            var grd = ctx3.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");                
            ctx2.fillStyle = grd;
            ctx3.fillStyle = grd;
            ctx2.fillRect(121, 0, 4, 34);
            ctx3.fillRect(0, 0, 4, 34);
            ctx3.fillRect(0, 26, 50.875, 8);
            ctx3.fillRect(42.875, 30, 8, 20);
        }
    }

    // Input C is available if Students sets C and D values
    if(blac.value != "_" && blad.value != "_"){
        // green if C is 0, 1 and red if C is D, D'
        if((bla_c.value != blac.value) || bla_c.value == "D" || bla_c.value == "D'") {
            var grd = ctx2.createLinearGradient(0, 0, 200, 0);
            var grd = ctx3.createLinearGradient(0, 0, 200, 0);
            var grd = ctx4.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");                
            ctx2.fillStyle = grd;
            ctx3.fillStyle = grd;
            ctx4.fillStyle = grd;
            ctx3.fillRect(121, 0, 4, 34);
            ctx3.fillRect(73.875, 26, 50.875, 8);
            ctx3.fillRect(73.875, 30, 8, 20); 
            ctx4.fillRect(0, 0, 3, 34);
            countFaults();

        } else if (bla_c.value == blac.value) {
            var grd = ctx2.createLinearGradient(0, 0, 200, 0);
            var grd = ctx3.createLinearGradient(0, 0, 200, 0);
            var grd = ctx4.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");                
            ctx2.fillStyle = grd;
            ctx3.fillStyle = grd;
            ctx4.fillStyle = grd;
            ctx3.fillRect(121, 0, 4, 34);
            ctx3.fillRect(73.875, 26, 50.875, 8);
            ctx3.fillRect(73.875, 30, 8, 20); 
            ctx4.fillRect(0, 0, 3, 34);
        }
    }

    // combine Inputs into Gate D, not allowed D = _
    if(blad.value != "_") {
        // Students first step for the Algo Input SA1 -> D
        if((bla_d.value != blad.value) || bla_d.value == "D" || bla_d.value == "D'") {
            var grd = ctx3.createLinearGradient(0, 0, 200, 0);
            var grd = ctx7.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");                
            ctx3.fillStyle = grd;
            ctx7.fillStyle = grd;
            ctx3.fillRect(57.875, 85, 8, 30);
            ctx7.fillRect(58, 0, 8, 17);
            countFaults();

        } else if (bla_d.value == blad.value) {
            var grd = ctx3.createLinearGradient(0, 0, 200, 0);
            var grd = ctx7.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");                
            ctx3.fillStyle = grd;
            ctx7.fillStyle = grd;
            ctx3.fillRect(57.875, 85, 8, 30);
            ctx7.fillRect(58, 0, 8, 17);
        }
    }
    
    // declare SA1 -> E, not allowed E = _
    if(blae.value != "_") {
        // Students first step for the Algo Input SA1 -> E
        if(bla_e.value != blae.value) {
            var grd = ctx7.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "red");                
            ctx7.fillStyle = grd;
            ctx7.fillRect(58, 17, 8, 17);
            ctx7.fillRect(11, 26, 50, 8);
            ctx7.fillRect(11, 30, 8, 20);
            countFaults();

        } else if (bla_e.value == blae.value) {
            var grd = ctx7.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "green");                
            ctx7.fillStyle = grd;
            ctx7.fillRect(58, 17, 8, 17);
            ctx7.fillRect(11, 26, 50, 8);
            ctx7.fillRect(11, 30, 8, 20);
        }
    }

    // declare Output
    // Output is available if Students sets A and E values
    // Output can only be green if in the circuit is no error
    if(blaa.value != "_" && blae.value != "_" && blaout.value != "_"){
        if(bla_out.value != blaout.value) {
            var grd = ctx6.createLinearGradient(0, 0, 200, 0);        
            var grd = ctx7.createLinearGradient(0, 0, 200, 0);
            ctx6.fillStyle = grd;
            ctx7.fillStyle = grd;
            grd.addColorStop(0, "red");
            ctx6.fillRect(121, 85, 4, 34);
            ctx7.fillRect(0, 85, 4, 34);
            countFaults();

        } else if ((bla_out.value == blaout.value) && error_message.innerHTML == "") {
            var grd = ctx6.createLinearGradient(0, 0, 200, 0);        
            var grd = ctx7.createLinearGradient(0, 0, 200, 0);
            ctx6.fillStyle = grd;
            ctx7.fillStyle = grd;
            grd.addColorStop(0, "green");
            ctx6.fillRect(121, 85, 4, 34);
            ctx7.fillRect(0, 85, 4, 34);
        } else if ((bla_out.value == blaout.value) && error_message.innerHTML != "") {
            var grd = ctx6.createLinearGradient(0, 0, 200, 0);        
            var grd = ctx7.createLinearGradient(0, 0, 200, 0);
            ctx6.fillStyle = grd;
            ctx7.fillStyle = grd;
            grd.addColorStop(0, "red");
            ctx6.fillRect(121, 85, 4, 34);
            ctx7.fillRect(0, 85, 4, 34);
        }
    }

    getExercise();
}



function error_message_collection(error_number) {
    if(error_number == 0) {
        error_message.innerHTML = "";
    } else if(error_number == 10) {
        error_message.innerHTML += "";
    } else if(error_number == 1) {
        error_message.innerHTML += "There is no Error."    
    } else if(error_number == 2) {
        error_message.innerHTML += "There is no Stuck-At-Fault! <br><br>"
    } else if(error_number == 3) {
        error_message.innerHTML += "A fault is already associated with that circuit <br><br>"
    } else if(error_number == 4) {
        error_message.innerHTML += "You have to locate a fault, which detects the generated output.<br><br>"
    } else if (error_number == 5) {
        error_message.innerHTML += "Wrong Stuck-AT-Fault declaration.<br><br>"
    }  else if (error_number == 6) {
        error_message.innerHTML += "Wrong Output.<br><br>"
    } else if (error_number == 7) {
        error_message.innerHTML += "Unknown Input.<br><br>"
    }  else if (error_number == 8) {
        error_message.innerHTML += "Unknown Output.<br><br>"
    }
}

function give_one_solution() {
    countHints();
    
    if(hints < 4) {  
        alert("Hint button use "+hints+" of 3");  
        if(blae.value != bla_e.value) {
            alert("For SA1 the value of E: " + bla_e.value);    
        }
        else if(blaa.value != bla_a.value) {
            alert("Value of A: 1");    
        }
        else if(blaout.value != bla_out.value) {
            alert("Value of Output: D");    
        }

        else if(blad.value != bla_d.value) {
            alert("For SA1 the value of D: " + bla_e.value);    
        }
        else if(blab.value != bla_b.value) {
            alert("It depends on input C");    
        }
        else if(blac.value != bla_c.value) {
            alert("It depends on input B");    
        }
    }else {
        alert("You have used your hints")
    }
}

// Weiß no ned ob ichs brauch
// clean up canvas (not done)
function get_clean_Canvas() {
    
    var c1 = document.getElementById("canvas1");
    var ctx1 = c1.getContext("2d");
    ctx1.clearRect(0, 0, c1.width, c1.height);
    var c2 = document.getElementById("canvas2");
    var ctx2 = c2.getContext("2d");
    ctx2.clearRect(0, 0, c2.width, c2.height);
    var c3 = document.getElementById("canvas3");
    var ctx3 = c3.getContext("2d");
    ctx3.clearRect(0, 0, c3.width, c3.height);
    var c4 = document.getElementById("canvas4");
    var ctx4 = c4.getContext("2d");
    ctx4.clearRect(0, 0, c4.width, c4.height);
    var c5 = document.getElementById("canvas5");
    var ctx5 = c5.getContext("2d");
    ctx5.clearRect(0, 0, c5.width, c5.height); 
    var c6 = document.getElementById("canvas6");
    var ctx6 = c6.getContext("2d");
    ctx6.clearRect(0, 0, c6.width, c6.height); 
    var c7 = document.getElementById("canvas7");
    var ctx7 = c7.getContext("2d");
    ctx7.clearRect(0, 0, c7.width, c7.height);
    var c8 = document.getElementById("canvas8");
    var ctx8 = c8.getContext("2d");
    ctx8.clearRect(0, 0, c8.width, c8.height);

}

// reset values for not saving value
function give_values_to_HTML() {
    bla_a.innerText =  bla_a.value;
    blaa.innerText =  blaa.value;
    bla_b.innerText =  bla_b.value;
    blab.innerText =  blab.value;
    bla_c.innerText =  bla_c.value;
    blac.innerText =  bla_c.value;
    bla_d.innerText =  bla_d.value;
    blad.innerText =  blad.value;
    bla_e.innerText =  bla_e.value;
    blae.innerText =  blae.value;
    bla_out.innerText =  bla_out.value;
    blaout.innerText =  blaout.value;

    blaa.value == "_"
    bla_b.value == "_"
    blab.value == "_"
    bla_c.value == "_"
    blac.value == "_"
    bla_d.value == "_"
    blad.value == "_"
    bla_e.value == "_"
    blae.value == "_"
    bla_out.value == "_"
    blaout.value == "_"
}