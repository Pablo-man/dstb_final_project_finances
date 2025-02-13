from fastapi import APIRouter, Response, status
from config.db import conn
from models.beneficiary import beneficiaries
from schemas.beneficiary import Beneficiary
from typing import List
from starlette.status import HTTP_204_NO_CONTENT
from sqlalchemy import func, select, insert


beneficiary = APIRouter()

@beneficiary.put("/{id}", response_model=Beneficiary, tags=["beneficiaries"])
def get_beneficiary(id: str, ben: Beneficiary):
    conn.execute(beneficiaries.update().values(name= ben.name, description= ben.description).where(beneficiaries.c.id == id))
    result = conn.execute(beneficiaries.select().where(beneficiaries.c.id == id)).first()
    return dict(result._mapping)