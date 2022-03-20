var C=Object.defineProperty,N=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var f=(a,t,l)=>t in a?C(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,u=(a,t)=>{for(var l in t||(t={}))_.call(t,l)&&f(a,l,t[l]);if(E)for(var l of E(t))F.call(t,l)&&f(a,l,t[l]);return a},p=(a,t)=>N(a,v(t));import{g,r as s,R as e,u as y,A as k,I as w,a as $,b as S}from"./vendor.8000e385.js";const L=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function l(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=l(r);fetch(r.href,o)}};L();const b=g`
  query GetFilters {
    knownFilter {
      id,
      type,
      field_name
    }
  }
`;var O=(a,t)=>{switch(t.type){case"TOGGLE_COLUMN":return p(u({},a),{hiddenColumns:a.hiddenColumns.includes(t.payload)?a.hiddenColumns.filter(l=>l!==t.payload):[...a.hiddenColumns,t.payload]});case"SET_FILTER":return p(u({},a),{filters:p(u({},a.filters),{[t.payload.key]:t.payload.newValue})});default:return a}};const x={hiddenColumns:[],filters:{},toggleColumn:()=>{},setFilter:()=>{}},h=s.exports.createContext(x),T=({children:a})=>{const[t,l]=s.exports.useReducer(O,x),n=e.useCallback(c=>{l({type:"TOGGLE_COLUMN",payload:c})},[l]),r=e.useCallback((c,d)=>{l({type:"SET_FILTER",payload:{key:c,newValue:d}})},[]),o=e.useMemo(()=>({hiddenColumns:t.hiddenColumns,filters:t.filters,toggleColumn:n,setFilter:r}),[t,n,r]);return e.createElement(h.Provider,{value:o},a)};function R({filters:a}){const{setFilter:t}=s.exports.useContext(h),l=e.useCallback((n,r)=>o=>{if(o.target.value===""){t(n,null);return}if(r==="numeric"){t(n,parseInt(o.target.value));return}if(r==="boolean"){t(n,o.target.value==="1");return}t(n,o.target.value)},[]);return e.createElement("div",{className:"row"},a.map(n=>e.createElement("div",{key:n.id,className:"col-12 col-md-6 mb-3"},n.type!=="numeric"&&e.createElement("label",{className:"form-label text-capitalize"},n.field_name),n.type=="boolean"&&e.createElement("select",{onChange:l(n.field_name,n.type),className:"form-control"},e.createElement("option",{value:""},"No filter"),e.createElement("option",{value:"1"},"Yes"),e.createElement("option",{value:"0"},"No")),n.type==="text"&&e.createElement("input",{onChange:l(n.field_name,n.type),type:"text",className:"form-control"}),n.type==="numeric"&&e.createElement("div",{className:"row"},e.createElement("div",{className:"col col-md-6"},e.createElement("label",{htmlFor:"customRange1",className:"form-label"},"Min ",n.field_name,":"),e.createElement("input",{type:"number",onChange:l(`${n.field_name}_min`,n.type),className:"form-control"})),e.createElement("div",{className:"col-12 col-md-6"},e.createElement("label",{htmlFor:"customRange1",className:"form-label"},"Max ",n.field_name,":"),e.createElement("input",{type:"number",onChange:l(`${n.field_name}_max`,n.type),className:"form-control"}))))))}var I=e.memo(R);function G({filters:a}){const{toggleColumn:t,hiddenColumns:l}=s.exports.useContext(h);return e.createElement("div",{className:"row mb-3"},a.map(n=>e.createElement("div",{key:n.id,className:"col-12 col-md-3"},e.createElement("div",{className:"form-check form-switch"},e.createElement("input",{onChange:()=>t(n.id),className:"form-check-input",type:"checkbox",checked:l.indexOf(n.id)===-1,id:"flexSwitchCheckDefault"}),e.createElement("label",{className:"form-check-label text-capitalize",htmlFor:"flexSwitchCheckDefault"},n.field_name)))))}var M=e.memo(G);function P(){const{loading:a,error:t,data:l={}}=y(b),{knownFilter:n=[]}=l;return t?s.exports.createElement("p",null,"Error :("):a?s.exports.createElement("p",null):s.exports.createElement("div",{className:"container"},s.exports.createElement("h3",{className:"mt-5 mb-3"},"Filter data"),s.exports.createElement(I,{filters:n}),s.exports.createElement("h3",{className:"mt-3 mb-3"},"Users - Pick Columns"),s.exports.createElement(M,{filters:n}))}var A=s.exports.memo(P);const K=g`
query getUsers(
  $age_min: Float,
  $age_max: Float,
  $happy: Boolean,
  $healthy: Boolean,
  $busy: Boolean,
  $name: String,
) {
  users(
    age_min: $age_min,
    age_max: $age_max,
    happy: $happy,
    healthy: $healthy,
    busy: $busy,
    name: $name
  ) {
      busy 
      name
      id
      happy
      healthy
      age
    }	
  }
`;function U(){const{hiddenColumns:a,filters:t}=s.exports.useContext(h),{data:l={},loading:n,error:r}=y(K,{variables:{age_min:t.age_min,age_max:t.age_max,happy:t.happy,healthy:t.healthy,busy:t.busy,name:t.name}}),{users:o=[]}=l,{data:c={}}=y(b),{knownFilter:d=[]}=c;return e.createElement("div",{className:"container"},e.createElement("table",{className:"table table-striped"},e.createElement("thead",null,e.createElement("tr",null,d.map(m=>a.indexOf(m.id)==-1&&e.createElement("th",{key:m.id},m.field_name)))),e.createElement("tbody",null,r&&e.createElement("tr",null,e.createElement("td",{colSpan:5},"Error getting information")),n&&e.createElement("tr",null,e.createElement("td",{colSpan:5},"Loading...")),o.length===0&&e.createElement("tr",null,e.createElement("td",{colSpan:5},"There are not results")),o.map(m=>e.createElement("tr",{key:m.id},d.map(i=>a.indexOf(i.id)==-1&&e.createElement("td",{key:i.id},i.type==="boolean"?m[i.field_name]?"Yes":"No":m[i.field_name])))))))}var q=e.memo(U);const B=new k({uri:"http://localhost:3000/graphql",cache:new w});function D(){return e.createElement(T,null,e.createElement($,{client:B},e.createElement("div",{className:"header-decoration"}),e.createElement("div",{className:"card container my-5 rounded"},e.createElement(A,null),e.createElement(q,null))))}S.render(e.createElement(e.StrictMode,null,e.createElement(D,null)),document.getElementById("root"));
