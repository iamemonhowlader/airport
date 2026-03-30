from bs4 import BeautifulSoup
import os

def extract_head_content(html_path):
    with open(html_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')
    
    head = soup.head
    if not head:
        return ""

    # Convert absolute URLs to relative paths
    def clean_urls(text):
        if not text: return text
        return text.replace('https://airporthelpservicebd.com/', '/')

    tags_to_keep = []
    
    # Keep meta tags (except titles/descriptions handled by React if needed, but let's keep all for now)
    for meta in head.find_all('meta'):
        tags_to_keep.append(str(meta))

    # Keep and clean links
    for link in head.find_all('link'):
        if link.get('href'):
            link['href'] = clean_urls(link['href'])
        tags_to_keep.append(str(link))

    # Keep all style tags
    for style in head.find_all('style'):
        # Inline styles might contain URLs too
        style_content = clean_urls(style.string)
        if style_content:
            style.string = style_content
        tags_to_keep.append(str(style))

    # Keep scripts but clean src
    for script in head.find_all('script'):
        if script.get('src'):
            script['src'] = clean_urls(script['src'])
        # Also clean inline script content if any URLs are there
        if script.string:
            script.string = clean_urls(script.string)
        tags_to_keep.append(str(script))

    return "\n    ".join(tags_to_keep)

if __name__ == "__main__":
    original_html = r"D:\React\emon-portfolio\site-export\airporthelpservicebd.com\index.html"
    head_content = extract_head_content(original_html)
    
    with open("extracted_head.html", "w", encoding='utf-8') as f:
        f.write(head_content)
    
    print("Head content extracted to extracted_head.html")
