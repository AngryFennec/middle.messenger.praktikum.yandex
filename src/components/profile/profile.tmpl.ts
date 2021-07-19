export default `
<div class="profile">
    <div class="profile__wrapper">
        <form class="profile__form" id="profile-form" enctype="multipart/form-data" >
            <label class="profile__avatar-label">
                <input id="avatarField" class="profile__avatar" type="file" name="avatar" accept=".jpg, .jpeg, .png">
            </label>
            {{inputs}}
            {{buttons}}
        </form>
    </div>
</div>`;
