export default `<li class="chat__item data-chat="{{id}}">
<button class="chat__item-btn" type=button">
    <div class="chat__item-img"></div>
    <div class="chat__item-wrapper">
        <b class="chat__item-title">{{chatTitle}}</b>
        <p class="chat__item-text">{{chatText}}</p>
    </div>
    <div class="chat__item-counter-wrapper">
        <span class="chat__item-counter {{#unless newMessagesCount}}visually-hidden{{/unless}}">{{newMessagesCount}}</span>
    </div>
</button>
</li>`;
