# Yến Việt Dashboard - AI Agent Instructions (agent.md)

## 1. Mục đích dự án
Dự án này là một Dashboard dành cho E-commerce (E-commerce Dashboard) được xây dựng với kiến trúc monorepo. Mục tiêu của dự án là cung cấp một công cụ quản trị nội bộ tốc độ cao, responsive, và mạnh mẽ để quản lý và trực quan hóa các dữ liệu kinh doanh (ví dụ: doanh thu, hàng tồn kho, chỉ số người dùng). Hệ thống được thiết kế để đạt hiệu suất tối đa, tận dụng các công cụ hiện đại và một runtime duy nhất xuyên suốt.

## 2. Tech Stack Chi tiết
- **Runtime:** Bun (JavaScript runtime cực nhanh, kiêm package manager và bundler)
- **Frontend:** React + Vite
- **Backend:** ElysiaJS (Web framework hiệu năng cao dành cho Bun)
- **Database:** SQLite
- **ORM:** Drizzle ORM
- **Styling:** Tailwind CSS + shadcn/ui (cho các UI component)
- **Charts:** Recharts (trực quan hóa dữ liệu)

## 3. Cấu trúc thư mục (Monorepo)
Dự án sử dụng cấu trúc monorepo được quản lý bởi Bun workspaces.

```text
yenviet-dashboard/
├── apps/
│   ├── frontend/         # Ứng dụng React + Vite
│   │   ├── src/
│   │   │   ├── components/   # UI components (shadcn/ui), charts, common ui
│   │   │   ├── pages/        # Các trang views của Dashboard
│   │   │   ├── hooks/        # Custom React hooks
│   │   │   ├── services/     # Tích hợp API (gọi data từ backend)
│   │   │   └── utils/        # Các hàm tiện ích (utility functions)
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── tailwind.config.js
│   │   └── vite.config.ts
│   └── backend/          # Ứng dụng ElysiaJS
│       ├── src/
│       │   ├── controllers/  # Xử lý logic cho các routes
│       │   ├── db/           # Cấu hình Drizzle, schema và connection tới SQLite
│       │   ├── routes/       # Định nghĩa các API endpoint
│       │   └── index.ts      # Điểm entry của server
│       ├── package.json
│       └── tsconfig.json
├── packages/             # Các shared packages dùng chung
│   └── shared/
│       ├── src/
│       │   └── types.ts  # Shared TypeScript interfaces (ví dụ: API payloads)
│       └── package.json
├── package.json          # Root package.json (định nghĩa Bun workspaces)
├── bun.lockb             # Bun lockfile
└── agent.md              # File hướng dẫn này
```

## 4. Quy tắc Coding (Coding Rules & Best Practices)

### General (Chung)
- **Strict TypeScript:** Tất cả code phải được viết bằng TypeScript với strict typing. Hạn chế tối đa việc sử dụng `any`.
- **Bun First:** Ưu tiên sử dụng các APIs Native của Bun (`Bun.file`, `Bun.serve`, v.v.) khi cần thiết. Luôn sử dụng CLI của `bun` cho việc cài đặt package (`bun install`, `bun add`), chạy script (`bun run`), và testing.
- **Monorepo Etiquette:** Chia sẻ các types/interfaces giữa frontend và backend thông qua workspace `packages/shared` để đảm bảo type-safety từ đầu đến cuối (end-to-end type safety).

### Frontend (React + Vite)
- **Component Design:** Sử dụng functional components và hooks. Chia nhỏ thành các component tái sử dụng được.
- **Styling:** Sử dụng Tailwind CSS cho utility classes. Tận dụng triệt để `shadcn/ui` cho các UI component phức tạp. Đảm bảo dashboard có tính responsive cao và tuân theo thẩm mỹ thiết kế hiện đại, cao cấp (premium feel).
- **Data Fetching:** Cô lập các hàm gọi API vào thư mục `services/` hoặc sử dụng custom hooks (có thể kết hợp với các thư viện như SWR hoặc React Query nếu cần).
- **Charts:** Sử dụng `Recharts` cho mọi trực quan hóa dữ liệu. Đảm bảo biểu đồ hiển thị tốt trên các kích thước màn hình khác nhau và xử lý được trạng thái không có dữ liệu (empty states).

### Backend (ElysiaJS)
- **Routing:** Nhóm các routes một cách logic. Sử dụng tính năng validation tích hợp sẵn của Elysia (ví dụ qua `t` module) để validate request body, params và query.
- **Database Access:** Mọi thao tác với database phải thông qua Drizzle ORM. Viết các truy vấn tối ưu và xử lý các connection vào SQLite một cách an toàn.
- **Error Handling:** Cần có một cơ chế response lỗi chuẩn xác và đồng nhất trên toàn bộ các API endpoint.

## 5. Hướng dẫn cho AI khi tạo Code

Khi AI tương tác và viết code cho repository này, vui lòng tuân thủ nghiêm ngặt các chỉ thị sau:

1. **Nhận thức Ngữ cảnh (Context Awareness):** Luôn ghi nhớ đây là một **Bun Monorepo**. Sử dụng lệnh `bun`, KHÔNG dùng `npm`, `yarn` hay `pnpm`. Chạy các lệnh từ thư mục root với workspace flags, hoặc chỉ định rõ working directory đang ở app/package nào.
2. **Type Safety xuyên suốt:** Khi tạo một tính năng mới yêu cầu cả Frontend và Backend, hãy bắt đầu bằng việc định nghĩa các interfaces/types dùng chung ở `packages/shared`, sau đó implement ở backend dựa trên type đó, và cuối cùng consume API ở frontend với type đã định nghĩa.
3. **Thao tác với shadcn/ui:** Nếu cần thêm UI components, hãy ưu tiên tìm trong `shadcn/ui`. Nếu component chưa có sẵn, hãy cung cấp lệnh setup component đó cho Bun (ví dụ: `bunx --bun shadcn-ui@latest add [component]`) hoặc tự động viết code tương ứng tuân thủ chuẩn của thư viện này.
4. **Cập nhật Drizzle Schema:** Khi sửa đổi cấu trúc database, hãy cập nhật file Drizzle schema trước tiên, hỗ trợ tạo migration script, và đảm bảo logic ở backend được cập nhật tương ứng.
5. **Tiêu chuẩn Thẩm mỹ (Aesthetics):** Các thay đổi ở Frontend phải đảm bảo yếu tố "WOW". Giao diện cần mang cảm giác cao cấp, màu sắc hiện đại, khoảng trắng (whitespace) hợp lý, typography rõ ràng, và có các vi hiệu ứng (micro-animations) khi tương tác (hover, click). KHÔNG tạo ra các giao diện cơ bản, nhàm chán.
6. **Code hoàn chỉnh:** KHÔNG sử dụng comment placeholder như `// TODO: implement logic here`. Mọi code do AI sinh ra phải là code hoàn chỉnh, hoạt động được ngay và bao phủ hết các edge cases có thể xảy ra.
