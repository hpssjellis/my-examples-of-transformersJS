var cn=Object.defineProperty;var an=(f,g,M)=>g in f?cn(f,g,{enumerable:!0,configurable:!0,writable:!0,value:M}):f[g]=M;var D=(f,g,M)=>an(f,typeof g!="symbol"?g+"":g,M);(function(){const g=document.createElement("link").relList;if(g&&g.supports&&g.supports("modulepreload"))return;for(const P of document.querySelectorAll('link[rel="modulepreload"]'))B(P);new MutationObserver(P=>{for(const F of P)if(F.type==="childList")for(const b of F.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&B(b)}).observe(document,{childList:!0,subtree:!0});function M(P){const F={};return P.integrity&&(F.integrity=P.integrity),P.referrerPolicy&&(F.referrerPolicy=P.referrerPolicy),P.crossOrigin==="use-credentials"?F.credentials="include":P.crossOrigin==="anonymous"?F.credentials="omit":F.credentials="same-origin",F}function B(P){if(P.ep)return;P.ep=!0;const F=M(P);fetch(P.href,F)}})();function un(f,g){return class extends f{constructor(...M){super(...M),g(this)}}}const ln=un(Array,f=>f.fill(0));let O=1e-6;function fn(f){function g(e=0,o=0){const n=new f(2);return e!==void 0&&(n[0]=e,o!==void 0&&(n[1]=o)),n}const M=g;function B(e,o,n){const i=n??new f(2);return i[0]=e,i[1]=o,i}function P(e,o){const n=o??new f(2);return n[0]=Math.ceil(e[0]),n[1]=Math.ceil(e[1]),n}function F(e,o){const n=o??new f(2);return n[0]=Math.floor(e[0]),n[1]=Math.floor(e[1]),n}function b(e,o){const n=o??new f(2);return n[0]=Math.round(e[0]),n[1]=Math.round(e[1]),n}function q(e,o=0,n=1,i){const a=i??new f(2);return a[0]=Math.min(n,Math.max(o,e[0])),a[1]=Math.min(n,Math.max(o,e[1])),a}function X(e,o,n){const i=n??new f(2);return i[0]=e[0]+o[0],i[1]=e[1]+o[1],i}function J(e,o,n,i){const a=i??new f(2);return a[0]=e[0]+o[0]*n,a[1]=e[1]+o[1]*n,a}function $(e,o){const n=e[0],i=e[1],a=o[0],v=o[1],m=Math.sqrt(n*n+i*i),c=Math.sqrt(a*a+v*v),u=m*c,h=u&&ve(e,o)/u;return Math.acos(h)}function H(e,o,n){const i=n??new f(2);return i[0]=e[0]-o[0],i[1]=e[1]-o[1],i}const te=H;function N(e,o){return Math.abs(e[0]-o[0])<O&&Math.abs(e[1]-o[1])<O}function Q(e,o){return e[0]===o[0]&&e[1]===o[1]}function U(e,o,n,i){const a=i??new f(2);return a[0]=e[0]+n*(o[0]-e[0]),a[1]=e[1]+n*(o[1]-e[1]),a}function ee(e,o,n,i){const a=i??new f(2);return a[0]=e[0]+n[0]*(o[0]-e[0]),a[1]=e[1]+n[1]*(o[1]-e[1]),a}function Z(e,o,n){const i=n??new f(2);return i[0]=Math.max(e[0],o[0]),i[1]=Math.max(e[1],o[1]),i}function K(e,o,n){const i=n??new f(2);return i[0]=Math.min(e[0],o[0]),i[1]=Math.min(e[1],o[1]),i}function E(e,o,n){const i=n??new f(2);return i[0]=e[0]*o,i[1]=e[1]*o,i}const W=E;function de(e,o,n){const i=n??new f(2);return i[0]=e[0]/o,i[1]=e[1]/o,i}function he(e,o){const n=o??new f(2);return n[0]=1/e[0],n[1]=1/e[1],n}const pe=he;function ae(e,o,n){const i=n??new f(3),a=e[0]*o[1]-e[1]*o[0];return i[0]=0,i[1]=0,i[2]=a,i}function ve(e,o){return e[0]*o[0]+e[1]*o[1]}function re(e){const o=e[0],n=e[1];return Math.sqrt(o*o+n*n)}const De=re;function I(e){const o=e[0],n=e[1];return o*o+n*n}const Y=I;function A(e,o){const n=e[0]-o[0],i=e[1]-o[1];return Math.sqrt(n*n+i*i)}const ie=A;function oe(e,o){const n=e[0]-o[0],i=e[1]-o[1];return n*n+i*i}const se=oe;function L(e,o){const n=o??new f(2),i=e[0],a=e[1],v=Math.sqrt(i*i+a*a);return v>1e-5?(n[0]=i/v,n[1]=a/v):(n[0]=0,n[1]=0),n}function ue(e,o){const n=o??new f(2);return n[0]=-e[0],n[1]=-e[1],n}function j(e,o){const n=o??new f(2);return n[0]=e[0],n[1]=e[1],n}const Fe=j;function xe(e,o,n){const i=n??new f(2);return i[0]=e[0]*o[0],i[1]=e[1]*o[1],i}const be=xe;function ge(e,o,n){const i=n??new f(2);return i[0]=e[0]/o[0],i[1]=e[1]/o[1],i}const ce=ge;function C(e=1,o){const n=o??new f(2),i=Math.random()*2*Math.PI;return n[0]=Math.cos(i)*e,n[1]=Math.sin(i)*e,n}function s(e){const o=e??new f(2);return o[0]=0,o[1]=0,o}function d(e,o,n){const i=n??new f(2),a=e[0],v=e[1];return i[0]=a*o[0]+v*o[4]+o[12],i[1]=a*o[1]+v*o[5]+o[13],i}function t(e,o,n){const i=n??new f(2),a=e[0],v=e[1];return i[0]=o[0]*a+o[4]*v+o[8],i[1]=o[1]*a+o[5]*v+o[9],i}function r(e,o,n,i){const a=i??new f(2),v=e[0]-o[0],m=e[1]-o[1],c=Math.sin(n),u=Math.cos(n);return a[0]=v*u-m*c+o[0],a[1]=v*c+m*u+o[1],a}function l(e,o,n){const i=n??new f(2);return L(e,i),E(i,o,i)}function p(e,o,n){const i=n??new f(2);return re(e)>o?l(e,o,i):j(e,i)}function w(e,o,n){const i=n??new f(2);return U(e,o,.5,i)}return{create:g,fromValues:M,set:B,ceil:P,floor:F,round:b,clamp:q,add:X,addScaled:J,angle:$,subtract:H,sub:te,equalsApproximately:N,equals:Q,lerp:U,lerpV:ee,max:Z,min:K,mulScalar:E,scale:W,divScalar:de,inverse:he,invert:pe,cross:ae,dot:ve,length:re,len:De,lengthSq:I,lenSq:Y,distance:A,dist:ie,distanceSq:oe,distSq:se,normalize:L,negate:ue,copy:j,clone:Fe,multiply:xe,mul:be,divide:ge,div:ce,random:C,zero:s,transformMat4:d,transformMat3:t,rotate:r,setLength:l,truncate:p,midpoint:w}}const Ce=new Map;function on(f){let g=Ce.get(f);return g||(g=fn(f),Ce.set(f,g)),g}function dn(f){function g(c,u,h){const x=new f(3);return c!==void 0&&(x[0]=c,u!==void 0&&(x[1]=u,h!==void 0&&(x[2]=h))),x}const M=g;function B(c,u,h,x){const _=x??new f(3);return _[0]=c,_[1]=u,_[2]=h,_}function P(c,u){const h=u??new f(3);return h[0]=Math.ceil(c[0]),h[1]=Math.ceil(c[1]),h[2]=Math.ceil(c[2]),h}function F(c,u){const h=u??new f(3);return h[0]=Math.floor(c[0]),h[1]=Math.floor(c[1]),h[2]=Math.floor(c[2]),h}function b(c,u){const h=u??new f(3);return h[0]=Math.round(c[0]),h[1]=Math.round(c[1]),h[2]=Math.round(c[2]),h}function q(c,u=0,h=1,x){const _=x??new f(3);return _[0]=Math.min(h,Math.max(u,c[0])),_[1]=Math.min(h,Math.max(u,c[1])),_[2]=Math.min(h,Math.max(u,c[2])),_}function X(c,u,h){const x=h??new f(3);return x[0]=c[0]+u[0],x[1]=c[1]+u[1],x[2]=c[2]+u[2],x}function J(c,u,h,x){const _=x??new f(3);return _[0]=c[0]+u[0]*h,_[1]=c[1]+u[1]*h,_[2]=c[2]+u[2]*h,_}function $(c,u){const h=c[0],x=c[1],_=c[2],y=u[0],z=u[1],V=u[2],T=Math.sqrt(h*h+x*x+_*_),S=Math.sqrt(y*y+z*z+V*V),G=T*S,R=G&&ve(c,u)/G;return Math.acos(R)}function H(c,u,h){const x=h??new f(3);return x[0]=c[0]-u[0],x[1]=c[1]-u[1],x[2]=c[2]-u[2],x}const te=H;function N(c,u){return Math.abs(c[0]-u[0])<O&&Math.abs(c[1]-u[1])<O&&Math.abs(c[2]-u[2])<O}function Q(c,u){return c[0]===u[0]&&c[1]===u[1]&&c[2]===u[2]}function U(c,u,h,x){const _=x??new f(3);return _[0]=c[0]+h*(u[0]-c[0]),_[1]=c[1]+h*(u[1]-c[1]),_[2]=c[2]+h*(u[2]-c[2]),_}function ee(c,u,h,x){const _=x??new f(3);return _[0]=c[0]+h[0]*(u[0]-c[0]),_[1]=c[1]+h[1]*(u[1]-c[1]),_[2]=c[2]+h[2]*(u[2]-c[2]),_}function Z(c,u,h){const x=h??new f(3);return x[0]=Math.max(c[0],u[0]),x[1]=Math.max(c[1],u[1]),x[2]=Math.max(c[2],u[2]),x}function K(c,u,h){const x=h??new f(3);return x[0]=Math.min(c[0],u[0]),x[1]=Math.min(c[1],u[1]),x[2]=Math.min(c[2],u[2]),x}function E(c,u,h){const x=h??new f(3);return x[0]=c[0]*u,x[1]=c[1]*u,x[2]=c[2]*u,x}const W=E;function de(c,u,h){const x=h??new f(3);return x[0]=c[0]/u,x[1]=c[1]/u,x[2]=c[2]/u,x}function he(c,u){const h=u??new f(3);return h[0]=1/c[0],h[1]=1/c[1],h[2]=1/c[2],h}const pe=he;function ae(c,u,h){const x=h??new f(3),_=c[2]*u[0]-c[0]*u[2],y=c[0]*u[1]-c[1]*u[0];return x[0]=c[1]*u[2]-c[2]*u[1],x[1]=_,x[2]=y,x}function ve(c,u){return c[0]*u[0]+c[1]*u[1]+c[2]*u[2]}function re(c){const u=c[0],h=c[1],x=c[2];return Math.sqrt(u*u+h*h+x*x)}const De=re;function I(c){const u=c[0],h=c[1],x=c[2];return u*u+h*h+x*x}const Y=I;function A(c,u){const h=c[0]-u[0],x=c[1]-u[1],_=c[2]-u[2];return Math.sqrt(h*h+x*x+_*_)}const ie=A;function oe(c,u){const h=c[0]-u[0],x=c[1]-u[1],_=c[2]-u[2];return h*h+x*x+_*_}const se=oe;function L(c,u){const h=u??new f(3),x=c[0],_=c[1],y=c[2],z=Math.sqrt(x*x+_*_+y*y);return z>1e-5?(h[0]=x/z,h[1]=_/z,h[2]=y/z):(h[0]=0,h[1]=0,h[2]=0),h}function ue(c,u){const h=u??new f(3);return h[0]=-c[0],h[1]=-c[1],h[2]=-c[2],h}function j(c,u){const h=u??new f(3);return h[0]=c[0],h[1]=c[1],h[2]=c[2],h}const Fe=j;function xe(c,u,h){const x=h??new f(3);return x[0]=c[0]*u[0],x[1]=c[1]*u[1],x[2]=c[2]*u[2],x}const be=xe;function ge(c,u,h){const x=h??new f(3);return x[0]=c[0]/u[0],x[1]=c[1]/u[1],x[2]=c[2]/u[2],x}const ce=ge;function C(c=1,u){const h=u??new f(3),x=Math.random()*2*Math.PI,_=Math.random()*2-1,y=Math.sqrt(1-_*_)*c;return h[0]=Math.cos(x)*y,h[1]=Math.sin(x)*y,h[2]=_*c,h}function s(c){const u=c??new f(3);return u[0]=0,u[1]=0,u[2]=0,u}function d(c,u,h){const x=h??new f(3),_=c[0],y=c[1],z=c[2],V=u[3]*_+u[7]*y+u[11]*z+u[15]||1;return x[0]=(u[0]*_+u[4]*y+u[8]*z+u[12])/V,x[1]=(u[1]*_+u[5]*y+u[9]*z+u[13])/V,x[2]=(u[2]*_+u[6]*y+u[10]*z+u[14])/V,x}function t(c,u,h){const x=h??new f(3),_=c[0],y=c[1],z=c[2];return x[0]=_*u[0*4+0]+y*u[1*4+0]+z*u[2*4+0],x[1]=_*u[0*4+1]+y*u[1*4+1]+z*u[2*4+1],x[2]=_*u[0*4+2]+y*u[1*4+2]+z*u[2*4+2],x}function r(c,u,h){const x=h??new f(3),_=c[0],y=c[1],z=c[2];return x[0]=_*u[0]+y*u[4]+z*u[8],x[1]=_*u[1]+y*u[5]+z*u[9],x[2]=_*u[2]+y*u[6]+z*u[10],x}function l(c,u,h){const x=h??new f(3),_=u[0],y=u[1],z=u[2],V=u[3]*2,T=c[0],S=c[1],G=c[2],R=y*G-z*S,k=z*T-_*G,ne=_*S-y*T;return x[0]=T+R*V+(y*ne-z*k)*2,x[1]=S+k*V+(z*R-_*ne)*2,x[2]=G+ne*V+(_*k-y*R)*2,x}function p(c,u){const h=u??new f(3);return h[0]=c[12],h[1]=c[13],h[2]=c[14],h}function w(c,u,h){const x=h??new f(3),_=u*4;return x[0]=c[_+0],x[1]=c[_+1],x[2]=c[_+2],x}function e(c,u){const h=u??new f(3),x=c[0],_=c[1],y=c[2],z=c[4],V=c[5],T=c[6],S=c[8],G=c[9],R=c[10];return h[0]=Math.sqrt(x*x+_*_+y*y),h[1]=Math.sqrt(z*z+V*V+T*T),h[2]=Math.sqrt(S*S+G*G+R*R),h}function o(c,u,h,x){const _=x??new f(3),y=[],z=[];return y[0]=c[0]-u[0],y[1]=c[1]-u[1],y[2]=c[2]-u[2],z[0]=y[0],z[1]=y[1]*Math.cos(h)-y[2]*Math.sin(h),z[2]=y[1]*Math.sin(h)+y[2]*Math.cos(h),_[0]=z[0]+u[0],_[1]=z[1]+u[1],_[2]=z[2]+u[2],_}function n(c,u,h,x){const _=x??new f(3),y=[],z=[];return y[0]=c[0]-u[0],y[1]=c[1]-u[1],y[2]=c[2]-u[2],z[0]=y[2]*Math.sin(h)+y[0]*Math.cos(h),z[1]=y[1],z[2]=y[2]*Math.cos(h)-y[0]*Math.sin(h),_[0]=z[0]+u[0],_[1]=z[1]+u[1],_[2]=z[2]+u[2],_}function i(c,u,h,x){const _=x??new f(3),y=[],z=[];return y[0]=c[0]-u[0],y[1]=c[1]-u[1],y[2]=c[2]-u[2],z[0]=y[0]*Math.cos(h)-y[1]*Math.sin(h),z[1]=y[0]*Math.sin(h)+y[1]*Math.cos(h),z[2]=y[2],_[0]=z[0]+u[0],_[1]=z[1]+u[1],_[2]=z[2]+u[2],_}function a(c,u,h){const x=h??new f(3);return L(c,x),E(x,u,x)}function v(c,u,h){const x=h??new f(3);return re(c)>u?a(c,u,x):j(c,x)}function m(c,u,h){const x=h??new f(3);return U(c,u,.5,x)}return{create:g,fromValues:M,set:B,ceil:P,floor:F,round:b,clamp:q,add:X,addScaled:J,angle:$,subtract:H,sub:te,equalsApproximately:N,equals:Q,lerp:U,lerpV:ee,max:Z,min:K,mulScalar:E,scale:W,divScalar:de,inverse:he,invert:pe,cross:ae,dot:ve,length:re,len:De,lengthSq:I,lenSq:Y,distance:A,dist:ie,distanceSq:oe,distSq:se,normalize:L,negate:ue,copy:j,clone:Fe,multiply:xe,mul:be,divide:ge,div:ce,random:C,zero:s,transformMat4:d,transformMat4Upper3x3:t,transformMat3:r,transformQuat:l,getTranslation:p,getAxis:w,getScaling:e,rotateX:o,rotateY:n,rotateZ:i,setLength:a,truncate:v,midpoint:m}}const en=new Map;function We(f){let g=en.get(f);return g||(g=dn(f),en.set(f,g)),g}function pn(f){const g=on(f),M=We(f);function B(s,d,t,r,l,p,w,e,o){const n=new f(12);return n[3]=0,n[7]=0,n[11]=0,s!==void 0&&(n[0]=s,d!==void 0&&(n[1]=d,t!==void 0&&(n[2]=t,r!==void 0&&(n[4]=r,l!==void 0&&(n[5]=l,p!==void 0&&(n[6]=p,w!==void 0&&(n[8]=w,e!==void 0&&(n[9]=e,o!==void 0&&(n[10]=o))))))))),n}function P(s,d,t,r,l,p,w,e,o,n){const i=n??new f(12);return i[0]=s,i[1]=d,i[2]=t,i[3]=0,i[4]=r,i[5]=l,i[6]=p,i[7]=0,i[8]=w,i[9]=e,i[10]=o,i[11]=0,i}function F(s,d){const t=d??new f(12);return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=0,t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=0,t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=0,t}function b(s,d){const t=d??new f(12),r=s[0],l=s[1],p=s[2],w=s[3],e=r+r,o=l+l,n=p+p,i=r*e,a=l*e,v=l*o,m=p*e,c=p*o,u=p*n,h=w*e,x=w*o,_=w*n;return t[0]=1-v-u,t[1]=a+_,t[2]=m-x,t[3]=0,t[4]=a-_,t[5]=1-i-u,t[6]=c+h,t[7]=0,t[8]=m+x,t[9]=c-h,t[10]=1-i-v,t[11]=0,t}function q(s,d){const t=d??new f(12);return t[0]=-s[0],t[1]=-s[1],t[2]=-s[2],t[4]=-s[4],t[5]=-s[5],t[6]=-s[6],t[8]=-s[8],t[9]=-s[9],t[10]=-s[10],t}function X(s,d){const t=d??new f(12);return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[8]=s[8],t[9]=s[9],t[10]=s[10],t}const J=X;function $(s,d){return Math.abs(s[0]-d[0])<O&&Math.abs(s[1]-d[1])<O&&Math.abs(s[2]-d[2])<O&&Math.abs(s[4]-d[4])<O&&Math.abs(s[5]-d[5])<O&&Math.abs(s[6]-d[6])<O&&Math.abs(s[8]-d[8])<O&&Math.abs(s[9]-d[9])<O&&Math.abs(s[10]-d[10])<O}function H(s,d){return s[0]===d[0]&&s[1]===d[1]&&s[2]===d[2]&&s[4]===d[4]&&s[5]===d[5]&&s[6]===d[6]&&s[8]===d[8]&&s[9]===d[9]&&s[10]===d[10]}function te(s){const d=s??new f(12);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=1,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function N(s,d){const t=d??new f(12);if(t===s){let v;return v=s[1],s[1]=s[4],s[4]=v,v=s[2],s[2]=s[8],s[8]=v,v=s[6],s[6]=s[9],s[9]=v,t}const r=s[0*4+0],l=s[0*4+1],p=s[0*4+2],w=s[1*4+0],e=s[1*4+1],o=s[1*4+2],n=s[2*4+0],i=s[2*4+1],a=s[2*4+2];return t[0]=r,t[1]=w,t[2]=n,t[4]=l,t[5]=e,t[6]=i,t[8]=p,t[9]=o,t[10]=a,t}function Q(s,d){const t=d??new f(12),r=s[0*4+0],l=s[0*4+1],p=s[0*4+2],w=s[1*4+0],e=s[1*4+1],o=s[1*4+2],n=s[2*4+0],i=s[2*4+1],a=s[2*4+2],v=a*e-o*i,m=-a*w+o*n,c=i*w-e*n,u=1/(r*v+l*m+p*c);return t[0]=v*u,t[1]=(-a*l+p*i)*u,t[2]=(o*l-p*e)*u,t[4]=m*u,t[5]=(a*r-p*n)*u,t[6]=(-o*r+p*w)*u,t[8]=c*u,t[9]=(-i*r+l*n)*u,t[10]=(e*r-l*w)*u,t}function U(s){const d=s[0],t=s[0*4+1],r=s[0*4+2],l=s[1*4+0],p=s[1*4+1],w=s[1*4+2],e=s[2*4+0],o=s[2*4+1],n=s[2*4+2];return d*(p*n-o*w)-l*(t*n-o*r)+e*(t*w-p*r)}const ee=Q;function Z(s,d,t){const r=t??new f(12),l=s[0],p=s[1],w=s[2],e=s[4],o=s[5],n=s[6],i=s[8],a=s[9],v=s[10],m=d[0],c=d[1],u=d[2],h=d[4],x=d[5],_=d[6],y=d[8],z=d[9],V=d[10];return r[0]=l*m+e*c+i*u,r[1]=p*m+o*c+a*u,r[2]=w*m+n*c+v*u,r[4]=l*h+e*x+i*_,r[5]=p*h+o*x+a*_,r[6]=w*h+n*x+v*_,r[8]=l*y+e*z+i*V,r[9]=p*y+o*z+a*V,r[10]=w*y+n*z+v*V,r}const K=Z;function E(s,d,t){const r=t??te();return s!==r&&(r[0]=s[0],r[1]=s[1],r[2]=s[2],r[4]=s[4],r[5]=s[5],r[6]=s[6]),r[8]=d[0],r[9]=d[1],r[10]=1,r}function W(s,d){const t=d??g.create();return t[0]=s[8],t[1]=s[9],t}function de(s,d,t){const r=t??g.create(),l=d*4;return r[0]=s[l+0],r[1]=s[l+1],r}function he(s,d,t,r){const l=r===s?s:X(s,r),p=t*4;return l[p+0]=d[0],l[p+1]=d[1],l}function pe(s,d){const t=d??g.create(),r=s[0],l=s[1],p=s[4],w=s[5];return t[0]=Math.sqrt(r*r+l*l),t[1]=Math.sqrt(p*p+w*w),t}function ae(s,d){const t=d??M.create(),r=s[0],l=s[1],p=s[2],w=s[4],e=s[5],o=s[6],n=s[8],i=s[9],a=s[10];return t[0]=Math.sqrt(r*r+l*l+p*p),t[1]=Math.sqrt(w*w+e*e+o*o),t[2]=Math.sqrt(n*n+i*i+a*a),t}function ve(s,d){const t=d??new f(12);return t[0]=1,t[1]=0,t[2]=0,t[4]=0,t[5]=1,t[6]=0,t[8]=s[0],t[9]=s[1],t[10]=1,t}function re(s,d,t){const r=t??new f(12),l=d[0],p=d[1],w=s[0],e=s[1],o=s[2],n=s[1*4+0],i=s[1*4+1],a=s[1*4+2],v=s[2*4+0],m=s[2*4+1],c=s[2*4+2];return s!==r&&(r[0]=w,r[1]=e,r[2]=o,r[4]=n,r[5]=i,r[6]=a),r[8]=w*l+n*p+v,r[9]=e*l+i*p+m,r[10]=o*l+a*p+c,r}function De(s,d){const t=d??new f(12),r=Math.cos(s),l=Math.sin(s);return t[0]=r,t[1]=l,t[2]=0,t[4]=-l,t[5]=r,t[6]=0,t[8]=0,t[9]=0,t[10]=1,t}function I(s,d,t){const r=t??new f(12),l=s[0*4+0],p=s[0*4+1],w=s[0*4+2],e=s[1*4+0],o=s[1*4+1],n=s[1*4+2],i=Math.cos(d),a=Math.sin(d);return r[0]=i*l+a*e,r[1]=i*p+a*o,r[2]=i*w+a*n,r[4]=i*e-a*l,r[5]=i*o-a*p,r[6]=i*n-a*w,s!==r&&(r[8]=s[8],r[9]=s[9],r[10]=s[10]),r}function Y(s,d){const t=d??new f(12),r=Math.cos(s),l=Math.sin(s);return t[0]=1,t[1]=0,t[2]=0,t[4]=0,t[5]=r,t[6]=l,t[8]=0,t[9]=-l,t[10]=r,t}function A(s,d,t){const r=t??new f(12),l=s[4],p=s[5],w=s[6],e=s[8],o=s[9],n=s[10],i=Math.cos(d),a=Math.sin(d);return r[4]=i*l+a*e,r[5]=i*p+a*o,r[6]=i*w+a*n,r[8]=i*e-a*l,r[9]=i*o-a*p,r[10]=i*n-a*w,s!==r&&(r[0]=s[0],r[1]=s[1],r[2]=s[2]),r}function ie(s,d){const t=d??new f(12),r=Math.cos(s),l=Math.sin(s);return t[0]=r,t[1]=0,t[2]=-l,t[4]=0,t[5]=1,t[6]=0,t[8]=l,t[9]=0,t[10]=r,t}function oe(s,d,t){const r=t??new f(12),l=s[0*4+0],p=s[0*4+1],w=s[0*4+2],e=s[2*4+0],o=s[2*4+1],n=s[2*4+2],i=Math.cos(d),a=Math.sin(d);return r[0]=i*l-a*e,r[1]=i*p-a*o,r[2]=i*w-a*n,r[8]=i*e+a*l,r[9]=i*o+a*p,r[10]=i*n+a*w,s!==r&&(r[4]=s[4],r[5]=s[5],r[6]=s[6]),r}const se=De,L=I;function ue(s,d){const t=d??new f(12);return t[0]=s[0],t[1]=0,t[2]=0,t[4]=0,t[5]=s[1],t[6]=0,t[8]=0,t[9]=0,t[10]=1,t}function j(s,d,t){const r=t??new f(12),l=d[0],p=d[1];return r[0]=l*s[0*4+0],r[1]=l*s[0*4+1],r[2]=l*s[0*4+2],r[4]=p*s[1*4+0],r[5]=p*s[1*4+1],r[6]=p*s[1*4+2],s!==r&&(r[8]=s[8],r[9]=s[9],r[10]=s[10]),r}function Fe(s,d){const t=d??new f(12);return t[0]=s[0],t[1]=0,t[2]=0,t[4]=0,t[5]=s[1],t[6]=0,t[8]=0,t[9]=0,t[10]=s[2],t}function xe(s,d,t){const r=t??new f(12),l=d[0],p=d[1],w=d[2];return r[0]=l*s[0*4+0],r[1]=l*s[0*4+1],r[2]=l*s[0*4+2],r[4]=p*s[1*4+0],r[5]=p*s[1*4+1],r[6]=p*s[1*4+2],r[8]=w*s[2*4+0],r[9]=w*s[2*4+1],r[10]=w*s[2*4+2],r}function be(s,d){const t=d??new f(12);return t[0]=s,t[1]=0,t[2]=0,t[4]=0,t[5]=s,t[6]=0,t[8]=0,t[9]=0,t[10]=1,t}function ge(s,d,t){const r=t??new f(12);return r[0]=d*s[0*4+0],r[1]=d*s[0*4+1],r[2]=d*s[0*4+2],r[4]=d*s[1*4+0],r[5]=d*s[1*4+1],r[6]=d*s[1*4+2],s!==r&&(r[8]=s[8],r[9]=s[9],r[10]=s[10]),r}function ce(s,d){const t=d??new f(12);return t[0]=s,t[1]=0,t[2]=0,t[4]=0,t[5]=s,t[6]=0,t[8]=0,t[9]=0,t[10]=s,t}function C(s,d,t){const r=t??new f(12);return r[0]=d*s[0*4+0],r[1]=d*s[0*4+1],r[2]=d*s[0*4+2],r[4]=d*s[1*4+0],r[5]=d*s[1*4+1],r[6]=d*s[1*4+2],r[8]=d*s[2*4+0],r[9]=d*s[2*4+1],r[10]=d*s[2*4+2],r}return{clone:J,create:B,set:P,fromMat4:F,fromQuat:b,negate:q,copy:X,equalsApproximately:$,equals:H,identity:te,transpose:N,inverse:Q,invert:ee,determinant:U,mul:K,multiply:Z,setTranslation:E,getTranslation:W,getAxis:de,setAxis:he,getScaling:pe,get3DScaling:ae,translation:ve,translate:re,rotation:De,rotate:I,rotationX:Y,rotateX:A,rotationY:ie,rotateY:oe,rotationZ:se,rotateZ:L,scaling:ue,scale:j,uniformScaling:be,uniformScale:ge,scaling3D:Fe,scale3D:xe,uniformScaling3D:ce,uniformScale3D:C}}const nn=new Map;function hn(f){let g=nn.get(f);return g||(g=pn(f),nn.set(f,g)),g}function vn(f){const g=We(f);function M(e,o,n,i,a,v,m,c,u,h,x,_,y,z,V,T){const S=new f(16);return e!==void 0&&(S[0]=e,o!==void 0&&(S[1]=o,n!==void 0&&(S[2]=n,i!==void 0&&(S[3]=i,a!==void 0&&(S[4]=a,v!==void 0&&(S[5]=v,m!==void 0&&(S[6]=m,c!==void 0&&(S[7]=c,u!==void 0&&(S[8]=u,h!==void 0&&(S[9]=h,x!==void 0&&(S[10]=x,_!==void 0&&(S[11]=_,y!==void 0&&(S[12]=y,z!==void 0&&(S[13]=z,V!==void 0&&(S[14]=V,T!==void 0&&(S[15]=T)))))))))))))))),S}function B(e,o,n,i,a,v,m,c,u,h,x,_,y,z,V,T,S){const G=S??new f(16);return G[0]=e,G[1]=o,G[2]=n,G[3]=i,G[4]=a,G[5]=v,G[6]=m,G[7]=c,G[8]=u,G[9]=h,G[10]=x,G[11]=_,G[12]=y,G[13]=z,G[14]=V,G[15]=T,G}function P(e,o){const n=o??new f(16);return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=0,n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=0,n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function F(e,o){const n=o??new f(16),i=e[0],a=e[1],v=e[2],m=e[3],c=i+i,u=a+a,h=v+v,x=i*c,_=a*c,y=a*u,z=v*c,V=v*u,T=v*h,S=m*c,G=m*u,R=m*h;return n[0]=1-y-T,n[1]=_+R,n[2]=z-G,n[3]=0,n[4]=_-R,n[5]=1-x-T,n[6]=V+S,n[7]=0,n[8]=z+G,n[9]=V-S,n[10]=1-x-y,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function b(e,o){const n=o??new f(16);return n[0]=-e[0],n[1]=-e[1],n[2]=-e[2],n[3]=-e[3],n[4]=-e[4],n[5]=-e[5],n[6]=-e[6],n[7]=-e[7],n[8]=-e[8],n[9]=-e[9],n[10]=-e[10],n[11]=-e[11],n[12]=-e[12],n[13]=-e[13],n[14]=-e[14],n[15]=-e[15],n}function q(e,o){const n=o??new f(16);return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}const X=q;function J(e,o){return Math.abs(e[0]-o[0])<O&&Math.abs(e[1]-o[1])<O&&Math.abs(e[2]-o[2])<O&&Math.abs(e[3]-o[3])<O&&Math.abs(e[4]-o[4])<O&&Math.abs(e[5]-o[5])<O&&Math.abs(e[6]-o[6])<O&&Math.abs(e[7]-o[7])<O&&Math.abs(e[8]-o[8])<O&&Math.abs(e[9]-o[9])<O&&Math.abs(e[10]-o[10])<O&&Math.abs(e[11]-o[11])<O&&Math.abs(e[12]-o[12])<O&&Math.abs(e[13]-o[13])<O&&Math.abs(e[14]-o[14])<O&&Math.abs(e[15]-o[15])<O}function $(e,o){return e[0]===o[0]&&e[1]===o[1]&&e[2]===o[2]&&e[3]===o[3]&&e[4]===o[4]&&e[5]===o[5]&&e[6]===o[6]&&e[7]===o[7]&&e[8]===o[8]&&e[9]===o[9]&&e[10]===o[10]&&e[11]===o[11]&&e[12]===o[12]&&e[13]===o[13]&&e[14]===o[14]&&e[15]===o[15]}function H(e){const o=e??new f(16);return o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=1,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=1,o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1,o}function te(e,o){const n=o??new f(16);if(n===e){let k;return k=e[1],e[1]=e[4],e[4]=k,k=e[2],e[2]=e[8],e[8]=k,k=e[3],e[3]=e[12],e[12]=k,k=e[6],e[6]=e[9],e[9]=k,k=e[7],e[7]=e[13],e[13]=k,k=e[11],e[11]=e[14],e[14]=k,n}const i=e[0*4+0],a=e[0*4+1],v=e[0*4+2],m=e[0*4+3],c=e[1*4+0],u=e[1*4+1],h=e[1*4+2],x=e[1*4+3],_=e[2*4+0],y=e[2*4+1],z=e[2*4+2],V=e[2*4+3],T=e[3*4+0],S=e[3*4+1],G=e[3*4+2],R=e[3*4+3];return n[0]=i,n[1]=c,n[2]=_,n[3]=T,n[4]=a,n[5]=u,n[6]=y,n[7]=S,n[8]=v,n[9]=h,n[10]=z,n[11]=G,n[12]=m,n[13]=x,n[14]=V,n[15]=R,n}function N(e,o){const n=o??new f(16),i=e[0*4+0],a=e[0*4+1],v=e[0*4+2],m=e[0*4+3],c=e[1*4+0],u=e[1*4+1],h=e[1*4+2],x=e[1*4+3],_=e[2*4+0],y=e[2*4+1],z=e[2*4+2],V=e[2*4+3],T=e[3*4+0],S=e[3*4+1],G=e[3*4+2],R=e[3*4+3],k=z*R,ne=G*V,le=h*R,fe=G*x,we=h*V,_e=z*x,me=v*R,ye=G*m,ze=v*V,Me=z*m,Be=v*x,Se=h*m,Ve=_*S,Ge=T*y,Te=c*S,Ae=T*u,Ue=c*y,Re=_*u,Ye=i*S,ke=T*a,Ee=i*y,Xe=_*a,Le=i*u,je=c*a,Qe=k*u+fe*y+we*S-(ne*u+le*y+_e*S),Ze=ne*a+me*y+Me*S-(k*a+ye*y+ze*S),Ke=le*a+ye*u+Be*S-(fe*a+me*u+Se*S),Je=_e*a+ze*u+Se*y-(we*a+Me*u+Be*y),Pe=1/(i*Qe+c*Ze+_*Ke+T*Je);return n[0]=Pe*Qe,n[1]=Pe*Ze,n[2]=Pe*Ke,n[3]=Pe*Je,n[4]=Pe*(ne*c+le*_+_e*T-(k*c+fe*_+we*T)),n[5]=Pe*(k*i+ye*_+ze*T-(ne*i+me*_+Me*T)),n[6]=Pe*(fe*i+me*c+Se*T-(le*i+ye*c+Be*T)),n[7]=Pe*(we*i+Me*c+Be*_-(_e*i+ze*c+Se*_)),n[8]=Pe*(Ve*x+Ae*V+Ue*R-(Ge*x+Te*V+Re*R)),n[9]=Pe*(Ge*m+Ye*V+Xe*R-(Ve*m+ke*V+Ee*R)),n[10]=Pe*(Te*m+ke*x+Le*R-(Ae*m+Ye*x+je*R)),n[11]=Pe*(Re*m+Ee*x+je*V-(Ue*m+Xe*x+Le*V)),n[12]=Pe*(Te*z+Re*G+Ge*h-(Ue*G+Ve*h+Ae*z)),n[13]=Pe*(Ee*G+Ve*v+ke*z-(Ye*z+Xe*G+Ge*v)),n[14]=Pe*(Ye*h+je*G+Ae*v-(Le*G+Te*v+ke*h)),n[15]=Pe*(Le*z+Ue*v+Xe*h-(Ee*h+je*z+Re*v)),n}function Q(e){const o=e[0],n=e[0*4+1],i=e[0*4+2],a=e[0*4+3],v=e[1*4+0],m=e[1*4+1],c=e[1*4+2],u=e[1*4+3],h=e[2*4+0],x=e[2*4+1],_=e[2*4+2],y=e[2*4+3],z=e[3*4+0],V=e[3*4+1],T=e[3*4+2],S=e[3*4+3],G=_*S,R=T*y,k=c*S,ne=T*u,le=c*y,fe=_*u,we=i*S,_e=T*a,me=i*y,ye=_*a,ze=i*u,Me=c*a,Be=G*m+ne*x+le*V-(R*m+k*x+fe*V),Se=R*n+we*x+ye*V-(G*n+_e*x+me*V),Ve=k*n+_e*m+ze*V-(ne*n+we*m+Me*V),Ge=fe*n+me*m+Me*x-(le*n+ye*m+ze*x);return o*Be+v*Se+h*Ve+z*Ge}const U=N;function ee(e,o,n){const i=n??new f(16),a=e[0],v=e[1],m=e[2],c=e[3],u=e[4],h=e[5],x=e[6],_=e[7],y=e[8],z=e[9],V=e[10],T=e[11],S=e[12],G=e[13],R=e[14],k=e[15],ne=o[0],le=o[1],fe=o[2],we=o[3],_e=o[4],me=o[5],ye=o[6],ze=o[7],Me=o[8],Be=o[9],Se=o[10],Ve=o[11],Ge=o[12],Te=o[13],Ae=o[14],Ue=o[15];return i[0]=a*ne+u*le+y*fe+S*we,i[1]=v*ne+h*le+z*fe+G*we,i[2]=m*ne+x*le+V*fe+R*we,i[3]=c*ne+_*le+T*fe+k*we,i[4]=a*_e+u*me+y*ye+S*ze,i[5]=v*_e+h*me+z*ye+G*ze,i[6]=m*_e+x*me+V*ye+R*ze,i[7]=c*_e+_*me+T*ye+k*ze,i[8]=a*Me+u*Be+y*Se+S*Ve,i[9]=v*Me+h*Be+z*Se+G*Ve,i[10]=m*Me+x*Be+V*Se+R*Ve,i[11]=c*Me+_*Be+T*Se+k*Ve,i[12]=a*Ge+u*Te+y*Ae+S*Ue,i[13]=v*Ge+h*Te+z*Ae+G*Ue,i[14]=m*Ge+x*Te+V*Ae+R*Ue,i[15]=c*Ge+_*Te+T*Ae+k*Ue,i}const Z=ee;function K(e,o,n){const i=n??H();return e!==i&&(i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=e[7],i[8]=e[8],i[9]=e[9],i[10]=e[10],i[11]=e[11]),i[12]=o[0],i[13]=o[1],i[14]=o[2],i[15]=1,i}function E(e,o){const n=o??g.create();return n[0]=e[12],n[1]=e[13],n[2]=e[14],n}function W(e,o,n){const i=n??g.create(),a=o*4;return i[0]=e[a+0],i[1]=e[a+1],i[2]=e[a+2],i}function de(e,o,n,i){const a=i===e?i:q(e,i),v=n*4;return a[v+0]=o[0],a[v+1]=o[1],a[v+2]=o[2],a}function he(e,o){const n=o??g.create(),i=e[0],a=e[1],v=e[2],m=e[4],c=e[5],u=e[6],h=e[8],x=e[9],_=e[10];return n[0]=Math.sqrt(i*i+a*a+v*v),n[1]=Math.sqrt(m*m+c*c+u*u),n[2]=Math.sqrt(h*h+x*x+_*_),n}function pe(e,o,n,i,a){const v=a??new f(16),m=Math.tan(Math.PI*.5-.5*e);if(v[0]=m/o,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=m,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[11]=-1,v[12]=0,v[13]=0,v[15]=0,Number.isFinite(i)){const c=1/(n-i);v[10]=i*c,v[14]=i*n*c}else v[10]=-1,v[14]=-n;return v}function ae(e,o,n,i=1/0,a){const v=a??new f(16),m=1/Math.tan(e*.5);if(v[0]=m/o,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=m,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[11]=-1,v[12]=0,v[13]=0,v[15]=0,i===1/0)v[10]=0,v[14]=n;else{const c=1/(i-n);v[10]=n*c,v[14]=i*n*c}return v}function ve(e,o,n,i,a,v,m){const c=m??new f(16);return c[0]=2/(o-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(i-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1/(a-v),c[11]=0,c[12]=(o+e)/(e-o),c[13]=(i+n)/(n-i),c[14]=a/(a-v),c[15]=1,c}function re(e,o,n,i,a,v,m){const c=m??new f(16),u=o-e,h=i-n,x=a-v;return c[0]=2*a/u,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*a/h,c[6]=0,c[7]=0,c[8]=(e+o)/u,c[9]=(i+n)/h,c[10]=v/x,c[11]=-1,c[12]=0,c[13]=0,c[14]=a*v/x,c[15]=0,c}function De(e,o,n,i,a,v=1/0,m){const c=m??new f(16),u=o-e,h=i-n;if(c[0]=2*a/u,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*a/h,c[6]=0,c[7]=0,c[8]=(e+o)/u,c[9]=(i+n)/h,c[11]=-1,c[12]=0,c[13]=0,c[15]=0,v===1/0)c[10]=0,c[14]=a;else{const x=1/(v-a);c[10]=a*x,c[14]=v*a*x}return c}const I=g.create(),Y=g.create(),A=g.create();function ie(e,o,n,i){const a=i??new f(16);return g.normalize(g.subtract(o,e,A),A),g.normalize(g.cross(n,A,I),I),g.normalize(g.cross(A,I,Y),Y),a[0]=I[0],a[1]=I[1],a[2]=I[2],a[3]=0,a[4]=Y[0],a[5]=Y[1],a[6]=Y[2],a[7]=0,a[8]=A[0],a[9]=A[1],a[10]=A[2],a[11]=0,a[12]=e[0],a[13]=e[1],a[14]=e[2],a[15]=1,a}function oe(e,o,n,i){const a=i??new f(16);return g.normalize(g.subtract(e,o,A),A),g.normalize(g.cross(n,A,I),I),g.normalize(g.cross(A,I,Y),Y),a[0]=I[0],a[1]=I[1],a[2]=I[2],a[3]=0,a[4]=Y[0],a[5]=Y[1],a[6]=Y[2],a[7]=0,a[8]=A[0],a[9]=A[1],a[10]=A[2],a[11]=0,a[12]=e[0],a[13]=e[1],a[14]=e[2],a[15]=1,a}function se(e,o,n,i){const a=i??new f(16);return g.normalize(g.subtract(e,o,A),A),g.normalize(g.cross(n,A,I),I),g.normalize(g.cross(A,I,Y),Y),a[0]=I[0],a[1]=Y[0],a[2]=A[0],a[3]=0,a[4]=I[1],a[5]=Y[1],a[6]=A[1],a[7]=0,a[8]=I[2],a[9]=Y[2],a[10]=A[2],a[11]=0,a[12]=-(I[0]*e[0]+I[1]*e[1]+I[2]*e[2]),a[13]=-(Y[0]*e[0]+Y[1]*e[1]+Y[2]*e[2]),a[14]=-(A[0]*e[0]+A[1]*e[1]+A[2]*e[2]),a[15]=1,a}function L(e,o){const n=o??new f(16);return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=e[0],n[13]=e[1],n[14]=e[2],n[15]=1,n}function ue(e,o,n){const i=n??new f(16),a=o[0],v=o[1],m=o[2],c=e[0],u=e[1],h=e[2],x=e[3],_=e[1*4+0],y=e[1*4+1],z=e[1*4+2],V=e[1*4+3],T=e[2*4+0],S=e[2*4+1],G=e[2*4+2],R=e[2*4+3],k=e[3*4+0],ne=e[3*4+1],le=e[3*4+2],fe=e[3*4+3];return e!==i&&(i[0]=c,i[1]=u,i[2]=h,i[3]=x,i[4]=_,i[5]=y,i[6]=z,i[7]=V,i[8]=T,i[9]=S,i[10]=G,i[11]=R),i[12]=c*a+_*v+T*m+k,i[13]=u*a+y*v+S*m+ne,i[14]=h*a+z*v+G*m+le,i[15]=x*a+V*v+R*m+fe,i}function j(e,o){const n=o??new f(16),i=Math.cos(e),a=Math.sin(e);return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=i,n[6]=a,n[7]=0,n[8]=0,n[9]=-a,n[10]=i,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function Fe(e,o,n){const i=n??new f(16),a=e[4],v=e[5],m=e[6],c=e[7],u=e[8],h=e[9],x=e[10],_=e[11],y=Math.cos(o),z=Math.sin(o);return i[4]=y*a+z*u,i[5]=y*v+z*h,i[6]=y*m+z*x,i[7]=y*c+z*_,i[8]=y*u-z*a,i[9]=y*h-z*v,i[10]=y*x-z*m,i[11]=y*_-z*c,e!==i&&(i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]),i}function xe(e,o){const n=o??new f(16),i=Math.cos(e),a=Math.sin(e);return n[0]=i,n[1]=0,n[2]=-a,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=a,n[9]=0,n[10]=i,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function be(e,o,n){const i=n??new f(16),a=e[0*4+0],v=e[0*4+1],m=e[0*4+2],c=e[0*4+3],u=e[2*4+0],h=e[2*4+1],x=e[2*4+2],_=e[2*4+3],y=Math.cos(o),z=Math.sin(o);return i[0]=y*a-z*u,i[1]=y*v-z*h,i[2]=y*m-z*x,i[3]=y*c-z*_,i[8]=y*u+z*a,i[9]=y*h+z*v,i[10]=y*x+z*m,i[11]=y*_+z*c,e!==i&&(i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=e[7],i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]),i}function ge(e,o){const n=o??new f(16),i=Math.cos(e),a=Math.sin(e);return n[0]=i,n[1]=a,n[2]=0,n[3]=0,n[4]=-a,n[5]=i,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function ce(e,o,n){const i=n??new f(16),a=e[0*4+0],v=e[0*4+1],m=e[0*4+2],c=e[0*4+3],u=e[1*4+0],h=e[1*4+1],x=e[1*4+2],_=e[1*4+3],y=Math.cos(o),z=Math.sin(o);return i[0]=y*a+z*u,i[1]=y*v+z*h,i[2]=y*m+z*x,i[3]=y*c+z*_,i[4]=y*u-z*a,i[5]=y*h-z*v,i[6]=y*x-z*m,i[7]=y*_-z*c,e!==i&&(i[8]=e[8],i[9]=e[9],i[10]=e[10],i[11]=e[11],i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]),i}function C(e,o,n){const i=n??new f(16);let a=e[0],v=e[1],m=e[2];const c=Math.sqrt(a*a+v*v+m*m);a/=c,v/=c,m/=c;const u=a*a,h=v*v,x=m*m,_=Math.cos(o),y=Math.sin(o),z=1-_;return i[0]=u+(1-u)*_,i[1]=a*v*z+m*y,i[2]=a*m*z-v*y,i[3]=0,i[4]=a*v*z-m*y,i[5]=h+(1-h)*_,i[6]=v*m*z+a*y,i[7]=0,i[8]=a*m*z+v*y,i[9]=v*m*z-a*y,i[10]=x+(1-x)*_,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}const s=C;function d(e,o,n,i){const a=i??new f(16);let v=o[0],m=o[1],c=o[2];const u=Math.sqrt(v*v+m*m+c*c);v/=u,m/=u,c/=u;const h=v*v,x=m*m,_=c*c,y=Math.cos(n),z=Math.sin(n),V=1-y,T=h+(1-h)*y,S=v*m*V+c*z,G=v*c*V-m*z,R=v*m*V-c*z,k=x+(1-x)*y,ne=m*c*V+v*z,le=v*c*V+m*z,fe=m*c*V-v*z,we=_+(1-_)*y,_e=e[0],me=e[1],ye=e[2],ze=e[3],Me=e[4],Be=e[5],Se=e[6],Ve=e[7],Ge=e[8],Te=e[9],Ae=e[10],Ue=e[11];return a[0]=T*_e+S*Me+G*Ge,a[1]=T*me+S*Be+G*Te,a[2]=T*ye+S*Se+G*Ae,a[3]=T*ze+S*Ve+G*Ue,a[4]=R*_e+k*Me+ne*Ge,a[5]=R*me+k*Be+ne*Te,a[6]=R*ye+k*Se+ne*Ae,a[7]=R*ze+k*Ve+ne*Ue,a[8]=le*_e+fe*Me+we*Ge,a[9]=le*me+fe*Be+we*Te,a[10]=le*ye+fe*Se+we*Ae,a[11]=le*ze+fe*Ve+we*Ue,e!==a&&(a[12]=e[12],a[13]=e[13],a[14]=e[14],a[15]=e[15]),a}const t=d;function r(e,o){const n=o??new f(16);return n[0]=e[0],n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=e[1],n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=e[2],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function l(e,o,n){const i=n??new f(16),a=o[0],v=o[1],m=o[2];return i[0]=a*e[0*4+0],i[1]=a*e[0*4+1],i[2]=a*e[0*4+2],i[3]=a*e[0*4+3],i[4]=v*e[1*4+0],i[5]=v*e[1*4+1],i[6]=v*e[1*4+2],i[7]=v*e[1*4+3],i[8]=m*e[2*4+0],i[9]=m*e[2*4+1],i[10]=m*e[2*4+2],i[11]=m*e[2*4+3],e!==i&&(i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]),i}function p(e,o){const n=o??new f(16);return n[0]=e,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=e,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=e,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function w(e,o,n){const i=n??new f(16);return i[0]=o*e[0*4+0],i[1]=o*e[0*4+1],i[2]=o*e[0*4+2],i[3]=o*e[0*4+3],i[4]=o*e[1*4+0],i[5]=o*e[1*4+1],i[6]=o*e[1*4+2],i[7]=o*e[1*4+3],i[8]=o*e[2*4+0],i[9]=o*e[2*4+1],i[10]=o*e[2*4+2],i[11]=o*e[2*4+3],e!==i&&(i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]),i}return{create:M,set:B,fromMat3:P,fromQuat:F,negate:b,copy:q,clone:X,equalsApproximately:J,equals:$,identity:H,transpose:te,inverse:N,determinant:Q,invert:U,multiply:ee,mul:Z,setTranslation:K,getTranslation:E,getAxis:W,setAxis:de,getScaling:he,perspective:pe,perspectiveReverseZ:ae,ortho:ve,frustum:re,frustumReverseZ:De,aim:ie,cameraAim:oe,lookAt:se,translation:L,translate:ue,rotationX:j,rotateX:Fe,rotationY:xe,rotateY:be,rotationZ:ge,rotateZ:ce,axisRotation:C,rotation:s,axisRotate:d,rotate:t,scaling:r,scale:l,uniformScaling:p,uniformScale:w}}const tn=new Map;function xn(f){let g=tn.get(f);return g||(g=vn(f),tn.set(f,g)),g}function gn(f){const g=We(f);function M(s,d,t,r){const l=new f(4);return s!==void 0&&(l[0]=s,d!==void 0&&(l[1]=d,t!==void 0&&(l[2]=t,r!==void 0&&(l[3]=r)))),l}const B=M;function P(s,d,t,r,l){const p=l??new f(4);return p[0]=s,p[1]=d,p[2]=t,p[3]=r,p}function F(s,d,t){const r=t??new f(4),l=d*.5,p=Math.sin(l);return r[0]=p*s[0],r[1]=p*s[1],r[2]=p*s[2],r[3]=Math.cos(l),r}function b(s,d){const t=d??g.create(3),r=Math.acos(s[3])*2,l=Math.sin(r*.5);return l>O?(t[0]=s[0]/l,t[1]=s[1]/l,t[2]=s[2]/l):(t[0]=1,t[1]=0,t[2]=0),{angle:r,axis:t}}function q(s,d){const t=re(s,d);return Math.acos(2*t*t-1)}function X(s,d,t){const r=t??new f(4),l=s[0],p=s[1],w=s[2],e=s[3],o=d[0],n=d[1],i=d[2],a=d[3];return r[0]=l*a+e*o+p*i-w*n,r[1]=p*a+e*n+w*o-l*i,r[2]=w*a+e*i+l*n-p*o,r[3]=e*a-l*o-p*n-w*i,r}const J=X;function $(s,d,t){const r=t??new f(4),l=d*.5,p=s[0],w=s[1],e=s[2],o=s[3],n=Math.sin(l),i=Math.cos(l);return r[0]=p*i+o*n,r[1]=w*i+e*n,r[2]=e*i-w*n,r[3]=o*i-p*n,r}function H(s,d,t){const r=t??new f(4),l=d*.5,p=s[0],w=s[1],e=s[2],o=s[3],n=Math.sin(l),i=Math.cos(l);return r[0]=p*i-e*n,r[1]=w*i+o*n,r[2]=e*i+p*n,r[3]=o*i-w*n,r}function te(s,d,t){const r=t??new f(4),l=d*.5,p=s[0],w=s[1],e=s[2],o=s[3],n=Math.sin(l),i=Math.cos(l);return r[0]=p*i+w*n,r[1]=w*i-p*n,r[2]=e*i+o*n,r[3]=o*i-e*n,r}function N(s,d,t,r){const l=r??new f(4),p=s[0],w=s[1],e=s[2],o=s[3];let n=d[0],i=d[1],a=d[2],v=d[3],m=p*n+w*i+e*a+o*v;m<0&&(m=-m,n=-n,i=-i,a=-a,v=-v);let c,u;if(1-m>O){const h=Math.acos(m),x=Math.sin(h);c=Math.sin((1-t)*h)/x,u=Math.sin(t*h)/x}else c=1-t,u=t;return l[0]=c*p+u*n,l[1]=c*w+u*i,l[2]=c*e+u*a,l[3]=c*o+u*v,l}function Q(s,d){const t=d??new f(4),r=s[0],l=s[1],p=s[2],w=s[3],e=r*r+l*l+p*p+w*w,o=e?1/e:0;return t[0]=-r*o,t[1]=-l*o,t[2]=-p*o,t[3]=w*o,t}function U(s,d){const t=d??new f(4);return t[0]=-s[0],t[1]=-s[1],t[2]=-s[2],t[3]=s[3],t}function ee(s,d){const t=d??new f(4),r=s[0]+s[5]+s[10];if(r>0){const l=Math.sqrt(r+1);t[3]=.5*l;const p=.5/l;t[0]=(s[6]-s[9])*p,t[1]=(s[8]-s[2])*p,t[2]=(s[1]-s[4])*p}else{let l=0;s[5]>s[0]&&(l=1),s[10]>s[l*4+l]&&(l=2);const p=(l+1)%3,w=(l+2)%3,e=Math.sqrt(s[l*4+l]-s[p*4+p]-s[w*4+w]+1);t[l]=.5*e;const o=.5/e;t[3]=(s[p*4+w]-s[w*4+p])*o,t[p]=(s[p*4+l]+s[l*4+p])*o,t[w]=(s[w*4+l]+s[l*4+w])*o}return t}function Z(s,d,t,r,l){const p=l??new f(4),w=s*.5,e=d*.5,o=t*.5,n=Math.sin(w),i=Math.cos(w),a=Math.sin(e),v=Math.cos(e),m=Math.sin(o),c=Math.cos(o);switch(r){case"xyz":p[0]=n*v*c+i*a*m,p[1]=i*a*c-n*v*m,p[2]=i*v*m+n*a*c,p[3]=i*v*c-n*a*m;break;case"xzy":p[0]=n*v*c-i*a*m,p[1]=i*a*c-n*v*m,p[2]=i*v*m+n*a*c,p[3]=i*v*c+n*a*m;break;case"yxz":p[0]=n*v*c+i*a*m,p[1]=i*a*c-n*v*m,p[2]=i*v*m-n*a*c,p[3]=i*v*c+n*a*m;break;case"yzx":p[0]=n*v*c+i*a*m,p[1]=i*a*c+n*v*m,p[2]=i*v*m-n*a*c,p[3]=i*v*c-n*a*m;break;case"zxy":p[0]=n*v*c-i*a*m,p[1]=i*a*c+n*v*m,p[2]=i*v*m+n*a*c,p[3]=i*v*c-n*a*m;break;case"zyx":p[0]=n*v*c-i*a*m,p[1]=i*a*c+n*v*m,p[2]=i*v*m-n*a*c,p[3]=i*v*c+n*a*m;break;default:throw new Error(`Unknown rotation order: ${r}`)}return p}function K(s,d){const t=d??new f(4);return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t}const E=K;function W(s,d,t){const r=t??new f(4);return r[0]=s[0]+d[0],r[1]=s[1]+d[1],r[2]=s[2]+d[2],r[3]=s[3]+d[3],r}function de(s,d,t){const r=t??new f(4);return r[0]=s[0]-d[0],r[1]=s[1]-d[1],r[2]=s[2]-d[2],r[3]=s[3]-d[3],r}const he=de;function pe(s,d,t){const r=t??new f(4);return r[0]=s[0]*d,r[1]=s[1]*d,r[2]=s[2]*d,r[3]=s[3]*d,r}const ae=pe;function ve(s,d,t){const r=t??new f(4);return r[0]=s[0]/d,r[1]=s[1]/d,r[2]=s[2]/d,r[3]=s[3]/d,r}function re(s,d){return s[0]*d[0]+s[1]*d[1]+s[2]*d[2]+s[3]*d[3]}function De(s,d,t,r){const l=r??new f(4);return l[0]=s[0]+t*(d[0]-s[0]),l[1]=s[1]+t*(d[1]-s[1]),l[2]=s[2]+t*(d[2]-s[2]),l[3]=s[3]+t*(d[3]-s[3]),l}function I(s){const d=s[0],t=s[1],r=s[2],l=s[3];return Math.sqrt(d*d+t*t+r*r+l*l)}const Y=I;function A(s){const d=s[0],t=s[1],r=s[2],l=s[3];return d*d+t*t+r*r+l*l}const ie=A;function oe(s,d){const t=d??new f(4),r=s[0],l=s[1],p=s[2],w=s[3],e=Math.sqrt(r*r+l*l+p*p+w*w);return e>1e-5?(t[0]=r/e,t[1]=l/e,t[2]=p/e,t[3]=w/e):(t[0]=0,t[1]=0,t[2]=0,t[3]=1),t}function se(s,d){return Math.abs(s[0]-d[0])<O&&Math.abs(s[1]-d[1])<O&&Math.abs(s[2]-d[2])<O&&Math.abs(s[3]-d[3])<O}function L(s,d){return s[0]===d[0]&&s[1]===d[1]&&s[2]===d[2]&&s[3]===d[3]}function ue(s){const d=s??new f(4);return d[0]=0,d[1]=0,d[2]=0,d[3]=1,d}const j=g.create(),Fe=g.create(),xe=g.create();function be(s,d,t){const r=t??new f(4),l=g.dot(s,d);return l<-.999999?(g.cross(Fe,s,j),g.len(j)<1e-6&&g.cross(xe,s,j),g.normalize(j,j),F(j,Math.PI,r),r):l>.999999?(r[0]=0,r[1]=0,r[2]=0,r[3]=1,r):(g.cross(s,d,j),r[0]=j[0],r[1]=j[1],r[2]=j[2],r[3]=1+l,oe(r,r))}const ge=new f(4),ce=new f(4);function C(s,d,t,r,l,p){const w=p??new f(4);return N(s,r,l,ge),N(d,t,l,ce),N(ge,ce,2*l*(1-l),w),w}return{create:M,fromValues:B,set:P,fromAxisAngle:F,toAxisAngle:b,angle:q,multiply:X,mul:J,rotateX:$,rotateY:H,rotateZ:te,slerp:N,inverse:Q,conjugate:U,fromMat:ee,fromEuler:Z,copy:K,clone:E,add:W,subtract:de,sub:he,mulScalar:pe,scale:ae,divScalar:ve,dot:re,lerp:De,length:I,len:Y,lengthSq:A,lenSq:ie,normalize:oe,equalsApproximately:se,equals:L,identity:ue,rotationTo:be,sqlerp:C}}const sn=new Map;function wn(f){let g=sn.get(f);return g||(g=gn(f),sn.set(f,g)),g}function _n(f){function g(t,r,l,p){const w=new f(4);return t!==void 0&&(w[0]=t,r!==void 0&&(w[1]=r,l!==void 0&&(w[2]=l,p!==void 0&&(w[3]=p)))),w}const M=g;function B(t,r,l,p,w){const e=w??new f(4);return e[0]=t,e[1]=r,e[2]=l,e[3]=p,e}function P(t,r){const l=r??new f(4);return l[0]=Math.ceil(t[0]),l[1]=Math.ceil(t[1]),l[2]=Math.ceil(t[2]),l[3]=Math.ceil(t[3]),l}function F(t,r){const l=r??new f(4);return l[0]=Math.floor(t[0]),l[1]=Math.floor(t[1]),l[2]=Math.floor(t[2]),l[3]=Math.floor(t[3]),l}function b(t,r){const l=r??new f(4);return l[0]=Math.round(t[0]),l[1]=Math.round(t[1]),l[2]=Math.round(t[2]),l[3]=Math.round(t[3]),l}function q(t,r=0,l=1,p){const w=p??new f(4);return w[0]=Math.min(l,Math.max(r,t[0])),w[1]=Math.min(l,Math.max(r,t[1])),w[2]=Math.min(l,Math.max(r,t[2])),w[3]=Math.min(l,Math.max(r,t[3])),w}function X(t,r,l){const p=l??new f(4);return p[0]=t[0]+r[0],p[1]=t[1]+r[1],p[2]=t[2]+r[2],p[3]=t[3]+r[3],p}function J(t,r,l,p){const w=p??new f(4);return w[0]=t[0]+r[0]*l,w[1]=t[1]+r[1]*l,w[2]=t[2]+r[2]*l,w[3]=t[3]+r[3]*l,w}function $(t,r,l){const p=l??new f(4);return p[0]=t[0]-r[0],p[1]=t[1]-r[1],p[2]=t[2]-r[2],p[3]=t[3]-r[3],p}const H=$;function te(t,r){return Math.abs(t[0]-r[0])<O&&Math.abs(t[1]-r[1])<O&&Math.abs(t[2]-r[2])<O&&Math.abs(t[3]-r[3])<O}function N(t,r){return t[0]===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}function Q(t,r,l,p){const w=p??new f(4);return w[0]=t[0]+l*(r[0]-t[0]),w[1]=t[1]+l*(r[1]-t[1]),w[2]=t[2]+l*(r[2]-t[2]),w[3]=t[3]+l*(r[3]-t[3]),w}function U(t,r,l,p){const w=p??new f(4);return w[0]=t[0]+l[0]*(r[0]-t[0]),w[1]=t[1]+l[1]*(r[1]-t[1]),w[2]=t[2]+l[2]*(r[2]-t[2]),w[3]=t[3]+l[3]*(r[3]-t[3]),w}function ee(t,r,l){const p=l??new f(4);return p[0]=Math.max(t[0],r[0]),p[1]=Math.max(t[1],r[1]),p[2]=Math.max(t[2],r[2]),p[3]=Math.max(t[3],r[3]),p}function Z(t,r,l){const p=l??new f(4);return p[0]=Math.min(t[0],r[0]),p[1]=Math.min(t[1],r[1]),p[2]=Math.min(t[2],r[2]),p[3]=Math.min(t[3],r[3]),p}function K(t,r,l){const p=l??new f(4);return p[0]=t[0]*r,p[1]=t[1]*r,p[2]=t[2]*r,p[3]=t[3]*r,p}const E=K;function W(t,r,l){const p=l??new f(4);return p[0]=t[0]/r,p[1]=t[1]/r,p[2]=t[2]/r,p[3]=t[3]/r,p}function de(t,r){const l=r??new f(4);return l[0]=1/t[0],l[1]=1/t[1],l[2]=1/t[2],l[3]=1/t[3],l}const he=de;function pe(t,r){return t[0]*r[0]+t[1]*r[1]+t[2]*r[2]+t[3]*r[3]}function ae(t){const r=t[0],l=t[1],p=t[2],w=t[3];return Math.sqrt(r*r+l*l+p*p+w*w)}const ve=ae;function re(t){const r=t[0],l=t[1],p=t[2],w=t[3];return r*r+l*l+p*p+w*w}const De=re;function I(t,r){const l=t[0]-r[0],p=t[1]-r[1],w=t[2]-r[2],e=t[3]-r[3];return Math.sqrt(l*l+p*p+w*w+e*e)}const Y=I;function A(t,r){const l=t[0]-r[0],p=t[1]-r[1],w=t[2]-r[2],e=t[3]-r[3];return l*l+p*p+w*w+e*e}const ie=A;function oe(t,r){const l=r??new f(4),p=t[0],w=t[1],e=t[2],o=t[3],n=Math.sqrt(p*p+w*w+e*e+o*o);return n>1e-5?(l[0]=p/n,l[1]=w/n,l[2]=e/n,l[3]=o/n):(l[0]=0,l[1]=0,l[2]=0,l[3]=0),l}function se(t,r){const l=r??new f(4);return l[0]=-t[0],l[1]=-t[1],l[2]=-t[2],l[3]=-t[3],l}function L(t,r){const l=r??new f(4);return l[0]=t[0],l[1]=t[1],l[2]=t[2],l[3]=t[3],l}const ue=L;function j(t,r,l){const p=l??new f(4);return p[0]=t[0]*r[0],p[1]=t[1]*r[1],p[2]=t[2]*r[2],p[3]=t[3]*r[3],p}const Fe=j;function xe(t,r,l){const p=l??new f(4);return p[0]=t[0]/r[0],p[1]=t[1]/r[1],p[2]=t[2]/r[2],p[3]=t[3]/r[3],p}const be=xe;function ge(t){const r=t??new f(4);return r[0]=0,r[1]=0,r[2]=0,r[3]=0,r}function ce(t,r,l){const p=l??new f(4),w=t[0],e=t[1],o=t[2],n=t[3];return p[0]=r[0]*w+r[4]*e+r[8]*o+r[12]*n,p[1]=r[1]*w+r[5]*e+r[9]*o+r[13]*n,p[2]=r[2]*w+r[6]*e+r[10]*o+r[14]*n,p[3]=r[3]*w+r[7]*e+r[11]*o+r[15]*n,p}function C(t,r,l){const p=l??new f(4);return oe(t,p),K(p,r,p)}function s(t,r,l){const p=l??new f(4);return ae(t)>r?C(t,r,p):L(t,p)}function d(t,r,l){const p=l??new f(4);return Q(t,r,.5,p)}return{create:g,fromValues:M,set:B,ceil:P,floor:F,round:b,clamp:q,add:X,addScaled:J,subtract:$,sub:H,equalsApproximately:te,equals:N,lerp:Q,lerpV:U,max:ee,min:Z,mulScalar:K,scale:E,divScalar:W,inverse:de,invert:he,dot:pe,length:ae,len:ve,lengthSq:re,lenSq:De,distance:I,dist:Y,distanceSq:A,distSq:ie,normalize:oe,negate:se,copy:L,clone:ue,multiply:j,mul:Fe,divide:xe,div:be,zero:ge,transformMat4:ce,setLength:C,truncate:s,midpoint:d}}const rn=new Map;function mn(f){let g=rn.get(f);return g||(g=_n(f),rn.set(f,g)),g}function $e(f,g,M,B,P,F){return{mat3:hn(f),mat4:xn(g),quat:wn(M),vec2:on(B),vec3:We(P),vec4:mn(F)}}const{mat3:En,mat4:Ie,quat:Xn,vec2:Ln,vec3:jn,vec4:Hn}=$e(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);$e(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);$e(ln,Array,Array,Array,Array,Array);const Oe=new ArrayBuffer(272),qe={texel_size:new Float32Array(Oe,0,2),sphere_size:new Float32Array(Oe,8,2),inv_projection_matrix:new Float32Array(Oe,16,16),projection_matrix:new Float32Array(Oe,80,16),view_matrix:new Float32Array(Oe,144,16),inv_view_matrix:new Float32Array(Oe,208,16)},Ne=2e5;class yn{constructor(g){D(this,"isDragging");D(this,"prevX");D(this,"prevY");D(this,"prevHoverX");D(this,"prevHoverY");D(this,"currentHoverX");D(this,"currentHoverY");D(this,"currentXtheta");D(this,"currentYtheta");D(this,"maxYTheta");D(this,"minYTheta");D(this,"sensitivity");D(this,"currentDistance");D(this,"maxDistance");D(this,"minDistance");D(this,"target");D(this,"fov");D(this,"zoomRate");D(this,"canvas");this.canvas=g,this.canvas.addEventListener("mousedown",M=>{this.isDragging=!0,this.prevX=M.clientX,this.prevY=M.clientY}),this.canvas.addEventListener("wheel",M=>{M.preventDefault();var B=M.deltaY;this.currentDistance+=(B>0?1:-1)*this.zoomRate,this.currentDistance<this.minDistance&&(this.currentDistance=this.minDistance),this.currentDistance>this.maxDistance&&(this.currentDistance=this.maxDistance),this.recalculateView()}),this.canvas.addEventListener("mousemove",M=>{if(this.currentHoverX=M.clientX,this.currentHoverY=M.clientY,this.isDragging){const B=this.prevX-M.clientX;this.currentXtheta+=this.sensitivity*B,this.currentYtheta>this.maxYTheta&&(this.currentYtheta=this.maxYTheta),this.currentYtheta<this.minYTheta&&(this.currentYtheta=this.minYTheta),this.prevX=M.clientX,this.prevY=M.clientY,this.recalculateView()}}),this.canvas.addEventListener("mouseup",()=>{this.isDragging&&(this.isDragging=!1)})}reset(g,M,B,P){this.isDragging=!1,this.prevX=0,this.prevY=0,this.currentXtheta=-Math.PI/2*1,this.currentYtheta=0,this.maxYTheta=0,this.minYTheta=-.99*Math.PI/2,this.sensitivity=.005,this.currentDistance=g,this.maxDistance=2*this.currentDistance,this.minDistance=.7*this.currentDistance,this.target=M,this.fov=B,this.zoomRate=P;const F=this.canvas.clientWidth/this.canvas.clientHeight,b=Ie.perspective(B,F,.1,300);qe.projection_matrix.set(b),qe.inv_projection_matrix.set(Ie.inverse(b)),this.recalculateView()}recalculateView(){var g=Ie.identity();Ie.translate(g,this.target,g),Ie.rotateY(g,this.currentXtheta,g),Ie.rotateX(g,this.currentYtheta,g),Ie.translate(g,[0,0,this.currentDistance],g);var M=Ie.multiply(g,[0,0,0,1]);const B=Ie.lookAt([M[0],M[1],M[2]],this.target,[0,1,0]);qe.view_matrix.set(B),qe.inv_view_matrix.set(Ie.inverse(B))}calcMouseVelocity(){if(this.isDragging)return[0,0];let[g,M]=this.calcPlaneCoord(this.currentHoverX,this.currentHoverY),[B,P]=this.calcPlaneCoord(this.prevHoverX,this.prevHoverY),F=g-B,b=M-P,q=[F,b,0,0];return(this.currentHoverX-this.prevHoverX)/this.canvas.width*(this.canvas.width/this.canvas.height),-(this.currentHoverY-this.prevHoverY)/this.canvas.height,q}calcPlaneCoord(g,M){let B=g/this.canvas.width,P=M/this.canvas.height,F=2*B-1,b=(1-P)*2-1,q=[F*Math.tan(this.fov/2)*(this.canvas.width/this.canvas.height),b*Math.tan(this.fov/2),-1];return[q[0]*this.currentDistance,q[1]*this.currentDistance]}setNewPrevMouseCoord(){this.prevHoverX=this.currentHoverX,this.prevHoverY=this.currentHoverY}stepAngle(){this.currentXtheta+=.012,this.recalculateView()}}var zn=`struct Cell {
    vx: i32, 
    vy: i32, 
    vz: i32, 
    mass: i32, 
}

@group(0) @binding(0) var<storage, read_write> cells: array<Cell>;

@compute @workgroup_size(64)
fn clearGrid(@builtin(global_invocation_id) id: vec3<u32>) {
    if (id.x < arrayLength(&cells)) {
        cells[id.x].mass = 0;
        cells[id.x].vx = 0;
        cells[id.x].vy = 0;
        cells[id.x].vz = 0;
    }
}`,Mn=`struct Particle {
    position: vec3f, 
    v: vec3f, 
    C: mat3x3f, 
}

@group(0) @binding(0) var<storage, read_write> particles: array<Particle>;
@group(0) @binding(1) var<uniform> init_box_size: vec3f;
@group(0) @binding(2) var<uniform> numParticles: i32;

@compute @workgroup_size(1)
fn spawn() {
    let dx: f32 = 0.5;
    let center: vec3f = init_box_size / 2;
    let beg: vec3f = vec3f(center.x, 5, 5);
    let base: vec3f = beg + vec3f(4.5 * dx, 4.5 * dx, 0);
    let vScale: f32 = 0.6;

    let dummy = numParticles;

    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            var offset = 10 * i + j;
            let pos = beg + vec3f(f32(i), f32(j), 0) * dx;
            particles[(numParticles - 1) - offset].position = pos;
            let vDir = normalize(center - pos);
            particles[(numParticles - 1) - offset].v = vDir * vScale; 
            particles[(numParticles - 1) - offset].C = mat3x3f(vec3f(0.), vec3f(0.), vec3f(0.));
        }
    }
}`,Pn=`struct Particle {
    position: vec3f, 
    v: vec3f, 
    C: mat3x3f, 
}
struct Cell {
    vx: atomic<i32>, 
    vy: atomic<i32>, 
    vz: atomic<i32>, 
    mass: atomic<i32>, 
}

override fixed_point_multiplier: f32; 

fn encodeFixedPoint(floating_point: f32) -> i32 {
	return i32(floating_point * fixed_point_multiplier);
}

@group(0) @binding(0) var<storage, read> particles: array<Particle>;
@group(0) @binding(1) var<storage, read_write> cells: array<Cell>;
@group(0) @binding(2) var<uniform> init_box_size: vec3f;
@group(0) @binding(3) var<uniform> numParticles: u32;

@compute @workgroup_size(64)
fn p2g_1(@builtin(global_invocation_id) id: vec3<u32>) {
    if (id.x < numParticles) {
        var weights: array<vec3f, 3>;

        let particle = particles[id.x];
        let cell_idx: vec3f = floor(particle.position);
        let cell_diff: vec3f = particle.position - (cell_idx + 0.5f);
        weights[0] = 0.5f * (0.5f - cell_diff) * (0.5f - cell_diff);
        weights[1] = 0.75f - cell_diff * cell_diff;
        weights[2] = 0.5f * (0.5f + cell_diff) * (0.5f + cell_diff);

        let C: mat3x3f = particle.C;

        for (var gx = 0; gx < 3; gx++) {
            for (var gy = 0; gy < 3; gy++) {
                for (var gz = 0; gz < 3; gz++) {
                    let weight: f32 = weights[gx].x * weights[gy].y * weights[gz].z;
                    let cell_x: vec3f = vec3f(
                            cell_idx.x + f32(gx) - 1., 
                            cell_idx.y + f32(gy) - 1.,
                            cell_idx.z + f32(gz) - 1.  
                        );
                    let cell_dist = (cell_x + 0.5f) - particle.position;

                    let Q: vec3f = C * cell_dist;

                    let mass_contrib: f32 = weight * 1.0; 
                    let vel_contrib: vec3f = mass_contrib * (particle.v + Q);
                    let cell_index: i32 = 
                        i32(cell_x.x) * i32(init_box_size.y) * i32(init_box_size.z) + 
                        i32(cell_x.y) * i32(init_box_size.z) + 
                        i32(cell_x.z);
                    atomicAdd(&cells[cell_index].mass, encodeFixedPoint(mass_contrib));
                    atomicAdd(&cells[cell_index].vx, encodeFixedPoint(vel_contrib.x));
                    atomicAdd(&cells[cell_index].vy, encodeFixedPoint(vel_contrib.y));
                    atomicAdd(&cells[cell_index].vz, encodeFixedPoint(vel_contrib.z));
                }
            }
        }
    }
}`,Dn=`struct Particle {
    position: vec3f, 
    v: vec3f, 
    C: mat3x3f, 
}
struct Cell {
    vx: atomic<i32>, 
    vy: atomic<i32>, 
    vz: atomic<i32>, 
    mass: i32, 
}

override fixed_point_multiplier: f32; 
override stiffness: f32;
override rest_density: f32;
override dynamic_viscosity: f32;
override dt: f32;

fn encodeFixedPoint(floating_point: f32) -> i32 {
	return i32(floating_point * fixed_point_multiplier);
}
fn decodeFixedPoint(fixed_point: i32) -> f32 {
	return f32(fixed_point) / fixed_point_multiplier;
}

@group(0) @binding(0) var<storage, read> particles: array<Particle>;
@group(0) @binding(1) var<storage, read_write> cells: array<Cell>;
@group(0) @binding(2) var<uniform> init_box_size: vec3f;
@group(0) @binding(3) var<uniform> numParticles: u32;
@group(0) @binding(4) var<storage, read_write> densities: array<f32>;

@compute @workgroup_size(64)
fn p2g_2(@builtin(global_invocation_id) id: vec3<u32>) {
    if (id.x < numParticles) {
        var weights: array<vec3f, 3>;

        let particle = particles[id.x];
        let cell_idx: vec3f = floor(particle.position);
        let cell_diff: vec3f = particle.position - (cell_idx + 0.5f);
        weights[0] = 0.5f * (0.5f - cell_diff) * (0.5f - cell_diff);
        weights[1] = 0.75f - cell_diff * cell_diff;
        weights[2] = 0.5f * (0.5f + cell_diff) * (0.5f + cell_diff);

        var density: f32 = 0.;
        for (var gx = 0; gx < 3; gx++) {
            for (var gy = 0; gy < 3; gy++) {    
                for (var gz = 0; gz < 3; gz++) {
                    let weight: f32 = weights[gx].x * weights[gy].y * weights[gz].z;
                    let cell_x: vec3f = vec3f(
                            cell_idx.x + f32(gx) - 1., 
                            cell_idx.y + f32(gy) - 1.,
                            cell_idx.z + f32(gz) - 1.  
                        );
                    let cell_index: i32 = 
                        i32(cell_x.x) * i32(init_box_size.y) * i32(init_box_size.z) + 
                        i32(cell_x.y) * i32(init_box_size.z) + 
                        i32(cell_x.z);
                    density += decodeFixedPoint(cells[cell_index].mass) * weight;
                }
            }
        }

        let volume: f32 = 1.0 / density; 
        densities[id.x] = density;

        let pressure: f32 = max(-0.0, stiffness * (pow(density / rest_density, 5.) - 1));

        var stress: mat3x3f = mat3x3f(-pressure, 0, 0, 0, -pressure, 0, 0, 0, -pressure);
        let dudv: mat3x3f = particle.C;
        let strain: mat3x3f = dudv + transpose(dudv);
        stress += dynamic_viscosity * strain;

        let eq_16_term0 = -volume * 4 * stress * dt;

        for (var gx = 0; gx < 3; gx++) {
            for (var gy = 0; gy < 3; gy++) {
                for (var gz = 0; gz < 3; gz++) {
                    let weight: f32 = weights[gx].x * weights[gy].y * weights[gz].z;
                    let cell_x: vec3f = vec3f(
                            cell_idx.x + f32(gx) - 1., 
                            cell_idx.y + f32(gy) - 1.,
                            cell_idx.z + f32(gz) - 1.  
                        );
                    let cell_dist = (cell_x + 0.5f) - particle.position;
                    let cell_index: i32 = 
                        i32(cell_x.x) * i32(init_box_size.y) * i32(init_box_size.z) + 
                        i32(cell_x.y) * i32(init_box_size.z) + 
                        i32(cell_x.z);
                    let momentum: vec3f = eq_16_term0 * weight * cell_dist;
                    atomicAdd(&cells[cell_index].vx, encodeFixedPoint(momentum.x));
                    atomicAdd(&cells[cell_index].vy, encodeFixedPoint(momentum.y));
                    atomicAdd(&cells[cell_index].vz, encodeFixedPoint(momentum.z));
                }
            }
        }
    }
}`,bn=`struct Cell {
    vx: i32, 
    vy: i32, 
    vz: i32, 
    mass: i32, 
}
struct RenderUniforms {
    texel_size: vec2f, 
    sphere_size: f32, 
    inv_projection_matrix: mat4x4f, 
    projection_matrix: mat4x4f, 
    view_matrix: mat4x4f, 
    inv_view_matrix: mat4x4f, 
}
struct MouseInfo {
    screenSize: vec2f, 
    mouseCoord : vec2f, 
    mouseVel : vec2f, 
    mouseRadius: f32, 
}

override fixed_point_multiplier: f32; 
override dt: f32; 

@group(0) @binding(0) var<storage, read_write> cells: array<Cell>;
@group(0) @binding(1) var<uniform> real_box_size: vec3f;
@group(0) @binding(2) var<uniform> init_box_size: vec3f;
@group(0) @binding(3) var<uniform> uniforms: RenderUniforms;
@group(0) @binding(4) var depthTexture: texture_2d<f32>;
@group(0) @binding(5) var<uniform> mouseInfo: MouseInfo; 

fn encodeFixedPoint(floating_point: f32) -> i32 {
	return i32(floating_point * fixed_point_multiplier);
}
fn decodeFixedPoint(fixed_point: i32) -> f32 {
	return f32(fixed_point) / fixed_point_multiplier;
}

fn computeViewPosFromUVDepth(tex_coord: vec2f, depth: f32) -> vec3f {
    var ndc: vec4f = vec4f(tex_coord.x * 2.0 - 1.0, 1.0 - 2.0 * tex_coord.y, 0.0, 1.0);
    ndc.z = -uniforms.projection_matrix[2].z + uniforms.projection_matrix[3].z / depth;
    ndc.w = 1.0;

    var eye_pos: vec4f = uniforms.inv_projection_matrix * ndc;

    return eye_pos.xyz / eye_pos.w;
}

fn getViewPosFromTexCoord(tex_coord: vec2f, iuv: vec2f) -> vec3f {
    var depth: f32 = abs(textureLoad(depthTexture, vec2u(iuv), 0).x);
    return computeViewPosFromUVDepth(tex_coord, depth);
}

@compute @workgroup_size(64)
fn updateGrid(@builtin(global_invocation_id) id: vec3<u32>) {
    if (id.x < arrayLength(&cells)) { 
        let uv: vec2f = mouseInfo.mouseCoord;
        let iuv = uv * mouseInfo.screenSize;
        let depth: f32 = abs(textureLoad(depthTexture, vec2u(iuv), 0).x);
        var mouseCellIndex: u32 = 1000000000; 
        var cellSquareDistToMouse: f32 = 1e9;
        var forceDir = vec3f(0.);
        if (depth < 1e5) {
            let mouseViewPos = getViewPosFromTexCoord(uv, iuv);
            let mouseWorldPos = uniforms.inv_view_matrix * vec4f(mouseViewPos, 1.); 
            let mouseCellPos: vec3i = vec3i(floor(mouseWorldPos).xyz);
            mouseCellIndex =    u32(mouseCellPos.x) * u32(init_box_size.y) * u32(init_box_size.z) + 
                                u32(mouseCellPos.y) * u32(init_box_size.z) + 
                                u32(mouseCellPos.z);
            let center = real_box_size / 2;
            
            
            if (dot(mouseInfo.mouseVel, mouseInfo.mouseVel) > 0.) {
                forceDir = (uniforms.inv_view_matrix * vec4f(mouseInfo.mouseVel, 0.0, 0)).xyz; 
            } else {
                forceDir = vec3f(0.);
            }

            var x: f32 = f32(i32(id.x) / i32(init_box_size.z) / i32(init_box_size.y));
            var y: f32 = f32((i32(id.x) / i32(init_box_size.z)) % i32(init_box_size.y));
            var z: f32 = f32(i32(id.x) % i32(init_box_size.z));
            let cellPos = vec3f(x, y, z);
            let diff = floor(mouseWorldPos).xyz - cellPos;
            cellSquareDistToMouse = dot(diff, diff);
        }

        let dt = dt;
        let r = mouseInfo.mouseRadius;

        if (cells[id.x].mass > 0) { 
            var float_v: vec3f = vec3f(
                decodeFixedPoint(cells[id.x].vx), 
                decodeFixedPoint(cells[id.x].vy), 
                decodeFixedPoint(cells[id.x].vz)
            );
            float_v /= decodeFixedPoint(cells[id.x].mass);
            
            if (cellSquareDistToMouse < r * r) { 
                let strength = (r * r - cellSquareDistToMouse) / (r * r) * 0.15;
                cells[id.x].vx = encodeFixedPoint(float_v.x + strength * forceDir.x); 
                cells[id.x].vy = encodeFixedPoint(float_v.y + strength * forceDir.y); 
                cells[id.x].vz = encodeFixedPoint(float_v.z + strength * forceDir.z); 
            } else {
                cells[id.x].vx = encodeFixedPoint(float_v.x);
                cells[id.x].vy = encodeFixedPoint(float_v.y); 
                cells[id.x].vz = encodeFixedPoint(float_v.z);
            } 

            var x: i32 = i32(id.x) / i32(init_box_size.z) / i32(init_box_size.y);
            var y: i32 = (i32(id.x) / i32(init_box_size.z)) % i32(init_box_size.y);
            var z: i32 = i32(id.x) % i32(init_box_size.z);
            
            if (x < 2 || x > i32(ceil(real_box_size.x) - 3)) { cells[id.x].vx = 0; } 
            if (y < 2 || y > i32(ceil(real_box_size.y) - 3)) { cells[id.x].vy = 0; }
            if (z < 2 || z > i32(ceil(real_box_size.z) - 3)) { cells[id.x].vz = 0; }
        }
    }
}`,Bn=`struct Particle {
    position: vec3f, 
    v: vec3f, 
    C: mat3x3f, 
}
struct Cell {
    vx: i32, 
    vy: i32, 
    vz: i32, 
    mass: i32, 
}

override fixed_point_multiplier: f32; 
override dt: f32; 

@group(0) @binding(0) var<storage, read_write> particles: array<Particle>;
@group(0) @binding(1) var<storage, read> cells: array<Cell>;
@group(0) @binding(2) var<uniform> real_box_size: vec3f;
@group(0) @binding(3) var<uniform> init_box_size: vec3f;
@group(0) @binding(4) var<uniform> numParticles: u32;
@group(0) @binding(5) var<uniform> sphereRadius: f32;

fn decodeFixedPoint(fixed_point: i32) -> f32 {
	return f32(fixed_point) / fixed_point_multiplier;
}

@compute @workgroup_size(64)
fn g2p(@builtin(global_invocation_id) id: vec3<u32>) {
    if (id.x < numParticles) {
        particles[id.x].v = vec3f(0.);
        var weights: array<vec3f, 3>;

        let particle = particles[id.x];
        let cell_idx: vec3f = floor(particle.position);
        let cell_diff: vec3f = particle.position - (cell_idx + 0.5f);
        weights[0] = 0.5f * (0.5f - cell_diff) * (0.5f - cell_diff);
        weights[1] = 0.75f - cell_diff * cell_diff;
        weights[2] = 0.5f * (0.5f + cell_diff) * (0.5f + cell_diff);

        var B: mat3x3f = mat3x3f(vec3f(0.), vec3f(0.), vec3f(0.));
        for (var gx = 0; gx < 3; gx++) {
            for (var gy = 0; gy < 3; gy++) {
                for (var gz = 0; gz < 3; gz++) {
                    let weight: f32 = weights[gx].x * weights[gy].y * weights[gz].z;
                    let cell_x: vec3f = vec3f(
                        cell_idx.x + f32(gx) - 1., 
                        cell_idx.y + f32(gy) - 1.,
                        cell_idx.z + f32(gz) - 1.  
                    );
                    let cell_dist: vec3f = (cell_x + 0.5f) - particle.position;
                    let cell_index: i32 = 
                        i32(cell_x.x) * i32(init_box_size.y) * i32(init_box_size.z) + 
                        i32(cell_x.y) * i32(init_box_size.z) + 
                        i32(cell_x.z);
                    let weighted_velocity: vec3f = vec3f(
                        decodeFixedPoint(cells[cell_index].vx), 
                        decodeFixedPoint(cells[cell_index].vy), 
                        decodeFixedPoint(cells[cell_index].vz)
                    ) * weight;
                    let term: mat3x3f = mat3x3f(
                        weighted_velocity * cell_dist.x, 
                        weighted_velocity * cell_dist.y, 
                        weighted_velocity * cell_dist.z
                    );

                    B += term;

                    particles[id.x].v += weighted_velocity;
                }
            }
        }

        particles[id.x].C = B * 4.0f;
        particles[id.x].position += particles[id.x].v * dt;
        particles[id.x].position = vec3f(
            clamp(particles[id.x].position.x, 1., real_box_size.x - 2.), 
            clamp(particles[id.x].position.y, 1., real_box_size.y - 2.), 
            clamp(particles[id.x].position.z, 1., real_box_size.z - 2.)
        );

        let center = vec3f(real_box_size.x / 2, real_box_size.y / 2, real_box_size.z / 2);
        let dist = center - particles[id.x].position;
        let dirToOrigin = normalize(dist);
        var rForce = vec3f(0);

        
        let r: f32 = sphereRadius; 
        

        if (dot(dist, dist) < r * r) {
            particles[id.x].v += -(r - sqrt(dot(dist, dist))) * dirToOrigin * 3.0;
        }

        particles[id.x].v += dirToOrigin * 0.1;

        
        let k = 3.0;
        let wall_stiffness = 1.0;
        let x_n: vec3f = particles[id.x].position + particles[id.x].v * dt * k;
        let wall_min: vec3f = vec3f(3.);
        let wall_max: vec3f = real_box_size - 4.;
        if (x_n.x < wall_min.x) { particles[id.x].v.x += wall_stiffness * (wall_min.x - x_n.x); }
        if (x_n.x > wall_max.x) { particles[id.x].v.x += wall_stiffness * (wall_max.x - x_n.x); }
        if (x_n.y < wall_min.y) { particles[id.x].v.y += wall_stiffness * (wall_min.y - x_n.y); }
        if (x_n.y > wall_max.y) { particles[id.x].v.y += wall_stiffness * (wall_max.y - x_n.y); }
        if (x_n.z < wall_min.z) { particles[id.x].v.z += wall_stiffness * (wall_min.z - x_n.z); }
        if (x_n.z > wall_max.z) { particles[id.x].v.z += wall_stiffness * (wall_max.z - x_n.z); }
    }
}`,Sn=`struct Particle {
    position: vec3f, 
    v: vec3f, 
    C: mat3x3f, 
}

struct PosVel {
    position: vec3f, 
    v: vec3f, 
    density: f32, 
}

@group(0) @binding(0) var<storage, read> particles: array<Particle>;
@group(0) @binding(1) var<storage, read_write> posvel: array<PosVel>;
@group(0) @binding(2) var<uniform> numParticles: u32;
@group(0) @binding(3) var<storage, read> densities: array<f32>;

@compute @workgroup_size(64)
fn copyPosition(@builtin(global_invocation_id) id: vec3<u32>) {
    if (id.x < numParticles) { 
        posvel[id.x].position = particles[id.x].position;
        posvel[id.x].v = particles[id.x].v;
        posvel[id.x].density = densities[id.x];
    }
}`;const He=80;class Vn{constructor(g,M,B,P,F,b,q){D(this,"max_x_grids",80);D(this,"max_y_grids",80);D(this,"max_z_grids",80);D(this,"cellStructSize",16);D(this,"realBoxSizeBuffer");D(this,"initBoxSizeBuffer");D(this,"numParticlesBuffer");D(this,"densityBuffer");D(this,"mouseInfoUniformBuffer");D(this,"sphereRadiusBuffer");D(this,"numParticles",0);D(this,"gridCount",0);D(this,"clearGridPipeline");D(this,"spawnParticlesPipeline");D(this,"p2g1Pipeline");D(this,"p2g2Pipeline");D(this,"updateGridPipeline");D(this,"g2pPipeline");D(this,"copyPositionPipeline");D(this,"clearGridBindGroup");D(this,"spawnParticlesBindGroup");D(this,"p2g1BindGroup");D(this,"p2g2BindGroup");D(this,"updateGridBindGroup");D(this,"g2pBindGroup");D(this,"copyPositionBindGroup");D(this,"particleBuffer");D(this,"device");D(this,"renderDiameter");D(this,"frameCount");D(this,"spawned");D(this,"mouseInfoValues");D(this,"restDensity");this.device=P,this.renderDiameter=B,this.frameCount=0,this.spawned=!1,this.numParticles=0;const X=P.createShaderModule({code:zn}),J=P.createShaderModule({code:Mn}),$=P.createShaderModule({code:Pn}),H=P.createShaderModule({code:Dn}),te=P.createShaderModule({code:bn}),N=P.createShaderModule({code:Bn}),Q=P.createShaderModule({code:Sn});this.restDensity=4;const U={stiffness:3,restDensity:this.restDensity,dynamic_viscosity:.1,dt:.2,fixed_point_multiplier:1e7};this.clearGridPipeline=P.createComputePipeline({label:"clear grid pipeline",layout:"auto",compute:{module:X}}),this.spawnParticlesPipeline=P.createComputePipeline({label:"spawn particles pipeline",layout:"auto",compute:{module:J}}),this.p2g1Pipeline=P.createComputePipeline({label:"p2g 1 pipeline",layout:"auto",compute:{module:$,constants:{fixed_point_multiplier:U.fixed_point_multiplier}}}),this.p2g2Pipeline=P.createComputePipeline({label:"p2g 2 pipeline",layout:"auto",compute:{module:H,constants:{fixed_point_multiplier:U.fixed_point_multiplier,stiffness:U.stiffness,rest_density:U.restDensity,dynamic_viscosity:U.dynamic_viscosity,dt:U.dt}}}),this.updateGridPipeline=P.createComputePipeline({label:"update grid pipeline",layout:"auto",compute:{module:te,constants:{fixed_point_multiplier:U.fixed_point_multiplier,dt:U.dt}}}),this.g2pPipeline=P.createComputePipeline({label:"g2p pipeline",layout:"auto",compute:{module:N,constants:{fixed_point_multiplier:U.fixed_point_multiplier,dt:U.dt}}}),this.copyPositionPipeline=P.createComputePipeline({label:"copy position pipeline",layout:"auto",compute:{module:Q}});const ee=this.max_x_grids*this.max_y_grids*this.max_z_grids,Z=new ArrayBuffer(12),K=new ArrayBuffer(12),E=new ArrayBuffer(4);this.mouseInfoValues=new ArrayBuffer(32);const W=P.createBuffer({label:"cells buffer",size:this.cellStructSize*ee,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});this.densityBuffer=P.createBuffer({label:"density buffer",size:4*Ne,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.realBoxSizeBuffer=P.createBuffer({label:"real box size buffer",size:Z.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.initBoxSizeBuffer=P.createBuffer({label:"init box size buffer",size:K.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.numParticlesBuffer=P.createBuffer({label:"number of particles buffer",size:E.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.mouseInfoUniformBuffer=P.createBuffer({label:"mouse info buffer",size:this.mouseInfoValues.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.sphereRadiusBuffer=P.createBuffer({label:"sphere radius buffer",size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),{screenSize:new Float32Array(this.mouseInfoValues,0,2),mouseCoord:new Float32Array(this.mouseInfoValues,8,2),mouseVel:new Float32Array(this.mouseInfoValues,16,2),mouseRadius:new Float32Array(this.mouseInfoValues,24,1)}.screenSize.set([q.width,q.height]),this.device.queue.writeBuffer(this.mouseInfoUniformBuffer,0,this.mouseInfoValues),this.clearGridBindGroup=P.createBindGroup({layout:this.clearGridPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:W}}]}),this.spawnParticlesBindGroup=P.createBindGroup({layout:this.spawnParticlesPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:g}},{binding:1,resource:{buffer:this.initBoxSizeBuffer}},{binding:2,resource:{buffer:this.numParticlesBuffer}}]}),this.p2g1BindGroup=P.createBindGroup({layout:this.p2g1Pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:g}},{binding:1,resource:{buffer:W}},{binding:2,resource:{buffer:this.initBoxSizeBuffer}},{binding:3,resource:{buffer:this.numParticlesBuffer}}]}),this.p2g2BindGroup=P.createBindGroup({layout:this.p2g2Pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:g}},{binding:1,resource:{buffer:W}},{binding:2,resource:{buffer:this.initBoxSizeBuffer}},{binding:3,resource:{buffer:this.numParticlesBuffer}},{binding:4,resource:{buffer:this.densityBuffer}}]}),this.updateGridBindGroup=P.createBindGroup({layout:this.updateGridPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:W}},{binding:1,resource:{buffer:this.realBoxSizeBuffer}},{binding:2,resource:{buffer:this.initBoxSizeBuffer}},{binding:3,resource:{buffer:F}},{binding:4,resource:b},{binding:5,resource:{buffer:this.mouseInfoUniformBuffer}}]}),this.g2pBindGroup=P.createBindGroup({layout:this.g2pPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:g}},{binding:1,resource:{buffer:W}},{binding:2,resource:{buffer:this.realBoxSizeBuffer}},{binding:3,resource:{buffer:this.initBoxSizeBuffer}},{binding:4,resource:{buffer:this.numParticlesBuffer}},{binding:5,resource:{buffer:this.sphereRadiusBuffer}}]}),this.copyPositionBindGroup=P.createBindGroup({layout:this.copyPositionPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:g}},{binding:1,resource:{buffer:M}},{binding:2,resource:{buffer:this.numParticlesBuffer}},{binding:3,resource:{buffer:this.densityBuffer}}]}),this.particleBuffer=g}initDambreak(g,M){let B=new ArrayBuffer(He*Ne);const P=.55;this.numParticles=0;for(let X=3;X<g[1]*.8&&this.numParticles<M;X+=P)for(let J=3;J<g[0]-4&&this.numParticles<M;J+=P)for(let $=3;$<g[2]/2&&this.numParticles<M;$+=P){const H=He*this.numParticles,te={position:new Float32Array(B,H+0,3),v:new Float32Array(B,H+16,3),C:new Float32Array(B,H+32,12)},N=2*Math.random();te.position.set([J+N,X+N,$+N]),this.numParticles++}let F=new ArrayBuffer(He*this.numParticles);const b=new Uint8Array(B),q=new Uint8Array(F);return q.set(b.subarray(0,q.length)),F}reset(g,M){qe.sphere_size.set([this.renderDiameter]);const B=this.max_x_grids*this.max_y_grids*this.max_z_grids;if(this.gridCount=Math.ceil(g[0])*Math.ceil(g[1])*Math.ceil(g[2]),this.gridCount>B)throw new Error("gridCount should be equal to or less than maxGridCount");const P=new ArrayBuffer(12);new Float32Array(P).set(g);const b=new ArrayBuffer(4);new Float32Array(b).set([M]),this.device.queue.writeBuffer(this.initBoxSizeBuffer,0,P),this.device.queue.writeBuffer(this.sphereRadiusBuffer,0,b),this.frameCount=0,this.changeBoxSize(g),this.changeNumParticles(0)}execute(g,M,B,P,F){const b=g.beginComputePass(),q={screenSize:new Float32Array(this.mouseInfoValues,0,2),mouseCoord:new Float32Array(this.mouseInfoValues,8,2),mouseVel:new Float32Array(this.mouseInfoValues,16,2),mouseRadius:new Float32Array(this.mouseInfoValues,24,2)};q.mouseCoord.set([M[0],M[1]]),q.mouseVel.set([B[0],B[1]]),q.mouseRadius.set([F]),this.device.queue.writeBuffer(this.mouseInfoUniformBuffer,0,this.mouseInfoValues),this.frameCount%2==0&&this.numParticles<P&&(console.log("spawn"),b.setBindGroup(0,this.spawnParticlesBindGroup),b.setPipeline(this.spawnParticlesPipeline),b.dispatchWorkgroups(1),this.changeNumParticles(this.numParticles+100));for(let X=0;X<2;X++)b.setBindGroup(0,this.clearGridBindGroup),b.setPipeline(this.clearGridPipeline),b.dispatchWorkgroups(Math.ceil(this.gridCount/64)),b.setBindGroup(0,this.p2g1BindGroup),b.setPipeline(this.p2g1Pipeline),b.dispatchWorkgroups(Math.ceil(this.numParticles/64)),b.setBindGroup(0,this.p2g2BindGroup),b.setPipeline(this.p2g2Pipeline),b.dispatchWorkgroups(Math.ceil(this.numParticles/64)),b.setBindGroup(0,this.updateGridBindGroup),b.setPipeline(this.updateGridPipeline),b.dispatchWorkgroups(Math.ceil(this.gridCount/64)),b.setBindGroup(0,this.g2pBindGroup),b.setPipeline(this.g2pPipeline),b.dispatchWorkgroups(Math.ceil(this.numParticles/64)),b.setBindGroup(0,this.copyPositionBindGroup),b.setPipeline(this.copyPositionPipeline),b.dispatchWorkgroups(Math.ceil(this.numParticles/64)),b.setBindGroup(0,this.copyPositionBindGroup),b.setPipeline(this.copyPositionPipeline),b.dispatchWorkgroups(Math.ceil(this.numParticles/64));b.end(),this.frameCount++}changeBoxSize(g){const M=new ArrayBuffer(12),B=new Float32Array(M);B.set(g),this.device.queue.writeBuffer(this.realBoxSizeBuffer,0,B)}changeNumParticles(g){const M=new ArrayBuffer(4),B=new Int32Array(M);B.set([g]),this.device.queue.writeBuffer(this.numParticlesBuffer,0,B),this.numParticles=g}}var Gn=`struct VertexOutput {
    @builtin(position) position: vec4f, 
    @location(0) uv: vec2f, 
    @location(1) view_position: vec3f, 
}

struct FragmentInput {
    @location(0) uv: vec2f, 
    @location(1) view_position: vec3f, 
}

struct FragmentOutput {
    @location(0) frag_color: vec4f, 
    @builtin(frag_depth) frag_depth: f32, 
}

struct RenderUniforms {
    texel_size: vec2f, 
    sphere_size: f32, 
    inv_projection_matrix: mat4x4f, 
    projection_matrix: mat4x4f, 
    view_matrix: mat4x4f, 
    inv_view_matrix: mat4x4f, 
}

struct PosVel {
    position: vec3f, 
    v: vec3f, 
    density: f32, 
}

@group(0) @binding(0) var<storage> particles: array<PosVel>;
@group(0) @binding(1) var<uniform> uniforms: RenderUniforms;
@group(0) @binding(2) var<uniform> stretchStrength: f32;

override restDensity: f32;
override densitySizeScale: f32;

fn computeStretchedVertex(position: vec2f, velocity_dir: vec2f, strength: f32) -> vec2f {
    
    let stretch_offset: vec2f = dot(velocity_dir, position) * velocity_dir;
    return position + stretch_offset * strength;
}

fn area(v1: vec2f, v2: vec2f, v3: vec2f, v4: vec2f) -> f32 {
    let ab = v2 - v1;
    let ad = v4 - v1;
    let s = abs(ab.x * ad.y - ab.y * ad.x);
    return s;
}

fn scaleQuad(vel: vec2f, r: f32, strength: f32) -> f32 {
    let s1: f32 = r * r;
    let v1 = computeStretchedVertex(vec2f(0.5 * r, 0.5 * r), vel, strength);
    let v2 = computeStretchedVertex(vec2f(-0.5 * r, 0.5 * r), vel, strength);
    let v3 = computeStretchedVertex(vec2f(-0.5 * r, -0.5 * r), vel, strength);
    let v4 = computeStretchedVertex(vec2f(0.5 * r, -0.5 * r), vel, strength);
    let s2: f32 = area(v1, v2, v3, v4);
    return sqrt(s1 / s2);
}

@vertex
fn vs(    
    @builtin(vertex_index) vertex_index: u32, 
    @builtin(instance_index) instance_index: u32
) -> VertexOutput {
    var corner_positions = array(
        vec2( 0.5,  0.5),
        vec2( 0.5, -0.5),
        vec2(-0.5, -0.5),
        vec2( 0.5,  0.5),
        vec2(-0.5, -0.5),
        vec2(-0.5,  0.5),
    );

    let size = uniforms.sphere_size * clamp(particles[instance_index].density / restDensity * densitySizeScale, 0.0, 1.0);
    let projected_velocity = (uniforms.view_matrix * vec4f(particles[instance_index].v, 0.0)).xy;
    let stretched_position = computeStretchedVertex(corner_positions[vertex_index] * size, projected_velocity, stretchStrength);
    let corner = vec3(stretched_position, 0.0) * scaleQuad(projected_velocity, size, stretchStrength);

    let uv = corner_positions[vertex_index] + 0.5;

    let real_position = particles[instance_index].position;
    let view_position = (uniforms.view_matrix * vec4f(real_position, 1.0)).xyz;

    let out_position = uniforms.projection_matrix * vec4f(view_position + corner, 1.0);

    return VertexOutput(out_position, uv, view_position);
}

@fragment
fn fs(input: FragmentInput) -> FragmentOutput {
    var out: FragmentOutput;

    var normalxy: vec2f = input.uv * 2.0 - 1.0;
    var r2: f32 = dot(normalxy, normalxy);
    if (r2 > 1.0) {
        discard;
    }
    var normalz = sqrt(1.0 - r2);
    var normal = vec3(normalxy, normalz);

    var radius = uniforms.sphere_size / 2;
    var real_view_pos: vec4f = vec4f(input.view_position + normal * radius, 1.0);
    var clip_space_pos: vec4f = uniforms.projection_matrix * real_view_pos;
    out.frag_depth = clip_space_pos.z / clip_space_pos.w;

    out.frag_color = vec4(real_view_pos.z, 0., 0., 1.);
    return out;
}`,Fn=`@group(0) @binding(1) var texture: texture_2d<f32>;
@group(0) @binding(2) var<uniform> uniforms: FilterUniforms;

struct FragmentInput {
    @location(0) uv: vec2f,  
    @location(1) iuv: vec2f
}

override depth_threshold: f32;  
override projected_particle_constant: f32; 
override max_filter_size: f32;

struct FilterUniforms {
    blur_dir: vec2f,
}

@fragment
fn fs(input: FragmentInput) -> @location(0) vec4f {
    var depth: f32 = abs(textureLoad(texture, vec2u(input.iuv), 0).r);

    if (depth >= 1e4) {
        return vec4f(vec3f(depth), 1.);
    }

    var filter_size: i32 = min(i32(max_filter_size), i32(ceil(projected_particle_constant / depth)));

    var sigma: f32 = f32(filter_size) / 3.0; 
    var two_sigma: f32 = 2.0 * sigma * sigma;
    var sigma_depth: f32 = depth_threshold / 3.0;
    var two_sigma_depth: f32 = 2.0 * sigma_depth * sigma_depth;

    var sum: f32 = 0.0;
    var wsum: f32 = 0.0;
    for (var x: i32 = -filter_size; x <= filter_size; x++) {
        var coords: vec2f = vec2f(f32(x));
        var sampled_depth: f32 = abs(textureLoad(texture, vec2u(input.iuv + coords * uniforms.blur_dir), 0).r);

        var rr: f32 = dot(coords, coords);
        var w: f32 = exp(-rr / two_sigma);

        var r_depth: f32 = sampled_depth - depth;
        var wd: f32 = exp(-r_depth * r_depth / two_sigma_depth);
        sum += sampled_depth * w * wd;
        wsum += w * wd;
    }

    sum /= wsum;

    return vec4f(sum, 0., 0., 1.);
}`,Tn=`@group(0) @binding(0) var texture_sampler: sampler;
@group(0) @binding(1) var texture: texture_2d<f32>;
@group(0) @binding(2) var<uniform> uniforms: RenderUniforms;
@group(0) @binding(3) var thickness_texture: texture_2d<f32>;
@group(0) @binding(4) var envmap_texture: texture_cube<f32>;

struct RenderUniforms {
    texel_size: vec2f, 
    sphere_size: f32, 
    inv_projection_matrix: mat4x4f, 
    projection_matrix: mat4x4f, 
    view_matrix: mat4x4f, 
    inv_view_matrix: mat4x4f, 
}

struct FragmentInput {
    @location(0) uv: vec2f, 
    @location(1) iuv: vec2f, 
}

fn computeViewPosFromUVDepth(tex_coord: vec2f, depth: f32) -> vec3f {
    var ndc: vec4f = vec4f(tex_coord.x * 2.0 - 1.0, 1.0 - 2.0 * tex_coord.y, 0.0, 1.0);
    
    ndc.z = -uniforms.projection_matrix[2].z + uniforms.projection_matrix[3].z / depth;
    ndc.w = 1.0;

    var eye_pos: vec4f = uniforms.inv_projection_matrix * ndc;

    return eye_pos.xyz / eye_pos.w;
}

fn getViewPosFromTexCoord(tex_coord: vec2f, iuv: vec2f) -> vec3f {
    var depth: f32 = abs(textureLoad(texture, vec2u(iuv), 0).x);
    return computeViewPosFromUVDepth(tex_coord, depth);
}

@fragment
fn fs(input: FragmentInput) -> @location(0) vec4f {
    var depth: f32 = abs(textureLoad(texture, vec2u(input.iuv), 0).r);

    let bgColor: vec3f = vec3f(0.7, 0.7, 0.75);

    if (depth >= 1e4) {
        return vec4f(bgColor, 1.);
    }

    var viewPos: vec3f = computeViewPosFromUVDepth(input.uv, depth); 

    var ddx: vec3f = getViewPosFromTexCoord(input.uv + vec2f(uniforms.texel_size.x, 0.), input.iuv + vec2f(1.0, 0.0)) - viewPos; 
    var ddy: vec3f = getViewPosFromTexCoord(input.uv + vec2f(0., uniforms.texel_size.y), input.iuv + vec2f(0.0, 1.0)) - viewPos; 
    var ddx2: vec3f = viewPos - getViewPosFromTexCoord(input.uv + vec2f(-uniforms.texel_size.x, 0.), input.iuv + vec2f(-1.0, 0.0));
    var ddy2: vec3f = viewPos - getViewPosFromTexCoord(input.uv + vec2f(0., -uniforms.texel_size.y), input.iuv + vec2f(0.0, -1.0));

    if (abs(ddx.z) > abs(ddx2.z)) {
        ddx = ddx2; 
    }
    if (abs(ddy.z) > abs(ddy2.z)) {
        ddy = ddy2;
    }

    var normal: vec3f = -normalize(cross(ddx, ddy)); 
    var rayDir = normalize(viewPos);
    var lightDir = normalize((uniforms.view_matrix * vec4f(-1, 1, -1, 0.)).xyz);
    var H: vec3f        = normalize(lightDir - rayDir);
    var specular: f32   = pow(max(0.0, dot(H, normal)), 250.);
    var diffuse: f32  = max(0.0, dot(lightDir, normal)) * 1.0;

    var density = 0.7; 
    
    var thickness = textureLoad(thickness_texture, vec2u(input.iuv), 0).r;

    
    var diffuseColor = vec3f(0.0, 0.7375, 0.95);
    var transmittance: vec3f = exp(-density * thickness * (1.0 - diffuseColor)); 
    var refractionColor: vec3f = bgColor * transmittance;

    let F0 = 0.02;
    var fresnel: f32 = clamp(F0 + (1.0 - F0) * pow(1.0 - dot(normal, -rayDir), 5.0) + 0.03, 0., 1.);

    var reflectionDir: vec3f = reflect(rayDir, normal);
    var reflectionDirWorld: vec3f = (uniforms.inv_view_matrix * vec4f(reflectionDir, 0.0)).xyz;
    var reflectionColor: vec3f = textureSampleLevel(envmap_texture, texture_sampler, reflectionDirWorld, 0.).rgb; 
    var finalColor = 0.0 * specular + mix(refractionColor, reflectionColor, fresnel);

    let maxDeltaZ = max(max(abs(ddx.z), abs(ddy.z)), max(abs(ddx2.z), abs(ddy2.z)));
    if (maxDeltaZ > 1.5 * uniforms.sphere_size) {
        return vec4f(mix(finalColor, vec3f(0.9), 0.4), 1.0);
    }

    return vec4f(finalColor, 1.0);

    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}`,An=`struct VertexOutput {
  @builtin(position) position : vec4f,
  @location(0) uv : vec2f,
  @location(1) iuv : vec2f,
}

override screenWidth: f32;
override screenHeight: f32;

@vertex
fn vs(@builtin(vertex_index) vertex_index : u32) -> VertexOutput {
    var out: VertexOutput;

    var pos = array(
        vec2( 1.0,  1.0),
        vec2( 1.0, -1.0),
        vec2(-1.0, -1.0),
        vec2( 1.0,  1.0),
        vec2(-1.0, -1.0),
        vec2(-1.0,  1.0),
    );

    var uv = array(
        vec2(1.0, 0.0),
        vec2(1.0, 1.0),
        vec2(0.0, 1.0),
        vec2(1.0, 0.0),
        vec2(0.0, 1.0),
        vec2(0.0, 0.0),
    );

    out.position = vec4(pos[vertex_index], 0.0, 1.0);
    out.uv = uv[vertex_index];
    out.iuv = out.uv * vec2f(screenWidth, screenHeight);

    return out;
}`,Un=`struct RenderUniforms {
    texel_size: vec2f, 
    sphere_size: f32, 
    inv_projection_matrix: mat4x4f, 
    projection_matrix: mat4x4f, 
    view_matrix: mat4x4f, 
    inv_view_matrix: mat4x4f, 
}

struct VertexOutput {
    @builtin(position) position: vec4f, 
    @location(0) uv: vec2f, 
}

struct FragmentInput {
    @location(0) uv: vec2f, 
}

struct PosVel {
    position: vec3f, 
    v: vec3f, 
    density: f32, 
}

@group(0) @binding(0) var<storage> particles: array<PosVel>;
@group(0) @binding(1) var<uniform> uniforms: RenderUniforms;
@group(0) @binding(2) var<uniform> stretchStrength: f32;

override restDensity: f32;
override densitySizeScale: f32;

fn computeStretchedVertex(position: vec2f, velocity_dir: vec2f, strength: f32) -> vec2f {
    
    let stretch_offset: vec2f = dot(velocity_dir, position) * velocity_dir;
    return position + stretch_offset * strength;
}

fn area(v1: vec2f, v2: vec2f, v3: vec2f, v4: vec2f) -> f32 {
    let ab = v2 - v1;
    let ad = v4 - v1;
    let s = abs(ab.x * ad.y - ab.y * ad.x);
    return s;
}

fn scaleQuad(vel: vec2f, r: f32, strength: f32) -> f32 {
    let s1: f32 = r * r;
    let v1 = computeStretchedVertex(vec2f(0.5 * r, 0.5 * r), vel, strength);
    let v2 = computeStretchedVertex(vec2f(-0.5 * r, 0.5 * r), vel, strength);
    let v3 = computeStretchedVertex(vec2f(-0.5 * r, -0.5 * r), vel, strength);
    let v4 = computeStretchedVertex(vec2f(0.5 * r, -0.5 * r), vel, strength);
    let s2: f32 = area(v1, v2, v3, v4);
    return sqrt(s1 / s2);
}

@vertex
fn vs(    
    @builtin(vertex_index) vertex_index: u32, 
    @builtin(instance_index) instance_index: u32
) -> VertexOutput {
    var corner_positions = array(
        vec2( 0.5,  0.5),
        vec2( 0.5, -0.5),
        vec2(-0.5, -0.5),
        vec2( 0.5,  0.5),
        vec2(-0.5, -0.5),
        vec2(-0.5,  0.5),
    );

    let size = uniforms.sphere_size * clamp(particles[instance_index].density / restDensity * densitySizeScale, 0.0, 1.0);
    let projected_velocity = (uniforms.view_matrix * vec4f(particles[instance_index].v, 0.0)).xy;
    let stretched_position = computeStretchedVertex(corner_positions[vertex_index] * size, projected_velocity, stretchStrength);
    let corner = vec3(stretched_position, 0.0) * scaleQuad(projected_velocity, size, stretchStrength);

    let uv = corner_positions[vertex_index] + 0.5;

    let real_position = particles[instance_index].position;
    let view_position = (uniforms.view_matrix * vec4f(real_position, 1.0)).xyz;

    let out_position = uniforms.projection_matrix * vec4f(view_position + corner, 1.0);

    return VertexOutput(out_position, uv);
}

@fragment
fn fs(input: FragmentInput) -> @location(0) vec4f {
    var normalxy: vec2f = input.uv * 2.0 - 1.0;
    var r2: f32 = dot(normalxy, normalxy);
    if (r2 > 1.0) {
        discard;
    }
    var thickness: f32 = sqrt(1.0 - r2);
    let particle_alpha = 0.05;

    return vec4f(vec3f(particle_alpha * thickness), 1.0);
}`,In=`@group(0) @binding(1) var texture: texture_2d<f32>;
@group(0) @binding(2) var<uniform> uniforms: FilterUniforms;

struct FragmentInput {
    @location(0) uv: vec2f,  
    @location(1) iuv: vec2f
}

struct FilterUniforms {
    blur_dir: vec2f, 
}

@fragment
fn fs(input: FragmentInput) -> @location(0) vec4f {
    
    var thickness: f32 = textureLoad(texture, vec2u(input.iuv), 0).r;
    if (thickness == 0.) {
        return vec4f(0., 0., 0., 1.);
    }

    var filter_size: i32 = 30; 
    var sigma: f32 = f32(filter_size) / 3.0;
    var two_sigma: f32 = 2.0 * sigma * sigma;

    var sum = 0.;
    var wsum = 0.;

    for (var x: i32 = -filter_size; x <= filter_size; x++) {
        var coords: vec2f = vec2f(f32(x));
        var sampled_thickness: f32 = textureLoad(texture, vec2u(input.iuv + uniforms.blur_dir * coords), 0).r;

        var w: f32 = exp(-coords.x * coords.x / two_sigma);

        sum += sampled_thickness * w;
        wsum += w;
    }

    sum /= wsum;

    return vec4f(sum, 0., 0., 1.);
}`,On=`struct VertexOutput {
    @builtin(position) position: vec4f, 
    @location(0) uv: vec2f, 
    @location(1) view_position: vec3f, 
    @location(2) speed: f32, 
}

struct FragmentInput {
    @location(0) uv: vec2f, 
    @location(1) view_position: vec3f, 
    @location(2) speed: f32, 
}

struct FragmentOutput {
    @location(0) color: vec4f, 
    @location(1) depth: vec4f, 
    @builtin(frag_depth) frag_depth: f32, 
}

struct RenderUniforms {
    texel_size: vec2f, 
    sphere_size: f32, 
    inv_projection_matrix: mat4x4f, 
    projection_matrix: mat4x4f, 
    view_matrix: mat4x4f, 
    inv_view_matrix: mat4x4f, 
}

struct PosVel {
    position: vec3f, 
    v: vec3f, 
    density: f32, 
}

@group(0) @binding(0) var<storage> particles: array<PosVel>;
@group(0) @binding(1) var<uniform> uniforms: RenderUniforms;
@group(0) @binding(2) var<uniform> stretchStrength: f32;

override restDensity: f32;
override densitySizeScale: f32;

fn computeStretchedVertex(position: vec2f, velocity_dir: vec2f, strength: f32) -> vec2f {
    
    let stretch_offset: vec2f = dot(velocity_dir, position) * velocity_dir;
    return position + stretch_offset * strength;
}

fn area(v1: vec2f, v2: vec2f, v3: vec2f, v4: vec2f) -> f32 {
    let ab = v2 - v1;
    let ad = v4 - v1;
    let s = abs(ab.x * ad.y - ab.y * ad.x);
    return s;
}

fn scaleQuad(vel: vec2f, r: f32, strength: f32) -> f32 {
    let s1: f32 = r * r;
    let v1 = computeStretchedVertex(vec2f(0.5 * r, 0.5 * r), vel, strength);
    let v2 = computeStretchedVertex(vec2f(-0.5 * r, 0.5 * r), vel, strength);
    let v3 = computeStretchedVertex(vec2f(-0.5 * r, -0.5 * r), vel, strength);
    let v4 = computeStretchedVertex(vec2f(0.5 * r, -0.5 * r), vel, strength);
    let s2: f32 = area(v1, v2, v3, v4);
    return sqrt(s1 / s2);
}

@vertex
fn vs(    
    @builtin(vertex_index) vertex_index: u32, 
    @builtin(instance_index) instance_index: u32
) -> VertexOutput {
    var corner_positions = array(
        vec2( 0.5,  0.5),
        vec2( 0.5, -0.5),
        vec2(-0.5, -0.5),
        vec2( 0.5,  0.5),
        vec2(-0.5, -0.5),
        vec2(-0.5,  0.5),
    );

    let size = uniforms.sphere_size * clamp(particles[instance_index].density / restDensity * densitySizeScale, 0.0, 1.0);
    let projected_velocity = (uniforms.view_matrix * vec4f(particles[instance_index].v, 0.0)).xy;
    let stretched_position = computeStretchedVertex(corner_positions[vertex_index] * size, projected_velocity, stretchStrength);
    let corner = vec3(stretched_position, 0.0) * scaleQuad(projected_velocity, size, stretchStrength);

    let speed = sqrt(dot(particles[instance_index].v, particles[instance_index].v));

    let uv = corner_positions[vertex_index] + 0.5;

    let real_position = particles[instance_index].position;
    let view_position = (uniforms.view_matrix * vec4f(real_position, 1.0)).xyz;

    let out_position = uniforms.projection_matrix * vec4f(view_position + corner, 1.0);

    return VertexOutput(out_position, uv, view_position, speed);
}

fn value_to_color(value: f32) -> vec3<f32> {
    
    let col0 = vec3f(0, 0.4, 0.8);
    let col1 = vec3f(35, 161, 165) / 256;
    let col2 = vec3f(95, 254, 150) / 256;
    let col3 = vec3f(243, 250, 49) / 256;
    let col4 = vec3f(255, 165, 0) / 256;

    if (0 <= value && value < 0.25) {
        let t = value / 0.25;
        return mix(col0, col1, t);
    } else if (0.25 <= value && value < 0.50) {
        let t = (value - 0.25) / 0.25;
        return mix(col1, col2, t);
    } else if (0.50 <= value && value < 0.75) {
        let t = (value - 0.50) / 0.25;
        return mix(col2, col3, t);
    } else {
        let t = (value - 0.75) / 0.25;
        return mix(col3, col4, t);
    }

}

@fragment
fn fs(input: FragmentInput) -> FragmentOutput {
    var out: FragmentOutput;

    var normalxy: vec2f = input.uv * 2.0 - 1.0;
    var r2: f32 = dot(normalxy, normalxy);
    if (r2 > 1.0) {
        discard;
    }
    var normalz = sqrt(1.0 - r2);
    var normal = vec3(normalxy, normalz);

    var radius = uniforms.sphere_size / 2;
    var real_view_pos: vec4f = vec4f(input.view_position + normal * radius, 1.0);
    var clip_space_pos: vec4f = uniforms.projection_matrix * real_view_pos;
    out.frag_depth = clip_space_pos.z / clip_space_pos.w;

    var diffuse: f32 = max(0.0, dot(normal, normalize(vec3(1.0, 1.0, 1.0))));
    var color: vec3f = value_to_color(input.speed / 2);

    out.color = vec4(diffuse * color, 1.);
    out.depth = vec4(real_view_pos.z, 0., 0., 1.);
    return out;
}`;class qn{constructor(g,M,B,P,F,b,q,X,J,$){D(this,"depthMapPipeline");D(this,"depthFilterPipeline");D(this,"thicknessMapPipeline");D(this,"thicknessFilterPipeline");D(this,"fluidPipeline");D(this,"spherePipeline");D(this,"depthMapTextureView");D(this,"tmpDepthMapTextureView");D(this,"thicknessTextureView");D(this,"tmpThicknessTextureView");D(this,"depthTestTextureView");D(this,"depthMapBindGroup");D(this,"depthFilterBindGroups");D(this,"thicknessMapBindGroup");D(this,"thicknessFilterBindGroups");D(this,"fluidBindGroup");D(this,"sphereBindGroup");D(this,"stretchStrengthBuffer");D(this,"device");this.device=g;const H=100,te=10,N=2*P,Q=12,U={screenHeight:M.height,screenWidth:M.width},ee={depth_threshold:P*te,max_filter_size:H,projected_particle_constant:Q*N*.05*(M.height/2)/Math.tan(F/2)},Z={restDensity:$,densitySizeScale:4},K=g.createSampler({magFilter:"linear",minFilter:"linear"}),E=g.createShaderModule({code:An}),W=g.createShaderModule({code:Gn}),de=g.createShaderModule({code:Fn}),he=g.createShaderModule({code:Tn}),pe=g.createShaderModule({code:On}),ae=g.createShaderModule({code:Un}),ve=g.createShaderModule({code:In});this.spherePipeline=g.createRenderPipeline({label:"ball pipeline",layout:"auto",vertex:{module:pe,constants:Z},fragment:{module:pe,targets:[{format:B},{format:"r32float"}]},primitive:{topology:"triangle-list"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth32float"}}),this.depthMapPipeline=g.createRenderPipeline({label:"depth map pipeline",layout:"auto",vertex:{module:W,constants:Z},fragment:{module:W,targets:[{format:"r32float"}]},primitive:{topology:"triangle-list"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth32float"}}),this.depthFilterPipeline=g.createRenderPipeline({label:"filter pipeline",layout:"auto",vertex:{module:E,constants:U},fragment:{module:de,constants:ee,targets:[{format:"r32float"}]},primitive:{topology:"triangle-list"}}),this.thicknessMapPipeline=g.createRenderPipeline({label:"thickness map pipeline",layout:"auto",vertex:{module:ae,constants:Z},fragment:{module:ae,targets:[{format:"r16float",writeMask:GPUColorWrite.RED,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}}]},primitive:{topology:"triangle-list"}}),this.thicknessFilterPipeline=g.createRenderPipeline({label:"thickness filter pipeline",layout:"auto",vertex:{module:E,constants:U},fragment:{module:ve,targets:[{format:"r16float"}]},primitive:{topology:"triangle-list"}}),this.fluidPipeline=g.createRenderPipeline({label:"fluid rendering pipeline",layout:"auto",vertex:{module:E,constants:U},fragment:{module:he,targets:[{format:B}]},primitive:{topology:"triangle-list"}});const re=g.createTexture({label:"temporary depth map texture",size:[M.width,M.height,1],usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,format:"r32float"}),De=g.createTexture({label:"thickness map texture",size:[M.width,M.height,1],usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,format:"r16float"}),I=g.createTexture({label:"temporary thickness map texture",size:[M.width,M.height,1],usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,format:"r16float"}),Y=g.createTexture({size:[M.width,M.height,1],format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT});this.depthMapTextureView=J,this.tmpDepthMapTextureView=re.createView(),this.thicknessTextureView=De.createView(),this.tmpThicknessTextureView=I.createView(),this.depthTestTextureView=Y.createView();const A=new ArrayBuffer(8),ie=new ArrayBuffer(8),oe=new Float32Array(A),se=new Float32Array(ie);oe.set([1,0]),se.set([0,1]);const L=g.createBuffer({label:"filter uniform buffer",size:A.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),ue=g.createBuffer({label:"filter uniform buffer",size:ie.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});this.stretchStrengthBuffer=g.createBuffer({label:"stretch strength buffer",size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),g.queue.writeBuffer(L,0,A),g.queue.writeBuffer(ue,0,ie),this.depthMapBindGroup=g.createBindGroup({label:"depth map bind group",layout:this.depthMapPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:b}},{binding:1,resource:{buffer:q}},{binding:2,resource:{buffer:this.stretchStrengthBuffer}}]}),this.depthFilterBindGroups=[],this.depthFilterBindGroups=[g.createBindGroup({label:"filterX bind group",layout:this.depthFilterPipeline.getBindGroupLayout(0),entries:[{binding:1,resource:this.depthMapTextureView},{binding:2,resource:{buffer:L}}]}),g.createBindGroup({label:"filterY bind group",layout:this.depthFilterPipeline.getBindGroupLayout(0),entries:[{binding:1,resource:this.tmpDepthMapTextureView},{binding:2,resource:{buffer:ue}}]})],this.thicknessMapBindGroup=g.createBindGroup({label:"thickness map bind group",layout:this.thicknessMapPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:b}},{binding:1,resource:{buffer:q}},{binding:2,resource:{buffer:this.stretchStrengthBuffer}}]}),this.thicknessFilterBindGroups=[],this.thicknessFilterBindGroups=[g.createBindGroup({label:"thickness filterX bind group",layout:this.thicknessFilterPipeline.getBindGroupLayout(0),entries:[{binding:1,resource:this.thicknessTextureView},{binding:2,resource:{buffer:L}}]}),g.createBindGroup({label:"thickness filterY bind group",layout:this.thicknessFilterPipeline.getBindGroupLayout(0),entries:[{binding:1,resource:this.tmpThicknessTextureView},{binding:2,resource:{buffer:ue}}]})],this.fluidBindGroup=g.createBindGroup({label:"fluid bind group",layout:this.fluidPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:K},{binding:1,resource:this.depthMapTextureView},{binding:2,resource:{buffer:q}},{binding:3,resource:this.thicknessTextureView},{binding:4,resource:X}]}),this.sphereBindGroup=g.createBindGroup({label:"ball bind group",layout:this.spherePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:b}},{binding:1,resource:{buffer:q}},{binding:2,resource:{buffer:this.stretchStrengthBuffer}}]})}execute(g,M,B,P,F){const b=new ArrayBuffer(4),q=new Float32Array(b);q.set([F]),this.device.queue.writeBuffer(this.stretchStrengthBuffer,0,q);const X={colorAttachments:[{view:this.depthMapTextureView,clearValue:{r:1e6,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:this.depthTestTextureView,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}},J=[{colorAttachments:[{view:this.tmpDepthMapTextureView,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},{colorAttachments:[{view:this.depthMapTextureView,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]}],$={colorAttachments:[{view:this.thicknessTextureView,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},H=[{colorAttachments:[{view:this.tmpThicknessTextureView,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},{colorAttachments:[{view:this.thicknessTextureView,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]}],te={colorAttachments:[{view:g.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},N={colorAttachments:[{view:g.getCurrentTexture().createView(),clearValue:{r:.7,g:.7,b:.75,a:1},loadOp:"clear",storeOp:"store"},{view:this.depthMapTextureView,clearValue:{r:1e6,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:this.depthTestTextureView,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}};if(P){const U=M.beginRenderPass(N);U.setBindGroup(0,this.sphereBindGroup),U.setPipeline(this.spherePipeline),U.draw(6,B),U.end()}else{const U=M.beginRenderPass(X);U.setBindGroup(0,this.depthMapBindGroup),U.setPipeline(this.depthMapPipeline),U.draw(6,B),U.end();for(var Q=0;Q<4;Q++){const K=M.beginRenderPass(J[0]);K.setBindGroup(0,this.depthFilterBindGroups[0]),K.setPipeline(this.depthFilterPipeline),K.draw(6),K.end();const E=M.beginRenderPass(J[1]);E.setBindGroup(0,this.depthFilterBindGroups[1]),E.setPipeline(this.depthFilterPipeline),E.draw(6),E.end()}const ee=M.beginRenderPass($);ee.setBindGroup(0,this.thicknessMapBindGroup),ee.setPipeline(this.thicknessMapPipeline),ee.draw(6,B),ee.end();for(var Q=0;Q<1;Q++){const E=M.beginRenderPass(H[0]);E.setBindGroup(0,this.thicknessFilterBindGroups[0]),E.setPipeline(this.thicknessFilterPipeline),E.draw(6),E.end();const W=M.beginRenderPass(H[1]);W.setBindGroup(0,this.thicknessFilterBindGroups[1]),W.setPipeline(this.thicknessFilterPipeline),W.draw(6),W.end()}const Z=M.beginRenderPass(te);Z.setBindGroup(0,this.fluidBindGroup),Z.setPipeline(this.fluidPipeline),Z.draw(6),Z.end()}}}async function Rn(){const f=document.querySelector("canvas");if(!navigator.gpu)throw alert("WebGPU is not supported on your browser."),new Error;const g=await navigator.gpu.requestAdapter();if(!g)throw alert("Adapter is not available."),new Error;const M=await g.requestDevice(),B=f.getContext("webgpu");if(!B)throw new Error;let P=.7;f.width=P*f.clientWidth,f.height=P*f.clientHeight;const F=navigator.gpu.getPreferredCanvasFormat();return B.configure({device:M,format:F}),{canvas:f,device:M,presentationFormat:F,context:B}}async function Yn(){const{canvas:f,device:g,presentationFormat:M,context:B}=await Rn();let P=document.getElementById("number-button"),F=!1,b="1";P.addEventListener("change",function(ce){const C=ce.target;(C==null?void 0:C.name)==="options"&&(F=!0,b=C.value)});const q=document.getElementById("small-value"),X=document.getElementById("medium-value"),J=document.getElementById("large-value");console.log("initialization done"),B.configure({device:g,format:M});let $;{const C=["cubemap/posx.png","cubemap/negx.png","cubemap/posy.png","cubemap/negy.png","cubemap/posz.png","cubemap/negz.png"].map(async d=>{const t=await fetch(d);return createImageBitmap(await t.blob())}),s=await Promise.all(C);$=g.createTexture({dimension:"2d",size:[s[0].width,s[0].height,6],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});for(let d=0;d<s.length;d++){const t=s[d];g.queue.copyExternalImageToTexture({source:t},{texture:$,origin:[0,0,d]},[t.width,t.height])}}const H=$.createView({dimension:"cube"});console.log("cubemap initialization done"),qe.texel_size.set([1/f.width,1/f.height]);const te=He,N=g.createBuffer({label:"particles buffer",size:te*Ne,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),Q=g.createBuffer({label:"position buffer",size:32*Ne,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),U=g.createBuffer({label:"filter uniform buffer",size:Oe.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});console.log("buffer allocating done");let ee=[3e4,6e4,1e5],Z=[[52,52,52],[60,60,60],[72,72,72]],K=[60,70,90],E=[15,20,25],W=[5,6,8],de=[2.5,2,1.5];const he=document.getElementById("fluidCanvas"),pe=45*Math.PI/180,ae=.7,ve=2*ae,re=.7,I=g.createTexture({label:"depth map texture",size:[f.width,f.height,1],usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,format:"r32float"}).createView(),Y=new Vn(N,Q,ve,g,U,I,f),A=new qn(g,f,M,ae,pe,Q,U,H,I,Y.restDensity);console.log("simulator initialization done");const ie=new yn(he);let oe=document.getElementById("error-reason");oe.textContent="",g.lost.then(ce=>{const C=ce.reason?`reason: ${ce.reason}`:"unknown reason";oe.textContent=C});let se=1,L=Z[se],ue=[...L];q.textContent="30,000",X.textContent="60,000",J.textContent="100,000";let j=!1,Fe=!1,xe=!0,be=1;console.log("simulation start");async function ge(){if(performance.now(),F||xe){se=parseInt(b),L=Z[se],Y.reset(L,E[se]),ie.reset(K[se],[L[0]/2,L[1]/2,L[2]/2],pe,re),ue=[...L];let w=document.getElementById("slider");w.value="100",F=!1,xe=!1}const ce=document.getElementById("slider"),C=document.getElementById("particle"),s=document.getElementById("autorotate");j=C.checked,Fe=s.checked;let d=parseInt(ce.value)/200+.5;const t=-.01,r=.04;let l=Math.max(d-be,t);l=Math.min(l,r),be+=l,ue[2]=L[2]*be,Y.changeBoxSize(ue),g.queue.writeBuffer(U,0,Oe);const p=g.createCommandEncoder();Y.execute(p,[ie.currentHoverX/f.clientWidth,ie.currentHoverY/f.clientHeight],ie.calcMouseVelocity(),ee[se],W[se]),A.execute(B,p,Y.numParticles,j,de[se]),g.queue.submit([p.finish()]),ie.setNewPrevMouseCoord(),Fe&&ie.stepAngle(),performance.now(),requestAnimationFrame(ge)}requestAnimationFrame(ge)}Yn();
