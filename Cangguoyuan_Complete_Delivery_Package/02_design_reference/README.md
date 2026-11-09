# 藏果源｜交给 Codex 的网站开发包

本包包含：
- `REQUIREMENTS.md` — 已确认的完整网站规格（**优先阅读**）。
- `CODEX_START_HERE.md` — 可直接复制给 Codex 的短指令。
- `references/final/` — 最终五个页面设计效果图。
- `references/brand/` — 用户提供的原始品牌图及经典整箱水果参考。
- `references/notes/` — 以前的方案 A、旧版页脚等参考，仅解释修改点。
- `docs/ASSET_GUIDE.md` — 图片替换清单与真实性注意事项。
- `public/images/` — 预留图片目录（空目录通过 `.gitkeep` 保留）。

## 使用方式

1. 解压文件夹，放进你的项目工作目录；已有 Next.js 工程可把这些内容复制到项目根目录。**注意不要用此包覆盖已有应用源码**。
2. 打开 Codex，让其读取 `CODEX_START_HERE.md` 和 `REQUIREMENTS.md` 并执行；或复制入口指令到 Codex 对话。
3. 完成后依据 `docs/ASSET_GUIDE.md` 逐项补充真实产品照、果切照、返图和二维码。

当前文件夹是需求/参考/素材来源包，**不是已开发的网站源代码**。
