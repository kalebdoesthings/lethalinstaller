function checkPopups() {
  var popup = window.open('about:blank', '_blank', 'width=100,height=100');

  if (!popup || popup.closed || typeof popup.closed === 'undefined') {
    alert('Turn on pop ups for it to work.');
  } else {
    popup.close();
  }
}



function Install() {
  var allow = window.confirm("Proceed To Download Mods?");
  if (allow){
  window.open("ror2mm://v1/install/thunderstore.io/BepInEx/BepInExPack/5.4.2100/")
  window.open("ror2mm://v1/install/thunderstore.io/rhydiaan/NicerTeleporters/1.1.0/")
  window.open("ror2mm://v1/install/thunderstore.io/CapyCat/Solos_Bodycams/1.0.5/")
  window.open("ror2mm://v1/install/thunderstore.io/Rattenbonkers/TVLoader/1.1.1/")
  window.open("ror2mm://v1/install/thunderstore.io/Jamil/Corporate_Restructure/1.0.5/")
  window.open("ror2mm://v1/install/thunderstore.io/FlipMods/TooManyEmotes/1.6.3/")
  window.open("ror2mm://v1/install/thunderstore.io/FlipMods/ObjectVolumeController/1.0.3/")
  window.open("ror2mm://v1/install/thunderstore.io/Suskitech/AlwaysHearActiveWalkies/1.4.3/")
  alert("Done! \nYou Should Have 8 Mods")
  }
  else {
    alert("Flip You Numbskull!")
  }
}