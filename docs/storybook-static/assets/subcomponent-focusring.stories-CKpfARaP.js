import{k as p}from"./iframe-B68zFh-R.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-D6XkU7t1.js";import"./index-BZVBFr71.js";import"./index-Ct3pm30D.js";import"./index-DYLHq5ML.js";import"./index-BnyeYPgM.js";import"./index-DD7A8ueg.js";import"./index-DBR0qjhi.js";import"./index-uWHJZHWu.js";import"./index-Bc01kZ-z.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-B8x0XBNW.js";import"./buttonsimple.component-DtR-0bQJ.js";import"./DisabledMixin-Cqnt9CUs.js";import"./KeyDownHandledMixin-BiZdIgE3.js";import"./index-DcKjLdTd.js";import"./button.utils-rNW36Ji7.js";import"./index-CcBRSnuj.js";import"./index-DTrDRi1E.js";import"./index-BfiY_T-a.js";import"./IconNameMixin-BwwTHp8W.js";import"./index-DtrEhfhg.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-C3cosm6A.js";import"./linksimple.component-D9Jg0cK5.js";import"./DataAriaLabelMixin-BaR4QREq.js";import"./link.constants-B54f1TYF.js";import"./index-RIOMtNYw.js";import"./index-DTWIEuIB.js";import"./popover.component-TGZ1C38d.js";import"./BackdropMixin-r0_gKnDt.js";import"./FocusTrapMixin-BbIi7yxz.js";import"./popover.constants-CHY_Bn1n.js";import"./input.component-Cx7NLC3Q.js";import"./index-C66Azp1h.js";import"./index-BzQX-a8H.js";import"./statusmessage.constants-aI6TPone.js";import"./formfieldwrapper.component-BqCQR5FV.js";import"./formfieldwrapper.constants-CnsEzOUD.js";import"./FormInternalsMixin-Ch7Ctk-8.js";import"./input.constants-BfqEqTAf.js";import"./index-JvPk5tBO.js";import"./index-B4kWsmpl.js";import"./radio.constants-CLbvgWz9.js";import"./index-TehB3b43.js";import"./toggle.constants-DjEJ-jFG.js";import"./ControlTypeMixin-ISbn_sfd.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
    <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-button>Button</mdc-button>
      <mdc-avatarbutton
        initials="MD"
        size="48"
        src="https://picsum.photos/id/63/256"
        aria-label="Avatar Button"
      ></mdc-avatarbutton>
      <mdc-tab icon-name="placeholder-bold" tabindex="0" text="Tab 1" variant="pill">
        <mdc-badge slot="postfix" type="counter" counter="1"></mdc-badge>
      </mdc-tab>
    </div>
  `},o={argTypes:{...d(["shape"])},render:()=>p` <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-link icon-name="placeholder-bold"><a href="#">Link</a></mdc-link>
      <mdc-input value="Input" trailing-button></mdc-input>
      <mdc-radio name="radio" value="radio" label="Radio"></mdc-radio>
      <mdc-checkbox label="Checkbox"></mdc-checkbox>
      <mdc-toggle label="Toggle"></mdc-toggle>
    </div>`};var r,e,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-button>Button</mdc-button>
      <mdc-avatarbutton
        initials="MD"
        size="48"
        src="https://picsum.photos/id/63/256"
        aria-label="Avatar Button"
      ></mdc-avatarbutton>
      <mdc-tab icon-name="placeholder-bold" tabindex="0" text="Tab 1" variant="pill">
        <mdc-badge slot="postfix" type="counter" counter="1"></mdc-badge>
      </mdc-tab>
    </div>
  \`
}`,...(i=(e=t.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};var a,m,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  argTypes: {
    ...hideControls(['shape'])
  },
  render: () => html\` <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-link icon-name="placeholder-bold"><a href="#">Link</a></mdc-link>
      <mdc-input value="Input" trailing-button></mdc-input>
      <mdc-radio name="radio" value="radio" label="Radio"></mdc-radio>
      <mdc-checkbox label="Checkbox"></mdc-checkbox>
      <mdc-toggle label="Toggle"></mdc-toggle>
    </div>\`
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const at=["Example","FocusRingWithinHost"];export{t as Example,o as FocusRingWithinHost,at as __namedExportsOrder,it as default};
