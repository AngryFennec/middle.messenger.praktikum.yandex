export default `
<div class="chat__board-wrapper">
    <div class="chat__user-block">
        <div class="chat__user-wrapper">
            <div class="chat__user-img"></div>
            <b class="chat__user-name">{{userName}}</b>
        </div>
        <button class="chat__menu" type="button">
            <img src="images/menuBtn.svg" alt="menu">
        </button>
    </div>

    <div class="chat__message-block">
        {{messagesContent}}
    </div>

    <div class="chat__input-block">
        <button class="chat__file-button" type="button">
            <img src="images/fileBtn.svg" alt="file">
        </button>

        <label class="visually-hidden" for="message"></label>
        <input type="text" class="chat__input-message" id="message" name="message" placeholder="Сообщение">
        <button class="chat__submit-button" type="button">
            <img src="images/sendMsg.svg" alt="file">
        </button>
    </div>
</div>`;
