const digitClickEvent = (e) => {
    const eventTarget = e.target;
    const totalTarget = document.getElementById('total');
    if (totalTarget.innerText.length === 3) {
        return;
    }
    if (Number(totalTarget.innerText) === 0) {
        document.getElementById('total').innerText = eventTarget.innerText;
    }
    else {
        document.getElementById('total').innerText += eventTarget.innerText;
    }
};
const operatorEvent = (e) => {
    const eventTarget = e.target;
    const totalTarget = document.getElementById('total');
    if (totalTarget.innerText.length === 3) {
        return;
    }
    if (Number(totalTarget.innerText) === 0) {
        return;
    }
    else {
        document.getElementById('total').innerText += eventTarget.innerText;
    }
};
export default function App() {
    document.getElementsByClassName('digits')[0].addEventListener('click', e => {
        digitClickEvent(e);
    });
    document.getElementsByClassName('operations')[0].addEventListener('click', e => {
        operatorEvent(e);
    });
}
App();
