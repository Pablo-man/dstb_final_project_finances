from typing import Optional
from pydantic import BaseModel

class Beneficiary(BaseModel):
        id: Optional[int] = None
        name: str
        description: str