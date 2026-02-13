From python:3.8-alpine

Add flask_app.py  .

COPY requirements.txt .


RUN pip install -r requirements.txt
COPY . .

CMD [ "python" , "/flask_app.py" ]