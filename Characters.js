window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');
            img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory
            }
  
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        }
    });
  });
  
function saveCharData(){
    const originalData = {
        characters: [{
            name: document.getElementById("cName").value,
            race: document.getElementById("cRaces").value,
            class: document.getElementById("cClass").value,
            alignment: document.getElementById("cAlignment").value,
            bio: document.getElementById("bio").value,
            level: document.getElementById("level").value,
            inventory:document.getElementById("inventory").value,
            healthAndDamage:document.getElementById("healthDamage").value,
            strength: document.getElementById("strength").value,
            dexterity: document.getElementById("dexterity").value,
            constitution: document.getElementById("constitution").value,
            intelligence: document.getElementById("intelligence").value,
            wisdom: document.getElementById("wisdom").value,
            charisma: document.getElementById("charisma").value,
            skill: document.getElementById("skills").value

        }]
    };
    const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([JSON.stringify(originalData, null, 2)], {
    type: "text/plain"
  }));
  a.setAttribute("download", "data.txt");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}