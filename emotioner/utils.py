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
send only result in format:
structure is given below:
emotion=$emotion
emotional_response=$emotional_response
talking_about=$himself | $someone
'''
    return prompt
