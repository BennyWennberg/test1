var count_Picture = 0;
var current_path = document.getElementById("current_path_sa0");
var describtion_path = document.getElementById("path_describtion");
var step_path = document.getElementById("path_step");

// Declaration
step_path.innerHTML = " Step 0";
describtion_path.innerHTML = "<h4>Step 0</h4>";

// change into the next algorithm step
function increasePicture() {
    if(count_Picture <= 7) {
        count_Picture++;
        getPicture();
    }
}

// change into the previous algorithm step
function decreasePicture() {
    if(count_Picture > 0) {
        count_Picture--;
        getPicture();
    }
}

// several algorithm steps which will be changed by button_klick
function getPicture() {
    if (count_Picture == 0) {
        step_path.innerHTML = " Step 0"
        current_path.src = "picture/sa1_0.png";
        describtion_path.innerHTML = "<h4>Step 0</h4>";
    
    } 
    else if (count_Picture == 1) {
        step_path.innerHTML = " Step 1"
        current_path.src = "picture/sa1_1.png"
        describtion_path.innerHTML = "<h4> Step 1: </h4>  <p>Activate fault of AND gate input with SA-1 for gate G1 and G4.</p>"

    }
    else if (count_Picture == 2) {
        step_path.innerHTML = " Step 2"
        current_path.src = "picture/sa1_2.png"
        describtion_path.innerHTML = "<h4>Step 2:</h4> <p>Since we know one input of G4 which is assigned D, we choose one of the both D-frontier possibilities. Which may be the output D or D'. We select {D’, D’, D} for G4.</p> ";
    }
    else if (count_Picture == 3) {
        step_path.innerHTML = " Step 3"
        current_path.src = "picture/sa1_3.png"
        describtion_path.innerHTML = "<h4>Step 3: </h4>  <p>We already know that the primary output of G5 must be D or D’. So, there will be 2 D-frontier options. We chose {D, D, D’}, hoping that the Inputs of G3 and G4 are not inconsistent. </p>";
    }
    else if (count_Picture == 4) {
        step_path.innerHTML = " Step 4"
        current_path.src = "picture/sa1_4.png"
        describtion_path.innerHTML = " <h4>Step 4: </h4> <p>Perform backward implication to justify the J-frontier gate G3. The inputs can be either {1, D’, D} or {D’, D’, D}. Since one input has no interrupt, it must be a logical 1 or 0 and the other must be consistent with the input of G3. Therefore, There is only one single D-frontier in this case, {1, D’, D}.  </p>";
    }
    else if (count_Picture == 5) {
        step_path.innerHTML = " Step 5"
        current_path.src = "picture/sa1_5.png"
        describtion_path.innerHTML = "<h4>Step 5: </h4>  <p>By the inputs of G3 and G4, we can get the consistency between the inputs of G2 and G4 which is assigned D’.</p>";
    }
    else if (count_Picture == 6) {
        step_path.innerHTML = " Step 6"
        current_path.src = "picture/sa1_6.png"
        describtion_path.innerHTML = " <h4>Step 6: </h4>  <p>The same variation as G3 for G2. Care must be taken that e is not inconsistent. thereupon we chose {1, D, D’}.</p>";
    }
    else if (count_Picture == 7) {
        step_path.innerHTML = " Step 7"
        current_path.src = "picture/sa1_7.png"
        describtion_path.innerHTML = "<h4>Step 7: </h4>  <p>There is only one single D-frontier in this case.: Since we already know one of its inputs of G1 and the output we chose {1, D’, D} for G1.</p>";
    }
}