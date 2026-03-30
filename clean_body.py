import re
import os

def clean_body_refined(html_path, output_path):
    with open(html_path, 'r', encoding='utf-8') as f:
        html = f.read()

    # Replacement for absolute URLs to relative
    html = html.replace('https://airporthelpservicebd.com/', '/')

    # Find body start and end
    body_match = re.search(r'<body[^>]*>(.*)</body>', html, re.IGNORECASE | re.DOTALL)
    if not body_match:
        print("Body not found")
        return
    
    body_content = body_match.group(1)

    # Remove scripts one by one to avoid greedy issues
    body_content = re.sub(r'<script[^>]*?>.*?</script>', '', body_content, flags=re.DOTALL | re.IGNORECASE)
    
    # Remove comments
    body_content = re.sub(r'<!--.*?-->', '', body_content, flags=re.DOTALL)
    
    # Clean up excess whitespace
    body_content = re.sub(r'\n\s*\n', '\n', body_content)

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(body_content)

clean_body_refined(
    r'D:\React\emon-portfolio\site-export\airporthelpservicebd.com\index.html',
    r'D:\React\emon-portfolio\react-converted\extracted_body_cleaned.html'
)
