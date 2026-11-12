import Analytics from '../components/analytics';
import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'藏果源｜源自高原的鲜果礼意',description:'以果为礼，传递心意。探索藏果源果礼定制、商务果切与鲜果服务。',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body>{children}<Analytics/></body></html>}
