dev:
	uvicorn main:app --reload

build:
	docker build -t fastapi_app .

prod:
	docker run -d -p 8000:8000 fastapi_app
