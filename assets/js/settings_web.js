// Firebase Realtime Database reference
const db = firebase.database();
const settingsRef = db.ref("settings_09202023");

const address = document.querySelector(".address_gara");
const phone_number = document.querySelector(".phone_number_gara");
const email = document.querySelector(".email_gara");

settingsRef.once("value").then((snapshot) => {
  const settings = snapshot.val();
  console.log(snapshot.val())
  if (settings) {
    // Hiển thị thông tin cài đặt trong DOM
    if (address) {
      address.innerHTML = settings.shopAddress;
    }
    if (phone_number) {
      address.innerHTML = settings.phone1;
    }
    if (email) {
      address.innerHTML = settings.emailGara;
    }
  }
});
