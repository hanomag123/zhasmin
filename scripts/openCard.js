function clickHandler () {
    const elem = event.target
    if (elem.closest('.ecommerseOne__img')) {
        elem.closest('.ecommerseOne').classList.toggle('open')
    }
    const ecom = elem.closest('.ecommerseOne') || null
    ecom && ecom.classList.contains('open') ? document.body.style.overflow = 'hidden' : document.body.style.overflow = ''
}

document.addEventListener('click', clickHandler)


