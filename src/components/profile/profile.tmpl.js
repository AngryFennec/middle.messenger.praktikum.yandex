export default `
<div class="profile">
    <div class="profile__wrapper">
        <form class="profile__form">
            <label class="profile__avatar-label">
                <input class="profile__avatar" type="file" name="avatar">
            </label>
            {{inputs}}
        </form>
        {{button}}
    </div>
</div>`;
