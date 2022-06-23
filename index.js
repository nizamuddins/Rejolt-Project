const body = document.body

const navbar = document.querySelector(".navbar");
document.addEventListener("scroll", () => {

    navbar
        .classList
        .add("scroll")

})

setTimeout(() => {
    const copy = document.querySelector('#copy')

    const div = document.createElement('div')
    div.innerHTML = 'We, and third parties, use cookies to improve your user experience. For more i' +
            'nformation, see our Privacy Policy By clicking "Accept", you agree to the use ' +
            'of cookies. Change your settings anytime using our Cookies Preferences.'
div.classList.add('bg-black','pop')
const btn1 = document.createElement('button');
btn1.innerHTML = 'Manage Preference'
btn1.classList.add("btn","popbtn",'ms-3','mt-3')
div.append(btn1)
const btn2 = btn1.cloneNode(true);
btn2.textContent = 'Accept';
div.append(btn2)
copy.after(div)
}, 1000)