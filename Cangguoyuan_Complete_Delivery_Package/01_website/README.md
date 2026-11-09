# 藏果源品牌官网

依照用户已确认的五页设计实现。Next.js App Router / React / TypeScript / Vinext。所有配图随项目保存在 public/images，无外部图片依赖。

## 运行

Node.js 22.13+，pnpm。

```sh
pnpm install
pnpm dev
pnpm build
```

## 页面

- `/` 首页
- `/gifts?series=french` 果礼定制（french / tibetan / classic）
- `/fruit-cuts?scene=beauty-spa` 商务果切
- `/cases` 团餐返图
- `/about` 关于我们

场景参数：beauty-spa / hotel-vip / wedding-birthday / brand-catering / office-meeting。

## 维护

- content/site.ts：品牌电话、三类果礼、五类场景及套餐示意、规格建议、导航。
- components/site.tsx：共用页面、筛选、历史状态、产品弹层、相册、联系弹层。
- app/globals.css：桌面/手机布局与完整视觉样式。
- public/images：独立图片文件，可按原名替换；请保留宽高比。
- app/*/page.tsx：五个页面路由。

## 素材来源与真实性

品牌 Logo 和藏文局部来自用户提供的原始宣传图；织纹、帘角和苹果果园视觉为用户确认设计中的装饰局部。Hero、三类包装及五类场景照片使用内置生图工具独立生成，全部为明确标注的品牌/包装/搭配效果示意，不是真实商品或客户案例。没有将整张设计稿作为网页背景。

暂缺：独立透明 Logo、产品实拍与可售配置、价格、真实案例照片、微信二维码、门店地址、营业时间、配送范围。当前电话为用户确认的 176 1116 8853，其他资料没有杜撰。无需求表单，无支付、购物车、假二维码或假下单。

## 验证记录

- TypeScript `tsc --noEmit`：通过。
- ESLint（app / components/site.tsx / content）：通过，无警告。
- 生产构建：通过，五条路由生成。
- 浏览器：桌面首页/五页导航、首页系列参数、果礼筛选与后退恢复、果切场景/套餐/详情内规格、Escape 关闭、相册与联系弹层。
- 手机：390px iframe 真实视口中检查布局、菜单和交互；未模拟完整手机操作系统。

## 与参考的差异

共享对话链接在当前环境无法直接读取，参考来源为同一项目此前的最终五页设计包。缺少的原始分层摄影素材已生成相近的独立配图；真实门店/经营资料位置保留占位。这是忠实还原设计方向的可运行版本，不宣称逐像素相同。
