import {env} from 'cloudflare:workers';
export async function POST(request:Request){
 const origin=request.headers.get('origin');if(origin!==new URL(request.url).origin)return new Response(null,{status:403});
 if(Number(request.headers.get('content-length')||0)>1024)return new Response(null,{status:413});
 try{const body=await request.text();if(body.length>1024)return new Response(null,{status:413});const b=JSON.parse(body);
 if(!['page_view','phone_click','contact_open'].includes(b.event)||!['/','/gifts','/fruit-cuts','/cases','/about'].includes(b.page)||!/^[-a-f0-9]{36}$/.test(b.session)||!/^[-a-f0-9]{36}$/.test(b.id))return new Response(null,{status:400});
 if(!env.DB)return Response.json({recorded:false,reason:'database_unavailable'},{status:503});
 const month=new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Shanghai',year:'numeric',month:'2-digit'}).format(new Date());
 await env.DB.prepare('INSERT OR IGNORE INTO website_events (id,month,session,event,page,created_at) VALUES (?,?,?,?,?,?)').bind(b.id,month,b.session,b.event,b.page,Date.now()).run();return Response.json({recorded:true});
 }catch{return new Response(null,{status:400});}
}
