import os
import re
from dotenv import load_dotenv      # type: ignore 
from flask import Flask, send_from_directory, request, jsonify   # type: ignore 
from flask_cors import CORS # type: ignore 
from langchain_core.prompts import ChatPromptTemplate   # type: ignore 
from langchain_core.output_parsers import StrOutputParser  # type: ignore 
from langchain_community.llms import ollama        # type: ignore 

from func import replace

import time
import random
import string
import streamlit as st # type: ignore 

import nltk # type: ignore 
from nltk.corpus import stopwords         # type: ignore 
from nltk.tokenize import RegexpTokenizer  # type: ignore 
from fuzzywuzzy import process         # type: ignore 
nltk.download('stopwords', quiet=True)  # type: ignore 

load_dotenv(dotenv_path=".env")  

app = Flask(__name__, static_folder='../build', static_url_path='/')
CORS(app)

antiai_api_key = os.getenv("ANTIAI_API_KEY")

os.environ["ANTIAI_API_KEY"] = antiai_api_key


tokenizer = RegexpTokenizer(r'\w+|\$[\d\.]+|\S+')

prompt = ChatPromptTemplate.from_messages(
    [
        ("system", "You are a helpful assistant. Please respond to the user queries"),
        ("user", "Question: {question}")
    ]
)

def score_match(key, token):
    key_tokens = tokenizer.tokenize(key)
    score = sum(1 for t in token if t.lower() in (k.lower() for k in key_tokens))
    return score

def job_search():
    return "Please visit our career page"

def remove_punctuation(text):
    translator = str.maketrans("", "", string.punctuation)
    cleaned_text = text.translate(translator)
    return cleaned_text

intents = {
    "joke": ["joke", "funny", "laugh", "humor"],
    "effects_of_ai": ["harm", "effect", "danger", "risk", "negative", "problem"],
    "ai_positive": ["positive", "benefit", "advantage","merit", "good"],
    "ai_negative": ["negative", "disadvantage","demerit", "bad"],  
}

def classify_intent(question):
    for intent, keywords in intents.items():
        if any(keyword in question.lower() for keyword in keywords):
            return intent
    return None

def get_valid_index(max_index):
    while True:
        try:
            inp = int(input("Kindly enter the index number: "))
            if 1 <= inp <= max_index:
                return inp
            else:
                return  f"Please enter a number between 1 and {max_index}."
        except ValueError:
            return  "Invalid input. Please enter a valid integer."

def input_Index():
    inp = int(input("Kindly enter the index number: "))
    return inp

def all_matches(filtered, matches):
    matching_services = []
    for match in matches:
        if any(f" {word.lower()} " in f" {match.lower()} " for word in filtered):
            matching_services.append(match)
    return matching_services

