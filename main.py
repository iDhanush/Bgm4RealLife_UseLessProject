from server import app
from emotioner.api import emo_router
from starlette.staticfiles import StaticFiles
app.include_router(emo_router)
# static files
app.mount("/bgm_col", StaticFiles(directory="bgm_col"), name="bgm_col")
# uvicorn.run(app, host='0.0.0.0', port=80)
