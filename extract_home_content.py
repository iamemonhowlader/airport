import os

def extract_home_content():
    input_file = r"D:\React\emon-portfolio\site-export\airporthelpservicebd.com\index.html"
    output_file = "home_content.html"
    
    with open(input_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # We found Header ends around 3804 and Footer starts around 4661
    # Let's be slightly more robust by searching for strings if possible
    # but based on previous findstr: 3806 is <div id="content" class="site-content">
    # 4661 is <footer... id="colophon">
    
    content_lines = lines[3805:4660] # 0-indexed: 3805 is line 3806
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.writelines(content_lines)
    
    print(f"Home content extracted to {output_file}")

if __name__ == "__main__":
    extract_home_content()