def custom_responses(question):

    negative_response = ["bye", "later", "quit", "exit", "end"]

    general_question = {
    "Hii": "Hello 😊",
    "Hello": "Hii 👋",
    "motto": "अन्ते सत्यं विजयते। 🏆",

    "vision mission": "Our mission is clear: to protect and empower by strategically managing the infiltration of artificial intelligence. We believe that AI should be harnessed responsibly for the betterment of humanity and society. ANTI AI is committed to providing innovative solutions that ensure the ethical use of AI, preventing unintended intrusions and promoting a secure digital landscape. 🌍🤖",
    "contact connect reach appointment call email": "You can contact Anti AI via phone or email.\n\nPhone: +91 9116665513\nEmail: support@antiai.ltd 📞📧",
    
    "when was established founded year started established in Created Launched set up Formed": "Anti AI was established by Tanishq Sharma in 2024 🛠️",
    "founder owner founded Established by": "Tanishq Sharma 🧑‍💼",
    "size or total members people employee employees working in": "2-10 👥",
    "when contact free take call working hour hours": "Monday-Saturday 10 am -7 pm 🕒",
    "Speciality Specialities": "Uniqueness\nGrowth\nGoal Oriented\nSoftware 🌟📈",
    "headquarter": "Address: 70, Kesar Vihar, near Railway Colony, Vidhyadhar Nagar, Railway Colony, Jagatpura, Jaipur, Rajasthan 302017🏢",
    "located situated location address headquarters": "Address: 70, Kesar Vihar, near Railway Colony, Vidhyadhar Nagar, Railway Colony, Jagatpura, Jaipur, Rajasthan 302017 🏢",
}

    negative_response = ["bye 👋", "later 🕐", "quit 🚪", "exit 🔚", "end 🛑"]

    response = {
        "AI Services ": "AI Services: Our AI services include chatbots, voice assistants, and AI sales bots 🤖💬\n",
        "Web Services ": "Web Services: Our Web Development services provide end-to-end solutions for building robust, scalable, and user-friendly websites and applications, customized to your business needs 🌐💻\n",
        "DevOps Services ": "DevOps Services: Streamlining Software Development and Deployment. Our DevOps services help organizations streamline their software development and deployment processes 🚀🛠️\n",
        "Cloud Services ": "Cloud Services: Our cloud services help you build and manage your cloud infrastructure ☁️💡\n",
        "App Develop Services": "App Development: Transforming ideas into powerful mobile solutions. Custom app development tailored to your business needs. Expert team delivering seamless iOS and Android experiences 📱💡\n",
        "antiai": "AntiAI is an AI research and development company. Our mission is to ensure that the threat from artificial general intelligence is mitigated even before they arise 🤖🛡️.\n\nWe believe that humanity should benefit from AI, and we're developing our own first-in-class Anti AI software to ensure safe usage. We are building safe and smart solutions against AGI, but will also consider our mission fulfilled if our work aids others to achieve this outcome 💡🌍.\n",
        "Our Projects or products": "Our Projects:\nANTI.Q - Music Player 🎵\nANTI.0 - offers robust protection against AI-driven intrusions 🛡️\nANTI.1 - redefines AI capabilities by offering innovative features and functionalities 🤖🔧\n",
        "Full Form": "A - ARTIFICIAL\nN - NUANCES\nT - TACTICAL\nI - INFILTRATION\nAI - ARTIFICIAL INTELLIGENCE 🧠💡\n",
        "About ceo owner founder Tanishq": "Tanishq Sharma is a tech entrepreneur and the founder of ANTI AI, a company dedicated to safeguarding the world from the potential dangers of AGI 🧑‍💼🚀.\n",
        "anti.1": "ANTI.1 represents our groundbreaking Concept Artificial Intelligence Project, aimed at disrupting the AI industry with a novel approach. Currently in the developmental phase, ANTI.1 is being meticulously crafted by our dedicated team of researchers and developers. It seeks to redefine AI capabilities by offering innovative features and functionalities not seen before. 🚀🤖\n\nInnovative ✨\t\t\tEthical AI ⚖️",
        "anti.0": "ANTI.0 is our pioneering Anti AI Software, specifically crafted to combat the influence of Artificial Intelligence. This innovative solution is under active development by our expert team of developers. 🛡️💻\n\nSecurity 🔒\t\t\tFuture Proof 🔮",   
        "anti.q walkman": "ANTI.Q is our flagship, one-of-a-kind music player, designed to revive the charm of retro entertainment. It delivers a serverless, uninterrupted audio experience, reminiscent of a bygone era. 🎶📻\n\nServerless ☁️\t\t\tRetro 📼\nNostalgia 🎧\t\t\t"
    }

    founder_responses = [
        "Tanishq Sharma 🧑‍💼",
        "Tanishq Sharma is a tech entrepreneur and the founder of ANTI AI, a company dedicated to safeguarding the world from the potential dangers of AGI 🧑‍💼🚀."
    ]
    
    
    weights = { "mission":4,"service":4,"services":4,"ai": 2, "web": 2, "devops": 2,'founded':2,'founder':2,'owner':2,'anti':3,'located':4,'situated':2,"headquarter":5}    
    jobs=["You can look into our career page for more info regarding jobs"]

    question = question.replace("anti ai", "antiai").replace("anti.ai", "antiai").replace("anti-ai", "antiai").replace("anti_ai", "antiai")
    question = question.replace("anti 1", "anti.1").replace("anti1", "anti.1").replace("anti-1", "anti.1").replace("anti_1", "anti.1")
    question = question.replace("anti 0", "anti.0").replace("anti0", "anti.0").replace("anti-0", "anti.0").replace("anti_0", "anti.0")
    question = question.replace("anti q", "anti.q").replace("antiq", "anti.q").replace("anti-q", "anti.q").replace("anti_q", "anti.q")

    if "anti.1" in question:
        return response["anti.1"]
    if "anti.0" in question:
        return response["anti.0"]
    if "anti.q" in question:
        return response["anti.q walkman"]
    
    if "owner" in question or "founder" in question or "establish" in question or "established by" in question or "ceo" in question:
        if "anti ai" in question or "antiai" in question or "your" in question :
            return random.choice(founder_responses)
        else:
            return None
    
    if "full form" in question:
        if "antiai" in question or "your" in question:
            return response["Full Form"]
        else:
            return None
    
    if "project" in question or "product" in question:
        if "antiai" in question or "your" in question:
            return response["Our Projects or products"]
        else:
            return None

    if "pm" in question:
        return "Please write the full form of PM"

   

    stop_words = set(stopwords.words('english'))
    custom_stop_words = stop_words - {"AI", "ai"} 
    input_quest = question.lower()

    intent = classify_intent(input_quest)      # Use for queries like tell me a joke on anti ai
    if intent:
        return None
    
    if len(input_quest) < 3:
        return "Please enter at least 3 words OR Try with Full Form if any."
    
    if any(word in input_quest for word in ["contact", "connect", "reach", "call", "email"]):
        return general_question["contact connect reach appointment call email"]

    quest = remove_punctuation(input_quest)


    token = tokenizer.tokenize(quest)
    filtered_tokens = [t for t in token if t.lower() not in custom_stop_words and len(t) >= 2]

    for t in token:
        if t in weights:
            pass
        else:
            weights[t] = 0

    filtered_with_weight = [token if token in weights else token for token in filtered_tokens]
    filtered_tokens = sorted(filtered_with_weight, key=lambda token: weights[token], reverse=True)

    best_match = None
    best_score = 0
    for key in general_question:
        score = score_match(key, filtered_tokens)
        if score > best_score:
            best_match = key
            best_score = score
            match_type = "general"

    if best_match:
        if match_type == "general":
            return general_question[best_match]
    else:
        response_keys = response.keys()
        for tokens in filtered_tokens:
            matches = [response_keys_matched for response_keys_matched in response_keys if tokens.lower() in response_keys_matched.lower()]

            if len(matches) == 1:
                return f"{response[matches[0]]}"
            elif tokens in ["job", "opening", "career", "careers", "jobs", 'vacancy', "openings"]:
                return job_search()
            elif len(matches) >= 2:
                filtered_tokens.remove(tokens)
                best = all_matches(filtered_tokens, matches)
                if best:
                    return "\n".join([f"{response[match]}" for match in best])
                else:
                    return "\n".join([f"{response[match]}" for match in matches])
            elif tokens in negative_response:
                return "Hope to see you next time"
        return None

d=["relation","developed","relationship","made","build","develop","owns","generate","link"]

@app.route('/api/chat', methods=['POST'])
@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_input = data.get('message')

    custom_response = custom_responses(user_input)
    if custom_response:
        time.sleep(3)
        return jsonify({"response": custom_response})

    ollama_model = os.getenv("OLLAMA_MODEL")
    llm = ollama.Ollama(model=ollama_model)

    output_parser = StrOutputParser()
    chain = prompt | llm | output_parser

    prompt_text = prompt.format(question=user_input)
    response = chain.invoke({"question": user_input})

    if "google" not in user_input.lower():
        modified_response = replace(response)
        return jsonify({"response": modified_response})
    elif "google" in user_input.lower():
        if not any(word in user_input.lower() for word in d):  
            return jsonify({"response": response})
        else:
            modified_response = replace(response)
            return jsonify({"response": modified_response})

    else:
        return jsonify({"response": response})


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=3001, debug=True)