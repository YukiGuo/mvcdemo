import $ from 'jquery'
import './app2.css'
const $tabBar = $("#app2 .tab-bar")
const $tabContent = $("#app2 .tab-content")
$tabBar.on("click", "li", (e) => {
    const $currentLi = $(e.currentTarget)
    $currentLi.addClass("selected").siblings().removeClass("selected")
    const index = $currentLi.index()
    $tabContent
        .children()
        .eq(index).addClass('active')
        .siblings().removeClass("active")


})

$tabBar.children().eq(0).trigger("click")