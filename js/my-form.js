window.addEventListener('DOMContentLoaded', () => {
    // 「送信」ボタンの要素を取得
    const submit = document.getElementById("form-button");
    submit.disabled = true;
    /* 変数指定 */
    const form = document.getElementById("form");
   /*  const form_button = document.getElementById("form-button"); */

    /* テキスト変更・チェックが更新された時のイベント処理*/
    form.addEventListener("input", update);
    form.addEventListener("change", update);

    /* フォームの必須項目が入力されているか確認 */
    function update() {
        const isRequired = form.checkValidity();

        /* チェックが入っている場合ボタンを有効 */
        if (isRequired) {
            submit.disabled = false;
            submit.style.opacity = 1;
            submit.style.cursor = "pointer";      
        } else {
            submit.disabled = true;
            submit.style.opacity = 0.6;
            submit.style.cursor = "default";     
        }
    }
    submit.addEventListener('click', (e) => {
        /* 「メール」の要素取得 */
        const mail = document.querySelector('#mail');
        /*メールアドレスのパターン 正規表現*/
        var pattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
        /* フラグ用変数 */
        var form_flg = false;
        /* メールのエラーメッセージの要素取得 */
        const errMsgMail = document.querySelector('.err-msg-mail');
        // 「メールアドレス」入力欄の空欄チェック
        if(!mail.value.match(pattern)){
            // クラスを追加(エラーメッセージを表示する)
            errMsgMail.classList.add('form-err');
            // エラーメッセージのテキスト
            errMsgMail.textContent = 'メールアドレス形式で入力されていません';
            // クラスを追加(フォームの枠線を赤くする)
            mail.classList.add('form-err');
            form_flg = false;
        }else {
            errMsgMail.textContent ='';
            mail.classList.remove('form-err');
            errMsgMail.classList.remove('form-err');
            form_flg = true; 
        }
        /* メールでエラーがない場合の処理 */
        if(form_flg) {
            document.getElementById('form').style.display = 'none';
            document.getElementById('thxMessage').style.display = 'block';
        }
    }, false);
}, false); 