import{M as m,I as p,d as c,aa as i,r as l,N as e,l as u}from"./entry.DkfZJ0c1.js";import{u as d}from"./asyncData.CTxP7yI8.js";import f from"./Ellipsis.Cfu9vuO4.js";import y from"./ComponentPlaygroundData.BRP5W3iI.js";import"./TabsHeader.BQUQE26E.js";import"./ComponentPlaygroundProps.DCKzVCuE.js";import"./ProseH4.BUfjbsIR.js";import"./ProseCodeInline.BmaByII_.js";import"./Badge.D4uMHaA_.js";import"./MDCSlot.CPzhgHi1.js";import"./slot.emkslmFh.js";import"./ProseP.BdkTeRvc.js";import"./index.fleXSDcM.js";import"./ComponentPlaygroundSlots.vue.mg0ml-OM.js";import"./ComponentPlaygroundTokens.vue.Bwp2pl-L.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=l({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=u(h,[["__scopeId","data-v-f32a5a03"]]);export{V as default};
