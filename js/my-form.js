/* 変数指定 */
const form = document.getElementById("form");
const form_button = document.getElementById("form-button");

/* テキスト変更・チェックが更新された時のイベント処理*/
form.addEventListener("input", update);
form.addEventListener("change", update);

/* フォームの必須項目が入力されているか確認 */
function update() {
    const isRequired = form.checkValidity();

    /* チェックが入っている場合ボタンを有効 */
    if (isRequired) {
        form_button.disabled = false;
        form_button.style.opacity = 1;
        form_button.style.cursor = "pointer";
    } else {
        form_button.disabled = true;
        form_button.style.opacity = 0.6;
    }
}