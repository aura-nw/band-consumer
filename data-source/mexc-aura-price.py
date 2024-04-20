#!/usr/bin/env python3
# This file was automatically generated
# VERSION = 1.2

import requests
import sys
from typing import List


URL = "https://aura-price-api.euphoria.aura.network/price"
HEADERS = {
    'Accepts': 'application/json',
}
PARAMS = {
    "source": "mexc"
}

def main() -> str:
    try:
        pxs = requests.get(URL, headers=HEADERS, params=PARAMS).json()
        return "Price: " + pxs['price'] + " - Timestamp: " + pxs['timestamp']
    except Exception as e:
        raise e

if __name__ == "__main__":
    try:
        print(main())
    except Exception as e:
        print(str(e), file=sys.stderr)
        sys.exit(1)