from global_vars import Var
import google.generativeai as genai
from google.generativeai import GenerativeModel

genai.configure(api_key=Var.gemini_api_key)
model = GenerativeModel("gemini-1.5-flash")


def generate_ai_output(prompt):
    try:
        res = model.generate_content(prompt)
        return res.text
    except Exception as e:
        print("AI ERROR", e)
