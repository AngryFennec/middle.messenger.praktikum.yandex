export default `<aside class="aside">
<ul class="aside__list">
  <li class="aside__list-item">
    <a href="/profile" class="aside__list-btn {{#if isActiveProfile}} aside__list-btn--active {{/if}}" aria-label="Профиль">
        <img src="images/profile.svg" alt="profile">
    </a>
  </li>
  <li class="aside__list-item">
    <a href="/chat" class="aside__list-btn {{#if isActiveChat}} aside__list-btn--active {{/if}}" aria-label="Сообщения">
       <img src="images/messages.svg" alt="profile">
    </a>
  </li>
</ul>
</aside>`;
