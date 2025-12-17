const el = document.querySelector("button");
el.addEventListener("click", (e) => {
    e.preventDefault();
    /* 폼 네임 선택후 폼안에 있는 네임값 선택후 value 가지고오기 */
    const form = document.loginFrm; /* 폼 네임 선택 */
    const idform = form.id.value; /* 폼 네임안데 있는 name 속성 선택후 값 */
    console.log(idform);
    /* 아이디 선택해서 가지고는법 */
    const idEl = document.querySelector("#id");
    let idValue = idEl.value;
    console.log(idValue);

    /* 체크박스 true false 가지고오는법 */
    const chkEl = document.querySelector("#chk");
    let chkValue = chkEl.checked;

    console.log(chkValue);
});
