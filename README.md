[![CI/CD](https://github.com/<tên-user-github-của-bạn>/todo-app-devops/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/<tên-user-github-của-bạn>/todo-app-devops/actions/workflows/ci-cd.yml)

# Todo App - DevOps Project

Ứng dụng quản lý Todo với kiến trúc **Layered** (Repository - Service - Controller).

### Công nghệ sử dụng
- Node.js + Express
- PostgreSQL
- Docker + Docker Compose
- Layered Architecture (Repository, Service, Controller)
- Security: Helmet, CORS

### Cách chạy

**1. Chạy với Docker (khuyến nghị):**
```bash
docker-compose up --build
