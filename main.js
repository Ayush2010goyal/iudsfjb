var names = [];
function submit() {
    var display_names =[];
for (var j = 1; j<=4; j++){
    var student_name = document.getElementById("Student"+j).value;
    console.log(student_name);
    names.push(student_name);
}
    console.log(names);

    var lengthofnames= names.length;
    console.log(lengthofnames);
    for (var k = 0; k<lengthofnames; k++){
        display_names.push("<h4> NAME - "+ names[k]+"</h4>");
        console.log(display_names);
    }
    document.getElementById("display_name_comma").innerHTML= display_names;
    var removecommas = display_names.join(" ");
    document.getElementById("display_name_without_comma").innerHTML= removecommas;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
   

}
function sorting(){
    names.sort();
    console.log(names);
    var sortedarray = [];
    var lengthofnames= names.length;
    console.log(lengthofnames);
    for (var k = 0; k<lengthofnames; k++){
        sortedarray.push("<h4> NAME - "+ names[k]+"</h4>");
        console.log(sortedarray);
    }
    document.getElementById("display_name_comma").innerHTML= sortedarray;
    var removecomma = sortedarray.join(" ");
    document.getElementById("display_name_without_comma").innerHTML= removecommas;

    document.getElementById("reset_button").style.display="inline-block";
    document.getElementById("sort_button").style.display="none";
}
function reseting(){
    document.getElementById("Student1").value="";
    document.getElementById("Student2").value="";
    document.getElementById("Student3").value="";
    document.getElementById("Student4").value="";
    document.getElementById("submit_button").style.display="inline-block";
    document.getElementById("sort_button").style.display="none";
    document.getElementById("display_name").innerHTML="";
    document.getElementById("reset_button").style.display="none";
}