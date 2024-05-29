from transformers import pipeline
import time
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

pipe = pipeline('summarization', model='d0rj/rut5-base-summ')

@app.get("/")
async def root():
    return {"message": "Hello World"}

class SummarizeReq(BaseModel):
    content: str

@app.post("/summarize")
async def summarize(req: SummarizeReq):
    start_time = time.time()
    summarized_text = pipe(req.content)
    end_time = time.time()
    elapsed_time = end_time - start_time

    return {"message": summarized_text, "info": elapsed_time }
