#!/usr/bin/env python3
# This file was automatically generated
# VERSION = 1.2

import requests
import sys
from typing import List


URL = "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest"
HEADERS = {
    'Accepts': 'application/json',
    'X-CMC_PRO_API_KEY': '505d9c94-1e7a-4880-8881-65cb6c8baae7',
}
PARAMS = {
    'id': '20326'
}

def main() -> str:
    try:
        pxs = requests.get(URL, headers=HEADERS, params=PARAMS).json()
        return pxs['data']['20326']['quote']['USD']['price']
    except Exception as e:
        raise e

if __name__ == "__main__":
    try:
        print(main(sys.argv[1:]))
    except Exception as e:
        print(str(e), file=sys.stderr)
        sys.exit(1)