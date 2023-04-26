var count_Picture = 0;
var current_path = document.getElementById("current_path_sa0");
var describtion_path = document.getElementById("path_describtion");
var step_path = document.getElementById("path_step");

// Declaration
step_path.innerHTML = " Step 0";
describtion_path.innerHTML = "<h4>Step 0</h4>";

// change into the next algorithm step
function increasePicture() {
    if(count_Picture <= 6) {
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
        current_path.src = "picture/sa0_0.png";
        describtion_path.innerHTML = "<h4>Step 0</h4>";
    
    } 
    else if (count_Picture == 1) {
        step_path.innerHTML = " Step 1"
        current_path.src = "picture/sa0_1.png"
        describtion_path.innerHTML = "<h4> Step 1: </h4>  <p> Activate SA-0 for output G4. For the NAND gate G5, there is one single D-frontier case. Since we already know of its input is assigned D. We chose the case Input D, 1 and Output D’.</p>"

    }
    else if (count_Picture == 2) {
        step_path.innerHTML = " Step 2"
        current_path.src = "picture/sa0_2.png"
        describtion_path.innerHTML = "<h4> Step 2:</h4> <p>After we know the Output of NAND gate G3. Since its output is already assigned logic-1, there are 3 possibilities cover for the Inputs of G3: {0, 0, 1}; {0, 1, 1}; {1, 0, 1}. Since we do not know the input of G1, we take the input possibility {x, 0, 1} and hope that the inputs of G1 and G3 are not inconsistent because we know by the NAND gate that we must have at least one 0 in the input.</p>";
    }
    else if (count_Picture == 3) {
        step_path.innerHTML = " Step 3"
        current_path.src = "picture/sa0_3.png"
        describtion_path.innerHTML = "<h4>Step 3: </h4>  <p>The same variation as G3 for G4.</p>";
    }
    else if (count_Picture == 4) {
        step_path.innerHTML = " Step 4"
        current_path.src = "picture/sa0_4.png"
        describtion_path.innerHTML = "<h4>Step 4: </h4>  <p>Since the output of G2 is a logical 0, there is only one J-frontier possibility in this case. We chose as input {1, 1, 0}. </p>";
    }
    else if (count_Picture == 5) {
        step_path.innerHTML = " Step 5"
        current_path.src = "picture/sa0_5.png"
        describtion_path.innerHTML = "<h4>Step 5: </h4>  <p>By the inputs of G2, we can get the consistency between the inputs of G2 and G4.</p>";
    }
    else if (count_Picture == 6) {
        step_path.innerHTML = " Step 6"
        current_path.src = "picture/sa0_6.png"
        describtion_path.innerHTML = "<h4>Step 6: </h4>  <p>The same variation as G3 and G4 for G1.</p>";
    }
    else if (count_Picture == 7) {
        step_path.innerHTML = " Step 7"
        current_path.src = "picture/sa0_7.png"
        describtion_path.innerHTML = "<h4>Step 7: </h4>  <p>Since we know the In- and Outputs of G1 and G3. There are 2 possibilities to get to the solution. For the two inputs 0 and 1 at input c there would be no conflicts in the overlap and both of them would be consistent.</p>";
    }

}
