from typing import Optional
from pydantic import BaseModel

class Beneficiary(BaseModel):
        id: Optional[str] = None
        name: str
        description: str