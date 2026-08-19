import{C as i}from"./ControlTypeMixin-ISbn_sfd.js";import{C as d,k as l}from"./iframe-B68zFh-R.js";import{p as a}from"./index-DcKjLdTd.js";import"./index-yDK41FTK.js";import"./index-CpC64UJB.js";import"./preload-helper-C1FmrZbK.js";import"./index-CcBRSnuj.js";import"./index-DTrDRi1E.js";import"./menuitem.component-ErCE-0PC.js";import"./listitem.component-DiCj7Lkc.js";import"./DisabledMixin-Cqnt9CUs.js";import"./KeyDownHandledMixin-BiZdIgE3.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-CKsHLKpD.js";import"./index-TehB3b43.js";import"./formfieldwrapper.constants-CnsEzOUD.js";import"./popover.constants-CHY_Bn1n.js";import"./statusmessage.constants-aI6TPone.js";import"./toggle.constants-DjEJ-jFG.js";import"./index-B4kWsmpl.js";import"./popover.component-TGZ1C38d.js";import"./BackdropMixin-r0_gKnDt.js";import"./FocusTrapMixin-BbIi7yxz.js";import"./menuitemcheckbox.constants-DAVKpMYS.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,G={title:"Providers/Control Type Provider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const H=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,H as __namedExportsOrder,G as default};
