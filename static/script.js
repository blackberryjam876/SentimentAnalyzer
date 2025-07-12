async function analyzeSentiment() {
    const text = document.getElementById('text').value;

    const response = await fetch('/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: text })
    });

    const result = await response.json();
    document.getElementById('result').innerText =
        `Sentiment: ${result.sentiment} (Polarity: ${result.polarity})`;
}
