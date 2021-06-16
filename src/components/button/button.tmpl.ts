export default `
{{#if link}} 
    <a href="{{buttonRoute}}" class="button {{buttonClass}}">{{buttonText}}</a>
{{else}} 
    <button class="button {{buttonClass}}" type="{{buttonType}}">{{buttonText}}</button>
{{/if}}
`;
