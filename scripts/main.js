console.log("hello")

const building_buttons = document.getElementsByName("building-button")
const text = document.querySelector("#text")
// const text = document.querySelector("#photo")

const building_photos = {
    "deyoung" : ["deYoung Museum", "https://cdn.vox-cdn.com/thumbor/Eg-t2a8qJBy6124mlEQCx26MzXs=/0x0:3046x1969/1870x1403/filters:focal(1280x742:1766x1228):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62568078/shutterstock_415859806.0.0.jpg"],
    "transamerica" : ["Transamerica Pyramid","https://media.architecturaldigest.com/photos/57e98432fe422b3e29b7e80e/master/w_2580%2Cc_limit/san-francisco-landmarks-1.jpg"],
    "painted" : ["Painted Ladies", "https://media.architecturaldigest.com/photos/57e98438fe422b3e29b7e812/master/w_2580%2Cc_limit/san-francisco-landmarks-10.jpg"]
}

function change_building(building) {
  text.innerHTML = "Here's a picture of the " + building_photos[building][0] + "."
  photo.src = building_photos[building][1]
}

building_buttons.forEach(button => {
  button.addEventListener("change", event => {
    change_building(button.value)
  })
})