#!/usr/bin/env python3
# This file was automatically generated
# VERSION = 1.2

import requests
import sys
from typing import List


URL = "https://api.coingecko.com/api/v3/simple/price?ids=aura-network&vs_currencies=usd"
HEADERS = {}

def main() -> str:
    try:
        pxs = requests.get(URL, headers=HEADERS).json()
        return pxs['aura-network']['usd']
    except Exception as e:
        raise e

if __name__ == "__main__":
    try:
        print(main())
    except Exception as e:
        print(str(e), file=sys.stderr)
        sys.exit(1)