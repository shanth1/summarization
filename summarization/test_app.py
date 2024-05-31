import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello World"}

def test_summarize():
    sample_content = "This is a sample text to be summarized."

    response = client.post("/summarize", json={"content": sample_content})

    assert response.status_code == 200
    assert "message" in response.json()
    assert "info" in response.json()

    assert isinstance(response.json()["info"], float)
