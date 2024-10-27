export function adaptive() {
    const wrapper = document.querySelector('#adaptive');
    let zoom = document.body.clientWidth / 14.4/ 100;
    // if (document.body.clientWidth > 820 && document.body.clientWidth < 1440) {
    //     zoom = document.body.clientWidth / 14.4 / 100;
    // }
    if (document.body.clientWidth > 480 && document.body.clientWidth < 821) {
        zoom = document.body.clientWidth / 7.68 / 100;
    }
    if (document.body.clientWidth < 481) {
        zoom = document.body.clientWidth / 3.75 / 100;
    }
    wrapper.style.zoom = zoom;
}
