def parse_prompt(spoken_txt, lang):
    lang = 'Malayalam' if lang == 'mal' else 'English'
    prompt = f'''"{spoken_txt}"
What's is the emotion u see in the above phrase written in {lang} From
happy
angry
disgusting 
depressed and sad
in love
exciting
superb and existing entry

If the person is not talking about himself then predict the emotion of the person he's talking to as $emotion_response (depressed if angry) from the list of emotions 
Only send the emotion and also include if the person is talking about someone else or himself u select without any sentence 
''' + '''

SEND AS DICT WITHOUT ANY OTHER TEXT without any markup
output_structure (all lowercase & only json no other text)
RESULT: {"emotion": "$emotion" 
"emotional response": "$emotional_response"
"talking about": "$himself | $someone"
}'''
    return prompt
