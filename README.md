# SentimentAnalyzer

A simple web app that performs real-time sentiment analysis on user-inputted text using NLP. This is intended for local testing, if you want to implement this in production, instead of Flask server, use Gunicorn for Linux, waitress for Windows with Nginx or Apache as the reverse proxy.

## Features
- Analyze sentiment (Positive / Neutral / Negative)
- Real-time interaction with Flask backend
- Lightweight and easy to extend (supports VADER/TextBlob/BERT)

![Sentiment input evaluation UI and example](<Screenshot 2025-07-12 at 6.07.41 PM.png>)
![Sentiment input evaluation UI and example](<Screenshot 2025-07-12 at 6.05.56 PM.png>)
![Sentiment input evaluation UI and example](<Screenshot 2025-07-12 at 6.06.28 PM.png>)
![Sentiment input evaluation UI and example](<Screenshot 2025-07-12 at 6.07.03 PM.png>)

## Tech Stack
- Python 3.8+
- Flask
- TextBlob (for sentiment scoring)
- HTML, CSS, JavaScript (frontend)

## Installation

```bash
git clone https://github.com/yourusername/SentimentAnalyzer.git
cd SentimentAnalyzer
pip install -r requirements.txt
python app.py
```

Then navigate to the loopback: `http://localhost:5000`

## License
MIT (using TextBlob library under MIT license).

## How Sentiment Analysis Works in This Project
Library Used: TextBlob
A high-level NLP library built on top of NLTK and Pattern.

Provides sentiment via blob.sentiment, which returns:

Polarity: a float from -1.0 (very negative) to 1.0 (very positive)
Subjectivity: how subjective/objective the text is (0 to 1)

## Limitations of This Model
### Pros:
Lightweight, fast, no training required.
Easy to use for quick demos or MVPs.

### Cons:
Doesn’t understand context well (e.g., sarcasm or idioms).
Fixed vocabulary, can't adapt to new domains or slang. If you're aiming for more accurate and context-aware analysis, you can use VADER or BERT-based models.


