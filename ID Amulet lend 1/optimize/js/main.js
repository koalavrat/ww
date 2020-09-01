$(document).ready(function() {
  try {
    moment.locale("");
    $('.day-before').text(moment().subtract(1, 'day').format('D.MM.YYYY'));
    $('.day-after').text(moment().add(1, 'day').format('D.MM.YYYY'));
  } catch (e) {
    console.log('moment problems!');
  }
});

var ccode = "ID";
var ip_ccode = "RU";
var package_prices = {};
var shipment_price = 0;
var name_hint = "Ani Setiowati";
var phone_hint = "+628123290118";
var iew = false;
var offer_countries = {
  "ID": "Indonesia"
};