 'use client';
import {useEffect} from 'react';
export default function Analytics(){useEffect(()=>{if(location.hostname==='localhost'||location.hostname==='127.0.0.1')return;let session:string;try{session=sessionStorage.getItem('zgy-session')||crypto.randomUUID();sessionStorage.setItem('zgy-session',session);}catch{return;}
 const send=(event:string)=>{void fetch('/api/events',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({id:crypto.randomUUID(),session,event,page:location.pathname}),keepalive:true}).catch(()=>{});};send('page_view');
 const click=(e:MouseEvent)=>{const t=e.target instanceof Element?e.target:null;const el=t?.closest('a,button');if(!el)return;if(el.getAttribute('href')?.startsWith('tel:'))send('phone_click');else if(el.matches('.wechat-slot,.contact-actions button,.help-actions button'))send('contact_open');};document.addEventListener('click',click);return()=>document.removeEventListener('click',click);},[]);return null;}
