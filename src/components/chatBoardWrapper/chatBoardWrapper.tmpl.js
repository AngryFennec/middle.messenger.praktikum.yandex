export default `<div class="chat__board-wrapper">

<div class="chat__user-block">
<div class="chat__user-wrapper">
<div class="chat__user-img"></div>
<b class="chat__user-name">{{userName}}</b>
</div>
<button class="chat__menu" type="button">
<svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="1.5" cy="2" r="1.5" fill="#1C141F"/>
<circle cx="1.5" cy="8" r="1.5" fill="#1C141F"/>
<circle cx="1.5" cy="14" r="1.5" fill="#1C141F"/>
</svg>
</button>
</div>

<div class="chat__message-block">
{{messagesContent}}
</div>

<div class="chat__input-block">
<button class="chat__file-button" type="button"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.18661 13.5L14.7628 5.92389L15.7056 6.8667L8.12942 14.4428L7.18661 13.5Z" fill="#999999"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.70065 16.0141L17.2768 8.43793L18.2196 9.38074L10.6435 16.9569L9.70065 16.0141Z" fill="#999999"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.0433 21.3567L22.6194 13.7806L23.5623 14.7234L15.9861 22.2995L15.0433 21.3567Z" fill="#999999"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5573 23.8708L25.1335 16.2946L26.0763 17.2374L18.5001 24.8136L17.5573 23.8708Z" fill="#999999"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5574 23.8709C14.9423 26.486 10.7118 26.4954 8.10829 23.8919C5.50479 21.2884 5.51421 17.0579 8.12933 14.4428L7.18652 13.5C4.04838 16.6381 4.03708 21.7148 7.16127 24.839C10.2855 27.9632 15.3621 27.9518 18.5002 24.8137L17.5574 23.8709Z" fill="#999999"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.6195 13.7806L23.5623 14.7234C26.003 12.2826 26.0118 8.3341 23.5819 5.90417C21.152 3.47424 17.2035 3.48303 14.7627 5.92381L15.7055 6.86662C17.6233 4.94887 20.7257 4.94196 22.6349 6.85119C24.5441 8.76042 24.5372 11.8628 22.6195 13.7806Z" fill="#999999"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.70093 16.0144C7.95752 17.7578 7.95123 20.5782 9.6869 22.3138C11.4226 24.0495 14.2429 24.0432 15.9863 22.2998L15.0435 21.357C13.8231 22.5774 11.8489 22.5818 10.6339 21.3668C9.41895 20.1518 9.42335 18.1776 10.6437 16.9572L9.70093 16.0144Z" fill="#999999"/>
</svg>
</button>

<label class="visually-hidden" for="message"></label>
<input type="text" class="chat__input-message" id="message" name="message" placeholder="Сообщение">
<button class="chat__submit-button" type="button">
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="14" cy="14" r="14" fill="#7318AB"/>
<rect x="8" y="13.2" width="11" height="1.6" fill="white"/>
<path d="M15 9L19 14L15 19" stroke="white" stroke-width="1.6"/>
</svg>
</button>
</div>

</div>`;
