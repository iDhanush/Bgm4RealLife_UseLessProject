import random

from fastapi import HTTPException

from global_vars import Var
# import google.generativeai as genai
# from google.generativeai import GenerativeModel
# from asyncio import run, create_task
#
# genai.configure(api_key=Var.gemini_api_key)
# model = GenerativeModel("gemini-1.5-pro")
#
#
# def generate_ai_output(prompt):
#     try:
#         res = model.generate_content(prompt)
#         return res.text
#     except Exception as e:
#         print("AI ERROR", e)

import aiohttp

gen_url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key="

async def generate_ai_output(prompt):
    gemini_api_key = random.choice(Var.gemini_api_keys)
    url = gen_url + gemini_api_key.strip()
    payload = {"contents": [{"parts": [{"text": prompt}]}]}

    async with aiohttp.ClientSession() as session:
        async with session.post(url, json=payload) as response:
            if response.status == 200:
                try:
                    data = await response.json()
                    # Adjust parsing to match the expected response structure
                    return data["candidates"][0]['content']["parts"][0]["text"]
                except KeyError as e:
                    raise HTTPException(
                        status_code=500,
                        detail=f"AI ERROR: Unexpected response structure: {await response.text()}",
                    )
            else:
                # Await response.text() properly
                error_detail = await response.text()
                raise HTTPException(
                    status_code=response.status,
                    detail=f"AI ERROR: {error_detail}"
                )
