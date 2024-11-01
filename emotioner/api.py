import json
import os
import random

from fastapi import APIRouter
from pydantic import BaseModel, constr

from ai_func.utils import generate_ai_output
from emotioner.utils import parse_prompt

emo_router = APIRouter(tags=['emotioner'])


class EmotionerData(BaseModel):
    spoken_text: str
    lang: constr(pattern='^(mal|eng)$')


emotion_dict = {
    'angry': 'angry',
    'disgusting': 'disgusting',
    'happy': 'happy',
    'depressed and sad': 'sad',
    'exciting': 'exciting',
    'love': 'love',
    'superb and existing entry': 'mass_entry',
}


@emo_router.post('/get_emotion')
def emotioner(emotioner_data: EmotionerData):
    spoken_text = emotioner_data.spoken_text
    lang = emotioner_data.lang
    prompt = parse_prompt(spoken_text, lang)
    print(prompt)
    text = generate_ai_output(prompt)
    print(text)
    text = text.split('RESULT: ')[-1]
    text = text.strip("`")
    text = text.strip("json")
    print('final', text)
    text_json = json.loads(text)
    talkig_about = text_json.get('talking about')

    if talkig_about == 'himself':
        final_emotion = text_json.get('emotion')
    else:
        final_emotion = text_json.get('emotional_response')
    if not final_emotion:
        final_emotion = 'nuetral'
    emotion_folder = emotion_dict.get(final_emotion, 'nuetral')
    # get list of file names inside emotion folder
    emotion_files = os.listdir(f'./bgm_col/{emotion_folder}')
    print(emotion_files)
    # select random file from list
    random_file = random.choice(emotion_files)
    print(random_file)
    print(random_file)
    file_path = f'/{emotion_folder}/{random_file}'
    return {
        'bgm': file_path,
        'emotion': final_emotion
    }
