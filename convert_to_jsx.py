import os
import re
import sys

def convert_html_to_jsx(html):
    # Basic replacements
    replacements = [
        (r'class=', 'className='),
        (r'itemscope', 'itemScope'),
        (r'itemtype', 'itemType'),
        (r'itemprop', 'itemProp'),
        (r'fetchpriority', 'fetchPriority'),
        (r'srcset', 'srcSet'),
        (r'allowfullscreen', 'allowFullScreen'),
        (r'referrerpolicy', 'referrerPolicy'),
        (r'frameborder', 'frameBorder'),
        (r'autoplay', 'autoPlay'),
        (r'crossorigin', 'crossOrigin'),
        (r'novalidate', 'noValidate'),
        (r'datetime=', 'dateTime='),
        (r'onclick=', 'onClick='),
        (r'onchange=', 'onChange='),
        (r'tabindex=', 'tabIndex='),
        (r'xmlns:xlink=', 'xmlnsXlink='),
        (r'xml:space=', 'xmlSpace='),
        (r'enable-background=', 'enableBackground='),
    ]

    for old, new in replacements:
        html = re.sub(old, new, html, flags=re.IGNORECASE)

    # Convert absolute URLs to relative paths
    html = html.replace('https://airporthelpservicebd.com/', '/')

    # Quote unquoted attributes (e.g., data-vertical-menu=750px -> data-vertical-menu="750px")
    html = re.sub(r'(\s[a-zA-Z0-9-]+)=([^"\'>\s]+)', r'\1="\2"', html)

    # Robust self-closing conversion
    html = re.sub(r'<(img|br|hr|input|link)([^>]*?)(\s?\/?)>', r'<\1\2 />', html, flags=re.IGNORECASE)
    
    # Fix double slashes
    html = re.sub(r'\s+/ />', r' />', html)
    html = re.sub(r'/ />', r' />', html)
    
    # Style attribute handles
    def style_replacer(match):
        style_str = match.group(1)
        parts = style_str.split(';')
        style_dict = []
        for part in parts:
            if ':' in part:
                k, v = part.split(':', 1)
                k = k.strip()
                v = v.strip().replace('"', "'")
                if not k: continue # Skip empty keys
                if k.startswith('--'):
                    style_dict.append(f"'{k}': '{v}'")
                else:
                    k_camel = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
                    style_dict.append(f"{k_camel}: '{v}'")
        return 'style={{' + ', '.join(style_dict) + '}}'

    html = re.sub(r'style="([^"]*?)"', style_replacer, html)
    html = re.sub(r"style='([^']*?)'", style_replacer, html)

    # Remove comments
    html = re.sub(r'<!--.*?-->', '', html, flags=re.DOTALL)

    return html

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python convert_to_jsx.py <input_html_file> <output_tsx_file>")
        sys.exit(1)
        
    input_file = sys.argv[1]
    output_file = sys.argv[2]
    
    with open(input_file, 'r', encoding='utf-8') as f:
        html_content = f.read()

    jsx_content = convert_html_to_jsx(html_content)

    # Final JSX wrapper for a page
    component_name = os.path.basename(output_file).replace('.tsx', '').replace('.jsx', '')
    
    component = f"""import React from 'react';

const {component_name} = () => {{
    return (
        <>
            {jsx_content}
        </>
    );
}};

export default {component_name};
"""

    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(component)

    print(f"Generated {output_file}")
