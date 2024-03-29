//function to determine student grade
function getGrade(marks)
 {if(marks < 0 || marks > 100) 
    {console.log("kindly enter marks between 0 and 100.");
}
    else {
        let grades;
        if(marks > 79){
            return "the students grade is: A";
        }else if (marks >= 60 && marks <= 79) {
            return "the students grade is: B";
        }else if (marks >= 50 && marks <= 59) {
            return "the student grade is: C";
        }else if (marks >= 40 && marks <= 49){
            return "the student grade is: D";
        }else {
            return "the student grade is: E";} 
        }
    }
    console.log(getGrade(80))
    console.log(getGrade(70))
    console.log(getGrade(61))
    console.log(getGrade(50))
    console.log(getGrade(30))
    console.log(getGrade(0))