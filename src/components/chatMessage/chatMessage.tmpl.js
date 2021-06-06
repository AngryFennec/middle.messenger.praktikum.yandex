export default `<div class="chat__message {{#if selfMessage}} chat__message--self {{/if}}">
{{text}}
<span class="chat__message-time">
{{#if isReadMessage}} <svg  width="11" height="5" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="-0.5" x2="3.765" y2="-0.5" transform="matrix(0.705933 0.708278 -0.705933 0.708278 0.700195 2.33313)" stroke="#7318AB"/>
<line y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 3.35815 5)" stroke="#7318AB"/>
<line y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 6.01587 5)" stroke="#7318AB"/>
</svg> {{/if}}
{{time}}
</span>
</div>
`;
