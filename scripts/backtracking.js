var count_Picture = 0;
var current_path = document.getElementById("current_path_sa0");
var describtion_path = document.getElementById("path_describtion");
var step_path = document.getElementById("path_step");

// Declaration
step_path.innerHTML = " Step 0";
describtion_path.innerHTML = "<h4>Step 0</h4>";

// change into the next algorithm step
function increasePicture() {
    if(count_Picture <= 9) {
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
        current_path.src = "picture/back_0.png";
        describtion_path.innerHTML = "<h4> Step 0 </h4>";
    
    } 
    else if (count_Picture == 1) {
        step_path.innerHTML = " Step 1"
        current_path.src = "picture/back_1.png"
        describtion_path.innerHTML = " <h4>Step 1: </h4>  <p>Let's consider gate G2 first. There is only one j-frontier case for G2. Since we know the output is low, we`re choosing the case input {1, 1, 0}. Since we want to keep D for the output for G5, the output for G1 is high, it follows that the inputs of G1 are 0 and 1.</p>"
    }
    else if (count_Picture == 2) {
        step_path.innerHTML = " Step 2"
        current_path.src = "picture/back_2.png"
        describtion_path.innerHTML = "<h4>Step 2:</h4> <p>For G5 is only one logic option since the inputs are 1 and D’. It follows that j has the value D.</p> ";
    }
    else if (count_Picture == 3) {
        step_path.innerHTML = " Step 3"
        current_path.src = "picture/back_3.png"
        describtion_path.innerHTML = "<h4>Step 3: </h4>  <p>Since k cannot receive a D value and the other input is already assigned logic-D, the output of G7 can only select one option. {D, 1, D’}. We're looking out for consistency.</p>";
    }
    else if (count_Picture == 4) {
        step_path.innerHTML = " Step 4"
        current_path.src = "picture/back_4.png"
        describtion_path.innerHTML = "<h4>Step 4: </h4>  <p>Since we do know the output of G6. There will be three logic possibilities for the inputs. For know we select one of them. We’re choosing {1, 0, 1}.</p>";
    }
    else if (count_Picture == 5) {
        step_path.innerHTML = " Step 5"
        current_path.src = "picture/back_5.png"
        describtion_path.innerHTML = "<h4>Step 5: </h4>  <p>For G3 we choose the same approach as G6. For G4, there is one single J-frontier case.</p>";
    }
    else if (count_Picture == 6) {
        step_path.innerHTML = " Step 6"
        current_path.src = "picture/back_6.png"
        describtion_path.innerHTML = "<h4>Step 6: </h4>  <p>We find the consistency on input c. But we're looking forward to input d.</p>";
    }
    else if (count_Picture == 7) {
        step_path.innerHTML = " Step 7"
        current_path.src = "picture/back_7.png"
        describtion_path.innerHTML = " <h4>Step 7: </h4>  <p>We locate an inconsistency on input d. We have to backtrack to the last decision.</p>";
    }
    else if (count_Picture == 8) {
        step_path.innerHTML = " Step 8"
        current_path.src = "picture/back_8.png"
        describtion_path.innerHTML = "<p>Step 8: </p>  <p>We declare the inputs of G6 again. We decide to declare the inputs in low, low.</p>";
    }
    else if (count_Picture == 9) {
        step_path.innerHTML = " Step 9"
        current_path.src = "picture/back_9.png"
        describtion_path.innerHTML = "<h4>Step 9: </h4>  <p>Thereupon we see the consistency on this example.</p>";
    }

}
