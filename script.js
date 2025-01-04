// JavaScript Function to Calculate FLAMES Compatibility
function checkFlames() {
    let person1 = document.getElementById("person1").value.trim().toLowerCase();
    let person2 = document.getElementById("person2").value.trim().toLowerCase();
    
    if (person1 === "" || person2 === "") {
        alert("Please enter both names.");
        return;
    }
    
    // Calculate Flames
    let flames = ["F", "L", "A", "M", "E", "S"];
    
    let count = 0;
    let name1 = person1.split('');
    let name2 = person2.split('');
    
    name1.forEach(char => {
        let index = name2.indexOf(char);
        if (index > -1) {
            name2.splice(index, 1);
            count++;
        }
    });
    
    let remainingChars = (name1.length + name2.length) - (2 * count);
    let flameIndex = remainingChars % flames.length;
    
    let flameResult = flames[flameIndex];
    
    let flameMeaning = {
        'F': "Friends",
        'L': "Love",
        'A': "Affection",
        'M': "Marriage",
        'E': "Enemies",
        'S': "Soulmates"
    };
    
    document.getElementById("result").innerHTML = "The FLAMES result is: <strong>" + flameMeaning[flameResult] + "</strong>";
}
