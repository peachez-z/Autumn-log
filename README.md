# 🐇 가을 방명록 (Autumn Guestbook)

귀여운 토끼와 함께하는 감성 방명록 웹앱입니다.  
마우스를 따라다니는 토끼, 이미지 업로드까지 지원하는  
**감성+기능 모두 갖춘 프로젝트**입니다.

---

## 🌟 주요 기능

| 기능                           | 설명                                 |
| ------------------------------ | ------------------------------------ |
| 📝 게시글 작성                 | 텍스트 + 이미지 + 비밀번호 작성 가능 |
| 🗑 게시글 삭제                  | 비밀번호 입력 시에만 삭제 가능       |
| ✏️ 게시글 수정                 | 본문 수정도 비밀번호 필요            |
| 🐰 마우스를 따라다니는 토끼    | 귀여운 커서 추적 토끼 이미지         |
| 🐇 화면 위를 날아다니는 토끼들 | 애니메이션으로 감성 연출             |
| 📷 파일 업로드 커스터마이징    | 감성 버튼으로 파일 선택              |

---

## 🛠 기술 스택

- **Front-end**: React, SCSS
- **Back-end**: Django, Django REST Framework
- **Database**: SQLite
- **기타**: `django-environ`으로 `.env` 환경변수 관리

---

## 📦 설치 및 실행

### 1. 백엔드 (Django)

```bash
cd backend
python -m venv venv
source venv/Scripts/activate      # 윈도우 기준
pip install -r requirements.txt

# .env 파일 생성
echo SUPER_DELETE_PASSWORD=letmein1234 > .env

# 마이그레이션 & 서버 실행
python manage.py migrate
python manage.py runserver
```

### 2. 프론트엔드 (React)

```bash
cd frontend
npm install
npm start
```

---

## 🔐 비밀번호 관리

- 각 글에는 비밀번호가 필요합니다.
- 게시글 삭제 및 수정 시 입력한 비밀번호가 일치해야만 가능
- `.env`에 설정한 `SUPER_DELETE_PASSWORD`를 입력하면 **모든 글 삭제 가능**

---

## ✨ 감성 디자인 요소

- 🐰 마우스 따라다니는 토끼 이미지
- 🐇 화면 위를 자유롭게 나는 토끼들

---

## 📁 디렉토리 구조

```
project-root/
├── backend/
│   ├── myboard/
│   ├── board/
│   ├── db.sqlite3
│   └── .env  ← SUPER_DELETE_PASSWORD 설정
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── styles/
│   └── public/
└── README.md
```

---

## 💌 향후 개선 아이디어

- ✅ 댓글 기능 추가
- ✅ 토끼 클릭 시 반응 추가
- ⏳ 방명록 PDF 저장
- ⏳ 다크 모드 / 음악 추가

---

## 🙌 제작자

💬 질문이나 피드백은 언제든지 환영합니다!
