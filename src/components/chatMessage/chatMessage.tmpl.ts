export default `
<div class="chat__message {{#if selfMessage}} chat__message--self {{/if}}">
    {{text}}
    <span class="chat__message-time">
        {{#if isReadMessage}} 
            <img src="images/messageRead.svg" alt="read message"> 
        {{/if}}
        {{time}}
    </span>
</div>
`;
