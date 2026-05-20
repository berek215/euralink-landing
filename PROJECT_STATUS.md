# EuraLink Logistics — 项目记录（落地页）

> 最后更新：2026-05-20  
> 与族谱项目 `D:\kazakh-shejire-admin` **完全独立**，互不影响。

---

## 在线地址（发客户用）

| 用途 | 地址 |
|------|------|
| **正式展示页** | https://euralink-landing.vercel.app |
| GitHub 源码 | https://github.com/berek215/euralink-landing |
| Vercel 控制台 | https://vercel.com → 项目 `euralink-landing` |

根路径即为首页，**不需要** `/kargo`。

---

## 本地项目位置

```
D:\euralink-landing\
├── public/
│   ├── logo.png      # 透明底 EuraLink LOGO
│   └── bg.png        # 黑白物流背景图（真实照片）
├── src/
│   ├── Landing.tsx   # 主页面（中俄双语 + WhatsApp）
│   ├── main.tsx
│   └── index.css
├── package.json
├── vercel.json
└── .env.example
```

---

## 品牌与内容

- **品牌**：EuraLink Logistics（非小 kargo 族谱项目）
- **Slogan 中文**：连接中国与中亚的高效物流网络
- **Slogan 俄语**：Эффективная логистическая сеть между Китаем и Центральной Азией
- **客户类型**：本地批发商 / 中国电商 / B2B 贸易
- **优势**：稳定清关、自主运力、本地执行、中国-中亚经验

---

## WhatsApp

- **当前默认**：`+7 775 8841790`（代码内 `wa.me`）
- **明天 Business 就绪后**：在 Vercel → Settings → Environment Variables 添加：

  ```
  VITE_WHATSAPP_URL=https://wa.me/77XXXXXXXXX?text=...
  ```

  然后 **Redeploy**。

- TikTok 链接：暂未配置（可后续加环境变量或改 `Landing.tsx`）

---

## Git / 部署流程（已完成的步骤）

```powershell
cd D:\euralink-landing
git config user.email "berek215@gmail.com"
git config user.name "berek215"
git add .
git commit -m "landing"
git remote add origin https://github.com/berek215/euralink-landing.git
git branch -M main
git push -u origin main
```

Vercel：Import `berek215/euralink-landing` → Framework **Vite** → Build `npm run build` → Output `dist` → Deploy。

---

## 本地开发

```powershell
cd D:\euralink-landing
npm install
npm run dev
```

浏览器：`http://localhost:5173`

---

## 与族谱项目的关系

| 项目 | 路径 | Git | 用途 |
|------|------|-----|------|
| 族谱主项目 | `D:\kazakh-shejire-admin` | Gitee `origin` | 族谱 / admin |
| **本落地页** | `D:\euralink-landing` | GitHub `origin` | 海外展示 + WhatsApp |

修改落地页只动 `euralink-landing`；推 Gitee 不会带上本仓库。

---

## 更新上线（改代码后）

```powershell
cd D:\euralink-landing
git add .
git commit -m "update landing"
git push
```

Vercel 会自动重新部署（约 1～2 分钟）。

---

## 素材要求（维护时注意）

- LOGO、背景：**仅使用真实上传素材**，禁止 AI 生成图
- LOGO 路径：`public/logo.png`（透明 PNG）
