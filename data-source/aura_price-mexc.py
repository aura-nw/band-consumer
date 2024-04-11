#!/usr/bin/env python3
# This file was automatically generated
# VERSION = 1.2

import requests
import sys
from typing import List


URL = "https://api.mexc.com/api/v3/avgPrice"
HEADERS = {
    'Accepts': 'application/json',
}
PARAMS = {
    'symbol': 'AURAUSDT'
}

def main(symbols: List[str]) -> str:
    try:
        pxs = requests.get(URL, headers=HEADERS, params=PARAMS).json()
        return pxs['price']
    except Exception as e:
        raise e

if __name__ == "__main__":
    try:
        print(main(sys.argv[1:]))
    except Exception as e:
        print(str(e), file=sys.stderr)
        sys.exit(1)