const createElement = (tagName, innerText, styleCofig = {}) => {
    const label = document.createElement(tagName)

    label.innerText = innerText
    const styleCofigString = JSON.stringify(styleCofig)
    if (styleCofigString !== '{}') {
        Object.keys(styleCofig).forEach((key) => {
            // 支持横线转驼峰
            if (key.includes('-')) {
                const newKey = toHump(key)
                label.style[newKey] = styleCofig[key]
                return
            }

            label.style[key] = styleCofig[key]
        })
    }

    document.body.append(label)
}
// 连接转换驼峰
function toHump(name) {
    return name.replace(/-([a-z])/g, function (keb, item) {
        return item.toUpperCase()
    })
}
// // 驼峰转换下划线
// function toLine(name) {
//     return name.replace(/([A-Z])/g, '_$1').toLowerCase()
// }

export default {
    createElement,
}
