// 375设计稿
; (function flexible(window, document) {
  var docEl = document.documentElement
  var dpr = window.devicePixelRatio || 1
  var isAndroid = window.navigator.appVersion.match(/android/gi)
  var isIPhone = window.navigator.appVersion.match(/iphone/gi)
  var devicePixelRatio = dpr
  if (isIPhone) {
    // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
    if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
      dpr = 3
    } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
      dpr = 2
    } else {
      dpr = 1
    }
  } else {
    // 其他设备下，仍旧使用1倍的方案，但是fs并不是固定的
    dpr = 1
  }
  //给文档设置自定义属性，保存dpr的值
  docEl.setAttribute("data-dpr", dpr)

  function setRemUnit() {
    //1rem = 100px
    let deviceWidth = docEl.clientWidth
    if (deviceWidth > 750) {
      deviceWidth = 750
    }
    var rem = deviceWidth * 100 / 375
    docEl.style.fontSize = rem + "px"
  }

  setRemUnit()

  // reset rem unit on page resize
  window.addEventListener("resize", setRemUnit)
  window.addEventListener("pageshow", function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement("body")
    var testElement = document.createElement("div")
    testElement.style.border = ".5px solid transparent"
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add("hairlines")
    }
    docEl.removeChild(fakeBody)
  }
})(window, document)
