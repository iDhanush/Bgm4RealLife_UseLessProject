from fastapi import APIRouter
from pydantic import BaseModel, constr

emo_router = APIRouter(tags=['emotioner'])


class EmotionerData(BaseModel):
    spoken_text: str
    lang: constr(pattern='^(mal|eng)$')


@emo_router.get('/get_emotion')
def emotioner(emotioner_data: EmotionerData):
    spoken_text = emotioner_data.spoken_text
    lang = emotioner_data.lang
