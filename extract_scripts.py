from bs4 import BeautifulSoup
import os

def extract_footer_scripts(html_path):
    with open(html_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')
    
    # Scripts at the bottom (usually after <footer> or at end of <body>)
    # Let's get all scripts that were NOT in <head>
    head_scripts = {str(s) for s in soup.head.find_all('script')} if soup.head else set()
    all_scripts = soup.find_all('script')
    
    footer_scripts = []
    for script in all_scripts:
        if str(script) not in head_scripts:
            # Clean URLs
            if script.get('src'):
                script['src'] = script['src'].replace('https://airporthelpservicebd.com/', '/')
            if script.string:
                script.string = script.string.replace('https://airporthelpservicebd.com/', '/')
            footer_scripts.append(str(script))

    return "\n    ".join(footer_scripts)

if __name__ == "__main__":
    original_html = r"D:\React\emon-portfolio\site-export\airporthelpservicebd.com\index.html"
    scripts_content = extract_footer_scripts(original_html)
    
    with open("extracted_footer_scripts.html", "w", encoding='utf-8') as f:
        f.write(scripts_content)
    
    print("Footer scripts extracted to extracted_footer_scripts.html")
