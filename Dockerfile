FROM python:3.8.5

WORKDIR /app

RUN pip install pipenv

COPY Pipfile .

RUN pipenv install --deploy --ignore-pipfile

COPY . .

CMD ["pipenv", "run", "python", "main.py"]