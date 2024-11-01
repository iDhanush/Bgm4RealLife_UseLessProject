import uvicorn
from server import app
from emotioner.api import emo_router

app.include_router(emo_router)
uvicorn.run(app, port=8000)
