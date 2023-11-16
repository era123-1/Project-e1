function showInstructions(emergencyType) {
    var instructionsDiv = document.getElementById('instructions');
    instructionsDiv.innerHTML = '';

    if (emergencyType === 'infract') {
        instructionsDiv.innerHTML = '<h2>Infrakt Instructions</h2><p><ul><li>Call for help and place the person in a comfortable position.</li><li>Make sure there is enough air and keep the person warm .</li><li>Give aspirin if the person is not allergic to it .</li></ul></p>';
        var infractImage=document.createElement("img");
        infractImage.src = "f1.jpg";
        infractImage.alt = "Infract Icon";
        infractImage.style.maxWidth = "300px";  
        infractImage.style.maxHeight = "300px";
        instructionsDiv.appendChild(infractImage);
    } 
    else if (emergencyType === 'breach') {
        instructionsDiv.innerHTML = '<h2>Breach Instructions</h2><p><ul><li>Apply immobilization to the fracture area to prevent movement..</li><li>Apply ice to the fracture area to reduce pain and inflammation .</li><li> Call for medical help.</li></ul></p>';
        var breachImage=document.createElement("img");
        breachImage.src = "f2.jpg";
        breachImage.alt = "Breach Icon";
        breachImage.style.maxWidth = "300px";  
        breachImage.style.maxHeight = "300px";
        instructionsDiv.appendChild(breachImage);
    }
    else if (emergencyType === 'wound') {
        instructionsDiv.innerHTML = '<h2>Wound Instructions</h2><p><ul><li>Alert them and keep the person calm.</li><li>Wash the wound with clean water and soap .</li><li> Apply an antiseptic compound and apply a sterile dressing to protect the wound.</li></ul></p>';
        var woundImage=document.createElement("img");
        woundImage.src = "f3.jpg";
        woundImage.alt = "Wound Icon";
        woundImage.style.maxWidth = "300px"; 
        woundImage.style.maxHeight = "300px";
        instructionsDiv.appendChild(woundImage);
    } 
    else if (emergencyType === 'hypoglycemia') {
        instructionsDiv.innerHTML = '<h2>Hypoglycemia Instructions</h2><p><ul><li>Give the person with hypoglycemia fast sugary food or drink.</li><li>Call for medical help if the person does not improve within a few minutes .</li></ul></p>';
        var hypoglycemiaImage=document.createElement("img");
        hypoglycemiaImage.src = "f4.jpg";
        hypoglycemiaImage.alt = "Hypoglycemia Icon";
        hypoglycemiaImage.style.maxWidth = "300px";  
        hypoglycemiaImage.style.maxHeight = "300px";
        instructionsDiv.appendChild(hypoglycemiaImage);
    } 
    else if (emergencyType === 'accidents') {
        instructionsDiv.innerHTML = '<h2>Accidents Instructions</h2><p><ul><li>Notify and secure the scene of the accident.</li><li>Check the health of the persons involved and provide first aid for wounds and injuries .</li></ul></p>';
        var accidentsImage=document.createElement("img");
        accidentsImage.src = "f5.jpg";
        accidentsImage.alt = "Accidents Icon";
        accidentsImage.style.maxWidth = "300px";  
        accidentsImage.style.maxHeight = "300px";
        instructionsDiv.appendChild(accidentsImage);
    } 
    else if (emergencyType === 'drowing') {
        instructionsDiv.innerHTML = '<h2>Drowing Instructions</h2><p><ul><li>Remove the person from the water safely and start CPR (Cardiopulmonary Resuscitation) if the person is unconscious and not breathing.</li><li> Call for medical help immediately.</li></ul></p>';
       var drowingImage=document.createElement("img");
       drowingImage.src = "f6.jpg";
       drowingImage.alt = "Drowing Icon";
       drowingImage.style.maxWidth = "300px"; 
       drowingImage.style.maxHeight = "300px";
       instructionsDiv.appendChild(drowingImage);
    } 
    else if (emergencyType === 'insects') {
        instructionsDiv.innerHTML = '<h2>Insects Instructions</h2><p><ul><li>Alert them and clean the area around the wound.</li><li>Apply an anti-inflammatory substance and keep the wound moving to prevent the venom from spreading .</li></ul></p>';
        var insectsImage = document.createElement("img");
        insectsImage.src = "f7.jpg";
        insectsImage.alt = "Insects Icon";
        insectsImage.style.maxWidth = "300px"; 
        insectsImage.style.maxHeight = "300px";
        instructionsDiv.appendChild(insectsImage);
    }

    else if (emergencyType === 'fire') {
        instructionsDiv.innerHTML = '<h2>Fire Instructions</h2><p><ul><li>Get away safely and call the fire department.</li><li>Use the help to cover your mouth and nose when you go outside .</li></ul></p>';
        var fireImage = document.createElement("img");
        fireImage.src = "f8.jpg";
        fireImage.alt = "Fire Icon";
        instructionsDiv.appendChild(fireImage);
    
    } 
} 


// Map
document.addEventListener("DOMContentLoaded", function() {
    var map = document.getElementById("map");
    var mapToggle = document.getElementById("mapToggle");
    map.style.display = "none";

    function toggleMap() {
        if (map.style.display === "none") {
            map.style.display = "block";
        } else {
            map.style.display = "none";
        }
    }
    mapToggle.addEventListener("click", toggleMap);
});
// Footer

function callNumber(number) {
    window.location.href = 'tel:' + number;
}









  