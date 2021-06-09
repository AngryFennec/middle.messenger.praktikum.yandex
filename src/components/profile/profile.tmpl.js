export default `
<div class="profile">
    <div class="profile__wrapper">
        <form class="profile__form" id="profile-form">
            <label class="profile__avatar-label">
                <input class="profile__avatar" type="file" name="avatar">
            </label>
            {{inputs}}
            {{button}}
        </form>
    </div>
</div>`;
