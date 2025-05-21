# 🐇 가을 방명록 (Autumn Guestbook)

귀여운 토끼와 함께하는 감성 방명록 웹앱입니다.  
마우스를 따라다니는 토끼, 이미지 업로드까지 지원하는  
**감성 + 기능 모두 갖춘 프로젝트**입니다.  

> 🍁 직접 기획하고 배포까지 경험해보고자 만든 풀스택 개인 프로젝트입니다.  
> SPA 구조의 감성 UI + Django REST API 구성, 그리고 클라우드 서버 배포까지 구현 완료했습니다.

🔗 **배포 주소**: [https://autumn-log.kr](https://autumn-log.kr)

---

## 🌟 주요 기능

| 기능                           | 설명                                 |
| ------------------------------ | ------------------------------------ |
| 📝 게시글 작성                 | 텍스트 + 이미지 + 비밀번호 작성 가능 |
| 🗑 게시글 삭제                 | 비밀번호 입력 시에만 삭제 가능       |
| ✏️ 게시글 수정                 | 본문 수정도 비밀번호 필요            |
| 🐰 마우스를 따라다니는 토끼    | 귀여운 커서 추적 토끼 이미지         |
| 🐇 화면 위를 날아다니는 토끼들 | 애니메이션으로 감성 연출             |
| 📷 파일 업로드 커스터마이징    | 감성 버튼으로 파일 선택              |

---

## 🛠 기술 스택

- **Frontend**: React, SCSS, Axios
- **Backend**: Django, Django REST Framework
- **Database**: SQLite
- **DevOps**: Nginx, Gunicorn, Docker, Naver Cloud Platform
- **환경 관리**: `django-environ` (.env)

---

## 🔐 비밀번호 관리

- 각 글에는 비밀번호를 입력해야 작성됩니다.
- 게시글 삭제 및 수정 시, 입력한 비밀번호와 일치해야 작업 가능
- `.env`에 설정한 `SUPER_DELETE_PASSWORD` 입력 시 모든 글 삭제 가능 (관리자용)

---

## ✨ 감성 디자인 요소

- 🐰 마우스를 따라다니는 귀여운 토끼 캐릭터
- 🐇 배경 위를 자유롭게 날아다니는 토끼들 (랜덤 애니메이션)
- 📸 이미지 업로드 영역도 감성 UI로 커스터마이징

---

## 📁 디렉토리 구조
```
project-root/
├── backend/
│ ├── myboard/
│ ├── board/
│ ├── db.sqlite3
│ └── .env ← SUPER_DELETE_PASSWORD 설정
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── styles/
│ └── public/
└── README.md
```
---

## 💡 향후 개선 아이디어

- ✅ 댓글 기능 추가
- ✅ 토끼 클릭 시 반응 추가
- ⏳ 방명록 PDF 저장 기능
- ⏳ 다크 모드 / 배경음악 기능

---

## 📦 참고 (로컬 실행 시)

이미 배포된 프로젝트지만, 로컬에서 실행하고 싶다면 아래와 같이 구성되어 있습니다:
# 백엔드 실행
```
cd backend
python manage.py runserver
```
# 프론트엔드 실행
```
cd frontend
npm start
```

🙌 제작자
채가을 (peachez-z) <br/>
💌 rkdmf0914@gmail.com <br/>
📍 GitHub: @peachez-z

