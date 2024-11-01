import os
from dotenv import load_dotenv

load_dotenv()


class Var:
    base_url = "http://localhost:8000"
    gemini_api_key = os.environ.get("GEMINI_API_KEY")
