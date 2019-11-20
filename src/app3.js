import $ from 'jquery'
import './app3.css'
const $square = $(".square")
$square.on('click', () => {
    $square.toggleClass("active")
})